import Fuse from 'fuse.js';
import { prompts } from '@/lib/prompts';

export const promptSearch = new Fuse(prompts, {
  keys: [
    { name: 'name', weight: 2 },
    { name: 'description', weight: 1.5 },
    { name: 'teamName', weight: 1 },
    { name: 'prompt', weight: 0.5 },
  ],
  threshold: 0.4,
  includeScore: true,
});
