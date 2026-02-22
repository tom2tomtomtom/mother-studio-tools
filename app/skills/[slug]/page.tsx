export const revalidate = 3600;

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Lock, MessageSquare, FileInput, FileOutput, Lightbulb, Zap } from 'lucide-react';
import { SkillMarkdown } from './skill-markdown';
import { CopyButtonClient } from './copy-button';
import { CollapsibleReference } from './collapsible-reference';

interface Props {
  params: Promise<{ slug: string }>;
}

interface SkillGuide {
  displayName: string;
  description: string;
  preloaded: boolean;
  whatItDoes: string;
  howToUse: string[];
  whatToProvide: string[];
  whatYouGet: string[];
  tips: string[];
}

const SKILL_GUIDES: Record<string, SkillGuide> = {
  'meeting-notes-actions': {
    displayName: 'Contact Reports',
    description: 'Turn meeting recordings and rough notes into polished, structured contact reports',
    preloaded: true,
    whatItDoes: 'Takes raw meeting transcripts, recordings, or rough notes and transforms them into professional contact reports with clear decisions, action items, owners, and deadlines. Works for internal WIPs, client meetings, brainstorms, and strategy sessions.',
    howToUse: [
      'Open Claude and type: Use the meeting-notes-actions skill',
      'Paste your meeting transcript (from Otter.ai, Google Meet, Teams, Zoom, or manual notes)',
      'Tell Claude the meeting type: "This was a client status meeting" or "Internal creative review"',
      'Claude will produce a structured contact report ready to send',
    ],
    whatToProvide: [
      'Meeting transcript or recording notes (the messier the better — that\'s the point)',
      'Who attended and who was absent',
      'Whether it\'s for internal or client distribution',
      'Any specific format preferences (email recap, shared doc, project tool)',
    ],
    whatYouGet: [
      'Structured report with purpose, attendees, and date',
      'Key decisions clearly separated from discussion',
      'Action items table with owner, task, and deadline for each',
      'Parking lot items and next meeting agenda',
      'Client-ready email format (if external)',
    ],
    tips: [
      'Paste the full raw transcript — don\'t clean it up first, the skill handles that',
      'Mention if any decisions were made verbally that might not be obvious from notes',
      'For recurring meetings, ask Claude to compare with last week\'s actions',
      'Use in a Claude Project with your team\'s meeting template for consistent formatting',
    ],
  },
  'timeline-generator': {
    displayName: 'Dynamic Timelines',
    description: 'Build detailed project timelines with phases, milestones, dependencies, and realistic buffer',
    preloaded: true,
    whatItDoes: 'Creates professional project timelines from a brief or scope description. Produces phase breakdowns, milestone dates, dependency chains, critical path analysis, review gates, and buffer allocation — everything a PM needs to keep a project on track.',
    howToUse: [
      'Open Claude and type: Use the timeline-generator skill',
      'Describe your project: what it is, roughly how long, and any fixed dates',
      'Claude will ask clarifying questions about scope, team size, and review cycles',
      'You\'ll get a complete timeline with Gantt chart, milestones, and risk flags',
    ],
    whatToProvide: [
      'Project name and brief description',
      'Launch date or desired start date (or both)',
      'Key deliverables or phases you already know about',
      'Number of client review rounds expected',
      'Any fixed dates (events, board meetings, seasonal deadlines)',
    ],
    whatYouGet: [
      'Phase-by-phase breakdown with start/end dates',
      'Visual text-based Gantt chart',
      'Milestone list with target dates',
      'Critical path identification',
      'Built-in buffer time and review gates',
      'Risk flags for tight spots in the schedule',
    ],
    tips: [
      'Include the launch date and work backwards — the skill excels at reverse planning',
      'Be honest about client review cycles: "They usually take a week to respond"',
      'Ask for "simple", "moderate", or "complex" project templates as a starting point',
      'Request a table format if you need to paste into a project management tool',
    ],
  },
  'competitor-research': {
    displayName: 'Rapid Research Tool',
    description: 'Research competitors and get actionable improvement recommendations in minutes',
    preloaded: false,
    whatItDoes: 'Researches competitor websites, products, and strategies then delivers a structured competitive analysis with feature gap identification, UX comparison, and prioritized improvement recommendations. Turns hours of manual research into a focused brief.',
    howToUse: [
      'Download the skill ZIP using the button below',
      'Create a Claude Project and add the skill files to the project knowledge',
      'In the project chat, name your competitors and describe your product',
      'Claude will build a structured competitive analysis with actionable recommendations',
    ],
    whatToProvide: [
      'Your product or app name and URL',
      'Competitor names and URLs (or ask Claude to identify your top competitors)',
      'Focus area: full analysis, features only, UX audit, pricing comparison, or messaging',
      'Context: "We\'re planning Q2 roadmap" or "Preparing a competitive pitch"',
    ],
    whatYouGet: [
      'Competitor profiles with value proposition, target audience, and business model',
      'Side-by-side feature comparison table',
      'Feature gap analysis: what they have that you don\'t (and vice versa)',
      'UX and messaging audit with specific observations',
      'Prioritized recommendations: quick wins vs. strategic investments',
    ],
    tips: [
      'Always share your own product first — recommendations need both sides to compare',
      'Ask for a specific focus if you don\'t need a full analysis',
      'Use with web search enabled in Claude for the most current competitor data',
      'Great for pitch prep: "Focus on what makes us better than [competitor]"',
    ],
  },
  'scope-of-work-writer': {
    displayName: 'Scope Writer',
    description: 'Generate professional SOWs from project briefs — complete with deliverables, timelines, and legal terms',
    preloaded: true,
    whatItDoes: 'Produces comprehensive scopes of work from a project description or brief. Covers everything: deliverables table with formats and quantities, phased timeline, RACI matrix, assumptions, exclusions, revision caps, sign-off process, and payment milestones. Built to protect both agency and client.',
    howToUse: [
      'Open Claude and type: Use the scope-of-work-writer skill',
      'Describe the project: client, deliverables, rough timeline, and budget range',
      'Claude will produce a complete SOW with all sections filled in',
      'Review, adjust specifics, and send to client or legal for sign-off',
    ],
    whatToProvide: [
      'Client name and project name',
      'What you\'re delivering (even a rough list works)',
      'Approximate timeline and any hard deadlines',
      'Budget range or fee structure (fixed, retainer, phased)',
      'Known constraints: revision limits, legal requirements, access needed',
    ],
    whatYouGet: [
      'Full SOW document with project overview and objectives',
      'Deliverables table with format, quantity, and owner for each item',
      'Timeline with phases, milestones, and buffer',
      'RACI responsibility matrix',
      'Assumptions, exclusions, and revision round definitions',
      'Sign-off process and payment milestone structure',
    ],
    tips: [
      'The more specific you are about deliverables, the better the exclusions section will be',
      'Mention the project type: "campaign launch", "brand refresh", "retainer" — each has a different template',
      'Ask Claude to flag anything you might be forgetting',
      'Use this alongside the Timeline Generator for a matching timeline',
    ],
  },
  'brand-voice-enforcer': {
    displayName: 'Brand Guidelines Bot',
    description: 'Check any copy against brand voice guidelines for tone, terminology, and consistency',
    preloaded: true,
    whatItDoes: 'Reviews copy against a brand\'s documented voice guidelines and flags inconsistencies in tone, terminology, style, and messaging. Produces a structured review with specific fixes and an approval readiness assessment. Essential for maintaining brand consistency across teams and channels.',
    howToUse: [
      'Open Claude and type: Use the brand-voice-enforcer skill',
      'Paste the copy you want reviewed',
      'Paste or upload the brand voice guidelines (or describe the brand\'s tone)',
      'Claude will return a detailed review with issues flagged and specific fixes',
    ],
    whatToProvide: [
      'The copy to review (email, social post, website copy, ad copy, etc.)',
      'Brand voice guidelines document (PDF, doc, or paste the key rules)',
      'The channel this is for (social, email, website, print — tone flexes by channel)',
      'Any specific concerns: "Does this sound too casual?" or "Check the product names"',
    ],
    whatYouGet: [
      'Overall assessment: on-brand, minor issues, or significant issues',
      'Critical issues table with specific fixes (must-fix before approval)',
      'Minor issues with suggested improvements',
      'Terminology check against brand-specific terms',
      'Approval readiness and confidence level',
    ],
    tips: [
      'Upload brand guidelines to a Claude Project so you don\'t have to paste them every time',
      'Include "instead of / say" examples in your guidelines for best results',
      'Great for onboarding new copywriters — run their first drafts through this',
      'Ask Claude to also create a voice guide if the brand doesn\'t have one yet',
    ],
  },
  'media-strategy-planner': {
    displayName: 'Media Plan Translator',
    description: 'Plan integrated media strategies using the PESO model with channel rationale and budget splits',
    preloaded: false,
    whatItDoes: 'Builds integrated media strategies using the PESO framework (Paid, Earned, Shared, Owned). Maps audiences to channels, recommends budget allocation, creates flighting schedules, and defines measurement frameworks. Takes a campaign brief and turns it into a presentable media plan.',
    howToUse: [
      'Download the skill ZIP using the button below',
      'Create a Claude Project and add the skill files to the project knowledge',
      'Describe your campaign: objectives, audience, budget, and timeline',
      'Claude will produce a complete media strategy with channel recommendations',
    ],
    whatToProvide: [
      'Campaign brief or objectives (awareness, leads, sales, reputation)',
      'Target audience description and any segmentation',
      'Total budget or budget range',
      'Campaign timeline and any fixed dates (product launch, event, seasonal)',
      'Any channels already confirmed or excluded',
    ],
    whatYouGet: [
      'PESO channel plan with rationale for each recommendation',
      'Audience-to-channel mapping matrix',
      'Budget allocation by channel and by funnel stage',
      'Flighting schedule showing pre-launch, launch, sustain, and close phases',
      'Measurement framework with KPIs, targets, and reporting cadence',
      'Optimization triggers for in-flight budget reallocation',
    ],
    tips: [
      'Include the total budget — even a rough range helps with realistic allocations',
      'Specify the campaign type (product launch, brand awareness, lead gen) for tailored splits',
      'Ask for a "reputation/thought leadership" plan if budget is low and earned media matters most',
      'Great for client presentations: ask Claude to format as a deck-ready summary',
    ],
  },
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
  const guide = SKILL_GUIDES[slug];

  if (guide) {
    return {
      title: `${guide.displayName} | Mother AI Tools`,
      description: guide.description,
    };
  }

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
  const guide = SKILL_GUIDES[slug];
  const isUnlocked = !!guide;

  const displayName = guide?.displayName || fmName || slug;
  const description = guide?.description || fmDesc;

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
              <SkillAction slug={slug} preloaded={guide.preloaded} />
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white/60 text-sm">
                <Lock className="h-4 w-4" />
                Contact to unlock this skill
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        {/* ===== USER-FACING GUIDE (active skills only) ===== */}
        {guide && (
          <div className="space-y-8 mb-12">
            {/* What it does */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-[#1A4A5C]" />
                <h2 className="text-xl font-bold tracking-tight">What it does</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{guide.whatItDoes}</p>
            </div>

            {/* How to use */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="h-5 w-5 text-[#1A4A5C]" />
                <h2 className="text-xl font-bold tracking-tight">How to use it</h2>
              </div>
              <ol className="space-y-3">
                {guide.howToUse.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#1A4A5C] text-white text-xs font-bold">{i + 1}</span>
                    <span className="text-base text-muted-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* What to provide / What you get — side by side on desktop */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-md border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FileInput className="h-5 w-5 text-[#7A5A18]" />
                  <h3 className="text-base font-bold">What to provide</h3>
                </div>
                <ul className="space-y-2">
                  {guide.whatToProvide.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-[#7A5A18] mt-1 shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FileOutput className="h-5 w-5 text-[#7A7A2A]" />
                  <h3 className="text-base font-bold">What you get back</h3>
                </div>
                <ul className="space-y-2">
                  {guide.whatYouGet.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-[#7A7A2A] mt-1 shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-md bg-[#1A4A5C]/5 border border-[#1A4A5C]/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-[#1A4A5C]" />
                <h3 className="text-base font-bold">Tips for best results</h3>
              </div>
              <ul className="space-y-2">
                {guide.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-[#1A4A5C] mt-0.5 shrink-0">*</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ===== SKILL.MD REFERENCE ===== */}
        {guide ? (
          <CollapsibleReference>
            <div className="skill-prose">
              <SkillMarkdown content={body} />
            </div>
          </CollapsibleReference>
        ) : (
          <div className="skill-prose">
            <SkillMarkdown content={body} />
          </div>
        )}

        {/* ===== BOTTOM CTA ===== */}
        <div className="mt-12 mb-8 pt-8 border-t border-border/50">
          {isUnlocked ? (
            <SkillAction slug={slug} preloaded={guide!.preloaded} />
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
    return <CopyButtonClient slug={slug} />;
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
