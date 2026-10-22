import type { PageContent } from './pageContent'
import { IMAGES } from './images'
import { SITE } from '@/config/site'

const tt = (title: string, text: string) => ({ title, text })

/** The five action pages under Get Involved. Keys are the URL slug. */
export const INVOLVE: Record<string, PageContent> = {
  fundraise: {
    slug: 'fundraise', title: 'Fundraise for a cause', image: IMAGES.involve.fundraise, applyLabel: 'Start a fundraiser',
    tagline: 'Rally friends, family and colleagues around the causes that matter to you.',
    overview: ['Fundraising multiplies generosity. A birthday, a run, a church drive or a workplace challenge can raise funds that change lives.', 'We help you plan, promote and report on your campaign.'],
    offersTitle: 'What you get', offers: [tt('Campaign support', 'A named contact to help you plan and promote.'), tt('Branded materials', 'Graphics and messages you can share online.'), tt('Safe giving', 'Gifts are received through our official channels.'), tt('Impact updates', 'Stories and results to share with your supporters.')],
    stepsTitle: 'How it works', steps: [tt('Pick a cause', 'Choose a program or fund to support.'), tt('Tell us your plan', 'Share your idea, target and dates.'), tt('We set up your campaign', 'We confirm details and share your materials.'), tt('Raise and report', 'Collect gifts, then see the results we deliver.')],
    blocks: [{ kind: 'list', title: 'Fundraising ideas', items: ['Birthday and anniversary giving', 'Sponsored walks, runs and games', 'Workplace or school challenges', 'Faith and community group drives', 'Online campaigns with friends and family'] }],
    form: { key: 'fundraiser', heading: 'Start a fundraiser', intro: 'Tell us about your plan.' },
    faqs: [{ q: 'Is there a minimum target?', a: 'We suggest at least ₦100,000, but smaller campaigns are welcome.' }, { q: 'Who holds the money?', a: 'All gifts are received into the foundation’s official account.' }],
    related: ['fundraising', 'grants', 'humanitarian-emergencies'],
  },
  volunteer: {
    slug: 'volunteer', title: 'Volunteer with us', image: IMAGES.involve.volunteer, applyLabel: 'Apply to volunteer',
    tagline: 'Offer your time, skills and energy to strengthen your community.',
    overview: ['From tutoring to health outreach, volunteers help us reach more people. Every role is supported with training and clear expectations.'],
    offersTitle: 'Ways to help', offers: [tt('Teach and mentor', 'Share your knowledge with students and young people.'), tt('Support outreach', 'Help at health days, food drives and events.'), tt('Share your profession', 'Give legal, financial, IT or creative skills.'), tt('Visit and care', 'Spend time with older residents and families.')],
    blocks: [{ kind: 'list', title: 'What we ask', items: ['A short application and interview', 'Agreement to our code of conduct', 'Safeguarding induction', 'Reliability and kindness'] }],
    form: { key: 'volunteer', heading: 'Volunteer application', intro: 'Tell us how you would like to help.' },
    faqs: [{ q: 'How much time do I need?', a: 'From a few hours at an event to a few hours each week.' }, { q: 'Can I volunteer remotely?', a: 'Yes, for roles such as design, writing and online mentoring.' }],
    related: ['volunteering', 'coaching-and-mentorship', 'education'],
  },
  'become-a-member': {
    slug: 'become-a-member', title: 'Become a member', image: IMAGES.involve['become-a-member'], applyLabel: 'Apply for membership',
    tagline: 'Join our cooperative society to save, borrow fairly and grow together.',
    overview: ['Members of our cooperative society build savings, access fair loans and support one another. Membership is open to individuals and groups.'],
    offersTitle: 'Why join', offers: [tt('Save together', 'Regular contributions build real savings.'), tt('Borrow fairly', 'Affordable loans for members.'), tt('Learn', 'Free financial and business training.'), tt('Have a voice', 'Every member votes on society policy.')],
    blocks: [{ kind: 'list', title: 'Membership basics', items: ['Aged 18 or above', 'Valid identification', 'Regular weekly, monthly or quarterly contributions', 'Agreement to the society’s rules'] }],
    form: { key: 'membership', heading: 'Apply for membership', intro: 'Share your details and we will call you.' },
    faqs: [{ q: 'Can I withdraw savings?', a: 'Yes, after notice, as set out in the rules.' }, { q: 'Do groups qualify?', a: 'Yes. Groups and associations can join as one member.' }],
    related: ['cooperative-society', 'womens-empowerment', 'training'],
  },
  'refer-someone': {
    slug: 'refer-someone', title: 'Refer someone', image: IMAGES.involve['refer-someone'], applyLabel: 'Make a referral',
    tagline: 'Connect a person or family who needs support with the right help.',
    overview: ['Often the people who most need help do not know where to ask. If you know someone who needs support, you can refer them. We follow up with care and respect.'],
    offersTitle: 'What you can refer for', offers: [tt('Education support', 'Students at risk of dropping out.'), tt('Care for older people', 'Older residents who need help or company.'), tt('Child protection and welfare', 'Children who need support or protection.'), tt('Emergency help', 'Families affected by a crisis.')],
    blocks: [
      { kind: 'steps', title: 'How referrals work', items: [tt('Send a referral', 'Share general details only.'), tt('We make contact', 'A trained team member follows up with consent.'), tt('Support plan', 'We agree what help is needed.'), tt('Follow-up', 'We stay in touch and review progress.')] },
      { kind: 'notice', tone: 'warning', title: 'Privacy first', text: 'Please share only general details. Do not include medical information, full names of children, addresses or photos.' },
    ],
    form: { key: 'referral', heading: 'Make a referral', intro: 'You need the person’s permission, or their guardian’s, to refer them.' },
    faqs: [{ q: 'What if it is an emergency?', a: `Call 112 first, then call us on ${SITE.phones[0].display}.` }, { q: 'Will I hear back?', a: 'Yes. We update the referrer on progress where we can without breaking confidentiality.' }],
    related: ['support-for-the-elderly', 'support-for-vulnerable-children', 'humanitarian-emergencies'],
  },
  partner: {
    slug: 'partner', title: 'How to partner', image: IMAGES.involve.partner, applyLabel: 'Start a conversation',
    tagline: 'Partnerships for organizations and businesses that want to create lasting impact.',
    overview: ['We work with companies, institutions, community groups and individuals who share our commitment to lasting impact. Partnerships can be financial, in-kind or based on skills.', 'We agree clear goals, report results and recognise our partners.'],
    offersTitle: 'Partnership opportunities',
    offers: [tt('Corporate giving', 'Fund a program, sponsor an event or match employee giving.'), tt('Program partnerships', 'Co-design and deliver programs with us.'), tt('Grant co-funding', 'Pool funds with us to reach more people.'), tt('In-kind and skills support', 'Donate goods, services, venues and expertise.')],
    blocks: [
      { kind: 'cards', title: 'Benefits of partnering', items: [tt('Measurable impact', 'Clear goals and regular reports on results.'), tt('Employee engagement', 'Volunteer days and team challenges.'), tt('Recognition', 'Public acknowledgement in line with your wishes.'), tt('Trust and transparency', 'Open financial reporting and clear agreements.')] },
      { kind: 'steps', title: 'Partnership process', items: [tt('Introduce', 'Tell us about your organization and goals.'), tt('Explore', 'We discuss priorities and options.'), tt('Agree', 'We write a partnership agreement with clear roles.'), tt('Deliver and report', 'We deliver together and share results.')] },
    ],
    form: { key: 'partnership', heading: 'Partnership inquiry', intro: 'Tell us about your organization and ideas.', points: ['A senior team member replies within a week.', 'Proposals are welcome.', 'We respect confidentiality.'] },
    faqs: [{ q: 'Do you accept non-financial support?', a: 'Yes. Goods, services, venues and skills all make a difference.' }, { q: 'Can we choose a program?', a: 'Yes. Most partners choose one or two focus areas.' }, { q: 'Do you sign agreements?', a: 'Yes. Every partnership has a written agreement.' }],
    related: ['grants', 'fundraising', 'education'],
  },
}
