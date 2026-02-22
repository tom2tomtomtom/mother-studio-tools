export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Plug,
  Lightbulb,
  Mail,
  Calendar,
  Github,
  FolderOpen,
  Server,
  Shield,
  AlertTriangle,
  Database,
  Zap,
  Settings
} from 'lucide-react';

export default function ConnectorsPage() {
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
        <span className="text-foreground">Connectors</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">20 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
            <Plug className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Connectors & Integrations</h1>
            <p className="text-muted-foreground">Transform Claude into a hub for your emails, calendar, code, and files</p>
          </div>
        </div>
      </div>

      {/* Concept */}
      <Card className="bg-gradient-to-r from-cyan-500/5 via-cyan-500/10 to-cyan-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">The Goal</p>
              <p className="text-muted-foreground mt-1">
                Transform Claude from an isolated AI into an integrated hub that can read, write, and act upon
                your emails, calendar, code repositories, and local files.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two Types */}
      <Card>
        <CardHeader>
          <CardTitle>The Two Types of Connectors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-5 w-5 text-blue-500" />
                <p className="font-medium">Native Web Connectors</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Pre-built integrations by Anthropic (Google Workspace, GitHub) that work directly in the browser and app.
                No coding required.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Plug className="h-5 w-5 text-purple-500" />
                <p className="font-medium">Model Context Protocol (MCP)</p>
              </div>
              <p className="text-sm text-muted-foreground">
                An open standard to connect <em>any</em> data source—local files, databases, or SaaS tools—to Claude Desktop.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Native Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-500" />
            Native Web Integrations
          </CardTitle>
          <CardDescription>
            The "Easy Button" — No coding required, available on Free (limited), Pro, Team, and Enterprise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-medium mb-3">Available Integrations</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2 p-3 rounded-lg border">
                <Mail className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Google Workspace</p>
                  <p className="text-xs text-muted-foreground">Gmail, Google Calendar, Google Drive</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg border">
                <Github className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">GitHub</p>
                  <p className="text-xs text-muted-foreground">Repository analysis and code understanding</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-3">How to Set Up</p>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
                <span>Go to <strong>Settings → Connectors</strong> (or click the "+" icon in chat)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
                <span>Locate the service (e.g., "Google Calendar") and click <strong>Connect</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
                <span>Authenticate via the pop-up window</span>
              </li>
            </ol>
            <div className="mt-3 p-3 rounded-lg bg-muted text-sm">
              <strong>Note for Teams:</strong> Organization owners must enable integrations in Admin Settings before members can use them.
            </div>
          </div>

          <div>
            <p className="font-medium mb-3">Key Use Cases</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Meeting Management</p>
                  <p className="text-xs text-muted-foreground">"Check my Google Calendar for open slots next Tuesday and draft an invite email to the team"</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Inbox Triage</p>
                  <p className="text-xs text-muted-foreground">Connect Gmail to scan and summarize high-priority messages or clean up promotional spam</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Github className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Repo Analysis</p>
                  <p className="text-xs text-muted-foreground">Ask high-level questions about a repository's architecture without manually cloning the code</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MCP Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plug className="h-5 w-5 text-purple-500" />
            Mastering MCP (Model Context Protocol)
          </CardTitle>
          <CardDescription>
            Expert-level feature for accessing local files and specialized business tools (requires Claude Desktop)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Local Tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FolderOpen className="h-4 w-4 text-primary" />
              <p className="font-medium">A. Connecting Local Tools (Filesystem)</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              The most critical connector for "Cowork" workflows—grants Claude access to your hard drive.
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-sm mb-2">Prerequisites</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Claude Desktop app installed</li>
                  <li>Node.js installed on your system</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm mb-2">Configuration Steps</p>
                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                  <li>Navigate to <strong>Settings → Developer → Edit Config</strong> in the desktop app</li>
                  <li>This opens <code className="bg-muted px-1 rounded">claude_desktop_config.json</code></li>
                  <li>Define the server and specific folders Claude is allowed to access</li>
                </ol>
              </div>
              <div>
                <p className="font-medium text-sm mb-2">Example Config</p>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/Desktop"
      ]
    }
  }
}`}
                </pre>
              </div>
              <div className="p-3 rounded-lg border border-amber-500/50 bg-amber-500/5">
                <p className="font-medium text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-amber-500" />
                  Security Note
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Only add paths to <code className="bg-muted px-1 rounded">args</code> that you are comfortable with Claude modifying.
                  <strong> Never grant root access.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Remote Tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database className="h-4 w-4 text-primary" />
              <p className="font-medium">B. Connecting Remote/SaaS Tools</p>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Connect tools like Slack, HubSpot, or Snowflake via remote MCP servers.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Anthropic Marketplace</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Browse and install verified connectors from the "Browse Connectors" tab in settings.
                </p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="font-medium text-sm">Third-Party Aggregators</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Services like Rubi or Composio connect 800+ SaaS apps via a single MCP URL.
                </p>
              </div>
            </div>
          </div>

          {/* Rubi/Composio Deep Dive */}
          <div className="p-4 rounded-lg border bg-muted/50">
            <p className="font-medium mb-3">Third-Party Aggregators: Rubi & Composio</p>
            <p className="text-sm text-muted-foreground mb-3">
              These "gateway" services let you connect to Linear, HubSpot, Salesforce, Jira, and hundreds more
              without building custom integrations for each.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Setup</p>
                <ol className="text-sm text-muted-foreground list-decimal list-inside mt-1 space-y-1">
                  <li>Create an account at Rubi.app or Composio</li>
                  <li>Connect your desired SaaS tools in their dashboard</li>
                  <li>Generate an MCP URL</li>
                  <li>Go to <strong>Settings → Connectors</strong> in Claude and paste the URL</li>
                </ol>
              </div>
              <div>
                <p className="text-sm font-medium">Dynamic Tool Loading (Expert Feature)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  These gateways use "on-demand tool loading"—they only inject tool definitions (e.g., "Search Jira")
                  when you actually ask for it, rather than loading all 800 tools into Claude's context window.
                  This saves context space and improves response quality.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Token Hygiene */}
      <Card className="border-amber-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Optimization & "Token Hygiene"
          </CardTitle>
          <CardDescription>
            Expert users must manage "token hunger" when connecting tools
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">The Problem</p>
            <p className="text-sm text-muted-foreground mt-1">
              When you connect tools, their definitions (instructions on how to use them) are loaded into Claude's context window.
              If you connect 20 tools but only need one, Claude still "reads" all definitions. This consumes context and can lead to lower-quality answers.
            </p>
          </div>

          <div>
            <p className="font-medium">The Fix: Dynamic Loading</p>
            <p className="text-sm text-muted-foreground mt-1">
              Use "gateway" servers (like Rubi) that only load tool definitions when specifically requested by the task,
              rather than keeping all tools active 24/7.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5">
            <p className="font-medium text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              Watch for Large Outputs
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Be wary of connectors that return massive data dumps (like a 5,000-row CSV).
              This can "destroy" your conversation context. Instruct Claude to <strong>"summarize findings"</strong>
              or <strong>"save to a file"</strong> rather than printing raw data into the chat.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Agency Connectors */}
      <Card>
        <CardHeader>
          <CardTitle>Connectors for Ad Agencies</CardTitle>
          <CardDescription>
            Recommended integrations organized by department workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Department</th>
                  <th className="text-left py-2 font-medium">Connectors</th>
                  <th className="text-left py-2 font-medium">Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Creative</td>
                  <td className="py-2">Figma, Filesystem</td>
                  <td className="py-2 text-muted-foreground">Organizing assets & enforcing brand consistency</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Strategy</td>
                  <td className="py-2">Ahrefs, Brave Search</td>
                  <td className="py-2 text-muted-foreground">Competitor research & SEO planning</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Account Mgmt</td>
                  <td className="py-2">HubSpot, Gmail, Slack</td>
                  <td className="py-2 text-muted-foreground">Client communication & CRM updates</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Traffic/PM</td>
                  <td className="py-2">Asana, Notion</td>
                  <td className="py-2 text-muted-foreground">Tracking deadlines & accessing brand guidelines</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Analytics</td>
                  <td className="py-2">Google Analytics, Snowflake</td>
                  <td className="py-2 text-muted-foreground">Campaign reporting & data visualization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-500" />
            Security & Governance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Shield className="h-4 w-4 text-green-500 mt-1 shrink-0" />
            <div>
              <p className="font-medium">Human in the Loop</p>
              <p className="text-sm text-muted-foreground">
                Regardless of the connector, Claude cannot execute a significant action
                (like deleting a file or sending a Slack message) without your explicit approval.
                You must click "Allow" for these operations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Database className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
            <div>
              <p className="font-medium">Data Boundaries</p>
              <p className="text-sm text-muted-foreground">
                When using native integrations, you can only sync content that you have permission to view
                in the original source. You cannot ask Claude to summarize a Google Doc you don't have access to.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Connector Type</th>
                  <th className="text-left py-2 font-medium">Where</th>
                  <th className="text-left py-2 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Google Workspace</td>
                  <td className="py-2">Web & Desktop</td>
                  <td className="py-2 text-muted-foreground">Email, calendar, documents</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">GitHub</td>
                  <td className="py-2">Web & Desktop</td>
                  <td className="py-2 text-muted-foreground">Code analysis, repo questions</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Filesystem MCP</td>
                  <td className="py-2">Desktop Only</td>
                  <td className="py-2 text-muted-foreground">Local files, Cowork tasks</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Remote MCP</td>
                  <td className="py-2">Web & Desktop</td>
                  <td className="py-2 text-muted-foreground">SaaS tools (Slack, Notion, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Need detailed MCP setup help?</h3>
              <p className="text-sm text-muted-foreground">
                Check our step-by-step MCP configuration guide.
              </p>
            </div>
            <Link
              href="/guides/mcp-setup"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              MCP Setup
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
