'use client';

import { Sparkles, Download, Lock } from 'lucide-react';
import { toast } from 'sonner';

export function SkillInfo({ name, slug, description, preloaded = true, locked = false }: { name: string; slug: string; description?: string; preloaded?: boolean; locked?: boolean }) {
  const handleCopy = () => {
    if (locked) return;
    navigator.clipboard.writeText(`Use the ${slug} skill`);
    toast.success('Copied to clipboard');
  };

  if (locked) {
    return (
      <div
        className="flex items-start gap-2 p-3 rounded-md border border-border/50 bg-muted/30 text-left w-full opacity-50 cursor-not-allowed select-none"
        title="Contact to unlock"
      >
        <Lock className="h-4 w-4 text-muted-foreground/60 mt-0.5 shrink-0" />
        <div className="min-w-0">
          <span className="text-sm font-medium text-muted-foreground">{name}</span>
          <p className="text-xs font-mono text-muted-foreground/50 mt-0.5">{slug}</p>
          {description && <p className="text-xs text-muted-foreground/50 mt-0.5">{description}</p>}
          <p className="text-xs text-muted-foreground/40 mt-1">Contact to unlock</p>
        </div>
      </div>
    );
  }

  if (!preloaded) {
    return (
      <a
        href={`/skills/${slug}.zip`}
        download
        className="flex items-start gap-2 p-3 rounded-md border hover:bg-muted hover:border-foreground/20 active:scale-[0.98] transition-all duration-200 text-left w-full group"
        title="Click to download skill ZIP"
      >
        <Download className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
        <div className="min-w-0">
          <span className="text-sm font-medium">{name}</span>
          <p className="text-xs font-mono text-foreground/50 mt-0.5">{slug}</p>
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
          <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to download skill ZIP</p>
        </div>
      </a>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-start gap-2 p-3 rounded-md border hover:bg-muted hover:border-foreground/20 active:scale-[0.98] transition-all duration-200 text-left w-full group"
      title="Click to copy, then paste in Claude"
    >
      <Sparkles className="h-4 w-4 text-foreground mt-0.5 shrink-0 group-hover:rotate-12 transition-transform" />
      <div className="min-w-0">
        <span className="text-sm font-medium">{name}</span>
        <p className="text-xs font-mono text-foreground/50 mt-0.5">{slug}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to copy, then paste in Claude</p>
      </div>
    </button>
  );
}
