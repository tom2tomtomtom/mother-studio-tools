import { teams, prompts } from '@/lib/prompts';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RecentlyUsed } from '@/components/recently-used';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Users, FileText, GraduationCap, Wand2 } from 'lucide-react';
import { SkillInfo } from '@/components/skill-info';

const UNLOCKED_SKILLS = new Set([
  'meeting-notes-actions',
  'timeline-generator',
  'competitor-research',
  'scope-of-work-writer',
  'brand-voice-enforcer',
  'media-strategy-planner',
]);

const DEPT_BG: Record<string, string> = {
  'strategy': 'bg-[#6B2B1A]',
  'creative': 'bg-[#C8102E]',
  'production': 'bg-[#1A4A5C]',
  'design': 'bg-[#003DA5]',
  'copywriting': 'bg-[#7A7A2A]',
  'digital': 'bg-[#7A5A18]',
  'account-management': 'bg-[#3D1A20]',
  'project-management': 'bg-[#C8102E]',
  'studio-operations': 'bg-[#1A4A5C]',
  'new-business': 'bg-[#003DA5]',
  'finance': 'bg-[#7A5A18]',
};

export default function HomePage() {
  const totalPrompts = prompts.length;
  const totalTeams = teams.length;

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="-mx-4 md:-mx-6 -mt-4 md:-mt-6 px-4 md:px-6 tartan-dark pt-16 pb-16 lg:pt-24 lg:pb-20 mb-12">
        <div className="max-w-6xl mx-auto stagger">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40">Mother London</p>
          <hr className="w-12 border-white/20 my-6" />
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white">
            Your tools.<br />In one place.
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-xl leading-relaxed mt-8">
            Copy them. Paste them. Get on with it.
          </p>
          <div className="flex flex-wrap items-stretch gap-3 pt-10">
            <StatCard label="Active Tools" value={6} accent="teal" />
            <StatCard label="In the Catalogue" value="50+" accent="umber" />
            <StatCard label="Departments" value={totalTeams} accent="ochre" />
          </div>
          <p className="text-sm text-white/30 mt-4 tracking-wide">More tools rolling out soon</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* ===== ACTIVE TOOLS ===== */}
        <div className="rounded-md overflow-hidden border">
          <div className="bg-[#1A4A5C] px-6 py-5">
            <h2 className="text-2xl font-bold text-white">Your Active Tools</h2>
            <p className="text-sm text-white/60 mt-1">Click any skill to copy, then paste in Claude.</p>
          </div>
          <div className="p-6 bg-card">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SkillInfo name="Contact Reports" slug="meeting-notes-actions" description="Structured meeting summaries with action items, owners, and deadlines" />
              <SkillInfo name="Dynamic Timelines" slug="timeline-generator" description="Project timelines with phases, milestones, dependencies, and buffer" />
              <SkillInfo name="Rapid Research Tool" slug="competitor-research" description="Competitor benchmarking with feature gaps and improvement recommendations" preloaded={false} />
              <SkillInfo name="Scope Writer" slug="scope-of-work-writer" description="Detailed SOWs with deliverables, timelines, and sign-off terms" />
              <SkillInfo name="Brand Guidelines Bot" slug="brand-voice-enforcer" description="Check copy against brand voice for tone, terminology, and consistency" />
              <SkillInfo name="Media Plan Translator" slug="media-strategy-planner" description="PESO media mix with channel rationale and budget split recommendations" preloaded={false} />
            </div>
            <Link href="/catalogue" className="flex items-center gap-2 mt-5 pt-4 border-t text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <span><span className="font-semibold text-foreground">44+ more skills</span> across every department</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ===== GETTING STARTED ===== */}
        <Link href="/guides/getting-started">
          <div className="rounded-md overflow-hidden bg-[#7A7A2A] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <div className="px-6 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/15">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">New to Claude? Start here</h3>
                  <p className="text-sm text-white/60">
                    Login, connect Gmail &amp; Calendar, learn the modes, and try your first prompts
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-white/60 group-hover:translate-x-2 transition-transform shrink-0" />
            </div>
          </div>
        </Link>

        {/* ===== RECENTLY USED ===== */}
        <RecentlyUsed />

        {/* ===== DEPARTMENTS ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Every department. One toolkit.</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {teams.map(team => (
              <Link key={team.slug} href={`/team/${team.slug}`}>
                <Card className={`h-full border-0 ${DEPT_BG[team.slug] || 'bg-muted'} hover:translate-x-1 hover:shadow-lg hover:brightness-110 transition-all duration-200 cursor-pointer group`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white">
                      {team.name}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between text-white/60">
                      <span>{team.solutionCount} tools</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-white/80" />
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SKILL BUILDER CTA ===== */}
      <section className="-mx-4 md:-mx-6 px-4 md:px-6 bg-[#6B2B1A] py-10 mt-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/skill-builder" className="flex items-center justify-between group">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white/15">
                <Wand2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Build Your Own Skill</h3>
                <p className="text-white/50 text-sm mt-0.5">
                  Describe any task and AI will generate an expert-level Claude Skill in seconds
                </p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-white/50 group-hover:translate-x-2 transition-transform shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ============================================
   COMPONENTS
   ============================================ */

const STAT_BG: Record<string, string> = {
  umber: 'bg-[#6B2B1A]',
  teal: 'bg-[#1A4A5C]',
  olive: 'bg-[#7A7A2A]',
  ochre: 'bg-[#7A5A18]',
};

function StatCard({ label, value, accent }: { label: string; value: string | number; accent: string }) {
  return (
    <div className={`${STAT_BG[accent] || 'bg-white/10'} px-6 py-4 rounded-md hover:scale-105 transition-transform duration-200`}>
      <div className="text-4xl sm:text-5xl font-black text-white">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">{label}</div>
    </div>
  );
}
