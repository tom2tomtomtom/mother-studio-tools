import type { Metadata } from 'next';
import { SkillBuilderForm } from '@/components/skill-builder-form';

export const metadata: Metadata = {
  title: 'Skill Builder | Uncommon Studio AI Tools',
  description: 'Describe a task and AI will generate an expert-level Claude Skill for you.',
};

export default function SkillBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Skill Builder</h1>
        <p className="text-muted-foreground text-lg">
          Describe any task and AI will research best practices, then generate a professional Claude Skill you can download and install.
        </p>
      </div>
      <SkillBuilderForm />
    </div>
  );
}
