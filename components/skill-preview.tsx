'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

interface SkillPreviewProps {
  content: string;
  onChange: (content: string) => void;
}

function renderMarkdown(md: string): string {
  // Strip frontmatter for preview
  const withoutFm = md.replace(/^---\n[\s\S]*?\n---\n?/, '');

  return withoutFm
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-4 mb-1">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-lg font-bold mt-6 mb-2 text-primary">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mb-3">$1</h1>')
    .replace(/^- \[ \] (.+)$/gm, '<div class="flex items-start gap-2 ml-2"><span class="mt-1 h-4 w-4 border rounded flex-shrink-0"></span><span class="text-sm">$1</span></div>')
    .replace(/^- (.+)$/gm, '<li class="text-sm ml-4 list-disc">$1</li>')
    .replace(/^\d+\.\s+\*\*(.+?)\*\*\s*[-—]\s*(.+)$/gm, '<div class="text-sm ml-4 mb-1"><strong>$1</strong> — $2</div>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/```[\s\S]*?```/g, (match) => {
      const code = match.replace(/```\w*\n?/, '').replace(/\n?```$/, '');
      return `<pre class="bg-muted p-3 rounded-lg text-xs overflow-x-auto my-2"><code>${code}</code></pre>`;
    });
}

export function SkillPreview({ content, onChange }: SkillPreviewProps) {
  const [activeTab, setActiveTab] = useState('preview');

  // Extract name and description from frontmatter
  const nameMatch = content.match(/^name:\s*(.+)$/m);
  const descMatch = content.match(/^description:\s*(.+)$/m);
  const name = nameMatch?.[1]?.trim();
  const description = descMatch?.[1]?.trim();

  return (
    <div className="space-y-4">
      {name && (
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="edit">Edit</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4">
          <div
            className="prose prose-sm max-w-none rounded-lg border bg-card p-6 max-h-[500px] overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />
        </TabsContent>

        <TabsContent value="edit" className="mt-4">
          <Textarea
            value={content}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[500px] font-mono text-sm"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
