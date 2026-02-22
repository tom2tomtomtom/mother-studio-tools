import { Metadata } from 'next';
import { PromptGeneratorForm } from '@/components/prompt-generator-form';

export const metadata: Metadata = {
  title: 'Prompt Generator | Uncommon Studio',
  description:
    'Build optimized prompts for Runway Gen-4, Google Veo 3, and Nano Banana',
};

export default function PromptGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Prompt Generator
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Build optimized prompts for Runway, Veo 3, and Nano Banana
        </p>
      </div>
      <PromptGeneratorForm />
    </div>
  );
}
