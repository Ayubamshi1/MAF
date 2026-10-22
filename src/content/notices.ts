export interface Notice {
  slug: string
  title: string
  posted: string
  deadline?: string
  status: 'Open' | 'Opening soon' | 'Rolling' | 'Closed'
  summary: string
  to: string
  cta: string
}

export const NOTICES: Notice[] = [
  { slug: 'scholarships-2026-27', title: 'Scholarship applications 2026/2027', posted: '2026-10-09', deadline: '2026-11-30', status: 'Open', summary: 'Secondary and tertiary students can apply for awards covering tuition and learning materials.', to: '/programs/scholarships', cta: 'Apply for a scholarship' },
  { slug: 'community-grants-round-1', title: 'Community grants, Round 1 (2027)', posted: '2026-10-15', deadline: '2027-01-31', status: 'Opening soon', summary: 'Applications open on 1 November 2026 for community organizations and groups.', to: '/programs/grants', cta: 'See grant details' },
  { slug: 'training-january-2027', title: 'Training courses, January 2027 intake', posted: '2026-10-12', deadline: '2026-12-15', status: 'Open', summary: 'Register for digital skills, business, trades and leadership courses starting in January.', to: '/programs/training', cta: 'View courses' },
  { slug: 'volunteer-recruitment', title: 'Volunteer recruitment', posted: '2026-09-01', status: 'Rolling', summary: 'We recruit volunteers throughout the year for tutoring, outreach, mentoring and media.', to: '/programs/volunteering', cta: 'Apply to volunteer' },
  { slug: 'cooperative-membership', title: 'Cooperative Society membership', posted: '2026-08-20', status: 'Rolling', summary: 'New members are welcome at any time. Weekly, monthly and quarterly plans are available.', to: '/programs/cooperative-society', cta: 'Become a member' },
  { slug: 'scholarships-2025-26', title: 'Scholarship applications 2025/2026', posted: '2025-10-01', deadline: '2025-11-30', status: 'Closed', summary: 'This round has closed. Awards were announced in February 2026.', to: '/impact/reports', cta: 'Read the annual report' },
]
