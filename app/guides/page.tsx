import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  BookOpen,
  Settings,
  Terminal,
  Bot,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Chrome,
  Plug,
  FolderOpen,
  Puzzle,
  Mic,
  Workflow,
  Video,
  AudioLines,
  Presentation,
  Brain,
  GraduationCap,
  Shield
} from 'lucide-react';

// Claude Enterprise
const claudeGuides = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Claude',
    description: 'Your complete beginner\'s guide — login, connectors, modes, and first conversations',
    icon: GraduationCap,
    difficulty: 'Beginner',
    time: '15 min',
    lastVerified: 'Feb 2026',
  },
  {
    slug: 'projects',
    title: 'The Art of Project Setup',
    description: 'Create context containers that make Claude your specialized consultant',
    icon: FolderOpen,
    difficulty: 'Beginner',
    time: '15 min',
  },
  {
    slug: 'mcp-setup',
    title: 'MCP Configuration',
    description: 'Connect Claude to Slack, Notion, Google Drive, and other tools using MCP servers',
    icon: Settings,
    difficulty: 'Beginner',
    time: '10 min',
    lastVerified: 'Feb 2026',
  },
  {
    slug: 'claude-code',
    title: 'Claude Code',
    description: 'An AI agent that lives in your terminal and works directly with your files',
    icon: Terminal,
    difficulty: 'Beginner to Advanced',
    time: '50 min',
  },
  {
    slug: 'artifacts',
    title: 'Mastering Artifacts',
    description: 'Build interactive apps, visualize data, and manage complex documents',
    icon: Layers,
    difficulty: 'Beginner',
    time: '15 min',
  },
  {
    slug: 'deep-research',
    title: 'Deep Research & Synthesis',
    description: 'Run research missions that combine web searches with local documents',
    icon: Search,
    difficulty: 'Intermediate',
    time: '15 min',
  },
  {
    slug: 'custom-skills',
    title: 'Custom Skills',
    description: 'Install repeatable instructions so you never paste the same context twice',
    icon: Sparkles,
    difficulty: 'Intermediate',
    time: '20 min',
    lastVerified: 'Feb 2026',
  },
  {
    slug: 'connectors',
    title: 'Connectors & Integrations',
    description: 'Connect Claude to Google Workspace, GitHub, and any SaaS tool via MCP',
    icon: Plug,
    difficulty: 'Intermediate',
    time: '20 min',
    lastVerified: 'Feb 2026',
  },
  {
    slug: 'chrome-extension',
    title: 'Claude in Chrome',
    description: 'Use Claude directly on any webpage — summarize articles, fill forms, and capture research',
    icon: Chrome,
    difficulty: 'Intermediate',
    time: '15 min',
  },
  {
    slug: 'power-hacks',
    title: 'Power Hacks & Optimization',
    description: 'Advanced techniques: CLI shortcuts, memory hygiene, meta-configuration, and cost control',
    icon: Zap,
    difficulty: 'Advanced',
    time: '25 min',
  },
];

// Google
const googleGuides = [
  {
    slug: 'notebooklm',
    title: 'NotebookLM',
    description: 'Transform documents into AI-powered study guides with Audio Overviews',
    icon: Mic,
    difficulty: 'Beginner',
    time: '20 min',
  },
  {
    slug: 'google-ai-suite',
    title: 'Google AI Suite',
    description: 'Gemini 2.5 Pro, Imagen 4, Veo 3, Sheets AI, and Gmail AI for creative workflows',
    icon: Sparkles,
    difficulty: 'Beginner to Intermediate',
    time: '25 min',
  },
];

// n8n
const n8nGuides = [
  {
    slug: 'n8n',
    title: 'n8n Workflow Automation',
    description: 'Build AI-powered automations with code-level flexibility and self-hosting',
    icon: Workflow,
    difficulty: 'Intermediate',
    time: '25 min',
  },
];

// Runway Enterprise
const runwayGuides = [
  {
    slug: 'runway',
    title: 'Runway Video Generation',
    description: 'Create AI video from text, animate images, and use motion controls',
    icon: Video,
    difficulty: 'Intermediate',
    time: '20 min',
  },
];

// ElevenLabs
const elevenLabsGuides = [
  {
    slug: 'elevenlabs',
    title: 'ElevenLabs Voice AI',
    description: 'Generate lifelike speech, clone voices, and dub content in 70+ languages',
    icon: AudioLines,
    difficulty: 'Beginner',
    time: '15 min',
  },
];

// AIDEN Studio
const aidenGuides = [
  {
    slug: 'aiden-studio',
    title: 'AIDEN Studio',
    description: 'AI Creative Director for campaign strategy and asset creation',
    icon: Brain,
    difficulty: 'Intermediate',
    time: '20 min',
  },
];

// Gamma
const gammaGuides = [
  {
    slug: 'gamma',
    title: 'Gamma Presentations',
    description: 'AI-powered presentations that design themselves from a single prompt',
    icon: Presentation,
    difficulty: 'Beginner',
    time: '15 min',
  },
];

// Workflows & Governance
const workflowGuides = [
  {
    slug: 'model-selection',
    title: 'AI Model Selection Guide',
    description: 'Which AI tool for which task — a decision framework for choosing the right model',
    icon: Brain,
    difficulty: 'Beginner',
    time: '15 min',
  },
  {
    slug: 'multi-tool-workflows',
    title: 'Multi-Tool Workflows',
    description: 'Orchestrate NotebookLM + Claude + n8n for research-to-deliverable pipelines',
    icon: Workflow,
    difficulty: 'Intermediate',
    time: '25 min',
  },
  {
    slug: 'tool-governance',
    title: 'AI Tool Governance',
    description: 'Legal, compliance, and evaluation framework for adopting new AI tools responsibly',
    icon: Settings,
    difficulty: 'Intermediate',
    time: '20 min',
  },
];

interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  difficulty: string;
  time: string;
  lastVerified?: string;
}

interface ToolSection {
  title: string;
  guides: Guide[];
}

const sections: ToolSection[] = [
  { title: 'Claude Enterprise', guides: claudeGuides },
  { title: 'Google', guides: googleGuides },
  { title: 'n8n', guides: n8nGuides },
  { title: 'Runway Enterprise', guides: runwayGuides },
  { title: 'ElevenLabs', guides: elevenLabsGuides },
  { title: 'AIDEN Studio', guides: aidenGuides },
  { title: 'Gamma', guides: gammaGuides },
  { title: 'Workflows & Governance', guides: workflowGuides },
];

function GuideCard({ guide }: { guide: Guide }) {
  const Icon = guide.icon;
  return (
    <Link href={`/guides/${guide.slug}`}>
      <Card className="hover:border-foreground/20 transition-colors duration-200 cursor-pointer group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">
                  {guide.title}
                </CardTitle>
                <CardDescription className="mt-1">
                  {guide.description}
                </CardDescription>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex gap-2">
            <Badge variant="secondary">{guide.difficulty}</Badge>
            <Badge variant="outline">{guide.time}</Badge>
            {guide.lastVerified && (
              <Badge variant="outline" className="text-xs text-muted-foreground">Verified {guide.lastVerified}</Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function GuidesPage() {
  const totalGuides = sections.reduce((acc, section) => acc + section.guides.length, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Guides</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted text-foreground">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Getting started guides</h1>
            <p className="text-muted-foreground">{totalGuides} tutorials across {sections.length} AI platforms</p>
          </div>
        </div>
      </div>

      {/* Intro Card */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            These guides are designed for everyone on the team. Each one walks you through a specific AI tool or feature
            with plain-English explanations and copy-paste commands. No coding experience required.
          </p>
        </CardContent>
      </Card>

      {/* Tool Sections */}
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <Badge variant="outline" className="text-xs">
              {section.guides.length} {section.guides.length === 1 ? 'guide' : 'guides'}
            </Badge>
          </div>
          <div className="grid gap-4">
            {section.guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      ))}

      {/* Quick Tips Link */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Looking for quick tips instead?</h3>
              <p className="text-sm text-muted-foreground">
                Check out our collection of power-user techniques and shortcuts.
              </p>
            </div>
            <Link
              href="/tips"
              className="flex items-center gap-1 text-foreground hover:underline font-medium"
            >
              Expert Tips
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
