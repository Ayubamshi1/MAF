export interface NewsPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  author: string
  body: string[]
  icon: string
}

/** News articles. Edit freely: the list page, filters and article pages all read from here. */
export const NEWS: NewsPost[] = [
  { slug: 'scholarship-applications-open', title: 'Scholarship applications open for the 2026/2027 academic session', date: '2026-10-09', category: 'Applications', author: 'Communications team', icon: 'GraduationCap',
    excerpt: 'Students in secondary and tertiary institutions can now apply. Applications close on 30 November 2026.',
    body: ['Margaret Amshi Foundation has opened applications for its 2026/2027 scholarship awards. The awards cover tuition, learning materials and mentoring for students from families who cannot afford school costs.', 'Secondary school students in SS1 to SS3 and undergraduate or diploma students can apply. Applicants must show financial need and good academic effort.', 'Applications are free and close on 30 November 2026. Shortlisted applicants will be interviewed in January 2027 and awards announced in February.', 'To apply, visit the Scholarships page, complete the form and send your supporting documents in the WhatsApp chat that opens.'] },
  { slug: 'digital-skills-graduation', title: '120 young people complete the Digital Skills Bootcamp', date: '2026-09-28', category: 'Training', author: 'Programs team', icon: 'Presentation',
    excerpt: 'Graduates of our eight-week bootcamp received certificates and mentorship placements at a ceremony in Lagos.',
    body: ['One hundred and twenty young people graduated from the foundation’s Digital Skills Bootcamp at a ceremony in Lagos on Saturday.', 'Over eight weeks, learners studied digital literacy, web design basics and online safety. Every graduate was matched with a volunteer mentor for three months of follow-up support.', '“I came without knowing how to type properly. Now I build simple websites for local businesses,” said one graduate.', 'The next cohort opens for registration in January 2027. See the Training page for details.'] },
  { slug: 'community-health-outreach', title: 'Free health screening reaches 600 residents in Kano', date: '2026-09-15', category: 'Outreach', author: 'Outreach team', icon: 'Heart',
    excerpt: 'Volunteer doctors and nurses offered blood pressure, sugar and eye checks, and referred 48 people for follow-up care.',
    body: ['More than 600 residents of Kano attended the foundation’s community health day, where volunteer doctors and nurses carried out free screening.', 'Services included blood pressure and blood sugar checks, eye tests and health education. Forty-eight people were referred to clinics for follow-up care.', 'The event also gave residents information about counselling services and the foundation’s support for older people.', 'We thank our volunteers, the Kano community leaders and everyone who made the day a success.'] },
  { slug: 'flood-relief-benue', title: 'Relief reaches 310 households after flooding in Benue State', date: '2026-08-30', category: 'Emergency response', author: 'Humanitarian team', icon: 'LifeBuoy',
    excerpt: 'Food packs, mats and clean water were delivered within 72 hours of the assessment.',
    body: ['After heavy rain flooded homes in parts of Benue State, the foundation’s response team assessed needs and delivered relief to 310 households within 72 hours.', 'Families received food packs, sleeping mats, blankets and water treatment tablets. Local leaders helped verify households and organise distribution.', 'Recovery support, including help to repair homes and restart small businesses, continues. Updates are published on the Project Updates page.', 'Thank you to everyone who gave. You can still support the Humanitarian Emergencies fund on the Donate page.'] },
  { slug: 'cooperative-annual-meeting', title: 'Cooperative Society members approve new savings plan', date: '2026-08-14', category: 'Cooperative Society', author: 'Cooperative Society office', icon: 'PiggyBank',
    excerpt: 'Members voted for a quarterly contribution plan to suit irregular earners.',
    body: ['Members of the Cooperative Society met for their annual general meeting and approved a new quarterly contribution plan.', 'The plan was introduced after traders and farmers asked for a way to save that matches seasonal income. Weekly and monthly plans continue.', 'Members also reviewed the society’s accounts and elected a new savings committee.', 'To learn how to join, visit the Cooperative Society page.'] },
  { slug: 'mentorship-programme-expands', title: 'Mentorship program expands to young entrepreneurs', date: '2026-07-22', category: 'Partnerships', author: 'Partnerships team', icon: 'HeartHandshake',
    excerpt: 'Business volunteers will coach 80 young entrepreneurs over six months.',
    body: ['Our mentorship program is expanding to support young entrepreneurs, thanks to volunteer business professionals who will coach 80 mentees over six months.', 'Each mentee will receive monthly one-to-one coaching and join group sessions on pricing, records and customer care.', 'Experienced professionals who would like to mentor can sign up on the Coaching and Mentorship page.', 'Mentors are trained and supported by the foundation.'] },
]
