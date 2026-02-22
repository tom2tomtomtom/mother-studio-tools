export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Zap,
  Bot,
  Terminal,
  Sparkles,
  Chrome,
  Shield,
  AlertTriangle,
  Play,
  Database
} from 'lucide-react';

export default function PowerHacksPage() {
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
        <span className="text-foreground">Power Hacks</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Advanced</Badge>
          <Badge variant="outline">25 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Power Hacks & Optimization</h1>
            <p className="text-muted-foreground">Advanced techniques for cost savings, speed, and automation</p>
          </div>
        </div>
      </div>

      {/* Cowork Hacks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-500" />
            Cowork Agent Hacks
          </CardTitle>
          <CardDescription>
            Maximize the autonomous agent's effectiveness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              The "Parallel Subagents" Command
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Cowork can spin up multiple instances of Claude to work simultaneously.
              Force this behavior to speed up research significantly.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2 text-sm font-mono">
              "Research these 5 competitors <strong>in parallel using subagents</strong>...
              Create a separate analysis file for each"
            </div>
          </div>

          <div>
            <p className="font-medium">The "Cowork Prompting" Formula</p>
            <p className="text-sm text-muted-foreground mt-1">
              Cowork fails when prompts are vague. Use this structure:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-2 text-sm space-y-1">
              <p><strong>CONTEXT:</strong> [What you have, e.g., "Folder with 100 PDFs"]</p>
              <p><strong>TASK:</strong> [Action, e.g., "Organize into subfolders"]</p>
              <p><strong>OUTPUT:</strong> [Deliverable, e.g., "Summary markdown file"]</p>
              <p><strong>CONSTRAINTS:</strong> [Rules, e.g., "Do not delete anything"]</p>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-amber-500/50 bg-amber-500/5">
            <p className="font-medium flex items-center gap-2">
              <Shield className="h-4 w-4 text-amber-500" />
              The Workspace Quarantine
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Claude Cowork can permanently delete files. <strong>Never give it access to your root user folder.</strong>
              Create a dedicated directory like <code className="bg-muted px-1 rounded">/cowork-workspace</code>.
              Move files into that folder for processing, then move results out.
            </p>
          </div>

          <div>
            <p className="font-medium">Batching Tasks to Save Quota</p>
            <p className="text-sm text-muted-foreground mt-1">
              Cowork consumes significantly more quota than standard chat (one session ≈ 10–20 chat messages).
              Batch multiple requests into one mission:
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2 text-sm font-mono">
              "Organize the Downloads folder, THEN summarize the PDFs, AND finally create an Excel sheet of the findings"
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: CLI Shortcuts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-green-500" />
            Developer & CLI Shortcuts
          </CardTitle>
          <CardDescription>
            Speed up your command-line workflow
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium">The "One-Shot" Flag (-p)</p>
            <p className="text-sm text-muted-foreground mt-1">
              Avoid entering a full interactive session for simple queries:
            </p>
            <pre className="bg-muted p-3 rounded-lg mt-2 text-sm font-mono overflow-x-auto">
              claude -p "explain this function"
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              Claude analyzes the code, prints the answer, and exits immediately.
            </p>
          </div>

          <div>
            <p className="font-medium">Automated Git Commits</p>
            <p className="text-sm text-muted-foreground mt-1">
              Stop writing commit messages manually:
            </p>
            <pre className="bg-muted p-3 rounded-lg mt-2 text-sm font-mono">
              claude commit
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              Claude analyzes your file changes and writes a semantic, professional commit message.
            </p>
          </div>

          <div>
            <p className="font-medium">"Accept All" Mode</p>
            <p className="text-sm text-muted-foreground mt-1">
              When refactoring large codebases, approving every single file edit is tedious.
              Enable "Accept all" mode for the session to let Claude execute widespread changes
              without pausing for permission on every file.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Customization & Automation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-pink-500" />
            Customization & Automation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium">The "Skill Factory"</p>
            <p className="text-sm text-muted-foreground mt-1">
              Writing YAML and Markdown for Custom Skills manually is error-prone.
              Upload a document (like "Brand Guidelines") and ask Claude to "Help me build a skill."
              It will write the valid <code className="bg-muted px-1 rounded">Skill.md</code> file for you.
            </p>
          </div>

          <div>
            <p className="font-medium flex items-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              The Browser "Intern" (Recording)
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Teach Claude web tasks by demonstration rather than instruction.
              In the Chrome extension, click <strong>Record</strong>, perform a task
              (like logging into a portal and downloading a report), and stop.
              Claude learns the sequence and can repeat it automatically.
            </p>
          </div>

          <div>
            <p className="font-medium">Self-Healing Artifacts</p>
            <p className="text-sm text-muted-foreground mt-1">
              If a code artifact crashes, don't debug it manually.
              Click the <strong>"Try fixing with Claude"</strong> button near the error message.
              It feeds the error log back for an instant fix.
            </p>
          </div>

          <div>
            <p className="font-medium flex items-center gap-2">
              <Database className="h-4 w-4 text-primary" />
              Persistent "App" Creation
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Artifacts usually reset when closed, but you can enable persistence.
              Ask Claude to "enable persistent personal storage" for an artifact.
              Build tools like a Daily Journal or Habit Tracker that remember your data between sessions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Chrome Extension */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Chrome className="h-5 w-5 text-blue-500" />
            Claude in Chrome
          </CardTitle>
          <CardDescription>
            Turn your browser into an agentic workspace
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium">Setup</p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li><strong>Prerequisite:</strong> Paid subscription (Pro, Team, or Enterprise)</li>
              <li><strong>Install:</strong> Download from Chrome Web Store</li>
              <li><strong>Authorize:</strong> Grant permissions to observe and interact with browsing</li>
              <li><strong>Activate:</strong> Click the Claude icon to slide the chat interface into view</li>
            </ol>
          </div>

          <div>
            <p className="font-medium">Browser assistant workflows</p>
            <div className="grid gap-3 sm:grid-cols-2 mt-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Calendar Management</p>
                <p className="text-xs text-muted-foreground">
                  "Schedule a sync with marketing next Tuesday" — Claude scans for open slots and drafts the invite
                </p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Drive Organization</p>
                <p className="text-xs text-muted-foreground">
                  "Organize my Google Drive" — sorts files into logical folders and identifies duplicates
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium">Recording Workflows</p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li><strong>Start Recording:</strong> Click the Record button in the extension</li>
              <li><strong>Teach by Doing:</strong> Perform the task exactly as you want Claude to do it</li>
              <li><strong>Stop & Save:</strong> Claude absorbs this as a repeatable pattern</li>
              <li><strong>Run Autonomously:</strong> Command Claude to "run the reward points check workflow"</li>
            </ol>
          </div>

          <div className="p-4 rounded-lg border border-red-500/50 bg-red-500/5">
            <p className="font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Safety & Privacy
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li>Only allow the extension on trusted sites to prevent prompt injection attacks</li>
              <li>Avoid automated workflows for sensitive tasks like banking or financial credentials</li>
              <li>You might not be watching when Claude logs into an account</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-amber-500/5">
        <CardHeader>
          <CardTitle>Quick Reference: Power Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border bg-card">
              <code className="text-sm font-mono">claude -p "question"</code>
              <p className="text-xs text-muted-foreground mt-1">One-shot answer, no session</p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <code className="text-sm font-mono">claude commit</code>
              <p className="text-xs text-muted-foreground mt-1">Auto-generate commit message</p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <code className="text-sm font-mono">"in parallel using subagents"</code>
              <p className="text-xs text-muted-foreground mt-1">Force parallel execution in Cowork</p>
            </div>
            <div className="p-3 rounded-lg border bg-card">
              <code className="text-sm font-mono">"enable persistent storage"</code>
              <p className="text-xs text-muted-foreground mt-1">Make artifacts remember data</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Explore all guides</h3>
              <p className="text-sm text-muted-foreground">
                Start from the beginning with our step-by-step tutorials.
              </p>
            </div>
            <Link
              href="/guides"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              All Guides
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
