# Mother London AI Tools
## Sales & Valuation Document

---

## Executive Summary

**Mother London AI Tools** is a production-ready, internally-deployed web platform that gives every department in a creative advertising agency instant access to AI-powered workflows. It packages **78 expert prompts**, **33 downloadable Claude Skills**, **12 Cowork Plugins**, and **18 in-depth guides** into a polished Next.js application with search, filtering, dark mode, an AI chat assistant, and one-click copy/download — all purpose-built for the daily work of creative agencies.

This is not a generic "prompt library." It is a complete **Agency AI Operating System** — structured by department, designed by practitioners, and ready to deploy on day one.

---

## What's Inside

### By the Numbers

| Asset | Count | Description |
|-------|-------|-------------|
| **AI Prompts** | 78 | Expert-crafted, tested prompts across 10 departments |
| **Claude Skills** | 33 | Downloadable .zip workflows installable in Claude.ai |
| **Cowork Plugins** | 12 | Desktop automation plugins with slash commands |
| **Tool Guides** | 18 | Deep-dive how-to guides (Claude Code, n8n, Runway, ElevenLabs, etc.) |
| **Departments Covered** | 10 | Creative, Strategy, Account Mgmt, Production, Design, Digital, Copywriting, New Business, Project Mgmt, Studio Ops |
| **Custom Code** | ~28,000 lines | TypeScript/React — production-quality, not prototype |

### Department Coverage (All 10 Agency Functions)

| Department | Prompts | What It Covers |
|-----------|---------|---------------|
| **Creative** | 9 | Campaign concepts, brief sharpening, art direction, storyboarding, creative presentations |
| **Strategy** | 8 | Brand positioning, cultural insights, audience research, competitive analysis |
| **Account Management** | 8 | Client comms, meeting notes, relationship health, stakeholder updates |
| **Production** | 7 | Production specs, event planning, QA testing, delivery workflows |
| **Design** | 8 | Design critiques, accessibility audits, design system documentation |
| **Digital** | 7 | Analytics reports, SEO, UX audits, performance dashboards |
| **Copywriting** | 7 | Brand voice, content calendars, social copy, content transformation |
| **New Business** | 6 | Proposals, RFP assessment, pitch reviews, capability statements |
| **Project Management** | 7 | Scoping, status reports, risk management, retrospectives |
| **Studio Operations** | 9 | Process documentation, vendor management, resource planning |

### 33 Downloadable Claude Skills (Grouped)

**Strategy & Research** (7): Brand Positioning, Strategy Brief Builder, Competitor Analysis, Competitor Research, Category Scanner, Audience & Culture, RFP Assessment

**Content & Copy** (6): Copywriting, Content Transformer, Social Copy Writer, Content Calendar, Brand Voice Enforcer, Talking Points

**Media & PR** (5): Media Release Writer, Media Pitch Crafter, Media List Intelligence, Coverage Report, Crisis Comms Drafter

**Creative & Production** (4): Creative Review, Design Critique, Production Specs, Event & Launch Planner

**Account & Operations** (9): Client Comms Writer, Client Management, Meeting Notes, Stakeholder Update, Email Drafter, Executive Comms, Process Docs, Digital Analytics, QA Testing

**New Business** (2): Proposal Writer, Pitch/RFP Reviewer

### 12 Cowork Plugins (Desktop Automation)

Each plugin includes slash commands, skills, and connectors:

| Plugin | Commands | Use Cases |
|--------|----------|-----------|
| Crisis Communications | `/crisis-response`, `/stakeholder-update`, `/media-statement` | Breaking news, stakeholder comms |
| Media Relations | `/press-release`, `/media-pitch`, `/coverage-analysis` | PR announcements, journalist outreach |
| Brand Strategy | `/positioning`, `/competitor-analysis`, `/messaging-framework` | Brand positioning, competitive mapping |
| Social & Content | `/social-posts`, `/content-calendar`, `/blog-outline` | Social media, editorial planning |
| Client Experience | `/meeting-notes`, `/proposal-builder`, `/client-health` | Meeting summaries, account health |
| Campaign Management | `/project-plan`, `/status-report`, `/change-impact` | Project planning, scope management |
| Competitor Research | `/landscape-scan`, `/brand-audit`, `/trend-watch` | Market intelligence, trend analysis |
| Design System | `/style-guide`, `/component-spec`, `/accessibility-audit` | Design documentation, a11y |
| Digital Experience | `/ux-audit`, `/analytics-dashboard`, `/seo-brief` | UX reviews, performance reporting |
| New Business Dev | `/pitch-deck`, `/rfp-response`, `/capability-statement` | Pitches, proposals |
| Production | `/production-specs`, `/vendor-brief`, `/delivery-checklist` | Specs, QA, vendor management |
| Studio Ops | `/process-doc`, `/resource-plan`, `/onboarding-guide` | SOPs, onboarding, resource planning |

### 18 In-Depth Guides

Covering the full AI tool ecosystem an agency needs:

- **Claude Projects** — Setting up persistent client knowledge bases
- **Claude Code** — Developer workflow automation
- **Cowork Agent** — Desktop automation (file management, spreadsheets, documents)
- **Cowork Plugins** — Building and installing custom plugins
- **Custom Skills** — Creating reusable Claude workflows
- **Chrome Extension** — Web capture and research
- **MCP Setup** — Model Context Protocol configuration
- **Deep Research** — Extended research workflows
- **Artifacts** — Interactive content creation
- **Connectors & Integrations** — Third-party connections
- **n8n Automation** — No-code workflow automation
- **Perplexity AI** — Research with live sources
- **NotebookLM** — Audio learning and podcast generation
- **Runway** — AI video production
- **ElevenLabs** — Voice synthesis and audio
- **Gamma** — AI presentation creation
- **AIDEN Studio** — Custom creative intelligence
- **Power Hacks** — Advanced tips and shortcuts

---

## Tech Stack & Quality

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1 (App Router, standalone output) |
| Language | TypeScript (strict mode) |
| UI | React 19, shadcn/ui, Radix primitives, Tailwind CSS 4 |
| Animations | Framer Motion |
| Search | Fuse.js fuzzy search + command palette (cmdk) |
| Theming | next-themes (light/dark/system) |
| AI Chat | Built-in AI assistant chat widget |
| Accessibility | Skip-to-content, ARIA labels, keyboard navigation |
| Deployment | Standalone Node.js (Railway/Docker-ready) |

**Code Quality Indicators:**
- Production `standalone` output configuration
- Proper TypeScript interfaces and type safety
- Component-based architecture with shadcn/ui design system
- Responsive design (mobile sidebar, desktop layout)
- SEO metadata configured
- Toast notifications for user feedback
- Lazy-loaded widgets for performance
- Clean separation of concerns (lib/prompts.ts data layer, components, pages)

---

## Value Estimation

### Method 1: Replacement Cost (What Would It Cost to Build This?)

Based on [2026 custom SaaS development rates](https://saigontechnology.com/blog/saas-development-costs/):

| Component | Hours | Rate | Cost |
|-----------|-------|------|------|
| **Prompt Engineering** (78 prompts, expert-level, tested) | 390 hrs @ 5hrs each | $150/hr | **$58,500** |
| **Skill Development** (33 Claude Skills with packaging) | 165 hrs @ 5hrs each | $150/hr | **$24,750** |
| **Plugin Development** (12 plugins with commands/skills/connectors) | 180 hrs @ 15hrs each | $150/hr | **$27,000** |
| **Guide Writing** (18 comprehensive guides) | 144 hrs @ 8hrs each | $125/hr | **$18,000** |
| **Web Application** (Next.js, search, chat, theming, a11y) | 320 hrs | $150/hr | **$48,000** |
| **Design & UX** (responsive, dark mode, command palette) | 80 hrs | $125/hr | **$10,000** |
| **QA & Testing** | 60 hrs | $100/hr | **$6,000** |
| **Project Management & Architecture** | 80 hrs | $175/hr | **$14,000** |
| **Total Replacement Cost** | **~1,419 hrs** | | **$206,250** |

> A senior US full-stack developer charges [$90-150/hr](https://arc.dev/freelance-developer-rates/full-stack). Expert prompt engineers with agency domain knowledge charge $125-200/hr. The prompt library alone — 6,000+ lines of battle-tested, department-specific content — represents months of specialized work.

### Method 2: Market Comparable (What Do Similar Tools Cost?)

**Direct competitors in the agency AI tools space:**

| Tool | What It Does | Pricing | Annual Cost (10 seats) |
|------|-------------|---------|----------------------|
| [Foreplay](https://www.foreplay.co/) | Ad library + creative workflow | $49-99/mo/user | $5,880 - $11,880 |
| [MagicBrief](https://magicbrief.com/pricing) | Creative intelligence + briefs | $29-249/mo | $3,480 - $29,880 |
| [AdCreative.ai](https://www.quickads.ai/blog/adcreativeai-pricing-breakdown-is-it-worth-the-investment) | AI ad creative generation | $25-149/mo | $3,000 - $17,880 |
| [Madgicx](https://madgicx.com) | AI ad optimization | $99+/mo | $11,880+ |
| [Productive](https://productive.io/) | Agency management platform | $12-20/user/mo | $14,400 - $24,000 |
| [Kantata](https://www.kantata.com/) | Professional services automation | Custom | $20,000 - $50,000+ |

**Mother London AI Tools** replaces or augments functionality from **multiple** of these tools. While each competitor covers one narrow slice (ads, project management, content), this platform covers the **entire agency** — every department, every workflow, every tool.

**Comparable annual value: $25,000 - $60,000/year** for a mid-size agency.

### Method 3: ROI / Time Savings (What Is It Worth in Productivity?)

Research from [ALM Corp](https://almcorp.com/blog/ai-tools-digital-agencies-2026-guide/) and [PwC](https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-predictions.html) shows:

- Agencies using AI tools see **40% reduction in content production time**
- AI-powered agencies report **3.7x average ROI**, with top performers at **10.3x**
- A PR agency reduced pitch generation from **66 hours to 1.9 minutes** — 396% ROI, saving **$11,988 per project**
- Marketing teams using AI report **10-20% improvement in sales ROI**
- Creative agencies save **10+ hours/week** on reporting alone

**Conservative time savings estimate for a 30-person agency:**

| Department | Weekly Savings per Person | People | Annual Value (@$100/hr) |
|-----------|-------------------------|--------|------------------------|
| Creative (concepts, briefs) | 3 hrs | 6 | $93,600 |
| Strategy (research, analysis) | 4 hrs | 3 | $62,400 |
| Account Mgmt (comms, reports) | 3 hrs | 5 | $78,000 |
| Copywriting (content, social) | 5 hrs | 4 | $104,000 |
| New Business (proposals, pitches) | 4 hrs | 2 | $41,600 |
| Production (specs, QA) | 2 hrs | 4 | $41,600 |
| Project Mgmt (status, scoping) | 3 hrs | 3 | $46,800 |
| Design (critiques, specs) | 2 hrs | 3 | $31,200 |
| **Total Annual Productivity Value** | | **30** | **$499,200** |

Even at a **conservative 25% realization rate** (accounting for adoption curves and learning time), that's **$124,800/year** in recovered productivity.

---

## Valuation Summary

| Valuation Method | Estimated Value |
|-----------------|----------------|
| **Replacement Cost** (build from scratch) | **$206,250** (one-time) |
| **Market Comparable** (annual SaaS equivalent) | **$25,000 - $60,000/year** |
| **Productivity ROI** (30-person agency, 25% realization) | **$124,800/year** |
| **3-Year Total Value** (SaaS savings + productivity) | **$449,400 - $554,400** |

### Recommended Pricing Tiers

| Tier | Seats | Price | Annual Revenue |
|------|-------|-------|---------------|
| **Starter** (small agency) | Up to 15 | $499/mo | $5,988 |
| **Growth** (mid-size agency) | Up to 50 | $999/mo | $11,988 |
| **Enterprise** (large agency/network) | Unlimited | $2,499/mo | $29,988 |
| **White-Label License** | Custom | $15,000-50,000 one-time + $500/mo maintenance | Varies |

---

## Why This Is Different

### 1. Built By Agency People, Not Tech People
Every prompt reads like it was written by someone who's sat in briefing meetings, argued about brand positioning, and shipped campaigns. The prompts reference specific frameworks (REACT model for crisis, RAID logs for account management, WBS for project planning) that only practitioners know.

### 2. Complete Department Coverage
Competitors focus on one function — ads, content, or project management. This covers **all 10 departments** in a creative agency, from the ECD's creative review to the studio manager's resource planning.

### 3. Multi-Tool Strategy
Rather than locking agencies into one AI platform, this tool teaches teams to use the **right tool for each job**: Claude Projects for persistent brand knowledge, Claude Skills for repeatable workflows, Cowork for desktop automation, Perplexity for live research, n8n for automation, Runway for video, ElevenLabs for voice.

### 4. Self-Hosted & Private
Unlike SaaS competitors, this deploys on your own infrastructure. Client data never touches a third-party platform's servers. For agencies handling sensitive brand work and NDAs, this is a major differentiator.

### 5. Training Built In
The 18 guides aren't afterthoughts — they're comprehensive training materials covering everything from basic Claude setup to advanced MCP configuration and n8n automation. This is an onboarding accelerator.

---

## Market Context

The [global AI agents market](https://digitalagencynetwork.com/ai-agency-pricing/) reached **$7.63 billion in 2025** and is projected to hit **$182.97 billion by 2033** (49.6% CAGR). The [advertising agency management software market](https://worklenz.com/blog/top-10-agency-management-tools-for-2026/) was valued at **$5.1 billion in 2023** and is projected to reach **$18.3 billion by 2033** (13.6% CAGR).

Agencies that adopt AI tools are seeing [20-30% higher campaign ROI](https://almcorp.com/blog/ai-tools-digital-agencies-2026-guide/) and [40% faster content production](https://almcorp.com/blog/make-money-ai-digital-agencies-2026/). The agencies that invest in structured AI tooling now will compound that advantage over competitors still using ChatGPT with no system.

The cost of **not** having structured AI tooling: lost pitches, slower delivery, higher headcount costs, and falling behind competitors who are already 40% faster.

---

## Ideal Buyer Profile

- **Creative/advertising agencies** (15-200 people) looking to systematize AI adoption
- **PR and communications firms** needing media relations, crisis comms, and content workflows
- **Digital agencies** wanting to accelerate strategy, reporting, and client management
- **Agency networks/holding companies** seeking a white-label AI platform for member agencies
- **Consultancies** building AI transformation offerings for agency clients

---

## Competitive Advantages Over Build-From-Scratch

Building this in-house would cost **$206,250+** and take **6-9 months** with a senior team. Based on [McKinsey research](https://appinventiv.com/blog/build-vs-buy-software/), large IT projects run **45% over budget** and deliver **56% less value** than predicted. Custom development also requires ongoing maintenance at [20-30% of build cost annually](https://www.nocodefinder.com/blog-posts/ai-agent-pricing) ($41,000-62,000/year).

This platform is **built, tested, and ready to deploy today.**

---

*Document prepared February 2026. Market data sourced from PwC, McKinsey, Gartner, Digital Agency Network, ALM Corp, and industry pricing research.*
