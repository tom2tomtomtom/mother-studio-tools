export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Workflow,
  Lightbulb,
  Bot,
  Cloud,
  Server,
  Plug,
  Zap,
  Code,
  Shield,
  Users,
  Sparkles
} from 'lucide-react';

export default function N8nPage() {
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
        <span className="text-foreground">n8n</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">25 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
            <Workflow className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">n8n Workflow Automation</h1>
            <p className="text-muted-foreground">Build AI-powered automations with code-level flexibility</p>
          </div>
        </div>
      </div>

      {/* What is n8n */}
      <Card className="bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">What is n8n?</p>
              <p className="text-muted-foreground mt-1">
                n8n (pronounced "n-eight-n") is a <strong>fair-code workflow automation platform</strong> that combines
                AI capabilities with business process automation. Unlike Zapier or Make, n8n gives technical teams
                the flexibility of code with the speed of no-code, making it ideal for building <strong>AI agents</strong>
                and complex multi-step automations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* n8n vs Competitors */}
      <Card>
        <CardHeader>
          <CardTitle>n8n vs Zapier vs Make</CardTitle>
          <CardDescription>
            Why n8n is the choice for technical teams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Feature</th>
                  <th className="text-left py-2 font-medium">n8n</th>
                  <th className="text-left py-2 font-medium">Zapier</th>
                  <th className="text-left py-2 font-medium">Make</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Self-Hosting</td>
                  <td className="py-2 text-green-600">Yes, free</td>
                  <td className="py-2 text-muted-foreground">No</td>
                  <td className="py-2 text-muted-foreground">No</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Billing Model</td>
                  <td className="py-2 text-green-600">Per workflow</td>
                  <td className="py-2 text-muted-foreground">Per step</td>
                  <td className="py-2 text-muted-foreground">Per operation</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Custom Code</td>
                  <td className="py-2 text-green-600">JS/Python + npm</td>
                  <td className="py-2 text-muted-foreground">Limited</td>
                  <td className="py-2 text-muted-foreground">Medium</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">AI Agents</td>
                  <td className="py-2 text-green-600">Native LangChain</td>
                  <td className="py-2 text-muted-foreground">Basic</td>
                  <td className="py-2 text-muted-foreground">Basic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* AI Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            AI Agent Capabilities
          </CardTitle>
          <CardDescription>
            Build autonomous agents that reason, use tools, and maintain memory
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            n8n is a full <strong>AI orchestration platform</strong> powered by LangChain,
            with 7,800+ community workflow templates available.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">AI Agent Node</p>
              <p className="text-xs text-muted-foreground">Build agents that reason and use tools autonomously</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Memory Nodes</p>
              <p className="text-xs text-muted-foreground">Maintain context across interactions</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Tool Nodes</p>
              <p className="text-xs text-muted-foreground">Connect agents to external APIs and functions</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Guardrails Node</p>
              <p className="text-xs text-muted-foreground">Filter inputs/outputs for safety</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Supported LLMs:</strong> OpenAI, Claude, Gemini, HuggingFace, and more
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Hosting Options */}
      <Card>
        <CardHeader>
          <CardTitle>Hosting Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-5 w-5 text-primary" />
                <p className="font-medium">Self-Hosted</p>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>100% free, unlimited executions</li>
                <li>Full data control and compliance</li>
                <li>Air-gapped deployment available</li>
                <li>Requires: 4GB RAM, 2 vCPUs</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-primary/50 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="h-5 w-5 text-primary" />
                <p className="font-medium">Cloud Hosted</p>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Managed infrastructure</li>
                <li>Automatic updates</li>
                <li>Built-in monitoring</li>
                <li>Enterprise support available</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium">Lead Management & CRM</p>
            <p className="text-sm text-muted-foreground mt-1">
              Capture form submissions, validate and enrich data with enrichment APIs,
              auto-create CRM records, assign leads, and notify reps via Slack.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Employee Onboarding</p>
            <p className="text-sm text-muted-foreground mt-1">
              Provision accounts, send welcome emails, create IT tasks,
              add to Slack channels, and initiate digital paperwork.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">AI Content Pipelines</p>
            <p className="text-sm text-muted-foreground mt-1">
              Document summarization, sentiment analysis, content generation,
              RAG-powered Q&A, and customer support automation.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Data Synchronization</p>
            <p className="text-sm text-muted-foreground mt-1">
              Real-time sync between databases, webhook-triggered pipelines,
              and multi-system record keeping.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plug className="h-5 w-5 text-primary" />
            Integration Capabilities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            400+ pre-configured integrations plus unlimited custom connections via REST API,
            GraphQL, webhooks, or custom code.
          </p>

          <div>
            <p className="font-medium mb-2">Popular Integrations</p>
            <div className="flex flex-wrap gap-2">
              {['Google Workspace', 'Slack', 'Notion', 'GitHub', 'Salesforce',
                'HubSpot', 'Stripe', 'Airtable', 'PostgreSQL', 'MongoDB'].map((app) => (
                <Badge key={app} variant="outline">{app}</Badge>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Custom Code:</strong> Write JavaScript or Python within workflows,
              import npm packages, or build proprietary nodes for internal systems.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Enterprise Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Enterprise Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Security</p>
              <p className="text-xs text-muted-foreground">SOC2, SSO/SAML, LDAP, encrypted secrets</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Governance</p>
              <p className="text-xs text-muted-foreground">Git version control, audit logs, RBAC</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Performance</p>
              <p className="text-xs text-muted-foreground">220 executions/second per instance</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">Support</p>
              <p className="text-xs text-muted-foreground">Dedicated support, SLAs, priority response</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 10 Golden Rules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            The 10 Golden Rules
          </CardTitle>
          <CardDescription>Essential practices for reliable workflows</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid gap-3">
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">1. Name Everything Immediately</p>
              <p className="text-xs text-muted-foreground">Right-click every node and give it a clear name. "Get Unread Emails" not "Gmail1"</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">2. Test One Item First</p>
              <p className="text-xs text-muted-foreground">Use "Execute Node" instead of full workflow to avoid 500 accidental emails</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">3. Use Limit Node for Testing</p>
              <p className="text-xs text-muted-foreground">Add a Limit node set to 2-3 items while building, remove when going live</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">4. Always Build Error Handling</p>
              <p className="text-xs text-muted-foreground">Create an Error Workflow that notifies you via Slack/email when things fail</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">5. Add Wait Nodes for APIs</p>
              <p className="text-xs text-muted-foreground">Add 1-2 second delays between API calls to prevent rate limit errors</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">6. Never Hardcode Credentials</p>
              <p className="text-xs text-muted-foreground">Use Settings → Credentials or environment variables, never paste keys in nodes</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">7. Use Project-Level Variables</p>
              <p className="text-xs text-muted-foreground">Store reusable values in Settings → Variables: {"{{ $vars.api_base_url }}"}</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">8. Check Data Structure at Each Step</p>
              <p className="text-xs text-muted-foreground">Click nodes and check Output tab—mismatched structure is the #1 error cause</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">9. Use Expressions for Dynamic Data</p>
              <p className="text-xs text-muted-foreground">{"{{ $json.firstName }}"} not "John" — always reference data dynamically</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium text-sm">10. Document with Sticky Notes</p>
              <p className="text-xs text-muted-foreground">Right-click canvas → Add Sticky Note to explain complex sections</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Errors */}
      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting Common Errors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Error</th>
                  <th className="text-left py-2 font-medium">Cause</th>
                  <th className="text-left py-2 font-medium">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Node execution failed</td>
                  <td className="py-2 text-muted-foreground">Couldn't complete task</td>
                  <td className="py-2 text-muted-foreground">Check credentials, API status, data format</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Referenced node unexecuted</td>
                  <td className="py-2 text-muted-foreground">Using data from node that hasn't run</td>
                  <td className="py-2 text-muted-foreground">Ensure nodes are connected and upstream</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">ETIMEDOUT</td>
                  <td className="py-2 text-muted-foreground">Connection failed</td>
                  <td className="py-2 text-muted-foreground">Check internet, firewall, increase timeout</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">HTTP 429 Rate limit</td>
                  <td className="py-2 text-muted-foreground">Too many requests</td>
                  <td className="py-2 text-muted-foreground">Add Wait nodes, batch 10-50 items</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Data format issues</td>
                  <td className="py-2 text-muted-foreground">Structure mismatch</td>
                  <td className="py-2 text-muted-foreground">Use Set node to restructure, check input/output</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Expression Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            Expression Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-muted font-mono text-sm space-y-2">
            <p><span className="text-primary">{"{{ $json.fieldName }}"}</span> <span className="text-muted-foreground">- Current node data</span></p>
            <p><span className="text-primary">{"{{ $now }}"}</span> <span className="text-muted-foreground">- Current timestamp</span></p>
            <p><span className="text-primary">{"{{ $('NodeName').item.json }}"}</span> <span className="text-muted-foreground">- Specific node's data</span></p>
            <p><span className="text-primary">{"{{ $vars.variableName }}"}</span> <span className="text-muted-foreground">- Variable value</span></p>
            <p><span className="text-primary">{"{{ $json.items.length }}"}</span> <span className="text-muted-foreground">- Array length</span></p>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <div>
                <p className="font-medium">Start with Templates</p>
                <p className="text-sm text-muted-foreground">Browse 7,800+ community templates to find workflows similar to your needs</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <div>
                <p className="font-medium">Use AI Workflow Builder</p>
                <p className="text-sm text-muted-foreground">Describe what you want in natural language and let AI generate the workflow</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <div>
                <p className="font-medium">Connect Your Apps</p>
                <p className="text-sm text-muted-foreground">Add credentials for the services you want to automate</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <div>
                <p className="font-medium">Test and Deploy</p>
                <p className="text-sm text-muted-foreground">Run test executions, then activate for production</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Ready to connect n8n to Claude?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to set up MCP connectors for seamless integration.
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
