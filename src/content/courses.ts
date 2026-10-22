export interface Course {
  slug: string
  title: string
  category: 'Digital skills' | 'Business' | 'Trades' | 'Personal development'
  duration: string
  schedule: string
  mode: 'In person' | 'Online' | 'Hybrid'
  eligibility: string
  fee: string
  summary: string
}

/** Course list used by the Training page and the registration form. Edit freely. */
export const COURSES: Course[] = [
  { slug: 'digital-literacy-essentials', title: 'Digital Literacy Essentials', category: 'Digital skills', duration: '4 weeks', schedule: 'Tuesdays and Thursdays, 10:00 am to 12:00 pm', mode: 'In person', eligibility: 'Open to everyone aged 16 and above', fee: 'Free', summary: 'Confident use of phones, email, the internet and online safety.' },
  { slug: 'web-design-basics', title: 'Web Design Basics', category: 'Digital skills', duration: '8 weeks', schedule: 'Saturdays, 10:00 am to 2:00 pm', mode: 'Hybrid', eligibility: 'Basic computer skills; ages 16 to 35', fee: 'Free for qualifying applicants; otherwise ₦15,000', summary: 'Plan, design and publish a simple website from scratch.' },
  { slug: 'business-start-up', title: 'Start and Run a Small Business', category: 'Business', duration: '6 weeks', schedule: 'Wednesdays, 4:00 pm to 6:30 pm', mode: 'In person', eligibility: 'Aspiring and existing small business owners', fee: '₦5,000 (subsidized)', summary: 'Business planning, pricing, record keeping and customer care.' },
  { slug: 'financial-literacy', title: 'Financial Literacy and Savings', category: 'Business', duration: '3 weeks', schedule: 'Fridays, 2:00 pm to 4:00 pm', mode: 'Online', eligibility: 'Open to everyone aged 18 and above', fee: 'Free', summary: 'Budgeting, saving, avoiding debt traps and planning for the future.' },
  { slug: 'tailoring-and-fashion', title: 'Tailoring and Fashion Design', category: 'Trades', duration: '12 weeks', schedule: 'Mondays to Thursdays, 9:00 am to 1:00 pm', mode: 'In person', eligibility: 'Women and young people; no experience needed', fee: 'Free for qualifying applicants', summary: 'Pattern making, garment construction and starting a tailoring business.' },
  { slug: 'catering-and-baking', title: 'Catering and Baking', category: 'Trades', duration: '8 weeks', schedule: 'Tuesdays and Saturdays, 9:00 am to 1:00 pm', mode: 'In person', eligibility: 'Open to everyone aged 18 and above', fee: '₦10,000 (subsidized)', summary: 'Food safety, recipes, costing and selling baked and catered goods.' },
  { slug: 'leadership-and-communication', title: 'Leadership and Communication', category: 'Personal development', duration: '5 weeks', schedule: 'Thursdays, 5:00 pm to 7:00 pm', mode: 'Hybrid', eligibility: 'Young professionals and community leaders', fee: 'Free', summary: 'Public speaking, teamwork and leading with integrity.' },
  { slug: 'job-readiness', title: 'Job Readiness and Interview Skills', category: 'Personal development', duration: '2 weeks', schedule: 'Weekdays, 11:00 am to 1:00 pm', mode: 'Online', eligibility: 'Graduates and job seekers', fee: 'Free', summary: 'CV writing, interview practice and professional etiquette.' },
]
export const COURSE_OPTIONS = COURSES.map((c) => c.title)
