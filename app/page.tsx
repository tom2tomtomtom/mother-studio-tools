import { teams, prompts } from '@/lib/prompts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RecentlyUsed } from '@/components/recently-used';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Users, FileText, Monitor, Image, GraduationCap, Wand2, Lock, CheckCircle2 } from 'lucide-react';
import { SkillInfo } from '@/components/skill-info';
import { teamIcons } from '@/lib/constants';

const DOWNLOADABLE_SKILLS = new Set([
  'media-strategy-planner',
  'seo-content-writer',
  'thought-leadership-ghostwriter',
  'video-script-writer',
  'resource-planner',
  'project-kickoff-builder',
  'vendor-brief-writer',
  'social-analytics-reporter',
  'presentation-builder',
  'team-retro-facilitator',
  'competitor-research',
  'market-research-designer',
]);

const UNLOCKED_SKILLS = new Set([
  'meeting-notes-actions',       // Contact Reports / Note Taking
  'timeline-generator',          // Dynamic Timelines
  'competitor-research',         // Rapid Research Tool
  'scope-of-work-writer',       // Scope Writer
  'brand-voice-enforcer',       // Brand Guidelines Bot
  'media-strategy-planner',     // Media Plan Translator
]);

export default function HomePage() {
  const totalPrompts = prompts.length;
  const totalTeams = teams.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero */}
      <div className="text-center space-y-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Mother
          <span className="text-primary"> AI Tools</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {totalPrompts} prompts, 50 preloaded skills, and 13 plugins across {totalTeams} agency departments
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <StatCard icon={<FileText className="h-5 w-5" />} label="Prompts" value={totalPrompts} />
          <StatCard icon={<Sparkles className="h-5 w-5" />} label="Skills" value={50} />
          <StatCard icon={<Zap className="h-5 w-5" />} label="Plugins" value={13} />
          <StatCard icon={<Users className="h-5 w-5" />} label="Departments" value={totalTeams} />
        </div>
      </div>

      {/* Your Active Tools — prominent hero section */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Your Active Tools
          </CardTitle>
          <CardDescription className="text-base">
            6 custom-built AI skills ready to use — click any skill to copy, then paste in Claude
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SkillInfo name="Contact Reports" slug="meeting-notes-actions" description="Structured meeting summaries with action items, owners, and deadlines" />
            <SkillInfo name="Dynamic Timelines" slug="timeline-generator" description="Project timelines with phases, milestones, dependencies, and buffer" />
            <SkillInfo name="Rapid Research Tool" slug="competitor-research" description="Competitor benchmarking with feature gaps and improvement recommendations" preloaded={false} />
            <SkillInfo name="Scope Writer" slug="scope-of-work-writer" description="Detailed SOWs with deliverables, timelines, and sign-off terms" />
            <SkillInfo name="Brand Guidelines Bot" slug="brand-voice-enforcer" description="Check copy against brand voice for tone, terminology, and consistency" />
            <SkillInfo name="Media Plan Translator" slug="media-strategy-planner" description="PESO media mix with channel rationale and budget split recommendations" preloaded={false} />
          </div>
        </CardContent>
      </Card>

      {/* What's Coming — teaser count */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border/50 bg-muted/30">
        <Lock className="h-5 w-5 text-muted-foreground shrink-0" />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">44+ more skills available</span> — browse the full catalogue below to see what&apos;s coming next
        </p>
      </div>

      {/* Getting Started Banner */}
      <Link href="/guides/getting-started">
        <Card className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-background hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group border-emerald-500/20">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">New to Claude? Start here</h3>
                  <p className="text-sm text-muted-foreground">
                    Login, connect Gmail &amp; Calendar, learn the modes, and try your first prompts — 15 min guide
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Recently Copied - client component, renders only if has items */}
      <RecentlyUsed />

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Quick Start
          </CardTitle>
          <CardDescription>
            Get started in 4 simple steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard number={1} title="Choose a solution" description="Find a prompt that addresses your creative challenge" />
            <StepCard number={2} title="Pick your AI tool" description="Claude Projects, Claude Skills, or Cowork" />
            <StepCard number={3} title="Upload knowledge" description="Add briefs, brand guidelines, and references" />
            <StepCard number={4} title="Paste & go" description="Copy the prompt and start creating" />
          </ol>
        </CardContent>
      </Card>

      {/* Teams Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Browse by Department</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map(team => (
            <Link key={team.slug} href={`/team/${team.slug}`}>
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{teamIcons[team.slug] || '📁'}</span>
                    <span className="group-hover:text-primary transition-colors">
                      {team.name}
                    </span>
                  </CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>{team.solutionCount} tools</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Tool Recommendations */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">AI Tool Guide</h2>
          <p className="text-muted-foreground">Four tools for different tasks. Choose based on what you need to accomplish.</p>
        </div>

        <div className="grid gap-6">
          {/* Claude Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Claude Projects
              </CardTitle>
              <CardDescription className="text-base">Upload once, Claude remembers everything across conversations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">What it does for you:</strong> Upload your client briefs, brand guidelines, and references once — Claude remembers everything across conversations so you never re-explain context. Every conversation starts with Claude already knowing the brand inside-out.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">How to use it:</strong> Create a Project for each major client or campaign. Upload their brand book, tone of voice guide, past creative work, and any briefs. Ask it to write copy, develop concepts, or review work — all in the client's voice, every time.
              </p>
              <div className="pt-2 border-t">
                <p className="text-xs font-medium text-foreground mb-2">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Campaign strategy</Badge>
                  <Badge variant="secondary">Long-running pitches</Badge>
                  <Badge variant="secondary">Brand-consistent copy</Badge>
                  <Badge variant="secondary">Creative development</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Claude Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Claude Skills
              </CardTitle>
              <CardDescription className="text-base">Install a skill once and Claude follows the same process every time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">What it does for you:</strong> Install a skill once and Claude knows how to write press releases, review creative briefs, or build pitch decks — the same way, every time. Think of skills as "apps" that teach Claude your exact process.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">How to use it:</strong> 50 skills are preloaded in your account. Just tell Claude which skill to use: &quot;Use the creative-brief-writer skill to write a brief for this campaign.&quot; Claude will follow the skill&apos;s process step by step.
              </p>
              <div className="pt-2 border-t">
                <p className="text-xs font-medium text-foreground mb-2">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Repeatable formats</Badge>
                  <Badge variant="secondary">QA & review processes</Badge>
                  <Badge variant="secondary">Document templates</Badge>
                  <Badge variant="secondary">Team standardization</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Claude Cowork */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Monitor className="h-6 w-6 text-primary" />
                Claude Cowork
              </CardTitle>
              <CardDescription className="text-base">Tell Claude what you need done and watch it work on your actual computer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">What it does for you:</strong> Tell Claude what you need done and watch it work — it opens apps, moves files, fills spreadsheets, and creates documents on your actual computer. It handles the repetitive tasks so you can focus on the creative ones.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">How to use it:</strong> Download Claude Desktop (Pro/Max required). Open Cowork mode and describe what you need: "Organize these 50 campaign assets into folders by client" or "Turn these meeting notes into a status report in Google Docs." Add the Chrome extension for web tasks, or Gemini MCP for AI image generation.
              </p>
              <div className="pt-2 border-t">
                <p className="text-xs font-medium text-foreground mb-2">Best for:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">File organization</Badge>
                  <Badge variant="secondary">Spreadsheet work</Badge>
                  <Badge variant="secondary">Document creation</Badge>
                  <Badge variant="secondary">Repetitive tasks</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Full Skills Catalogue */}
      <Card className="bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-muted-foreground" />
            Full Skills Catalogue
          </CardTitle>
          <CardDescription>
            50+ skills across every agency department — contact us to unlock additional tools for your team
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Strategy & Research */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Strategy & Research</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Brand Positioning" slug="brand-positioning" description="Run positioning workshops with messaging hierarchies" locked={!UNLOCKED_SKILLS.has('brand-positioning')} />
              <SkillInfo name="Strategy Brief Builder" slug="strategy-brief-builder" description="Build comms strategy briefs from loose inputs" locked={!UNLOCKED_SKILLS.has('strategy-brief-builder')} />
              <SkillInfo name="Competitor Analysis" slug="competitor-analysis" description="Deep-dive a specific competitor's positioning and strategy" locked={!UNLOCKED_SKILLS.has('competitor-analysis')} />
              <SkillInfo name="Competitor Research" slug="competitor-research" description="Benchmark your product and get improvement recommendations" preloaded={false} locked={!UNLOCKED_SKILLS.has('competitor-research')} />
              <SkillInfo name="Category Scanner" slug="competitor-category-scanner" description="Map competitive landscapes and identify positioning gaps" locked={!UNLOCKED_SKILLS.has('competitor-category-scanner')} />
              <SkillInfo name="Audience & Culture" slug="audience-cultural-insight" description="Research audiences with demographic and cultural analysis" locked={!UNLOCKED_SKILLS.has('audience-cultural-insight')} />
              <SkillInfo name="RFP Assessment" slug="rfp-assessment-v2" description="Evaluate RFP opportunities with strategic go/no-go scoring" locked={!UNLOCKED_SKILLS.has('rfp-assessment-v2')} />
              <SkillInfo name="Brand Audit" slug="brand-audit" description="Assess brand health across identity, messaging, and positioning" locked={!UNLOCKED_SKILLS.has('brand-audit')} />
              <SkillInfo name="Market Research Designer" slug="market-research-designer" description="Design surveys, focus groups, and research methodologies" preloaded={false} locked={!UNLOCKED_SKILLS.has('market-research-designer')} />
            </div>
          </div>

          {/* Strategy & Planning */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Strategy & Planning</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Campaign Planner" slug="campaign-planner" description="Build integrated campaign plans with channels, phasing, and KPIs" locked={!UNLOCKED_SKILLS.has('campaign-planner')} />
              <SkillInfo name="Media Strategy Planner" slug="media-strategy-planner" description="Plan PESO media mix with channel rationale and budget splits" preloaded={false} locked={!UNLOCKED_SKILLS.has('media-strategy-planner')} />
              <SkillInfo name="Creative Brief Writer" slug="creative-brief-writer" description="Write creative briefs with single-minded proposition and mandatories" locked={!UNLOCKED_SKILLS.has('creative-brief-writer')} />
            </div>
          </div>

          {/* Content & Copy */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Content & Copy</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Copywriting" slug="copywriting" description="Write on-brand copy for ads, emails, social, and web" locked={!UNLOCKED_SKILLS.has('copywriting')} />
              <SkillInfo name="Content Transformer" slug="content-transformer" description="Repurpose one piece into LinkedIn, email, social, and blog formats" locked={!UNLOCKED_SKILLS.has('content-transformer')} />
              <SkillInfo name="Social Copy Writer" slug="social-copy-writer" description="Platform-specific social posts with tone and hashtag calibration" locked={!UNLOCKED_SKILLS.has('social-copy-writer')} />
              <SkillInfo name="Content Calendar" slug="content-calendar-generator" description="Generate editorial calendars with tentpole mapping" locked={!UNLOCKED_SKILLS.has('content-calendar-generator')} />
              <SkillInfo name="Brand Voice Enforcer" slug="brand-voice-enforcer" description="Check copy against brand guidelines for tone and terminology" locked={!UNLOCKED_SKILLS.has('brand-voice-enforcer')} />
              <SkillInfo name="Talking Points" slug="talking-points" description="Spokesperson key messages with bridge phrases and Q&A" locked={!UNLOCKED_SKILLS.has('talking-points')} />
              <SkillInfo name="SEO Content Writer" slug="seo-content-writer" description="Write search-optimized blog posts, landing pages, and web content" preloaded={false} locked={!UNLOCKED_SKILLS.has('seo-content-writer')} />
              <SkillInfo name="Thought Leadership" slug="thought-leadership-ghostwriter" description="Ghostwrite bylines, op-eds, and LinkedIn posts for executives" preloaded={false} locked={!UNLOCKED_SKILLS.has('thought-leadership-ghostwriter')} />
              <SkillInfo name="Influencer Brief Writer" slug="influencer-brief-writer" description="Write creator briefs with deliverables, guidelines, and usage rights" locked={!UNLOCKED_SKILLS.has('influencer-brief-writer')} />
            </div>
          </div>

          {/* Media & PR */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Media & PR</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Media Release Writer" slug="media-release-writer" description="Draft press releases with proper structure and quote formatting" locked={!UNLOCKED_SKILLS.has('media-release-writer')} />
              <SkillInfo name="Media Pitch Crafter" slug="media-pitch-crafter" description="Craft journalist pitches with strong angles and subject lines" locked={!UNLOCKED_SKILLS.has('media-pitch-crafter')} />
              <SkillInfo name="Media List Intelligence" slug="media-list-intelligence" description="Research journalists and prioritize contacts for stories" locked={!UNLOCKED_SKILLS.has('media-list-intelligence')} />
              <SkillInfo name="Coverage Report" slug="coverage-report-builder" description="Build media coverage reports with sentiment and share of voice" locked={!UNLOCKED_SKILLS.has('coverage-report-builder')} />
              <SkillInfo name="Crisis Comms Drafter" slug="crisis-comms-drafter" description="Draft holding statements and stakeholder messaging for incidents" locked={!UNLOCKED_SKILLS.has('crisis-comms-drafter')} />
            </div>
          </div>

          {/* Creative & Production */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Creative & Production</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Creative Review" slug="creative-review" description="Score creative work against briefs with structured feedback" locked={!UNLOCKED_SKILLS.has('creative-review')} />
              <SkillInfo name="Design Critique" slug="design-critique" description="Structured design feedback on hierarchy, typography, and accessibility" locked={!UNLOCKED_SKILLS.has('design-critique')} />
              <SkillInfo name="Production Specs" slug="production-specs" description="Generate spec sheets with formats, dimensions, and delivery requirements" locked={!UNLOCKED_SKILLS.has('production-specs')} />
              <SkillInfo name="Event & Launch Planner" slug="event-launch-planner" description="Create run sheets, logistics checklists, and launch timelines" locked={!UNLOCKED_SKILLS.has('event-launch-planner')} />
              <SkillInfo name="Video Script Writer" slug="video-script-writer" description="Write video scripts with shot descriptions, timing, and VO direction" preloaded={false} locked={!UNLOCKED_SKILLS.has('video-script-writer')} />
              <SkillInfo name="Concept Presenter" slug="concept-presenter" description="Structure concept presentations with insight, idea, and executions" locked={!UNLOCKED_SKILLS.has('concept-presenter')} />
            </div>
          </div>

          {/* Client & Account */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Client & Account</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Client Comms Writer" slug="client-comms-writer" description="Draft status reports, WIP updates, and recap emails" locked={!UNLOCKED_SKILLS.has('client-comms-writer')} />
              <SkillInfo name="Client Management" slug="client-management" description="Assess relationship health with scorecards and growth strategies" locked={!UNLOCKED_SKILLS.has('client-management')} />
              <SkillInfo name="Stakeholder Update" slug="stakeholder-update" description="RAG-rated status reports with milestones and risk flags" locked={!UNLOCKED_SKILLS.has('stakeholder-update')} />
              <SkillInfo name="Email Drafter" slug="email-drafter" description="Professional emails for pitching, follow-ups, and introductions" locked={!UNLOCKED_SKILLS.has('email-drafter')} />
              <SkillInfo name="Executive Comms" slug="executive-comms" description="Leadership emails, board updates, and company announcements" locked={!UNLOCKED_SKILLS.has('executive-comms')} />
              <SkillInfo name="Case Study Writer" slug="case-study-writer" description="Write challenge-approach-results case studies with data guidance" locked={!UNLOCKED_SKILLS.has('case-study-writer')} />
              <SkillInfo name="Client Onboarding Kit" slug="client-onboarding-kit" description="Generate onboarding packs with ways of working and setup checklists" locked={!UNLOCKED_SKILLS.has('client-onboarding-kit')} />
            </div>
          </div>

          {/* Project Delivery & Operations */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Project Delivery & Operations</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Scope of Work Writer" slug="scope-of-work-writer" description="Write detailed SOWs with deliverables, timelines, and sign-off terms" locked={!UNLOCKED_SKILLS.has('scope-of-work-writer')} />
              <SkillInfo name="Timeline Generator" slug="timeline-generator" description="Build project timelines with phases, milestones, and dependencies" locked={!UNLOCKED_SKILLS.has('timeline-generator')} />
              <SkillInfo name="Estimate Builder" slug="estimate-builder" description="Build cost estimates with line items, rates, and payment terms" locked={!UNLOCKED_SKILLS.has('estimate-builder')} />
              <SkillInfo name="Resource Planner" slug="resource-planner" description="Plan team resourcing with role assignments and utilization forecasting" preloaded={false} locked={!UNLOCKED_SKILLS.has('resource-planner')} />
              <SkillInfo name="Project Kickoff Builder" slug="project-kickoff-builder" description="Create kickoff docs with team roles, comms plan, and risk register" preloaded={false} locked={!UNLOCKED_SKILLS.has('project-kickoff-builder')} />
              <SkillInfo name="Change Order Writer" slug="change-order-writer" description="Write scope amendments with timeline and budget impact analysis" locked={!UNLOCKED_SKILLS.has('change-order-writer')} />
              <SkillInfo name="Vendor Brief Writer" slug="vendor-brief-writer" description="Write vendor briefs with specs, deliverables, and budget parameters" preloaded={false} locked={!UNLOCKED_SKILLS.has('vendor-brief-writer')} />
              <SkillInfo name="Meeting Notes" slug="meeting-notes-actions" description="Structured summaries with action items, owners, and deadlines" locked={!UNLOCKED_SKILLS.has('meeting-notes-actions')} />
              <SkillInfo name="Process Docs" slug="process-docs" description="Standardized SOPs and workflow guides with versioning" locked={!UNLOCKED_SKILLS.has('process-docs')} />
              <SkillInfo name="QA Testing" slug="qa-testing" description="QA reports with severity ratings and acceptance criteria" locked={!UNLOCKED_SKILLS.has('qa-testing')} />
            </div>
          </div>

          {/* Analytics & Reporting */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Analytics & Reporting</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Campaign Report Builder" slug="campaign-report-builder" description="Build end-of-campaign reports with results vs KPIs and learnings" locked={!UNLOCKED_SKILLS.has('campaign-report-builder')} />
              <SkillInfo name="Digital Analytics" slug="digital-analytics" description="Performance reports with KPI dashboards and recommendations" locked={!UNLOCKED_SKILLS.has('digital-analytics')} />
              <SkillInfo name="Social Analytics Reporter" slug="social-analytics-reporter" description="Analyze social performance with engagement, sentiment, and benchmarks" preloaded={false} locked={!UNLOCKED_SKILLS.has('social-analytics-reporter')} />
              <SkillInfo name="Budget Tracker" slug="budget-tracker" description="Track project budgets with burn rate, forecasting, and variance analysis" locked={!UNLOCKED_SKILLS.has('budget-tracker')} />
            </div>
          </div>

          {/* New Business */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">New Business</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Proposal Writer" slug="new-business-proposal-writer" description="Write proposals, pitch decks, and capability statements" locked={!UNLOCKED_SKILLS.has('new-business-proposal-writer')} />
              <SkillInfo name="Pitch/RFP Reviewer" slug="pitch-rfp-reviewer" description="Evaluate submissions for gaps and improvement opportunities" locked={!UNLOCKED_SKILLS.has('pitch-rfp-reviewer')} />
              <SkillInfo name="Presentation Builder" slug="presentation-builder" description="Structure presentations for credentials, QBRs, and recommendations" preloaded={false} locked={!UNLOCKED_SKILLS.has('presentation-builder')} />
            </div>
          </div>

          {/* Internal & Culture */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Internal & Culture</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Internal Comms Writer" slug="internal-comms-writer" description="Write all-hands decks, policy changes, and team announcements" locked={!UNLOCKED_SKILLS.has('internal-comms-writer')} />
              <SkillInfo name="Training Workshop Builder" slug="training-workshop-builder" description="Design workshops with learning objectives, exercises, and facilitation guides" locked={!UNLOCKED_SKILLS.has('training-workshop-builder')} />
              <SkillInfo name="Team Retro Facilitator" slug="team-retro-facilitator" description="Run structured retrospectives with learnings and improvement tracking" preloaded={false} locked={!UNLOCKED_SKILLS.has('team-retro-facilitator')} />
            </div>
          </div>

          {/* Specialized */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Specialized</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Accessibility Reviewer" slug="accessibility-reviewer" description="Audit content for WCAG compliance, inclusive language, and contrast" locked={!UNLOCKED_SKILLS.has('accessibility-reviewer')} />
              <SkillInfo name="Legal Compliance Checker" slug="legal-compliance-checker" description="Review ad copy for disclaimers, claims, and regulatory compliance" locked={!UNLOCKED_SKILLS.has('legal-compliance-checker')} />
              <SkillInfo name="Localization Adapter" slug="localization-adapter" description="Adapt campaigns for different markets with cultural and regulatory guidance" locked={!UNLOCKED_SKILLS.has('localization-adapter')} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skill Builder CTA */}
      <Link href="/skill-builder">
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group border-primary/20">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wand2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Build Your Own Skill</h3>
                  <p className="text-sm text-muted-foreground">
                    Describe any task and AI will generate an expert-level Claude Skill in seconds &mdash; download or share with the community
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Cowork Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-primary" />
            Cowork + Chrome + Gemini Setup
          </CardTitle>
          <CardDescription>
            Unlock desktop automation, web capture, and image generation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">1. Claude Desktop</h4>
              <p className="text-sm text-muted-foreground">
                Download Claude Desktop for macOS. Cowork is available on Pro/Max plans.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://claude.com/download" target="_blank" rel="noopener noreferrer">
                  Download Claude Desktop
                </a>
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">2. Chrome Extension</h4>
              <p className="text-sm text-muted-foreground">
                Install Claude in Chrome to let Cowork browse websites and capture references.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://claude.com/chrome" target="_blank" rel="noopener noreferrer">
                  Get Chrome Extension
                </a>
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">3. Gemini Image MCP</h4>
              <p className="text-sm text-muted-foreground">
                Add Gemini MCP for AI concept visuals, mood boards, and storyboards.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/guinacio/claude-image-gen" target="_blank" rel="noopener noreferrer">
                  Setup Gemini MCP
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-3 bg-card border border-border/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="text-primary">{icon}</div>
      <div>
        <div className="font-semibold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
        {number}
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
