export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  BookOpen,
  Lightbulb,
  Headphones,
  Upload,
  FileText,
  Quote,
  Users,
  Sparkles,
  GraduationCap,
  Languages,
  Mic,
  MessageSquare
} from 'lucide-react';

export default function NotebookLMPage() {
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
        <span className="text-foreground">NotebookLM</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">20 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Google NotebookLM</h1>
            <p className="text-muted-foreground">AI research assistant grounded in your sources with Audio Overviews</p>
          </div>
        </div>
      </div>

      {/* What is NotebookLM */}
      <Card className="bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is NotebookLM?</p>
              <p className="text-muted-foreground mt-1">
                NotebookLM is Google's AI research assistant that works exclusively from your uploaded sources.
                Unlike general-purpose chatbots, it <strong>stays grounded in your sources</strong> — every response includes
                inline citations so you can verify claims. The killer feature: <strong>Audio Overviews</strong> that turn
                your sources into podcast-style discussions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audio Overviews */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary" />
            Audio Overviews
          </CardTitle>
          <CardDescription>
            The signature feature: AI hosts discuss your sources in podcast format
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            With one click, two AI hosts start a lively "deep dive" discussion based on your sources.
            It's like having a podcast created specifically about your documents.
          </p>

          <div>
            <p className="font-medium mb-3">Audio Overview Formats</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Standard Deep Dive</p>
                <p className="text-xs text-muted-foreground">Two hosts discuss key topics conversationally</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Brief</p>
                <p className="text-xs text-muted-foreground">Shorter summary for quick understanding</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Critique</p>
                <p className="text-xs text-muted-foreground">Critical analysis of your sources</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Debate</p>
                <p className="text-xs text-muted-foreground">Hosts take opposing viewpoints</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Lecture</p>
                <p className="text-xs text-muted-foreground">Single host, 30-minute structured monologue</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Customization Options</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Adjust tone (more formal or casual)</li>
              <li>Control response length</li>
              <li>Generate in 80+ languages</li>
              <li>Download audio for offline listening</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
            <p className="font-medium text-sm flex items-center gap-2">
              <Mic className="h-4 w-4 text-primary" />
              Interactive Mode
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Join the conversation yourself! In Interactive Mode, you can ask the AI hosts questions
              while the overview plays. They'll pause and respond, then continue the discussion.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Adding Sources
          </CardTitle>
          <CardDescription>
            Everything NotebookLM knows comes from your uploaded sources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium mb-2">Supported Source Types</p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="p-2 rounded border text-sm">Google Docs</div>
              <div className="p-2 rounded border text-sm">Google Slides</div>
              <div className="p-2 rounded border text-sm">PDFs</div>
              <div className="p-2 rounded border text-sm">Text files</div>
              <div className="p-2 rounded border text-sm">Web URLs</div>
              <div className="p-2 rounded border text-sm">YouTube videos</div>
              <div className="p-2 rounded border text-sm">Audio files</div>
              <div className="p-2 rounded border text-sm">Copied text</div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Best Practices for Sources</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Upload your own notes, research papers, meeting transcripts</li>
              <li>Add YouTube videos for NotebookLM to transcribe and analyze</li>
              <li>Include primary sources — NotebookLM excels at synthesis</li>
              <li>Keep sources focused on one topic per notebook</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interface Layout */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding the Interface</CardTitle>
          <CardDescription>Three-panel layout for research and creation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted font-mono text-xs overflow-x-auto">
            <pre>{`┌─────────────────────────────────────────────────────────────┐
│  SOURCES PANEL     │    CHAT AREA         │  STUDIO PANEL  │
│  (Left side)       │    (Center)          │  (Right side)  │
│                    │                      │                │
│  • List of all     │  • Ask questions     │  • Generate    │
│    your uploaded   │  • Get answers with  │    outputs:    │
│    documents       │    citations [1][2]  │    - Audio     │
│  • Add new sources │  • Click citations   │    - Slides    │
│  • 50 sources max  │    to see original   │    - Mind maps │
│                    │    text              │    - Tables    │
└─────────────────────────────────────────────────────────────┘`}</pre>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Sources Panel (Left)</p>
              <p className="text-xs text-muted-foreground">Upload materials, check/uncheck to include in answers</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Chat Area (Center)</p>
              <p className="text-xs text-muted-foreground">Ask questions, click citations to verify sources</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Studio Panel (Right)</p>
              <p className="text-xs text-muted-foreground">Generate Audio, Mind Maps, Study Guides, Timelines</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Better Prompts */}
      <Card>
        <CardHeader>
          <CardTitle>Effective Prompts</CardTitle>
          <CardDescription>Get better answers with specific prompts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">What You Want</th>
                  <th className="text-left py-2 font-medium">Prompt to Use</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2">Just the facts</td>
                  <td className="py-2 text-muted-foreground italic">"List only the verified statistics and data points from my sources"</td>
                </tr>
                <tr>
                  <td className="py-2">Compare sources</td>
                  <td className="py-2 text-muted-foreground italic">"How do Source A and Source B differ on [topic]?"</td>
                </tr>
                <tr>
                  <td className="py-2">Find contradictions</td>
                  <td className="py-2 text-muted-foreground italic">"Are there any conflicting claims between my sources?"</td>
                </tr>
                <tr>
                  <td className="py-2">Identify gaps</td>
                  <td className="py-2 text-muted-foreground italic">"What important questions do my sources NOT answer?"</td>
                </tr>
                <tr>
                  <td className="py-2">Create outline</td>
                  <td className="py-2 text-muted-foreground italic">"Create a 10-slide presentation outline using only facts from my sources"</td>
                </tr>
                <tr>
                  <td className="py-2">Extract quotes</td>
                  <td className="py-2 text-muted-foreground italic">"Find the 5 most compelling quotes about [topic]"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 3-Layer Research Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            The 3-Layer Research Method
          </CardTitle>
          <CardDescription>Professional approach for comprehensive research</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold">1</span>
              Layer 1: Gather Quality Sources
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside ml-8">
              <li>Research your topic first using Claude Deep Research or Gemini</li>
              <li>Collect 20-50 high-quality URLs (.edu, .gov, major publications)</li>
              <li>Avoid random blogs, outdated content, promotional material</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold">2</span>
              Layer 2: Build Your Knowledge Base
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside ml-8">
              <li>Upload all gathered sources to NotebookLM</li>
              <li>Ask: "What are the main themes across all my sources?"</li>
              <li>Save summaries as new notes (Sources → Three dots → Save as note)</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-semibold">3</span>
              Layer 3: Refine and Discover
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside ml-8">
              <li>Ask: "What did I miss? What questions remain unanswered?"</li>
              <li>Look for contradictions, gaps, and opportunities</li>
              <li>Add new sources to fill gaps, repeat process</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Core Features */}
      <Card>
        <CardHeader>
          <CardTitle>Core Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Quote className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Inline Citations</p>
              <p className="text-sm text-muted-foreground">
                Every claim NotebookLM makes links back to the specific source and passage.
                Click any citation to jump directly to the original text.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Study Tools</p>
              <p className="text-sm text-muted-foreground">
                Automatically generate flashcards, quizzes, and study guides from your sources.
                Perfect for exam prep or onboarding materials.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Learning Guide</p>
              <p className="text-sm text-muted-foreground">
                Get a structured breakdown of concepts in your sources with explanations
                and suggested reading order.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Tailored Reports</p>
              <p className="text-sm text-muted-foreground">
                Generate custom reports synthesizing information across all your sources
                in the format you specify.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Chat with Sources</p>
              <p className="text-sm text-muted-foreground">
                Ask questions and get answers grounded in your documents.
                Continue querying while Audio Overviews play in the background.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium">Research Paper Synthesis</p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li>Upload 10-20 relevant PDFs and papers</li>
              <li>Ask "What are the main arguments across these sources?"</li>
              <li>Generate an Audio Overview to hear the synthesis while commuting</li>
              <li>Use citations to quickly locate original quotes for your paper</li>
            </ol>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Meeting Preparation</p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li>Upload previous meeting notes, project docs, and emails</li>
              <li>Ask "What decisions are still pending?"</li>
              <li>Generate flashcards of key stakeholder concerns</li>
              <li>Listen to a Brief Audio Overview before the meeting</li>
            </ol>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Book Club / Study Group</p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li>Upload the book (PDF) or paste chapter summaries</li>
              <li>Generate a Debate Audio Overview exploring different interpretations</li>
              <li>Create discussion questions with the Learning Guide</li>
              <li>Share the notebook with your group</li>
            </ol>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Podcast Research</p>
            <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
              <li>Add YouTube links to interviews with your upcoming guest</li>
              <li>Upload their published articles or book</li>
              <li>Ask "What topics does this person care most about?"</li>
              <li>Generate questions grounded in their actual statements</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Collaboration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Sharing & Collaboration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Share notebooks with others to collaborate on research. Team plans include shared notebooks
            with usage analytics.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">View Only</p>
              <p className="text-xs text-muted-foreground">Others can read and query sources</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Can Edit</p>
              <p className="text-xs text-muted-foreground">Others can add/remove sources</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            Pro Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
            <div>
              <p className="font-medium">One topic per notebook</p>
              <p className="text-sm text-muted-foreground">Don't mix unrelated topics — create separate notebooks for better results.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
            <div>
              <p className="font-medium">Use YouTube for interviews</p>
              <p className="text-sm text-muted-foreground">NotebookLM transcribes videos automatically — great for expert interviews.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
            <div>
              <p className="font-medium">Download Audio Overviews</p>
              <p className="text-sm text-muted-foreground">Listen during commutes or workouts to absorb material passively.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
            <div>
              <p className="font-medium">Try Debate format for balanced views</p>
              <p className="text-sm text-muted-foreground">Get both sides of an argument with the Debate Audio Overview format.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">5</span>
            <div>
              <p className="font-medium">Verify citations on important facts</p>
              <p className="text-sm text-muted-foreground">Click through to source passages to confirm accuracy before citing.</p>
            </div>
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
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
