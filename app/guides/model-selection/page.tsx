export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Lightbulb,
  Brain,
  Search,
  FileText,
  Bot,
  Mic,
  Workflow,
  Video,
  AudioLines,
  Presentation,
  Image,
  ArrowRight,
  Users,
  BarChart3,
  Cog
} from 'lucide-react';

export default function ModelSelectionPage() {
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
        <span className="text-foreground">Model Selection</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">15 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Model Selection Guide</h1>
            <p className="text-muted-foreground">Which AI tool for which task — a decision framework</p>
          </div>
        </div>
      </div>

      {/* Why Model Selection Matters */}
      <Card className="bg-gradient-to-r from-violet-500/5 via-violet-500/10 to-violet-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">Why Model Selection Matters</p>
              <p className="text-muted-foreground mt-1">
                Different AI tools excel at different tasks. Using the wrong tool wastes time and produces
                inferior results. A research question sent to an image generator, or a video task given to a
                text model — these mismatches cost hours. This guide helps you pick the right tool every time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Decision Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-violet-500" />
            Quick Decision Matrix
          </CardTitle>
          <CardDescription>
            Match your task to the right tool in seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Task</th>
                  <th className="text-left py-2 font-medium">Best Tool</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2">Research with citations</td>
                  <td className="py-2 text-muted-foreground">Claude Deep Research</td>
                </tr>
                <tr>
                  <td className="py-2">Long-form writing with brand context</td>
                  <td className="py-2 text-muted-foreground">Claude Projects</td>
                </tr>
                <tr>
                  <td className="py-2">Repeatable document formats</td>
                  <td className="py-2 text-muted-foreground">Claude Skills</td>
                </tr>
                <tr>
                  <td className="py-2">Desktop automation and file management</td>
                  <td className="py-2 text-muted-foreground">Claude Cowork</td>
                </tr>
                <tr>
                  <td className="py-2">Source-grounded synthesis</td>
                  <td className="py-2 text-muted-foreground">NotebookLM</td>
                </tr>
                <tr>
                  <td className="py-2">Workflow automation</td>
                  <td className="py-2 text-muted-foreground">n8n</td>
                </tr>
                <tr>
                  <td className="py-2">Video generation</td>
                  <td className="py-2 text-muted-foreground">Runway / Veo 3</td>
                </tr>
                <tr>
                  <td className="py-2">Voice and audio</td>
                  <td className="py-2 text-muted-foreground">ElevenLabs</td>
                </tr>
                <tr>
                  <td className="py-2">Presentation creation</td>
                  <td className="py-2 text-muted-foreground">Gamma</td>
                </tr>
                <tr>
                  <td className="py-2">Image generation</td>
                  <td className="py-2 text-muted-foreground">Imagen 4 / DALL-E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* By Task Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-violet-500" />
            By Task Type
          </CardTitle>
          <CardDescription>
            Detailed breakdown for common agency workflows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <Search className="h-4 w-4 text-teal-500" />
              Research Tasks
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li><strong>Claude Deep Research</strong> — Web research with citations and strategic analysis. Best for competitive analysis, market data, and synthesis.</li>
              <li><strong>NotebookLM</strong> — Source-grounded research. Best when you have your own documents to analyze.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-orange-500" />
              Content Creation
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li><strong>Claude</strong> — Long-form copy, strategy docs, creative briefs. Use Projects for brand context.</li>
              <li><strong>Runway / Veo 3</strong> — Video content. Runway for precision controls, Veo 3 for dialogue and sound.</li>
              <li><strong>ElevenLabs</strong> — Voiceovers, audio content, podcast production.</li>
              <li><strong>Imagen 4 / DALL-E</strong> — Static visuals, concept art, social graphics.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-blue-500" />
              Data Analysis
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li><strong>Claude</strong> — Interpretation, insights, and narrative from data. Upload CSVs directly.</li>
              <li><strong>Sheets AI</strong> — Formula generation, chart creation, data cleanup within Google Sheets.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <Cog className="h-4 w-4 text-green-500" />
              Automation
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li><strong>Cowork</strong> — One-off multi-step tasks. File management, research runs, document processing.</li>
              <li><strong>n8n</strong> — Recurring automated workflows. Connects to 400+ services with code-level flexibility.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* By Department */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-violet-500" />
            By Department
          </CardTitle>
          <CardDescription>
            Quick reference for team-specific tool stacks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm">Strategy</p>
            <p className="text-xs text-muted-foreground">Claude Deep Research + NotebookLM + Claude Projects</p>
            <p className="text-xs text-muted-foreground mt-1">Research → Synthesize → Deliver strategic recommendations</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm">Creative</p>
            <p className="text-xs text-muted-foreground">Claude + Runway + Imagen 4</p>
            <p className="text-xs text-muted-foreground mt-1">Concepting → Visuals → Motion</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm">Production</p>
            <p className="text-xs text-muted-foreground">Claude Cowork + n8n</p>
            <p className="text-xs text-muted-foreground mt-1">One-off tasks → Recurring automation</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm">Account Management</p>
            <p className="text-xs text-muted-foreground">Claude Projects + Skills</p>
            <p className="text-xs text-muted-foreground mt-1">Client context → Repeatable deliverables</p>
          </div>
          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm">Finance</p>
            <p className="text-xs text-muted-foreground">Claude Cowork + Claude Projects</p>
            <p className="text-xs text-muted-foreground mt-1">Data processing → Analysis and reporting</p>
          </div>
        </CardContent>
      </Card>

      {/* Decision Flowchart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-violet-500" />
            Decision Flowchart
          </CardTitle>
          <CardDescription>
            Follow the questions to find your tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-muted font-mono text-xs overflow-x-auto">
            <pre>{`START: What do you need?
│
├─ Real-time web data?
│  └─ YES → Claude Deep Research
│
├─ Analyze your own documents?
│  └─ YES → NotebookLM
│
├─ Remember context across sessions?
│  └─ YES → Claude Projects
│
├─ Generate images?
│  └─ YES → Imagen 4 / DALL-E
│
├─ Generate video?
│  └─ YES → Runway / Veo 3
│
├─ Generate audio/voice?
│  └─ YES → ElevenLabs
│
├─ Create a presentation?
│  └─ YES → Gamma
│
├─ Automate a process?
│  ├─ Recurring? → n8n
│  └─ One-off? → Claude Cowork
│
├─ Repeatable document format?
│  └─ YES → Claude Skills
│
└─ General AI task?
   └─ Claude (chat or Projects)`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Ready to chain tools together?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to build multi-tool pipelines for end-to-end workflows.
              </p>
            </div>
            <Link
              href="/guides/multi-tool-workflows"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Multi-Tool Workflows
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
