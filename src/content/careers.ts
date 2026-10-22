export interface Career {
  slug: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  deadline: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

const benefits = ['Competitive salary', 'Health insurance', 'Learning and development budget', 'A supportive, mission-driven team']

/** Job openings. Replace with real vacancies or remove entries you do not need. */
export const CAREERS: Career[] = [
  { slug: 'program-officer-education', title: 'Program Officer, Education', department: 'Programs', location: 'Nigeria (hybrid)', type: 'Full-time', deadline: '2026-11-20', summary: 'Manage scholarships, school partnerships and learning programs.',
    responsibilities: ['Run the scholarship application and selection process', 'Coordinate learning clubs with partner schools', 'Track results and prepare reports', 'Support mentors and volunteers'],
    requirements: ['Degree in education, social sciences or a related field', '3 or more years of program experience', 'Strong communication and organizing skills', 'Passion for equity in education'], benefits },
  { slug: 'communications-content-officer', title: 'Communications and Content Officer', department: 'Communications', location: 'Nigeria (hybrid)', type: 'Full-time', deadline: '2026-11-25', summary: 'Tell the foundation’s story across the website, social media and the press.',
    responsibilities: ['Plan and publish weekly content', 'Photograph and write field stories with consent and dignity', 'Manage social media channels', 'Support media relations'],
    requirements: ['Degree in communications, journalism or related field', '2 or more years of content experience', 'Excellent writing and basic photo or video skills', 'Understanding of safeguarding and consent'], benefits },
  { slug: 'finance-grants-officer', title: 'Finance and Grants Officer', department: 'Finance and Operations', location: 'Nigeria (hybrid)', type: 'Full-time', deadline: '2026-12-05', summary: 'Manage grant payments, donor reconciliation and financial reporting.',
    responsibilities: ['Process and reconcile payments and donations', 'Monitor grant budgets', 'Support audits and reporting', 'Maintain financial records'],
    requirements: ['Degree in accounting or finance; professional certification an advantage', '3 or more years of finance experience', 'Strong attention to detail and integrity', 'Experience with accounting software'], benefits },
  { slug: 'volunteer-coordinator-intern', title: 'Volunteer Program Intern', department: 'Programs', location: 'Nigeria (hybrid)', type: 'Internship', deadline: '2026-12-10', summary: 'Support recruitment, training and recognition of volunteers for six months.',
    responsibilities: ['Help screen and onboard volunteers', 'Schedule volunteer shifts', 'Support volunteer training sessions', 'Keep volunteer records up to date'],
    requirements: ['Recent graduate or final-year student', 'Friendly, organized and reliable', 'Basic computer skills', 'Interest in community development'], benefits: ['Monthly stipend', 'Mentorship', 'Certificate and reference', 'A chance to join the team'] },
]
