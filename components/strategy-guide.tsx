'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Search,
  Globe,
  PenTool,
  MessageSquare,
  Layers,
  Target,
  Zap,
  ArrowLeftRight,
  Presentation,
  ShieldCheck,
  FileText,
  Headphones,
  Network,
  Table,
  RefreshCw,
} from 'lucide-react';

function GuideSection({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="w-full flex items-center justify-between gap-3 py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors text-left group">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              {icon}
            </span>
            <span className="font-medium text-sm">{title}</span>
          </div>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 pb-4"
            >
              <div className="prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted rounded-lg p-3 text-sm font-mono whitespace-pre-wrap my-2 border border-border/50">
      {children}
    </div>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-primary/30 pl-4 my-3 italic text-muted-foreground">
      {children}
    </blockquote>
  );
}

function ComparisonTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto my-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2 pr-4 font-medium text-foreground">Use Research mode when...</th>
            <th className="text-left py-2 font-medium text-foreground">Use regular chat when...</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([left, right], i) => (
            <tr key={i} className="border-b border-border/50">
              <td className="py-2 pr-4">{left}</td>
              <td className="py-2">{right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkflowTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto my-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2 pr-4 font-medium text-foreground">Research phase</th>
            <th className="text-left py-2 pr-4 font-medium text-foreground">Primary tool</th>
            <th className="text-left py-2 font-medium text-foreground">Why</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([phase, tool, why], i) => (
            <tr key={i} className="border-b border-border/50">
              <td className="py-2 pr-4">{phase}</td>
              <td className="py-2 pr-4 font-medium">{tool}</td>
              <td className="py-2">{why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StrategyGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="text-xs">Guide</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">
                Research &amp; Insights with AI Tools
              </CardTitle>
              <CardDescription className="mt-1.5">
                A practical guide to using Claude and Google NotebookLM together for strategy research.
                <span className="block mt-1 text-xs">
                  <strong className="text-foreground">Claude</strong> for strategic thinking &amp; analysis &bull; <strong className="text-foreground">NotebookLM</strong> for source-grounded research
                </span>
              </CardDescription>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5 shrink-0">
                {isOpen ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    <span className="hidden sm:inline">Close Guide</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    <span className="hidden sm:inline">Read Guide</span>
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>

        <CollapsibleContent>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardContent className="pt-0 space-y-1">
                  {/* Intro */}
                  <div className="p-4 bg-muted/50 rounded-lg mb-4">
                    <h3 className="font-semibold text-sm mb-2">The Two-Tool Approach</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      This guide covers two AI tools that, used together, give strategists a research workflow that&apos;s faster, deeper, and more rigorous than traditional desk research.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-background rounded-lg border border-border/50">
                        <p className="font-medium text-sm mb-1">Claude</p>
                        <p className="text-xs text-muted-foreground">
                          Your strategic thinking partner. Use for analysis, synthesis, competitive intelligence, audience insight, positioning work, and generating strategic frameworks. Claude goes beyond your materials — it thinks, interprets, argues, and builds.
                        </p>
                      </div>
                      <div className="p-3 bg-background rounded-lg border border-border/50">
                        <p className="font-medium text-sm mb-1">Google NotebookLM</p>
                        <p className="text-xs text-muted-foreground">
                          Your source-grounded research assistant. Use for organising documents, synthesising multiple reports, finding specific data points, and generating cited summaries. Every answer links back to a specific document.
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 font-medium">
                      The short version: NotebookLM for &ldquo;what do our sources say?&rdquo; and Claude for &ldquo;what does it mean and what should we do about it?&rdquo;
                    </p>
                  </div>

                  {/* Part 1: Claude */}
                  <div className="border-b border-border/50 pb-1">
                    <h3 className="text-sm font-semibold text-foreground px-4 py-2">Part 1: Claude — Feature by Feature</h3>
                  </div>

                  <GuideSection title="1.1 Projects (Persistent Research Workspaces)" icon={<Layers className="h-4 w-4" />}>
                    <p>
                      This is the single most important Claude feature for strategy work. A Project gives Claude a persistent workspace with memory — it retains your uploaded documents and custom instructions across every conversation within that project.
                    </p>
                    <p className="mt-2">
                      <strong className="text-foreground">Why this matters:</strong> Without a Project, every new chat starts from zero. With a Project, Claude already knows your client, your brief, your category, and how you want it to behave. This is the difference between a generic chatbot and a contextual strategy partner.
                    </p>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">How to set one up:</h4>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Open Claude &rarr; click <strong className="text-foreground">Projects</strong> in the left sidebar &rarr; <strong className="text-foreground">Create Project</strong></li>
                      <li>Give it a specific name: &ldquo;Wellness Drinks Brand Launch&rdquo; or &ldquo;Automotive Q2 Campaign Planning&rdquo; — not &ldquo;Research&rdquo; or &ldquo;Strategy stuff&rdquo;</li>
                      <li>Upload reference documents to the <strong className="text-foreground">knowledge base</strong> — PDFs, briefs, reports, competitor decks, brand guidelines, previous strategy docs. You can upload up to roughly 500 pages of material (200K tokens). If you go beyond that, Claude automatically activates RAG mode to handle the overflow.</li>
                      <li>Write <strong className="text-foreground">custom instructions</strong> — this is the step most people skip, and it&apos;s the step that makes the biggest difference.</li>
                    </ol>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Writing good custom instructions:</h4>
                    <p>Custom instructions tell Claude who it is, what it&apos;s working on, and how to behave. Think of it as briefing a new strategist on their first day.</p>
                    <ul className="list-disc ml-4 space-y-1 mt-2">
                      <li><strong className="text-foreground">Role:</strong> What kind of strategist is Claude playing? (Senior strategist, cultural analyst, competitive intelligence researcher)</li>
                      <li><strong className="text-foreground">Context:</strong> What&apos;s the project? Who&apos;s the client? What&apos;s the category?</li>
                      <li><strong className="text-foreground">Constraints:</strong> What should Claude always do or never do? (e.g. always consider Australian market context, don&apos;t default to US examples)</li>
                      <li><strong className="text-foreground">Output format:</strong> How should responses be structured? (e.g. format for strategy decks not essays)</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Example: Brand strategy project</h4>
                    <Blockquote>
                      You are a senior brand strategist at an Australian advertising agency. You&apos;re working on a new brand launch for a premium wellness drink targeting health-conscious millennials in metro Australia.
                      <br /><br />
                      When conducting analysis:
                      <br />— Always ground insights in the Australian market context
                      <br />— Distinguish clearly between data-backed findings and strategic hypotheses
                      <br />— Consider cultural nuance — what &ldquo;wellness&rdquo; means in Australia is different from the US
                      <br />— Include both direct and indirect competitors
                      <br /><br />
                      When formatting output:
                      <br />— Structure responses for strategy decks, not essays
                      <br />— Use clear headers, bullet points, and tables
                      <br />— End analysis sections with a &ldquo;So What&rdquo; — the strategic implication
                      <br />— Keep recommendations specific and actionable
                    </Blockquote>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Example: Competitive intelligence project</h4>
                    <Blockquote>
                      You are a competitive intelligence analyst supporting the strategy team at an advertising agency. Your job is to analyse competitor brands in detail — their positioning, messaging, media presence, product strategy, and vulnerabilities.
                      <br /><br />
                      When analysing competitors:
                      <br />— Structure analysis consistently: positioning, target audience, key messages, channels, strengths, weaknesses, and strategic implications
                      <br />— Always assess what a competitor is doing well AND where they&apos;re vulnerable
                      <br />— Look for patterns across the competitive set, not just individual brands
                      <br />— Flag any recent shifts in strategy, messaging, or market behaviour
                      <br /><br />
                      When you&apos;re unsure about something, say so. Don&apos;t fill gaps with generic statements.
                    </Blockquote>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Tips for managing Projects:</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Create one Project per major client or pitch, not one mega-project for everything</li>
                      <li>Update the knowledge base as new documents come in</li>
                      <li>If working across multiple workstreams, consider separate Projects with different instructions</li>
                      <li>Projects on Team/Enterprise plans can be shared with colleagues</li>
                    </ul>
                  </GuideSection>

                  <GuideSection title="1.2 Research Mode (Deep, Multi-Step Web Research)" icon={<Search className="h-4 w-4" />}>
                    <p>
                      Research mode is Claude&apos;s agentic research capability. Unlike a regular web search that returns a list of links, Research mode runs multiple progressive searches that build on each other, explores different angles of your question, and compiles a comprehensive, cited report.
                    </p>
                    <p className="mt-2">
                      <strong className="text-foreground">How it works:</strong> Claude doesn&apos;t just fire off one search query. It reads the initial results, identifies gaps or follow-up questions, runs additional searches to fill those gaps, cross-references findings, and then synthesises everything into a structured output with inline citations. It&apos;s closer to how a research analyst works than how Google works.
                    </p>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">How to turn it on:</h4>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Make sure <strong className="text-foreground">Web Search</strong> is toggled on (the slider icon in the chat input area)</li>
                      <li>Click the <strong className="text-foreground">Research</strong> button (bottom left of the chat interface)</li>
                      <li>Ask your question. Research mode takes 2–5 minutes — it&apos;s doing real work.</li>
                    </ol>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">When to use Research mode vs. regular chat:</h4>
                    <ComparisonTable rows={[
                      ['You need a comprehensive landscape view', 'You\'re iterating on ideas or frameworks'],
                      ['You want current, cited data from the web', 'You\'re working from uploaded documents'],
                      ['You\'d normally spend 30+ minutes desk researching', 'A quick answer or synthesis is enough'],
                      ['You need multiple perspectives on a topic', 'You need Claude to think creatively'],
                    ]} />

                    <h4 className="font-semibold text-foreground mt-4 mb-2">High-value Research mode prompts:</h4>

                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Competitive landscape</p>
                    <Blockquote>Research the competitive landscape for premium wellness and functional drinks in Australia. I want to understand: who are the key brands (tier one, tier two, and emerging), what&apos;s their positioning and price architecture, how are they showing up in media and social, and what are the most significant category trends over the last 12 months?</Blockquote>

                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Cultural context</p>
                    <Blockquote>Research the cultural conversation around &ldquo;wellness&rdquo; in Australia right now. I&apos;m interested in how mainstream consumers talk about wellness vs. how brands talk about it, any backlash or scepticism around wellness culture, and where there&apos;s a gap between what people say they value and how they actually behave.</Blockquote>

                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Audience understanding</p>
                    <Blockquote>Research the health-conscious millennial consumer in Australian metro markets. Go beyond demographics — I want to understand their media consumption, the brands they trust (and why), their purchase triggers for premium food and drink, and what &ldquo;wellness&rdquo; actually means in their daily life vs. the aspirational version brands project.</Blockquote>

                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Category trends</p>
                    <Blockquote>Research emerging trends in the global functional beverage market that are likely to hit Australia in the next 12–24 months. Look at what&apos;s gaining traction in the US, UK, and Asian markets that hasn&apos;t scaled here yet. Include both product trends and marketing trends.</Blockquote>

                    <p className="mt-3">
                      <strong className="text-foreground">After Research completes:</strong> Every finding has a clickable citation. Get into the habit of spot-checking the top 3–5 claims by clicking through to the source. This is how you catch errors and find richer source material.
                    </p>
                  </GuideSection>

                  <GuideSection title="1.3 Web Search (Quick, Real-Time Checks)" icon={<Globe className="h-4 w-4" />}>
                    <p>
                      Web search is the lighter version — for quick factual checks during a conversation, not deep research. When toggled on, Claude automatically searches when it determines it needs current information.
                    </p>
                    <p className="mt-2">
                      <strong className="text-foreground">How to enable:</strong> Click the slider icon in the chat input &rarr; toggle <strong className="text-foreground">Web search</strong> on.
                    </p>
                    <h4 className="font-semibold text-foreground mt-3 mb-2">When to use it:</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Checking a competitor&apos;s latest campaign, product launch, or news</li>
                      <li>Verifying a statistic or data point</li>
                      <li>Finding a recent article or report</li>
                      <li>Checking current pricing, availability, or market data</li>
                      <li>Quick fact-checking during a strategy session</li>
                    </ul>
                    <p className="mt-2">
                      <strong className="text-foreground">Pro tip:</strong> You can give Claude a specific URL and ask it to read and analyse that page. Paste a competitor&apos;s website URL and ask Claude to pull out the key insights.
                    </p>
                  </GuideSection>

                  <GuideSection title="1.4 Prompt Craft for Strategy Research" icon={<PenTool className="h-4 w-4" />}>
                    <p>
                      The way you prompt Claude dramatically affects the quality of output. Here are the patterns that matter most for strategy work.
                    </p>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Pattern 1: Role + Context + Task + Format</h4>
                    <p>Don&apos;t just ask a question. Frame who Claude is, what it&apos;s working on, what you need, and how you want it delivered.</p>
                    <p className="text-xs uppercase tracking-wide font-medium text-destructive mt-2">Weak prompt:</p>
                    <Blockquote>Tell me about the wellness drink market.</Blockquote>
                    <p className="text-xs uppercase tracking-wide font-medium text-green-600 dark:text-green-400 mt-2">Strong prompt:</p>
                    <Blockquote>You&apos;re a strategy director preparing for a new business pitch. Based on the Australian premium wellness drink market, give me three distinct positioning territories for a new brand entering this space. For each territory, provide: a one-line proposition, the target consumer profile, the emotional territory it owns, the key proof points needed, and one brand reference from any category that occupies similar strategic space.</Blockquote>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Pattern 2: Pressure-testing (adversarial prompting)</h4>
                    <p>Once Claude gives you a strategic recommendation, ask it to argue against itself. This surfaces weaknesses, risks, and blind spots.</p>
                    <Blockquote>Now argue against each of those three territories. What&apos;s the biggest risk or weakness of each? What evidence would suggest it won&apos;t work? What would a sceptical client say?</Blockquote>
                    <Blockquote>Play devil&apos;s advocate on this positioning. What are we assuming that might not be true? What competitor could neutralise this positioning within 6 months?</Blockquote>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Pattern 3: Iterative deepening</h4>
                    <p>Start broad, then zoom in. Use follow-up prompts to build depth on the most promising threads.</p>
                    <Blockquote>Territory 2 is the most interesting. Develop that further — give me a messaging hierarchy with a master brand message and three supporting messages. Then suggest the media channels and content formats where this positioning would land best with the target audience.</Blockquote>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Pattern 4: Structured output requests</h4>
                    <p>Tell Claude exactly the structure you want. This saves reformatting time and produces deck-ready output.</p>
                    <Blockquote>Give me this as a competitive overview table with columns for: Brand, Positioning, Price Point, Hero Product, Primary Channel, Biggest Strength, Biggest Vulnerability.</Blockquote>
                    <Blockquote>Structure this as a strategy-on-a-page: insight at the top, strategic opportunity, target audience, brand proposition, three reasons to believe, and tone of voice.</Blockquote>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Pattern 5: Asking Claude to identify what&apos;s missing</h4>
                    <p>Incredibly valuable for strategy work.</p>
                    <Blockquote>What questions haven&apos;t I asked that I should be asking about this market? What&apos;s missing from this analysis that a strong strategist would want to know before recommending a positioning?</Blockquote>
                    <Blockquote>Based on everything we&apos;ve discussed, what are the three biggest unknowns that could change our strategic recommendation? What research would we need to resolve them?</Blockquote>
                  </GuideSection>

                  <GuideSection title="1.5 Cowork Mode (Generating Deliverables)" icon={<FileText className="h-4 w-4" />}>
                    <p>
                      Cowork is Claude&apos;s desktop tool for producing actual files — strategy decks in PowerPoint, reports in Word, data tables in Excel, and more. Once you&apos;ve done the strategic thinking in a regular Claude chat or Project, come to Cowork to turn that thinking into polished deliverables.
                    </p>
                    <h4 className="font-semibold text-foreground mt-3 mb-2">What Cowork can produce:</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>PowerPoint strategy decks with formatted slides</li>
                      <li>Word documents for research reports and written strategies</li>
                      <li>Excel spreadsheets for competitive data, audience frameworks, or budget models</li>
                      <li>PDFs, HTML pages, and other file formats</li>
                      <li>Markdown files</li>
                    </ul>
                    <p className="mt-2">
                      <strong className="text-foreground">How to use it:</strong> Paste or describe your strategic output and ask Cowork to format it. Be specific about what you want — number of slides, structure, level of detail, whether you want speaker notes.
                    </p>
                  </GuideSection>

                  <GuideSection title="1.6 Connected Workspace (Google Integration)" icon={<Zap className="h-4 w-4" />}>
                    <p>
                      On Team and Enterprise plans, Claude can connect to your Google Workspace — Gmail, Google Docs, Google Calendar. This means Research mode can search your internal documents alongside the web.
                    </p>
                    <p className="mt-2">
                      <strong className="text-foreground">Strategy use case:</strong> Ask Claude to research a topic and simultaneously pull in relevant briefs, meeting notes, or past strategy docs from your Google Drive. This bridges the gap between external research and internal knowledge.
                    </p>
                  </GuideSection>

                  {/* Part 2: NotebookLM */}
                  <div className="border-b border-border/50 pb-1 pt-4">
                    <h3 className="text-sm font-semibold text-foreground px-4 py-2">Part 2: Google NotebookLM — Feature by Feature</h3>
                  </div>

                  <GuideSection title="2.1 Source-Grounded Notebooks (The Core Feature)" icon={<Target className="h-4 w-4" />}>
                    <p>
                      Everything in NotebookLM flows from one principle: it only works from the sources you give it. It will not make things up. It will not go beyond your materials. Every single claim it makes has an inline citation that links back to the specific passage in the specific document.
                    </p>
                    <p className="mt-2">
                      <strong className="text-foreground">Why this matters for strategy:</strong> When you&apos;re pulling data from a Mintel report or quoting a client brief, you need to know the AI isn&apos;t inventing numbers. NotebookLM gives you that confidence.
                    </p>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Supported source types:</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>PDFs (research reports, whitepapers, strategy docs)</li>
                      <li>Google Docs, Google Slides</li>
                      <li>Website URLs (paste a competitor&apos;s website and it becomes a source)</li>
                      <li>YouTube videos (works from the transcript)</li>
                      <li>Copied text and Google Drive files</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">How to set up a research notebook:</h4>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Go to notebooklm.google.com &rarr; <strong className="text-foreground">New Notebook</strong></li>
                      <li>Add your sources — aim for 3–10 high-quality sources per notebook. Curate what&apos;s relevant.</li>
                      <li>Name sources clearly. &ldquo;Mintel Wellness Drinks Australia 2025&rdquo; is far more useful than &ldquo;Report_final_v3.pdf&rdquo;</li>
                      <li>Start asking questions</li>
                    </ol>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Best prompts for NotebookLM:</h4>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Cross-source synthesis</p>
                    <Blockquote>Summarise the key market dynamics mentioned across all my sources. Where do the sources agree? Where do they present conflicting data or perspectives?</Blockquote>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Data extraction</p>
                    <Blockquote>Pull out every specific statistic or data point about market size, growth rates, and consumer demographics from my sources. Present them in a table with the source cited for each.</Blockquote>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Gap identification</p>
                    <Blockquote>Based on my sources, what topics or questions are NOT well covered? What would I need additional research on?</Blockquote>
                  </GuideSection>

                  <GuideSection title="2.2 Notebook Guide (Custom Instructions)" icon={<MessageSquare className="h-4 w-4" />}>
                    <p>
                      Similar to Claude&apos;s Project instructions, you can write a custom guide for each notebook that shapes how NotebookLM behaves.
                    </p>
                    <h4 className="font-semibold text-foreground mt-3 mb-2">Example:</h4>
                    <Blockquote>
                      You are a research assistant supporting a strategy team at an advertising agency. We&apos;re researching the Australian wellness drink market for a new brand launch. When answering questions, always cite specific data points with source references. Prioritise quantitative data where available. Flag any contradictions between sources.
                    </Blockquote>
                    <p className="mt-2">
                      <strong className="text-foreground">Why bother:</strong> Without a guide, NotebookLM gives generic summaries. With a guide, it focuses on what matters to your specific project.
                    </p>
                  </GuideSection>

                  <GuideSection title="2.3 Audio Overviews (AI-Generated Podcasts)" icon={<Headphones className="h-4 w-4" />}>
                    <p>
                      NotebookLM can generate a podcast-style audio conversation between two AI hosts who discuss and synthesise your uploaded sources. The result is a 5–15 minute audio briefing that&apos;s surprisingly natural and useful.
                    </p>
                    <h4 className="font-semibold text-foreground mt-3 mb-2">How to generate one:</h4>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>In your notebook, click <strong className="text-foreground">Audio Overview</strong></li>
                      <li>Choose a format — standard discussion, debate, or critique</li>
                      <li>Wait 1–2 minutes for it to generate</li>
                      <li>Listen, download, or share</li>
                    </ol>
                    <h4 className="font-semibold text-foreground mt-4 mb-2">Strategy use cases:</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li><strong className="text-foreground">Team briefing:</strong> Share an Audio Overview before a workshop instead of asking everyone to read a 40-page PDF</li>
                      <li><strong className="text-foreground">Client onboarding:</strong> Upload brand guidelines, recent campaigns, and category reports for a quick orientation</li>
                      <li><strong className="text-foreground">Pitch preparation:</strong> Listen to key themes surfaced conversationally — sometimes triggers strategic connections you miss when reading</li>
                    </ul>
                    <p className="mt-2">
                      <strong className="text-foreground">Pro tip:</strong> Generate the Audio Overview early in your research process, not at the end. It&apos;s a great way to get a high-level map of the territory before diving into detailed analysis.
                    </p>
                  </GuideSection>

                  <GuideSection title="2.4 Mind Maps (Visual Research Mapping)" icon={<Network className="h-4 w-4" />}>
                    <p>
                      NotebookLM can auto-generate interactive mind maps from your sources. Each node represents a theme or topic, and you can click into nodes to read AI-generated summaries and explore sub-topics.
                    </p>
                    <p className="mt-2">
                      <strong className="text-foreground">Strategy use case:</strong> Use mind maps at the start of a research phase to visualise the landscape. Particularly useful for identifying connections between themes that aren&apos;t obvious when reading sources linearly. Screenshot the mind map and include it in research presentations as a visual overview.
                    </p>
                  </GuideSection>

                  <GuideSection title="2.5 Data Tables (Structured Extraction)" icon={<Table className="h-4 w-4" />}>
                    <p>
                      NotebookLM can extract structured, tabular data from your unstructured sources — turning paragraphs of text into clean comparison tables.
                    </p>
                    <h4 className="font-semibold text-foreground mt-3 mb-2">Example prompt:</h4>
                    <Blockquote>Create a comparison table of all the wellness drink brands mentioned across my sources. Include columns for: brand name, parent company, positioning, price range, hero product, primary sales channel, and which source mentions them.</Blockquote>
                    <p className="mt-2">
                      <strong className="text-foreground">Strategy use case:</strong> Build competitive comparison tables, audience segment matrices, or trend inventories without manually combing through reports. Export for use in decks and documents.
                    </p>
                  </GuideSection>

                  <GuideSection title="2.6 Note Export → Source Loop (Layered Analysis)" icon={<RefreshCw className="h-4 w-4" />}>
                    <p>
                      This is a power-user feature that creates a virtuous research cycle:
                    </p>
                    <ol className="list-decimal ml-4 space-y-1 mt-2">
                      <li>Upload raw sources to your notebook</li>
                      <li>Ask NotebookLM to synthesise them</li>
                      <li>Save the synthesis as a <strong className="text-foreground">Note</strong></li>
                      <li>Promote that Note to become a <strong className="text-foreground">Source</strong></li>
                      <li>Now ask higher-order questions about your own synthesised analysis</li>
                    </ol>
                    <p className="mt-2">
                      <strong className="text-foreground">Why this matters:</strong> It lets you build layers of abstraction. First pass: raw data synthesis. Second pass: pattern identification. Third pass: strategic implications. Each layer builds on the last, and every claim still traces back to original sources.
                    </p>
                    <h4 className="font-semibold text-foreground mt-3 mb-2">Example workflow:</h4>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Upload five competitor sources &rarr; summarise competitive dynamics &rarr; save as Note</li>
                      <li>Upload three audience sources &rarr; summarise consumer behaviour &rarr; save as Note</li>
                      <li>Promote both Notes to Sources &rarr; ask: &ldquo;Based on the competitive dynamics and consumer behaviour, where are the biggest strategic opportunities?&rdquo;</li>
                    </ol>
                  </GuideSection>

                  {/* Part 3: Using Together */}
                  <div className="border-b border-border/50 pb-1 pt-4">
                    <h3 className="text-sm font-semibold text-foreground px-4 py-2">Part 3: Using Claude and NotebookLM Together</h3>
                  </div>

                  <GuideSection title="The Ping-Pong Method" icon={<ArrowLeftRight className="h-4 w-4" />} defaultOpen={false}>
                    <p>The real power isn&apos;t in either tool alone — it&apos;s in the back-and-forth between them.</p>

                    <div className="space-y-4 mt-3">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="font-medium text-foreground text-xs uppercase tracking-wide mb-1">Step 1 — Ground in NotebookLM</p>
                        <p>Start in NotebookLM to extract grounded, cited findings from your sources.</p>
                        <p className="mt-1 italic text-xs">Example: NotebookLM tells you: &ldquo;According to the Mintel report, 63% of Australian millennials say they&apos;d pay more for drinks with functional benefits, but only 22% can name a functional ingredient beyond protein.&rdquo;</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="font-medium text-foreground text-xs uppercase tracking-wide mb-1">Step 2 — Interpret in Claude</p>
                        <p>Bring that finding to Claude and ask for strategic interpretation.</p>
                        <Blockquote>I have a data point from a Mintel report: 63% of Australian millennials say they&apos;d pay more for drinks with functional benefits, but only 22% can name a functional ingredient beyond protein. What does this gap tell us strategically? How should a new brand navigate this tension?</Blockquote>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="font-medium text-foreground text-xs uppercase tracking-wide mb-1">Step 3 — Pressure-test in Claude</p>
                        <p>Ask Claude to challenge its own interpretation.</p>
                        <Blockquote>What are the risks of building a strategy on this data point? What would need to be true for this to hold? What if the gap is closing fast?</Blockquote>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="font-medium text-foreground text-xs uppercase tracking-wide mb-1">Step 4 — Verify in NotebookLM</p>
                        <p>Take Claude&apos;s hypothesis back to NotebookLM and check if your other sources support or contradict it.</p>
                        <Blockquote>Do any of my sources discuss consumer knowledge of functional ingredients? Is there evidence that education drives purchase intent in this category?</Blockquote>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="font-medium text-foreground text-xs uppercase tracking-wide mb-1">Step 5 — Build the narrative in Claude</p>
                        <p>Once validated, use Claude to structure it into a strategic narrative.</p>
                        <Blockquote>Take this insight about the knowledge-willingness gap and build it into a strategic opportunity statement. Frame it as: the tension, the insight, the opportunity, and the brand implication.</Blockquote>
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">When to be in which tool:</h4>
                    <WorkflowTable rows={[
                      ['Gathering sources', 'NotebookLM', 'Built for multi-source management'],
                      ['High-level overview', 'NotebookLM (Audio)', 'Fast synthesis you can share'],
                      ['Finding data points', 'NotebookLM', 'Source-grounded with citations'],
                      ['Competitive landscapes', 'Claude (Research)', 'Goes beyond docs to the web'],
                      ['Interpreting data', 'Claude (Projects)', 'Strategic thinking and framing'],
                      ['Positioning options', 'Claude', 'Creative strategic output'],
                      ['Pressure-testing', 'Claude', 'Can argue both sides'],
                      ['Visual research maps', 'NotebookLM', 'Auto-generates from sources'],
                      ['Structured comparisons', 'NotebookLM', 'Extracts tables from messy sources'],
                      ['Strategic narrative', 'Claude', 'Strong at structuring arguments'],
                      ['Producing deliverables', 'Claude Cowork', 'Creates decks, docs, spreadsheets'],
                      ['Briefing the team', 'NotebookLM (Audio)', 'Shareable podcast format'],
                    ]} />
                  </GuideSection>

                  {/* Part 4: Demo Script */}
                  <div className="border-b border-border/50 pb-1 pt-4">
                    <h3 className="text-sm font-semibold text-foreground px-4 py-2">Part 4: Demo Script for the Team (15–20 Minutes)</h3>
                  </div>

                  <GuideSection title="Running the Demo" icon={<Presentation className="h-4 w-4" />}>
                    <h4 className="font-semibold text-foreground mb-2">Setup (Do Before the Meeting)</h4>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Pre-load a <strong className="text-foreground">NotebookLM notebook</strong> with 3–5 sources relevant to a current project</li>
                      <li>Pre-load a <strong className="text-foreground">Claude Project</strong> with custom instructions and a couple of uploaded docs</li>
                      <li>Pre-generate one <strong className="text-foreground">Audio Overview</strong> in NotebookLM</li>
                      <li>Have this guide open for reference</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">The Run</h4>
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 pr-3 font-medium text-foreground w-16">Time</th>
                            <th className="text-left py-2 pr-3 font-medium text-foreground">What to show</th>
                            <th className="text-left py-2 font-medium text-foreground">Key message</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">2 min</td><td className="py-2 pr-3">Frame the two tools</td><td className="py-2 italic">&ldquo;NotebookLM grounds us in sources. Claude does the strategic thinking. Together they&apos;re our research stack.&rdquo;</td></tr>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">3 min</td><td className="py-2 pr-3">NotebookLM: cross-source question, show citations</td><td className="py-2 italic">&ldquo;Every claim links back to a specific document. No hallucinations.&rdquo;</td></tr>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">2 min</td><td className="py-2 pr-3">Play 60s of Audio Overview</td><td className="py-2 italic">&ldquo;Share this before a brainstorm instead of asking everyone to read 40 pages.&rdquo;</td></tr>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">4 min</td><td className="py-2 pr-3">Claude Project: custom instructions, positioning prompt, pressure-test</td><td className="py-2 italic">&ldquo;This is where strategic thinking happens. It gets better because it knows our context.&rdquo;</td></tr>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">3 min</td><td className="py-2 pr-3">Data point from NotebookLM &rarr; Claude interpretation</td><td className="py-2 italic">&ldquo;Ground in sources, then interpret. This is the workflow.&rdquo;</td></tr>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">2 min</td><td className="py-2 pr-3">Mention Cowork for deliverables</td><td className="py-2 italic">&ldquo;Once the thinking is done, it builds the deck for you.&rdquo;</td></tr>
                          <tr className="border-b border-border/50"><td className="py-2 pr-3 font-mono text-xs">2 min</td><td className="py-2 pr-3">Q&amp;A</td><td className="py-2 italic">Address accuracy, privacy, and workflow integration</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Prompts to Run Live</h4>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">In NotebookLM (with pre-loaded sources):</p>
                    <Blockquote>What are the three most significant findings across all my sources? Cite the specific source for each.</Blockquote>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">In Claude Project (with custom instructions):</p>
                    <Blockquote>Based on the competitive landscape in this category, identify three distinct positioning territories that are currently unoccupied or underserved. For each, give me: a one-line proposition, the target consumer, the emotional territory, and the biggest risk.</Blockquote>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">Pressure-test:</p>
                    <Blockquote>Now argue against Territory 1. What would a sceptical CMO say? What evidence would disprove it?</Blockquote>
                    <p className="font-medium text-foreground text-xs uppercase tracking-wide mt-3">The ping-pong moment (copy data point from NotebookLM into Claude):</p>
                    <Blockquote>I have this finding from our research: [paste data point]. What&apos;s the strategic implication? How should this shape our brand positioning?</Blockquote>
                  </GuideSection>

                  <GuideSection title="Questions They'll Ask (and How to Answer)" icon={<Lightbulb className="h-4 w-4" />}>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-foreground">&ldquo;Is it accurate?&rdquo;</p>
                        <p className="mt-1">Claude can get things wrong — that&apos;s why we use NotebookLM for source-grounded work (it only draws from your documents) and always verify key claims in Research mode by checking the citations. The rule: never put an AI-generated data point in a client deck without checking the source.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">&ldquo;What about client confidentiality?&rdquo;</p>
                        <p className="mt-1">Claude Pro and Team plans don&apos;t use your data for training. NotebookLM uses your Google account and Google&apos;s data policies apply. When in doubt, don&apos;t upload sensitive client data — use publicly available information and add client-specific context through prompts rather than uploads.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">&ldquo;Does this replace desk research?&rdquo;</p>
                        <p className="mt-1">No. It accelerates it dramatically. You still need good sources, strategic judgement, and human insight. AI handles the volume and synthesis; you handle the non-obvious connection, the human truth, and the creative leap. Think of it as having a very fast, very thorough junior strategist who needs a senior strategist to direct them.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">&ldquo;Which one should I start with?&rdquo;</p>
                        <p className="mt-1">If you already have research materials: start in NotebookLM to organise and synthesise, then move to Claude to interpret and build strategy. If starting from scratch: start in Claude with Research mode to map the landscape, then load key findings into NotebookLM for deeper source analysis.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">&ldquo;Do I need a paid account?&rdquo;</p>
                        <p className="mt-1">Claude&apos;s free tier works but is limited. For strategy work, Claude Pro ($20/month) is strongly recommended — you get Projects, more Research queries, and longer conversations. NotebookLM&apos;s free tier is genuinely capable. The Google AI Pro subscription ($19.99/month) adds higher usage limits.</p>
                      </div>
                    </div>
                  </GuideSection>

                  {/* Part 5: Rules */}
                  <div className="border-b border-border/50 pb-1 pt-4">
                    <h3 className="text-sm font-semibold text-foreground px-4 py-2">Part 5: Rules of Engagement</h3>
                  </div>

                  <GuideSection title="Always Do / Never Do" icon={<ShieldCheck className="h-4 w-4" />}>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Always</h4>
                    <ul className="list-disc ml-4 space-y-1.5">
                      <li><strong className="text-foreground">Verify key claims</strong> before they go in a deck. Click the citations. Check the sources. AI is a starting point, not a final answer.</li>
                      <li><strong className="text-foreground">Use Projects and Notebooks</strong> — don&apos;t do strategy research in throwaway chats. Persistent context makes everything better.</li>
                      <li><strong className="text-foreground">Write specific prompts</strong> — vague inputs produce vague outputs. Include role, context, task, and desired format.</li>
                      <li><strong className="text-foreground">Layer your own judgement</strong> — AI gives you raw material and first-draft thinking. The strategist&apos;s job is the insight, the tension, the human truth, the creative frame.</li>
                      <li><strong className="text-foreground">Keep sources current</strong> — upload the latest research, use Research mode for live data, and update your knowledge bases as new materials come in.</li>
                      <li><strong className="text-foreground">Start with the brief</strong> — frame the question before opening any tool. What are we trying to understand? What decisions will this inform?</li>
                    </ul>

                    <h4 className="font-semibold text-destructive mt-4 mb-2">Never</h4>
                    <ul className="list-disc ml-4 space-y-1.5">
                      <li><strong className="text-foreground">Present AI output unchecked</strong> — everything goes through your strategic lens before reaching a client or creative team.</li>
                      <li><strong className="text-foreground">Upload confidential client data without checking policy</strong> — understand what your agency&apos;s data governance allows for each tool.</li>
                      <li><strong className="text-foreground">Use AI as a shortcut for thinking</strong> — it should make your thinking better and faster, not replace it.</li>
                      <li><strong className="text-foreground">Rely on one tool alone</strong> — the power is in NotebookLM and Claude together, not either in isolation.</li>
                      <li><strong className="text-foreground">Trust a single source</strong> — cross-reference across multiple sources and tools. If NotebookLM says it and Claude&apos;s Research mode confirms it from different sources, you&apos;re on solid ground.</li>
                    </ul>
                  </GuideSection>

                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
