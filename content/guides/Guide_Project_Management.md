# Research & Insights with AI Tools
## Project Management Department Guide

---

## How These Tools Help Project Managers

**Claude** helps you draft project documentation faster, identify risks you might miss, create structured timelines, and communicate project status clearly. It turns rough inputs into polished project artefacts.

**NotebookLM** helps you stay across the growing pile of briefs, scopes, and meeting notes. Upload project documents and use it as a searchable project memory — particularly useful on complex, multi-workstream projects.

---

## Claude: Key Features for Project Management

### Projects — Per Client or Major Project

Set up a Project with the scope of work, project brief, timelines, and any process documentation. Write instructions that keep Claude focused on project management outputs.

**Example custom instructions:**

> You are a project management assistant at an advertising agency. When creating project documentation, be specific about dates, owners, and deliverables — avoid vague language. Always identify dependencies between tasks. When flagging risks, include severity, likelihood, and a mitigation recommendation. Use clear, professional language suitable for both internal teams and client-facing communications.

### Scope and Timeline Development

> Here's the brief for [project]: [paste or reference uploaded doc]. Build a detailed project timeline with phases, key milestones, deliverables, dependencies, and estimated durations. Assume a team of [describe resources]. Flag any phases that are likely to create bottlenecks.

> We have [X weeks] to deliver [project]. Work backwards from the launch date and build a reverse timeline. Include review rounds, client approval gates, production time, and a realistic buffer. Tell me if the timeline is too tight and where.

> Here's our current project plan: [paste]. What risks am I not seeing? What dependencies could cause delays? Where should I build in more contingency?

### Risk Identification

> Based on this project scope and timeline, identify the top five risks. For each, rate the likelihood (high/medium/low), potential impact, early warning signs, and a specific mitigation action.

> We're running a project with [describe constraints — tight timeline, new client, multiple stakeholders, external dependencies]. What are the most common points of failure in projects like this? What should I be watching for?

### Status Reports and Updates

> Here are my rough notes on where the project stands: [paste]. Turn this into a structured status report with: overall RAG status, progress by workstream, upcoming milestones, risks and issues, and key decisions needed. Keep it to one page.

> Draft a project update email for [client/stakeholder]. We're [on track / slightly behind / ahead] on [project]. The key things they need to know are [list them]. The tone should be [confident / cautiously optimistic / transparent about the delay].

### Meeting Facilitation

> I'm running a [kick-off / WIP / retrospective / scope review] meeting for [project] tomorrow. Draft an agenda with timing, key discussion points, and the decisions we need to make. Keep it to [30/60] minutes.

> Here are my messy meeting notes from today: [paste]. Turn them into: a clean summary (3–4 sentences), action items with owners and deadlines, decisions made, and open questions that still need resolving.

### Process Documentation

> Write a step-by-step process document for [specific workflow — e.g. the creative review and approval process, the campaign launch checklist, the QA process]. Include: each step, who's responsible, expected timeframe, inputs and outputs, and what happens if something goes wrong.

---

## NotebookLM: Key Features for Project Management

### Project Document Library

Upload scopes, briefs, meeting notes, and change requests. NotebookLM becomes your searchable project history.

> What was agreed about [specific deliverable] in the original scope? Has anything changed since then?

> Pull out every deadline and milestone mentioned across all the project documents. Are there any conflicts?

> When was [specific decision] made and what was the rationale? Which meeting or document records this?

### Cross-Project Pattern Recognition

Upload post-mortems and retrospective notes from multiple projects. Use NotebookLM to identify recurring issues.

> Looking across all the project retrospectives, what are the most commonly cited causes of delay? What process improvements keep being recommended?

### Audio Overviews for Project Onboarding

When someone joins a project mid-flight, generate an Audio Overview from the key project documents. Faster than a 30-minute verbal handover.

---

## Demo Examples for Project Management

1. **Risk identification:** Describe a project → ask Claude to identify the top five risks with mitigations
2. **Meeting notes to actions:** Paste rough notes → get a structured summary with action items and owners
3. **Scope search:** Show NotebookLM with project docs → ask "what was agreed about [deliverable]?"
4. **Timeline building:** Give Claude a brief → get a reverse-engineered timeline with dependencies

---

## When to Use Which Tool

| Task | Best tool |
|---|---|
| Building project timelines and plans | Claude |
| Identifying project risks | Claude |
| Writing status reports | Claude |
| Meeting agendas and note clean-up | Claude |
| Process documentation | Claude |
| Searching project history and scopes | NotebookLM |
| Onboarding someone to a project mid-flight | NotebookLM (Audio Overview) |
| Finding what was agreed and when | NotebookLM |
| Learning from past project retrospectives | NotebookLM |
