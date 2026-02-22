'use client';

import { useState, type ComponentPropsWithoutRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface TeamGuideProps {
  title: string;
  description: string;
  content: string;
}

const markdownComponents = {
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-base font-semibold text-foreground mt-6 mb-3 border-b border-border/50 pb-2" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-sm font-semibold text-foreground mt-4 mb-2" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-sm font-semibold text-foreground mt-3 mb-1.5" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-sm text-muted-foreground leading-relaxed mb-3" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="text-foreground font-medium" {...props}>{children}</strong>
  ),
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-2 border-primary/30 pl-4 my-3 text-sm text-muted-foreground" {...props}>
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc ml-4 space-y-1 mb-3 text-sm text-muted-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal ml-4 space-y-1 mb-3 text-sm text-muted-foreground" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-sm text-muted-foreground" {...props}>{children}</li>
  ),
  table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto my-3">
      <table className="w-full text-sm border-collapse" {...props}>{children}</table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<'thead'>) => (
    <thead {...props}>{children}</thead>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
    <th className="text-left py-2 pr-4 font-medium text-foreground border-b border-border" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
    <td className="py-2 pr-4 border-b border-border/50 text-muted-foreground" {...props}>
      {children}
    </td>
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="border-border/50 my-4" {...props} />
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => (
    <code className="bg-muted rounded px-1.5 py-0.5 text-xs font-mono" {...props}>
      {children}
    </code>
  ),
  a: ({ children, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a className="text-primary hover:underline" {...props}>{children}</a>
  ),
};

export function TeamGuide({ title, description, content }: TeamGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Strip the markdown title and subtitle since we show them in the card header
  const bodyContent = content
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('# Research & Insights')) return false;
      if (trimmed.startsWith('## ') && trimmed.includes('Guide')) return false;
      return true;
    })
    .join('\n')
    .replace(/^[\s-]*\n/, '');

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="text-xs">Guide</Badge>
              </div>
              <CardTitle className="text-xl leading-tight">{title}</CardTitle>
              <CardDescription className="mt-1.5">{description}</CardDescription>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5 shrink-0">
                {isOpen ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    <span className="hidden sm:inline">Close Guide</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    <span className="hidden sm:inline">Read Guide</span>
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>

        <CollapsibleContent>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardContent className="pt-0">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {bodyContent}
                  </ReactMarkdown>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
