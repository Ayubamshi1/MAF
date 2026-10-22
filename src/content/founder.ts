/**
 * Founder page content. This is a DRAFT written to show the structure.
 * Replace every paragraph, date, quote and achievement with Margaret Amshi's real story and get her approval before publishing.
 * Photos are set in src/content/images.ts (founderHero, founderPortrait, founderSecondary, founderGallery).
 */
export const FOUNDER = {
  name: 'Margaret Amshi',
  role: 'Founder',
  tagline: 'A lifetime of service, and a belief that generosity should outlive us.',
  intro: [
    'Margaret Amshi is the founder of Margaret Amshi Foundation. She built the foundation on a simple conviction: that every person, in every community across Nigeria, deserves a real chance to learn, earn and thrive.',
    'Her work has always begun with listening. Whether she is sitting with market women, visiting a school or speaking with community leaders, she asks what people need, and then brings the right partners together to help.',
    'Under her leadership the foundation has grown into a nationwide organization that funds education, supports women and young people, cares for older people and vulnerable children, and responds when disaster strikes.',
  ],
  facts: [
    { label: 'Role', value: 'Founder' },
    { label: 'Focus', value: 'Education, women’s empowerment and community care' },
    { label: 'Where she works', value: 'Across Nigeria' },
    { label: 'Guiding idea', value: 'Enduring generosity' },
  ],
  timeline: [
    { label: 'Early years', title: 'Rooted in community', text: 'Margaret grew up in a close community where neighbours looked after one another. That early example of shared responsibility shaped everything that followed.' },
    { label: 'A calling to serve', title: 'Helping one neighbour at a time', text: 'She began by quietly helping people around her: paying a child’s school fees, backing a small trader, sitting with the sick. She learned how much a small, well-timed gift can change.' },
    { label: 'Listening to communities', title: 'Seeing the pattern', text: 'Across many towns and villages she noticed the same story. Talented people were held back not by a lack of ability but by a lack of trusted support, and good intentions often faded without structure.' },
    { label: 'Founding the foundation', title: 'Turning generosity into a lasting institution', text: 'She brought together donors, advisers and local leaders and founded Margaret Amshi Foundation, with clear values, open reporting and communities at the centre.' },
    { label: 'Growing across Nigeria', title: 'From a single program to a national effort', text: 'Programs in education, empowerment, care and emergency response followed, each shaped with the communities they serve and open to people in every region.' },
    { label: 'Today', title: 'Leading with vision and accountability', text: 'Margaret continues to set the foundation’s direction, mentor emerging leaders and hold the organization to the standards it promises: integrity, equity and accountability.' },
  ],
  quote: 'Generosity is not what we give once. It is what we build so that it lasts.',
  achievements: [
    { icon: 'Building2', title: 'Founded a nationwide foundation', text: 'Established Margaret Amshi Foundation to channel generosity into lasting change for communities across Nigeria.' },
    { icon: 'GraduationCap', title: 'Opened doors to education', text: 'Championed scholarships, learning materials and school partnerships so that more children stay in school and finish.' },
    { icon: 'Flower2', title: 'Backed women entrepreneurs', text: 'Drove business training, savings groups and start-up support that help women build resilient livelihoods.' },
    { icon: 'HeartHandshake', title: 'Built a network of partners', text: 'Brought donors, companies, advisers and local leaders together to co-create programs that last.' },
    { icon: 'Rocket', title: 'Mentored young leaders', text: 'Personally mentors young people and encourages experienced professionals to give their time and skills.' },
    { icon: 'ShieldCheck', title: 'Set a standard for accountability', text: 'Insisted on open reporting, clear financial controls and independent review of the foundation’s work.' },
  ],
  recognition: [
    'Invited speaker at community, education and philanthropy forums',
    'Trusted adviser to local leaders, faith groups and civic organizations',
    'Advocate for transparency and accountability in charitable giving',
    'Champion of volunteering and mentorship among young Nigerians',
  ],
  principles: [
    { title: 'Listen first', text: 'The people closest to a problem understand it best. Every program starts with their voices.' },
    { title: 'Give with dignity', text: 'Support should leave people stronger and more hopeful, never smaller.' },
    { title: 'Share the credit', text: 'Impact belongs to communities, volunteers and partners. The foundation’s role is to enable it.' },
    { title: 'Report honestly', text: 'Donors and communities deserve the truth about what worked, what did not and what comes next.' },
  ],
  message: [
    'When I started this work, I did not set out to build an organization. I set out to help the people in front of me. What I learned is that one person’s kindness is powerful, but a community’s shared commitment is unstoppable.',
    'That is why the foundation exists: to make generosity dependable, fair and lasting. Every scholar, every entrepreneur, every older neighbour who is no longer alone is the result of many hands working together.',
    'Thank you to every donor, volunteer, partner and staff member who makes this possible. Your trust is the greatest gift we receive, and we promise to honour it.',
  ],
  works: [
    { slug: 'scholarships', note: 'Keeping bright students in school' },
    { slug: 'womens-empowerment', note: 'Building women’s businesses and leadership' },
    { slug: 'youth-empowerment', note: 'Skills and pathways for young people' },
    { slug: 'support-for-the-elderly', note: 'Care and companionship for older people' },
  ],
} as const

export const GALLERY_CATEGORIES = ['All', 'Community visits', 'Programs', 'Speaking and events'] as const
