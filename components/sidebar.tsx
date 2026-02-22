'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { teams } from '@/lib/prompts';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  Star,
  Puzzle,
  Menu,
  X,
  BookOpen,
  Lightbulb,
  Wand2,
  Users,
  Video,
  Layers
} from 'lucide-react';
import { teamIcons } from '@/lib/constants';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex h-20 items-center justify-between px-4 border-b border-sidebar-border tartan-dark">
        {!collapsed && (
          <Link href="/" className="font-black text-3xl tracking-tight text-white truncate">
            Mother
          </Link>
        )}
        {/* Desktop collapse button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 hidden md:flex text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
        {/* Mobile close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(false)}
          className="h-8 w-8 md:hidden text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
          aria-label="Close menu"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 overflow-hidden px-2 py-4">
        <nav className="space-y-1">
          {/* Main Links */}
          <NavLink href="/" icon={<Home className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/'}>
            Home
          </NavLink>
          <NavLink href="/search" icon={<Search className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/search'}>
            Search
          </NavLink>
          <NavLink href="/favorites" icon={<Star className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/favorites'}>
            Favorites
          </NavLink>
          <NavLink href="/guides" icon={<BookOpen className="h-4 w-4" />} collapsed={collapsed} active={pathname.startsWith('/guides')}>
            Guides
          </NavLink>
          <NavLink href="/tips" icon={<Lightbulb className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/tips'}>
            Expert Tips
          </NavLink>
          <NavLink href="/prompt-generator" icon={<Video className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/prompt-generator'}>
            Prompt Generator
          </NavLink>
          <NavLink href="/catalogue" icon={<Layers className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/catalogue'}>
            Full Catalogue
          </NavLink>
          <NavLink href="/plugins" icon={<Puzzle className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/plugins'}>
            Cowork Plugins
          </NavLink>
          <NavLink href="/skill-builder" icon={<Wand2 className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/skill-builder'}>
            Skill Builder
          </NavLink>
          <NavLink href="/community-skills" icon={<Users className="h-4 w-4" />} collapsed={collapsed} active={pathname === '/community-skills'}>
            Community Skills
          </NavLink>

          {/* Separator */}
          <div className="my-4 h-px bg-sidebar-border" />

          {/* Teams */}
          {!collapsed && (
            <div className="mb-2 px-2 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
              Departments
            </div>
          )}
          {teams.map(team => (
            <NavLink
              key={team.slug}
              href={`/team/${team.slug}`}
              icon={<span className="text-[10px] font-bold uppercase w-5 h-5 flex items-center justify-center rounded bg-sidebar-accent text-sidebar-foreground" aria-label={team.name}>{teamIcons[team.slug] || ''}</span>}
              collapsed={collapsed}
              active={pathname === `/team/${team.slug}`}
            >
              {team.name.replace(' Team', '')}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/50">
            {teams.reduce((acc, t) => acc + t.solutionCount, 0)} tools across {teams.length} departments
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile menu button - fixed in header area */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 h-10 w-10 md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar (drawer) */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-72 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 hidden md:block",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  collapsed: boolean;
  active: boolean;
}

function NavLink({ href, icon, children, collapsed, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition-colors duration-150",
        active
          ? "text-white font-semibold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-white before:rounded-full"
          : "text-sidebar-foreground/60 hover:text-white",
        collapsed && "justify-center px-2"
      )}
    >
      {icon}
      {!collapsed && <span className="truncate">{children}</span>}
    </Link>
  );
}
