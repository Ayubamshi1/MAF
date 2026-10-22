export interface NavLinkItem {
  label: string
  to: string
  description: string
  icon: string
}
export interface NavGroup {
  title: string
  links: NavLinkItem[]
}
export interface NavItem {
  label: string
  to: string
  groups?: NavGroup[]
  mega?: boolean
}

const l = (label: string, to: string, icon: string, description: string): NavLinkItem => ({ label, to, icon, description })

export const NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    groups: [
      {
        title: 'The foundation',
        links: [
          l('About Us', '/about', 'Building2', 'Who we are and how we work.'),
          l('Mission and Vision', '/about/mission-vision', 'Compass', 'Where we are going and why.'),
          l('Our Values', '/about/values', 'Gem', 'The six values that guide every decision.'),
        ],
      },
      {
        title: 'Our people',
        links: [
          l('Our Founder', '/about/founder', 'HeartHandshake', 'The story and vision of Margaret Amshi.'),
          l('Leadership', '/about/leadership', 'UserRound', 'The leaders who set our direction.'),
          l('Board', '/about/board', 'Scale', 'Trustees who oversee governance.'),
          l('Team', '/about/team', 'Users', 'The people who deliver our programs.'),
          l('Staff', '/about/staff', 'Briefcase', 'Our operations and programs staff.'),
          l('Professional Advisers', '/about/advisers', 'BadgeCheck', 'Specialists who advise the foundation.'),
          l('Volunteers', '/about/volunteers', 'HeartHandshake', 'The volunteers who power our work.'),
        ],
      },
    ],
  },
  {
    label: 'Programs and Services',
    to: '/programs',
    mega: true,
    groups: [
      {
        title: 'Giving and funding',
        links: [
          l('Fundraising', '/programs/fundraising', 'HandCoins', 'Campaigns, donation options and fund allocation.'),
          l('Grants', '/programs/grants', 'Landmark', 'Funding for organizations and projects.'),
          l('Scholarships', '/programs/scholarships', 'GraduationCap', 'Awards that keep students in school.'),
          l('Cooperative Society', '/programs/cooperative-society', 'PiggyBank', 'Savings, loans and mutual support.'),
        ],
      },
      {
        title: 'Empowerment and care',
        links: [
          l('Youth Empowerment', '/programs/youth-empowerment', 'Rocket', 'Skills and pathways for young people.'),
          l("Women's Empowerment", '/programs/womens-empowerment', 'Flower2', 'Business support and leadership.'),
          l('Support for the Elderly', '/programs/support-for-the-elderly', 'Heart', 'Care and assistance for older people.'),
          l('Support for Vulnerable Children', '/programs/support-for-vulnerable-children', 'Baby', 'Protection and essentials for children.'),
          l('Humanitarian Emergencies', '/programs/humanitarian-emergencies', 'LifeBuoy', 'Rapid response when crisis strikes.'),
        ],
      },
      {
        title: 'Learning and growth',
        links: [
          l('Education', '/programs/education', 'BookOpen', 'Learning support and resources.'),
          l('Training', '/programs/training', 'Presentation', 'Practical courses and certifications.'),
          l('Coaching and Mentorship', '/programs/coaching-and-mentorship', 'Compass', 'Guidance from experienced mentors.'),
          l('Counselling', '/programs/counselling', 'MessagesSquare', 'Confidential, professional support.'),
          l('Volunteering', '/programs/volunteering', 'Users', 'Give your time and skills.'),
        ],
      },
    ],
  },
  {
    label: 'Get Involved',
    to: '/get-involved',
    groups: [
      {
        title: 'Ways to help',
        links: [
          l('Donate', '/donate', 'HandHeart', 'Give securely online or by bank transfer.'),
          l('Fundraise', '/get-involved/fundraise', 'HandCoins', 'Start a campaign for a cause you care about.'),
          l('Volunteer', '/get-involved/volunteer', 'Users', 'Offer your time, skills and energy.'),
        ],
      },
      {
        title: 'Join and partner',
        links: [
          l('Become a Member', '/get-involved/become-a-member', 'PiggyBank', 'Join our cooperative society.'),
          l('Refer Someone', '/get-involved/refer-someone', 'UserPlus', 'Connect someone who needs support.'),
          l('How to Partner', '/get-involved/partner', 'HeartHandshake', 'Partnerships for organizations and businesses.'),
          l('Careers', '/careers', 'Briefcase', 'Open roles and how to apply.'),
        ],
      },
    ],
  },
  {
    label: 'Impact and Accountability',
    to: '/impact',
    groups: [
      {
        title: 'Results',
        links: [
          l('Impact Overview', '/impact', 'BarChart3', 'What we have delivered and learned.'),
          l('Stories', '/impact/stories', 'Quote', 'Real experiences from the people we serve.'),
          l('Annual Reports', '/impact/reports', 'FileText', 'Yearly results and reflections.'),
          l('Project Updates', '/impact/project-updates', 'ListChecks', 'Progress on current projects.'),
        ],
      },
      {
        title: 'Accountability',
        links: [
          l('Financial Summaries', '/impact/financial-summaries', 'PieChart', 'How funds are received and used.'),
          l('Donation Transparency', '/impact/transparency', 'ShieldCheck', 'Receipts and how contributions are used.'),
          l('Financial and Legal Information', '/financial-and-legal', 'Scale', 'Governance, policies and documents.'),
        ],
      },
    ],
  },
  {
    label: 'News and Resources',
    to: '/resources',
    groups: [
      {
        title: 'Latest',
        links: [
          l('News', '/news', 'Newspaper', 'Announcements and updates.'),
          l('Events', '/events', 'CalendarDays', 'Upcoming and past events.'),
        ],
      },
      {
        title: 'Resources',
        links: [
          l('Application Notices', '/resources/application-notices', 'Bell', 'Open calls, deadlines and notices.'),
          l('Downloads', '/resources/downloads', 'Download', 'Forms and documents to download.'),
          l('FAQs', '/faqs', 'CircleHelp', 'Answers to common questions.'),
        ],
      },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

/** Pages that exist outside the main menu. */
const EXTRA_ROUTES: { to: string; label: string; description: string }[] = [
  { to: '/privacy', label: 'Privacy Policy', description: 'How we handle your information.' },
  { to: '/terms', label: 'Terms of Use', description: 'The terms that apply when you use this website.' },
]

export interface RouteInfo {
  to: string
  title: string
  description: string
  parent?: { label: string; to: string }
  siblings: NavLinkItem[]
}

/** Lookup used by breadcrumbs and the generic page template. */
export function findRoute(path: string): RouteInfo | undefined {
  for (const item of NAV) {
    if (!item.groups) continue
    for (const g of item.groups) {
      const hit = g.links.find((x) => x.to === path)
      if (hit) {
        const siblings = item.groups.flatMap((gg) => gg.links).filter((x) => x.to !== path)
        return { to: path, title: hit.label, description: hit.description, parent: path === item.to ? undefined : { label: item.label, to: item.to }, siblings }
      }
    }
    if (item.to === path) {
      return { to: path, title: item.label, description: '', siblings: item.groups.flatMap((g) => g.links) }
    }
  }
  const extra = EXTRA_ROUTES.find((x) => x.to === path)
  if (extra) return { to: path, title: extra.label, description: extra.description, siblings: [] }
  const top = NAV.find((n) => n.to === path)
  if (top) return { to: path, title: top.label, description: '', siblings: [] }
  return undefined
}

export const ALL_STATIC_PATHS: string[] = Array.from(
  new Set([
    ...NAV.map((n) => n.to),
    ...NAV.flatMap((n) => (n.groups ?? []).flatMap((g) => g.links.map((x) => x.to))),
    ...EXTRA_ROUTES.map((e) => e.to),
  ]),
)

export const FOOTER_LEGAL = EXTRA_ROUTES
