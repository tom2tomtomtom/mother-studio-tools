export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Terminal,
  Lightbulb,
  FileQuestion,
  Wrench,
  GitBranch,
  Zap,
  Monitor,
  BookOpen,
  Keyboard,
  FolderOpen,
  MessageSquare,
  RotateCcw,
  Chrome,
  AlertTriangle,
  Brain,
  TestTube,
  Plug,
  Layers,
  Settings,
  DollarSign,
  Workflow,
  Github,
  Rocket,
  Palette,
  Play,
  CheckCircle2,
  ArrowDown
} from 'lucide-react';

export default function ClaudeCodePage() {
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
        <span className="text-foreground">Claude Code</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner &rarr; Advanced</Badge>
          <Badge variant="outline">50 min</Badge>
          <Badge variant="outline" className="text-xs text-muted-foreground">Verified Feb 2026</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
            <Terminal className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Claude Code</h1>
            <p className="text-muted-foreground">An agentic AI assistant that lives in your terminal and works directly with your files</p>
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <Card className="bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What Makes This Different</p>
              <p className="text-muted-foreground mt-1">
                Regular Claude chats <em>about</em> code. <strong>Claude Code does the work.</strong> It reads your entire
                project, edits files, runs commands, creates commits, and builds features &mdash; all while asking your
                permission before making changes. Think of it as a senior developer sitting next to you who can
                plan, code, debug, and test autonomously.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start Track */}
      <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Rocket className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg">Just want to try it? Start here.</p>
                <p className="text-muted-foreground mt-1">
                  Skip the full guide. These two steps take 10 minutes and you&apos;ll build a real website from scratch.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#install" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  <ArrowDown className="h-4 w-4" />
                  1. Install (2 min)
                </a>
                <a href="#demo" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  <ArrowDown className="h-4 w-4" />
                  2. Try the Demo (8 min)
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Everything below the demo is optional &mdash; come back when you&apos;re ready to go deeper.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is a Terminal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            First: What is a Terminal?
          </CardTitle>
          <CardDescription>
            If you&apos;ve never used one, start here &mdash; it takes 30 seconds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A <strong>terminal</strong> (also called &quot;command line&quot; or &quot;shell&quot;) is a text-based way to talk to your computer.
            Instead of clicking icons, you type commands. It looks like a blank screen with a blinking cursor &mdash; that&apos;s normal.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">How to open it</h4>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-sm">Mac</p>
                  <p className="text-sm text-muted-foreground">Press <code className="bg-muted px-1 rounded">Cmd+Space</code>, type &quot;Terminal&quot;, press Enter</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-sm">Windows</p>
                  <p className="text-sm text-muted-foreground">Press <code className="bg-muted px-1 rounded">Win+X</code>, choose &quot;PowerShell&quot; or &quot;Terminal&quot;</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-sm">Linux</p>
                  <p className="text-sm text-muted-foreground">Press <code className="bg-muted px-1 rounded">Ctrl+Alt+T</code> or search for &quot;Terminal&quot;</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-1">What it does</h4>
              <p className="text-sm text-muted-foreground">
                You type a command, press Enter, and the computer does it. For example, <code className="bg-muted px-1 rounded">cd Desktop</code> moves
                you to the Desktop folder. <code className="bg-muted px-1 rounded">ls</code> (Mac/Linux) or <code className="bg-muted px-1 rounded">dir</code> (Windows) lists the files there.
                That&apos;s really all you need to know &mdash; Claude Code handles the rest.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What It Can Do */}
      <Card>
        <CardHeader>
          <CardTitle>What You Can Do With Claude Code</CardTitle>
          <CardDescription>It handles tasks that would normally require a developer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="font-medium text-sm">Explore &amp; Understand</p>
              <p className="text-sm text-muted-foreground">&quot;Explain what this project does&quot; &mdash; Claude reads every file and gives you a summary</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-sm">Fix Bugs</p>
              <p className="text-sm text-muted-foreground">&quot;Fix this error&quot; &mdash; paste an error message and Claude finds and fixes the cause</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-sm">Build Features</p>
              <p className="text-sm text-muted-foreground">&quot;Add a contact form&quot; &mdash; Claude creates the files, writes the code, and wires it up</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-sm">Manage Git &amp; GitHub</p>
              <p className="text-sm text-muted-foreground">&quot;Commit my changes and create a PR&quot; &mdash; Claude handles version control end-to-end</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-sm">Run &amp; Fix Tests</p>
              <p className="text-sm text-muted-foreground">&quot;Run the tests and fix what&apos;s broken&quot; &mdash; Claude runs, reads failures, and patches them</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-sm">Refactor Code</p>
              <p className="text-sm text-muted-foreground">&quot;Rename this everywhere&quot; &mdash; Claude finds every usage across all files and updates them</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: GETTING STARTED
          ========================================= */}
      <div className="space-y-2 pt-4">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p className="text-muted-foreground">Installation takes two minutes. You only do it once.</p>
      </div>

      {/* Installation */}
      <Card id="install" className="scroll-mt-20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">1</span>
            Install Claude Code
          </CardTitle>
          <CardDescription>
            One command, then auto-updates handle the rest
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Mac / Linux</h4>
            <p className="text-sm text-muted-foreground mb-2">Open Terminal and paste this line:</p>
            <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-sm font-mono">curl -fsSL https://claude.ai/install.sh | bash</pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">Windows</h4>
            <p className="text-sm text-muted-foreground mb-2">Open PowerShell and paste this line:</p>
            <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-sm font-mono">irm https://claude.ai/install.ps1 | iex</pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">Alternatives</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Homebrew (Mac):</strong> <code className="bg-muted px-1 rounded">brew install --cask claude-code</code></p>
              <p><strong className="text-foreground">npm (all platforms):</strong> <code className="bg-muted px-1 rounded">npm install -g @anthropic-ai/claude-code</code></p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Log in</h4>
            <p className="text-sm text-muted-foreground">
              Type <code className="bg-muted px-1 rounded">claude</code> and press Enter.
              It opens your browser to authenticate. Select a theme (light/dark) and you&apos;re ready.
            </p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Requirements</h4>
            <div className="grid gap-2 sm:grid-cols-3 text-sm text-muted-foreground">
              <div><strong className="text-foreground">Plan:</strong> Pro, Max, Team, or Enterprise</div>
              <div><strong className="text-foreground">OS:</strong> macOS, Linux, or Windows</div>
              <div><strong className="text-foreground">Updates:</strong> Automatic (or run <code className="bg-muted px-1 rounded">claude update</code>)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Choose Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">2</span>
            Choose Your Interface
          </CardTitle>
          <CardDescription>
            Terminal or VS Code &mdash; same Claude, different window
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-green-500" />
                <h4 className="font-medium">Terminal</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Type <code className="bg-muted px-1 rounded">claude</code> in any terminal. Best for quick tasks,
                running commands, and working with files.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium">VS Code Extension</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Install from Extensions marketplace (search &quot;Claude Code&quot;). Opens as a sidebar panel.
                See diffs inline, approve changes visually, reference files with <code className="bg-muted px-1 rounded">@filename</code>.
              </p>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">VS Code shortcuts:</strong>{' '}
              <code className="bg-muted px-1 rounded">Cmd+Esc</code> / <code className="bg-muted px-1 rounded">Ctrl+Esc</code> toggles focus between editor and Claude.{' '}
              <code className="bg-muted px-1 rounded">Option+K</code> / <code className="bg-muted px-1 rounded">Alt+K</code> inserts a file reference with line numbers.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">3</span>
            Basic Usage
          </CardTitle>
          <CardDescription>
            Three ways to interact with Claude Code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Interactive session</h4>
              <p className="text-sm text-muted-foreground mb-2">Start a conversation. Claude stays open so you can ask follow-ups.</p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono">claude</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">Quick question</h4>
              <p className="text-sm text-muted-foreground mb-2">Start with a prompt and stay in conversation mode.</p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">claude &quot;explain this project&quot;</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">One-shot answer</h4>
              <p className="text-sm text-muted-foreground mb-2">Use <code className="bg-muted px-1 rounded">-p</code> (print) for a quick answer. Claude responds and exits.</p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">claude -p &quot;What database does this project use?&quot;</pre>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">File context:</strong> You don&apos;t need to paste code into the chat. Claude reads files on demand.
              Point it to specific files with <code className="bg-muted px-1 rounded">@</code>:{' '}
              <code className="bg-muted px-1 rounded">&quot;Fix the bug in @src/utils.js&quot;</code>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: HANDS-ON DEMO
          ========================================= */}
      <div id="demo" className="space-y-2 pt-4 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          Hands-On Demo: Zero to Prototype
        </h2>
        <p className="text-muted-foreground">
          Follow this 10-minute walkthrough to go from an empty folder to a deployed, version-controlled, branded microsite.
          Copy and paste every command &mdash; no coding knowledge required.
        </p>
      </div>

      {/* Phase 1: Plan Mode */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">1</span>
            <Brain className="h-5 w-5 text-purple-500" />
            The Creative Pitch (Plan Mode)
          </CardTitle>
          <CardDescription>
            Claude acts as a Creative Technologist &mdash; planning the architecture before writing a single line
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Setup</h4>
            <p className="text-sm text-muted-foreground mb-2">Open your terminal and create a clean project:</p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">{`mkdir fizz-campaign
cd fizz-campaign
claude`}</pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">Enter Plan Mode</h4>
            <p className="text-sm text-muted-foreground">
              Press <code className="bg-muted px-1 rounded">Shift+Tab</code> (twice) or <code className="bg-muted px-1 rounded">Alt+M</code> to switch to <strong>PLANNING</strong> mode.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Paste this brief</h4>
            <div className="bg-muted p-4 rounded-lg text-sm font-mono space-y-2 overflow-x-auto whitespace-pre-wrap">
              <p><strong>Project:</strong> &quot;Summer Campaign&quot; Microsite for &apos;Fizz&apos; (Luxury Sparkling Water).</p>
              <p><strong>Goal:</strong> Create a high-impact, single-page microsite to pitch to a client. It needs to feel expensive, minimal, and responsive.</p>
              <p><strong>Tech Stack:</strong> HTML5, Tailwind CSS (via CDN for speed), and Vanilla JavaScript.</p>
              <p><strong>Design Requirements:</strong></p>
              <p>1. Hero Section: Full screen. Gradient background (Soft Peach to Teal). Large serif headline: &quot;Taste the Silence.&quot; Centred &apos;Shop Now&apos; button with a hover lift effect.</p>
              <p>2. Product Showcase: A 3-column grid showing three cans: &apos;Cucumber Mint&apos;, &apos;Blood Orange&apos;, and &apos;Unflavoured&apos;. Use placeholder images but style them elegantly.</p>
              <p>3. Newsletter: A minimalist email capture form at the bottom titled &quot;Join the Guestlist&quot;.</p>
              <p>4. Animation: Elements should fade in gently as the user scrolls.</p>
              <p><strong>Output:</strong> Create an implementation plan to build this immediately.</p>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">The &quot;Wow&quot; Moment</p>
                  <p className="text-sm text-muted-foreground">
                    Claude breaks this down into files (<code className="bg-muted px-1 rounded">index.html</code>, <code className="bg-muted px-1 rounded">styles.css</code>) and design logic,
                    asking clarifying questions about the &quot;vibe&quot; before writing code. It thinks like a creative technologist, not just a code generator.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Phase 2: CLAUDE.md */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">2</span>
            <Palette className="h-5 w-5 text-coral-500" />
            The Brand Guardian (CLAUDE.md)
          </CardTitle>
          <CardDescription>
            Lock in the brand identity so the AI never uses the wrong hex code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Inside your Claude session, type: <code className="bg-muted px-1 rounded">&quot;Create a CLAUDE.md file with the brand rules below.&quot;</code>
          </p>

          <div>
            <h4 className="font-medium mb-2">Paste these brand rules</h4>
            <div className="bg-muted p-4 rounded-lg text-sm font-mono space-y-2 overflow-x-auto whitespace-pre-wrap">
              <p># Brand Guidelines - FIZZ</p>
              <p>## Visual Identity</p>
              <p>- <strong>Primary Colour:</strong> #FF7F50 (Coral)</p>
              <p>- <strong>Accent Colour:</strong> #008080 (Teal)</p>
              <p>- <strong>Background:</strong> #FAFAFA (Off-white, never pure white)</p>
              <p>- <strong>Typography:</strong> Use &apos;Playfair Display&apos; for Headings (Serif) and &apos;Lato&apos; for body text.</p>
              <p>## Coding Standards</p>
              <p>- <strong>CSS:</strong> Use Tailwind utility classes.</p>
              <p>- <strong>Tone:</strong> Minimalist, luxurious, sparse.</p>
              <p>- <strong>Images:</strong> All images must have rounded corners and subtle drop shadows.</p>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-500/5 border-orange-500/20">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">The &quot;Wow&quot; Moment</p>
                  <p className="text-sm text-muted-foreground">
                    <code className="bg-muted px-1 rounded">CLAUDE.md</code> is like a brand bible that lives in the code.
                    Any future developer (or AI) working on this project will automatically follow these rules without being told.
                    The brand stays consistent even when you&apos;re not watching.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Phase 3: Build */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">3</span>
            <Play className="h-5 w-5 text-green-500" />
            The Build &amp; Iteration
          </CardTitle>
          <CardDescription>
            Execute the plan, preview the site, then simulate a picky Creative Director
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Build it</h4>
            <p className="text-sm text-muted-foreground mb-2">Tell Claude to execute:</p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">&quot;Go ahead and build the site following the plan and the CLAUDE.md guidelines.&quot;</pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">Preview the result</h4>
            <p className="text-sm text-muted-foreground mb-2">Once the code is written, open the site in your browser:</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="font-medium text-sm">Mac</p>
                <pre className="text-sm font-mono mt-1">open index.html</pre>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="font-medium text-sm">Windows</p>
                <pre className="text-sm font-mono mt-1">start index.html</pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Simulate client feedback</h4>
            <p className="text-sm text-muted-foreground mb-2">Now play the role of a picky Creative Director. Paste this:</p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">&quot;The Hero section feels too static. Make the headline 50% larger and add a slow &apos;floating&apos; animation to the product images so they look like they are drifting in water.&quot;</pre>
          </div>

          <Card className="bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">The &quot;Wow&quot; Moment</p>
                  <p className="text-sm text-muted-foreground">
                    Claude edits the specific CSS classes instantly to match the feedback. Refresh the browser &mdash; the changes are live.
                    This is the iteration speed that normally takes a developer 30 minutes, done in 15 seconds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Phase 4: Delivery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">4</span>
            <Github className="h-5 w-5 text-primary" />
            The Delivery (GitHub)
          </CardTitle>
          <CardDescription>
            This isn&apos;t just a toy &mdash; it&apos;s production-ready code stored safely
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Save and publish</h4>
            <p className="text-sm text-muted-foreground mb-2">Tell Claude:</p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">&quot;Initialize a git repository here. Commit all files with the message &apos;Initial pitch prototype&apos;. Then explain how I can push this to a new private GitHub repository.&quot;</pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">What happens next</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Claude runs <code className="bg-muted px-1 rounded">git init</code> and <code className="bg-muted px-1 rounded">git commit</code> for you, then guides you to publish with the GitHub CLI:
            </p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">gh repo create fizz-campaign --private --source=. --push</pre>
          </div>

          <Card className="bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start gap-3">
                <Rocket className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">The &quot;Wow&quot; Moment</p>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ve gone from a blank screen to a deployed, version-controlled, branded prototype in under 10 minutes.
                    The code is on GitHub. The brand guidelines are embedded. The client feedback is already incorporated.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Quick Start: You're done */}
      <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-lg">You did it.</p>
              <p className="text-muted-foreground">
                You just went from a blank folder to a branded, version-controlled prototype. That&apos;s the core of Claude Code.
                Everything below is optional &mdash; deeper workflows, shortcuts, and advanced features for when you&apos;re ready.
              </p>
              <p className="text-sm text-muted-foreground">
                Bookmark this page and come back when you want to learn about{' '}
                <a href="#workflows" className="text-primary hover:underline">core workflows</a>,{' '}
                <a href="#git" className="text-primary hover:underline">Git &amp; GitHub</a>,{' '}
                <a href="#config" className="text-primary hover:underline">configuration</a>, or{' '}
                <a href="#advanced" className="text-primary hover:underline">advanced features</a>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: CORE WORKFLOWS
          ========================================= */}
      <div id="workflows" className="space-y-2 pt-4 scroll-mt-20">
        <h2 className="text-2xl font-bold">Core Workflows</h2>
        <p className="text-muted-foreground">The five things you&apos;ll use Claude Code for most often.</p>
      </div>

      {/* Workflow 1: Explore */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileQuestion className="h-5 w-5 text-primary" />
            Understand Any Project
          </CardTitle>
          <CardDescription>
            Get a plain-English explanation of any codebase you receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Navigate to the project</h4>
            <p className="text-sm text-muted-foreground">
              Type <code className="bg-muted px-1 rounded">cd</code> followed by a space,
              then <strong>drag the project folder</strong> from Finder/Explorer into the terminal window and press Enter.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Start Claude</h4>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono">claude</pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">Example prompts</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;What does this project do?&quot;</code>
                <p className="text-sm text-muted-foreground">Summarizes the purpose, tech stack, and architecture</p>
              </div>
              <div className="flex gap-3 items-start">
                <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Explain the folder structure&quot;</code>
                <p className="text-sm text-muted-foreground">Maps out which files do what and which ones you can ignore</p>
              </div>
              <div className="flex gap-3 items-start">
                <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;How do I run this locally?&quot;</code>
                <p className="text-sm text-muted-foreground">Reads the docs and gives you the exact commands</p>
              </div>
              <div className="flex gap-3 items-start">
                <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Find where the login page is&quot;</code>
                <p className="text-sm text-muted-foreground">Searches every file and points you to the exact location</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow 2: Fix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Fix Bugs
          </CardTitle>
          <CardDescription>
            Paste an error, get a fix &mdash; without opening a single file
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <p className="text-sm">Copy the error message (from browser, terminal, or build output)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <div>
                <p className="text-sm">Paste it into Claude Code:</p>
                <code className="bg-muted px-2 py-1 rounded text-sm mt-1 inline-block">&quot;I&apos;m getting this error: [paste error]. Fix it.&quot;</code>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <p className="text-sm">Claude locates the file, writes the fix, and shows you a diff of the change</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <p className="text-sm">Accept the change. If it looks wrong, say &quot;no&quot; and explain what&apos;s different.</p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Undo mistakes:</strong> Press{' '}
              <code className="bg-muted px-1 rounded">Esc</code> twice to open the rewind menu. Roll back
              Claude&apos;s changes to any previous point in the conversation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Workflow 3: Build */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Build Something New
          </CardTitle>
          <CardDescription>
            Describe what you want and Claude creates it
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Describe what you need in plain English and Claude creates the files, writes the code, and wires everything together.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Add a newsletter signup form to the homepage&quot;</code>
              <p className="text-sm text-muted-foreground">Creates the component, styles it, and adds validation</p>
            </div>
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Create an API endpoint that sends a welcome email&quot;</code>
              <p className="text-sm text-muted-foreground">Writes the route, connects to your email service, handles errors</p>
            </div>
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Make the sidebar collapsible on mobile&quot;</code>
              <p className="text-sm text-muted-foreground">Finds the component, adds responsive behaviour, tests it</p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> Be specific. &quot;Add a form&quot; is okay.
              &quot;Add a form with name, email, and company fields that saves to Supabase&quot; gets a much better result first try.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Workflow 4: Plan Mode */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Plan Before Coding
          </CardTitle>
          <CardDescription>
            For complex tasks, force Claude to think before it acts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Plan Mode makes Claude generate a step-by-step implementation plan and wait for your approval
            before writing any code. This reduces bugs and &quot;hallucinated&quot; code on complex tasks.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-1">Activate Plan Mode</h4>
              <p className="text-sm text-muted-foreground">
                Press <code className="bg-muted px-1 rounded">Shift+Tab</code> twice, or <code className="bg-muted px-1 rounded">Alt+M</code>, or type <code className="bg-muted px-1 rounded">/plan</code>.
                Claude will research, ask clarifying questions, and present a plan before touching any files.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Extended Thinking</h4>
              <p className="text-sm text-muted-foreground">
                Toggle with <code className="bg-muted px-1 rounded">Option+T</code> (Mac) / <code className="bg-muted px-1 rounded">Alt+T</code>.
                This forces Claude to show its reasoning process before writing code, which significantly reduces logic errors on complex refactors.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow 5: TDD */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5 text-primary" />
            Test-Driven Development
          </CardTitle>
          <CardDescription>
            Write the test first, then the code &mdash; Claude excels at this loop
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The &quot;Red-Green-Refactor&quot; loop prevents Claude from writing code that looks right but doesn&apos;t actually work.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-semibold shrink-0">1</span>
              <div>
                <p className="text-sm font-medium">Red: Write a failing test</p>
                <p className="text-sm text-muted-foreground">&quot;Write a test for a function that calculates campaign ROI&quot; &mdash; it will fail because the function doesn&apos;t exist yet</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold shrink-0">2</span>
              <div>
                <p className="text-sm font-medium">Green: Write minimal code to pass</p>
                <p className="text-sm text-muted-foreground">&quot;Now write just enough code to make that test pass&quot;</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold shrink-0">3</span>
              <div>
                <p className="text-sm font-medium">Refactor: Clean up while tests stay green</p>
                <p className="text-sm text-muted-foreground">&quot;Refactor this code but make sure the tests still pass&quot;</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: GIT & GITHUB
          ========================================= */}
      <div id="git" className="space-y-2 pt-4 scroll-mt-20">
        <h2 className="text-2xl font-bold">Git &amp; GitHub</h2>
        <p className="text-muted-foreground">Version control and collaboration &mdash; handled by Claude.</p>
      </div>

      {/* What is GitHub */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5 text-primary" />
            GitHub: The Basics
          </CardTitle>
          <CardDescription>
            What it is, why it matters, and the vocabulary you need
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Git vs GitHub</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="font-medium text-sm">Git (local tool)</p>
                <p className="text-sm text-muted-foreground">A version control system on your computer. Saves snapshots of your project so you can undo mistakes.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="font-medium text-sm">GitHub (cloud platform)</p>
                <p className="text-sm text-muted-foreground">A website built on Git. Stores your code in the cloud, lets you share it, and collaborate with others.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Key vocabulary</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-primary font-medium text-sm mt-0.5">&bull;</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Repository (&quot;repo&quot;):</strong> A project folder that tracks the history of every change</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-medium text-sm mt-0.5">&bull;</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Commit:</strong> A save point. A snapshot of your code at a specific moment</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-medium text-sm mt-0.5">&bull;</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Branch:</strong> A parallel version of your project. Experiment without breaking the main code.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-medium text-sm mt-0.5">&bull;</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Pull Request (PR):</strong> A request to merge your branch into main. Others review before it&apos;s final.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-medium text-sm mt-0.5">&bull;</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">.gitignore:</strong> A file that tells Git what <em>not</em> to track (passwords, system files, etc.)</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Setup (one-time)</h4>
            <p className="text-sm text-muted-foreground">
              Install the GitHub CLI: <code className="bg-muted px-1 rounded">brew install gh</code> (Mac) or <code className="bg-muted px-1 rounded">winget install GitHub.cli</code> (Windows).
              Then run <code className="bg-muted px-1 rounded">gh auth login</code> to connect your account. This lets Claude Code create PRs and manage issues for you.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Git Workflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            Git Without the Pain
          </CardTitle>
          <CardDescription>
            Save and share your work without memorizing cryptic commands
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">See what changed</h4>
              <p className="text-sm text-muted-foreground">
                Ask <code className="bg-muted px-1 rounded">&quot;What files have I changed?&quot;</code> to see a summary of your session.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Save your work</h4>
              <p className="text-sm text-muted-foreground mb-2">Claude reviews your changes and writes a professional commit message automatically.</p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono">&quot;Commit my changes&quot;</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">Create a pull request</h4>
              <p className="text-sm text-muted-foreground mb-2">Claude pushes the branch, writes a title and description, and gives you the link.</p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono">&quot;Create a PR for these changes&quot;</pre>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Best practice:</strong> Commit after every successful change. If Claude breaks something
              in the next turn, you can easily roll back with <code className="bg-muted px-1 rounded">Esc Esc</code> instead of trying to &quot;talk&quot; the AI out of its mistake.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Custom Slash Commands for GitHub */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-primary" />
            Custom Slash Commands
          </CardTitle>
          <CardDescription>
            Create reusable shortcuts for repetitive tasks like PRs, issue fixes, and code reviews
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Custom commands are Markdown files that become slash commands. Create them in <code className="bg-muted px-1 rounded">.claude/commands/</code> (project-level)
            or <code className="bg-muted px-1 rounded">~/.claude/commands/</code> (global). The filename becomes the command.
          </p>

          <div>
            <h4 className="font-medium mb-2">Example: Fix a GitHub Issue</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Create <code className="bg-muted px-1 rounded">.claude/commands/fix-issue.md</code>:
            </p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">{`Fix issue #$ARGUMENTS following our coding standards.
1. Read the issue details using \`gh issue view $ARGUMENTS\`.
2. Analyze the relevant code files.
3. Implement the fix and run tests.`}</pre>
            <p className="text-sm text-muted-foreground mt-2">
              Usage: <code className="bg-muted px-1 rounded">/fix-issue 123</code>
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Example: Create a Pull Request</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Create <code className="bg-muted px-1 rounded">.claude/commands/pr.md</code>:
            </p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">{`Push changes and create a PR.
1. Push the current branch to origin.
2. Create a pull request using \`gh pr create\`.
3. Generate a title and summary based on the changes.
4. Ask me for confirmation before submitting.`}</pre>
            <p className="text-sm text-muted-foreground mt-2">
              Usage: <code className="bg-muted px-1 rounded">/pr</code>
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Example: Review a PR</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Create <code className="bg-muted px-1 rounded">.claude/commands/review.md</code>:
            </p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">{`Review pull request #$ARGUMENTS.
1. Checkout the PR using \`gh pr checkout $ARGUMENTS\`.
2. Run \`gh pr diff\` to see the changes.
3. Analyze for bugs, security issues, and style violations.
4. Summarize your findings.`}</pre>
            <p className="text-sm text-muted-foreground mt-2">
              Usage: <code className="bg-muted px-1 rounded">/review 45</code>
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Context injection:</strong> Use <code className="bg-muted px-1 rounded">!</code> to inject shell output directly into your command.
              For example, <code className="bg-muted px-1 rounded">!`git diff HEAD`</code> in your Markdown template feeds the current diff into Claude&apos;s prompt before it starts thinking.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: CONFIGURATION
          ========================================= */}
      <div id="config" className="space-y-2 pt-4 scroll-mt-20">
        <h2 className="text-2xl font-bold">Configuration</h2>
        <p className="text-muted-foreground">Teach Claude your project&apos;s rules so it follows them every session.</p>
      </div>

      {/* CLAUDE.md */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Project Memory: CLAUDE.md
          </CardTitle>
          <CardDescription>
            The most important configuration step &mdash; teach Claude your project once
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A <code className="bg-muted px-1 rounded">CLAUDE.md</code> file in your project root acts as a &quot;readme&quot; for the AI.
            Claude reads it automatically at the start of every session.
          </p>

          <div>
            <h4 className="font-medium mb-2">Create one automatically</h4>
            <p className="text-sm text-muted-foreground mb-2">Inside a Claude Code session, type:</p>
            <pre className="bg-muted p-3 rounded-lg text-sm font-mono">/init</pre>
            <p className="text-sm text-muted-foreground mt-2">
              Claude scans your project and creates a starter CLAUDE.md with relevant context.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">What to include</h4>
            <div className="bg-muted p-4 rounded-lg text-sm font-mono space-y-1">
              <p><strong>Build:</strong> npm run build</p>
              <p><strong>Test:</strong> npm test</p>
              <p><strong>Style:</strong> Use functional React components and Tailwind CSS.</p>
              <p><strong>Rules:</strong> Always write unit tests before implementing features.</p>
              <p><strong>Architecture:</strong> Auth uses Supabase. API routes are in /app/api.</p>
              <p><strong>Gotcha:</strong> Never edit database.ts &mdash; it&apos;s auto-generated.</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Settings hierarchy</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Team shared:</strong> <code className="bg-muted px-1 rounded">CLAUDE.md</code> &mdash; commit to git, everyone gets the same rules</p>
              <p><strong className="text-foreground">Personal:</strong> <code className="bg-muted px-1 rounded">CLAUDE.local.md</code> &mdash; your private notes, automatically git-ignored</p>
              <p><strong className="text-foreground">Global:</strong> <code className="bg-muted px-1 rounded">~/.claude/CLAUDE.md</code> &mdash; your preferences across all projects</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-primary" />
            Sessions: Pick Up Where You Left Off
          </CardTitle>
          <CardDescription>
            Claude remembers your conversations so you can continue later
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Continue your last session</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono">claude -c</pre>
              <p className="text-sm text-muted-foreground mt-1">Picks up exactly where you left off.</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Browse all sessions</h4>
              <p className="text-sm text-muted-foreground">
                Type <code className="bg-muted px-1 rounded">/resume</code> inside a session to see previous conversations and jump back into any of them.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Name your sessions</h4>
              <p className="text-sm text-muted-foreground">
                Use <code className="bg-muted px-1 rounded">/rename auth-refactor</code> to give a session a name, then resume with <code className="bg-muted px-1 rounded">claude -r auth-refactor</code>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: REFERENCE
          ========================================= */}
      <div className="space-y-2 pt-4">
        <h2 className="text-2xl font-bold">Reference</h2>
        <p className="text-muted-foreground">Quick-reference tables for commands, shortcuts, and files.</p>
      </div>

      {/* Slash Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Slash Commands
          </CardTitle>
          <CardDescription>
            Type <code className="bg-muted px-1 rounded">/</code> inside a session to see all available commands
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Command</th>
                  <th className="text-left py-2 font-medium">What It Does</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/help</code></td>
                  <td className="py-2 text-muted-foreground">Shows all commands and shortcuts</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/init</code></td>
                  <td className="py-2 text-muted-foreground">Creates a CLAUDE.md memory file for the project</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/compact</code></td>
                  <td className="py-2 text-muted-foreground">Summarizes conversation to free up context space</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/cost</code></td>
                  <td className="py-2 text-muted-foreground">Shows tokens used and session cost</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/resume</code></td>
                  <td className="py-2 text-muted-foreground">Browse and resume a previous session</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/memory</code></td>
                  <td className="py-2 text-muted-foreground">Edit your CLAUDE.md files directly</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/model</code></td>
                  <td className="py-2 text-muted-foreground">Switch between Opus, Sonnet, and Haiku mid-session</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/plan</code></td>
                  <td className="py-2 text-muted-foreground">Enter Plan Mode &mdash; Claude thinks before coding</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/clear</code></td>
                  <td className="py-2 text-muted-foreground">Wipes conversation and starts fresh</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/doctor</code></td>
                  <td className="py-2 text-muted-foreground">Checks your installation for problems</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/exit</code></td>
                  <td className="py-2 text-muted-foreground">Ends the session</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Keyboard Shortcuts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="h-5 w-5 text-primary" />
            Keyboard Shortcuts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Shortcut</th>
                  <th className="text-left py-2 font-medium">What It Does</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Ctrl+C</code></td>
                  <td className="py-2 text-muted-foreground">Stop Claude mid-response</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Esc Esc</code></td>
                  <td className="py-2 text-muted-foreground">Undo &mdash; opens the rewind menu to roll back changes</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Shift+Tab</code> / <code className="bg-muted px-1 rounded">Alt+M</code></td>
                  <td className="py-2 text-muted-foreground">Toggle permission modes (Ask / Plan / Auto-accept)</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Option+T</code> / <code className="bg-muted px-1 rounded">Alt+T</code></td>
                  <td className="py-2 text-muted-foreground">Toggle extended thinking (deeper reasoning)</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Option+Enter</code> / <code className="bg-muted px-1 rounded">Shift+Enter</code></td>
                  <td className="py-2 text-muted-foreground">New line without sending (for multi-line prompts)</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Cmd+V</code> / <code className="bg-muted px-1 rounded">Ctrl+V</code></td>
                  <td className="py-2 text-muted-foreground">Paste images from clipboard (screenshots, diagrams)</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Ctrl+L</code></td>
                  <td className="py-2 text-muted-foreground">Clear the terminal screen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* File Mentions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            Files, Images &amp; Directories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Mention files with @</h4>
              <p className="text-sm text-muted-foreground">
                Type <code className="bg-muted px-1 rounded">@</code> followed by a filename. Claude reads it before responding.
              </p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono mt-2 overflow-x-auto">&quot;Explain what @src/lib/auth.ts does&quot;</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">Paste screenshots</h4>
              <p className="text-sm text-muted-foreground">
                <code className="bg-muted px-1 rounded">Cmd+V</code> / <code className="bg-muted px-1 rounded">Ctrl+V</code> pastes images directly.
                Great for showing UI bugs, design mockups, or error dialogs.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Work across directories</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">claude --add-dir ../shared-components ../design-tokens</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">Pipe content in</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">cat error.log | claude -p &quot;What went wrong?&quot;</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: ADVANCED FEATURES
          ========================================= */}
      <div id="advanced" className="space-y-2 pt-4 scroll-mt-20">
        <h2 className="text-2xl font-bold">Advanced Features</h2>
        <p className="text-muted-foreground">Power-user tools for automation, integrations, and multi-agent workflows.</p>
      </div>

      {/* MCP */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plug className="h-5 w-5 text-primary" />
            MCP: Connect External Tools
          </CardTitle>
          <CardDescription>
            Give Claude access to databases, browsers, APIs, and more
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            MCP (Model Context Protocol) is an open standard that lets Claude talk to external tools.
            Add a browser to let Claude screenshot your app. Add Slack to let Claude post updates.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-1">Add a server</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">claude mcp add --transport http github https://api.githubcopilot.com/mcp/</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">List installed servers</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono">claude mcp list</pre>
            </div>
            <div>
              <h4 className="font-medium mb-1">Import from Claude Desktop</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono">claude mcp add-from-claude-desktop</pre>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Team sharing:</strong> MCP servers configured in <code className="bg-muted px-1 rounded">.mcp.json</code> (project root)
              are shared with the team via git. Personal servers go in <code className="bg-muted px-1 rounded">~/.claude.json</code>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Subagents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            Subagents
          </CardTitle>
          <CardDescription>
            Spawn specialized agents for big tasks without cluttering your main session
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            For massive tasks, Claude can spawn &quot;subagents&quot; &mdash; specialized instances that handle specific jobs
            (like research, review, or testing) in the background, then report back to the main conversation.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Use a subagent to investigate the database schema&quot;</code>
              <p className="text-sm text-muted-foreground">Claude spawns a researcher that digs through files without filling your context</p>
            </div>
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Spawn three subagents to check different approaches&quot;</code>
              <p className="text-sm text-muted-foreground">They run in parallel, investigate different options, and report findings</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hooks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Hooks: Automate on Every Edit
          </CardTitle>
          <CardDescription>
            Run commands automatically before or after Claude acts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Hooks are shell commands that fire at specific moments &mdash; after Claude edits a file, before it runs a command, when a session starts, etc.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-1">Example: Auto-format after every edit</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Add to <code className="bg-muted px-1 rounded">.claude/settings.json</code>:
              </p>
              <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">{`"hooks": {
  "PostToolUse": [{
    "matcher": "Edit|Write",
    "hooks": [{
      "type": "command",
      "command": "npx prettier --write $FILE_PATH"
    }]
  }]
}`}</pre>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Type <code className="bg-muted px-1 rounded">/hooks</code> in a session to set up hooks interactively.
          </p>
        </CardContent>
      </Card>

      {/* Browser Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Chrome className="h-5 w-5 text-primary" />
            Browser Integration
          </CardTitle>
          <CardDescription>
            Let Claude see and interact with your browser
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            With the Chrome extension installed, Claude Code can view your web pages, read console errors,
            and test local applications directly.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Check the browser for errors&quot;</code>
              <p className="text-sm text-muted-foreground">Reads your browser console and fixes the issues it finds</p>
            </div>
            <div className="flex gap-3 items-start">
              <code className="bg-muted px-2 py-1 rounded text-sm shrink-0">&quot;Look at localhost:3000 and fix the layout&quot;</code>
              <p className="text-sm text-muted-foreground">Screenshots the page, identifies the problem, and edits the CSS</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Start with: <code className="bg-muted px-1 rounded">claude --chrome</code>
          </p>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: SAFETY & COSTS
          ========================================= */}
      <div className="space-y-2 pt-4">
        <h2 className="text-2xl font-bold">Safety, Permissions &amp; Costs</h2>
        <p className="text-muted-foreground">Stay in control and manage your token usage.</p>
      </div>

      {/* Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Permissions: Claude Always Asks First
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            By default, Claude Code won&apos;t run commands or edit files without your permission.
            Every change shows a diff so you can review before accepting.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-medium text-sm mt-0.5">&bull;</span>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Reading files:</strong> Always allowed &mdash; no permission needed</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-500 font-medium text-sm mt-0.5">&bull;</span>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Editing files:</strong> Shows the change and waits for approval</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-500 font-medium text-sm mt-0.5">&bull;</span>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Running commands:</strong> Shows the command first and asks permission</p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-3">
            <div>
              <h4 className="font-medium mb-1">Pre-approve safe commands</h4>
              <p className="text-sm text-muted-foreground">
                Add rules in your settings so Claude doesn&apos;t ask every time for things like <code className="bg-muted px-1 rounded">npm run build</code> or <code className="bg-muted px-1 rounded">npm test</code>.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Auto-accept mode (use with caution)</h4>
              <p className="text-sm text-muted-foreground">
                Launch with <code className="bg-muted px-1 rounded">claude --dangerously-skip-permissions</code> to auto-approve everything.
                Only do this in a sandboxed environment or a git repo where you can easily revert changes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Managing Costs
          </CardTitle>
          <CardDescription>
            Switch models, compact context, and monitor usage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Switch models for different tasks</h4>
              <p className="text-sm text-muted-foreground">
                Use <code className="bg-muted px-1 rounded">/model</code> to switch mid-session.
                Use <strong>Haiku</strong> for simple tasks (cheapest/fastest), <strong>Sonnet</strong> for most coding (balanced),
                and <strong>Opus</strong> for complex reasoning (most capable, most expensive).
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Context hygiene</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><code className="bg-muted px-1 rounded">/compact</code> &mdash; Summarizes conversation history to reduce token usage while keeping the gist</p>
                <p><code className="bg-muted px-1 rounded">/clear</code> &mdash; Wipes context completely when switching tasks (prevents old code from &quot;polluting&quot; new work)</p>
                <p><code className="bg-muted px-1 rounded">/cost</code> &mdash; Check your current session&apos;s token usage and cost</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          SECTION: EXPERT TIPS
          ========================================= */}
      <div className="space-y-2 pt-4">
        <h2 className="text-2xl font-bold">Expert Tips</h2>
        <p className="text-muted-foreground">Techniques that separate power users from beginners.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-1">Commit after every successful change</h4>
              <p className="text-sm text-muted-foreground">
                Don&apos;t let Claude run for too long without saving. If it breaks something on the next turn,
                you can revert instantly instead of trying to &quot;talk&quot; the AI out of its mistake.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Use Plan Mode for complex refactors</h4>
              <p className="text-sm text-muted-foreground">
                Press <code className="bg-muted px-1 rounded">Shift+Tab</code> twice to enter Plan Mode. Claude will research,
                outline a strategy, and wait for your approval before touching any files.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Use /compact when switching tasks</h4>
              <p className="text-sm text-muted-foreground">
                If you&apos;re switching from &quot;fixing a bug&quot; to &quot;writing docs&quot;, run <code className="bg-muted px-1 rounded">/compact</code> first
                to summarize the old context. Or <code className="bg-muted px-1 rounded">/clear</code> if the tasks are completely unrelated.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Force TDD to prevent hallucinations</h4>
              <p className="text-sm text-muted-foreground">
                Ask Claude to write the test first, then the code. This grounds the implementation in concrete
                assertions instead of letting it generate code that &quot;looks right&quot; but doesn&apos;t work.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Use subagents for deep dives</h4>
              <p className="text-sm text-muted-foreground">
                &quot;Spawn three subagents to investigate this issue&quot; &mdash; they run in parallel, check different files,
                and report back. Keeps your main context window clean.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Headless mode for CI/CD</h4>
              <p className="text-sm text-muted-foreground">
                Run Claude in GitHub Actions pipelines with <code className="bg-muted px-1 rounded">claude -p &quot;Review this PR for security issues&quot;</code>.
                Pipe the output as a PR comment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =========================================
          CHEAT SHEET
          ========================================= */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Cheat Sheet</CardTitle>
          <CardDescription>Everything in one table</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Goal</th>
                  <th className="text-left py-2 font-medium">What to Type</th>
                  <th className="text-left py-2 font-medium">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Start a session</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">claude</code></td>
                  <td className="py-2 text-muted-foreground">Opens an interactive conversation</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Continue last session</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">claude -c</code></td>
                  <td className="py-2 text-muted-foreground">Resumes where you left off</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Quick answer</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">claude -p &quot;question&quot;</code></td>
                  <td className="py-2 text-muted-foreground">Prints answer and exits</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Understand project</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">&quot;Explain this project&quot;</code></td>
                  <td className="py-2 text-muted-foreground">Reads all files and gives a summary</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Fix a bug</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">&quot;Fix: [paste error]&quot;</code></td>
                  <td className="py-2 text-muted-foreground">Finds the cause and writes the fix</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Build something</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">&quot;Add [feature]&quot;</code></td>
                  <td className="py-2 text-muted-foreground">Creates files and writes the code</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Save work</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">&quot;Commit my changes&quot;</code></td>
                  <td className="py-2 text-muted-foreground">Writes a commit message and saves to git</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Create PR</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">&quot;Create a PR&quot;</code></td>
                  <td className="py-2 text-muted-foreground">Pushes branch and opens a pull request</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Reference a file</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">@filename</code></td>
                  <td className="py-2 text-muted-foreground">Claude reads that file before responding</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Undo changes</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">Esc Esc</code></td>
                  <td className="py-2 text-muted-foreground">Opens rewind menu to roll back</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Plan mode</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/plan</code></td>
                  <td className="py-2 text-muted-foreground">Claude plans before coding</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Check cost</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/cost</code></td>
                  <td className="py-2 text-muted-foreground">Shows tokens used this session</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Free up context</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/compact</code></td>
                  <td className="py-2 text-muted-foreground">Summarizes conversation to make room</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Switch model</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/model</code></td>
                  <td className="py-2 text-muted-foreground">Choose Opus, Sonnet, or Haiku</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">End session</td>
                  <td className="py-2"><code className="bg-muted px-1 rounded">/exit</code></td>
                  <td className="py-2 text-muted-foreground">Saves and closes the conversation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Want autonomous desktop tasks?</h3>
              <p className="text-sm text-muted-foreground">
                Cowork lets Claude control your computer &mdash; move files, fill spreadsheets, create documents.
              </p>
              <Link
                href="/guides/cowork"
                className="flex items-center gap-1 text-primary hover:underline font-medium text-sm"
              >
                Cowork Guide
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Connect to external tools?</h3>
              <p className="text-sm text-muted-foreground">
                MCP servers let Claude access Slack, Notion, Google Drive, and more.
              </p>
              <Link
                href="/guides/mcp-setup"
                className="flex items-center gap-1 text-primary hover:underline font-medium text-sm"
              >
                MCP Setup Guide
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
