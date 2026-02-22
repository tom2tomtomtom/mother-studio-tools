import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import pool from '@/lib/db';

const VALID_CATEGORIES = [
  'strategy', 'content', 'creative', 'media', 'client',
  'operations', 'analytics', 'internal', 'specialized', 'other',
] as const;

const PublishSchema = z.object({
  content: z.string().min(100, 'Skill content is too short'),
  category: z.enum(VALID_CATEGORIES).optional(),
});

function parseFrontmatter(content: string): { name: string; description: string } | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const fm = match[1];
  const name = fm.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = fm.match(/^description:\s*(.+)$/m)?.[1]?.trim();

  if (!name || !description) return null;
  return { name, description };
}

function toValidSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 64);
}

// Check ASCII-only
function isAscii(str: string): boolean {
  return /^[\x00-\x7F]*$/.test(str);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const parsed = PublishSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Invalid input.' }, { status: 400 });
  }

  const { content, category: clientCategory } = parsed.data;

  if (!isAscii(content)) {
    return NextResponse.json({ error: 'Skill content must be ASCII-only (no emojis or special characters).' }, { status: 400 });
  }

  const frontmatter = parseFrontmatter(content);
  if (!frontmatter) {
    return NextResponse.json({ error: 'Invalid frontmatter. Must include name and description.' }, { status: 400 });
  }

  const category = clientCategory || 'other';

  if (frontmatter.description.length > 1024) {
    return NextResponse.json({ error: 'Description must be under 1024 characters.' }, { status: 400 });
  }

  const slug = toValidSlug(frontmatter.name);
  if (!slug) {
    return NextResponse.json({ error: 'Could not generate a valid slug from the skill name.' }, { status: 400 });
  }

  try {
    const result = await pool.query(
      `INSERT INTO community_skills (slug, name, description, category, content)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (slug) DO NOTHING
       RETURNING id, slug, name, description, category, created_at`,
      [slug, frontmatter.name, frontmatter.description, category, content]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'A skill with this name already exists.' }, { status: 409 });
    }

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Publish error:', error);
    }
    return NextResponse.json({ error: 'Failed to publish skill. Try again.' }, { status: 500 });
  }
}
