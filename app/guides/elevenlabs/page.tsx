export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  AudioLines,
  Lightbulb,
  Mic,
  Copy,
  FileText,
  Languages,
  Code,
  Sparkles,
  Settings,
  Volume2
} from 'lucide-react';

export default function ElevenLabsPage() {
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
        <span className="text-foreground">ElevenLabs</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">15 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
            <AudioLines className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ElevenLabs</h1>
            <p className="text-muted-foreground">Ultra-realistic AI voice generation and cloning</p>
          </div>
        </div>
      </div>

      {/* What is ElevenLabs */}
      <Card className="bg-gradient-to-r from-pink-500/5 via-pink-500/10 to-pink-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is ElevenLabs?</p>
              <p className="text-muted-foreground mt-1">
                ElevenLabs is an AI voice platform that generates <strong>lifelike speech</strong> with
                nuanced intonation, pacing, and emotional awareness. Create voiceovers, clone voices,
                produce audiobooks, dub content into 70+ languages, and deploy conversational AI agents.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Voice Models */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-primary" />
            Voice Models
          </CardTitle>
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
                  <th className="text-left py-2 font-medium">Key Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Eleven v3</td>
                  <td className="py-2 text-muted-foreground">Emotional storytelling</td>
                  <td className="py-2">Audio tags, 70+ languages</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Flash v2.5</td>
                  <td className="py-2 text-muted-foreground">Real-time apps</td>
                  <td className="py-2">75ms latency</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Multilingual v2</td>
                  <td className="py-2 text-muted-foreground">International content</td>
                  <td className="py-2">Highest quality audio</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">v2.5 Turbo</td>
                  <td className="py-2 text-muted-foreground">Quick narration</td>
                  <td className="py-2">Faster generation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Text-to-Speech */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            Text-to-Speech Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Convert text to lifelike audio with emotional awareness. Eleven v3 supports
            <strong> audio tags</strong> for expressive control.
          </p>

          <div>
            <p className="font-medium mb-2">Audio Tags (Eleven v3)</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {['[excited]', '[whispers]', '[sighs]', '[laughs]', '[sad]', '[angry]', '[pause]', '[serious]'].map((tag) => (
                <Badge key={tag} variant="outline" className="font-mono">{tag}</Badge>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-muted font-mono text-xs">
              <p className="text-muted-foreground mb-1">Example script with tags:</p>
              <p>[excited] Welcome to the show, everyone! [pause]</p>
              <p>Today we have an incredible announcement.</p>
              <p>[whispers] But first, let me tell you a secret...</p>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Pronunciation Tips</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li><strong>Emphasis:</strong> Write in ALL CAPS: "This is VERY important"</li>
              <li><strong>Pauses:</strong> Use "..." for longer pauses</li>
              <li><strong>Numbers:</strong> Spell out: "three hundred" not "300"</li>
              <li><strong>Difficult words:</strong> Spell phonetically: "Nguyen" → "Win"</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Voice Library:</strong> 10,000+ pre-made voices. Filter by language, accent,
              gender, age, and tone.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Voice Cloning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Copy className="h-5 w-5 text-primary" />
            Voice Cloning
          </CardTitle>
          <CardDescription>
            Create AI replicas of voices from audio samples
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <p className="font-medium">Instant Cloning</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>1-5 minutes of audio</li>
                <li>Ready immediately</li>
                <li>Good for prototyping</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-primary/50 bg-primary/5">
              <p className="font-medium">Professional Cloning</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>30+ minutes (2-3 hours ideal)</li>
                <li>Near-perfect quality</li>
                <li>Commercial production</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-amber-500/50 bg-amber-500/5">
            <p className="font-medium text-sm">Best Practices for Cloning</p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>Record in a quiet environment with minimal background noise</li>
              <li>Upload 5-6 segments of 10-minute high-quality samples</li>
              <li>Maintain consistent microphone distance and tone</li>
              <li>Only your own voice can be cloned (ethical requirement)</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-primary/50 bg-primary/5">
            <p className="font-medium text-sm">The Mood Pass Technique (For Professional Cloning)</p>
            <p className="text-sm text-muted-foreground mt-2 mb-2">
              Record the same content in different emotional states to teach the AI your full range:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 text-sm">
              <div className="p-2 rounded border">
                <p className="font-medium">Pass 1: Neutral</p>
                <p className="text-xs text-muted-foreground">Natural, calm and clear</p>
              </div>
              <div className="p-2 rounded border">
                <p className="font-medium">Pass 2: Energetic</p>
                <p className="text-xs text-muted-foreground">Excitement and enthusiasm</p>
              </div>
              <div className="p-2 rounded border">
                <p className="font-medium">Pass 3: Serious</p>
                <p className="text-xs text-muted-foreground">Gravity and importance</p>
              </div>
              <div className="p-2 rounded border">
                <p className="font-medium">Pass 4: Warm/Friendly</p>
                <p className="text-xs text-muted-foreground">Like talking to a friend</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Studio for Long-Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Studio (Long-Form Content)
          </CardTitle>
          <CardDescription>
            Audiobook production and multi-speaker projects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Multi-Speaker Support</p>
              <p className="text-xs text-muted-foreground">Assign different voices to characters</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Generation History</p>
              <p className="text-xs text-muted-foreground">Restore previous versions</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Selective Regeneration</p>
              <p className="text-xs text-muted-foreground">Regenerate only specific words</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Timeline Editor</p>
              <p className="text-xs text-muted-foreground">Add music and sound effects</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dubbing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />
            Dubbing & Translation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Translate and localize audio/video across <strong>70+ languages</strong> while
            preserving speaker identity and emotional tone.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Auto Speaker Separation</p>
              <p className="text-xs text-muted-foreground">Detects multiple speakers automatically</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Voice Preservation</p>
              <p className="text-xs text-muted-foreground">Maintains original speaker's voice</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Background Retention</p>
              <p className="text-xs text-muted-foreground">Keeps music and effects intact</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Selective Dubbing</p>
              <p className="text-xs text-muted-foreground">Dub only specific portions</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Supported Sources:</strong> YouTube, TikTok, X (Twitter), Vimeo, direct URLs, file uploads
            </p>
          </div>
        </CardContent>
      </Card>

      {/* API Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            API Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Programmatic access to all AI models via HTTP, WebSocket, and official SDKs.
          </p>

          <div className="p-4 rounded-lg bg-muted font-mono text-sm">
            <p className="text-muted-foreground mb-2"># Python Example</p>
            <pre>{`from elevenlabs import ElevenLabs

client = ElevenLabs(api_key="your-key")
audio = client.text_to_speech.convert(
    voice_id="voice-id",
    text="Hello, world!",
    model_id="eleven_v3"
)`}</pre>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Python SDK</Badge>
            <Badge variant="outline">TypeScript SDK</Badge>
            <Badge variant="outline">REST API</Badge>
            <Badge variant="outline">WebSocket</Badge>
          </div>

          <div className="p-3 rounded-lg border">
            <p className="text-sm">
              <strong>Security:</strong> SOC 2, HIPAA, GDPR compliant. EU Data Residency available.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium mb-2">Recommended Settings</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium">Setting</th>
                    <th className="text-left py-2 font-medium">Value</th>
                    <th className="text-left py-2 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2">Stability</td>
                    <td className="py-2">35-40%</td>
                    <td className="py-2 text-muted-foreground">Avoids monotonous delivery</td>
                  </tr>
                  <tr>
                    <td className="py-2">Similarity</td>
                    <td className="py-2">75-80%</td>
                    <td className="py-2 text-muted-foreground">Higher can add artifacts</td>
                  </tr>
                  <tr>
                    <td className="py-2">Style Exaggeration</td>
                    <td className="py-2">3-5%</td>
                    <td className="py-2 text-muted-foreground">Subtle but significant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Text Formatting Tips</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Use natural speech patterns and proper punctuation</li>
              <li>Structure text clearly — v3 is highly responsive to formatting</li>
              <li>Include emotional context in your writing</li>
              <li>Break long passages into logical segments</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Creating video content?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to generate AI video with Runway.
              </p>
            </div>
            <Link
              href="/guides/runway"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Runway Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
