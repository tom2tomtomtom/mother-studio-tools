export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Settings,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Copy,
  Lightbulb
} from 'lucide-react';

export default function MCPSetupPage() {
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
        <span className="text-foreground">MCP Setup</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Beginner</Badge>
          <Badge variant="outline">10 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <Settings className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">MCP Configuration</h1>
            <p className="text-muted-foreground">Set up Model Context Protocol to give Claude access to your files</p>
          </div>
        </div>
      </div>

      {/* What is MCP */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            What is MCP?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The <strong>Model Context Protocol (MCP)</strong> lets Claude Desktop read files directly from your computer.
            Instead of copy-pasting text into the chat, you can say "read my report.pdf" and Claude accesses it instantly.
          </p>
          <p className="text-muted-foreground">
            Setting it up requires editing a JSON configuration file. The good news? You can use Claude to write this file for you,
            eliminating the risk of syntax errors.
          </p>
        </CardContent>
      </Card>

      {/* Step 1: The Prompt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">1</span>
            Ask Claude to Write Your Config
          </CardTitle>
          <CardDescription>
            Copy and paste this prompt into Claude, filling in your details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <p className="text-muted-foreground mb-2"># Copy this prompt:</p>
            <p>
              "I need to set up the Model Context Protocol (MCP) for Claude Desktop.
              I am on <strong>[macOS / Windows]</strong> and my username is <strong>[your username]</strong>.
            </p>
            <p className="mt-2">
              Please write the full JSON code for my <code>claude_desktop_config.json</code> file
              to enable the <strong>Filesystem MCP server</strong>. I want to give it access to my
              <strong>Desktop</strong> and <strong>Downloads</strong> folders."
            </p>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Lightbulb className="h-4 w-4 mt-0.5 text-amber-500" />
            <p>
              Claude will generate paths correctly for your OS. macOS uses <code>/Users/yourname/Desktop</code>
              while Windows uses <code>C:\\Users\\yourname\\Desktop</code> with proper escaping.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Example Output */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">2</span>
            What Claude Generates
          </CardTitle>
          <CardDescription>
            Claude will produce a JSON block like this (macOS example)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/Desktop",
        "/Users/yourname/Downloads"
      ]
    }
  }
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Step 3: Where to Paste */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">3</span>
            Install the Configuration
          </CardTitle>
          <CardDescription>
            Follow these steps to add the config to Claude Desktop
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Open Claude Desktop</p>
                <p className="text-sm text-muted-foreground">Make sure you have the desktop app, not the web version</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Go to Settings</p>
                <p className="text-sm text-muted-foreground">
                  Mac: Claude Menu → Settings | Windows: File → Settings
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Click Developer in the sidebar</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Click Edit Config</p>
                <p className="text-sm text-muted-foreground">This opens the config file in your text editor</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Paste the JSON Claude generated</p>
                <p className="text-sm text-muted-foreground">Delete any existing text first, then paste</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Save and restart Claude Desktop</p>
                <p className="text-sm text-muted-foreground">Quit the app completely and reopen it</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">4</span>
            Verify It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            After restarting, look for a <strong>plug icon</strong> in the chat interface.
            This indicates MCP servers are connected.
          </p>
          <p>
            Test it by asking: <code className="bg-muted px-2 py-1 rounded">"List the files on my Desktop"</code>
          </p>
          <p className="text-muted-foreground">
            Claude should respond with an actual list of your desktop files.
          </p>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="border-amber-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            Troubleshooting
          </CardTitle>
          <CardDescription>
            If the MCP server doesn't load, use Claude to fix it
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The issue is often a hidden path error. You can paste the error log back into Claude:
          </p>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <p>
              "My MCP server failed to load. Here is the error log from <code>mcp.log</code>:
              [paste the error]. Please fix my JSON config."
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Common issues:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Wrong username in the file path</li>
              <li>Missing commas between JSON elements</li>
              <li>Folder doesn't exist (check spelling)</li>
              <li>Node.js not installed (required for npx command)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Ready for more?</h3>
              <p className="text-sm text-muted-foreground">
                Learn to use Claude Code for managing projects from the command line.
              </p>
            </div>
            <Link
              href="/guides/claude-code"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Claude Code Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
