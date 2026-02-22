# Visual AI Tools for Design
## Design Department Guide

---

## Why This Matters for Designers

These tools change the speed of visual exploration. Before opening Figma, before commissioning photography, before booking a retoucher — you can now generate, iterate, and test visual directions in minutes. Use them for mood boards, visual concepting, motion design exploration, and prototype asset generation. The design eye still matters more than ever; now you just have faster hands.

---

## Nano Banana Pro (Imagen 4) — AI Image Generation & Editing

Nano Banana Pro is the internal codename for **Imagen 4**, Google DeepMind's flagship image generation model. It powers image generation across the Gemini app, Google Slides, Vids, NotebookLM, and Flow. For designers specifically, it solves three problems that other AI image tools struggle with: it renders text accurately in images, it maintains visual consistency across multiple generations, and it lets you edit through conversation rather than regenerating from scratch.

### Getting Started

1. **Gemini App** (gemini.google.com): Upload an image or describe what you want. Iterate through conversation — "shift the colour palette warmer," "change the typeface to a condensed sans-serif." Available to all Workspace Business and Enterprise users.
2. **Gemini side panel in Slides**: Use "Help me visualize" or "Beautify this slide" — Nano Banana Pro powers it.
3. **Google AI Studio** (aistudio.google.com): Select Nano Banana Pro — 50 free requests/day, no credit card needed.
4. **Inside Flow**: Integrated directly for creating visual assets alongside video work.

### Key Features for Design Work

**Accurate Text Rendering:** Generate layouts, signage, packaging concepts, and ad mock-ups with legible type baked directly into the image. Specify typeface style (sans-serif, slab, script), weight, and placement. This is the first AI image model where you can generate a poster concept with a real headline and it actually looks right.

**Conversational Editing:** This is the feature that changes the workflow. Generate an image, then direct changes like you would with a junior designer:

- "Make the background a deep navy instead of black"
- "Move the text to the lower third"
- "Add more negative space on the right"
- "Change the lighting to golden hour"
- "Make it feel more Scandinavian — cleaner, more minimal"

Each edit preserves what already works. No need to regenerate from scratch.

**Multi-Image Reference:** Upload up to 14 reference images — mood board shots, colour palettes, texture samples, typography references — and ask the model to synthesise them into a new visual. This is essentially AI-powered mood board to concept translation.

**Character Consistency:** Maintain the likeness of up to 5 characters across multiple images. Generate a brand campaign character and use them consistently across social, OOH, digital, and print concepts.

**Advanced Visual Controls:** Adjust camera angles, depth of field, colour grading, lighting direction, and material textures — all through text instructions. Think of it as parametric design direction.

### Design-Specific Prompts

Layout concepting:
> A minimalist print layout for a premium skincare brand. White space dominant. Product bottle centred in the lower half. Bold condensed sans-serif headline "Less Is Everything" in the upper third. Muted sage green accent colour. Photography is clean, studio-lit, editorial.

Packaging exploration:
> A premium glass bottle with a minimal label design. The label uses a condensed serif typeface, warm off-white paper stock, embossed brand mark. Photographed on a raw linen surface with soft directional light from the left. Shot overhead at 45 degrees.

Colour and material exploration:
> [Upload 3 mood board images] Generate a brand colour palette based on these references. Show it as a series of material swatches — painted surfaces, fabrics, paper stocks — arranged on a neutral grey background. Include colour values.

Design system visual:
> A grid of UI components for a wellness app: a card component, a button in three states (default, hover, active), a navigation bar, and a text input field. Clean, modern design. Rounded corners, soft shadows, warm neutral palette. Display on a light grey canvas.

Iterating on a concept:
> [Upload a layout you've generated] This is good but the hierarchy isn't working. Make the headline 30% larger. Reduce the body copy. Add a subtle grid texture to the background. Keep everything else the same.

### Access & Pricing

- **Google Workspace** (Business/Enterprise): Available via Gemini app and Slides side panel. 100 monthly credits included with Flow. From March 2026, heavy users may need the AI Expanded Access add-on.
- **Free via AI Studio**: 50 requests/day — generous for design exploration.
- **Google AI Pro** ($19.99/month): Higher limits, priority access.
- **Imagen 4 Ultra** (API): $0.06/image. **Imagen 4 Fast**: $0.02/image.

---

## Google Flow — AI Video & Motion Design

Flow is Google's AI filmmaking tool — a creative production environment orchestrating **Veo 3.1** (video), **Imagen 4 / Nano Banana Pro** (image), and **Gemini** (prompting) in one interface. For designers, it's the fastest way to explore motion design concepts, animate static designs, and create video assets without After Effects.

### Getting Started

1. Go to [labs.google/flow](https://labs.google/flow/about) — available on Google Workspace Business/Enterprise plans (100 monthly credits), or via Google AI Pro/Ultra subscriptions.
2. Create a project, describe your scene or upload a still to animate
3. Use Camera Controls to set precise camera motion and angles
4. Use Scenebuilder to extend clips or modify existing shots
5. Export for presentations or further editing

### Key Features for Design Work

**Image-to-Video:** Upload a static design, hero image, or layout and animate it. The model understands depth, parallax, and natural motion. Turn a flat composition into a living, breathing asset.

**Camera Controls:** Precise control over camera movement — dolly, pan, orbit, rack focus. Preview before generating. This matters for motion design because camera movement is composition in time.

**Scenebuilder:** Extend and edit shots without regenerating. Add elements, change timing, push the camera forward. Iterative motion design without the render queue.

**Prompt by Doodling:** Sketch a rough concept — storyboard quality — and Flow interprets it into a polished visual. For designers who think in sketches, this bridges the gap between rough and refined instantly.

### Design-Specific Prompts

Animating a layout:
> [Upload a brand layout/poster] Animate this design. The headline types on from left to right. The product image scales up subtly. The background colour shifts slightly warmer over the duration. Smooth easing, 5 seconds.

Motion identity exploration:
> An abstract geometric composition — overlapping circles and rectangles in muted earth tones — slowly transforms. Shapes rotate, scale, and morph into new configurations. Smooth, hypnotic motion. Clean white background. Title sequence aesthetic.

Product in environment:
> A glass bottle on a stone surface. The camera orbits slowly around it at eye level. Morning light shifts across the surface as the camera moves. Condensation catches the light. 8 seconds, cinematic quality, shallow depth of field.

UI animation prototype:
> A mobile phone screen showing an app interface. A thumb taps a button — the screen transitions with a smooth slide animation to reveal a new page. The new page loads with staggered card animations. Clean, modern design. Shot straight-on.

### Access & Pricing

- **Google Workspace** (Business/Enterprise): Flow access with 100 monthly credits, available since January 2026. From March 2026, heavy usage may require the AI Expanded Access add-on.
- **Google AI Pro** ($19.99/month): Flow access with Veo 2.
- **Google AI Ultra** ($249.99/month): Veo 3.1 with native audio, highest limits.

---

## Google Veo — AI Video Generation

Veo is the video generation model powering Flow, also available directly in the Gemini app for quick generations. Current flagship: Veo 3.1 — 1080p HD, up to 60 seconds, native audio.

### When to Use Veo vs. Flow

- **Use Flow** when building multi-shot sequences or needing precise camera control
- **Use Veo directly** (Gemini app) for quick one-off motion references, texture animations, or background video

### Design-Specific Use Cases

**Motion texture and material studies:**
> Close-up of liquid mercury on a dark surface, slowly shifting and reflecting light. Abstract, mesmerising. Loop-ready.

**Environmental mood video:**
> Soft morning light moves across a white interior space. Shadows shift slowly on textured walls. Minimal, architectural. The camera is static. Ambient, meditative.

**Animated brand element:**
> A single geometric logo mark — a circle intersecting a square — rotates slowly in 3D space against a clean gradient background. Metallic material, subtle reflections. Smooth, precise motion.

---

## Runway — Professional AI Video & Editing Platform

Runway is the most established AI video platform in creative production. For designers, the key differentiators are Aleph (edit video through text), Act-Two (performance capture), and consistently strong visual quality. Gen-4.5 is the current best model for human subjects.

### Getting Started

1. Go to [runwayml.com](https://runwayml.com) — free tier available with 125 credits
2. Choose: Text to Video, Image to Video, or upload references
3. Select model: Gen-4.5 (highest quality), Gen-4, or Turbo (faster/cheaper)
4. Set duration (5 or 10 seconds), aspect ratio, camera controls
5. Use Aleph for post-generation edits — modify video without regenerating

### Key Features for Design Work

**Gen-4.5:** Best-in-class for human subjects — captures subtle expressions, natural gestures, and authentic emotional tone. When the brief involves people, this is the strongest option.

**Aleph (In-Video Editing):** This is where Runway pulls ahead for design workflows. Edit generated or real video through text: remove objects, change environments, adjust lighting, swap materials. It's AI post-production — modify what you have rather than starting over.

**Frames (Image Generation):** Text-to-image and image editing alongside video work. Useful for generating stills that you then animate with the video models.

**References:** Upload brand assets, character images, or style references. The model uses them to maintain consistency across generations. Upload a brand palette and it influences the colour grading.

**Keyframe Control:** Set the first and last frame of a generation. Upload your starting composition and ending composition — the model generates the motion between them. This gives designers precise control over transitions.

### Design-Specific Prompts

Material and texture animation:
> Extreme close-up of paper stock being folded. The texture catches directional light. Slow, precise motion. You can see the fibre of the paper. Clean, tactile, satisfying.

Typography in motion:
> [Upload a typographic layout] Animate this. The letters slide into position from off-screen, staggered timing, smooth ease-out. Hold for 2 seconds. Minimal motion, maximum impact.

Environmental design:
> An empty gallery space with white walls and polished concrete floor. A single spotlight illuminates a floating object in the centre. The camera slowly dollies forward. Architectural, precise, contemplative.

Brand film frame:
> [Upload brand character reference] This person sits at a minimal desk in a sunlit room. They pick up a pen, pause thoughtfully, begin writing. Camera starts on their hands, slowly tilts up to their face. Shallow depth of field. Warm, editorial quality.

### Pricing

| Plan | Cost | Credits/month | Best for |
|---|---|---|---|
| Free | $0 | 125 (one-time) | Testing and exploration |
| Standard | $12/month | 625 | Regular concepting |
| Pro | $28/month | 2,250 | Full production access, Aleph, 4K |
| Unlimited | $76/month | Unlimited Turbo | Heavy production use |

---

## When to Use Which Tool

| Task | Best tool | Why |
|---|---|---|
| Layout concepts with real typography | Nano Banana Pro | Only model that renders text accurately |
| Mood board to concept translation | Nano Banana Pro (multi-image reference) | Synthesises references into new visuals |
| Conversational design iteration | Nano Banana Pro | Edit without regenerating |
| Multi-shot motion sequences | Google Flow | Camera controls + Scenebuilder |
| Animating static designs | Flow or Veo (Image-to-Video) | Understands depth and parallax |
| Material and texture studies | Veo or Runway | High-quality close-up generation |
| Video with human subjects | Runway Gen-4.5 | Best at natural human expression |
| Editing existing video | Runway Aleph | AI post-production via text |
| Motion design prototyping | Flow | Fastest iteration for motion concepts |
| Packaging and product visualisation | Nano Banana Pro | Precise material and lighting control |
| Brand identity motion work | Flow + Veo | Cinematic quality, style consistency |
| Precise transition animation | Runway (Keyframe Control) | Set start and end frames exactly |

---

## Practical Workflow for Designers

### 1. Visual Direction (Nano Banana Pro)
Start here. Generate mood images, test colour palettes, explore typographic treatments. Use multi-image reference to translate your Pinterest board into generated concepts. Iterate conversationally until the visual direction is locked.

### 2. Motion Exploration (Flow or Runway)
Once you have a visual direction, bring key frames into Flow or Runway. Animate hero images, test transitions, explore motion language. Flow for cinematic sequences; Runway for precise keyframe control.

### 3. Asset Generation
Generate the specific assets you need: social video, animated OOH, product motion, brand film frames. Use references to maintain consistency across outputs.

### 4. Refinement
Use Runway's Aleph to edit and adjust generated video. Use Nano Banana Pro's conversational editing to refine stills. Layer AI-generated material into your design tools for final compositing.

---

## Rules of Engagement

**Always:**
- Use AI generation as the starting point of the design process, not the end. Your design judgement is the quality filter.
- Save your prompts and reference combinations. Build a personal library of what produces good results.
- Check brand guidelines against generated output — AI doesn't know your brand rules unless you tell it.
- Export at the highest quality available and refine in your design tools (Figma, After Effects, Photoshop).

**Never:**
- Present AI-generated work as final production assets without human refinement and quality control.
- Assume colour accuracy from AI generation — always calibrate and adjust in your design tools.
- Skip the reference stage. The quality of your input references directly determines the quality of output.
- Forget to check text rendering. Even Nano Banana Pro isn't perfect — proof every piece of generated type before it goes anywhere.
