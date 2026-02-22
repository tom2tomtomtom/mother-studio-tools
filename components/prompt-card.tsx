'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useFavorites } from '@/hooks/use-favorites';
import { useRecentlyUsed } from '@/hooks/use-recently-used';
import { useAnalytics } from '@/hooks/use-analytics';
import {
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Star,
  ExternalLink,
  BookOpen,
  Monitor,
  Sparkles,
  FileText
} from 'lucide-react';
import type { Prompt } from '@/lib/prompts';

// Map prompt IDs to skill ZIP files
const skillFiles: Record<string, string> = {
  // Existing skills (corrected IDs)
  'creative-4': 'creative-review.zip',       // Creative Review & Feedback
  'copywriting-3': 'copywriting.zip',         // Tone of Voice Developer
  'newbusiness-4': 'content-transformer.zip',  // Case Study Writer
  'account-1': 'executive-comms.zip',          // Client Presentation Builder
  'ops-1': 'process-docs.zip',                // Process Documentation
  'pm-4': 'qa-testing.zip',                   // Risk Assessment
  'pm-2': 'stakeholder-update.zip',           // Project Scope Document
  // New skills
  'strategy-1': 'brand-positioning.zip',       // Brand Positioning Workshop
  'account-6': 'client-management.zip',        // Client Relationship Health Check
  'production-1': 'production-specs.zip',      // Production Spec Writer
  'design-3': 'design-critique.zip',           // Design Critique
  'digital-5': 'digital-analytics.zip',        // Analytics & Reporting
};

// Tool badge styling
const toolBadgeConfig: Record<string, { variant: 'default' | 'secondary' | 'outline' | 'destructive'; icon: React.ReactNode }> = {
  'Claude Project': { variant: 'secondary', icon: <FileText className="h-3 w-3 mr-1" /> },
  'Claude Skill': { variant: 'default', icon: <Sparkles className="h-3 w-3 mr-1" /> },
  'Claude Cowork': { variant: 'outline', icon: <Monitor className="h-3 w-3 mr-1" /> },
};

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addRecentlyUsed } = useRecentlyUsed();
  const { track } = useAnalytics();
  const favorited = isFavorite(prompt.id);

  const handleCopy = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    addRecentlyUsed(prompt.id);
    track({ type: 'prompt_copy', promptId: prompt.id, teamSlug: prompt.teamSlug });
    toast.success('Copied to clipboard', {
      description: prompt.name,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = useCallback(() => {
    toggleFavorite(prompt.id);
    track({ type: 'favorite_toggle', promptId: prompt.id, favorited: !favorited });
  }, [toggleFavorite, track, prompt.id, favorited]);

  const claudeUrl = useMemo(
    () => `https://claude.ai/new?q=${encodeURIComponent(prompt.prompt.slice(0, 4000))}`,
    [prompt.prompt]
  );

  return (
    <Card
      id={prompt.id}
      className="group transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 scroll-mt-20 border-border/50 rounded-xl overflow-hidden"
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg leading-tight">
                {prompt.name}
              </CardTitle>
              {prompt.description && (
                <CardDescription className="mt-1.5 line-clamp-2">
                  {prompt.description}
                </CardDescription>
              )}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleFavorite}
                aria-label={favorited ? `Remove ${prompt.name} from favorites` : `Add ${prompt.name} to favorites`}
              >
                <Star
                  className={`h-4 w-4 transition-colors ${
                    favorited ? 'fill-yellow-400 text-yellow-400' : ''
                  }`}
                />
              </Button>
              {/* Quick copy button - always visible */}
              {prompt.toolRecommendation === 'Claude Skill' && skillFiles[prompt.id] ? (
                <Button
                  variant={copied ? "default" : "secondary"}
                  size="sm"
                  className="gap-1.5 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    const slug = skillFiles[prompt.id].replace('.zip', '');
                    navigator.clipboard.writeText(`Use the ${slug} skill`);
                    setCopied(true);
                    toast.success('Copied skill invocation', { description: `Use the ${slug} skill`, duration: 2000 });
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  aria-label={copied ? `Copied ${prompt.name} invocation` : `Copy ${prompt.name} skill invocation`}
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Copy Skill</span>
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  variant={copied ? "default" : "secondary"}
                  size="sm"
                  className="gap-1.5 h-8"
                  onClick={handleCopy}
                  aria-label={copied ? `Copied ${prompt.name}` : `Copy ${prompt.name} to clipboard`}
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </Button>
              )}
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1 h-8" aria-label={isOpen ? `Collapse ${prompt.name} details` : `Expand ${prompt.name} details`}>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">{isOpen ? 'Less' : 'More'}</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant={toolBadgeConfig[prompt.toolRecommendation]?.variant || 'secondary'} className="flex items-center">
              {toolBadgeConfig[prompt.toolRecommendation]?.icon}
              {prompt.toolRecommendation}
            </Badge>
            {prompt.knowledgeToUpload.length > 0 && (
              <Badge variant="outline" className="gap-1">
                <BookOpen className="h-3 w-3" />
                {prompt.knowledgeToUpload.length} {prompt.knowledgeToUpload.length === 1 ? 'file suggested' : 'files suggested'}
              </Badge>
            )}
            {prompt.toolRecommendation === 'Claude Cowork' && (
              <Badge variant="outline" className="text-xs">
                Requires Claude Desktop app
              </Badge>
            )}
          </div>

          {/* Prompt Preview - shown when collapsed */}
          {!isOpen && (
            prompt.toolRecommendation === 'Claude Skill' && skillFiles[prompt.id] ? (
              <div className="mt-3 text-xs text-muted-foreground font-mono bg-muted/50 rounded px-2 py-1.5">
                {skillFiles[prompt.id].replace('.zip', '')}
              </div>
            ) : (
              <div className="mt-3 text-xs text-muted-foreground font-mono bg-muted/50 rounded px-2 py-1.5 line-clamp-2">
                {prompt.prompt.slice(0, 150)}{prompt.prompt.length > 150 ? '...' : ''}
              </div>
            )
          )}
        </CardHeader>

        <CollapsibleContent>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CardContent className="pt-0">
                  {/* Knowledge to Upload */}
                  {prompt.knowledgeToUpload.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Suggested uploads
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                        {prompt.knowledgeToUpload.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tool-specific notes */}
                  {prompt.toolRecommendation === 'Claude Skill' && skillFiles[prompt.id] && (
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Preloaded Skill:</strong> This skill is already in your Claude account. Just ask Claude to use it by name.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => {
                          const slug = skillFiles[prompt.id].replace('.zip', '');
                          navigator.clipboard.writeText(`Use the ${slug} skill`);
                          toast.success('Copied to clipboard');
                        }}
                      >
                        <Sparkles className="h-4 w-4" />
                        Copy Skill Invocation
                      </Button>
                    </div>
                  )}
                  {prompt.toolRecommendation === 'Claude Cowork' && (
                    <div className="mb-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Use with Claude Desktop:</strong> Open the Claude Desktop app on macOS, enable Cowork, and grant folder access. Install the Chrome extension for web capture and Gemini MCP for image generation.
                      </p>
                    </div>
                  )}
                  {/* Prompt Text & Action Buttons — hidden for skills */}
                  {prompt.toolRecommendation !== 'Claude Skill' && (
                    <div className="relative">
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto whitespace-pre-wrap">
                        {prompt.prompt}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button onClick={handleCopy} className="gap-2">
                          {copied ? (
                            <>
                              <Check className="h-4 w-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              Copy Prompt
                            </>
                          )}
                        </Button>
                        <Button variant="outline" asChild className="gap-2">
                          <a href={claudeUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Open in Claude
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
