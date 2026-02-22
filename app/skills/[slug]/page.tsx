export const revalidate = 3600;

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Download, Lock } from 'lucide-react';
import { SkillMarkdown } from './skill-markdown';

interface Props {
  params: Promise<{ slug: string }>;
}

const SKILL_META: Record<string, { displayName: string; description: string; preloaded: boolean }> = {
  'meeting-notes-actions': { displayName: 'Contact Reports', description: 'Structured meeting summaries with action items, owners, and deadlines', preloaded: true },
  'timeline-generator': { displayName: 'Dynamic Timelines', description: 'Project timelines with phases, milestones, dependencies, and buffer', preloaded: true },
  'competitor-research': { displayName: 'Rapid Research Tool', description: 'Competitor benchmarking with feature gaps and improvement recommendations', preloaded: false },
  'scope-of-work-writer': { displayName: 'Scope Writer', description: 'Detailed SOWs with deliverables, timelines, and sign-off terms', preloaded: true },
  'brand-voice-enforcer': { displayName: 'Brand Guidelines Bot', description: 'Check copy against brand voice for tone, terminology, and consistency', preloaded: true },
  'media-strategy-planner': { displayName: 'Media Plan Translator', description: 'PESO media mix with channel rationale and budget split recommendations', preloaded: false },
};

function parseFrontmatter(content: string): { name: string; description: string; body: string } {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { name: '', description: '', body: content };

  const frontmatter = match[1];
  const body = match[2];

  const nameMatch = frontmatter.match(/^name:\s*(.+)$/m);
  const descMatch = frontmatter.match(/^description:\s*(.+)$/m);

  return {
    name: nameMatch?.[1]?.trim() || '',
    description: descMatch?.[1]?.trim() || '',
    body,
  };
}

export async function generateStaticParams() {
  const skillsDir = path.join(process.cwd(), 'public', 'skills');
  const dirs = fs.readdirSync(skillsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => ({ slug: d.name }));
  return dirs;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const meta = SKILL_META[slug];

  if (meta) {
    return {
      title: `${meta.displayName} | Mother AI Tools`,
      description: meta.description,
    };
  }

  // For non-active skills, try reading frontmatter
  const filePath = path.join(process.cwd(), 'public', 'skills', slug, 'SKILL.md');
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { name, description } = parseFrontmatter(raw);
    return {
      title: `${name || slug} | Mother AI Tools`,
      description: description || `AI skill for ${slug}`,
    };
  } catch {
    return { title: 'Skill Not Found' };
  }
}

export default async function SkillDetailPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'public', 'skills', slug, 'SKILL.md');
  let raw: string;
  try {
    raw = fs.readFileSync(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const { name: fmName, description: fmDesc, body } = parseFrontmatter(raw);
  const meta = SKILL_META[slug];
  const isUnlocked = !!meta;

  const displayName = meta?.displayName || fmName || slug;
  const description = meta?.description || fmDesc;

  return (
    <div>
      {/* ===== HEADER — Full-bleed teal panel ===== */}
      <section className="-mx-4 md:-mx-6 -mt-4 md:-mt-6 px-4 md:px-6 bg-[#1A4A5C] pt-10 pb-10 lg:pt-14 lg:pb-12 mb-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
            {displayName}
          </h1>
          {description && (
            <p className="text-white/60 mt-4 max-w-xl text-lg">
              {description}
            </p>
          )}
          <div className="mt-6">
            {isUnlocked ? (
              <SkillAction slug={slug} preloaded={meta.preloaded} />
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white/60 text-sm">
                <Lock className="h-4 w-4" />
                Contact to unlock this skill
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== MARKDOWN CONTENT ===== */}
      <div className="max-w-4xl mx-auto">
        <div className="skill-prose">
          <SkillMarkdown content={body} />
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <div className="mt-12 mb-8 pt-8 border-t border-border/50">
          {isUnlocked ? (
            <SkillAction slug={slug} preloaded={meta.preloaded} />
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted text-muted-foreground text-sm">
              <Lock className="h-4 w-4" />
              Contact to unlock this skill
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillAction({ slug, preloaded }: { slug: string; preloaded: boolean }) {
  if (preloaded) {
    return <CopyButton slug={slug} />;
  }

  return (
    <a
      href={`/skills/${slug}.zip`}
      download
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#1A4A5C] font-medium text-sm hover:bg-white/90 transition-colors"
    >
      <Download className="h-4 w-4" />
      Download Skill
    </a>
  );
}

function CopyButton({ slug }: { slug: string }) {
  return <CopyButtonClient slug={slug} />;
}

import { CopyButtonClient } from './copy-button';
