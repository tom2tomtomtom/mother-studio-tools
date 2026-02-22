// Prompt Generator — Template data & assembly logic
// Pure functions, no React dependencies

export type ToolId = "runway" | "veo3" | "nanobanana";

export interface Tool {
  id: ToolId;
  name: string;
  type: "Video" | "Image";
  color: string;
  description: string;
}

export const TOOLS: Tool[] = [
  {
    id: "runway",
    name: "Runway Gen-4",
    type: "Video",
    color: "purple",
    description: "AI video generation with camera & motion control",
  },
  {
    id: "veo3",
    name: "Google Veo 3",
    type: "Video",
    color: "blue",
    description: "AI video with dialogue and sound effects",
  },
  {
    id: "nanobanana",
    name: "Nano Banana",
    type: "Image",
    color: "amber",
    description: "AI image generation via Gemini",
  },
];

export interface SelectOption {
  value: string;
  label: string;
}

export const STYLE_OPTIONS: SelectOption[] = [
  { value: "", label: "None" },
  { value: "cinematic", label: "Cinematic" },
  { value: "documentary", label: "Documentary" },
  { value: "anime", label: "Anime" },
  { value: "noir", label: "Film Noir" },
  { value: "vintage", label: "Vintage / Retro" },
  { value: "hyperrealistic", label: "Hyperrealistic" },
  { value: "editorial", label: "Editorial / Fashion" },
  { value: "surreal", label: "Surreal / Dreamlike" },
  { value: "minimalist", label: "Minimalist" },
  { value: "pop-art", label: "Pop Art" },
  { value: "watercolor", label: "Watercolor" },
  { value: "3d-render", label: "3D Render" },
];

export const CAMERA_MOVEMENT_OPTIONS: SelectOption[] = [
  { value: "", label: "None" },
  { value: "static", label: "Static" },
  { value: "pan-left", label: "Pan Left" },
  { value: "pan-right", label: "Pan Right" },
  { value: "tilt-up", label: "Tilt Up" },
  { value: "tilt-down", label: "Tilt Down" },
  { value: "dolly-in", label: "Dolly In" },
  { value: "dolly-out", label: "Dolly Out" },
  { value: "tracking", label: "Tracking Shot" },
  { value: "crane-up", label: "Crane Up" },
  { value: "crane-down", label: "Crane Down" },
  { value: "orbit", label: "Orbit / Arc" },
  { value: "handheld", label: "Handheld / Shaky" },
  { value: "zoom-in", label: "Zoom In" },
  { value: "zoom-out", label: "Zoom Out" },
];

export const CAMERA_ANGLE_OPTIONS: SelectOption[] = [
  { value: "", label: "None" },
  { value: "wide", label: "Wide Shot" },
  { value: "medium", label: "Medium Shot" },
  { value: "close-up", label: "Close-Up" },
  { value: "extreme-close-up", label: "Extreme Close-Up" },
  { value: "birds-eye", label: "Bird's Eye View" },
  { value: "low-angle", label: "Low Angle" },
  { value: "high-angle", label: "High Angle" },
  { value: "dutch-angle", label: "Dutch Angle" },
  { value: "over-the-shoulder", label: "Over the Shoulder" },
  { value: "pov", label: "POV / First Person" },
];

export const LIGHTING_OPTIONS: SelectOption[] = [
  { value: "", label: "None" },
  { value: "golden-hour", label: "Golden Hour" },
  { value: "blue-hour", label: "Blue Hour" },
  { value: "overcast", label: "Overcast / Soft" },
  { value: "studio", label: "Studio Lighting" },
  { value: "neon", label: "Neon / RGB" },
  { value: "moonlit", label: "Moonlit" },
  { value: "backlit", label: "Backlit / Silhouette" },
  { value: "harsh-sun", label: "Harsh Sunlight" },
  { value: "candlelight", label: "Candlelight" },
  { value: "volumetric", label: "Volumetric / God Rays" },
  { value: "ring-light", label: "Ring Light" },
  { value: "chiaroscuro", label: "Chiaroscuro" },
];

export const MOOD_OPTIONS: SelectOption[] = [
  { value: "", label: "None" },
  { value: "dramatic", label: "Dramatic" },
  { value: "serene", label: "Serene / Calm" },
  { value: "energetic", label: "Energetic" },
  { value: "mysterious", label: "Mysterious" },
  { value: "joyful", label: "Joyful" },
  { value: "melancholic", label: "Melancholic" },
  { value: "tense", label: "Tense / Suspenseful" },
  { value: "nostalgic", label: "Nostalgic" },
  { value: "ethereal", label: "Ethereal" },
  { value: "gritty", label: "Gritty / Raw" },
  { value: "romantic", label: "Romantic" },
];

export const DURATION_OPTIONS: Record<ToolId, SelectOption[]> = {
  runway: [
    { value: "5", label: "5 seconds" },
    { value: "10", label: "10 seconds" },
  ],
  veo3: [{ value: "8", label: "8 seconds" }],
  nanobanana: [],
};

export const ASPECT_RATIO_OPTIONS: Record<ToolId, SelectOption[]> = {
  runway: [
    { value: "16:9", label: "16:9 (Landscape)" },
    { value: "9:16", label: "9:16 (Portrait)" },
    { value: "1:1", label: "1:1 (Square)" },
  ],
  veo3: [
    { value: "16:9", label: "16:9 (Landscape)" },
    { value: "9:16", label: "9:16 (Portrait)" },
    { value: "1:1", label: "1:1 (Square)" },
  ],
  nanobanana: [
    { value: "16:9", label: "16:9 (Landscape)" },
    { value: "9:16", label: "9:16 (Portrait)" },
    { value: "1:1", label: "1:1 (Square)" },
    { value: "4:3", label: "4:3 (Standard)" },
    { value: "3:2", label: "3:2 (Photo)" },
  ],
};

// --- Form fields type ---

export interface PromptFields {
  subject: string;
  action: string;
  setting: string;
  style: string;
  cameraMovement: string;
  cameraAngle: string;
  lighting: string;
  mood: string;
  duration: string;
  aspectRatio: string;
  dialogue: string;
  soundEffects: string;
}

export const EMPTY_FIELDS: PromptFields = {
  subject: "",
  action: "",
  setting: "",
  style: "",
  cameraMovement: "",
  cameraAngle: "",
  lighting: "",
  mood: "",
  duration: "",
  aspectRatio: "",
  dialogue: "",
  soundEffects: "",
};

// --- Which fields are visible per tool ---

export function getVisibleFields(tool: ToolId): (keyof PromptFields)[] {
  switch (tool) {
    case "runway":
      return [
        "subject",
        "action",
        "setting",
        "style",
        "cameraMovement",
        "cameraAngle",
        "lighting",
        "mood",
        "duration",
        "aspectRatio",
      ];
    case "veo3":
      return [
        "subject",
        "action",
        "setting",
        "style",
        "cameraMovement",
        "cameraAngle",
        "lighting",
        "mood",
        "duration",
        "aspectRatio",
        "dialogue",
        "soundEffects",
      ];
    case "nanobanana":
      return [
        "subject",
        "setting",
        "style",
        "lighting",
        "mood",
        "aspectRatio",
      ];
  }
}

// --- Prompt assembly ---

function labelFor(value: string, options: SelectOption[]): string {
  const opt = options.find((o) => o.value === value);
  return opt?.label ?? value;
}

export function assemblePrompt(tool: ToolId, fields: PromptFields): string {
  const parts: string[] = [];

  switch (tool) {
    case "runway": {
      // Natural language sentences
      if (fields.subject) {
        let sentence = fields.subject.trim();
        if (fields.action) {
          sentence += ` ${fields.action.trim()}`;
        }
        parts.push(sentence);
      }

      if (fields.setting) {
        parts.push(`The scene takes place in ${fields.setting.trim()}.`);
      }

      const styleParts: string[] = [];
      if (fields.style) styleParts.push(`${labelFor(fields.style, STYLE_OPTIONS)} style`);
      if (fields.lighting) styleParts.push(`${labelFor(fields.lighting, LIGHTING_OPTIONS).toLowerCase()} lighting`);
      if (fields.mood) styleParts.push(`${labelFor(fields.mood, MOOD_OPTIONS).toLowerCase()} atmosphere`);
      if (styleParts.length > 0) {
        parts.push(styleParts.join(", ") + ".");
      }

      const cameraParts: string[] = [];
      if (fields.cameraAngle) cameraParts.push(labelFor(fields.cameraAngle, CAMERA_ANGLE_OPTIONS).toLowerCase());
      if (fields.cameraMovement) cameraParts.push(`with a ${labelFor(fields.cameraMovement, CAMERA_MOVEMENT_OPTIONS).toLowerCase()}`);
      if (cameraParts.length > 0) {
        parts.push(`Camera: ${cameraParts.join(" ")}.`);
      }

      return parts.join(" ");
    }

    case "veo3": {
      // Front-load subject/action, then camera, then style, then audio
      if (fields.subject) {
        let sentence = fields.subject.trim();
        if (fields.action) {
          sentence += ` ${fields.action.trim()}`;
        }
        parts.push(sentence);
      }

      if (fields.setting) {
        parts.push(`Set in ${fields.setting.trim()}.`);
      }

      const cameraParts: string[] = [];
      if (fields.cameraAngle) cameraParts.push(labelFor(fields.cameraAngle, CAMERA_ANGLE_OPTIONS).toLowerCase());
      if (fields.cameraMovement) cameraParts.push(labelFor(fields.cameraMovement, CAMERA_MOVEMENT_OPTIONS).toLowerCase());
      if (cameraParts.length > 0) {
        parts.push(`Filmed in ${cameraParts.join(", ")}.`);
      }

      const styleParts: string[] = [];
      if (fields.style) styleParts.push(labelFor(fields.style, STYLE_OPTIONS).toLowerCase());
      if (fields.lighting) styleParts.push(`${labelFor(fields.lighting, LIGHTING_OPTIONS).toLowerCase()} lighting`);
      if (fields.mood) styleParts.push(`${labelFor(fields.mood, MOOD_OPTIONS).toLowerCase()} mood`);
      if (styleParts.length > 0) {
        parts.push(styleParts.join(", ") + ".");
      }

      if (fields.dialogue) {
        parts.push(`A voice says: "${fields.dialogue.trim()}"`);
      }

      if (fields.soundEffects) {
        parts.push(`Sound: ${fields.soundEffects.trim()}.`);
      }

      return parts.join(" ");
    }

    case "nanobanana": {
      // Concise descriptive prompt
      const descParts: string[] = [];
      if (fields.subject) descParts.push(fields.subject.trim());
      if (fields.setting) descParts.push(`in ${fields.setting.trim()}`);
      if (descParts.length > 0) parts.push(descParts.join(" "));

      const qualifiers: string[] = [];
      if (fields.style) qualifiers.push(`${labelFor(fields.style, STYLE_OPTIONS).toLowerCase()} style`);
      if (fields.lighting) qualifiers.push(`${labelFor(fields.lighting, LIGHTING_OPTIONS).toLowerCase()} lighting`);
      if (fields.mood) qualifiers.push(`${labelFor(fields.mood, MOOD_OPTIONS).toLowerCase()} atmosphere`);
      if (qualifiers.length > 0) parts.push(qualifiers.join(", "));

      return parts.join(". ").replace(/\.\./g, ".").trim();
    }
  }
}

// --- Best practices tips ---

export interface ToolTips {
  dos: string[];
  donts: string[];
}

export const TOOL_TIPS: Record<ToolId, ToolTips> = {
  runway: {
    dos: [
      "Use natural language descriptions, not comma-separated keywords",
      "Describe motion and movement explicitly (e.g., 'slowly walks toward the camera')",
      "Specify camera movements in plain English",
      "Include details about lighting and atmosphere",
      "Keep prompts to 2-4 clear sentences",
    ],
    donts: [
      "Don't use negative prompts (Runway doesn't support them well)",
      "Don't overload with too many competing ideas",
      "Don't use technical jargon \u2014 describe what you want to see",
      "Don't forget to specify the aspect ratio for your use case",
    ],
  },
  veo3: {
    dos: [
      "Front-load the most important subject/action at the start",
      "Use present tense for all descriptions",
      "Keep prompts to 3-6 clear sentences",
      "Use quotes for dialogue \u2014 Veo 3 can generate speech",
      "Describe sound effects naturally for the audio layer",
      "Use filmic language (e.g., 'dolly in', 'close-up', 'tracking shot')",
    ],
    donts: [
      "Don't bury the subject in the middle of the prompt",
      "Don't use past tense or passive voice",
      "Don't include more than 2-3 speakers in dialogue",
      "Don't skip the visual description when adding audio",
    ],
  },
  nanobanana: {
    dos: [
      "Be descriptive and specific about what you want",
      "Specify the art style clearly (e.g., 'watercolor', 'photorealistic')",
      "Include details about composition and framing",
      "Iterate conversationally \u2014 refine in follow-up prompts",
      "Mention specific color palettes if important",
    ],
    donts: [
      "Don't write overly long prompts \u2014 keep it focused",
      "Don't use negative prompts (describe what you want, not what to avoid)",
      "Don't expect exact text rendering in images",
      "Don't forget to specify orientation/aspect ratio",
    ],
  },
};
