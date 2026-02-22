export const revalidate = 3600;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sparkles,
  Lightbulb,
  Upload,
  FileCode,
  FolderArchive,
  Settings,
  AlertCircle,
  Zap
} from 'lucide-react';

export default function CustomSkillsPage() {
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
        <span className="text-foreground">Custom Skills</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">20 min</Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Custom Skills</h1>
            <p className="text-muted-foreground">Install repeatable instructions so you never paste the same context twice</p>
          </div>
        </div>
      </div>

      {/* What is a Skill */}
      <Card>
        <CardHeader>
          <CardTitle>What is a Skill?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A Skill is a packaged set of instructions, files, and code that you upload to Claude.
            Unlike "Projects" (which are for specific workspaces), Skills are available <strong>globally</strong>
            in your account once enabled.
          </p>
          <p className="text-muted-foreground">
            They consist of a zip file containing a specific <code className="bg-muted px-1 rounded">Skill.md</code>
            file and any necessary reference documents.
          </p>
        </CardContent>
      </Card>

      {/* The Skill Factory */}
      <Card className="bg-gradient-to-r from-pink-500/5 via-pink-500/10 to-pink-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            The Expert Workflow: Let Claude Build the Skill
          </CardTitle>
          <CardDescription>
            Writing YAML metadata manually is tedious. Treat Claude as a "Skill Factory" instead.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">1</span>
            <div>
              <p className="font-medium flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Your Source Material
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Start a new chat and upload the document you want to standardize:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                <li>Your company's "Brand Voice PDF"</li>
                <li>A text file of your "Python Coding Standards"</li>
                <li>A "Meeting Minutes Template"</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">2</span>
            <div>
              <p className="font-medium flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                The "Skill Factory" Prompt
              </p>
              <div className="bg-muted p-4 rounded-lg mt-2 text-sm">
                <p>"I want to convert the attached document into a <strong>Custom Skill</strong> for Claude.</p>
                <p className="mt-2">Please write the full content for a <code>Skill.md</code> file. It must include:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li><strong>YAML Frontmatter</strong> at the top with:
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li><code>name</code>: (Max 64 chars)</li>
                      <li><code>description</code>: (Max 200 chars—make this specific so you know when to invoke it)</li>
                    </ul>
                  </li>
                  <li><strong>Markdown Body</strong>: Convert the attached document into clear instructions, using headers and bullet points</li>
                  <li><strong>Examples</strong>: Add a section at the end with 'Example Inputs' and 'Example Outputs' to teach the model how to behave"</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">3</span>
            <div>
              <p className="font-medium">Create the Folder</p>
              <ol className="text-sm text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
                <li>Create a folder on your computer named after your skill (e.g., <code className="bg-muted px-1 rounded">Brand-Guidelines</code>)</li>
                <li>Inside that folder, create a file named <code className="bg-muted px-1 rounded">Skill.md</code></li>
                <li>Paste the code Claude generated into that file</li>
                <li><em>(Optional)</em> If you have reference files, create a subfolder named <code className="bg-muted px-1 rounded">resources</code></li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Zip Trick */}
      <Card className="border-red-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderArchive className="h-5 w-5 text-red-500" />
            Packaging (The "Zip" Trick)
          </CardTitle>
          <CardDescription>
            This is the #1 place where beginners fail
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            You must zip the <strong>folder</strong>, not the files inside it.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg border border-green-500/50 bg-green-500/5">
              <p className="font-medium text-green-600 text-sm">Correct</p>
              <p className="text-sm mt-1">
                Zip the folder <code className="bg-muted px-1 rounded">Brand-Guidelines</code>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Result: <code>Brand-Guidelines.zip</code>
              </p>
            </div>
            <div className="p-3 rounded-lg border border-red-500/50 bg-red-500/5">
              <p className="font-medium text-red-600 text-sm">Incorrect</p>
              <p className="text-sm mt-1">
                Select <code className="bg-muted px-1 rounded">Skill.md</code> and zip it directly
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Result: <code>Archive.zip</code> (Claude will reject this)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Installation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">1</span>
              <p className="text-sm">Click your initials in the lower-left corner of Claude</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">2</span>
              <p className="text-sm">Select <strong>Settings</strong></p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">3</span>
              <p className="text-sm">Click <strong>Capabilities</strong> in the menu</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">4</span>
              <p className="text-sm">Click <strong>Add Skill</strong> (or "Upload") and select your zip file</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shrink-0">5</span>
              <p className="text-sm"><strong>Enable Code Execution</strong> — Skills rely on this to function</p>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use Your New Skill</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            You don't need to "turn on" the skill for every chat. Claude uses the <strong>Description</strong>
            you wrote in the YAML frontmatter to decide when to use it.
          </p>
          <div>
            <p className="font-medium">Triggering it</p>
            <p className="text-sm text-muted-foreground mt-1">Simply prompt naturally:</p>
            <div className="bg-muted p-3 rounded-lg mt-2 text-sm">
              <p className="text-muted-foreground">If you installed a "Brand Guidelines" skill:</p>
              <p className="mt-1">"Draft a press release for our new product."</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Claude sees the request matches the skill description, loads the instructions in the background,
              and writes the press release using your specific brand voice.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Self-Healing Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Pro tip: "Self-healing" skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            If a skill isn't working (e.g., Claude ignores it), the issue is usually the <strong>Description</strong>.
          </p>
          <div>
            <p className="font-medium">The Fix</p>
            <p className="text-sm text-muted-foreground mt-1">
              Go back to the chat where you built the skill and ask:
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2 text-sm font-mono">
              "Claude, you aren't invoking this skill when I ask for X. Rewrite the YAML description
              to be more 'trigger-happy' and specific so you know exactly when to use it."
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example Skill.md */}
      <Card>
        <CardHeader>
          <CardTitle>Example: Complete Skill.md File</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`---
name: Brand Voice Guidelines
description: Use when writing any external communication, press releases, social media posts, or marketing copy for our company
---

# Brand Voice Guidelines

## Tone
- Professional but approachable
- Confident, never arrogant
- Clear and concise

## Language Rules
- Use active voice
- Avoid jargon unless speaking to technical audiences
- Always spell out acronyms on first use

## Formatting
- Headlines: Title Case
- Body text: Sentence case
- Bullets for lists of 3+ items

## Example Inputs & Outputs

**Input:** "Write a tweet about our new product launch"

**Output:** "Introducing ProductX: the fastest way to [benefit].
Available now. Link in bio."`}
          </pre>
        </CardContent>
      </Card>

      {/* Team Administration */}
      <Card>
        <CardHeader>
          <CardTitle>Team Administration (Enterprise)</CardTitle>
          <CardDescription>
            Admin controls for managing skills across your organization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Skill Provisioning</p>
            <p className="text-sm text-muted-foreground mt-1">
              Admins can <strong>force-install</strong> specific skills (e.g., "Legal Compliance Check") to all team members
              so they appear automatically in their accounts. This ensures company-wide consistency.
            </p>
          </div>
          <div>
            <p className="font-medium">Artifact Security Controls</p>
            <p className="text-sm text-muted-foreground mt-1">
              Admins can <strong>disable the ability for Artifacts to use MCP connectors</strong> globally.
              This prevents potential data exfiltration through artifact code that connects to external services.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <strong>Access:</strong> Team admins can find these controls in
              <strong> Admin Settings → Capabilities → Organization Defaults</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Ready to build interactive tools?</h3>
              <p className="text-sm text-muted-foreground">
                Learn how Artifacts let you create apps, dashboards, and documents.
              </p>
            </div>
            <Link
              href="/guides/artifacts"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              Artifacts Guide
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
