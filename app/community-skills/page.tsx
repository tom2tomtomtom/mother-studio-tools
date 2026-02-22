import type { Metadata } from 'next';
import { CommunitySkillsList } from './community-skills-list';

export const metadata: Metadata = {
  title: 'Community Skills | Uncommon Studio AI Tools',
  description: 'Browse Claude Skills created by the community. All community skills are preloaded in your account.',
};

export default function CommunitySkillsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Community Skills</h1>
        <p className="text-muted-foreground text-lg">
          Browse Claude Skills created by the community. All community skills are preloaded in your account.
        </p>
      </div>
      <CommunitySkillsList />
    </div>
  );
}
