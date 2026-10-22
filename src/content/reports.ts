export interface Report {
  slug: string
  title: string
  year: string
  published: string
  pages: number
  summary: string
  highlights: string[]
  /** Path of the PDF in /public (for example '/downloads/annual-report-2025.pdf'). Leave empty to show a "Request a copy" button. */
  file?: string
}

export const REPORTS: Report[] = [
  { slug: 'annual-report-2025', title: 'Annual Report 2025', year: '2025', published: '2026-03-20', pages: 48, summary: 'Results, finances and lessons from our work across Nigeria in 2025.', highlights: ['18,500 people reached', '640 scholarships and grants awarded', '42 communities served', 'Independent audit completed'] },
  { slug: 'annual-report-2024', title: 'Annual Report 2024', year: '2024', published: '2025-03-18', pages: 44, summary: 'A year of growth in education, empowerment and emergency response.', highlights: ['14,200 people reached', '480 scholarships and grants awarded', '31 communities served', 'Cooperative Society membership doubled'] },
  { slug: 'annual-report-2023', title: 'Annual Report 2023', year: '2023', published: '2024-03-15', pages: 40, summary: 'Building the foundations for programs that last.', highlights: ['10,100 people reached', '350 scholarships and grants awarded', '24 communities served', 'Volunteer program launched'] },
  { slug: 'half-year-review-2026', title: 'Half-Year Review 2026', year: '2026', published: '2026-08-05', pages: 20, summary: 'A mid-year look at progress against our 2026 goals.', highlights: ['Programs on track', 'Scholarship round opened early', 'Flood response plan tested'] },
]
