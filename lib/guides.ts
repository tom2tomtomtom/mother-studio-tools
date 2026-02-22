export interface GuideEntry {
  file: string;
  title: string;
  description: string;
}

// Maps team slugs to their guide(s)
export const teamGuides: Record<string, GuideEntry[]> = {
  'creative': [
    {
      file: 'Guide_Creative.md',
      title: 'AI Tools for Creative',
      description: 'Use Claude as a creative sparring partner and NotebookLM as your reference library.',
    },
    {
      file: 'Guide_Creative_Visual_AI.md',
      title: 'Visual AI Tools for Creative',
      description: 'Generate, iterate, and prototype visual and video work with Flow, Nano Banana Pro, Veo, and Runway.',
    },
  ],
  'strategy': [],
  'account-management': [
    {
      file: 'Guide_Account_Management.md',
      title: 'AI Tools for Account Management',
      description: 'Prepare for meetings faster, draft client communications, and stay across your clients\' industries.',
    },
  ],
  'production': [
    {
      file: 'Guide_Production.md',
      title: 'AI Tools for Production',
      description: 'Create production specs, research vendors, estimate timelines, and troubleshoot technical requirements.',
    },
  ],
  'design': [
    {
      file: 'Guide_Design.md',
      title: 'AI Tools for Design',
      description: 'Research trends, translate briefs into visual direction, and articulate design rationale.',
    },
    {
      file: 'Guide_Design_Visual_AI.md',
      title: 'Visual AI Tools for Design',
      description: 'Generate layouts, explore motion design, and prototype visual directions with Flow, Nano Banana Pro, Veo, and Runway.',
    },
  ],
  'digital': [
    {
      file: 'Guide_Digital.md',
      title: 'AI Tools for Digital',
      description: 'Interpret analytics, research platform trends, build digital strategy, and troubleshoot campaign performance.',
    },
  ],
  'copywriting': [
    {
      file: 'Guide_Copywriting.md',
      title: 'AI Tools for Copywriting',
      description: 'Explore tonal directions, generate headline variants, pressure-test your work, and break through creative blocks.',
    },
  ],
  'new-business': [
    {
      file: 'Guide_New_Business.md',
      title: 'AI Tools for New Business',
      description: 'Research prospects, analyse RFPs, draft proposals, and build competitive pitch intelligence.',
    },
  ],
  'project-management': [
    {
      file: 'Guide_Project_Management.md',
      title: 'AI Tools for Project Management',
      description: 'Build timelines, identify risks, write status reports, and keep project documentation sharp.',
    },
  ],
};
