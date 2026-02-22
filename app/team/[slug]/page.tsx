export const revalidate = 3600;

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { teams, getTeamBySlug, getPromptsByTeam } from '@/lib/prompts';
import { teamGuides } from '@/lib/guides';
import { FilteredPromptList } from '@/components/filtered-prompt-list';
import { StrategyGuide } from '@/components/strategy-guide';
import { TeamGuide } from '@/components/team-guide';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

const teamDescriptions: Record<string, string> = {
  'creative': 'Develop campaign concepts, brainstorm ideas, and craft compelling creative work with AI-powered tools.',
  'strategy': 'Build brand positioning, competitive analysis, and strategic frameworks for client campaigns.',
  'account-management': 'Strengthen client relationships with AI-assisted briefs, status reports, and communication tools.',
  'production': 'Streamline production workflows from spec sheets to vendor briefs and asset management.',
  'design': 'Accelerate design workflows with AI-powered mood boards, layout concepts, and visual direction.',
  'digital': 'Plan and optimize digital campaigns, SEO, paid media, and performance marketing.',
  'copywriting': 'Write headlines, scripts, taglines, and long-form copy with AI-assisted drafting tools.',
  'new-business': 'Win new business with AI-assisted proposals, pitch decks, and RFP responses.',
  'project-management': 'Keep projects on track with AI-powered timelines, resource plans, and status updates.',
  'studio-operations': 'Optimize studio workflows, capacity planning, and operational processes.',
  'finance': 'Manage invoices, expenses, budgets, and financial compliance with AI-powered analysis and automation tools.',
};

const TEAM_COLORS: Record<string, string> = {
  'strategy': 'bg-[#6B2B1A]',
  'creative': 'bg-[#C8102E]',
  'production': 'bg-[#1A4A5C]',
  'design': 'bg-[#003DA5]',
  'copywriting': 'bg-[#7A7A2A]',
  'digital': 'bg-[#7A5A18]',
  'account-management': 'bg-[#3D1A20]',
  'project-management': 'bg-[#C8102E]',
  'studio-operations': 'bg-[#1A4A5C]',
  'new-business': 'bg-[#003DA5]',
  'finance': 'bg-[#7A5A18]',
};

export async function generateStaticParams() {
  return teams.map(team => ({ slug: team.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) return { title: 'Team Not Found' };
  
  return {
    title: `${team.name} | Mother AI Tools`,
    description: teamDescriptions[slug] || `AI tools for the ${team.name}`,
  };
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  
  if (!team) {
    notFound();
  }

  const teamPrompts = getPromptsByTeam(slug);

  // Load guide content for this team
  const guides = (teamGuides[slug] || []).map((entry) => {
    const guidePath = path.join(process.cwd(), 'content', 'guides', entry.file);
    try {
      const content = fs.readFileSync(guidePath, 'utf-8');
      return { ...entry, content };
    } catch {
      return null;
    }
  }).filter((g): g is NonNullable<typeof g> => g !== null);

  const bgColor = TEAM_COLORS[slug] || 'bg-[#1A1A2E]';

  return (
    <div>
      {/* ===== HEADER — Full-bleed colored panel ===== */}
      <section className={`-mx-4 md:-mx-6 -mt-4 md:-mt-6 px-4 md:px-6 ${bgColor} pt-10 pb-10 lg:pt-14 lg:pb-12 mb-8`}>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
            {team.name.replace(' Team', '')}
          </h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg">
            {teamDescriptions[slug] || `AI implementation solutions for the ${team.name}`}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-sm font-medium text-white">
              {team.solutionCount} tools
            </span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Team Guides */}
        {slug === 'strategy' && <StrategyGuide />}
        {guides.map((guide) => (
          <TeamGuide
            key={guide.file}
            title={guide.title}
            description={guide.description}
            content={guide.content}
          />
        ))}

        {/* Prompts with Filter */}
        <FilteredPromptList prompts={teamPrompts} />
      </div>
    </div>
  );
}
