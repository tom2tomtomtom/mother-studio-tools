---
name: accessibility-reviewer
description: Audits creative work and digital content for WCAG compliance, inclusive language, alt text, color contrast, and compatibility.
---

# Accessibility Reviewer

A structured framework for auditing creative work and digital content against accessibility standards. This skill covers WCAG 2.1 AA compliance, inclusive language, assistive technology compatibility, and remediation guidance to ensure content is usable by the widest possible audience.

## When to Use

- Reviewing website designs or builds before launch
- Auditing social media content and campaigns for accessibility
- Checking email templates and campaigns for screen reader compatibility
- Evaluating print materials for readability and inclusive design
- Reviewing video and multimedia content for captioning and descriptions
- Assessing existing digital properties for WCAG compliance gaps
- Conducting inclusive language audits on copy and content
- Preparing accessibility documentation for client deliverables

## Review Framework

### 1. WCAG 2.1 AA Compliance Checklist

WCAG is organized around four principles -- Perceivable, Operable, Understandable, and Robust (POUR). The following covers the most critical AA-level success criteria for creative and marketing work.

#### Perceivable -- Can users perceive the content?

**Text alternatives (1.1.1):**
- All images have meaningful alt text that conveys purpose, not just description
- Decorative images have empty alt attributes (alt="") so screen readers skip them
- Complex images (charts, infographics) have extended descriptions
- Icons used as controls have accessible labels
- CAPTCHAs provide audio or alternative methods

**Time-based media (1.2):**
- Pre-recorded video has synchronized captions
- Pre-recorded audio-only content has a text transcript
- Pre-recorded video has audio description for visual-only information
- Live video has real-time captions (if applicable)

**Adaptable content (1.3):**
- Information conveyed by visual formatting is also conveyed programmatically (headings use heading tags, lists use list markup)
- Reading order makes sense when CSS is disabled
- Instructions do not rely solely on shape, size, position, or visual location ("click the red button on the right")
- Content does not restrict display to a single orientation (portrait/landscape)

**Distinguishable content (1.4):**
- Color is not the only way to convey information (error states, status, links)
- Text color contrast ratio is at least 4.5:1 against background (3:1 for large text)
- UI component and graphical object contrast is at least 3:1
- Text can be resized to 200% without loss of content or function
- Content reflows at 320px width without horizontal scrolling
- Text spacing can be adjusted without breaking layout
- No content is lost when users override font size, spacing, or line height

### Color Contrast Ratios -- Quick Reference

| Element | Minimum Ratio (AA) | Enhanced Ratio (AAA) |
|---|---|---|
| Body text (under 18pt) | 4.5:1 | 7:1 |
| Large text (18pt+ or 14pt bold) | 3:1 | 4.5:1 |
| UI components and icons | 3:1 | Not defined |
| Placeholder text | 4.5:1 | 7:1 |
| Disabled elements | No requirement | No requirement |
| Logos and wordmarks | No requirement | No requirement |

**How to check:**
- Use WebAIM Contrast Checker (webaim.org/resources/contrastchecker)
- Browser DevTools accessibility panel
- Figma plugins: Stark, A11y - Color Contrast Checker
- Automated tools: axe, Lighthouse, WAVE

#### Operable -- Can users operate the interface?

**Keyboard accessible (2.1):**
- All interactive elements are reachable and operable via keyboard alone
- No keyboard traps -- users can always tab away from any element
- Keyboard shortcuts do not conflict with assistive technology shortcuts

**Enough time (2.2):**
- Users can pause, stop, or extend time limits
- Auto-updating content can be paused
- No time limits on essential activities unless absolutely necessary

**Seizure and motion safety (2.3):**
- No content flashes more than 3 times per second
- Motion animation can be disabled (respect prefers-reduced-motion)
- Parallax and auto-playing animations have pause controls

**Navigable (2.4):**
- Skip navigation link is present and functional
- Pages have descriptive titles
- Focus order follows a logical reading sequence
- Link text is descriptive out of context (not "click here" or "read more")
- Multiple ways to find pages within a site (nav, search, sitemap)
- Headings and labels are descriptive and accurate
- Focus indicator is visible on all interactive elements

**Input modalities (2.5):**
- Gestures have single-pointer alternatives
- Touch targets are at least 44x44 CSS pixels
- Dragging operations have non-dragging alternatives

#### Understandable -- Can users understand the content?

**Readable (3.1):**
- Page language is declared in HTML (lang attribute)
- Language changes within content are marked (lang attribute on span/div)
- Reading level is appropriate for the audience (aim for grade 8-10 for general audiences)

**Predictable (3.2):**
- Navigation is consistent across pages
- Components with the same function are labeled consistently
- No unexpected context changes on focus or input

**Input assistance (3.3):**
- Error messages identify the specific field and describe the error clearly
- Labels and instructions are provided for all form inputs
- Error prevention -- confirmation for financial or legal submissions
- Suggestions for correcting errors are provided when possible

#### Robust -- Is the content compatible with assistive technology?

**Compatible (4.1):**
- HTML validates without significant parsing errors
- Custom components have appropriate ARIA roles, states, and properties
- Status messages are announced by screen readers without receiving focus

### 2. Alt Text Guidelines

**Writing effective alt text:**

**Informative images:**
- Describe the content and function, not the appearance
- Be concise -- typically 1-2 sentences, under 125 characters when possible
- Do not start with "Image of" or "Photo of" -- screen readers already announce it as an image
- Include relevant text that appears in the image
- Convey the mood or context if it matters to understanding

**Examples:**
- Bad: "Photo of a woman"
- Better: "Marketing director Sarah Chen presenting quarterly results to her team"
- Bad: "Graph"
- Better: "Bar chart showing 40% increase in organic traffic from January to June 2025"

**Functional images (links, buttons):**
- Describe the action or destination, not the image
- Example: Logo that links to homepage -- alt="Uncommon Studio homepage" not alt="Uncommon Studio logo"

**Decorative images:**
- Use alt="" (empty alt attribute)
- CSS background images are inherently decorative to screen readers
- Do not describe images that add no meaningful information

**Complex images:**
- Provide a brief alt text summary plus a longer description
- Long descriptions can be in surrounding text, a details/summary element, or a linked page
- Charts and graphs need the key data points communicated in text

**Social media alt text:**
- Instagram: 100 character limit (use image description in caption for more detail)
- Twitter/X: 1000 character limit
- LinkedIn: Alt text available in image upload
- Facebook: Automatic alt text exists but is often inaccurate -- write custom descriptions

### 3. Heading Hierarchy

- Every page has exactly one H1 that describes the page purpose
- Headings follow sequential order -- H1, H2, H3 -- no skipping levels
- Headings are used for structure, not for visual styling
- Heading text is descriptive and distinguishable from other headings on the page
- Do not use bold text as a substitute for headings

### 4. Keyboard Navigation Audit

**Test procedure:**
1. Start at the browser address bar
2. Tab through the entire page -- every interactive element should receive focus
3. Verify focus indicator is visible on every focused element
4. Verify focus order matches visual layout and reading order
5. Test Enter and Space on all buttons and links
6. Test Escape to close modals, dropdowns, and overlays
7. Verify no keyboard traps -- you can always tab away
8. Test arrow keys on custom components (tabs, menus, carousels)

### 5. Screen Reader Compatibility

**Key areas to test:**
- Page title is announced on load
- Landmark regions are present and labeled (header, nav, main, footer)
- Headings create a navigable document outline
- Links and buttons announce their purpose
- Form fields have associated labels
- Error messages are announced when they appear
- Dynamic content updates are announced via ARIA live regions
- Tables have headers and captions
- Custom widgets announce state changes (expanded, selected, checked)

**Test with:**
- VoiceOver (macOS/iOS) -- built in, free
- NVDA (Windows) -- free, open source
- JAWS (Windows) -- commercial, widely used
- TalkBack (Android) -- built in, free

### 6. Inclusive Language Audit

**Principles:**
- Use person-first or identity-first language as preferred by the community
- Avoid ableist language and metaphors ("blind to," "falling on deaf ears," "crazy," "lame")
- Use gender-neutral language unless specific gender is relevant
- Avoid age-related assumptions or stereotypes
- Represent diverse experiences and perspectives in examples and imagery
- Do not use idioms or colloquialisms that may not translate across cultures

**Common replacements:**
- "Guys" -- "Everyone," "Team," "Folks"
- "Whitelist/blacklist" -- "Allowlist/blocklist"
- "Master/slave" -- "Primary/replica" or "Main/secondary"
- "Sanity check" -- "Confidence check," "Gut check," "Review"
- "Grandfather clause" -- "Legacy provision," "Existing exemption"
- "Dummy" -- "Placeholder," "Sample"
- "He/she" -- "They" (singular)
- "Handicapped" -- "Disabled" or "Person with a disability"

### 7. Motion and Animation Considerations

- Respect `prefers-reduced-motion` media query in CSS
- Auto-playing animations have visible pause controls
- No essential information is conveyed only through animation
- Transitions are subtle -- avoid large-scale movement that could trigger vestibular disorders
- Video backgrounds can be paused or replaced with a static image
- Loading animations are simple and do not loop indefinitely without indication of progress

## Content Types -- Specific Guidance

### Web Pages
- Full WCAG 2.1 AA audit using the framework above
- Test with automated tools first (Lighthouse, axe), then manual testing
- Keyboard navigation and screen reader testing are mandatory
- Test at multiple viewport sizes including 320px width
- Check both light and dark mode if supported

### Social Media
- All images have alt text on platforms that support it
- Video has captions (burned-in or platform captions)
- Hashtags use CamelCase for readability (#AccessibilityMatters not #accessibilitymatters)
- Emoji usage is limited and purposeful -- screen readers read every emoji aloud
- Do not use special Unicode characters for aesthetic text (they are unreadable to screen readers)
- Link text is descriptive or preceded by context

### Email
- Semantic HTML structure (headings, lists, tables with headers)
- Alt text on all images (many clients block images by default)
- Sufficient contrast without relying on background images
- Single-column layout preferred for better screen reader experience
- "View in browser" link for clients with rendering issues
- Links are descriptive and underlined (not just color-differentiated)
- Font size minimum 14px for body text

### Print Materials
- Minimum 12pt font for body text (14pt preferred for older audiences)
- High contrast between text and background
- Sans-serif fonts for body text improve readability
- Avoid justified text -- ragged right is easier to read
- Adequate line spacing (1.5x minimum)
- Do not rely solely on color to convey information
- Provide digital alternative formats (PDF, plain text, large print)

### Video
- Synchronized captions for all dialogue and meaningful sound
- Audio description for visual information not conveyed in dialogue
- Transcript available for download or on-page
- Captions are accurate, properly timed, and include speaker identification
- Caption text is readable (sufficient size, contrast, and positioning)
- No auto-play without user consent

## Common Accessibility Failures

1. **Missing alt text** -- most frequent failure across all audits
2. **Insufficient color contrast** -- especially in brand colors and light gray text
3. **Missing form labels** -- placeholder text is not a label
4. **No keyboard focus indicator** -- often removed for aesthetic reasons (never do this)
5. **Missing skip navigation** -- critical for keyboard users on content-heavy pages
6. **Auto-playing media** -- video or audio that plays without user action
7. **Non-descriptive link text** -- "click here," "read more," "learn more" without context
8. **Missing captions on video** -- auto-generated captions are not sufficient without review
9. **Heading hierarchy violations** -- skipping levels or using headings for styling
10. **Touch targets too small** -- especially on mobile, links and buttons under 44x44px

## Legal Requirements Overview

- **ADA (US)**: Title III applies to places of public accommodation, increasingly interpreted to include websites. No specific technical standard, but WCAG 2.1 AA is the accepted benchmark.
- **Section 508 (US)**: Federal agencies and their contractors must meet WCAG 2.0 AA minimum.
- **EAA (EU)**: European Accessibility Act requires accessibility for products and services by June 2025. Applies to e-commerce, banking, transport, and more.
- **EN 301 549 (EU)**: Technical standard referencing WCAG 2.1 AA for ICT products.
- **AODA (Canada, Ontario)**: WCAG 2.0 AA required for public and private sector organizations.
- **DDA (Australia)**: Disability Discrimination Act covers digital accessibility.

**Disclaimer:** This is general guidance, not legal advice. Consult legal counsel for specific compliance requirements.

## Remediation Recommendations Template

```
## Accessibility Audit Findings: [Project Name]

### Critical Issues (Must Fix)
| Issue | Location | WCAG Criterion | Current State | Required Fix | Priority |
|---|---|---|---|---|---|
| [Description] | [Page/component] | [X.X.X] | [What is wrong] | [What to do] | Critical |

### Major Issues (Should Fix)
| Issue | Location | WCAG Criterion | Current State | Required Fix | Priority |
|---|---|---|---|---|---|
| [Description] | [Page/component] | [X.X.X] | [What is wrong] | [What to do] | High |

### Minor Issues (Good to Fix)
| Issue | Location | WCAG Criterion | Current State | Required Fix | Priority |
|---|---|---|---|---|---|
| [Description] | [Page/component] | [X.X.X] | [What is wrong] | [What to do] | Medium |

### Passes
[List of criteria tested and passed -- important for demonstrating thoroughness]

### Testing Methodology
- Tools used: [List]
- Browsers tested: [List]
- Assistive technology tested: [List]
- Date of audit: [Date]
- Standard: WCAG 2.1 Level AA
```

## Quality Checklist

- [ ] All four POUR principles are addressed (Perceivable, Operable, Understandable, Robust)
- [ ] Color contrast has been tested with a validated tool, not estimated by eye
- [ ] Alt text is written for all meaningful images and empty for decorative images
- [ ] Heading hierarchy is logical and sequential with no skipped levels
- [ ] Keyboard navigation has been manually tested end to end
- [ ] Screen reader testing has been performed with at least one major reader
- [ ] Inclusive language has been reviewed -- no ableist, gendered, or exclusionary terms
- [ ] Motion and animation respect prefers-reduced-motion and have pause controls
- [ ] Findings are categorized by severity with clear remediation steps
- [ ] Legal context is noted but flagged as general guidance, not legal advice
- [ ] Testing methodology is documented (tools, browsers, assistive tech, date)
- [ ] Recommendations are actionable -- developers and designers can implement them directly
