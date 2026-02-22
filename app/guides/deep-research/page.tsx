export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Search,
  Lightbulb,
  FileText,
  Globe,
  FolderOpen,
  Puzzle,
  Zap
} from 'lucide-react';

export default function DeepResearchPage() {
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
        <span className="text-foreground">Deep Research</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">15 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Deep Research & Synthesis</h1>
            <p className="text-muted-foreground">Run research missions that combine web searches with local documents</p>
          </div>
        </div>
      </div>

      {/* Concept */}
      <Card className="bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">The Concept</p>
              <p className="text-muted-foreground mt-1">
                Standard chat is for asking questions; <strong>Deep Research</strong> is for assigning "missions."
                Instead of pasting text into the chat window, you tell Claude to "go find the answer" across the
                internet and your local files.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Engine */}
      <Card>
        <CardHeader>
          <CardTitle>The Engine: Cowork for Research</CardTitle>
          <CardDescription>
            Deep research relies on the Cowork tab because it supports long-running tasks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Why it works</p>
            <p className="text-sm text-muted-foreground mt-1">
              In standard chat, Claude answers instantly. In Cowork, Claude can spend significant time analyzing,
              breaking the request into sub-tasks, and coordinating parallel "sub-agents" to gather data from
              different sources simultaneously.
            </p>
          </div>
          <div>
            <p className="font-medium">The Output</p>
            <p className="text-sm text-muted-foreground mt-1">
              It doesn't just give you a text summary; it creates "professional outputs" like formatted reports
              or Excel spreadsheets containing your research data.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The Workflow */}
      <Card>
        <CardHeader>
          <CardTitle>The Workflow: From Question to Report</CardTitle>
          <CardDescription>
            Use "Mission Prompts" rather than simple questions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">1</span>
            <div>
              <p className="font-medium">The Mission Prompt</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-medium text-sm">Don't:</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">"What is the market size for X?"</code>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-medium text-sm shrink-0">Do:</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    "Research the market size for X. Look for competitors in the US and EU markets,
                    synthesize their pricing models into a spreadsheet, and write a 2-page summary of the trends."
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">2</span>
            <div>
              <p className="font-medium">The Plan & Execution</p>
              <p className="text-sm text-muted-foreground mt-1">
                Claude proposes a plan (e.g., "1. Search web for competitors, 2. Scrape pricing pages, 3. Analyze data").
                You approve it, and it begins working.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">3</span>
            <div>
              <p className="font-medium">Synthesis</p>
              <p className="text-sm text-muted-foreground mt-1">
                Claude combines information from web searches, academic articles, and your own notes.
                It can read PDFs or "messy inputs" (like voice memos) and turn them into polished documents.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Plugins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Puzzle className="h-5 w-5 text-primary" />
            Research Plugins
          </CardTitle>
          <CardDescription>
            Install specialized plugins to make Claude a subject-matter expert
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Biology Research</p>
              <p className="text-sm text-muted-foreground">Searches literature, analyzes results, plans experiments</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Sales Research</p>
              <p className="text-sm text-muted-foreground">Researches prospects and preps deal memos</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Finance</p>
              <p className="text-sm text-muted-foreground">Analyzes financial models and tracks metrics</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Enterprise Search</p>
              <p className="text-sm text-muted-foreground">Finds information across your company's internal tools</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hybrid Research */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <FolderOpen className="h-5 w-5 text-blue-500" />
              <Globe className="h-5 w-5 text-green-500" />
            </div>
            Hybrid Research (Local + Web)
          </CardTitle>
          <CardDescription>
            The most powerful workflow combines local knowledge with web intelligence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">The Setup</p>
            <p className="text-sm text-muted-foreground mt-1">
              Ensure your <strong>Filesystem MCP</strong> is configured to allow access to your "Documents" folder.
              <Link href="/guides/mcp-setup" className="text-primary hover:underline ml-1">
                See MCP Setup Guide
              </Link>
            </p>
          </div>

          <div>
            <p className="font-medium">Use Case: Personal Knowledge Synthesis</p>
            <div className="bg-muted p-4 rounded-lg mt-2 text-sm">
              "Read all the PDF notes in my 'Thesis' folder <span className="text-blue-500">(Local)</span>,
              search the web for recent counter-arguments published in 2025 <span className="text-green-500">(Web)</span>,
              and write a literature review comparing my notes to the new public data."
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Pro Tips for Research Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <FileText className="h-4 w-4 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-medium">Batch Your Research</p>
              <p className="text-sm text-muted-foreground">
                Research tasks are compute-intensive and cost more tokens. Ask for the research,
                the summary, <em>and</em> the citation list in a single prompt to maximize value.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Search className="h-4 w-4 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-medium">Steering</p>
              <p className="text-sm text-muted-foreground">
                Watch the "Progress indicators." If you see Claude going down a rabbit hole
                (e.g., researching the wrong industry), you can interrupt and steer it back without restarting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="h-4 w-4 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-medium">Citation Handling</p>
              <p className="text-sm text-muted-foreground">
                Explicitly ask Claude to "include a bibliography in the final artifact" so you can verify
                the sources it found during its autonomous web searches.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example Mission */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>Example: Complete Research Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg text-sm font-mono">
            <p className="text-muted-foreground mb-2"># Paste this into Cowork:</p>
            <p>
              "I need a competitive analysis for [YOUR INDUSTRY].
            </p>
            <p className="mt-2">
              1. Search the web for the top 5 competitors
            </p>
            <p>
              2. For each competitor, find their pricing page and extract their plans
            </p>
            <p>
              3. Create an Excel spreadsheet comparing features and pricing
            </p>
            <p>
              4. Write a 1-page executive summary with recommendations
            </p>
            <p>
              5. Include a bibliography of all sources consulted
            </p>
            <p className="mt-2">
              Save everything to my Desktop folder."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Want to create reusable workflows?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how Custom Skills let you install repeatable instructions into Claude.
              </p>
            </div>
            <Link
              href="/guides/custom-skills"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Custom Skills Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
