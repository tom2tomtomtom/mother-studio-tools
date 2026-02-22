'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { teams } from '@/lib/prompts';
import { promptSearch } from '@/lib/search';
import { useAnalytics } from '@/hooks/use-analytics';
import { Search, Star, FileText, Users, Video } from 'lucide-react';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const router = useRouter();
  const { track } = useAnalytics();
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => clearTimeout(debounceRef.current);
  }, []);

  const results = debouncedQuery.length > 1 ? promptSearch.search(debouncedQuery).slice(0, 10) : [];

  const handleSelect = useCallback((path: string) => {
    setOpen(false);
    setQuery('');
    setDebouncedQuery('');
    router.push(path);
  }, [router]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedQuery(value);
      if (value.length > 2) {
        track({ type: 'search', query: value, resultCount: promptSearch.search(value).length });
      }
    }, 150);
  }, [track]);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Search prompts and departments (Cmd+K)"
        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted rounded-lg hover:bg-accent transition-colors w-full md:w-64"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search prompts...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search prompts, departments..."
          value={query}
          onValueChange={handleSearch}
        />
        <CommandList>
          <CommandEmpty>No matching prompts or departments. Try a different search term.</CommandEmpty>

          {/* Quick Links */}
          {debouncedQuery.length < 2 && query.length < 2 && (
            <>
              <CommandGroup heading="Quick Links">
                <CommandItem onSelect={() => handleSelect('/')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Home
                </CommandItem>
                <CommandItem onSelect={() => handleSelect('/search')}>
                  <Search className="mr-2 h-4 w-4" />
                  Browse All Prompts
                </CommandItem>
                <CommandItem onSelect={() => handleSelect('/favorites')}>
                  <Star className="mr-2 h-4 w-4" />
                  Favorites
                </CommandItem>
                <CommandItem onSelect={() => handleSelect('/prompt-generator')}>
                  <Video className="mr-2 h-4 w-4" />
                  Prompt Generator
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Departments">
                {teams.map(team => (
                  <CommandItem key={team.slug} onSelect={() => handleSelect(`/team/${team.slug}`)}>
                    <Users className="mr-2 h-4 w-4" />
                    {team.name}
                    <span className="ml-auto text-xs text-muted-foreground">
                      {team.solutionCount} tools
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {/* Search Results */}
          {results.length > 0 && (
            <CommandGroup heading="Prompts">
              {results.map(({ item }) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelect(`/team/${item.teamSlug}#${item.id}`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.teamName}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
