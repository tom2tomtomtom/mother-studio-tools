export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Lightbulb,
  Workflow,
  Search,
  FileText,
  Bot,
  Mic,
  ArrowRight,
  Users,
  Sparkles,
  Video,
  Cog
} from 'lucide-react';

export default function MultiToolWorkflowsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Multi-Tool Workflows</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">25 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
            <Workflow className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Multi-Tool Workflows</h1>
            <p className="text-muted-foreground">Orchestrate NotebookLM + Claude + n8n for end-to-end pipelines</p>
          </div>
        </div>
      </div>

      {/* Why Multi-Tool */}
      <Card className="bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">Why Multi-Tool?</p>
              <p className="text-muted-foreground mt-1">
                No single AI tool does everything well. Claude writes brilliantly and now has Deep Research for web searches.
                NotebookLM synthesizes documents but doesn&apos;t automate. n8n automates workflows but doesn&apos;t create content.
                The real power comes from <strong>chaining tools together</strong>, using each where it excels.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Synthetic Research Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-green-500" />
            The Synthetic Research Pipeline
          </CardTitle>
          <CardDescription>
            The flagship workflow: from raw research to strategic deliverable
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">1</span>
              Claude Deep Research
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside ml-8">
              <li>Use Claude&apos;s Deep Research mode for comprehensive web research</li>
              <li>Run multiple queries across your research topic</li>
              <li>Export findings as structured markdown</li>
              <li>Gather source documents, reports, and data</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">2</span>
              NotebookLM Synthesis
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside ml-8">
              <li>Upload research exports and source documents</li>
              <li>Generate an Audio Overview for passive absorption</li>
              <li>Ask cross-referencing questions to find patterns</li>
              <li>Identify contradictions and gaps across sources</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">3</span>
              Claude Strategic Analysis
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside ml-8">
              <li>Upload synthesized research to a Claude Project</li>
              <li>Add brand guidelines and client context</li>
              <li>Build the final deliverable: deck, report, or strategy doc</li>
              <li>Use Skills for repeatable output formats</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5">
            <p className="font-medium text-sm">When to use this pipeline</p>
            <p className="text-sm text-muted-foreground mt-1">
              Pitch research, competitive analysis, trend reports, category deep-dives, and any project
              where you need comprehensive, well-sourced strategic thinking.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The Content Production Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-green-500" />
            The Content Production Pipeline
          </CardTitle>
          <CardDescription>
            From messaging to multi-format content at scale
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">1</span>
              Claude Project — Develop Messaging
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Set up a Project with brand guidelines, tone of voice, and campaign brief. Develop core messaging,
              headlines, and copy variations.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">2</span>
              Cowork — Generate Visual Concepts
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Use Cowork with image generation to create concept visuals, mood boards, and asset variations
              based on the approved messaging.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">3</span>
              Runway / Veo 3 — Create Video Content
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Animate approved concepts into video content. Use Runway for precision motion control
              or Veo 3 for dialogue and sound effects.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">4</span>
              n8n — Automate Distribution
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Set up automated workflows for content distribution, scheduling, and performance tracking
              across channels.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5">
            <p className="font-medium text-sm">When to use this pipeline</p>
            <p className="text-sm text-muted-foreground mt-1">
              Campaign content creation, social media programs, always-on content production,
              and any project requiring multi-format output.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The Client Intelligence Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            The Client Intelligence Pipeline
          </CardTitle>
          <CardDescription>
            Build deep client knowledge that compounds over time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">1</span>
              Claude Deep Research — Client Context
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Use Claude&apos;s Deep Research mode to research the client&apos;s industry, competitors, recent news, and market position.
              Export findings as structured markdown.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">2</span>
              Claude Project — Build Knowledge Base
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Create a dedicated Claude Project for the client. Upload research, past work,
              brand guidelines, and meeting notes. This becomes your institutional memory.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">3</span>
              Skills — Create Reusable Templates
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Build a client briefing Skill that generates consistent status updates, QBR decks,
              or onboarding documents using the Project context.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5">
            <p className="font-medium text-sm">When to use this pipeline</p>
            <p className="text-sm text-muted-foreground mt-1">
              New client onboarding, pitch preparation, quarterly business reviews,
              and building long-term client relationships.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The Automation Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cog className="h-5 w-5 text-green-500" />
            The Automation Pipeline
          </CardTitle>
          <CardDescription>
            Design, build, and monitor automated workflows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">1</span>
              Design in Claude
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Map out the workflow logic with Claude. Define triggers, conditions, actions,
              and error handling before building anything.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">2</span>
              Build in n8n
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Create the automated workflow in n8n. Use Claude&apos;s design as a blueprint.
              Connect to the necessary services and test with sample data.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold">3</span>
              Monitor in Claude
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Review workflow outputs periodically. Upload logs to Claude to identify
              optimization opportunities and catch edge cases.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5">
            <p className="font-medium text-sm">When to use this pipeline</p>
            <p className="text-sm text-muted-foreground mt-1">
              Reporting automation, status updates, asset processing, content distribution,
              and any recurring workflow that takes more than 15 minutes manually.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tips for Success */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            Tips for Success
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
            <div>
              <p className="font-medium">Start simple</p>
              <p className="text-sm text-muted-foreground">Master 2-tool workflows before attempting 4-tool pipelines. Complexity compounds fast.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
            <div>
              <p className="font-medium">Document your pipelines</p>
              <p className="text-sm text-muted-foreground">Write down what works. A documented pipeline can be shared with your entire team.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
            <div>
              <p className="font-medium">Share with the team</p>
              <p className="text-sm text-muted-foreground">Once a pipeline works, teach it to others. Individual productivity gains multiply at team scale.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
            <div>
              <p className="font-medium">Measure time saved</p>
              <p className="text-sm text-muted-foreground">Track how long tasks took before and after. This data justifies tool investments and shows ROI.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Adding new tools to your stack?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to evaluate, approve, and govern AI tools responsibly.
              </p>
            </div>
            <Link
              href="/guides/tool-governance"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Tool Governance
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
