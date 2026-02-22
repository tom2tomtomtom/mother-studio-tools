import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SkillInfo } from '@/components/skill-info';

export const metadata: Metadata = {
  title: 'Full Catalogue | Mother London Studio Tools',
  description: '50+ AI skills across every agency department',
};

const UNLOCKED_SKILLS = new Set([
  'meeting-notes-actions',
  'timeline-generator',
  'competitor-research',
  'scope-of-work-writer',
  'brand-voice-enforcer',
  'media-strategy-planner',
]);

export default function CataloguePage() {
  return (
    <div>
      {/* ===== HEADER — Dark panel ===== */}
      <section className="-mx-4 md:-mx-6 -mt-4 md:-mt-6 px-4 md:px-6 tartan-dark pt-12 pb-12 lg:pt-16 lg:pb-14 mb-10">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-white">
            The full catalogue.
          </h1>
          <p className="text-white/50 mt-4 max-w-xl">
            50+ skills across every agency department. Contact us to unlock additional tools for your team.
          </p>
        </div>
      </section>

      {/* ===== CATALOGUE — Dark section with white card panels ===== */}
      <section className="-mx-4 md:-mx-6 px-4 md:px-6 bg-[#1A1A1A] py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <CatalogueSection color="#6B2B1A" title="Strategy & Research">
            <SkillInfo name="Brand Positioning" slug="brand-positioning" description="Run positioning workshops with messaging hierarchies" locked={!UNLOCKED_SKILLS.has('brand-positioning')} />
            <SkillInfo name="Strategy Brief Builder" slug="strategy-brief-builder" description="Build comms strategy briefs from loose inputs" locked={!UNLOCKED_SKILLS.has('strategy-brief-builder')} />
            <SkillInfo name="Competitor Analysis" slug="competitor-analysis" description="Deep-dive a specific competitor's positioning and strategy" locked={!UNLOCKED_SKILLS.has('competitor-analysis')} />
            <SkillInfo name="Competitor Research" slug="competitor-research" description="Benchmark your product and get improvement recommendations" preloaded={false} locked={!UNLOCKED_SKILLS.has('competitor-research')} />
            <SkillInfo name="Category Scanner" slug="competitor-category-scanner" description="Map competitive landscapes and identify positioning gaps" locked={!UNLOCKED_SKILLS.has('competitor-category-scanner')} />
            <SkillInfo name="Audience & Culture" slug="audience-cultural-insight" description="Research audiences with demographic and cultural analysis" locked={!UNLOCKED_SKILLS.has('audience-cultural-insight')} />
            <SkillInfo name="RFP Assessment" slug="rfp-assessment-v2" description="Evaluate RFP opportunities with strategic go/no-go scoring" locked={!UNLOCKED_SKILLS.has('rfp-assessment-v2')} />
            <SkillInfo name="Brand Audit" slug="brand-audit" description="Assess brand health across identity, messaging, and positioning" locked={!UNLOCKED_SKILLS.has('brand-audit')} />
            <SkillInfo name="Market Research Designer" slug="market-research-designer" description="Design surveys, focus groups, and research methodologies" preloaded={false} locked={!UNLOCKED_SKILLS.has('market-research-designer')} />
          </CatalogueSection>

          <CatalogueSection color="#6B2B1A" title="Strategy & Planning">
            <SkillInfo name="Campaign Planner" slug="campaign-planner" description="Build integrated campaign plans with channels, phasing, and KPIs" locked={!UNLOCKED_SKILLS.has('campaign-planner')} />
            <SkillInfo name="Media Strategy Planner" slug="media-strategy-planner" description="Plan PESO media mix with channel rationale and budget splits" preloaded={false} locked={!UNLOCKED_SKILLS.has('media-strategy-planner')} />
            <SkillInfo name="Creative Brief Writer" slug="creative-brief-writer" description="Write creative briefs with single-minded proposition and mandatories" locked={!UNLOCKED_SKILLS.has('creative-brief-writer')} />
          </CatalogueSection>

          <CatalogueSection color="#7A7A2A" title="Content & Copy">
            <SkillInfo name="Copywriting" slug="copywriting" description="Write on-brand copy for ads, emails, social, and web" locked={!UNLOCKED_SKILLS.has('copywriting')} />
            <SkillInfo name="Content Transformer" slug="content-transformer" description="Repurpose one piece into LinkedIn, email, social, and blog formats" locked={!UNLOCKED_SKILLS.has('content-transformer')} />
            <SkillInfo name="Social Copy Writer" slug="social-copy-writer" description="Platform-specific social posts with tone and hashtag calibration" locked={!UNLOCKED_SKILLS.has('social-copy-writer')} />
            <SkillInfo name="Content Calendar" slug="content-calendar-generator" description="Generate editorial calendars with tentpole mapping" locked={!UNLOCKED_SKILLS.has('content-calendar-generator')} />
            <SkillInfo name="Brand Voice Enforcer" slug="brand-voice-enforcer" description="Check copy against brand guidelines for tone and terminology" locked={!UNLOCKED_SKILLS.has('brand-voice-enforcer')} />
            <SkillInfo name="Talking Points" slug="talking-points" description="Spokesperson key messages with bridge phrases and Q&A" locked={!UNLOCKED_SKILLS.has('talking-points')} />
            <SkillInfo name="SEO Content Writer" slug="seo-content-writer" description="Write search-optimized blog posts, landing pages, and web content" preloaded={false} locked={!UNLOCKED_SKILLS.has('seo-content-writer')} />
            <SkillInfo name="Thought Leadership" slug="thought-leadership-ghostwriter" description="Ghostwrite bylines, op-eds, and LinkedIn posts for executives" preloaded={false} locked={!UNLOCKED_SKILLS.has('thought-leadership-ghostwriter')} />
            <SkillInfo name="Influencer Brief Writer" slug="influencer-brief-writer" description="Write creator briefs with deliverables, guidelines, and usage rights" locked={!UNLOCKED_SKILLS.has('influencer-brief-writer')} />
          </CatalogueSection>

          <CatalogueSection color="#1A4A5C" title="Media & PR">
            <SkillInfo name="Media Release Writer" slug="media-release-writer" description="Draft press releases with proper structure and quote formatting" locked={!UNLOCKED_SKILLS.has('media-release-writer')} />
            <SkillInfo name="Media Pitch Crafter" slug="media-pitch-crafter" description="Craft journalist pitches with strong angles and subject lines" locked={!UNLOCKED_SKILLS.has('media-pitch-crafter')} />
            <SkillInfo name="Media List Intelligence" slug="media-list-intelligence" description="Research journalists and prioritize contacts for stories" locked={!UNLOCKED_SKILLS.has('media-list-intelligence')} />
            <SkillInfo name="Coverage Report" slug="coverage-report-builder" description="Build media coverage reports with sentiment and share of voice" locked={!UNLOCKED_SKILLS.has('coverage-report-builder')} />
            <SkillInfo name="Crisis Comms Drafter" slug="crisis-comms-drafter" description="Draft holding statements and stakeholder messaging for incidents" locked={!UNLOCKED_SKILLS.has('crisis-comms-drafter')} />
          </CatalogueSection>

          <CatalogueSection color="#1A4A5C" title="Creative & Production">
            <SkillInfo name="Creative Review" slug="creative-review" description="Score creative work against briefs with structured feedback" locked={!UNLOCKED_SKILLS.has('creative-review')} />
            <SkillInfo name="Design Critique" slug="design-critique" description="Structured design feedback on hierarchy, typography, and accessibility" locked={!UNLOCKED_SKILLS.has('design-critique')} />
            <SkillInfo name="Production Specs" slug="production-specs" description="Generate spec sheets with formats, dimensions, and delivery requirements" locked={!UNLOCKED_SKILLS.has('production-specs')} />
            <SkillInfo name="Event & Launch Planner" slug="event-launch-planner" description="Create run sheets, logistics checklists, and launch timelines" locked={!UNLOCKED_SKILLS.has('event-launch-planner')} />
            <SkillInfo name="Video Script Writer" slug="video-script-writer" description="Write video scripts with shot descriptions, timing, and VO direction" preloaded={false} locked={!UNLOCKED_SKILLS.has('video-script-writer')} />
            <SkillInfo name="Concept Presenter" slug="concept-presenter" description="Structure concept presentations with insight, idea, and executions" locked={!UNLOCKED_SKILLS.has('concept-presenter')} />
          </CatalogueSection>

          <CatalogueSection color="#7A5A18" title="Client & Account">
            <SkillInfo name="Client Comms Writer" slug="client-comms-writer" description="Draft status reports, WIP updates, and recap emails" locked={!UNLOCKED_SKILLS.has('client-comms-writer')} />
            <SkillInfo name="Client Management" slug="client-management" description="Assess relationship health with scorecards and growth strategies" locked={!UNLOCKED_SKILLS.has('client-management')} />
            <SkillInfo name="Stakeholder Update" slug="stakeholder-update" description="RAG-rated status reports with milestones and risk flags" locked={!UNLOCKED_SKILLS.has('stakeholder-update')} />
            <SkillInfo name="Email Drafter" slug="email-drafter" description="Professional emails for pitching, follow-ups, and introductions" locked={!UNLOCKED_SKILLS.has('email-drafter')} />
            <SkillInfo name="Executive Comms" slug="executive-comms" description="Leadership emails, board updates, and company announcements" locked={!UNLOCKED_SKILLS.has('executive-comms')} />
            <SkillInfo name="Case Study Writer" slug="case-study-writer" description="Write challenge-approach-results case studies with data guidance" locked={!UNLOCKED_SKILLS.has('case-study-writer')} />
            <SkillInfo name="Client Onboarding Kit" slug="client-onboarding-kit" description="Generate onboarding packs with ways of working and setup checklists" locked={!UNLOCKED_SKILLS.has('client-onboarding-kit')} />
          </CatalogueSection>

          <CatalogueSection color="#7A5A18" title="Project Delivery & Operations">
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
          </CatalogueSection>

          <CatalogueSection color="#7A7A2A" title="Analytics & Reporting">
            <SkillInfo name="Campaign Report Builder" slug="campaign-report-builder" description="Build end-of-campaign reports with results vs KPIs and learnings" locked={!UNLOCKED_SKILLS.has('campaign-report-builder')} />
            <SkillInfo name="Digital Analytics" slug="digital-analytics" description="Performance reports with KPI dashboards and recommendations" locked={!UNLOCKED_SKILLS.has('digital-analytics')} />
            <SkillInfo name="Social Analytics Reporter" slug="social-analytics-reporter" description="Analyze social performance with engagement, sentiment, and benchmarks" preloaded={false} locked={!UNLOCKED_SKILLS.has('social-analytics-reporter')} />
            <SkillInfo name="Budget Tracker" slug="budget-tracker" description="Track project budgets with burn rate, forecasting, and variance analysis" locked={!UNLOCKED_SKILLS.has('budget-tracker')} />
          </CatalogueSection>

          <CatalogueSection color="#3D1A20" title="New Business">
            <SkillInfo name="Proposal Writer" slug="new-business-proposal-writer" description="Write proposals, pitch decks, and capability statements" locked={!UNLOCKED_SKILLS.has('new-business-proposal-writer')} />
            <SkillInfo name="Pitch/RFP Reviewer" slug="pitch-rfp-reviewer" description="Evaluate submissions for gaps and improvement opportunities" locked={!UNLOCKED_SKILLS.has('pitch-rfp-reviewer')} />
            <SkillInfo name="Presentation Builder" slug="presentation-builder" description="Structure presentations for credentials, QBRs, and recommendations" preloaded={false} locked={!UNLOCKED_SKILLS.has('presentation-builder')} />
          </CatalogueSection>

          <CatalogueSection color="#7A5A18" title="Internal & Culture">
            <SkillInfo name="Internal Comms Writer" slug="internal-comms-writer" description="Write all-hands decks, policy changes, and team announcements" locked={!UNLOCKED_SKILLS.has('internal-comms-writer')} />
            <SkillInfo name="Training Workshop Builder" slug="training-workshop-builder" description="Design workshops with learning objectives, exercises, and facilitation guides" locked={!UNLOCKED_SKILLS.has('training-workshop-builder')} />
            <SkillInfo name="Team Retro Facilitator" slug="team-retro-facilitator" description="Run structured retrospectives with learnings and improvement tracking" preloaded={false} locked={!UNLOCKED_SKILLS.has('team-retro-facilitator')} />
          </CatalogueSection>

          <CatalogueSection color="#3D1A20" title="Specialized">
            <SkillInfo name="Accessibility Reviewer" slug="accessibility-reviewer" description="Audit content for WCAG compliance, inclusive language, and contrast" locked={!UNLOCKED_SKILLS.has('accessibility-reviewer')} />
            <SkillInfo name="Legal Compliance Checker" slug="legal-compliance-checker" description="Review ad copy for disclaimers, claims, and regulatory compliance" locked={!UNLOCKED_SKILLS.has('legal-compliance-checker')} />
            <SkillInfo name="Localization Adapter" slug="localization-adapter" description="Adapt campaigns for different markets with cultural and regulatory guidance" locked={!UNLOCKED_SKILLS.has('localization-adapter')} />
          </CatalogueSection>
        </div>
      </section>
    </div>
  );
}

function CatalogueSection({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="tartan-overlay rounded-t-md px-5 py-3 mb-0" style={{ backgroundColor: color }}>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">{title}</h3>
      </div>
      <div className="bg-card rounded-b-md p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  );
}
