export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Puzzle,
  Lightbulb,
  Download,
  Slash,
  Settings,
  FileCode,
  FolderOpen,
  Plus,
  AlertTriangle
} from 'lucide-react';

export default function CoworkPluginsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Cowork Plugins</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">20 min</Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-purple-500/30">macOS Only</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
            <Puzzle className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Cowork Plugins</h1>
            <p className="text-muted-foreground">Transform Claude into a specialized employee with role-based skill bundles</p>
          </div>
        </div>
      </div>

      {/* Concept */}
      <Card className="bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">Plugins vs Connectors</p>
              <p className="text-muted-foreground mt-1">
                While <strong>MCP Connectors</strong> give Claude access to tools (like reading a database),
                <strong> Plugins</strong> give Claude a <em>job description</em>. If MCP is the hammer,
                a Plugin is the carpenter who knows exactly how to use it.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What's in a Plugin */}
      <Card>
        <CardHeader>
          <CardTitle>What's in a Cowork Plugin?</CardTitle>
          <CardDescription>
            A pre-packaged bundle containing everything Claude needs for a specific role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Skills</p>
              <p className="text-xs text-muted-foreground">Domain knowledge (e.g., "How to qualify a sales lead")</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Commands</p>
              <p className="text-xs text-muted-foreground">Slash commands (e.g., /sales:prep-call)</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Sub-agents</p>
              <p className="text-xs text-muted-foreground">Specialized agents for parts of a task</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Connectors</p>
              <p className="text-xs text-muted-foreground">Links to external tools like HubSpot or Jira</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            How to Install Plugins
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <p className="text-sm">Open Claude Desktop and navigate to the <strong>Cowork</strong> tab</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <p className="text-sm">Click <strong>"Plugins"</strong> in the left sidebar</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <p className="text-sm">Browse the library of Anthropic-built plugins</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <p className="text-sm">Click <strong>Install</strong> — the plugin downloads locally to your machine</p>
            </li>
          </ol>

          <div>
            <p className="font-medium mb-2">Available Plugin Roles</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-2 rounded border text-sm"><strong>Sales</strong> — Research prospects, draft deal memos</div>
              <div className="p-2 rounded border text-sm"><strong>Finance</strong> — Analyze variances, build models</div>
              <div className="p-2 rounded border text-sm"><strong>Legal</strong> — Review contracts, track compliance</div>
              <div className="p-2 rounded border text-sm"><strong>Productivity</strong> — Manage calendars and tasks</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Using Plugins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Slash className="h-5 w-5 text-primary" />
            Using Plugins (Slash Commands)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Once installed, Plugins add specific "verbs" to Claude's vocabulary.
            You don't need to write long prompts to invoke them.
          </p>
          <div>
            <p className="font-medium mb-2">How to Trigger</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Type <code className="bg-muted px-1 rounded">/</code> in the Cowork input bar to see available commands</li>
              <li>Or click the <strong>"+"</strong> button to browse commands</li>
            </ul>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">
              <strong>Example:</strong> Instead of typing "Please look up this company and tell me about them,"
              use <code className="bg-background px-1 rounded">/sales:research [Company Name]</code>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Customization Method 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Customizing: No-Code Method
          </CardTitle>
          <CardDescription>
            Adapt plugin behavior without touching code files
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <p className="text-sm">Go to <strong>Plugins</strong> sidebar and select your installed plugin</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <p className="text-sm">Click the <strong>"Customize"</strong> button (upper right corner)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <p className="text-sm">A Cowork session opens where you can edit the plugin itself</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <p className="text-sm">Tell Claude exactly how you want the role to change</p>
            </li>
          </ol>
          <div className="bg-muted p-3 rounded-lg font-mono text-sm">
            "Customize this Sales plugin to use <strong>Meddic</strong> qualification criteria instead of BANT,
            and always format deal memos using our specific internal template."
          </div>
        </CardContent>
      </Card>

      {/* Customization Method 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-primary" />
            Customizing: Developer Method
          </CardTitle>
          <CardDescription>
            Edit the underlying files for granular control (required for swapping tools)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium mb-2">Plugin File Structure</p>
            <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
              <p>plugin.json <span className="text-muted-foreground">— Metadata about the plugin</span></p>
              <p>.mcp.json <span className="text-muted-foreground">— Tool connections (MCP servers)</span></p>
              <p>skills/ <span className="text-muted-foreground">— Folder of Markdown instruction files</span></p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Customization</th>
                  <th className="text-left py-2 font-medium">Why</th>
                  <th className="text-left py-2 font-medium">How</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Swap Connectors</td>
                  <td className="py-2 text-muted-foreground">Use your actual tech stack (Linear instead of Jira)</td>
                  <td className="py-2">Edit <code className="bg-muted px-1 rounded">.mcp.json</code></td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Add Context</td>
                  <td className="py-2 text-muted-foreground">Stop Claude from sounding generic</td>
                  <td className="py-2">Paste Brand Voice into <code className="bg-muted px-1 rounded">skills/</code> files</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Adjust Workflows</td>
                  <td className="py-2 text-muted-foreground">Enforce compliance steps</td>
                  <td className="py-2">Edit skill files to add your specific steps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Creating from Scratch */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Creating Your Own Plugins
          </CardTitle>
          <CardDescription>
            Build a custom plugin when the library doesn't have what you need
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <p className="text-sm">Install the <strong>"Plugin Create"</strong> utility from the plugin library</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <p className="text-sm">Open a Cowork session and describe the role you need</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <p className="text-sm">Claude generates the folder structure, commands, and skill files</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <p className="text-sm">Save as a custom plugin on your machine</p>
            </li>
          </ol>
          <div className="bg-muted p-3 rounded-lg font-mono text-sm">
            "Help me create a 'Podcast Producer' plugin. It should take an audio file,
            generate show notes, and update my Notion database."
          </div>
        </CardContent>
      </Card>

      {/* Limitations */}
      <Card className="border-amber-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Important Limitations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Local Only</p>
              <p className="text-sm text-muted-foreground">
                Plugins are saved locally to your machine. If you customize a plugin, it does not automatically sync
                to your teammates. You would need to manually share the files.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">macOS Only</p>
              <p className="text-sm text-muted-foreground">
                Cowork Plugins are currently exclusive to the Claude Desktop app for macOS.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">Organization provisioning</p>
              <p className="text-sm text-muted-foreground">
                Departments can "push" plugins to all members (e.g., ensuring every support agent
                uses the same "Refund Processing" plugin). Check the Anthropic changelog for the latest availability.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Need to connect external tools?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to set up MCP connectors for your plugins.
              </p>
            </div>
            <Link
              href="/guides/connectors"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Connectors Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
