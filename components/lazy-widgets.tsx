'use client';

import dynamic from 'next/dynamic';
import { Search } from 'lucide-react';

const CommandMenu = dynamic(() => import('@/components/command-menu').then(mod => mod.CommandMenu).catch(() => () => null), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted rounded-lg w-full md:w-64">
      <Search className="h-4 w-4" />
      <span className="flex-1 text-left">Search prompts...</span>
      <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  ),
});

const ChatWidget = dynamic(() => import('@/components/chat-widget').then(mod => mod.ChatWidget).catch(() => () => null), {
  ssr: false,
});

export function LazyCommandMenu() {
  return <CommandMenu />;
}

export function LazyChatWidget() {
  return <ChatWidget />;
}
