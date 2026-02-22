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
import { ChevronRight, Home } from 'lucide-react';
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

export async function generateStaticParams() {
  return teams.map(team => ({ slug: team.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) return { title: 'Team Not Found' };
  
  return {
    title: `${team.name} | Uncommon Studio AI Tools`,
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">Home</span>
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{team.name}</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{team.name}</h1>
        <p className="text-lg text-muted-foreground">
          {teamDescriptions[slug] || `AI implementation solutions for the ${team.name}`}
        </p>
        <div className="flex items-center gap-2">
          <Badge>{team.solutionCount} tools</Badge>
          <Badge variant="outline">Claude Projects, Claude Skills & Cowork</Badge>
        </div>
      </div>

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
  );
}
