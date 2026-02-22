# :art: Creative Studio Plugin

Your AI-powered creative partner in Claude. Generate hero imagery, build mood boards, produce campaign toolkits, and review assets against brand guidelines — all powered by Gemini Imagen.

## What This Does

Turns Claude into a creative studio that can help you:
- Generate hero images and visual assets from creative briefs
- Build mood boards to explore visual direction before committing
- Produce full campaign toolkits with heroes and social suites
- Resize and regenerate concepts across multiple aspect ratios
- Review generated imagery against loaded brand guidelines

---

## How to Install

### Option 1: From Cowork (Easiest)
1. Open Claude Cowork
2. Go to **Settings > Plugins**
3. Search for "Creative Studio"
4. Click **Install**

### Option 2: Manual Install
1. Download this folder
2. In Cowork, go to **Settings > Plugins > Install from folder**
3. Select the `creative-studio` folder
4. Done!

### Setup: Gemini API Key
This plugin uses Gemini Imagen for image generation. You'll need a `GEMINI_API_KEY` environment variable set. Get one at [Google AI Studio](https://aistudio.google.com/).

---

## Try These Commands

### `/generate-hero`
"Generate a hero image for a fitness app landing page — energetic, sunrise lighting, lifestyle photography style, 16:9."

### `/mood-board`
"Create a mood board for a luxury skincare brand. Think minimal, Japanese-inspired, soft neutrals with gold accents."

### `/campaign-toolkit`
"Build a full campaign toolkit for our summer sale. Brand is playful and bold, target audience is 18-30."

### `/resize-suite`
"Take the hero concept and generate versions for Instagram stories, LinkedIn banner, and email header."

### `/brand-check`
"Review these three generated images against our brand guidelines — flag anything off-brand."

---

## Tips

- **Load brand guidelines first** — Share your brand's color palette, typography, imagery style, and tone before generating. The more context, the more on-brand the output.
- **Iterate with refinement** — Start with `/mood-board` to explore direction, then `/generate-hero` for final assets. Progressive refinement beats one-shot generation.
- **Be specific about style** — "Editorial photography with soft natural light" beats "professional looking." Use the art direction vocabulary from the built-in skills.
- **Use `/brand-check` as a gate** — Run it before sharing generated assets with clients to catch inconsistencies early.

---

## Optional Connectors

These let Claude access your tools directly (not required):
- **Figma** — Reference design files, pull component styles, and check generated assets against existing designs
- **Media Pipeline** — Direct connection to Gemini Imagen for image generation (requires `GEMINI_API_KEY`)

Set these up in **Settings > Connectors** if you want them.

---

## Need Help?

This plugin was created for Creative and Design teams. If you have questions or feedback, reach out to your admin or the plugin author.
