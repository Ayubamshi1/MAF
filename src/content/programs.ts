import type { NavGroup } from './navigation'
import { NAV } from './navigation'

export interface ProgramSummary {
  slug: string
  title: string
  to: string
  icon: string
  group: string
  summary: string
}

/** Short descriptions used on the home page and program cards. Stage 2 adds the full page content. */
const SUMMARIES: Record<string, string> = {
  fundraising: 'Join community campaigns, choose how to give and see exactly where every naira goes.',
  grants: 'Funding for community organizations and projects that expand opportunity locally.',
  scholarships: 'Awards that cover school costs so bright students can stay in class and finish strong.',
  'cooperative-society': 'A member-owned society for saving, borrowing responsibly and supporting one another.',
  'youth-empowerment': 'Skills, mentorship and enterprise pathways that help young people move forward.',
  'womens-empowerment': 'Business support, financial skills and leadership development for women.',
  'support-for-the-elderly': 'Practical care, health support and companionship for older members of our communities.',
  'support-for-vulnerable-children': 'Essentials, education support and safeguarding for children who need it most.',
  'humanitarian-emergencies': 'Fast, verified relief for families affected by floods, displacement and other crises.',
  education: 'Learning materials, school support and resources that make education possible.',
  training: 'Practical courses in digital skills, business, trades and personal development.',
  'coaching-and-mentorship': 'One-to-one and group guidance from experienced professionals and leaders.',
  counselling: 'Confidential, professional counselling for individuals, couples and families.',
  volunteering: 'Meaningful roles for people who want to give their time and skills.',
}

const programsNav = NAV.find((n) => n.to === '/programs')
const groups: NavGroup[] = programsNav?.groups ?? []

export const PROGRAM_GROUPS = groups.map((g) => ({
  title: g.title,
  programs: g.links.map<ProgramSummary>((link) => {
    const slug = link.to.replace('/programs/', '')
    return { slug, title: link.label, to: link.to, icon: link.icon, group: g.title, summary: SUMMARIES[slug] ?? link.description }
  }),
}))

export const ALL_PROGRAMS: ProgramSummary[] = PROGRAM_GROUPS.flatMap((g) => g.programs)
export const PROGRAM_OPTIONS = ALL_PROGRAMS.map((p) => p.title)
