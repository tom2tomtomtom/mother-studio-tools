'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ComponentPropsWithoutRef } from 'react';

const components = {
  h1: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-2xl font-bold mt-8 mb-3 tracking-tight text-foreground" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-xl font-bold mt-8 mb-3 tracking-tight text-foreground border-b border-border/50 pb-2" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-lg font-semibold mt-6 mb-2 text-foreground" {...props}>{children}</h3>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-base font-semibold mt-4 mb-1.5 text-foreground" {...props}>{children}</h4>
  ),
  p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-base text-muted-foreground leading-relaxed mb-4" {...props}>{children}</p>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="text-foreground font-semibold" {...props}>{children}</strong>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc pl-6 space-y-1 mb-4 text-muted-foreground" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal pl-6 space-y-1 mb-4 text-muted-foreground" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-base text-muted-foreground" {...props}>{children}</li>
  ),
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-[#1A4A5C] pl-4 italic text-muted-foreground my-4" {...props}>{children}</blockquote>
  ),
  code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const isBlock = className?.includes('language-');
    if (isBlock) {
      return <code className={className} {...props}>{children}</code>;
    }
    return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>;
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre className="bg-[#1A1A2E] text-white/80 p-4 rounded-md overflow-x-auto mb-4 text-sm" {...props}>{children}</pre>
  ),
  table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm" {...props}>{children}</table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<'thead'>) => (
    <thead {...props}>{children}</thead>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
    <th className="text-left font-semibold pb-2 border-b text-foreground pr-4" {...props}>{children}</th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
    <td className="py-2 border-b border-border/30 text-muted-foreground pr-4" {...props}>{children}</td>
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-border/30" {...props} />
  ),
  a: ({ children, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a className="text-[#1A4A5C] hover:underline font-medium" {...props}>{children}</a>
  ),
  input: ({ ...props }: ComponentPropsWithoutRef<'input'>) => (
    <input {...props} className="mr-2 accent-[#1A4A5C]" disabled />
  ),
};

export function SkillMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
