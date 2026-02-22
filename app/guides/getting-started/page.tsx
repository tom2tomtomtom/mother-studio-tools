export const revalidate = 3600;

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  GraduationCap,
  Lightbulb,
  Plug,
  Mail,
  Calendar,
  FolderOpen,
  Globe,
  MessageSquare,
  Bot,
  Terminal,
  Brain,
  Layers,
  Share2,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  FileText,
  Settings,
  Download,
  Monitor
} from 'lucide-react';

function Screenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border overflow-hidden shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <p className="text-xs text-muted-foreground text-center italic">{caption}</p>
      )}
    </div>
  );
}

export default function GettingStartedPage() {
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
        <span className="text-foreground">Getting Started</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">15 min</Badge>
          <Badge variant="outline" className="text-xs text-muted-foreground">Verified Feb 2026</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Getting Started with Claude</h1>
            <p className="text-muted-foreground">Your complete beginner&apos;s guide to Claude for Teams &amp; Enterprise</p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <Card className="bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is Claude?</p>
              <p className="text-muted-foreground mt-1">
                Claude is an AI assistant made by Anthropic. Think of it as a brilliant colleague who can write,
                research, analyse, brainstorm, summarise, and create — available whenever you need it.
                Your company has a Team or Enterprise account, which means you get the most powerful version with
                extra features like connectors, extended thinking, and team sharing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== DOWNLOAD DESKTOP APP ===== */}
      <Card className="border-purple-500/30 bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Download className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold mb-1">Download the Claude Desktop App</p>
              <p className="text-sm text-muted-foreground mb-3">
                Claude works in your browser at <strong>claude.ai</strong>, but some of the most powerful features — like
                <strong> Cowork</strong> (autonomous agent mode) — are <strong>only available in the Desktop app</strong>.
                We recommend installing it now so you have access to everything.
              </p>
              <a
                href="https://claude.ai/download"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition-colors"
              >
                <Monitor className="h-4 w-4" />
                Download Claude Desktop
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Available for Mac and Windows. You&apos;ll log in with the same company SSO.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== SECTION 1: THE INTERFACE ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Step 1: Finding Your Way Around
          </CardTitle>
          <CardDescription>
            The Desktop app and the web interface
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Log in with your company SSO — either in the <strong>Desktop app</strong> or at <strong>claude.ai</strong>.
            We recommend the Desktop app because it gives you access to <strong>Cowork</strong> (autonomous agent mode).
          </p>

          <Screenshot
            src="/screenshots/getting-started/desktop-home-annotated.png"
            alt="Claude Desktop app showing Chat, Cowork, and Code tabs at the top, with annotation: Desktop app gives you access to Cowork"
            caption="The Desktop app — with Chat, Cowork, and Code tabs at the top."
          />

          <p className="text-sm text-muted-foreground">
            The <strong>web interface</strong> at claude.ai has all the same Chat functionality — connectors, research,
            artifacts, styles — everything except Cowork and Code.
          </p>

          <Screenshot
            src="/screenshots/getting-started/web-home-annotated.png"
            alt="Claude web interface at claude.ai with annotation: The web Claude has all other functionality"
            caption="The web interface at claude.ai — all features except Cowork."
          />

          <p className="text-sm text-muted-foreground">
            Click the <strong>sidebar toggle</strong> (top-left) to see your conversation history, Projects, and Artifacts.
          </p>

          <Screenshot
            src="/screenshots/getting-started/sidebar-annotated.png"
            alt="Claude sidebar open showing Chats, Projects, Artifacts, and recent conversations with annotation: Sidebar shows previous chats, Access to Projects, and Artefacts"
            caption="The sidebar — your chats, Projects, and Artifacts are all here."
          />

          <p className="text-sm text-muted-foreground">
            Click the <strong>+</strong> button in the text box to access files, research, styles, and connectors.
          </p>

          <Screenshot
            src="/screenshots/getting-started/plus-menu-annotated.png"
            alt="The + menu showing options for adding files, research, web search, styles, and connectors with annotations"
            caption="The + menu — add files, enable Research, pick a response style, and manage connectors."
          />
        </CardContent>
      </Card>

      {/* ===== SECTION 2: MODELS & EXTENDED THINKING ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-orange-500" />
            Step 2: Choosing a Model &amp; Extended Thinking
          </CardTitle>
          <CardDescription>
            Pick the right brain for the job
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Click the model name (e.g. &quot;Sonnet 4.5&quot;) in the text box to see your options.
          </p>

          <Screenshot
            src="/screenshots/getting-started/choose-model-annotated.png"
            alt="Model selector dropdown showing Opus 4.6, Sonnet 4.5, Haiku 4.5, and Extended thinking toggle"
            caption="Click the model name to switch models or toggle Extended thinking."
          />

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold shrink-0">O</div>
              <div>
                <p className="font-medium text-sm">Opus 4.6 — &quot;Most capable for ambitious work&quot;</p>
                <p className="text-xs text-muted-foreground">The most powerful model. Use for complex strategy, long analysis, or when quality matters most. Slower but best results.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-blue-500/30 bg-blue-500/5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold shrink-0">S</div>
              <div>
                <p className="font-medium text-sm">Sonnet 4.5 — &quot;Best for everyday tasks&quot; <Badge variant="secondary" className="text-xs ml-1">Recommended</Badge></p>
                <p className="text-xs text-muted-foreground">Fast, smart, and great for 90% of what you&apos;ll do. Writing, brainstorming, summarising, analysis — start here.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-500 text-xs font-bold shrink-0">H</div>
              <div>
                <p className="font-medium text-sm">Haiku 4.5 — &quot;Fastest for quick answers&quot;</p>
                <p className="text-xs text-muted-foreground">Lightning fast for simple questions, quick lookups, and straightforward tasks.</p>
              </div>
            </div>
          </div>

          {/* Extended Thinking */}
          <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 text-orange-500" />
              <p className="font-semibold text-sm">Extended Thinking</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Toggle this on in the model dropdown and Claude will take extra time to reason through complex problems.
              You&apos;ll see <strong>&quot;Extended&quot;</strong> appear next to the model name when it&apos;s active.
            </p>

            <Screenshot
              src="/screenshots/getting-started/extended-thinking-annotated.png"
              alt="Extended thinking toggled on, showing Opus 4.6 Extended with the blue toggle"
              caption="Extended thinking ON — notice 'Extended' next to the model name."
            />

            <div className="p-3 rounded-lg bg-muted text-sm space-y-2 mt-3">
              <p><strong>When to use it:</strong></p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Complex strategy questions with many factors to weigh</li>
                <li>Analysing long documents where you need nuanced insights</li>
                <li>Multi-step problems (budgets, timelines, resource allocation)</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                <strong>When to skip it:</strong> Quick questions, simple rewrites, brainstorming — standard mode is faster.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== SECTION 3: CONNECTORS ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plug className="h-5 w-5 text-cyan-500" />
            Step 3: Connect Your Tools
          </CardTitle>
          <CardDescription>
            Let Claude access your Gmail, Google Drive, and Calendar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Connectors let Claude read your emails, check your calendar, and search your files — so you can ask things like
            &quot;summarise yesterday&apos;s emails from the client&quot; or &quot;find the latest brand guidelines in Drive.&quot;
          </p>

          {/* How to enable */}
          <div>
            <p className="font-medium mb-3">How to Turn On Connectors</p>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
                <span>Click your <strong>name</strong> at the bottom-left of the sidebar to open the menu, then click <strong>Settings</strong></span>
              </li>
            </ol>
          </div>

          <Screenshot
            src="/screenshots/getting-started/settings-access-annotated.png"
            alt="Profile menu showing Settings option with annotation: Click here for settings"
            caption="Click your name at the bottom-left, then Settings."
          />

          <ol className="space-y-3 text-sm" start={2}>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <span>Go to the <strong>Connectors</strong> tab on the left — this is the most useful thing to set up first</span>
            </li>
          </ol>

          <Screenshot
            src="/screenshots/getting-started/settings-page-annotated.png"
            alt="Settings page with Connectors tab highlighted in the left sidebar, with annotation: First most useful thing is connectors"
            caption="In Settings, click Connectors on the left."
          />

          <ol className="space-y-3 text-sm" start={3}>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <span>Click <strong>Connect</strong> next to Gmail, Google Calendar, and Google Drive. Follow the Google prompts to grant access.</span>
            </li>
          </ol>

          <Screenshot
            src="/screenshots/getting-started/connectors-page-annotated.png"
            alt="Connectors settings page showing Gmail, Google Calendar, and Google Drive all connected, with annotation: Connect your Claude to Gmail, Calendar, and Drive. NB. this works better on the web app"
            caption="Connect Gmail, Calendar, and Drive — once done you'll see 'Connected' in blue."
          />

          <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/30 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <Globe className="h-4 w-4 text-blue-500" />
              <strong>Tip: Set up connectors on the web</strong>
            </div>
            <p className="text-muted-foreground">
              Connectors work better when configured through <strong>claude.ai</strong> (the web interface) rather than the Desktop app.
              Once connected, they&apos;ll work everywhere.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/30 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>That&apos;s it!</strong>
            </div>
            <p className="text-muted-foreground">
              Once connected, you can ask Claude things like &quot;summarise my unread emails&quot;,
              &quot;what meetings do I have tomorrow?&quot;, or &quot;find the brand guidelines in Drive.&quot;
            </p>
          </div>

          {/* Individual connectors */}
          <div className="space-y-3">
            <p className="font-medium">What Each Connector Does</p>

            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <Mail className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm">Gmail</p>
                <p className="text-xs text-muted-foreground">
                  Claude can search and read your emails. Ask it to &quot;summarise unread emails from this week&quot;
                  or &quot;find the last email from [client name] about the campaign budget.&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <FolderOpen className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm">Google Drive</p>
                <p className="text-xs text-muted-foreground">
                  Claude can search and read your Drive files — Docs, Sheets, Slides, and PDFs.
                  Ask it to &quot;find the Q4 strategy deck&quot; or &quot;summarise the brand guidelines document.&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <Calendar className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-sm">Google Calendar</p>
                <p className="text-xs text-muted-foreground">
                  Claude can check your schedule. Ask &quot;what meetings do I have tomorrow?&quot;
                  or &quot;when am I free for a 30-minute call this week?&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted text-sm">
            <strong>Note:</strong> Your admin may need to enable connectors for the organisation first. If you don&apos;t see
            the Connectors tab, ask your IT team to turn it on in the Admin Console.
          </div>
        </CardContent>
      </Card>

      {/* ===== SECTION 4: WHAT YOU CAN DO ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" />
            Step 4: Things You Can Do Right Now
          </CardTitle>
          <CardDescription>
            Try these examples to get a feel for what Claude can do
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-blue-500" />
                <p className="font-medium text-sm">Write &amp; Edit</p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Perfect for first drafts, rewrites, and adapting tone.</p>
              <div className="space-y-1.5">
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;Write a client email summarising our progress on the rebrand project. Keep it warm but professional.&quot;</p>
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;Rewrite this paragraph to be more concise and persuasive: [paste text]&quot;</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-4 w-4 text-orange-500" />
                <p className="font-medium text-sm">Research &amp; Analyse</p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Get summaries, comparisons, and insights fast.</p>
              <div className="space-y-1.5">
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;Search the web for the latest trends in sustainable packaging design for FMCG brands.&quot;</p>
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;I&apos;m uploading a 40-page report. Summarise the key findings in 5 bullet points.&quot;</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <p className="font-medium text-sm">Brainstorm &amp; Ideate</p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Use Claude as a creative thinking partner.</p>
              <div className="space-y-1.5">
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;Give me 10 campaign tagline ideas for a fitness brand targeting Gen Z. Tone: irreverent, bold.&quot;</p>
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;I need social media content ideas for launching a new coffee product. Give me a week of posts.&quot;</p>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-red-500" />
                <p className="font-medium text-sm">Work With Your Tools (requires connectors)</p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Once connectors are set up, try these.</p>
              <div className="space-y-1.5">
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;Check my calendar for tomorrow and draft a prep email for my 2pm client meeting.&quot;</p>
                <p className="text-xs bg-muted rounded px-2 py-1.5 font-mono">&quot;Search my Drive for the latest version of the media plan and summarise the budget allocation.&quot;</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== SECTION 5: MODES — CHAT, COWORK, CODE ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Understanding the Modes
          </CardTitle>
          <CardDescription>
            Claude has three modes — you&apos;ll mostly use Chat, but Cowork is a game-changer
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/30 text-sm mb-2">
            <div className="flex items-center gap-2 mb-1">
              <Download className="h-4 w-4 text-purple-500" />
              <strong>Desktop app required for Cowork &amp; Code</strong>
            </div>
            <p className="text-muted-foreground">
              Chat works everywhere (web + Desktop), but <strong>Cowork</strong> and <strong>Code</strong> are only available
              in the <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Claude Desktop app</a>.
              If you haven&apos;t installed it yet, do that now.
            </p>
          </div>

          <div className="space-y-4">
            {/* Chat */}
            <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <p className="font-semibold">Chat</p>
                <Badge variant="secondary" className="text-xs">Start here</Badge>
                <Badge variant="outline" className="text-xs">Web + Desktop</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                This is your default mode and where you&apos;ll spend most of your time. It&apos;s a conversation —
                you type a message, Claude responds. You can upload files, ask follow-up questions,
                and have a back-and-forth just like messaging a colleague. Every new chat starts fresh
                unless you use a Project (which gives Claude persistent memory).
              </p>
            </div>

            {/* Cowork */}
            <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-purple-500" />
                <p className="font-semibold">Cowork</p>
                <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-600">Desktop only</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Cowork turns Claude into an autonomous agent that works on your computer. You give it a job
                (&quot;organise these files into folders&quot; or &quot;create a spreadsheet from these invoices&quot;)
                and it actually opens apps, clicks buttons, and does the work while you watch or do something else.
                Think of it as a capable intern who can use your computer.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                <strong>You won&apos;t see the Cowork tab on claude.ai</strong> — it only appears in the Desktop app.
              </p>
              <Link href="/guides/cowork" className="text-xs text-primary hover:underline mt-2 inline-flex items-center gap-1">
                Learn more about Cowork <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Code */}
            <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-5 w-5 text-green-500" />
                <p className="font-semibold">Code</p>
                <Badge variant="outline" className="text-xs">For developers</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                This is for writing and editing code. If you&apos;re not a developer, you can safely ignore this mode.
                It lives in the terminal (command line) and is used by engineers to build software with Claude&apos;s help.
              </p>
              <Link href="/guides/claude-code" className="text-xs text-primary hover:underline mt-2 inline-flex items-center gap-1">
                Claude Code guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== SECTION 6: RESEARCH ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-orange-500" />
            Research Mode
          </CardTitle>
          <CardDescription>
            Deep-dive research across dozens of sources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Research mode sends Claude on a deep-dive mission. Instead of a single web search, it performs
            <strong> multiple searches</strong>, reads dozens of sources, cross-references information, and
            compiles a comprehensive report with citations. It can take a few minutes but the results are thorough.
          </p>
          <p className="text-sm text-muted-foreground">
            To enable it, click the <strong>+</strong> button and select <strong>Research</strong> — you&apos;ll see a checkmark when it&apos;s active.
          </p>
          <div className="p-3 rounded-lg bg-muted text-sm space-y-2">
            <p><strong>Try it with:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>&quot;Research the competitive landscape for plant-based protein snacks in the UK market&quot;</li>
              <li>&quot;Deep dive into how luxury brands are using TikTok in 2026 — give me examples and strategies&quot;</li>
              <li>&quot;Research the latest best practices for email marketing subject lines with data to back it up&quot;</li>
            </ul>
          </div>
          <Link href="/guides/deep-research" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
            Full Research guide <ArrowRight className="h-3 w-3" />
          </Link>
        </CardContent>
      </Card>

      {/* ===== SECTION 7: ARTIFACTS ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-indigo-500" />
            Artifacts: Claude&apos;s Creative Canvas
          </CardTitle>
          <CardDescription>
            Documents, visualisations, and interactive content that live alongside your chat
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            When you ask Claude to create something substantial — a document, a chart, a table, a presentation outline —
            it appears in an <strong>Artifact panel</strong> on the right side of the screen. Artifacts are special because
            you can edit, iterate, and share them independently of the chat.
            You can find all your Artifacts in the sidebar under <strong>Artifacts</strong>.
          </p>

          <div>
            <p className="font-medium text-sm mb-3">What You Can Do with Artifacts</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-start gap-2 p-2.5 rounded-lg border">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Create documents</strong> — briefs, reports, emails, plans</p>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg border">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Build charts &amp; tables</strong> — data visualisations from your numbers</p>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg border">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Iterate easily</strong> — say &quot;make the headline bolder&quot; and the artifact updates</p>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg border">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Copy or download</strong> — grab the content for your own documents</p>
              </div>
            </div>
          </div>

          {/* Sharing */}
          <div className="p-4 rounded-lg border border-indigo-500/30 bg-indigo-500/5">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="h-5 w-5 text-indigo-500" />
              <p className="font-semibold text-sm">Sharing Artifacts</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              You can share any artifact with colleagues — they don&apos;t even need a Claude account to view it.
            </p>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-semibold shrink-0">1</span>
                <span>Click the <strong>Share</strong> button (arrow icon) on any artifact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-semibold shrink-0">2</span>
                <span>Choose <strong>&quot;Publish&quot;</strong> to generate a shareable link</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-semibold shrink-0">3</span>
                <span>Send the link to anyone — they can view the artifact in their browser</span>
              </li>
            </ol>
            <p className="text-xs text-muted-foreground mt-3">
              Great for sharing a draft with your team for feedback, sending a data visualisation to a client,
              or publishing an interactive prototype.
            </p>
          </div>

          <Link href="/guides/artifacts" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
            Full Artifacts guide <ArrowRight className="h-3 w-3" />
          </Link>
        </CardContent>
      </Card>

      {/* ===== SECTION 8: STYLES ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-violet-500" />
            Bonus: Response Styles
          </CardTitle>
          <CardDescription>
            Control how Claude writes back to you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Click the <strong>+</strong> button and select <strong>Use style</strong> to change how Claude responds.
            You can pick from built-in styles or create your own.
          </p>

          <Screenshot
            src="/screenshots/getting-started/response-style-annotated.png"
            alt="Use style submenu showing Normal, Learning, Concise, Explanatory, Formal, and Create & edit styles"
            caption="Switch between Normal, Concise, Formal, and more — or create your own."
          />

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="p-2.5 rounded-lg border">
              <p className="text-xs"><strong>Normal</strong> — Balanced, conversational tone (default)</p>
            </div>
            <div className="p-2.5 rounded-lg border">
              <p className="text-xs"><strong>Concise</strong> — Short and to the point</p>
            </div>
            <div className="p-2.5 rounded-lg border">
              <p className="text-xs"><strong>Formal</strong> — Professional, polished language</p>
            </div>
            <div className="p-2.5 rounded-lg border">
              <p className="text-xs"><strong>Explanatory</strong> — Detailed, step-by-step explanations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== SECTION 9: TIPS ===== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Tips for Getting Great Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold shrink-0">1</span>
              <div>
                <p className="font-medium text-sm">Be specific about what you want</p>
                <p className="text-xs text-muted-foreground">
                  Instead of &quot;write me an email&quot;, try &quot;write a follow-up email to the client thanking them
                  for the meeting and confirming next steps. Keep it under 150 words, warm but professional tone.&quot;
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold shrink-0">2</span>
              <div>
                <p className="font-medium text-sm">Give context</p>
                <p className="text-xs text-muted-foreground">
                  Tell Claude who the audience is, what the goal is, and any constraints. The more context you give,
                  the better the output. Upload relevant documents if you have them.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold shrink-0">3</span>
              <div>
                <p className="font-medium text-sm">Iterate — don&apos;t start over</p>
                <p className="text-xs text-muted-foreground">
                  If the first response isn&apos;t quite right, tell Claude what to change: &quot;Make it shorter&quot;,
                  &quot;More casual tone&quot;, &quot;Add a section about sustainability.&quot; Claude remembers the
                  whole conversation, so you can refine without re-explaining.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold shrink-0">4</span>
              <div>
                <p className="font-medium text-sm">Use follow-up questions</p>
                <p className="text-xs text-muted-foreground">
                  A great workflow is: get a first draft &rarr; ask Claude to critique its own work &rarr; ask it to improve
                  based on the critique. You can also say &quot;What questions should I be asking about this?&quot;
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold shrink-0">5</span>
              <div>
                <p className="font-medium text-sm">Upload files freely</p>
                <p className="text-xs text-muted-foreground">
                  Claude can read PDFs, Word docs, spreadsheets, images, and more. Drop in a brief, a report,
                  or a competitor&apos;s ad and ask Claude to work with it. Your uploads are private and secure.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== WHAT'S NEXT ===== */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle>What&apos;s Next?</CardTitle>
          <CardDescription>
            Now that you&apos;re set up, explore these guides to level up
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/guides/projects" className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-all group">
              <FolderOpen className="h-5 w-5 text-emerald-500 shrink-0" />
              <div>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">Projects</p>
                <p className="text-xs text-muted-foreground">Give Claude persistent memory for a client or campaign</p>
              </div>
            </Link>
            <Link href="/guides/connectors" className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-all group">
              <Plug className="h-5 w-5 text-cyan-500 shrink-0" />
              <div>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">Connectors Deep Dive</p>
                <p className="text-xs text-muted-foreground">Advanced integrations including MCP and third-party tools</p>
              </div>
            </Link>
            <Link href="/guides/artifacts" className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-all group">
              <Layers className="h-5 w-5 text-indigo-500 shrink-0" />
              <div>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">Mastering Artifacts</p>
                <p className="text-xs text-muted-foreground">Build apps, visualise data, and create interactive content</p>
              </div>
            </Link>
            <Link href="/guides/deep-research" className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-all group">
              <Search className="h-5 w-5 text-orange-500 shrink-0" />
              <div>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">Deep Research</p>
                <p className="text-xs text-muted-foreground">Run comprehensive research missions across the web</p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
