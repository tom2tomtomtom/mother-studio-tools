export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Presentation,
  Lightbulb,
  Wand2,
  Palette,
  Users,
  Share2,
  Sparkles,
  Globe,
  FileDown
} from 'lucide-react';

export default function GammaPage() {
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
        <span className="text-foreground">Gamma</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">15 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
            <Presentation className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Gamma</h1>
            <p className="text-muted-foreground">AI-powered presentations that design themselves</p>
          </div>
        </div>
      </div>

      {/* What is Gamma */}
      <Card className="bg-gradient-to-r from-yellow-500/5 via-yellow-500/10 to-yellow-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is Gamma?</p>
              <p className="text-muted-foreground mt-1">
                Gamma is an AI-powered presentation platform serving <strong>50 million+ users</strong>.
                Unlike PowerPoint or Google Slides, Gamma creates <strong>web-native, card-based presentations</strong>
                from a single prompt. Tell it what you need, and AI handles the design, layout, and visuals
                while you focus on your message.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gamma vs Traditional */}
      <Card>
        <CardHeader>
          <CardTitle>Gamma vs PowerPoint/Google Slides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Feature</th>
                  <th className="text-left py-2 font-medium">Gamma</th>
                  <th className="text-left py-2 font-medium">Traditional</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Format</td>
                  <td className="py-2 text-green-600">Web-native, scrollable</td>
                  <td className="py-2 text-muted-foreground">Static slides</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">AI Integration</td>
                  <td className="py-2 text-green-600">Native AI-first design</td>
                  <td className="py-2 text-muted-foreground">AI as add-on</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Content Creation</td>
                  <td className="py-2 text-green-600">Full deck from prompt</td>
                  <td className="py-2 text-muted-foreground">Slide-by-slide</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Sharing</td>
                  <td className="py-2 text-green-600">Live links, interactive</td>
                  <td className="py-2 text-muted-foreground">File downloads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Gamma Agent */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            Gamma Agent (AI Design Partner)
          </CardTitle>
          <CardDescription>
            Process content 50x faster than manual design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Natural Language Commands</p>
              <p className="text-xs text-muted-foreground">"Make it more professional" or "add supporting statistics"</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Real-Time Web Research</p>
              <p className="text-xs text-muted-foreground">Auto-searches for supporting info with citations</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Multi-Source Integration</p>
              <p className="text-xs text-muted-foreground">Notes, screenshots, links, documents</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Global Transformations</p>
              <p className="text-xs text-muted-foreground">"Make it more colorful" redesigns entire deck</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>60+ Languages:</strong> Translate entire presentations automatically
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Generation Process */}
      <Card>
        <CardHeader>
          <CardTitle>How Generation Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <div>
                <p className="font-medium">Enter Your Prompt</p>
                <p className="text-sm text-muted-foreground">Describe what you need (e.g., "Create a pitch deck for a meditation app")</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <div>
                <p className="font-medium">AI Creates Outline</p>
                <p className="text-sm text-muted-foreground">Review and adjust the suggested structure</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <div>
                <p className="font-medium">Customize Parameters</p>
                <p className="text-sm text-muted-foreground">Adjust text density, image sources, style</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <div>
                <p className="font-medium">Generate & Iterate</p>
                <p className="text-sm text-muted-foreground">AI builds slides; refine with natural language commands</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* AI Image Models */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            AI Image Generation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Gamma integrates multiple AI image models for visuals:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Flux', 'Ideogram', 'Imagen', 'Luma', 'DALL-E 3', 'Leonardo', 'Recraft'].map((model) => (
              <Badge key={model} variant="outline">{model}</Badge>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Tip:</strong> Use Ideogram for text/typography accuracy in images
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Smart Layouts */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Layouts & Diagrams</CardTitle>
          <CardDescription>Type /smart in any card to create diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            12+ Smart Diagram types that adapt to your content:
          </p>
          <div className="grid gap-2 sm:grid-cols-4">
            {['Flowchart', 'Timeline', 'Org Chart', 'Venn Diagram', 'Process', 'Comparison', 'SWOT', 'Mind Map', 'Funnel', 'Cycle', 'Matrix', 'Pyramid'].map((type) => (
              <div key={type} className="p-2 rounded border text-sm text-center">{type}</div>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-muted">
            <p className="font-mono text-sm text-muted-foreground">
              Type <span className="text-primary">/smart</span> then describe: "Create a flowchart showing customer journey from awareness to purchase"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AI Commands */}
      <Card>
        <CardHeader>
          <CardTitle>AI Chat Commands</CardTitle>
          <CardDescription>Use the AI chat panel for bulk edits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">What You Want</th>
                  <th className="text-left py-2 font-medium">Command</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2">Reduce text</td>
                  <td className="py-2 text-muted-foreground italic">"Make all slides 30% shorter"</td>
                </tr>
                <tr>
                  <td className="py-2">Add visuals</td>
                  <td className="py-2 text-muted-foreground italic">"Add relevant images to slides 3, 5, 8"</td>
                </tr>
                <tr>
                  <td className="py-2">Change style</td>
                  <td className="py-2 text-muted-foreground italic">"Make images more minimalistic"</td>
                </tr>
                <tr>
                  <td className="py-2">Add data</td>
                  <td className="py-2 text-muted-foreground italic">"Add a pie chart showing market breakdown"</td>
                </tr>
                <tr>
                  <td className="py-2">Translate</td>
                  <td className="py-2 text-muted-foreground italic">"Translate entire deck to Spanish"</td>
                </tr>
                <tr>
                  <td className="py-2">Add notes</td>
                  <td className="py-2 text-muted-foreground italic">"Generate speaker notes for each slide"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Collaboration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Collaboration Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Real-Time Editing</p>
              <p className="text-xs text-muted-foreground">Google Docs-style live collaboration</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Threaded Comments</p>
              <p className="text-xs text-muted-foreground">Feedback and discussion in context</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Version Control</p>
              <p className="text-xs text-muted-foreground">History tracking and restoration</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Granular Permissions</p>
              <p className="text-xs text-muted-foreground">View, comment, or edit access</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export & Sharing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-primary" />
            Export & Sharing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border border-green-500/50 bg-green-500/5">
              <p className="font-medium text-sm text-green-600">Recommended: Live Link</p>
              <p className="text-xs text-muted-foreground">Full interactivity, works in any browser</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">PDF Export</p>
              <p className="text-xs text-muted-foreground">Clean export for offline sharing</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">PowerPoint (.pptx)</p>
              <p className="text-xs text-muted-foreground">May need formatting cleanup</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">PNG Images</p>
              <p className="text-xs text-muted-foreground">Individual card exports</p>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-amber-500/50 bg-amber-500/5">
            <p className="font-medium text-sm">PowerPoint Export Note</p>
            <p className="text-sm text-muted-foreground mt-1">
              Users report 45+ minutes of cleanup for pptx exports (overlapping text, missing fonts, broken layouts).
              Share via live link when possible — Gamma was designed for web viewing.
            </p>
          </div>

          <div>
            <p className="font-medium mb-2">Embed Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'Figma', 'Typeform', 'Videos', 'Charts'].map((item) => (
                <Badge key={item} variant="outline">{item}</Badge>
              ))}
            </div>
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
            <p className="font-medium text-sm mb-2">Include in Your Prompt</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li><strong>Topic:</strong> Clear subject matter</li>
              <li><strong>Audience:</strong> Executives, investors, customers, students</li>
              <li><strong>Tone:</strong> Professional, creative, data-driven</li>
              <li><strong>Length:</strong> Number of slides/cards</li>
              <li><strong>Theme:</strong> Color preferences, style direction</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg border">
            <p className="font-medium text-sm mb-1">Example Prompt</p>
            <p className="text-sm text-muted-foreground italic">
              "5-slide Q3 social media campaign results for executives, professional tone,
              blue theme, include charts"
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Pro Tips</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Use Claude to brainstorm and outline before Gamma</li>
              <li>Treat Gamma as a first draft generator — refine after</li>
              <li>Let Gamma Agent find supporting statistics automatically</li>
              <li>Use Smart Diagrams for complex information</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Need to automate presentation creation?</h3>
              <p className="text-sm text-muted-foreground">
                Connect Gamma to your workflows with n8n.
              </p>
            </div>
            <Link
              href="/guides/n8n"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              n8n Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
