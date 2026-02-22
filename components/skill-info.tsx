'use client';

import { Sparkles, Download, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export function SkillInfo({ name, slug, description, preloaded = true, locked = false }: { name: string; slug: string; description?: string; preloaded?: boolean; locked?: boolean }) {
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(`Use the ${slug} skill`);
    toast.success('Copied to clipboard');
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (locked) {
    return (
      <Link
        href={`/skills/${slug}`}
        className="flex items-start gap-2 p-3 rounded-md border border-border/50 bg-muted/30 text-left w-full hover:bg-muted/50 hover:border-foreground/10 transition-all duration-200 group"
      >
        <Lock className="h-4 w-4 text-muted-foreground/60 mt-0.5 shrink-0" />
        <div className="min-w-0 flex-1">
          <span className="text-sm font-medium text-muted-foreground">{name}</span>
          {description && <p className="text-xs text-muted-foreground/50 mt-0.5 leading-relaxed">{description}</p>}
          <p className="text-xs text-muted-foreground/40 mt-1.5">Contact to unlock</p>
        </div>
        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  }

  return (
    <Link
      href={`/skills/${slug}`}
      className="flex items-start gap-2 p-3 rounded-md border hover:bg-muted hover:border-foreground/20 active:scale-[0.98] transition-all duration-200 text-left w-full group"
    >
      {preloaded ? (
        <Sparkles className="h-4 w-4 text-foreground mt-0.5 shrink-0 group-hover:rotate-12 transition-transform" />
      ) : (
        <Download className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
      )}
      <div className="min-w-0 flex-1">
        <span className="text-sm font-medium">{name}</span>
        {description && <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>}
      </div>
      {preloaded ? (
        <button
          onClick={handleCopy}
          className="shrink-0 mt-0.5 p-1 rounded hover:bg-foreground/10 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Copy skill command"
        >
          <Sparkles className="h-3.5 w-3.5 text-foreground" />
        </button>
      ) : (
        <a
          href={`/skills/${slug}.zip`}
          download
          onClick={handleDownload}
          className="shrink-0 mt-0.5 p-1 rounded hover:bg-foreground/10 transition-colors opacity-0 group-hover:opacity-100"
          title="Download skill ZIP"
        >
          <Download className="h-3.5 w-3.5 text-muted-foreground" />
        </a>
      )}
    </Link>
  );
}
