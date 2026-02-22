export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Bot,
  Lightbulb,
  Puzzle,
  FolderOpen,
  FileSpreadsheet,
  Search,
  Shield,
  AlertTriangle
} from 'lucide-react';

export default function CoworkPage() {
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
        <span className="text-foreground">Cowork</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">20 min</Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-purple-500/30">macOS Only</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Cowork: The Autonomous Agent</h1>
            <p className="text-muted-foreground">Assign multi-step jobs that Claude executes while you do other work</p>
          </div>
        </div>
      </div>

      {/* Key Difference */}
      <Card className="bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">The Key Difference</p>
              <p className="text-muted-foreground mt-1">
                In <strong>Chat</strong>, you ask "How do I organize these files?" and Claude gives you a list of steps.
                In <strong>Cowork</strong>, you say "Organize these files," and Claude actually moves them into folders for you.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements & Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1">
              <p className="font-medium">Platform</p>
              <p className="text-sm text-muted-foreground">macOS only (Claude Desktop App)</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Plan</p>
              <p className="text-sm text-muted-foreground">Pro, Team, or Enterprise</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Access</p>
              <p className="text-sm text-muted-foreground">Click the <strong>Cowork</strong> tab at the top</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Steering Workflow */}
      <Card>
        <CardHeader>
          <CardTitle>The "Steering" Workflow</CardTitle>
          <CardDescription>
            Cowork introduces a new way of interacting—you supervise rather than just prompt
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">1</span>
            <div>
              <p className="font-medium">The Prompt</p>
              <p className="text-sm text-muted-foreground mt-1">
                Give a high-level goal, not a simple question:
              </p>
              <div className="bg-muted p-3 rounded-lg mt-2 text-sm">
                "Plan a business trip to Tokyo, including flight options, hotel comparisons in a spreadsheet,
                and a draft itinerary."
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">2</span>
            <div>
              <p className="font-medium">The Plan</p>
              <p className="text-sm text-muted-foreground mt-1">
                Claude analyzes the request and presents a step-by-step plan before executing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">3</span>
            <div>
              <p className="font-medium">Execution & Visibility</p>
              <p className="text-sm text-muted-foreground mt-1">
                Claude begins working. You'll see progress indicators showing what it's doing
                (e.g., "Searching for flights," "Creating Excel file").
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">4</span>
            <div>
              <p className="font-medium">Steering</p>
              <p className="text-sm text-muted-foreground mt-1">
                Watch its "thinking" in real-time. If it goes down a wrong path, you can interrupt
                and provide course correction mid-task without stopping the whole process.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plugins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Puzzle className="h-5 w-5 text-primary" />
            Plugins: The Power Tools
          </CardTitle>
          <CardDescription>
            Specialized bundles of skills designed for specific job roles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            In the Cowork tab, click <strong>"Plugins"</strong> in the sidebar to install specialized capabilities:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Finance</p>
              <p className="text-sm text-muted-foreground">Analyze financial models and variance</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Sales</p>
              <p className="text-sm text-muted-foreground">Research prospects and prep deal memos</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Data</p>
              <p className="text-sm text-muted-foreground">Clean datasets and visualize trends</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Productivity</p>
              <p className="text-sm text-muted-foreground">Manage calendars and tasks</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground mt-4">
            <Lightbulb className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
            <p>
              <strong>Customization:</strong> Click the "Customize" button on any plugin to teach Claude your specific
              preferences (e.g., "Always format my sales reports with these specific columns").
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle>Key Capabilities & Use Cases</CardTitle>
          <CardDescription>
            Cowork runs in a secure Virtual Machine, allowing it to perform actions safely
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <FolderOpen className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Direct File Management</p>
              <p className="text-sm text-muted-foreground mt-1">
                "Clean up my Downloads folder." Claude can scan hundreds of files, create logical folders
                (e.g., "Invoices," "Images"), and move the files automatically.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileSpreadsheet className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Complex Document Creation</p>
              <p className="text-sm text-muted-foreground mt-1">
                "Create a budget spreadsheet." Unlike standard chat which might give you a text table,
                Cowork generates a real Excel file with working formulas (VLOOKUP, etc.) and saves it to your drive.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Search className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Deep Research</p>
              <p className="text-sm text-muted-foreground mt-1">
                "Research competitors." Claude can browse multiple sites, synthesize the data,
                and write a report while you attend a meeting.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Architecture */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Architecture</CardTitle>
          <CardDescription>
            Understanding how Cowork operates under the hood
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium flex items-center gap-2">
              Parallel Sub-agents
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Cowork can spin up multiple independent instances of Claude to work simultaneously.
              This dramatically reduces wait time for research-heavy tasks.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2 text-sm font-mono">
              "Research these 5 competitors <strong>in parallel using subagents</strong>. Create a separate analysis file for each."
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Claude will spawn 5 sub-agents, each researching one company simultaneously—turning 5 hours of work into 20 minutes.
            </p>
          </div>

          <div>
            <p className="font-medium">The VM Sandbox</p>
            <p className="text-sm text-muted-foreground mt-1">
              Cowork runs in an isolated Linux virtual machine (Apple Virtualization Framework) on your local machine.
              This means Claude cannot accidentally modify your actual system files—only the files you explicitly grant access to via MCP.
            </p>
          </div>

          <div>
            <p className="font-medium">The "Amnesia" Constraint & Workaround</p>
            <p className="text-sm text-muted-foreground mt-1">
              Unlike Projects, Cowork sessions have <strong>no memory</strong> of previous sessions. Every task starts completely fresh.
            </p>
            <div className="p-3 rounded-lg bg-muted mt-2">
              <p className="text-sm">
                <strong>Workaround:</strong> Create a <code className="bg-background px-1 rounded">Context.md</code> file with key information
                (project goals, conventions, previous decisions). Start each session with "Read Context.md first, then..."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety */}
      <Card className="border-amber-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-500" />
            Safety & Limitations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Deletion Protection</p>
                <p className="text-sm text-muted-foreground">
                  Claude cannot permanently delete files without your explicit permission.
                  If a task requires deletion, it will pause and ask you to click "Allow".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Usage Costs</p>
                <p className="text-sm text-muted-foreground">
                  Cowork consumes significantly more usage limits than standard chat.
                  <strong> Tip:</strong> Batch your work (research AND summary in one go) to maximize value.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">App Focus</p>
                <p className="text-sm text-muted-foreground">
                  You must keep the Claude Desktop app open. If you close it, the agentic session dies.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost & Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Cost & Usage Guide
          </CardTitle>
          <CardDescription>
            Cowork uses significantly more tokens than standard chat — here's how to manage it
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 rounded-lg border">
              <p className="font-medium">How Cowork Uses Your Plan</p>
              <p className="text-sm text-muted-foreground mt-1">
                A single Cowork session can use <strong>5-20x more tokens</strong> than a standard chat message.
                On Pro plans, expect to use roughly 10-15% of your daily limit per complex Cowork task.
                Max plan users get significantly higher limits.
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Monitor Your Usage</p>
              <p className="text-sm text-muted-foreground mt-1">
                Check your usage at <strong>Settings → Subscription</strong> in Claude Desktop.
                The usage meter updates in real-time during Cowork sessions so you can track consumption.
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Cost-Saving Tips</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1 list-disc list-inside">
                <li><strong>Batch tasks:</strong> Combine related work into one session instead of running multiple short ones</li>
                <li><strong>Be specific:</strong> Vague prompts cause Claude to explore more paths, using more tokens</li>
                <li><strong>Use standard chat first:</strong> Only use Cowork when the task requires computer actions</li>
                <li><strong>Interrupt early:</strong> If Claude goes down the wrong path, correct it immediately</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Ready for research missions?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to use Cowork for deep research and information synthesis.
              </p>
            </div>
            <Link
              href="/guides/deep-research"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Deep Research Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
