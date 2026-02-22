export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Lightbulb,
  Shield,
  Scale,
  Lock,
  CheckCircle,
  AlertTriangle,
  ClipboardList,
  ArrowRight,
  Settings
} from 'lucide-react';

export default function ToolGovernancePage() {
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
        <span className="text-foreground">Tool Governance</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">20 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/10 text-slate-500">
            <Settings className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Tool Governance</h1>
            <p className="text-muted-foreground">Legal, compliance, and evaluation framework for adopting new AI tools</p>
          </div>
        </div>
      </div>

      {/* Why Governance Matters */}
      <Card className="bg-gradient-to-r from-slate-500/5 via-slate-500/10 to-slate-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">Why Governance Matters</p>
              <p className="text-muted-foreground mt-1">
                New AI tools appear weekly. Without a framework, teams waste time on tools that don&apos;t last,
                create security risks, or duplicate existing capabilities. A clear governance process protects
                the organization while still moving fast on tools that deliver real value.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Evaluation Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-slate-500" />
            The Evaluation Framework
          </CardTitle>
          <CardDescription>
            Score new tools across five dimensions before adopting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg border">
            <p className="font-medium">Capability</p>
            <p className="text-sm text-muted-foreground mt-1">
              Does it solve a real problem? Is there a measurable gap in your current stack? Avoid adopting
              tools that overlap with existing capabilities unless the improvement is significant.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Security</p>
            <p className="text-sm text-muted-foreground mt-1">
              How does it handle data? Is it SOC2 or ISO 27001 compliant? Does it offer encryption at rest
              and in transit? Does it support SSO for enterprise access control?
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Integration</p>
            <p className="text-sm text-muted-foreground mt-1">
              Does it work with your existing stack? Does it have an API? Can it connect to your
              automation tools (n8n, Zapier)? Will it create data silos?
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Cost</p>
            <p className="text-sm text-muted-foreground mt-1">
              What&apos;s the pricing model — per-seat, usage-based, or flat? Can you justify the ROI?
              What happens to your data if you stop paying?
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Longevity</p>
            <p className="text-sm text-muted-foreground mt-1">
              Is the company funded and growing? Is the API stable? Are there signs of sustainable
              business (enterprise customers, revenue growth)? Will it be here in 2 years?
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Data & Security Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-slate-500" />
            Data & Security Checklist
          </CardTitle>
          <CardDescription>
            Review these questions before using any new AI tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              'Where does your data go? (US, EU, other regions?)',
              'Is your data used for model training?',
              'What is the data retention policy?',
              'Is the tool SOC2 or ISO 27001 compliant?',
              'Does it support SSO and SCIM provisioning?',
              'Can you delete your data on request?',
              'Is data encrypted at rest and in transit?',
              'Does it offer audit logs for enterprise accounts?',
              'Are there data processing agreements (DPA) available?',
              'Does it comply with GDPR and CCPA requirements?',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50">
                <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legal Considerations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-slate-500" />
            Legal Considerations
          </CardTitle>
          <CardDescription>
            Key legal issues to address before deploying AI tools
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium">IP Ownership</p>
            <p className="text-sm text-muted-foreground mt-1">
              Who owns AI-generated content? Review the tool&apos;s terms of service for IP assignment.
              Most enterprise tiers assign output ownership to the user, but free tiers may not.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Client Confidentiality</p>
            <p className="text-sm text-muted-foreground mt-1">
              Never upload client data to unvetted tools. Client NDAs typically prohibit sharing
              confidential information with third-party services without approval. Always check.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Content Licensing</p>
            <p className="text-sm text-muted-foreground mt-1">
              Understand the licensing terms for AI-generated images and video. Some tools grant
              commercial usage rights, others restrict certain use cases. Verify before client delivery.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Disclosure Requirements</p>
            <p className="text-sm text-muted-foreground mt-1">
              Some jurisdictions and clients require disclosure of AI-generated content. Establish
              a clear policy on when and how to disclose AI assistance.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium">Indemnification</p>
            <p className="text-sm text-muted-foreground mt-1">
              Review indemnification clauses in tool agreements. Does the provider indemnify against
              IP infringement claims? This matters especially for image and video generation tools.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Approved Tool Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-500" />
            Approved Tool Stack
          </CardTitle>
          <CardDescription>
            Currently approved tools and their approved use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Tool</th>
                  <th className="text-left py-2 font-medium">Approved For</th>
                  <th className="text-left py-2 font-medium">Data Protection</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-medium">Claude Enterprise</td>
                  <td className="py-2 text-muted-foreground">General AI, writing, analysis, code</td>
                  <td className="py-2 text-green-600">No training on data</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">NotebookLM</td>
                  <td className="py-2 text-muted-foreground">Document synthesis</td>
                  <td className="py-2 text-green-600">Google Workspace integrated</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">n8n</td>
                  <td className="py-2 text-muted-foreground">Workflow automation</td>
                  <td className="py-2 text-green-600">Self-hosted option</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Runway Enterprise</td>
                  <td className="py-2 text-muted-foreground">Video generation</td>
                  <td className="py-2 text-green-600">Commercial rights included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Request Process */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-slate-500" />
            Request Process
          </CardTitle>
          <CardDescription>
            How to request a new tool for the team
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-500 text-white text-xs font-semibold">1</span>
              Submit Evaluation Request
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Fill out the evaluation form with the tool name, use case, expected benefits,
              and why existing tools don&apos;t meet the need.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-500 text-white text-xs font-semibold">2</span>
              Security Review
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              IT reviews the tool against the data and security checklist. This typically
              takes 3-5 business days.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-500 text-white text-xs font-semibold">3</span>
              Legal Review
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              Legal reviews terms of service, IP clauses, and data processing agreements.
              This runs in parallel with the security review.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-500 text-white text-xs font-semibold">4</span>
              Pilot with Small Team
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              If approved, 3-5 team members pilot the tool for 2 weeks. They document
              use cases, measure time savings, and identify issues.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <p className="font-medium flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-500 text-white text-xs font-semibold">5</span>
              Full Rollout
            </p>
            <p className="text-sm text-muted-foreground mt-2 ml-8">
              After a successful pilot, the tool is added to the approved stack with
              usage guidelines and training materials.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-slate-500/30 bg-slate-500/5">
            <p className="font-medium text-sm">Typical Timeline</p>
            <p className="text-sm text-muted-foreground mt-1">
              From request to full rollout: 2-4 weeks. Security and legal reviews run in parallel
              to speed up the process.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Red Flags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Red Flags
          </CardTitle>
          <CardDescription>
            Tools to avoid or escalate for additional review
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              'No clear privacy policy or terms of service',
              'Data used for model training by default with no opt-out',
              'No enterprise tier or business plan available',
              'No SOC2, ISO 27001, or equivalent security certification',
              'Founder-stage startup with no disclosed funding',
              'Requires uploading client IP without clear data protection',
              'No data deletion capability or unclear retention policies',
              'No SSO support — requires individual account management',
              'API terms that change frequently or without notice',
              'No way to export your data if you leave the platform',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Not sure which tool to use?</h3>
              <p className="text-sm text-muted-foreground">
                Check the model selection guide for a quick decision framework.
              </p>
            </div>
            <Link
              href="/guides/model-selection"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Model Selection Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
