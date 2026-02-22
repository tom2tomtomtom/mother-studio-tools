'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Home,
  Brain,
  Lightbulb,
  MessageSquare,
  Target,
  Layers,
  Users,
  FileText,
  Beaker,
  Upload,
  Zap,
  Grid3X3,
  Copy,
  ClipboardCheck,
  BarChart3,
  Star,
  AlertTriangle,
  ArrowRight,
  Plus,
  Timer,
  LayoutGrid
} from 'lucide-react';

export default function AidenStudioPage() {
  const [openSections, setOpenSections] = useState<string[]>(['pitch']);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

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
        <span className="text-foreground">AIDEN Studio</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Comprehensive</Badge>
          <Badge variant="outline">60 min read</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AIDEN.services Complete Guide</h1>
            <p className="text-muted-foreground">A Beginner's Step-by-Step Manual for Every Feature</p>
          </div>
        </div>
      </div>

      {/* What is AIDEN */}
      <Card className="bg-gradient-to-r from-red-500/5 via-red-500/10 to-red-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is AIDEN.services?</p>
              <p className="text-muted-foreground mt-1">
                AIDEN.services is a complete <strong>AI Creative Director suite</strong> comprising three integrated products:
                <strong> AIDEN.pitch</strong> (campaign development), <strong>AIDEN.test</strong> (synthetic research),
                and <strong>AIDEN.chat</strong> (334-phantom AI strategy).
                Together they form an end-to-end creative workflow: <strong>DISCOVER → DEVELOP → TEST → REFINE</strong>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <div className="grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => { setOpenSections(['pitch']); document.getElementById('pitch')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="p-4 rounded-lg border hover:border-red-500 hover:bg-red-500/5 transition-colors text-left"
        >
          <Target className="h-5 w-5 text-red-500 mb-2" />
          <p className="font-medium text-sm">AIDEN.pitch</p>
          <p className="text-xs text-muted-foreground">Campaign Development</p>
        </button>
        <button
          onClick={() => { setOpenSections(['test']); document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="p-4 rounded-lg border hover:border-purple-500 hover:bg-purple-500/5 transition-colors text-left"
        >
          <Beaker className="h-5 w-5 text-purple-500 mb-2" />
          <p className="font-medium text-sm">AIDEN.test</p>
          <p className="text-xs text-muted-foreground">Synthetic Research</p>
        </button>
        <button
          onClick={() => { setOpenSections(['chat']); document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-500/5 transition-colors text-left"
        >
          <MessageSquare className="h-5 w-5 text-blue-500 mb-2" />
          <p className="font-medium text-sm">AIDEN.chat</p>
          <p className="text-xs text-muted-foreground">334-Phantom AI</p>
        </button>
      </div>

      {/* AIDEN.pitch Section */}
      <Collapsible id="pitch" open={openSections.includes('pitch')} onOpenChange={() => toggleSection('pitch')}>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-500" />
                  AIDEN.pitch - Campaign Development Platform
                </CardTitle>
                <ChevronDown className={`h-5 w-5 transition-transform ${openSections.includes('pitch') ? 'rotate-180' : ''}`} />
              </div>
              <CardDescription>
                7-step campaign creation from brief to pitch deck
              </CardDescription>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-6 pt-0">
              {/* Step 1: Brief */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Step 1: The Brief</h3>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-sm">Uploading Your Brief</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-sm">Option A: Drag & Drop</p>
                      <p className="text-xs text-muted-foreground">Drag PDF or DOCX onto the upload zone</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-sm">Option B: Browse</p>
                      <p className="text-xs text-muted-foreground">Click upload zone and select file</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-sm">Option C: Paste Text</p>
                      <p className="text-xs text-muted-foreground">Click &quot;Paste Text&quot; tab and paste content</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-sm">AI Brief Parsing (10-30 seconds)</p>
                  <p className="text-xs text-muted-foreground">
                    AI extracts: Campaign Name, Objectives, Target Audience, Tone of Voice, Key Messages, Budget, Timeline.
                    Click the pencil icon to edit any field.
                  </p>
                </div>
              </div>

              {/* Step 2: Strategy */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Step 2: Strategy</h3>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-sm">Insight Card Types</p>
                  <div className="grid gap-2 sm:grid-cols-4">
                    <div className="p-2 rounded border border-blue-500/30 bg-blue-500/5">
                      <Badge variant="outline" className="text-blue-500 text-xs">Consumer</Badge>
                    </div>
                    <div className="p-2 rounded border border-green-500/30 bg-green-500/5">
                      <Badge variant="outline" className="text-green-500 text-xs">Market</Badge>
                    </div>
                    <div className="p-2 rounded border border-purple-500/30 bg-purple-500/5">
                      <Badge variant="outline" className="text-purple-500 text-xs">Cultural</Badge>
                    </div>
                    <div className="p-2 rounded border border-orange-500/30 bg-orange-500/5">
                      <Badge variant="outline" className="text-orange-500 text-xs">Brand</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Back Up with Stats:</strong> Find real statistics supporting your insight with citations.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Problem-Solution Framework:</strong> 1) The Problem → 2) Select Key Insight → 3) Tension/Opportunity → 4) The Solution
                </p>
              </div>

              {/* Step 3: Territories */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Grid3X3 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Step 3: Territories</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Territories are distinct creative positioning angles. AIDEN generates 3-5 territories with:
                  Insight, Angle, Why It Works, and Confidence Score.
                </p>
                <div className="p-3 rounded-lg bg-amber-500/5 border-amber-500/30 border">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    <p className="font-medium text-sm">The Wall</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    A creative holding space for your best ideas. Click &quot;Add to The Wall&quot; on any territory card.
                  </p>
                </div>
              </div>

              {/* Step 4: Big Idea */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Step 4: Big Idea (Three-Variant System)</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="p-3 rounded-lg border">
                    <Badge className="mb-2 bg-blue-500">STRAIGHT</Badge>
                    <p className="text-xs font-medium">Balanced & Professional</p>
                    <p className="text-xs text-muted-foreground">Client presentations, safe bets</p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <Badge className="mb-2 bg-orange-500">PUNCHY</Badge>
                    <p className="text-xs font-medium">Bold & Attention-grabbing</p>
                    <p className="text-xs text-muted-foreground">Stand-out campaigns</p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <Badge className="mb-2 bg-red-500">BRAVE</Badge>
                    <p className="text-xs font-medium">Unconventional & Risky</p>
                    <p className="text-xs text-muted-foreground">Innovation, disruption</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Each includes: Tagline, Manifesto, Visual Metaphor, Rationale, Mechanism, Amplification
                </p>
              </div>

              {/* Step 5: Copy Suite */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Copy className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Step 5: Copy Suite</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm mb-1">CORE</p>
                    <p className="text-xs text-muted-foreground">Headlines (20), Long-form variants</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm mb-1">DIGITAL</p>
                    <p className="text-xs text-muted-foreground">Social, Email, Press Release, OOH</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm mb-1">BROADCAST</p>
                    <p className="text-xs text-muted-foreground">TV (15s/30s/60s), YouTube, Radio</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/5 border-blue-500/30 border">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4 text-blue-500" />
                    <p className="text-xs"><strong>Generation Time: 3-5 minutes.</strong> Don&apos;t refresh the page!</p>
                  </div>
                </div>
              </div>

              {/* Steps 6-7 */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Steps 6-7: Overview & Pitch</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Step 6: Overview</p>
                    <p className="text-xs text-muted-foreground">Campaign coherence check, AI summary, Export (JSON/PDF)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Step 7: Pitch</p>
                    <p className="text-xs text-muted-foreground">AI pitch deck narrative, Download PowerPoint (.pptx)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* AIDEN.test Section */}
      <Collapsible id="test" open={openSections.includes('test')} onOpenChange={() => toggleSection('test')}>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-purple-500" />
                  AIDEN.test - Synthetic Qualitative Research
                </CardTitle>
                <ChevronDown className={`h-5 w-5 transition-transform ${openSections.includes('test') ? 'rotate-180' : ''}`} />
              </div>
              <CardDescription>
                Pressure-test concepts with 12 AI persona archetypes
              </CardDescription>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-6 pt-0">
              {/* Test Creation */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">5-Step Test Wizard</h3>
                </div>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs shrink-0">1</span>
                    <span><strong>Basics:</strong> Test name and description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs shrink-0">2</span>
                    <span><strong>Stimulus:</strong> Choose type (Concept/Claim/Ad Copy/Tagline/Headlines)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs shrink-0">3</span>
                    <span><strong>Panel:</strong> Select from 12 persona archetypes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs shrink-0">4</span>
                    <span><strong>Calibration:</strong> Set skepticism level (0-100)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs shrink-0">5</span>
                    <span><strong>Review:</strong> Confirm and create test</span>
                  </li>
                </ol>
              </div>

              {/* Persona Panel */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Persona Categories & Skepticism</h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-4">
                  <Badge className="bg-blue-500 justify-center">Value</Badge>
                  <Badge className="bg-amber-500 justify-center">Traditional</Badge>
                  <Badge className="bg-emerald-500 justify-center">Health</Badge>
                  <Badge className="bg-purple-500 justify-center">Convenience</Badge>
                  <Badge className="bg-pink-500 justify-center">Premium</Badge>
                  <Badge className="bg-green-500 justify-center">Sustainability</Badge>
                  <Badge className="bg-cyan-500 justify-center">Innovation</Badge>
                </div>
                <div className="flex gap-4 text-xs">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500"></span> Low (0-25)</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-yellow-500"></span> Medium (26-50)</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-500"></span> High (51-75)</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500"></span> Extreme (76-100)</span>
                </div>
              </div>

              {/* Test Results */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Understanding Results</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Pressure Score</p>
                    <p className="text-xs text-muted-foreground">Overall concept resilience (0-100)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Gut Attraction</p>
                    <p className="text-xs text-muted-foreground">Immediate appeal (0-100)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">Credibility</p>
                    <p className="text-xs text-muted-foreground">Trust/believability (0-100)</p>
                  </div>
                </div>
                <div className="flex gap-4 text-xs">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500"></span> 70+ Strong</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-yellow-500"></span> 50-69 Moderate</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-500"></span> 30-49 Weak</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500"></span> &lt;30 Critical</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Results Tabs:</strong> Overview, Transcript, Heatmap, Claims, Moderation Impact, Say/Do Gap
                </p>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* AIDEN.chat Section */}
      <Collapsible id="chat" open={openSections.includes('chat')} onOpenChange={() => toggleSection('chat')}>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  AIDEN.chat - 334-Phantom AI Strategy Platform
                </CardTitle>
                <ChevronDown className={`h-5 w-5 transition-transform ${openSections.includes('chat') ? 'rotate-180' : ''}`} />
              </div>
              <CardDescription>
                Strategic conversation with personality-driven AI memory
              </CardDescription>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-6 pt-0">
              {/* Interface */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">5-Panel Interface</h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-5 text-xs">
                  <div className="p-2 rounded bg-muted/50 text-center">
                    <p className="font-medium">Header</p>
                    <p className="text-muted-foreground">Navigation</p>
                  </div>
                  <div className="p-2 rounded bg-muted/50 text-center">
                    <p className="font-medium">Left Sidebar</p>
                    <p className="text-muted-foreground">Workspaces</p>
                  </div>
                  <div className="p-2 rounded bg-muted/50 text-center">
                    <p className="font-medium">3D Brain</p>
                    <p className="text-muted-foreground">Phantoms</p>
                  </div>
                  <div className="p-2 rounded bg-muted/50 text-center">
                    <p className="font-medium">Chat</p>
                    <p className="text-muted-foreground">Conversation</p>
                  </div>
                  <div className="p-2 rounded bg-muted/50 text-center">
                    <p className="font-medium">Boards</p>
                    <p className="text-muted-foreground">Strategic</p>
                  </div>
                </div>
              </div>

              {/* 3D Brain */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">The 3D Brain Visualization</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  334 glowing spheres representing curated memories from creative/strategic thinking.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs">Fired (active)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                    <span className="text-xs">Active (recent)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-300"></div>
                    <span className="text-xs">Cold (unused)</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Trigger System:</strong> Word Triggers, Intent Triggers, Emotional Contexts, Conversation Contexts
                </p>
              </div>

              {/* Strategic Boards */}
              <div className="space-y-4 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Strategic Boards</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="p-3 rounded-lg border">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                      <p className="font-medium text-sm">INSIGHTS</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Audience, Tension, Opportunity, Positioning</p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="h-4 w-4 text-orange-500" />
                      <p className="font-medium text-sm">IDEAS</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Campaign, Activation, Content, Wild</p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4 text-blue-500" />
                      <p className="font-medium text-sm">COPY</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Headline, Tagline, Body, Manifesto</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Hover AIDEN messages → Click pin icon → Select board → Add title → Pin (max 2000 chars)
                </p>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Complete Workflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-primary" />
            The Complete AIDEN Workflow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            <Badge variant="outline" className="text-blue-500 border-blue-500">DISCOVER</Badge>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline" className="text-red-500 border-red-500">DEVELOP</Badge>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline" className="text-purple-500 border-purple-500">TEST</Badge>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline" className="text-orange-500 border-orange-500">REFINE</Badge>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>AIDEN.chat</span>
            <ArrowRight className="h-3 w-3" />
            <span>AIDEN.pitch</span>
            <ArrowRight className="h-3 w-3" />
            <span>AIDEN.test</span>
            <ArrowRight className="h-3 w-3" />
            <span>Iterate</span>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Troubleshooting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Brief Parsing Incomplete</p>
              <p className="text-xs text-muted-foreground">Add clear section headers: &quot;Objectives:&quot;, &quot;Target Audience:&quot;</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Copy Generation Timeout</p>
              <p className="text-xs text-muted-foreground">Normal - takes 3-5 minutes. Don&apos;t refresh.</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Persona Responses Unrealistic</p>
              <p className="text-xs text-muted-foreground">Adjust skepticism: Low=Friendly, Extreme=Stress test</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Phantoms Not Activating</p>
              <p className="text-xs text-muted-foreground">Use specific keywords for triggers.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Want alternative presentation tools?</h3>
              <p className="text-sm text-muted-foreground">
                Use Gamma for quick AI-powered decks.
              </p>
            </div>
            <Link
              href="/guides/gamma"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Gamma Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
