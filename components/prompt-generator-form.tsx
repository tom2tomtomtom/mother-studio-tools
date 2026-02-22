'use client';

import { useState, useCallback, useMemo } from 'react';
import {
  Video,
  ImageIcon,
  Copy,
  Check,
  RotateCcw,
  ChevronDown,
  Lightbulb,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  type ToolId,
  type PromptFields,
  type SelectOption,
  TOOLS,
  STYLE_OPTIONS,
  CAMERA_MOVEMENT_OPTIONS,
  CAMERA_ANGLE_OPTIONS,
  LIGHTING_OPTIONS,
  MOOD_OPTIONS,
  DURATION_OPTIONS,
  ASPECT_RATIO_OPTIONS,
  EMPTY_FIELDS,
  getVisibleFields,
  TOOL_TIPS,
} from '@/lib/prompt-generator';

const TOOL_COLORS: Record<string, { border: string; bg: string; text: string }> = {
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    text: 'text-purple-600 dark:text-purple-400',
  },
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    text: 'text-blue-600 dark:text-blue-400',
  },
  amber: {
    border: 'border-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    text: 'text-amber-600 dark:text-amber-400',
  },
};

const FIELD_LABELS: Record<keyof PromptFields, string> = {
  subject: 'Subject',
  action: 'Action / Motion',
  setting: 'Setting / Environment',
  style: 'Style / Aesthetic',
  cameraMovement: 'Camera Movement',
  cameraAngle: 'Camera Angle',
  lighting: 'Lighting',
  mood: 'Mood / Atmosphere',
  duration: 'Duration',
  aspectRatio: 'Aspect Ratio',
  dialogue: 'Dialogue',
  soundEffects: 'Sound Effects',
};

const FIELD_PLACEHOLDERS: Record<keyof PromptFields, string> = {
  subject: 'A woman in a red dress standing on a rooftop...',
  action: 'slowly turns toward the camera with a confident smile...',
  setting: 'a modern city skyline at sunset with warm golden light...',
  style: '',
  cameraMovement: '',
  cameraAngle: '',
  lighting: '',
  mood: '',
  duration: '',
  aspectRatio: '',
  dialogue: 'Welcome to the future of creativity.',
  soundEffects: 'Soft ambient wind, distant city traffic, a heartbeat...',
};

function isTextareaField(field: keyof PromptFields): boolean {
  return ['subject', 'action', 'setting', 'dialogue', 'soundEffects'].includes(field);
}

function getSelectOptions(
  field: keyof PromptFields,
  tool: ToolId
): SelectOption[] | null {
  switch (field) {
    case 'style':
      return STYLE_OPTIONS;
    case 'cameraMovement':
      return CAMERA_MOVEMENT_OPTIONS;
    case 'cameraAngle':
      return CAMERA_ANGLE_OPTIONS;
    case 'lighting':
      return LIGHTING_OPTIONS;
    case 'mood':
      return MOOD_OPTIONS;
    case 'duration':
      return DURATION_OPTIONS[tool];
    case 'aspectRatio':
      return ASPECT_RATIO_OPTIONS[tool];
    default:
      return null;
  }
}

export function PromptGeneratorForm() {
  const [selectedTool, setSelectedTool] = useState<ToolId>('runway');
  const [fields, setFields] = useState<PromptFields>(EMPTY_FIELDS);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);

  const visibleFields = useMemo(
    () => getVisibleFields(selectedTool),
    [selectedTool]
  );

  const hasSubject = fields.subject.trim().length > 0;

  const updateField = useCallback(
    (field: keyof PromptFields, value: string) => {
      setFields((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleGenerate = useCallback(async () => {
    if (!hasSubject) return;

    setIsGenerating(true);
    setError('');

    try {
      const res = await fetch('/api/prompt-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: selectedTool, fields }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to generate prompt.');
        return;
      }

      setGeneratedPrompt(data.prompt);
    } catch {
      setError('Network error. Check your connection and try again.');
    } finally {
      setIsGenerating(false);
    }
  }, [selectedTool, fields, hasSubject]);

  const handleCopy = useCallback(async () => {
    if (!generatedPrompt) return;
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [generatedPrompt]);

  const handleClear = useCallback(() => {
    setFields(EMPTY_FIELDS);
    setGeneratedPrompt('');
    setError('');
  }, []);

  const handleToolChange = useCallback((toolId: ToolId) => {
    setSelectedTool(toolId);
    setFields(EMPTY_FIELDS);
    setGeneratedPrompt('');
    setError('');
  }, []);

  const tips = TOOL_TIPS[selectedTool];
  const toolMeta = TOOLS.find((t) => t.id === selectedTool)!;
  const colors = TOOL_COLORS[toolMeta.color];

  // Split fields into textareas (full-width) and selects (grid)
  const textareaFields = visibleFields.filter((f) => isTextareaField(f));
  const selectFields = visibleFields.filter(
    (f) => !isTextareaField(f) && getSelectOptions(f, selectedTool)
  );

  return (
    <div className="space-y-6">
      {/* Tool Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {TOOLS.map((tool) => {
          const tc = TOOL_COLORS[tool.color];
          const isSelected = selectedTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => handleToolChange(tool.id)}
              className={`relative flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all text-left ${
                isSelected
                  ? `${tc.border} ${tc.bg}`
                  : 'border-border hover:border-muted-foreground/30'
              }`}
            >
              <div className="flex items-center gap-2 w-full">
                {tool.type === 'Video' ? (
                  <Video
                    className={`h-5 w-5 ${isSelected ? tc.text : 'text-muted-foreground'}`}
                  />
                ) : (
                  <ImageIcon
                    className={`h-5 w-5 ${isSelected ? tc.text : 'text-muted-foreground'}`}
                  />
                )}
                <span
                  className={`text-sm font-semibold ${
                    isSelected ? 'text-foreground' : 'text-foreground/80'
                  }`}
                >
                  {tool.name}
                </span>
                <Badge
                  variant="outline"
                  className={`ml-auto text-[10px] ${isSelected ? tc.text : ''}`}
                >
                  {tool.type}
                </Badge>
              </div>
              <span className="text-xs text-muted-foreground">{tool.description}</span>
            </button>
          );
        })}
      </div>

      {/* Form Fields */}
      <Card>
        <CardContent className="space-y-4">
          {/* Textarea fields — full width */}
          {textareaFields.map((field) => (
            <div key={field} className="space-y-1.5">
              <Label htmlFor={field} className="text-xs font-medium text-muted-foreground">
                {FIELD_LABELS[field]}
              </Label>
              <Textarea
                id={field}
                value={fields[field]}
                onChange={(e) => updateField(field, e.target.value)}
                placeholder={FIELD_PLACEHOLDERS[field]}
                rows={2}
                className="resize-none"
              />
            </div>
          ))}

          {/* Select fields — 2-column grid */}
          {selectFields.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectFields.map((field) => {
                const options = getSelectOptions(field, selectedTool);
                if (!options || options.length === 0) return null;
                return (
                  <div key={field} className="space-y-1.5">
                    <Label
                      htmlFor={field}
                      className="text-xs font-medium text-muted-foreground"
                    >
                      {FIELD_LABELS[field]}
                    </Label>
                    <Select
                      value={fields[field]}
                      onValueChange={(val) =>
                        updateField(field, val === '__none__' ? '' : val)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={`Select ${FIELD_LABELS[field].toLowerCase()}`}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {options.map((opt) => (
                          <SelectItem
                            key={opt.value || '__none__'}
                            value={opt.value || '__none__'}
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
              })}
            </div>
          )}

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={!hasSubject || isGenerating}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate {toolMeta.name} Prompt
              </>
            )}
          </Button>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}
        </CardContent>
      </Card>

      {/* Generated Prompt Output */}
      {(generatedPrompt || isGenerating) && (
        <Card>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">
                Your {toolMeta.name} Prompt
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={handleClear}>
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Start Over
                </Button>
                <Button
                  size="sm"
                  onClick={handleCopy}
                  disabled={!generatedPrompt}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg border p-4 min-h-[100px] font-mono text-sm text-foreground whitespace-pre-wrap">
              {isGenerating ? (
                <span className="text-muted-foreground flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Crafting the perfect prompt...
                </span>
              ) : (
                generatedPrompt
              )}
            </div>
            {generatedPrompt && (
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {generatedPrompt.length} characters
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  Regenerate
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Best Practices Tips */}
      <Collapsible open={tipsOpen} onOpenChange={setTipsOpen}>
        <Card>
          <CardContent>
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Lightbulb className={`h-4 w-4 ${colors.text}`} />
                <span className="text-sm font-semibold text-foreground">
                  {toolMeta.name} Best Practices
                </span>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${
                  tipsOpen ? 'rotate-180' : ''
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                    Do
                  </span>
                  <ul className="space-y-1.5">
                    {tips.dos.map((tip, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-green-600 dark:text-green-400 mt-0.5 shrink-0">
                          +
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                    Don&apos;t
                  </span>
                  <ul className="space-y-1.5">
                    {tips.donts.map((tip, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-red-600 dark:text-red-400 mt-0.5 shrink-0">
                          -
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </CardContent>
        </Card>
      </Collapsible>
    </div>
  );
}
