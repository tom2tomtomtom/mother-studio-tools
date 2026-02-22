import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, ExternalLink, Zap, Shield, Sparkles, Home, ChevronRight } from 'lucide-react';

const plugins = [
  {
    slug: 'crisis-comms',
    name: 'Crisis Communications',
    emoji: '🛡️',
    description: 'Generates crisis response plans, stakeholder updates, and media holding statements using the REACT model. Use when responding to breaking news, managing stakeholder communications, or drafting press statements.',
    commands: ['/crisis-response', '/stakeholder-update', '/media-statement'],
    useCases: ['Breaking news response', 'Stakeholder communication', 'Media statements'],
    color: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50',
  },
  {
    slug: 'media-relations',
    name: 'Media Relations',
    emoji: '📣',
    description: 'Drafts AP-style press releases, journalist pitch emails, and media coverage analysis reports. Use when announcing products, pitching journalists, or analyzing earned media performance.',
    commands: ['/press-release', '/media-pitch', '/coverage-analysis'],
    useCases: ['Product announcements', 'Journalist outreach', 'Coverage reporting'],
    color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50',
  },
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    emoji: '🎯',
    description: 'Builds brand positioning statements, competitive analysis maps, and messaging frameworks. Use when developing brand strategy, analyzing competitors, or creating messaging hierarchies.',
    commands: ['/positioning', '/competitor-analysis', '/messaging-framework'],
    useCases: ['Brand positioning', 'Competitive analysis', 'Messaging development'],
    color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900/50',
  },
  {
    slug: 'social-content',
    name: 'Social & Content',
    emoji: '📱',
    description: 'Creates platform-optimized social posts, editorial content calendars, and blog outlines with SEO structure. Use when planning social content, building editorial calendars, or outlining blog posts.',
    commands: ['/social-posts', '/content-calendar', '/blog-outline'],
    useCases: ['Social media content', 'Editorial planning', 'Blog writing'],
    color: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50',
  },
  {
    slug: 'client-experience',
    name: 'Client Experience',
    emoji: '👥',
    description: 'Generates structured meeting notes, client proposals, and account health scorecards using RAID logs. Use when running client meetings, building proposals, or assessing account health.',
    commands: ['/meeting-notes', '/proposal-builder', '/client-health'],
    useCases: ['Meeting summaries', 'Proposal development', 'Account health'],
    color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50',
  },
  {
    slug: 'campaign-management',
    name: 'Campaign Management',
    emoji: '📊',
    description: 'Creates WBS project plans, status reports, and change impact assessments with RACI matrices. Use when planning campaigns, reporting status, or managing scope changes.',
    commands: ['/project-plan', '/status-report', '/change-impact'],
    useCases: ['Project planning', 'Status reporting', 'Scope management'],
    color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-900/50',
  },
  {
    slug: 'production',
    name: 'Production',
    emoji: '🎬',
    description: 'Generates production briefs, shot lists, and delivery spec sheets with budget frameworks. Use when planning video or photo shoots, organizing shot sequences, or specifying deliverables.',
    commands: ['/production-brief', '/shot-list', '/spec-sheet'],
    useCases: ['Production specs', 'Shot planning', 'Vendor briefs'],
    color: 'bg-slate-50 dark:bg-slate-950/30 border-slate-200 dark:border-slate-900/50',
  },
  {
    slug: 'design-system',
    name: 'Design System',
    emoji: '🎨',
    description: 'Conducts design reviews against WCAG 2.1, generates style guide documentation, and audits accessibility. Use when reviewing designs, documenting design systems, or checking accessibility compliance.',
    commands: ['/design-review', '/style-guide', '/accessibility-audit'],
    useCases: ['Design critique', 'Style guides', 'Accessibility'],
    color: 'bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-900/50',
  },
  {
    slug: 'digital-experience',
    name: 'Digital Experience',
    emoji: '📈',
    description: 'Creates SEO content briefs, email campaign plans, and performance reports with CRO recommendations. Use when optimizing for search, planning email campaigns, or analyzing digital performance.',
    commands: ['/seo-brief', '/email-campaign', '/performance-report'],
    useCases: ['SEO strategy', 'Email marketing', 'Analytics'],
    color: 'bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-900/50',
  },
  {
    slug: 'new-business-dev',
    name: 'New Business Development',
    emoji: '🚀',
    description: 'Builds pitch deck narratives, drafts RFP responses with differentiators, and creates prospect research briefs. Use when preparing pitches, responding to RFPs, or researching prospects.',
    commands: ['/pitch-deck', '/rfp-response', '/prospect-brief'],
    useCases: ['Pitch preparation', 'RFP responses', 'Prospect research'],
    color: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50',
  },
  {
    slug: 'studio-ops',
    name: 'Studio Operations',
    emoji: '⚙️',
    description: 'Documents SOPs, creates 30-60-90 onboarding plans, and builds budget trackers with capacity planning. Use when standardizing processes, onboarding team members, or tracking budgets.',
    commands: ['/process-doc', '/onboarding-plan', '/budget-tracker'],
    useCases: ['Process SOPs', 'Onboarding', 'Budget management'],
    color: 'bg-stone-50 dark:bg-stone-950/30 border-stone-200 dark:border-stone-900/50',
  },
  {
    slug: 'competitor-research',
    name: 'Competitor Research',
    emoji: '🔍',
    description: 'Researches competitor websites, apps, and business strategies then delivers prioritized improvement recommendations. Use when analyzing competitors, benchmarking your product, or planning feature roadmaps.',
    commands: ['/landscape-map', '/feature-gaps', '/improvement-plan'],
    useCases: ['Competitive analysis', 'Product benchmarking', 'Roadmap planning'],
    color: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50',
  },
  {
    slug: 'finance-ops',
    name: 'Finance Operations',
    emoji: '💰',
    description: 'Processes invoices, categorizes expenses, generates budget reports, and maintains audit trails. Use when handling financial documents, reconciling payments, or building budget forecasts.',
    commands: ['/invoice-processor', '/budget-report', '/expense-audit'],
    useCases: ['Invoice processing', 'Budget reporting', 'Expense auditing'],
    color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900/50',
  },
];

export default function PluginsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Cowork Plugins</span>
      </nav>

      {/* Hero */}
      <div className="text-center space-y-4 py-4">
        <Badge variant="secondary" className="text-sm">
          <Sparkles className="w-3 h-3 mr-1" />
          For Claude Cowork
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Cowork Plugins
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Turn Claude into a specialist for your agency department. Install in 60 seconds, start working immediately.
        </p>
      </div>

      {/* How it works */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            How Plugins Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">1</div>
              <h3 className="font-semibold">Install the Plugin</h3>
              <p className="text-sm text-muted-foreground">Download the folder and add it to Claude Cowork. Takes 60 seconds.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">2</div>
              <h3 className="font-semibold">Use Slash Commands</h3>
              <p className="text-sm text-muted-foreground">Type <code className="bg-muted px-1 rounded">/command</code> to get specific help instantly.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">3</div>
              <h3 className="font-semibold">Claude Knows Your Domain</h3>
              <p className="text-sm text-muted-foreground">Skills load automatically, so Claude understands creative advertising best practices.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plugins Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Plugins</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {plugins.map(plugin => (
            <Card key={plugin.slug} className={`border-2 ${plugin.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">{plugin.emoji}</span>
                  <span>{plugin.name}</span>
                </CardTitle>
                <CardDescription className="text-base">
                  {plugin.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Commands */}
                <div>
                  <div className="text-sm font-medium mb-2">Commands</div>
                  <div className="flex flex-wrap gap-2">
                    {plugin.commands.map(cmd => (
                      <Badge key={cmd} variant="secondary" className="font-mono">
                        {cmd}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Use Cases */}
                <div>
                  <div className="text-sm font-medium mb-2">Perfect for</div>
                  <div className="flex flex-wrap gap-2">
                    {plugin.useCases.map(use => (
                      <Badge key={use} variant="outline">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Install Buttons */}
                <div className="pt-2 flex gap-2">
                  <Button className="flex-1" variant="default" asChild>
                    <a href={`/plugins/${plugin.slug}.zip`} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download ZIP
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://github.com/tom2tomtomtom/agency_tools_v2/tree/main/plugins/${plugin.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Installation Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Installation Guide
          </CardTitle>
          <CardDescription>
            Step-by-step instructions to get plugins working in Claude Cowork
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Option 1: From Cowork Marketplace</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Open Claude Cowork</li>
              <li>Go to <strong>Settings → Plugins</strong></li>
              <li>Search for the plugin name</li>
              <li>Click <strong>Install</strong></li>
            </ol>
          </div>

          <div className="border-t pt-4 space-y-3">
            <h3 className="font-semibold">Option 2: Manual Installation</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Download the plugin folder from GitHub</li>
              <li>In Cowork, go to <strong>Settings → Plugins → Install from folder</strong></li>
              <li>Select the downloaded folder</li>
              <li>The plugin is now active</li>
            </ol>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Optional: Connect Your Tools</h3>
            <p className="text-sm text-muted-foreground">
              Each plugin includes optional connectors for Slack, Notion, Google Drive, and more. 
              These let Claude access your tools directly but aren't required - plugins work great without them.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center py-8 space-y-4">
        <h2 className="text-2xl font-bold">Prefer Standalone Prompts?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We also have 90+ copy-paste prompts you can use without installing anything.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Browse All Prompts
          </Link>
        </Button>
      </div>
    </div>
  );
}
