export interface DownloadItem {
  title: string
  description: string
  category: 'Application forms' | 'Program forms' | 'Partnership'
  file: string
  size: string
}

/** Files live in public/downloads/. Replace the PDFs with your official forms using the same file names. */
export const DOWNLOADS: DownloadItem[] = [
  { title: 'Grant Application Form', description: 'For organizations and groups applying for grant funding.', category: 'Application forms', file: '/downloads/grant-application-form.pdf', size: '3 KB' },
  { title: 'Scholarship Application Form', description: 'For secondary and tertiary students applying for scholarships.', category: 'Application forms', file: '/downloads/scholarship-application-form.pdf', size: '3 KB' },
  { title: 'Volunteer Application Form', description: 'Offer your time and skills to the foundation.', category: 'Program forms', file: '/downloads/volunteer-application-form.pdf', size: '3 KB' },
  { title: 'Cooperative Society Membership Form', description: 'Join the cooperative society as an individual or group.', category: 'Program forms', file: '/downloads/cooperative-membership-form.pdf', size: '3 KB' },
  { title: 'Training Registration Form', description: 'Register for a training course.', category: 'Program forms', file: '/downloads/training-registration-form.pdf', size: '3 KB' },
  { title: 'Mentorship Sign-up Form', description: 'Sign up as a mentor or mentee.', category: 'Program forms', file: '/downloads/mentorship-signup-form.pdf', size: '3 KB' },
  { title: 'Referral Form', description: 'Refer a person or family who needs support. Share general details only.', category: 'Program forms', file: '/downloads/referral-form.pdf', size: '3 KB' },
  { title: 'Partnership Inquiry Form', description: 'Tell us how your organization would like to partner.', category: 'Partnership', file: '/downloads/partnership-inquiry-form.pdf', size: '3 KB' },
]
