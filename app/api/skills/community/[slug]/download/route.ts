import { NextRequest } from 'next/server';
import pool from '@/lib/db';
import JSZip from 'jszip';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const result = await pool.query(
      'SELECT name, content FROM community_skills WHERE slug = $1',
      [slug]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Skill not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, content } = result.rows[0];

    // Increment download counter (fire and forget)
    pool.query('UPDATE community_skills SET downloads = downloads + 1 WHERE slug = $1', [slug]).catch(() => {});

    // Generate zip with Unix format and deflate compression (matches Claude's expected format)
    const zip = new JSZip();
    const folder = zip.folder(slug)!;
    folder.file('SKILL.md', content, {
      unixPermissions: '644',
    });

    const zipBuffer = await zip.generateAsync({
      type: 'arraybuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
      platform: 'UNIX',
    });

    return new Response(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${slug}.zip"`,
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Download error:', error);
    }
    return new Response(JSON.stringify({ error: 'Failed to download skill.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
