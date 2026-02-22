import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, ExternalLink, Zap, Shield, Sparkles, Home, ChevronRight } from 'lucide-react';

// Earth-tone border colors for plugin categories
const PLUGIN_BORDERS: Record<string, string> = {
  'crisis-comms': 'border-l-[#6B2B1A]',
  'media-relations': 'border-l-[#7A5A18]',
  'brand-strategy': 'border-l-[#6B2B1A]',
  'social-content': 'border-l-[#7A7A2A]',
  'client-experience': 'border-l-[#7A5A18]',
  'campaign-management': 'border-l-[#1A4A5C]',
  'production': 'border-l-[#1A4A5C]',
  'design-system': 'border-l-[#1A4A5C]',
  'digital-experience': 'border-l-[#7A7A2A]',
  'new-business-dev': 'border-l-[#3D1A20]',
  'studio-ops': 'border-l-[#7A5A18]',
  'competitor-research': 'border-l-[#6B2B1A]',
  'finance-ops': 'border-l-[#3D1A20]',
};

const plugins = [
  {
    slug: 'crisis-comms',
    name: 'Crisis Communications',
    description: 'Generates crisis response plans, stakeholder updates, and media holding statements using the REACT model. Use when responding to breaking news, managing stakeholder communications, or drafting press statements.',
    commands: ['/crisis-response', '/stakeholder-update', '/media-statement'],
    useCases: ['Breaking news response', 'Stakeholder communication', 'Media statements'],
  },
  {
    slug: 'media-relations',
    name: 'Media Relations',
    description: 'Drafts AP-style press releases, journalist pitch emails, and media coverage analysis reports. Use when announcing products, pitching journalists, or analyzing earned media performance.',
    commands: ['/press-release', '/media-pitch', '/coverage-analysis'],
    useCases: ['Product announcements', 'Journalist outreach', 'Coverage reporting'],
  },
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    description: 'Builds brand positioning statements, competitive analysis maps, and messaging frameworks. Use when developing brand strategy, analyzing competitors, or creating messaging hierarchies.',
    commands: ['/positioning', '/competitor-analysis', '/messaging-framework'],
    useCases: ['Brand positioning', 'Competitive analysis', 'Messaging development'],
  },
  {
    slug: 'social-content',
    name: 'Social & Content',
    description: 'Creates platform-optimized social posts, editorial content calendars, and blog outlines with SEO structure. Use when planning social content, building editorial calendars, or outlining blog posts.',
    commands: ['/social-posts', '/content-calendar', '/blog-outline'],
    useCases: ['Social media content', 'Editorial planning', 'Blog writing'],
  },
  {
    slug: 'client-experience',
    name: 'Client Experience',
    description: 'Generates structured meeting notes, client proposals, and account health scorecards using RAID logs. Use when running client meetings, building proposals, or assessing account health.',
    commands: ['/meeting-notes', '/proposal-builder', '/client-health'],
    useCases: ['Meeting summaries', 'Proposal development', 'Account health'],
  },
  {
    slug: 'campaign-management',
    name: 'Campaign Management',
    description: 'Creates WBS project plans, status reports, and change impact assessments with RACI matrices. Use when planning campaigns, reporting status, or managing scope changes.',
    commands: ['/project-plan', '/status-report', '/change-impact'],
    useCases: ['Project planning', 'Status reporting', 'Scope management'],
  },
  {
    slug: 'production',
    name: 'Production',
    description: 'Generates production briefs, shot lists, and delivery spec sheets with budget frameworks. Use when planning video or photo shoots, organizing shot sequences, or specifying deliverables.',
    commands: ['/production-brief', '/shot-list', '/spec-sheet'],
    useCases: ['Production specs', 'Shot planning', 'Vendor briefs'],
  },
  {
    slug: 'design-system',
    name: 'Design System',
    description: 'Conducts design reviews against WCAG 2.1, generates style guide documentation, and audits accessibility. Use when reviewing designs, documenting design systems, or checking accessibility compliance.',
    commands: ['/design-review', '/style-guide', '/accessibility-audit'],
    useCases: ['Design critique', 'Style guides', 'Accessibility'],
  },
  {
    slug: 'digital-experience',
    name: 'Digital Experience',
    description: 'Creates SEO content briefs, email campaign plans, and performance reports with CRO recommendations. Use when optimizing for search, planning email campaigns, or analyzing digital performance.',
    commands: ['/seo-brief', '/email-campaign', '/performance-report'],
    useCases: ['SEO strategy', 'Email marketing', 'Analytics'],
  },
  {
    slug: 'new-business-dev',
    name: 'New Business Development',
    description: 'Builds pitch deck narratives, drafts RFP responses with differentiators, and creates prospect research briefs. Use when preparing pitches, responding to RFPs, or researching prospects.',
    commands: ['/pitch-deck', '/rfp-response', '/prospect-brief'],
    useCases: ['Pitch preparation', 'RFP responses', 'Prospect research'],
  },
  {
    slug: 'studio-ops',
    name: 'Studio Operations',
    description: 'Documents SOPs, creates 30-60-90 onboarding plans, and builds budget trackers with capacity planning. Use when standardizing processes, onboarding team members, or tracking budgets.',
    commands: ['/process-doc', '/onboarding-plan', '/budget-tracker'],
    useCases: ['Process SOPs', 'Onboarding', 'Budget management'],
  },
  {
    slug: 'competitor-research',
    name: 'Competitor Research',
    description: 'Researches competitor websites, apps, and business strategies then delivers prioritized improvement recommendations. Use when analyzing competitors, benchmarking your product, or planning feature roadmaps.',
    commands: ['/landscape-map', '/feature-gaps', '/improvement-plan'],
    useCases: ['Competitive analysis', 'Product benchmarking', 'Roadmap planning'],
  },
  {
    slug: 'finance-ops',
    name: 'Finance Operations',
    description: 'Processes invoices, categorizes expenses, generates budget reports, and maintains audit trails. Use when handling financial documents, reconciling payments, or building budget forecasts.',
    commands: ['/invoice-processor', '/budget-report', '/expense-audit'],
    useCases: ['Invoice processing', 'Budget reporting', 'Expense auditing'],
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
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            How Plugins Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-semibold">1</div>
              <h3 className="font-semibold">Install the Plugin</h3>
              <p className="text-sm text-muted-foreground">Download the folder and add it to Claude Cowork. Takes 60 seconds.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-semibold">2</div>
              <h3 className="font-semibold">Use Slash Commands</h3>
              <p className="text-sm text-muted-foreground">Type <code className="bg-muted px-1 rounded text-xs">/ command</code> to get specific help instantly.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-semibold">3</div>
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
            <Card key={plugin.slug} className={`border-l-4 ${PLUGIN_BORDERS[plugin.slug] || ''} hover:border-foreground/20 transition-colors duration-200`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
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
              <li>Go to <strong>Settings &gt; Plugins</strong></li>
              <li>Search for the plugin name</li>
              <li>Click <strong>Install</strong></li>
            </ol>
          </div>

          <div className="border-t pt-4 space-y-3">
            <h3 className="font-semibold">Option 2: Manual Installation</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Download the plugin folder from GitHub</li>
              <li>In Cowork, go to <strong>Settings &gt; Plugins &gt; Install from folder</strong></li>
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
