/** Impact figures shown on the home page and the Impact pages. Edit the numbers here only. */
export const IMPACT_STATS = [
  { value: 18500, suffix: '+', label: 'People reached', note: 'through our programs and partnerships' },
  { value: 640, suffix: '+', label: 'Scholarships and grants', note: 'awarded to students and community projects' },
  { value: 42, suffix: '', label: 'Communities served', note: 'across Nigeria' },
  { value: 850, suffix: '+', label: 'Active volunteers', note: 'giving their time and skills' },
] as const

/** How gifts are allocated. Used on the Donate and Donation Transparency pages. */
export const ALLOCATION = [
  { label: 'Programs and direct support', value: 82, color: 'bg-ocean' },
  { label: 'Operations and governance', value: 12, color: 'bg-sky' },
  { label: 'Fundraising and outreach', value: 6, color: 'bg-leaf' },
] as const

/** Results dashboard on the Impact page. */
export const RESULTS = [
  { value: 18500, suffix: '+', label: 'People reached', detail: 'across all programs in the last year' },
  { value: 640, suffix: '+', label: 'Scholarships and grants', detail: 'awarded to students and community projects' },
  { value: 1200, suffix: '+', label: 'Women entrepreneurs supported', detail: 'with training, savings groups or funding' },
  { value: 96, suffix: '', label: 'Older residents visited weekly', detail: 'by trained volunteers' },
  { value: 1150, suffix: '', label: 'Households reached in emergencies', detail: 'with food, shelter and clean water' },
  { value: 850, suffix: '+', label: 'Active volunteers', detail: 'giving their time and skills' },
] as const
