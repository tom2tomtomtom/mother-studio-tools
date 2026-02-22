'use client';

import { useState, useEffect } from 'react';
import { CommunitySkillCard } from '@/components/community-skill-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SKILL_CATEGORIES, CATEGORY_LABELS } from '@/lib/skill-prompt';
import { Loader2 } from 'lucide-react';

interface CommunitySkill {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  downloads: number;
  created_at: string;
}

export function CommunitySkillsList() {
  const [skills, setSkills] = useState<CommunitySkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== 'all') params.set('category', category);
    params.set('sort', sort);

    setLoading(true);
    fetch(`/api/skills/community?${params}`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setSkills(data);
      })
      .catch(() => setSkills([]))
      .finally(() => setLoading(false));
  }, [category, sort]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {SKILL_CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {CATEGORY_LABELS[cat]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="downloads">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : skills.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg font-medium">No community skills yet</p>
          <p className="text-sm mt-1">Be the first! Build a skill and publish it to the community.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <CommunitySkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}
