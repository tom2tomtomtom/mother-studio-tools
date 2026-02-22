export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  FolderOpen,
  Lightbulb,
  BookOpen,
  Settings,
  Trash2,
  Archive,
  Users,
  FileText,
  Code,
  Presentation,
  Newspaper
} from 'lucide-react';

export default function ProjectsPage() {
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
        <span className="text-foreground">Projects</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">15 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
            <FolderOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">The Art of Project Setup</h1>
            <p className="text-muted-foreground">Create context containers that make Claude your specialized consultant</p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <Card className="bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">The Philosophy: Projects as "Brains"</p>
              <p className="text-muted-foreground mt-1">
                Think of a Project not as a folder for files, but as a specialized <strong>"brain"</strong> for a specific
                domain of your life or work. In standard chat, Claude forgets context when you start a new thread.
                A Project acts as a "context-rich workspace" that retains access to your Knowledge Base and Instructions
                whether you chat today or next month.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader>
          <CardTitle>Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Free plan</p>
              <p className="text-xs text-muted-foreground">Limited projects available</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Pro / Team / Enterprise</p>
              <p className="text-xs text-muted-foreground">Expanded project limits</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Knowledge Base */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">1</span>
            Building the Knowledge Base
          </CardTitle>
          <CardDescription>
            The library of documents Claude reads before answering any question in the project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium">How to Add</p>
            <p className="text-sm text-muted-foreground mt-1">
              Inside a project, look for the Knowledge section.
              Click <strong>Add content</strong> to upload text files, PDFs, or code snippets.
            </p>
          </div>

          <div>
            <p className="font-medium">The Context Window Strategy</p>
            <p className="text-sm text-muted-foreground mt-1">
              Project Knowledge has a generous token limit (check current plan details for exact figures).
              If your uploads exceed the context window, Claude uses "RAG" (Retrieval-Augmented Generation)
              to find relevant snippets rather than reading the whole library at once.
            </p>
          </div>

          <div>
            <p className="font-medium mb-3">What to Upload (The "Art" of Selection)</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Style Guides</p>
                <p className="text-xs text-muted-foreground">Brand voice, color hex codes, editorial guidelines</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Context</p>
                <p className="text-xs text-muted-foreground">Meeting minutes, previous research, user personas</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Templates</p>
                <p className="text-xs text-muted-foreground">Past successful examples ("5 winning grant proposals")</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Proprietary Data</p>
                <p className="text-xs text-muted-foreground">Unique knowledge Claude doesn't already have</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Don't upload generic knowledge (like "How to write Python").
              Claude already knows that. Only upload <em>proprietary</em> knowledge unique to you.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Custom Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">2</span>
            Programming Behavior (Custom Instructions)
          </CardTitle>
          <CardDescription>
            While the Knowledge Base provides information, Custom Instructions provide personality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium">How to Set</p>
            <p className="text-sm text-muted-foreground mt-1">
              Click <strong>Set project instructions</strong> within the project settings.
              Tell Claude exactly who it is for this specific project.
            </p>
          </div>

          <div>
            <p className="font-medium mb-3">Example Instructions</p>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm flex items-center gap-2">
                  <Code className="h-4 w-4 text-blue-500" />
                  For a Coding Project
                </p>
                <p className="text-sm text-muted-foreground mt-1 font-mono bg-muted p-2 rounded">
                  "You are a Senior React Developer. Always prefer functional components. Be terse. Do not explain code unless asked."
                </p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm flex items-center gap-2">
                  <FileText className="h-4 w-4 text-green-500" />
                  For a Writing Project
                </p>
                <p className="text-sm text-muted-foreground mt-1 font-mono bg-muted p-2 rounded">
                  "You are an assertive Editor. Critique my logic holes ruthlessly. Never use flowery adjectives."
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
            <p className="text-muted-foreground">
              <strong>Benefit:</strong> This ensures consistent tone and output format across every chat in the project
              without you needing to re-prompt it every time.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Memory Hygiene */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">3</span>
            Project "Gardening" & Memory Hygiene
          </CardTitle>
          <CardDescription>
            A Project requires maintenance to stay useful
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Settings className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">The "Move to Project" Trick</p>
              <p className="text-sm text-muted-foreground mt-1">
                If you have a brilliant conversation in your general chat history, don't lose it.
                Click the dropdown menu on the chat and select <strong>"Add to project"</strong> to file it into the correct workspace.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Trash2 className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Memory Hygiene</p>
              <p className="text-sm text-muted-foreground mt-1">
                Claude maintains a memory summary for each project. If you accidentally ask an unrelated question
                (e.g., asking for a recipe inside your "Q3 Financials" project), it pollutes the memory.
              </p>
              <p className="text-sm mt-2">
                <strong>The Fix:</strong> Click <strong>"Remove from project"</strong> on that specific chat.
                This sends it back to your general history and cleans up the project's context.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Archive className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Archiving</p>
              <p className="text-sm text-muted-foreground mt-1">
                When a project is done, do not delete it. <strong>Archive</strong> it.
                This cleans up your sidebar but preserves the knowledge and chat history for future reference.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <em>Note:</em> Archiving resets sharing permissions to private for security.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Real-World Project Templates</CardTitle>
          <CardDescription>
            Use these setups as templates for your own work
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Newsletter Engine */}
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-3">
              <Newspaper className="h-5 w-5 text-blue-500" />
              <p className="font-medium">The "Newsletter Engine"</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Goal:</strong> Turn rough notes into a polished newsletter and LinkedIn posts.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Knowledge Base:</strong> Upload PDFs of your last 10 newsletters (for style matching)
                and a text file of your "LinkedIn formatting rules" (e.g., "Use short paragraphs").
              </p>
              <p className="font-mono bg-muted p-2 rounded text-xs">
                <strong>Instructions:</strong> "You are a ghostwriter. Your tone is punchy and professional.
                Always draft the newsletter first, then generate three LinkedIn variations."
              </p>
            </div>
          </div>

          {/* Board Prep Room */}
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-3">
              <Presentation className="h-5 w-5 text-purple-500" />
              <p className="font-medium">The "Board Prep Room"</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Goal:</strong> Prepare for high-stakes meetings.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Knowledge Base:</strong> Upload previous board decks, quarterly financial reports, and meeting minutes.
              </p>
              <p className="font-mono bg-muted p-2 rounded text-xs">
                <strong>Instructions:</strong> "Act as a skeptical board member. Review these materials and generate
                a list of 'Hot Button' questions I should be prepared to answer."
              </p>
            </div>
          </div>

          {/* Coding Assistant */}
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-3">
              <Code className="h-5 w-5 text-green-500" />
              <p className="font-medium">The "Coding Assistant"</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Goal:</strong> Maintain a specific software repository.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Knowledge Base:</strong> Upload the README.md, API documentation, and key architecture diagrams.
              </p>
              <p className="font-mono bg-muted p-2 rounded text-xs">
                <strong>Instructions:</strong> "Follow the coding standards defined in CONTRIBUTING.md.
                Always write tests for new code."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Collaboration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Collaboration (Team & Enterprise)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Visibility Options</p>
            <div className="grid gap-2 sm:grid-cols-2 mt-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Private</p>
                <p className="text-xs text-muted-foreground">Just you and invitees</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Shared with Organization</p>
                <p className="text-xs text-muted-foreground">Visible to your entire team</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium">Permissions</p>
            <div className="grid gap-2 sm:grid-cols-2 mt-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Can Edit</p>
                <p className="text-xs text-muted-foreground">Can change instructions and files</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Can Use</p>
                <p className="text-xs text-muted-foreground">Can chat but not alter project structure</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Use Case:</strong> Create an "Onboarding" project shared with all new hires,
              containing employee handbooks and IT setup guides, allowing them to ask questions without bothering HR.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Ready to add file access?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to connect local files with MCP.
              </p>
            </div>
            <Link
              href="/guides/mcp-setup"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              MCP Setup
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
