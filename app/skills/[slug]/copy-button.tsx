'use client';

import { Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export function CopyButtonClient({ slug }: { slug: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(`Use the ${slug} skill`);
        toast.success('Copied to clipboard');
      }}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#1A4A5C] font-medium text-sm hover:bg-white/90 active:scale-[0.98] transition-all cursor-pointer"
    >
      <Sparkles className="h-4 w-4" />
      Copy Skill Command
    </button>
  );
}
