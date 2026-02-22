export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Layers,
  Lightbulb,
  Code,
  FileText,
  BarChart3,
  History,
  Wrench,
  Sparkles,
  Database,
  Plug,
  Zap
} from 'lucide-react';

export default function ArtifactsPage() {
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
        <span className="text-foreground">Artifacts</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">15 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Mastering Artifacts</h1>
            <p className="text-muted-foreground">Build interactive apps, visualize data, and manage complex documents</p>
          </div>
        </div>
      </div>

      {/* What is an Artifact */}
      <Card>
        <CardHeader>
          <CardTitle>What is an Artifact?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Claude automatically generates an Artifact when content is significant (typically over 15 lines)
            and self-contained. Instead of burying code or long text inside chat bubbles, Claude opens a
            <strong> dedicated window on the right side</strong> of the screen.
          </p>
          <div>
            <p className="font-medium mb-2">Common Artifact Types:</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-start gap-2 p-3 rounded-lg border">
                <Code className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Code</p>
                  <p className="text-xs text-muted-foreground">Python, React, HTML/CSS websites</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg border">
                <FileText className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Documents</p>
                  <p className="text-xs text-muted-foreground">Markdown guides, reports, drafts</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg border">
                <BarChart3 className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Visualizations</p>
                  <p className="text-xs text-muted-foreground">SVGs, flowcharts, dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Editing Workflow */}
      <Card>
        <CardHeader>
          <CardTitle>The Editing Workflow</CardTitle>
          <CardDescription>
            Artifacts are not static—they are live workspaces
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <History className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Version Control</p>
              <p className="text-sm text-muted-foreground">
                Every time you ask Claude to change an artifact (e.g., "Make the button blue"), it creates a new version.
                Toggle between versions using the selector in the top-left of the artifact window.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Layers className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Side-by-Side Editing</p>
              <p className="text-sm text-muted-foreground">
                Keep the chat open to give instructions while viewing the result on the right.
                If you edit the code yourself, those changes are saved to that specific version.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wrench className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Self-Healing Code</p>
              <p className="text-sm text-muted-foreground">
                If an artifact crashes, a <strong>"Try fixing with Claude"</strong> button appears.
                Click it to feed the error log back to Claude for an instant fix.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI-Powered Artifacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            AI-Powered Artifacts
          </CardTitle>
          <CardDescription>
            Turn an artifact into a functioning "AI App" that others can use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">How it works</p>
            <p className="text-sm text-muted-foreground mt-1">
              Ask Claude to "Build a quiz app that generates new questions based on the user's topic."
              The resulting artifact calls Claude's intelligence via a text-based API to generate content dynamically.
            </p>
          </div>
          <div>
            <p className="font-medium">Sharing & Usage</p>
            <p className="text-sm text-muted-foreground mt-1">
              When you publish these AI artifacts, other users interact with them using <em>their own</em>
              Claude subscription limits. You don't need to provide API keys or pay for their usage.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Persistent Storage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Persistent Storage
          </CardTitle>
          <CardDescription>
            Build stateful tools that remember data between sessions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <p className="font-medium">Personal Storage</p>
              <p className="text-sm text-muted-foreground mt-1">
                Data is private to the user.
              </p>
              <p className="text-sm mt-2">
                <em>Use case:</em> "Build a personal daily journal app."
                Your entries remain saved, visible only to you.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <p className="font-medium">Shared Storage</p>
              <p className="text-sm text-muted-foreground mt-1">
                Data is visible to everyone who uses the artifact.
              </p>
              <p className="text-sm mt-2">
                <em>Use case:</em> "Build a team leaderboard."
                If User A submits a score, User B sees it updated.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Lightbulb className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
            <p>
              <strong>Note:</strong> Persistent storage operations only function correctly once the artifact is <strong>published</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* MCP Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plug className="h-5 w-5 text-primary" />
            MCP Integration
          </CardTitle>
          <CardDescription>
            Connect artifacts to external tools via the Model Context Protocol
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">The Capability</p>
            <p className="text-sm text-muted-foreground mt-1">
              Instead of just displaying static data, an artifact can read from or write to tools like
              Google Calendar, Asana, or Slack.
            </p>
          </div>
          <div>
            <p className="font-medium">Security</p>
            <p className="text-sm text-muted-foreground mt-1">
              You must explicitly approve access the first time an artifact tries to touch an external tool.
              Organization admins can disable this feature globally if needed.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The App Builder Prompt */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Pro tip: The "App Builder" prompt
          </CardTitle>
          <CardDescription>
            Stop asking for "code" and start asking for "tools"
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm">
            <p className="text-muted-foreground mb-2"># Try this prompt:</p>
            <p>
              "Create an interactive dashboard Artifact using React and Tailwind CSS.
              It should allow me to paste a CSV of sales data, and then visually render a bar chart and a summary table.
              Enable persistent personal storage so it remembers my last uploaded dataset."
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This prompts Claude to use all advanced capabilities: UI generation, logic, and state management.
          </p>
        </CardContent>
      </Card>

      {/* Example Artifacts */}
      <Card>
        <CardHeader>
          <CardTitle>Ideas: What to Build</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Unit Converter</p>
              <p className="text-sm text-muted-foreground">Interactive tool for any conversion you need regularly</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Color Palette Generator</p>
              <p className="text-sm text-muted-foreground">Generate and save harmonious color schemes</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Expense Tracker</p>
              <p className="text-sm text-muted-foreground">Log expenses with persistent storage</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Meeting Timer</p>
              <p className="text-sm text-muted-foreground">Visual timer with agenda sections</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Quiz App</p>
              <p className="text-sm text-muted-foreground">AI-generated questions on any topic</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Data Visualizer</p>
              <p className="text-sm text-muted-foreground">Paste CSV data, get instant charts</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Looking for power-user techniques?</h3>
              <p className="text-sm text-muted-foreground">
                Check out our collection of expert tips and meta-workflows.
              </p>
            </div>
            <Link
              href="/tips"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Expert Tips
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
