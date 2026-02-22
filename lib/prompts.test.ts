import { describe, it, expect } from 'vitest';
import { teams, prompts, getTeamBySlug, getPromptsByTeam, searchPrompts } from './prompts';

describe('teams', () => {
  it('has 11 teams', () => {
    expect(teams).toHaveLength(11);
  });

  it('each team has required fields', () => {
    for (const team of teams) {
      expect(team.slug).toBeTruthy();
      expect(team.name).toBeTruthy();
      expect(team.solutionCount).toBeGreaterThan(0);
    }
  });

  it('has unique slugs', () => {
    const slugs = teams.map(t => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('prompts', () => {
  it('has prompts for every team', () => {
    for (const team of teams) {
      const teamPrompts = prompts.filter(p => p.teamSlug === team.slug);
      expect(teamPrompts.length).toBeGreaterThan(0);
    }
  });

  it('each prompt has required fields', () => {
    for (const p of prompts) {
      expect(p.id).toBeTruthy();
      expect(p.teamSlug).toBeTruthy();
      expect(p.teamName).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.prompt).toBeTruthy();
      expect(Array.isArray(p.knowledgeToUpload)).toBe(true);
    }
  });

  it('has unique IDs', () => {
    const ids = prompts.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('getTeamBySlug', () => {
  it('returns team for valid slug', () => {
    const team = getTeamBySlug('creative');
    expect(team).toBeDefined();
    expect(team!.name).toBe('Creative');
  });

  it('returns undefined for invalid slug', () => {
    expect(getTeamBySlug('nonexistent')).toBeUndefined();
  });
});

describe('getPromptsByTeam', () => {
  it('returns prompts for a valid team', () => {
    const result = getPromptsByTeam('creative');
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(p => p.teamSlug === 'creative')).toBe(true);
  });

  it('returns empty array for invalid team', () => {
    expect(getPromptsByTeam('nonexistent')).toEqual([]);
  });
});

describe('searchPrompts', () => {
  it('finds prompts by name', () => {
    const result = searchPrompts('Campaign Concept');
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name).toContain('Campaign Concept');
  });

  it('finds prompts by team name', () => {
    const result = searchPrompts('Creative');
    expect(result.length).toBeGreaterThan(0);
  });

  it('returns empty for gibberish', () => {
    expect(searchPrompts('xyzzy999qqq')).toEqual([]);
  });

  it('is case-insensitive', () => {
    const upper = searchPrompts('CREATIVE');
    const lower = searchPrompts('creative');
    expect(upper).toEqual(lower);
  });
});
