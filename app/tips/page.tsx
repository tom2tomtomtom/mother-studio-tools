import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Settings,
  Terminal,
  Sparkles,
  Globe,
  Brain,
  Lightbulb,
  Zap,
  Code,
  FolderSync,
  Play,
  DollarSign,
  Trash2,
  FileText,
  Share2,
  Layers,
  Keyboard,
  MessageSquare,
  Image,
  Copy,
  RefreshCw,
  Download,
  Users,
  History,
  PanelTop,
  BookOpen,
  ArrowRight,
  Workflow
} from 'lucide-react';

export default function TipsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Expert Tips</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Expert Tips & Meta-Workflows</h1>
            <p className="text-muted-foreground">Practical techniques to get more out of Claude in your daily work</p>
          </div>
        </div>
      </div>

      {/* Featured Power Tips */}
      <Card className="bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-amber-500/5 border-amber-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Featured Power Tips
          </CardTitle>
          <CardDescription>
            Two techniques that dramatically improve your Claude experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="The Skill Factory: Let Claude Build Skills for You"
            problem="Writing YAML metadata and skill instructions manually is tedious and error-prone"
            trick='Upload any reference document (brand guide, coding standards, meeting template) and ask: "Convert this into a valid Skill.md file with YAML frontmatter and markdown body for a Custom Skill." Claude writes the skill, you zip and install it. Full guide in the Custom Skills how-to.'
            icon={<Sparkles className="h-4 w-4" />}
          />

          <TipBlock
            title='Self-Healing Skills: Fix Skills That Don&apos;t Trigger'
            problem="You installed a skill but Claude ignores it"
            trick={'The issue is almost always the description field. Go back to Claude and ask: "You aren\'t invoking this skill when I ask for X. Rewrite the YAML description to be more trigger-happy and specific so you know exactly when to use it." Then re-upload.'}
            icon={<Zap className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 1: Meta-Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Meta-Configuration: Using Claude to Set Up Claude
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Use Claude's knowledge of its own ecosystem to generate setup files automatically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Generating MCP Configurations"
            problem="Writing JSON for MCP servers is error-prone"
            trick='Tell Claude your OS and username, then ask: "Generate the claude_desktop_config.json code to give the Filesystem server access to my Documents and Desktop folders." Copy the output directly into your config file.'
            icon={<Code className="h-4 w-4" />}
          />

          <TipBlock
            title="Drafting Skills Automatically"
            problem="Formatting YAML metadata manually is tedious"
            trick='Upload a PDF of your brand guidelines or coding standards. Ask: "Convert this document into a valid Skill.md file with the required YAML frontmatter and Markdown body for a custom Claude Skill." Then zip the resulting folder.'
            icon={<Sparkles className="h-4 w-4" />}
          />

          <TipBlock
            title="Customizing Cowork Plugins"
            problem="Default plugin behavior doesn't match your needs"
            trick='In the Cowork tab, click "Customize" on a plugin. This opens a meta-prompt where you can tell Claude exactly how that plugin should behave (e.g., "For the Finance plugin, always format variance analysis as a table").'
            icon={<Settings className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 2: CLI & Developer Shortcuts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              CLI & Developer Shortcuts
            </CardTitle>
            <Badge variant="outline" className="shrink-0">Power User</Badge>
          </div>
          <CardDescription>
            Speed up your terminal workflow with these command-line hacks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title='The One-Shot Flag (-p)'
            problem="You don't always need a full interactive session"
            trick='Use claude -p "explain this function" to get an immediate answer and exit back to your shell instantly. Perfect for quick checks without context switching.'
            icon={<Zap className="h-4 w-4" />}
            code="claude -p 'explain this function'"
          />

          <TipBlock
            title="Automated Git Commits"
            problem="Writing generic commit messages is a waste of time"
            trick='After making changes, type claude commit. Claude will analyze the diff and write a descriptive, semantic commit message for you automatically.'
            icon={<Code className="h-4 w-4" />}
            code="claude commit"
          />

          <TipBlock
            title='"Accept All" Mode'
            problem="Approving every file change during a massive refactor is tedious"
            trick='Enable "Accept all" mode for a session to let Claude make widespread edits across your codebase without pausing for permission on every file.'
            icon={<Play className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 3: Artifact Power Moves */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Artifact Power Moves
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Move beyond simple code previews to create persistent, interactive tools
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Self-Healing Code"
            problem="Debugging crashed artifacts manually is slow"
            trick='If an artifact crashes or throws an error, look for the "Try fixing with Claude" button near the error message. Click it to feed the error log back into Claude for an instant diagnosis and fix.'
            icon={<Zap className="h-4 w-4" />}
          />

          <TipBlock
            title='Persistent "App" Creation'
            problem="You want tools that remember data between uses"
            trick='Ask Claude to "Create a personal journal app using persistent storage." Because Artifacts support personal storage, your entries will remain saved every time you open it—effectively creating custom software without hosting.'
            icon={<FolderSync className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 4: Cowork & Browser Hacks */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Cowork & Browser Hacks
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Optimize how the agent works to save time and money
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title='The "Intern" Loop (Browser Recording)'
            problem="You're doing repetitive browser tasks manually"
            trick='Use the recording button in the Chrome extension to perform a complex task once (like logging into a rewards portal and navigating to "Points"). Claude learns the sequence. Next time, just say "Run the reward points check workflow" and it executes while you do other work.'
            icon={<Play className="h-4 w-4" />}
          />

          <TipBlock
            title="Cost Control Strategy"
            problem="Cowork sessions consume significantly more tokens than standard chat"
            trick='Batch your tasks. Instead of one file organization task, ask: "Organize my Downloads folder, THEN summarize the PDFs, AND finally create an Excel sheet of the findings." This maximizes the utility of the agentic session.'
            icon={<DollarSign className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 5: Memory Hygiene */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Memory Hygiene
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Keep Claude's "brain" clean to ensure better responses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Project Quarantine"
            problem="Irrelevant questions pollute your project's memory summary"
            trick='If you need to ask something unrelated to your current project (e.g., a recipe while in a "Coding" project), use the "Remove from project" option in the chat dropdown. This moves the conversation to your general history, keeping Project Memory focused exclusively on the relevant topic.'
            icon={<Trash2 className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 6: Prompt Engineering Shortcuts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Prompt Engineering Shortcuts
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Techniques to get more consistent and useful responses from Claude
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="System Prompts in Projects"
            problem="Starting every conversation with the same instructions"
            trick='Add a system prompt in Project settings—it applies to every conversation automatically. Great for setting tone, format preferences, or domain context without repeating yourself.'
            icon={<MessageSquare className="h-4 w-4" />}
          />

          <TipBlock
            title="Output Formatting"
            problem="Getting inconsistent response formats"
            trick='Ask for "JSON only" or "markdown table" and Claude will stick to it. Be explicit about structure: "Return a JSON object with keys: title, summary, tags" works better than "give me some JSON."'
            icon={<Code className="h-4 w-4" />}
          />

          <TipBlock
            title="Chain-of-Thought Triggers"
            problem="Need Claude to show its reasoning"
            trick={`Start with "Think step by step" or "Let's work through this" to activate deeper reasoning. For complex problems, ask Claude to "explain your approach before giving the answer."`}
            icon={<Brain className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 7: File & Context Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FolderSync className="h-5 w-5 text-primary" />
              File & Context Management
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Work efficiently with files, images, and long conversations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Drag-and-Drop Files"
            problem="Typing out file contents manually"
            trick='Drag PDFs, images, code files, CSVs directly into the chat. Claude can read most document types, analyze spreadsheets, and understand code structure instantly.'
            icon={<FileText className="h-4 w-4" />}
          />

          <TipBlock
            title="Context Window Optimization"
            problem="Conversations getting confused or repetitive"
            trick='Start fresh conversations for new topics; use Projects for ongoing work. When a conversation gets long, summarize key decisions and start a new chat with that context.'
            icon={<Layers className="h-4 w-4" />}
          />

          <TipBlock
            title="Screenshot Analysis"
            problem="Describing UI bugs or designs in words"
            trick='Take a screenshot and drop it in—Claude can see and analyze images. Works great for UI feedback, error messages, diagrams, handwritten notes, and even whiteboard photos.'
            icon={<Image className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 8: Collaboration Workflows */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-primary" />
              Collaboration Workflows
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Share your Claude work and integrate with department workflows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Sharing Conversations"
            problem="Copying outputs to share with your department"
            trick='Click Share → Public Link to create a shareable URL. The recipient sees the full conversation context, making it easy to hand off research or get feedback on Claude-generated work.'
            icon={<Share2 className="h-4 w-4" />}
          />

          <TipBlock
            title="Project Templates"
            problem="Setting up the same context repeatedly"
            trick='Create a "template" Project with common files, system prompts, and reference docs. Duplicate it for each new client or project to start with your preferred setup.'
            icon={<Users className="h-4 w-4" />}
          />

          <TipBlock
            title="Export to Docs"
            problem="Getting responses into Google Docs/Word"
            trick='Ask Claude to format as markdown, then paste into your doc editor. Most editors (Notion, Google Docs, Word) convert markdown formatting automatically on paste.'
            icon={<Download className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 9: Advanced Artifacts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Advanced Artifacts
            </CardTitle>
            <Badge variant="outline" className="shrink-0">Power User</Badge>
          </div>
          <CardDescription>
            Build sophisticated tools and applications with Claude's artifact system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Multi-File Applications"
            problem="Need more than a single code file"
            trick='Ask Claude to "create a React app with separate components"—it builds a full structure. You can request specific file organization like "separate the CSS, add a utils folder, and create a types file."'
            icon={<Code className="h-4 w-4" />}
          />

          <TipBlock
            title="Version Iteration"
            problem="Lost a good previous version"
            trick='Click the version history dots on artifacts to go back to any previous version. You can also branch: "keep this version but try a different approach" creates a parallel iteration.'
            icon={<History className="h-4 w-4" />}
          />

          <TipBlock
            title="Interactive Tools"
            problem="Need a calculator, converter, or dashboard"
            trick='Ask Claude to build it as an artifact—use it directly without deploying. Great for unit converters, data visualizers, color pickers, or any tool you need occasionally.'
            icon={<PanelTop className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 10: Keyboard Shortcuts & Speed */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="h-5 w-5 text-primary" />
              Keyboard Shortcuts & Speed
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Navigate faster with keyboard commands and quick actions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="Quick Commands"
            problem="Clicking buttons is slow"
            trick='Cmd+Enter (Ctrl+Enter on Windows) sends message, Cmd+Shift+O (Ctrl+Shift+O) opens new chat, Cmd+K (Ctrl+K) opens command palette. Learning these three shortcuts keeps you in flow without reaching for the mouse.'
            icon={<Keyboard className="h-4 w-4" />}
          />

          <TipBlock
            title="Copy Code Blocks"
            problem="Manually selecting code blocks"
            trick='Click the copy icon on any code block for one-click copy. Hover over any code block to reveal the copy button in the top-right corner.'
            icon={<Copy className="h-4 w-4" />}
          />

          <TipBlock
            title="Regenerate Responses"
            problem="Response wasn't quite right"
            trick='Click the refresh icon to get a new response without retyping. You can also edit your original message and resubmit to refine what you are asking for.'
            icon={<RefreshCw className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Section 11: Agency Workflows & ROI */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary" />
              Agency Workflows & ROI
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">Everyone</Badge>
          </div>
          <CardDescription>
            Multi-tool pipelines and automation patterns that save real time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TipBlock
            title="The Synthetic Research Pipeline"
            problem="Research takes days and still feels incomplete"
            trick='Chain two tools: NotebookLM to synthesize research sources and generate an Audio Overview for the team → Claude Project to build the strategic deliverable. This turns 2-3 days of research into 2-3 hours with better sources.'
            icon={<Globe className="h-4 w-4" />}
          />

          <TipBlock
            title="Timeline Automation with n8n"
            problem="Manually chasing status updates and sending deadline reminders"
            trick='Build an n8n workflow that pulls project milestones from your PM tool and automatically sends Slack reminders 48 hours before deadlines, escalation alerts when tasks go overdue, and weekly timeline summaries to stakeholders. Set it up once, never chase again.'
            icon={<Zap className="h-4 w-4" />}
          />

          <TipBlock
            title="Invoice Processing on Autopilot"
            problem="Manual data entry from invoices eats hours every week"
            trick='Use Claude Cowork to read PDF invoices, extract vendor, amount, line items, and PO numbers, then validate against your records. It catches duplicates and math errors humans miss. Pair with the Finance plugin for a full AP workflow.'
            icon={<DollarSign className="h-4 w-4" />}
          />

          <TipBlock
            title="Concept Multiplication: 1 Idea → 50 Executions"
            problem="You have a great campaign concept but need it across every channel and format"
            trick='Upload your core concept to a Claude Project and ask it to systematically multiply across channels (social, OOH, digital, experiential), formats (video, static, carousel, interactive), and moments (seasonal, cultural, product launches). Generates a full execution matrix in minutes instead of a brainstorm day.'
            icon={<Sparkles className="h-4 w-4" />}
          />

          <TipBlock
            title="ROI Quick Wins: Where AI Saves the Most Time"
            problem="Not sure where to start with AI to get the fastest return"
            trick='The biggest time savers we have measured: research briefs (3 days → 3 hours), status reports (2 hours → 15 min), creative brief writing (4 hours → 45 min), invoice processing (30 min each → 5 min each), meeting notes to action items (45 min → instant). Start with whichever your team does most often.'
            icon={<Lightbulb className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Link to Guides */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Want deeper tutorials?</h3>
              <p className="text-sm text-muted-foreground">
                Check out our step-by-step guides for each AI platform.
              </p>
            </div>
            <Link
              href="/guides"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              <BookOpen className="h-4 w-4" />
              Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Quick Reference Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3">CLI Commands</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <CommandRef command="claude -p 'question'" description="One-shot answer, no session" />
              <CommandRef command="claude commit" description="Auto-generate commit message" />
              <CommandRef command="claude --continue" description="Resume last conversation" />
              <CommandRef command="claude --help" description="View all available options" />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Keyboard Shortcuts (macOS / Windows)</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <CommandRef command="Cmd/Ctrl + Enter" description="Send message" />
              <CommandRef command="Cmd/Ctrl + Shift + O" description="New chat" />
              <CommandRef command="Cmd/Ctrl + K" description="Command palette" />
              <CommandRef command="Cmd/Ctrl + Shift + S" description="Toggle sidebar" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TipBlock({
  title,
  problem,
  trick,
  icon,
  code
}: {
  title: string;
  problem: string;
  trick: string;
  icon: React.ReactNode;
  code?: string;
}) {
  return (
    <div className="space-y-3 p-4 rounded-lg border bg-card">
      <div className="flex items-center gap-2">
        <div className="text-primary">{icon}</div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">The problem:</span> {problem}
        </p>
        <p>
          <span className="font-medium text-primary">The trick:</span> {trick}
        </p>
        {code && (
          <pre className="mt-2 p-2 rounded bg-muted font-mono text-xs overflow-x-auto">
            {code}
          </pre>
        )}
      </div>
    </div>
  );
}

function CommandRef({ command, description }: { command: string; description: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
      <code className="text-xs font-mono bg-muted px-2 py-1 rounded">{command}</code>
      <span className="text-sm text-muted-foreground">{description}</span>
    </div>
  );
}
