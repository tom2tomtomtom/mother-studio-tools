# Visual AI Tools for Creative
## Creative Department Guide

---

## Why This Matters for Creatives

These tools let you generate, iterate, and prototype visual and video work at a speed that was impossible 12 months ago. They don't replace craft — they compress the distance between idea and execution. Use them to explore more directions, visualise concepts for pitches, and produce rough cuts before committing production budgets.

---

## Google Flow — AI Filmmaking Workspace

Flow is Google's AI filmmaking tool — a creative production environment that orchestrates multiple AI models: **Veo 3.1** for video generation, **Imagen 4 / Nano Banana Pro** for image generation, and **Gemini** for intelligent prompting. Think of it as a virtual production studio, not just a video generator.

### Getting Started

1. Go to [labs.google/flow](https://labs.google/flow/about) — available on Google Workspace Business/Enterprise plans (100 monthly credits), or via Google AI Pro/Ultra subscriptions.
2. Create a new project and describe your scene in plain language
3. Generate clips, then use Scenebuilder to extend or edit them
4. Export finished clips

### Key Features for Creative Work

**Text-to-Video:** Describe what you want to see — Gemini interprets your prompt, Veo generates the video. Prompting is conversational, not technical. Write it like you'd describe a scene to a director.

**Camera Controls:** Direct control over camera motion, angles, and perspectives. Preview the camera move before generating. This is how you get cinematic rather than generic output.

**Scenebuilder:** Edit and extend existing shots. Carry the camera forward, introduce new elements, or extend clip duration while maintaining scene consistency. Select a clip on the timeline → Add → Extend → describe how the action continues.

**Asset Management:** Organise "ingredients" (actors, objects, environments) and reuse characters across multiple clips. Critical for maintaining consistency across a campaign.

**Native Audio:** Veo 3+ generates synchronised audio — dialogue, sound effects, ambient sound — directly with the video. No separate audio step needed for rough concepts.

**Prompt by Doodling:** Sketch rough concepts that Flow interprets into polished visuals. Great for translating napkin sketches into something you can show a client.

### Best Prompts for Creative

Concept visualisation:
> A 30-something woman in a sunlit kitchen, reaching for a glass bottle with a minimal label. Camera pushes in slowly. The light is warm, golden hour quality. She pauses, reads the label, smiles slightly. Handheld feel, not static.

Campaign mood film:
> Wide aerial shot of the Australian coast at dawn, pulling back to reveal a lone surfer walking towards the water. Cinematic colour grade — desaturated with warm highlights. Slow, contemplative pace. Sound of waves and distant birds.

Social-first content:
> Vertical 9:16 format. Close-up of hands opening a product box. Satisfying unboxing sequence — tissue paper, the product reveal, a moment of appreciation. Clean white background, soft shadows. ASMR quality.

### Access & Pricing

- **Google Workspace** (Business/Enterprise): Flow access with 100 monthly credits, available since January 2026. From March 2026, heavy usage may require the AI Expanded Access add-on.
- **Google AI Pro** ($19.99/month): Flow access with Veo 2, ~50–100 video generations/month.
- **Google AI Ultra** ($249.99/month): Veo 3.1 with native audio, ~2,500 generations/month.

---

## Nano Banana Pro (Imagen 4) — AI Image Generation & Editing

Nano Banana Pro is the internal codename for **Imagen 4**, Google DeepMind's flagship image generation model. It powers image generation across the Gemini app, Google Slides, Vids, NotebookLM, and Flow. What sets it apart: it renders text accurately in images, maintains character consistency across multiple generations, and supports conversational editing — you talk to it like you'd direct a photographer.

### Getting Started

1. **Gemini App** (gemini.google.com): Upload an image or describe what you want, then iterate through conversation. Available to all Workspace Business and Enterprise users.
2. **Gemini side panel in Slides**: Use "Help me visualize" or "Beautify this slide" — it uses Nano Banana Pro under the hood.
3. **Google AI Studio** (aistudio.google.com): Select Nano Banana Pro — 50 free requests/day.
4. **Inside Flow**: Integrated directly for creating visual assets in your video projects.

### Key Features for Creative Work

**Accurate Text in Images:** Renders legible headlines, CTAs, and body copy directly in generated images. Most AI image tools fail at this — Nano Banana Pro is the first to do it reliably. This means you can generate ad layouts with real copy baked in.

**Character Consistency:** Maintain the likeness of up to 5 characters across multiple images. Generate a brand character once, then use them across every execution — social, OOH, digital, print.

**Conversational Editing:** Edit images through natural language. "Make the background warmer." "Change the outfit to blue." "Add the product to the table." "Push the camera in tighter." Each edit preserves the rest of the image.

**Multi-Image Composition:** Combine up to 14 reference images for complex compositions, style transfer, or mood board-to-image generation. Upload your references and let the model synthesise them.

**Advanced Controls:** Adjust camera angles, change focus, apply colour grading, transform scene lighting (day to night, bokeh effects) — all through text instructions.

### Best Prompts for Creative

Ad layout with copy:
> A minimalist print ad for a premium sparkling water brand. The bottle sits on a marble surface with condensation drops. Bold sans-serif headline reads "Nothing Artificial. Everything Refreshing." Warm neutral background. Clean, aspirational, premium feel.

Campaign character:
> A confident woman in her 30s, natural makeup, wearing a linen shirt, sitting in a modern cafe in Melbourne. She's looking directly at the camera with a warm, knowing expression. Shot on medium format film with shallow depth of field.

Then follow up conversationally:
> Now show her walking through a farmers market, same outfit, carrying a canvas tote. Morning light.

Style transfer from mood board:
> [Upload 3–4 reference images] Generate a new image that captures the colour palette, lighting quality, and composition style of these references. The subject is a glass bottle of kombucha on a wooden table outdoors.

### Access & Pricing

- **Google Workspace** (Business/Enterprise): Available via Gemini app and Slides side panel. 100 monthly credits included with Flow. From March 2026, heavy users may need the AI Expanded Access add-on.
- **Free via AI Studio**: 50 requests/day — no credit card needed.
- **Google AI Pro** ($19.99/month): Higher limits and priority.
- **Imagen 4 Ultra** (API): $0.06/image. **Imagen 4 Fast**: $0.02/image.

---

## Google Veo — AI Video Generation

Veo is the video generation model that powers Flow, but it's also available directly through the Gemini app and API. The current flagship is Veo 3.1 — 1080p HD, up to 60-second clips, with native audio generation.

### When to Use Veo Directly vs. Flow

- **Use Flow** when you're building multi-shot sequences, need camera controls, or want to iterate on a scene with Scenebuilder
- **Use Veo directly** (in Gemini app) for quick one-off video generations — social clips, mood references, visual exploration

### Key Capabilities

- **Text-to-Video**: Generate clips from descriptions (up to 8 seconds per generation, extendable)
- **Image-to-Video**: Animate still images — turn a hero shot into a motion asset
- **Native Audio**: Veo 3+ generates synchronised dialogue, SFX, and ambient sound
- **1080p HD** output, multiple aspect ratios (16:9, 9:16, 1:1)
- **Cinematic Understanding**: Strong narrative control and realistic physics

### Best Prompts for Creative

Animating a still:
> [Upload product hero shot] Animate this image. The camera slowly orbits around the product. Soft studio lighting shifts subtly. The surface catches reflections as the angle changes. Smooth, 5-second loop.

Social content:
> 9:16 vertical. A hand reaches into frame and picks up a colourful smoothie bowl from a marble countertop. The camera follows the bowl upward. Bright, saturated colours. Natural daylight. Food content aesthetic.

Mood reference:
> A quiet street in inner-city Melbourne at twilight. Warm light spills from a corner bar. A couple walks past, slightly out of focus. The camera is static, voyeuristic. Colour palette: amber, deep blue, warm grey. Wong Kar-wai meets real life.

---

## Runway — Professional AI Video Platform

Runway is the most established AI video platform in advertising and film production. Its current flagship model Gen-4.5 excels at capturing subtle human performance — expressions, pauses, and gestures that feel intentional rather than generated.

### Getting Started

1. Go to [runwayml.com](https://runwayml.com) and create an account (free tier available)
2. Choose generation type: Text to Video, Image to Video, or upload references
3. Select model — Gen-4.5 (best quality), Gen-4 (standard), or Turbo (faster/cheaper)
4. Set duration (5 or 10 seconds), aspect ratio, and camera controls
5. Generate, review, iterate. Use Aleph for post-generation edits

### Key Features for Creative Work

**Gen-4.5 (Video Generation):** Top-rated video generation model. Captures authentic emotional depth — subtle acting moments that make AI video feel directed rather than generated. Use reference images to maintain character consistency across scenes.

**Aleph (In-Video Editing):** Modify generated or existing video through text prompts without regenerating from scratch. Remove objects, transform scenes, change environments, adjust lighting. This is the closest thing to AI-powered post-production.

**Act-Two (Performance Capture):** Record yourself with a webcam and transfer that performance onto an AI-generated character. Head, face, body, and hand tracking — no mocap equipment needed. Useful for animating brand characters with real human performances.

**References:** Upload reference images that Gen-4 uses to maintain character and style consistency across generations. Upload your brand character once, generate them in any scenario.

### Best Prompts for Creative

Campaign concept video:
> A young man opens a fridge in a dimly lit apartment, illuminated by the fridge light. He pulls out a bottle, the label clearly visible. Close-up on his face as he takes a sip — subtle satisfaction. Moody lighting, cinematic grain.

Product launch:
> Extreme close-up of liquid being poured into a glass in slow motion. Bubbles rise through amber liquid. The camera pulls back slowly to reveal the full bottle and a minimal table setting. Studio lighting, white background.

Character-driven social:
> [Upload character reference image] This character walks through a busy Melbourne laneway, headphones on, carrying a coffee. They stop to look at street art, smile, and keep walking. Shot from behind, then cutting to a front-facing medium shot as they turn.

### Pricing

| Plan | Cost | Credits/month | Notes |
|---|---|---|---|
| Free | $0 | 125 (one-time) | Limited generation |
| Standard | $12/month | 625 | Gen-4, 720p export |
| Pro | $28/month | 2,250 | All tools, Aleph, Act-Two, 4K |
| Unlimited | $76/month | Unlimited Turbo | Unlimited Gen-4 Turbo |

---

## When to Use Which Tool

| Task | Best tool | Why |
|---|---|---|
| Visualising a campaign concept as video | Google Flow | Multi-shot sequences with camera control |
| Quick social video clips | Veo (via Gemini) or Runway Turbo | Fast single-clip generation |
| Ad layouts with real copy baked in | Nano Banana Pro | Best-in-class text rendering in images |
| Character-consistent campaign imagery | Nano Banana Pro | Maintains likeness across generations |
| Cinematic quality, performance-driven video | Runway Gen-4.5 | Best at subtle human expression |
| Editing generated or real video | Runway Aleph | Post-production without regenerating |
| Animating a hero product shot | Veo (Image-to-Video) | Clean animation from stills |
| Mood boards and visual exploration | Nano Banana Pro or Runway Frames | Fast iteration on visual direction |
| Pitch concept films | Google Flow | Closest to a finished film feel |
| Brand character animation with real performance | Runway Act-Two | Webcam performance capture |

---

## Rules of Engagement

**Always:**
- Treat AI-generated visuals as starting points, not finished work. They're for concepting, pitching, and exploration — not final production (yet).
- Maintain your creative judgement. These tools generate volume; your job is to recognise what's good.
- Check licensing and usage rights for client-facing work. AI-generated content policies vary by platform and client.
- Save your best prompts. Good prompts are reusable — build a library of what works.

**Never:**
- Present AI-generated video as final production work without disclosure where required.
- Assume character consistency is perfect — always review across all assets before presenting.
- Rely on a single generation. Generate multiple options, then curate.
- Skip the human creative step. The concept, the idea, the unexpected connection — that's still your job. These tools execute faster; they don't think for you.
