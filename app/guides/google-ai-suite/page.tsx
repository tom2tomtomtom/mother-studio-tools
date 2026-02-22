export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  BookOpen,
  Lightbulb,
  Sparkles,
  Image,
  Video,
  Table,
  Mail,
  ArrowRight,
  Layers
} from 'lucide-react';

export default function GoogleAISuitePage() {
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
        <span className="text-foreground">Google AI Suite</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner → Intermediate</Badge>
          <Badge variant="outline">25 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Google AI Suite for Creative Teams</h1>
            <p className="text-muted-foreground">Gemini 2.5 Pro, Imagen 4, Veo 3, Sheets AI, and Gmail AI</p>
          </div>
        </div>
      </div>

      {/* What is Google AI Suite */}
      <Card className="bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is Google AI Suite?</p>
              <p className="text-muted-foreground mt-1">
                Google&apos;s AI tools now span text, image, video, and productivity. From Gemini&apos;s
                million-token context window to Veo&apos;s cinematic video generation, the suite covers
                nearly every creative need. This guide covers the tools most relevant to creative agency workflows.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gemini 2.5 Pro */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            Gemini 2.5 Pro
          </CardTitle>
          <CardDescription>
            Google&apos;s flagship model for text, code, and multimodal understanding
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Gemini 2.5 Pro is Google&apos;s most capable model. Its standout feature is a <strong>1 million token
            context window</strong> — that&apos;s roughly 750,000 words or an entire codebase in a single prompt.
          </p>

          <div>
            <p className="font-medium mb-2">Best For</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Long-Context Analysis</p>
                <p className="text-xs text-muted-foreground">Process entire books, codebases, or research libraries at once</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Code Generation</p>
                <p className="text-xs text-muted-foreground">Strong at understanding and writing code across languages</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Multimodal Understanding</p>
                <p className="text-xs text-muted-foreground">Analyze images, video, and audio alongside text</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Structured Data</p>
                <p className="text-xs text-muted-foreground">Generate structured outputs from unstructured inputs</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Agency Use Cases</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Analyzing massive research documents for pitch preparation</li>
              <li>Processing video transcripts from client recordings</li>
              <li>Generating structured data from unstructured inputs</li>
              <li>Reviewing entire brand guidelines in a single prompt</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Imagen 4 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-blue-500" />
            Imagen 4
          </CardTitle>
          <CardDescription>
            Text-to-image generation with high photorealism
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Imagen 4 is Google&apos;s latest image generation model. It excels at <strong>photorealism</strong>,
            <strong> accurate text rendering in images</strong>, and <strong>brand consistency</strong> across generations.
          </p>

          <div>
            <p className="font-medium mb-2">Key Strengths</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Photorealism</p>
                <p className="text-xs text-muted-foreground">Near-photographic quality for product and lifestyle imagery</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Text in Images</p>
                <p className="text-xs text-muted-foreground">Accurate text rendering — logos, signage, headlines</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Brand Consistency</p>
                <p className="text-xs text-muted-foreground">Maintain visual style across multiple generations</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Style Control</p>
                <p className="text-xs text-muted-foreground">Fine-grained control over artistic style and composition</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Agency Use Cases</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Concept visualization for client presentations</li>
              <li>Social media content and ad creative mock-ups</li>
              <li>Mock-up generation for campaigns</li>
              <li>Storyboard frames for video production</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Veo 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-blue-500" />
            Veo 3
          </CardTitle>
          <CardDescription>
            Text-to-video and image-to-video generation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Veo 3 generates <strong>cinematic quality video</strong> from text or image prompts. It supports
            dialogue generation, sound effects, and consistent character motion.
          </p>

          <div>
            <p className="font-medium mb-2">Key Capabilities</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Cinematic Quality</p>
                <p className="text-xs text-muted-foreground">High-fidelity video with realistic motion and lighting</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Dialogue Generation</p>
                <p className="text-xs text-muted-foreground">Characters can speak with lip-synced dialogue</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Sound Effects</p>
                <p className="text-xs text-muted-foreground">Automatic ambient audio and sound effects</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Image-to-Video</p>
                <p className="text-xs text-muted-foreground">Animate still images into motion sequences</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Agency Use Cases</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Rough cut concepts for client review before full production</li>
              <li>Social video content for quick-turn campaigns</li>
              <li>Animatic creation for storyboard presentations</li>
              <li>B-roll and background footage for presentations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Sheets AI & Gmail AI */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Table className="h-5 w-5 text-blue-500" />
            <Mail className="h-5 w-5 text-blue-500" />
            Sheets AI & Gmail AI
          </CardTitle>
          <CardDescription>
            AI features built into Google Workspace
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Google has embedded AI directly into the productivity tools your team already uses.
            No new apps to learn — just smarter versions of Sheets and Gmail.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <p className="font-medium mb-2">Sheets AI</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Formula generation from natural language</li>
                <li>Data analysis and pattern detection</li>
                <li>Chart creation from descriptions</li>
                <li>Data cleanup and transformation</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border">
              <p className="font-medium mb-2">Gmail AI</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Email drafting from brief notes</li>
                <li>Thread summarization</li>
                <li>Smart compose suggestions</li>
                <li>Tone adjustment and polish</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Agency Use Cases</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Client reporting — turn raw data into formatted reports with charts</li>
              <li>Data analysis — summarize campaign metrics with natural language queries</li>
              <li>Email management — draft client responses, summarize long threads</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Integration Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-blue-500" />
            Integration Tips
          </CardTitle>
          <CardDescription>
            How these tools work together in creative workflows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The real power of Google AI Suite comes from chaining tools together.
            Each tool feeds into the next to create end-to-end creative workflows.
          </p>

          <div className="p-4 rounded-lg bg-muted font-mono text-xs overflow-x-auto">
            <pre>{`Gemini (Research & Strategy)
    ↓
Imagen 4 (Visual Concepts)
    ↓
Veo 3 (Motion & Video)
    ↓
Sheets AI (Reporting & Analytics)`}</pre>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg border">
              <p className="font-medium">Campaign Concept Pipeline</p>
              <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
                <li>Use Gemini to research the brief and generate creative concepts</li>
                <li>Feed concepts into Imagen 4 for visual exploration</li>
                <li>Animate winning concepts with Veo 3</li>
                <li>Track performance in Sheets with AI-powered analysis</li>
              </ol>
            </div>

            <div className="p-4 rounded-lg border">
              <p className="font-medium">Client Presentation Pipeline</p>
              <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
                <li>Use Gemini to synthesize research and competitive analysis</li>
                <li>Generate presentation visuals with Imagen 4</li>
                <li>Create short video previews with Veo 3</li>
                <li>Draft follow-up emails with Gmail AI</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Want to combine Google AI with other tools?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to chain multiple AI tools together for end-to-end workflows.
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
