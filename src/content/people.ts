export type PeopleGroup = 'leadership' | 'board' | 'team' | 'staff' | 'advisers' | 'volunteers'

export interface Person {
  slug: string
  name: string
  role: string
  group: PeopleGroup
  bio: string
}

const p = (group: PeopleGroup, name: string, role: string, bio: string): Person => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  name, role, group, bio,
})

/**
 * Names, roles and bios are written for layout. Replace them with your real people.
 * Photos: add them in src/content/images.ts under `people`, using the slug shown by each person.
 */
export const PEOPLE: Person[] = [
  // Leadership
  p('leadership', 'Dr. Margaret Amshi', 'Executive Director', 'Leads the foundation’s strategy and partnerships with more than twenty years in public health and community development.'),
  p('leadership', 'Noro Dams', 'Director of Programs', 'Oversees program design and delivery, with a background in education policy and youth development.'),
  p('leadership', 'Fatima Bello', 'Director of Finance and Operations', 'Responsible for financial controls, reporting and day-to-day operations. A chartered accountant by training.'),
  p('leadership', 'Samuel Ekechuku', 'Director of Partnerships and Fundraising', 'Builds relationships with donors, corporate partners and local leaders to widen the foundation’s reach.'),

  // Board
  p('board', 'Barr. Ibrahim Yakubu', 'Chairman of the Board', 'A senior lawyer who guides governance, compliance and long-term direction.'),
  p('board', 'Mrs. Chiamaka Eze', 'Vice Chairperson', 'A business leader and advocate for women’s enterprise and financial inclusion.'),
  p('board', 'Mr. Tunde Balogun', 'Treasurer', 'A finance professional who oversees budgets, audits and the foundation’s financial health.'),
  p('board', 'Hajiya Maryam Sani', 'Board Secretary', 'Brings experience in public administration and community mobilization.'),
  p('board', 'Engr. Daniel Audu', 'Trustee', 'An infrastructure specialist who supports project planning and risk oversight.'),
  p('board', 'Dr. Blessing Amadi', 'Trustee', 'A physician and public health researcher who advises on health and wellbeing programs.'),

  // Team
  p('team', 'Aisha Lawal', 'Senior Program Officer, Education', 'Manages scholarships, school partnerships and learning programs.'),
  p('team', 'Chinedu Nwosu', 'Program Officer, Youth Empowerment', 'Runs skills training, mentorship and enterprise support for young people.'),
  p('team', 'Hadiza Musa', 'Program Officer, Women’s Empowerment', 'Supports women entrepreneurs with training, savings groups and market links.'),
  p('team', 'Grace Okafor', 'Safeguarding and Counselling Coordinator', 'Leads child protection practice and coordinates counselling services.'),
  p('team', 'Yusuf Garba', 'Monitoring and Evaluation Officer', 'Tracks results, collects feedback and prepares impact reports.'),
  p('team', 'Ifeoma Obi', 'Communications Officer', 'Tells the foundation’s story across the website, social media and the press.'),
  p('team', 'Peter Danjuma', 'Volunteer Coordinator', 'Recruits, trains and supports the foundation’s volunteers.'),
  p('team', 'Zainab Abdullahi', 'Cooperative Society Officer', 'Manages membership, contributions and loan services for the cooperative.'),

  // Staff
  p('staff', 'Rita Eze', 'Administrative Officer', 'Keeps the office, records and appointments running smoothly.'),
  p('staff', 'Sadiq Ibrahim', 'Accountant', 'Handles bookkeeping, payments and donor reconciliation.'),
  p('staff', 'Joy Ekong', 'Field Coordinator', 'Coordinates outreach activities and community visits.'),
  p('staff', 'Abdulrahman Sule', 'Logistics Officer', 'Manages supplies, transport and event logistics.'),
  p('staff', 'Mercy Udo', 'Social Worker', 'Visits families, supports referrals and follows up on cases.'),
  p('staff', 'Kelechi Anyanwu', 'ICT and Data Officer', 'Maintains systems, databases and the foundation’s digital tools.'),

  // Professional advisers
  p('advisers', 'Barr. Folake Adeyemi', 'Legal Adviser', 'Advises on registration, contracts and regulatory compliance.'),
  p('advisers', 'Mr. Chukwudi Ibe, FCA', 'Auditor and Financial Adviser', 'Provides independent guidance on audits and financial reporting.'),
  p('advisers', 'Dr. Halima Aliyu', 'Medical Adviser', 'Advises on health outreach, clinical standards and referrals.'),
  p('advisers', 'Prof. Joseph Okeke', 'Education Adviser', 'Guides learning programs and scholarship selection standards.'),
  p('advisers', 'Mrs. Rahila Dogo', 'Child Safeguarding Adviser', 'Reviews safeguarding policy and training for staff and volunteers.'),

  // Volunteers (featured)
  p('volunteers', 'Tolu Akinwale', 'Volunteer Tutor', 'Gives two evenings a week helping secondary school students with mathematics.'),
  p('volunteers', 'Nurse Patience Ogar', 'Health Outreach Volunteer', 'Leads blood pressure screening at community wellness days.'),
  p('volunteers', 'Ahmed Kabir', 'Mentor', 'Mentors young entrepreneurs on pricing, records and customer care.'),
  p('volunteers', 'Esther Bako', 'Outreach Volunteer', 'Visits older residents and coordinates the weekly check-in team.'),
  p('volunteers', 'Chidozie Nnaji', 'Photographer and Storyteller', 'Documents foundation events with care for consent and dignity.'),
  p('volunteers', 'Amara Obiora', 'Skills Trainer', 'Teaches digital literacy classes on Saturdays.'),
]

export const PEOPLE_GROUPS: Record<PeopleGroup, { title: string; to: string; intro: string; description: string }> = {
  leadership: { title: 'Leadership', to: '/about/leadership', intro: 'The leaders who set our direction and answer for our results.', description: 'Meet the leadership team of Margaret Amshi Foundation.' },
  board: { title: 'Board', to: '/about/board', intro: 'Trustees who oversee governance, strategy and accountability.', description: 'Meet the board of trustees of Margaret Amshi Foundation.' },
  team: { title: 'Team', to: '/about/team', intro: 'The people who plan and deliver our programs every day.', description: 'Meet the program team of Margaret Amshi Foundation.' },
  staff: { title: 'Staff', to: '/about/staff', intro: 'Our operations and field staff keep the work moving.', description: 'Meet the operations and field staff of Margaret Amshi Foundation.' },
  advisers: { title: 'Professional Advisers', to: '/about/advisers', intro: 'Specialists who give us independent, expert advice.', description: 'Meet the professional advisers who support Margaret Amshi Foundation.' },
  volunteers: { title: 'Volunteers', to: '/about/volunteers', intro: 'Volunteers give their time and skills to make our programs possible.', description: 'Meet the volunteers who power Margaret Amshi Foundation’s work.' },
}

export const peopleIn = (group: PeopleGroup) => PEOPLE.filter((x) => x.group === group)
