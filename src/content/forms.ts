import { FUND_OPTIONS } from '@/config/paystack'
import { PROGRAM_OPTIONS } from './programs'
import { COURSE_OPTIONS } from './courses'

export type FieldType = 'text' | 'tel' | 'email' | 'number' | 'date' | 'textarea' | 'select' | 'checkbox'

export interface FieldDef {
  name: string
  label: string
  type: FieldType
  required?: boolean
  options?: readonly string[]
  placeholder?: string
  hint?: string
  autoComplete?: string
  /** Span both columns on wide screens. */
  full?: boolean
  min?: number
  /** For date fields: restrict to future or past dates. */
  dateRange?: 'future' | 'past'
  maxLength?: number
  rows?: number
}

export interface FormDef {
  key: string
  title: string
  /** First line of the WhatsApp message. */
  greeting: string
  submitLabel: string
  intro?: string
  notice?: { tone: 'info' | 'warning'; text: string }
  fields: FieldDef[]
  /** Optional per-form WhatsApp number override (international format, no +). */
  whatsappNumber?: string
}

const f = (name: string, label: string, type: FieldType = 'text', extra: Partial<FieldDef> = {}): FieldDef => ({ name, label, type, ...extra })
const name = (label = 'Full name') => f('name', label, 'text', { required: true, autoComplete: 'name', maxLength: 80 })
const phone = (label = 'Phone number (WhatsApp preferred)') =>
  f('phone', label, 'tel', { required: true, autoComplete: 'tel', placeholder: '0803 123 4567' })
const email = (required = false) => f('email', 'Email address', 'email', { required, autoComplete: 'email', placeholder: 'you@example.com' })
const message = (label = 'Your message', required = false) => f('message', label, 'textarea', { required, full: true, rows: 4, maxLength: 800 })

const SAFEGUARDING = 'For your safety and privacy, please do not include detailed personal information here. Our team will follow up with you directly.'
/** Geopolitical zones, so the foundation can serve every part of Nigeria. */
const LOCATIONS = ['North Central', 'North East', 'North West', 'South East', 'South South', 'South West', 'Outside Nigeria'] as const
const EDUCATION_LEVELS = ['Primary', 'Secondary', 'Diploma / OND', 'Undergraduate', 'Postgraduate', 'Other'] as const

const referralFields = (support: readonly string[]): FieldDef[] => [
  name('Your full name'),
  phone('Your phone number'),
  f('relationship', 'Your relationship to the person', 'text', { required: true, placeholder: 'For example neighbour, relative, teacher', maxLength: 80 }),
  f('support', 'Type of support needed', 'select', { required: true, options: support }),
  f('area', 'General area or LGA', 'text', { required: true, placeholder: 'Your local government area', maxLength: 80 }),
  f('urgency', 'How urgent is it?', 'select', { required: true, options: ['Not urgent', 'Within a few weeks', 'Within a few days', 'Urgent, today'] }),
  f('consent', 'I have the person’s permission (or their guardian’s) to share this referral.', 'checkbox', { required: true, full: true }),
]

export const FORMS: Record<string, FormDef> = {
  contact: {
    key: 'contact', title: 'Contact message', greeting: 'Hello Margaret Amshi Foundation, I would like to get in touch.', submitLabel: 'Send on WhatsApp',
    fields: [name(), phone(), email(), f('subject', 'Subject', 'select', { required: true, options: ['General enquiry', 'Donations', 'Programs and services', 'Partnerships', 'Volunteering', 'Media', 'Feedback or complaint', 'Other'] }), message('How can we help?', true)],
  },
  volunteer: {
    key: 'volunteer', title: 'Volunteer application', greeting: 'Hello Margaret Amshi Foundation, I would like to volunteer.', submitLabel: 'Apply on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('location', 'Where are you based?', 'select', { required: true, options: LOCATIONS }),
      f('interest', 'Area of interest', 'select', { required: true, options: ['Teaching and tutoring', 'Mentorship', 'Events and outreach', 'Media and content', 'Fundraising', 'Admin and office support', 'Health and wellbeing', 'Professional skills (legal, finance, IT)'] }),
      f('availability', 'Availability', 'select', { required: true, options: ['Weekdays', 'Weekends', 'Evenings', 'Flexible', 'Events only'] }),
      f('skills', 'Skills you can offer', 'text', { full: true, maxLength: 200 }),
      f('experience', 'Previous volunteering experience', 'textarea', { full: true, rows: 3, maxLength: 500 }),
      message('Anything else we should know?'),
    ],
  },
  fundraiser: {
    key: 'fundraiser', title: 'Fundraiser request', greeting: 'Hello Margaret Amshi Foundation, I would like to start a fundraiser.', submitLabel: 'Send on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('campaign', 'Campaign title', 'text', { required: true, maxLength: 100 }),
      f('cause', 'Cause or program to support', 'select', { required: true, options: PROGRAM_OPTIONS }),
      f('target', 'Target amount (₦)', 'number', { required: true, min: 1000, placeholder: '500000' }),
      f('endDate', 'Campaign end date', 'date', { required: true, dateRange: 'future' }),
      f('story', 'Tell us the story behind your campaign', 'textarea', { required: true, full: true, rows: 4, maxLength: 800 }),
    ],
  },
  membership: {
    key: 'membership', title: 'Cooperative membership request', greeting: 'Hello Margaret Amshi Foundation, I would like to join the Cooperative Society.', submitLabel: 'Apply on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('occupation', 'Occupation', 'text', { required: true, maxLength: 80 }),
      f('location', 'Location', 'select', { required: true, options: LOCATIONS }),
      f('membershipType', 'Membership type', 'select', { required: true, options: ['Individual', 'Group or association'] }),
      f('plan', 'Preferred contribution plan', 'select', { required: true, options: ['Weekly', 'Monthly', 'Quarterly', 'I need guidance'] }),
      message('Anything else we should know?'),
    ],
  },
  grant: {
    key: 'grant', title: 'Grant application', greeting: 'Hello Margaret Amshi Foundation, I would like to apply for a grant.', submitLabel: 'Apply on WhatsApp',
    notice: { tone: 'info', text: 'After sending, you can share supporting documents (proposal, registration papers, budget) in the same WhatsApp chat.' },
    fields: [
      f('name', 'Applicant or organization name', 'text', { required: true, maxLength: 100 }),
      f('contact', 'Contact person', 'text', { required: true, autoComplete: 'name', maxLength: 80 }),
      phone(), email(true),
      f('applicantType', 'Applicant type', 'select', { required: true, options: ['Registered NGO or charity', 'Community-based organization', 'Cooperative or association', 'Informal group', 'Individual'] }),
      f('projectTitle', 'Project title', 'text', { required: true, maxLength: 100 }),
      f('programArea', 'Program area', 'select', { required: true, options: PROGRAM_OPTIONS }),
      f('amount', 'Amount requested (₦)', 'number', { required: true, min: 10000 }),
      f('location', 'Project location', 'text', { required: true, maxLength: 100 }),
      f('beneficiaries', 'Expected number of beneficiaries', 'number', { required: true, min: 1 }),
      f('timeline', 'Project timeline', 'text', { required: true, placeholder: 'For example 6 months from January 2027', maxLength: 100 }),
      f('summary', 'Project summary', 'textarea', { required: true, full: true, rows: 5, maxLength: 800 }),
    ],
  },
  scholarship: {
    key: 'scholarship', title: 'Scholarship application', greeting: 'Hello Margaret Amshi Foundation, I would like to apply for a scholarship.', submitLabel: 'Apply on WhatsApp',
    notice: { tone: 'info', text: 'After sending, you can share your school admission letter or result slip in the same WhatsApp chat.' },
    fields: [
      name('Student’s full name'), phone('Phone number (student or guardian)'), email(),
      f('level', 'Level of education', 'select', { required: true, options: EDUCATION_LEVELS }),
      f('school', 'School or institution', 'text', { required: true, maxLength: 120 }),
      f('course', 'Class or course of study', 'text', { required: true, maxLength: 100 }),
      f('state', 'State of origin', 'text', { required: true, maxLength: 60 }),
      f('guardian', 'Parent or guardian’s name', 'text', { required: true, maxLength: 80 }),
      f('guardianPhone', 'Parent or guardian’s phone', 'tel', { required: true }),
      f('reason', 'Why are you applying?', 'textarea', { required: true, full: true, rows: 4, maxLength: 800 }),
    ],
  },
  referral: {
    key: 'referral', title: 'Referral', greeting: 'Hello Margaret Amshi Foundation, I would like to refer someone for support.', submitLabel: 'Send referral on WhatsApp',
    notice: { tone: 'warning', text: SAFEGUARDING },
    fields: referralFields(['Education support', 'Food and essentials', 'Health support', 'Counselling', 'Skills or business support', 'Emergency assistance', 'Other']),
  },
  'referral-elderly': {
    key: 'referral-elderly', title: 'Referral: support for the elderly', greeting: 'Hello Margaret Amshi Foundation, I would like to refer an older person for support.', submitLabel: 'Send referral on WhatsApp',
    notice: { tone: 'warning', text: SAFEGUARDING },
    fields: referralFields(['Food and essentials', 'Health and medication support', 'Home care or companionship', 'Transport to appointments', 'Housing repairs', 'Other']),
  },
  'referral-children': {
    key: 'referral-children', title: 'Referral: support for a vulnerable child', greeting: 'Hello Margaret Amshi Foundation, I would like to refer a child for support.', submitLabel: 'Send referral on WhatsApp',
    notice: { tone: 'warning', text: `${SAFEGUARDING} Please do not include a child’s full name, school, photo or home address.` },
    fields: [
      ...referralFields(['School fees and materials', 'Food and essentials', 'Health support', 'Protection concern', 'Counselling', 'Other']).slice(0, 4),
      f('ageGroup', 'Child’s age group', 'select', { required: true, options: ['Under 5', '5 to 9', '10 to 14', '15 to 17'] }),
      ...referralFields([]).slice(4),
    ],
  },
  counselling: {
    key: 'counselling', title: 'Counselling appointment request', greeting: 'Hello Margaret Amshi Foundation, I would like to book a counselling session.', submitLabel: 'Request on WhatsApp',
    notice: { tone: 'warning', text: `If you or someone else is in immediate danger, call 112 or our team on 0911 777 6004 now. ${SAFEGUARDING}` },
    fields: [
      f('name', 'First name', 'text', { required: true, autoComplete: 'given-name', maxLength: 40 }),
      phone(),
      f('contactMethod', 'Preferred way to be contacted', 'select', { required: true, options: ['WhatsApp message', 'Phone call', 'Email'] }),
      f('topic', 'What would you like support with?', 'select', { required: true, options: ['Family and relationships', 'Stress and anxiety', 'Grief and loss', 'Parenting', 'Young people and school pressure', 'Work and finances', 'Something else'] }),
      f('mode', 'Session type', 'select', { required: true, options: ['Phone call', 'Video call', 'In person'] }),
      f('date', 'Preferred date', 'date', { required: true, dateRange: 'future' }),
      f('time', 'Preferred time', 'select', { required: true, options: ['Morning (8 am to 12 pm)', 'Afternoon (12 pm to 4 pm)', 'Evening (4 pm to 7 pm)'] }),
    ],
  },
  training: {
    key: 'training', title: 'Training registration', greeting: 'Hello Margaret Amshi Foundation, I would like to register for a training course.', submitLabel: 'Register on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('course', 'Course', 'select', { required: true, options: COURSE_OPTIONS }),
      f('session', 'Preferred session', 'select', { required: true, options: ['Next available', 'Weekday classes', 'Weekend classes', 'Online only'] }),
      f('education', 'Highest level of education', 'select', { required: true, options: EDUCATION_LEVELS }),
      f('location', 'Location', 'select', { required: true, options: LOCATIONS }),
      message('Anything else we should know?'),
    ],
  },
  mentorship: {
    key: 'mentorship', title: 'Mentorship sign-up', greeting: 'Hello Margaret Amshi Foundation, I would like to join the mentorship program.', submitLabel: 'Sign up on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('role', 'I would like to be a', 'select', { required: true, options: ['Mentee', 'Mentor'] }),
      f('topic', 'Topic', 'select', { required: true, options: ['Career and employment', 'Business and entrepreneurship', 'Education and study skills', 'Leadership', 'Personal growth', 'Technology'] }),
      f('availability', 'Availability', 'select', { required: true, options: ['Weekdays', 'Weekends', 'Evenings', 'Flexible'] }),
      f('goals', 'What do you want to achieve?', 'textarea', { required: true, full: true, rows: 4, maxLength: 600 }),
    ],
  },
  partnership: {
    key: 'partnership', title: 'Partnership inquiry', greeting: 'Hello Margaret Amshi Foundation, we would like to explore a partnership.', submitLabel: 'Send on WhatsApp',
    fields: [
      f('organization', 'Organization', 'text', { required: true, maxLength: 100 }),
      f('name', 'Contact person', 'text', { required: true, autoComplete: 'name', maxLength: 80 }),
      f('role', 'Role or title', 'text', { required: true, maxLength: 80 }),
      phone(), email(true),
      f('partnershipType', 'Partnership type', 'select', { required: true, options: ['Corporate giving or CSR', 'Program or project partnership', 'Grant co-funding', 'In-kind support', 'Skills and volunteering', 'Media or advocacy', 'Other'] }),
      f('timeline', 'Preferred timeline', 'text', { maxLength: 100 }),
      f('proposal', 'Tell us about your proposal', 'textarea', { required: true, full: true, rows: 5, maxLength: 800 }),
    ],
  },
  career: {
    key: 'career', title: 'Job application', greeting: 'Hello Margaret Amshi Foundation, I would like to apply for a position.', submitLabel: 'Apply on WhatsApp',
    notice: { tone: 'info', text: 'After sending, please attach your CV in the same WhatsApp chat.' },
    fields: [
      name(), phone(), email(true),
      f('position', 'Position', 'text', { required: true, maxLength: 100 }),
      f('location', 'Where are you based?', 'text', { required: true, maxLength: 80 }),
      f('experience', 'Years of experience', 'select', { required: true, options: ['Less than 1', '1 to 3', '4 to 6', '7 to 10', 'More than 10'] }),
      f('link', 'LinkedIn or portfolio link', 'text', { full: true, maxLength: 200 }),
      f('cover', 'Short cover note', 'textarea', { required: true, full: true, rows: 4, maxLength: 700 }),
    ],
  },
  event: {
    key: 'event', title: 'Event registration', greeting: 'Hello Margaret Amshi Foundation, I would like to register for an event.', submitLabel: 'Register on WhatsApp',
    fields: [name(), phone(), email(), f('event', 'Event', 'text', { required: true, maxLength: 120 }), f('attendees', 'Number attending', 'number', { required: true, min: 1 })],
  },
  'youth-registration': {
    key: 'youth-registration', title: 'Youth empowerment registration', greeting: 'Hello Margaret Amshi Foundation, I would like to join the Youth Empowerment program.', submitLabel: 'Register on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('ageGroup', 'Age group', 'select', { required: true, options: ['15 to 17', '18 to 24', '25 to 35'] }),
      f('location', 'Location', 'select', { required: true, options: LOCATIONS }),
      f('interest', 'What are you most interested in?', 'select', { required: true, options: ['Skills training', 'Starting a business', 'Mentorship', 'Leadership and civic action', 'Sports and creative arts', 'Finding work'] }),
      f('status', 'Current status', 'select', { required: true, options: ['In school', 'Graduate looking for work', 'Working', 'Self-employed', 'Not in school or work'] }),
      message('Tell us a little about your goals'),
    ],
  },
  'womens-application': {
    key: 'womens-application', title: 'Women’s empowerment application', greeting: 'Hello Margaret Amshi Foundation, I would like to apply for the Women’s Empowerment program.', submitLabel: 'Apply on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('location', 'Location', 'select', { required: true, options: LOCATIONS }),
      f('business', 'Your business or trade', 'text', { required: true, placeholder: 'For example tailoring, farming, food vending', maxLength: 100 }),
      f('stage', 'Stage of business', 'select', { required: true, options: ['Idea stage', 'Just started', 'Running for 1 to 3 years', 'Running for over 3 years'] }),
      f('support', 'Support you need most', 'select', { required: true, options: ['Business training', 'Start-up or growth funding', 'Mentorship', 'Market access', 'Financial literacy', 'Leadership development'] }),
      message('Tell us about your business and goals'),
    ],
  },
  'emergency-report': {
    key: 'emergency-report', title: 'Emergency report or response offer', greeting: 'Hello Margaret Amshi Foundation, I would like to report an emergency or offer help.', submitLabel: 'Send on WhatsApp',
    notice: { tone: 'warning', text: 'If anyone is in immediate danger, call 112 first. Then contact us so we can coordinate support.' },
    fields: [
      name(), phone(),
      f('type', 'Type of emergency', 'select', { required: true, options: ['Flooding', 'Fire', 'Displacement or conflict', 'Disease outbreak', 'Storm or building collapse', 'Other'] }),
      f('area', 'Location (community and LGA)', 'text', { required: true, maxLength: 120 }),
      f('affected', 'Approximate number of people affected', 'number', { min: 1 }),
      f('needs', 'Most urgent needs', 'select', { required: true, options: ['Food and water', 'Shelter and blankets', 'Medical help', 'Clothing', 'Sanitation items', 'I want to volunteer or donate supplies'] }),
      message('Anything else we should know?'),
    ],
  },
  'education-enquiry': {
    key: 'education-enquiry', title: 'Education support enquiry', greeting: 'Hello Margaret Amshi Foundation, I have an enquiry about education support.', submitLabel: 'Send on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('type', 'What are you asking about?', 'select', { required: true, options: ['Learning materials for students', 'School partnership', 'Support for a school or class', 'Adult and second-chance education', 'Donating books or equipment', 'Something else'] }),
      f('location', 'Location', 'select', { required: true, options: LOCATIONS }),
      message('Tell us more', true),
    ],
  },
  'join-updates': {
    key: 'join-updates', title: 'Join our updates', greeting: 'Hello Margaret Amshi Foundation, please add me to your updates.', submitLabel: 'Join on WhatsApp',
    fields: [name('Your name'), f('interest', 'What would you like to hear about?', 'select', { required: true, options: ['Everything', 'Programs and applications', 'Events', 'Impact stories', 'Ways to give'] })],
  },
  'document-request': {
    key: 'document-request', title: 'Document request', greeting: 'Hello Margaret Amshi Foundation, I would like to request a document.', submitLabel: 'Request on WhatsApp',
    fields: [
      name(), phone(), email(),
      f('document', 'Document requested', 'select', { required: true, options: ['Registration details', 'Governance documents', 'Annual report', 'Audited financial statements', 'Policies (safeguarding, privacy, finance)', 'Other'] }),
      f('purpose', 'Purpose of the request', 'textarea', { full: true, rows: 3, maxLength: 400 }),
    ],
  },
  'transfer-notification': {
    key: 'transfer-notification', title: 'Bank transfer notification', greeting: 'Hello Margaret Amshi Foundation, I have made a donation by bank transfer.', submitLabel: 'Notify us on WhatsApp',
    fields: [
      name(), phone('Phone number (optional)'),
      f('amount', 'Amount sent (₦)', 'number', { required: true, min: 100 }),
      f('date', 'Date of transfer', 'date', { required: true, dateRange: 'past' }),
      f('bank', 'Your bank', 'text', { required: true, maxLength: 60 }),
      f('reference', 'Transfer reference or narration', 'text', { maxLength: 100 }),
      f('fund', 'Fund to support', 'select', { required: true, options: FUND_OPTIONS }),
      f('receiptEmail', 'Email for your receipt (optional)', 'email', { autoComplete: 'email' }),
      f('anonymous', 'Give anonymously', 'checkbox', { full: true }),
    ].map((x) => (x.name === 'phone' ? { ...x, required: false } : x)),
  },
  'receipt-request': {
    key: 'receipt-request', title: 'Donation receipt request', greeting: 'Hello Margaret Amshi Foundation, I would like to request a receipt for my donation.', submitLabel: 'Request on WhatsApp',
    fields: [name(), f('amount', 'Amount (₦)', 'number', { required: true, min: 100 }), f('date', 'Date of donation', 'date', { required: true, dateRange: 'past' }), f('reference', 'Payment reference or narration', 'text', { required: true, maxLength: 100 }), email(true)],
  },
}

export const getForm = (key: string): FormDef => {
  const def = FORMS[key]
  if (!def) throw new Error(`Unknown form: ${key}`)
  return def
}
