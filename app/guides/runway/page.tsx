export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Video,
  Lightbulb,
  Wand2,
  Camera,
  Play,
  Users,
  Sparkles,
  MousePointer,
  Film
} from 'lucide-react';

export default function RunwayPage() {
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
        <span className="text-foreground">Runway</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">20 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
            <Video className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Runway Enterprise</h1>
            <p className="text-muted-foreground">AI-powered video generation and editing for creative teams</p>
          </div>
        </div>
      </div>

      {/* What is Runway */}
      <Card className="bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is Runway?</p>
              <p className="text-muted-foreground mt-1">
                Runway is a leading AI-powered creative platform for <strong>video generation</strong> and
                <strong> advanced editing</strong>. Create video from text prompts, animate images,
                transform existing footage, and capture performances — all with professional-grade quality
                used by filmmakers and agencies worldwide.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Model Selection Guide</CardTitle>
          <CardDescription>
            Choose the right model for your use case
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Model</th>
                  <th className="text-left py-2 font-medium">Best For</th>
                  <th className="text-left py-2 font-medium">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Gen-4.5</td>
                  <td className="py-2 text-muted-foreground">Highest quality, final output</td>
                  <td className="py-2">Standard</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Gen-4</td>
                  <td className="py-2 text-muted-foreground">Character consistency, references</td>
                  <td className="py-2">Standard</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Gen-4 Turbo</td>
                  <td className="py-2 text-muted-foreground">Fast iterations, testing</td>
                  <td className="py-2">~30 seconds</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Gen-3 Alpha</td>
                  <td className="py-2 text-muted-foreground">Granular control, keyframes</td>
                  <td className="py-2">Standard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Video Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Video Generation Modes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="p-4 rounded-lg border">
              <p className="font-medium">Text-to-Video</p>
              <p className="text-sm text-muted-foreground mt-1">
                Generate video clips up to <strong>10 seconds</strong> from text descriptions.
                Supports 4K resolution and understands cinematography terminology.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <p className="font-medium">Image-to-Video</p>
              <p className="text-sm text-muted-foreground mt-1">
                Animate any static image — photos, AI-generated art, sketches, or illustrations.
                Apply dynamic camera movements and scene changes.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <p className="font-medium">Video-to-Video</p>
              <p className="text-sm text-muted-foreground mt-1">
                Transform existing footage with AI. Modify style, lighting, environments
                while preserving core motion and composition.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <p className="font-medium">Video Extension</p>
              <p className="text-sm text-muted-foreground mt-1">
                Extend generated videos up to <strong>34 seconds</strong>.
                Transform aspect ratios by generating surrounding areas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Motion & Camera Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            Motion & Camera Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium mb-3">Motion Brush</p>
            <p className="text-sm text-muted-foreground mb-3">
              Paint specific areas of your frame to control motion direction and speed.
              Use Multi Motion Brush for independent control over different areas.
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="p-2 rounded border text-sm text-center">Select regions</div>
              <div className="p-2 rounded border text-sm text-center">Define direction</div>
              <div className="p-2 rounded border text-sm text-center">Adjust speed</div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-3">Director Mode Camera Controls</p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="p-2 rounded border text-sm">
                <p className="font-medium">Horizontal</p>
                <p className="text-xs text-muted-foreground">Left/right tracking</p>
              </div>
              <div className="p-2 rounded border text-sm">
                <p className="font-medium">Vertical</p>
                <p className="text-xs text-muted-foreground">Up/down movement</p>
              </div>
              <div className="p-2 rounded border text-sm">
                <p className="font-medium">Pan</p>
                <p className="text-xs text-muted-foreground">Horizontal rotation</p>
              </div>
              <div className="p-2 rounded border text-sm">
                <p className="font-medium">Zoom</p>
                <p className="text-xs text-muted-foreground">In/out movement</p>
              </div>
              <div className="p-2 rounded border text-sm">
                <p className="font-medium">Roll</p>
                <p className="text-xs text-muted-foreground">Rotational camera</p>
              </div>
              <div className="p-2 rounded border text-sm">
                <p className="font-medium">Static</p>
                <p className="text-xs text-muted-foreground">Lock position</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            Advanced Editing Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
            <p className="font-medium">Aleph In-Video Editor</p>
            <p className="text-sm text-muted-foreground mt-1">
              Edit generated videos through text prompts: add/remove objects, generate new camera angles,
              change scenes and lighting — all without regenerating the entire video.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Act-Two Motion Capture</p>
            <p className="text-sm text-muted-foreground mt-1">
              Full-body performance capture from any webcam. Captures facial expressions,
              body movements, and hand gestures. Replaces traditional $500K+ mocap sessions.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Lip Sync</p>
            <p className="text-sm text-muted-foreground mt-1">
              Synchronize audio to character mouth movements for up to 45 seconds.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Prompting Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            Prompting Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted">
            <p className="font-medium text-sm mb-2">Prompt Formula</p>
            <p className="text-sm font-mono">
              [Subject] + [Action] + [Setting] + [Style/Mood] + [Camera/Lighting]
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold shrink-0">DO</span>
              <p className="text-sm">Focus on visual details, not conversational language</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold shrink-0">DO</span>
              <p className="text-sm">Use specific physical actions: "slowly raises her hand, fingers spread wide"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-semibold shrink-0">DO</span>
              <p className="text-sm">Keep prompts focused — one clear action per 5-10 second clip</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-semibold shrink-0">NO</span>
              <p className="text-sm">Don't use negative prompting — describe what you want, not what to avoid</p>
            </div>
          </div>

          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm mb-1">Example Prompt</p>
            <p className="text-sm text-muted-foreground italic">
              "A middle-aged man in a blue suit walks confidently through a rainy Tokyo street at night,
              neon signs reflecting on wet pavement, cinematic lighting, tracking shot from the side"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Camera Angle Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Camera Angle Reference</CardTitle>
          <CardDescription>Cinematic terminology for professional results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Angle</th>
                  <th className="text-left py-2 font-medium">Effect</th>
                  <th className="text-left py-2 font-medium">Use For</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Eye level</td>
                  <td className="py-2 text-muted-foreground">Neutral, equals</td>
                  <td className="py-2 text-muted-foreground">Standard conversations</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Low angle</td>
                  <td className="py-2 text-muted-foreground">Power, heroic</td>
                  <td className="py-2 text-muted-foreground">Dominant characters, products</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">High angle</td>
                  <td className="py-2 text-muted-foreground">Vulnerability</td>
                  <td className="py-2 text-muted-foreground">Isolation, smallness</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Dutch angle</td>
                  <td className="py-2 text-muted-foreground">Tension, unease</td>
                  <td className="py-2 text-muted-foreground">Drama, something wrong</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Extreme close-up</td>
                  <td className="py-2 text-muted-foreground">Intensity</td>
                  <td className="py-2 text-muted-foreground">Emotion, details</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Wide shot</td>
                  <td className="py-2 text-muted-foreground">Context, scale</td>
                  <td className="py-2 text-muted-foreground">Establishing scenes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Enterprise Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Enterprise Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Team Workspaces</p>
              <p className="text-xs text-muted-foreground">Real-time collaboration with multiple editors</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">SSO Integration</p>
              <p className="text-xs text-muted-foreground">Single sign-on for enterprise security</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Custom Workflows</p>
              <p className="text-xs text-muted-foreground">Build automated AI pipelines</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Priority Support</p>
              <p className="text-xs text-muted-foreground">SLAs and dedicated assistance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* References for Consistency */}
      <Card>
        <CardHeader>
          <CardTitle>Using References for Consistency</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Upload 1-3 reference images to maintain consistent characters, styles, or environments across scenes.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Maximum resolution: 720x720 (1:1) or 1280x720 (16:9)</li>
            <li>Keep character appearance consistent across scenes</li>
            <li>Maintain art style and visual treatment</li>
            <li>Reference objects and environmental details</li>
          </ul>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Need AI voiceover for your videos?</h3>
              <p className="text-sm text-muted-foreground">
                Check out ElevenLabs for realistic AI voice generation.
              </p>
            </div>
            <Link
              href="/guides/elevenlabs"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              ElevenLabs Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
