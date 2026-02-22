'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SkillPreview } from '@/components/skill-preview';
import { SKILL_CATEGORIES, CATEGORY_LABELS, type SkillCategory } from '@/lib/skill-prompt';
import { toast } from 'sonner';
import { Sparkles, Download, Upload, Copy, RotateCcw, Loader2, Square } from 'lucide-react';
import JSZip from 'jszip';

type Step = 'describe' | 'generating' | 'preview';

/** Convert a name to valid skill name: lowercase, hyphens, no leading/trailing/consecutive hyphens */
function toSkillName(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 64);
}

/** Strip code fences, preamble, invalid keys, and fix name format so content is a valid SKILL.md */
function cleanSkillContent(raw: string): string {
  let text = raw.trim();
  // Remove wrapping code fences
  text = text.replace(/^```[\w]*\n?/, '').replace(/\n?```\s*$/, '').trim();
  // Strip preamble before first ---
  const fmIndex = text.indexOf('---');
  if (fmIndex > 0) {
    text = text.slice(fmIndex);
  }
  // Remove invalid frontmatter keys (only name, description, license, allowed-tools, compatibility, metadata are valid)
  text = text.replace(/^(category|type|tags|version|author):.*\n?/gm, '');
  // Fix name field: must be lowercase-hyphenated
  text = text.replace(/^(name:\s*)(.+)$/m, (_match, prefix, value) => {
    return prefix + toSkillName(value.trim());
  });
  return text.trim();
}

export function SkillBuilderForm() {
  const [step, setStep] = useState<Step>('describe');
  const [taskDescription, setTaskDescription] = useState('');
  const [category, setCategory] = useState<SkillCategory | ''>('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const handleGenerate = useCallback(async () => {
    if (taskDescription.trim().length < 10) {
      toast.error('Please describe your task in at least 10 characters.');
      return;
    }

    setStep('generating');
    setGeneratedContent('');

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch('/api/skills/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskDescription: taskDescription.trim(),
          ...(category ? { category } : {}),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Generation failed');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response stream');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') continue;

          try {
            const event = JSON.parse(data);
            if (event.text) {
              setGeneratedContent((prev) => prev + event.text);
            }
          } catch {
            // Skip malformed events
          }
        }
      }

      setGeneratedContent((prev) => cleanSkillContent(prev));
      setStep('preview');
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        setStep('describe');
        return;
      }
      toast.error(error instanceof Error ? error.message : 'Generation failed. Try again.');
      setStep('describe');
    } finally {
      abortRef.current = null;
    }
  }, [taskDescription, category]);

  const handleCancel = () => {
    abortRef.current?.abort();
    setStep('describe');
  };

  const handleDownload = async () => {
    if (!generatedContent) return;

    // name field is already a valid slug (lowercase-hyphenated) after cleanup
    const nameMatch = generatedContent.match(/^name:\s*(.+)$/m);
    const skillName = nameMatch?.[1]?.trim() || 'custom-skill';
    // Folder name in zip must match the name field exactly
    const folderName = toSkillName(skillName);

    const zip = new JSZip();
    const folder = zip.folder(folderName)!;
    folder.file('SKILL.md', generatedContent, {
      unixPermissions: '644',
    });

    const blob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
      platform: 'UNIX',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${folderName}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Skill downloaded! Upload it in Claude.ai → Settings → Capabilities.');
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedContent);
    toast.success('Copied to clipboard.');
  };

  const handlePublish = async () => {
    if (!generatedContent) return;

    setIsPublishing(true);
    try {
      const response = await fetch('/api/skills/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: generatedContent, ...(category ? { category } : {}) }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Publish failed');
      }

      toast.success(`Published "${data.name}" to the community library!`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Publish failed. Try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleRegenerate = () => {
    setStep('describe');
    setGeneratedContent('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Step indicator */}
      <div className="flex items-center gap-2 text-sm">
        <Badge variant={step === 'describe' ? 'default' : 'secondary'}>1. Describe</Badge>
        <span className="text-muted-foreground">&rarr;</span>
        <Badge variant={step === 'generating' ? 'default' : 'secondary'}>2. Generate</Badge>
        <span className="text-muted-foreground">&rarr;</span>
        <Badge variant={step === 'preview' ? 'default' : 'secondary'}>3. Preview & Download</Badge>
      </div>

      {/* Step 1: Describe */}
      {step === 'describe' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Describe Your Skill
            </CardTitle>
            <CardDescription>
              Tell us what task you want to automate. Be specific about the process, who it&apos;s for, and what the output should look like.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder={"Example: Create a skill that helps account managers write quarterly business reviews. It should analyze campaign performance data, identify wins and areas for improvement, and produce a client-ready presentation outline with executive summary, results vs KPIs, insights, and next quarter recommendations."}
              className="min-h-[160px]"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium mb-1.5 block">Category (optional)</label>
                <Select value={category} onValueChange={(v) => setCategory(v as SkillCategory)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Auto-detect" />
                  </SelectTrigger>
                  <SelectContent>
                    {SKILL_CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {CATEGORY_LABELS[cat]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleGenerate}
                  disabled={taskDescription.trim().length < 10}
                  className="w-full sm:w-auto"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Skill
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Generating */}
      {step === 'generating' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
              Generating Your Skill...
            </CardTitle>
            <CardDescription>
              Claude is researching best practices and building your skill. This usually takes 15-30 seconds.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-card p-4 max-h-[400px] overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm font-mono">{generatedContent || 'Starting generation...'}</pre>
            </div>
            <Button variant="outline" onClick={handleCancel}>
              <Square className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Preview & Actions */}
      {step === 'preview' && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Your Generated Skill</CardTitle>
              <CardDescription>
                Review and edit the skill below, then download or publish it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SkillPreview
                content={generatedContent}
                onChange={setGeneratedContent}
              />
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3">
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download .zip
            </Button>
            <Button variant="outline" onClick={handlePublish} disabled={isPublishing}>
              {isPublishing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
              Publish to Community
            </Button>
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="h-4 w-4 mr-2" />
              Copy to Clipboard
            </Button>
            <Button variant="ghost" onClick={handleRegenerate}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Start Over
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
