# Research & Insights with AI Tools
## Production Department Guide

---

## How These Tools Help Production

**Claude** helps with vendor research, creating production specs, estimating timelines, writing production briefs, and troubleshooting technical requirements. It's particularly useful for quickly pulling together spec sheets and compliance requirements across different formats and platforms.

**NotebookLM** helps you build a searchable library of production specs, vendor information, and past production learnings. Upload technical documentation and never dig through emails for that one spec sheet again.

---

## Claude: Key Features for Production

### Projects — Per Production Type or Client

Set up Projects with technical documentation, platform specs, and production templates. Write instructions that keep Claude focused on accuracy and specificity.

**Example custom instructions:**

> You are a production specialist at an advertising agency. When providing technical specifications, be precise — include exact dimensions, file formats, colour profiles, and delivery requirements. Always flag potential technical issues or compatibility problems. When creating production timelines, account for revision rounds, vendor lead times, and quality assurance.

### Production Spec Sheets

> Create a complete production spec sheet for a [describe deliverable — e.g. 30-second TVC, social media content suite, OOH campaign across three formats, digital banner suite]. Include: dimensions, file formats, colour profiles, resolution, file size limits, audio specs (if applicable), and delivery format for each output.

> What are the current ad specifications for [platform — Meta, TikTok, YouTube, LinkedIn, Spotify, programmatic display]? I need all available formats with dimensions, max file sizes, video length limits, and any platform-specific technical requirements.

> We're producing a print campaign for [describe — magazine, OOH, POS]. What are the technical requirements? Cover: bleed, trim, safe area, resolution, colour profile (CMYK/Pantone), file format, and any publisher-specific requirements I should check.

### Vendor Research

Use **Web Search** or **Research mode** to research production vendors and suppliers.

> Research production companies in [city/region] that specialise in [type of production — e.g. food photography, TVC production, post-production, animation, experiential fabrication]. I need company name, specialty, notable work, and website.

> What are the current market rates for [production service — e.g. a mid-range TVC shoot in Sydney, a social content production day, a full post-production suite] in Australia? Give me a ballpark range.

### Production Timeline Estimation

> Build a production timeline for [describe project]. Include: pre-production, production, post-production, review rounds (assume two rounds of client revisions), final delivery, and a buffer. Flag the critical path and any dependencies that could cause delays.

> We need to deliver [describe output] by [date]. Working backwards, when do we need to start each phase? Is this timeline realistic? Where are the pressure points?

### Technical Troubleshooting

> We're getting [describe technical issue — e.g. colour inconsistency between screen and print, file size too large for platform upload, audio sync issues]. What are the most likely causes and how do we fix each?

> The client wants to repurpose a [describe asset — e.g. 16:9 TVC] for [new format — e.g. 9:16 social, 1:1 digital display, OOH]. What are the production considerations? What will work with a simple reformat and what needs to be re-shot or rebuilt?

---

## NotebookLM: Key Features for Production

### Technical Spec Library

Upload platform spec sheets, printer requirements, broadcast delivery standards, and supplier guidelines. Query them instead of searching through folders.

> What are the broadcast delivery specs for [network/platform]? File format, codec, frame rate, audio levels?

> What does [print supplier] require for bleed and safe area on [specific format]?

### Vendor and Supplier Database

Upload vendor rate cards, capability summaries, and past project notes. Use NotebookLM to match vendors to requirements.

> Which of our suppliers have experience with [specific production type]? What did we pay last time?

### Production Learnings

Upload post-production reviews and project retrospectives. Identify recurring issues.

> What production issues have come up most frequently across our past projects? Are there common suppliers or formats where problems keep occurring?

---

## Demo Examples for Production

1. **Spec sheet generation:** Ask Claude to create a complete spec sheet for a social content suite across five platforms
2. **Timeline building:** Describe a production project → get a timeline with critical path and pressure points
3. **Spec lookup in NotebookLM:** Upload platform spec docs → ask about a specific format's requirements
4. **Vendor research:** Use Research mode to find production companies for a specific capability

---

## When to Use Which Tool

| Task | Best tool |
|---|---|
| Creating production spec sheets | Claude |
| Vendor and supplier research | Claude (Research / Web Search) |
| Production timeline estimation | Claude |
| Technical troubleshooting | Claude |
| Format and repurposing guidance | Claude |
| Searching technical specifications | NotebookLM |
| Vendor and rate card lookup | NotebookLM |
| Learning from past production issues | NotebookLM |
| Broadcast/print delivery requirements | NotebookLM |
