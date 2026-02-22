'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Check } from 'lucide-react';
import { toast } from 'sonner';
import { CATEGORY_LABELS, type SkillCategory } from '@/lib/skill-prompt';

interface CommunitySkill {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  downloads: number;
  created_at: string;
}

export function CommunitySkillCard({ skill }: { skill: CommunitySkill }) {
  const [copied, setCopied] = useState(false);
  const categoryLabel = CATEGORY_LABELS[skill.category as SkillCategory] || skill.category;
  const date = new Date(skill.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const handleCopyInvocation = () => {
    navigator.clipboard.writeText(`Use the ${skill.slug} skill`);
    setCopied(true);
    toast.success('Copied skill invocation', { description: `Use the ${skill.slug} skill`, duration: 2000 });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">{skill.name}</CardTitle>
          <Badge variant="secondary" className="text-xs shrink-0">{categoryLabel}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{skill.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            {date}
          </div>
          <Button variant="outline" size="sm" onClick={handleCopyInvocation}>
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 mr-1.5" />
                Copied!
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Copy Invocation
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
