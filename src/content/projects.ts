export interface ProjectUpdate {
  slug: string
  title: string
  program: string
  date: string
  location: string
  status: 'Completed' | 'On track' | 'In progress'
  progress: number
  summary: string
}

export const PROJECT_UPDATES: ProjectUpdate[] = [
  { slug: 'back-to-school-2026', title: 'Back to School Drive 2026', program: 'Education', date: '2026-09-05', location: 'Kaduna', status: 'Completed', progress: 100, summary: 'Uniforms, books and bags were delivered to 400 students. Follow-up visits are scheduled for November.' },
  { slug: 'benue-flood-recovery', title: 'Benue Flood Recovery', program: 'Humanitarian Emergencies', date: '2026-10-02', location: 'Benue State', status: 'In progress', progress: 65, summary: 'Relief reached 310 households. 42 homes have been repaired so far and 20 small businesses restarted.' },
  { slug: 'digital-skills-cohort-3', title: 'Digital Skills Bootcamp, Cohort 3', program: 'Training', date: '2026-09-28', location: 'Lagos', status: 'Completed', progress: 100, summary: '120 graduates received certificates. Mentor follow-up runs until December.' },
  { slug: 'womens-market-days', title: 'Women’s Market Days', program: 'Women’s Empowerment', date: '2026-10-10', location: 'Kano and Kaduna', status: 'On track', progress: 50, summary: 'Two of four market days completed with 85 women selling products.' },
  { slug: 'elderly-weekly-visits', title: 'Weekly Visits for Older Residents', program: 'Support for the Elderly', date: '2026-10-14', location: 'Kaduna', status: 'On track', progress: 70, summary: '96 older residents are now visited each week by trained volunteers.' },
  { slug: 'scholarship-2026-27', title: 'Scholarship Round 2026/2027', program: 'Scholarships', date: '2026-10-09', location: 'Nationwide', status: 'In progress', progress: 20, summary: 'Applications opened on 9 October and close on 30 November 2026.' },
]
