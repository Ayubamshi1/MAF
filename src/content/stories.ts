export interface Story {
  slug: string
  quote: string
  name: string
  detail: string
  program: string
  icon: string
  title: string
  location: string
  body: string[]
}

/** Impact stories. Replace the names, quotes and details with real stories (and get written consent before publishing). */
export const STORIES: Story[] = [
  { slug: 'amina-tailoring-business', title: 'From training to a business with three employees', quote: 'The training gave me skills, and the grant gave me my first two sewing machines. Today I employ three young women from my street.', name: 'Amina S.', detail: 'Tailor and business owner, Kano', location: 'Kano', program: "Women's Empowerment", icon: 'Flower2',
    body: ['Amina had sewing skills but no machine and no customers. She joined the foundation’s tailoring course and business clinic in early 2025.', 'After the course she received a small start-up grant for two machines. A mentor helped her price her work and keep records.', 'Today she runs a small shop and employs three young women. “I want them to learn what I learned,” she says.'] },
  { slug: 'chidi-scholarship', title: 'A final year saved by a scholarship', quote: 'I was ready to drop out in my final year. The scholarship covered my fees, and I graduated with a second-class upper.', name: 'Chidi O.', detail: 'Scholarship recipient, Enugu', location: 'Enugu', program: 'Scholarships', icon: 'GraduationCap',
    body: ['Chidi’s father lost his job during his final year at university and the family could no longer pay his fees.', 'A foundation scholarship covered his tuition and exam costs, and a volunteer mentor helped him prepare for job applications.', 'He graduated with a second-class upper and now works as a junior engineer.'] },
  { slug: 'mama-rakiya-care', title: 'Weekly visits that ended her isolation', quote: 'Someone visits every week to check on me, bring my medicine and sit and talk. I no longer feel forgotten.', name: 'Mama Rakiya', detail: 'Support for the Elderly, Kaduna', location: 'Kaduna', program: 'Support for the Elderly', icon: 'Heart',
    body: ['Mama Rakiya lives alone and has limited mobility. A neighbour referred her to the foundation.', 'A trained volunteer now visits weekly, helps with medication reminders and a monthly food parcel, and links her to a clinic.', '“Most of all, they sit and talk with me,” she says.'] },
  { slug: 'flood-response', title: 'Help within 72 hours after flooding', quote: 'When the water entered our homes, help arrived within two days with food, mats and clean water for every family on our street.', name: 'Community leader', detail: 'Flood response, Benue State', location: 'Benue State', program: 'Humanitarian Emergencies', icon: 'LifeBuoy',
    body: ['Heavy rain flooded homes in several streets in Benue State. Community leaders called the foundation’s response line.', 'A team assessed needs the next day and delivered food packs, mats, blankets and water treatment tablets to 310 households.', 'Local leaders helped verify households so help reached the right families.'] },
  { slug: 'tunde-youth-coding', title: 'A first website, and a first client', quote: 'I built a website for a local shop during the course. Now I get paid to build more.', name: 'Tunde A.', detail: 'Digital Skills graduate, Lagos', location: 'Lagos', program: 'Youth Empowerment', icon: 'Rocket',
    body: ['Tunde finished secondary school but had no work. He joined the Digital Skills Bootcamp to learn web design.', 'His final project was a website for a local shop, which led to his first paid job.', 'He now mentors younger learners on Saturdays.'] },
  { slug: 'hadiza-savings-group', title: 'A savings group that changed a market', quote: 'We save together every week. When one of us has an emergency, the group is there.', name: 'Hadiza M.', detail: 'Cooperative member, Jos', location: 'Jos', program: 'Cooperative Society', icon: 'PiggyBank',
    body: ['Hadiza and nine other market traders joined the Cooperative Society as a group.', 'They save weekly and have taken small loans to restock. None have missed a repayment.', 'The group now supports members through illness and school fee emergencies.'] },
]
