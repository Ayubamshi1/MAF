export interface EventItem {
  slug: string
  title: string
  date: string
  time: string
  venue: string
  summary: string
  description: string[]
  audience: string
  free: boolean
  registration: boolean
}

/** Events. Dates in the past automatically appear under "Past events". */
export const EVENTS: EventItem[] = [
  { slug: 'community-wellness-day', title: 'Community Wellness Day', date: '2026-11-14', time: '9:00 am to 3:00 pm', venue: 'Kano', summary: 'Free health checks, counselling corners and family activities.', audience: 'Open to all residents', free: true, registration: true,
    description: ['A day of free health checks, counselling corners, children’s activities and information on foundation programs.', 'Volunteer doctors and nurses will offer blood pressure, sugar and eye checks. Counsellors will be available for confidential conversations.', 'Bring your family. Registration helps us plan, but walk-ins are welcome.'] },
  { slug: 'small-business-clinic', title: 'Small Business Clinic for Women', date: '2026-11-28', time: '10:00 am to 1:00 pm', venue: 'Lagos', summary: 'Practical sessions on pricing, records and growing sales.', audience: 'Women business owners', free: true, registration: true,
    description: ['A morning of practical sessions on pricing, record keeping and finding customers, led by experienced entrepreneurs.', 'Participants will also learn about the Women’s Empowerment program and the Cooperative Society.', 'Places are limited, so please register.'] },
  { slug: 'scholarship-awards-ceremony', title: 'Scholarship Awards Ceremony', date: '2026-12-12', time: '11:00 am to 2:00 pm', venue: 'Enugu', summary: 'Celebrating this year’s scholars with families, donors and partners.', audience: 'Scholars, families, donors and partners (by invitation and registration)', free: true, registration: true,
    description: ['We celebrate this year’s scholarship recipients with their families, donors, partners and mentors.', 'The ceremony includes awards, student speeches and a short report on the year’s results.', 'Donors and partners are welcome to attend. Please register to confirm your seat.'] },
  { slug: 'back-to-school-drive', title: 'Back to School Drive', date: '2026-09-05', time: '9:00 am to 2:00 pm', venue: 'Kaduna', summary: 'Uniforms, books and bags handed to 400 students.', audience: 'Students and parents', free: true, registration: false,
    description: ['Volunteers distributed uniforms, books and school bags to 400 students ahead of the new term.', 'Parents also met teachers and learned about scholarship opportunities.'] },
  { slug: 'volunteer-appreciation-day', title: 'Volunteer Appreciation Day', date: '2026-08-22', time: '3:00 pm to 6:00 pm', venue: 'Ibadan', summary: 'Recognising the volunteers who power our programs.', audience: 'Foundation volunteers', free: true, registration: false,
    description: ['An afternoon to thank our volunteers with certificates, music and shared stories.', 'More than 150 volunteers attended.'] },
  { slug: 'youth-leadership-summit', title: 'Youth Leadership Summit', date: '2026-07-18', time: '9:00 am to 4:00 pm', venue: 'Jos', summary: 'A day of workshops on leadership, civic action and enterprise.', audience: 'Young people aged 15 to 35', free: true, registration: false,
    description: ['Young people explored leadership, civic action and enterprise through workshops and panel discussions.', 'Participants left with action plans and mentor contacts.'] },
]
