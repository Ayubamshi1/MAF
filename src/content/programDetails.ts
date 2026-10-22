import type { PageContent } from './pageContent'
import { IMAGES } from './images'
import { SITE } from '@/config/site'

const tt = (title: string, text: string) => ({ title, text })
const img = (slug: string) => IMAGES.programs[slug]

/**
 * Full content for the 14 program pages. Everything here is written to show the structure:
 * replace the details (amounts, dates, criteria) with your real information.
 */
export const PROGRAM_DETAILS: Record<string, PageContent> = {
  fundraising: {
    slug: 'fundraising', title: 'Fundraising', image: img('fundraising'), applyLabel: 'Start a fundraiser',
    tagline: 'Campaigns, giving options and a clear view of where every naira goes.',
    overview: [
      'Our fundraising program connects people who want to help with the communities that need support. You can give once, give regularly, or rally friends, family and colleagues around a cause you care about.',
      'Every campaign is tied to a real need, and we report back on what each gift achieved.',
    ],
    servesTitle: 'Who can take part', serves: ['Individuals who want to give once or regularly', 'Families and friends rallying around a cause', 'Companies and associations running giving drives', 'Communities responding to local needs'],
    offersTitle: 'Donation options',
    offers: [tt('Give online', 'Pay by card, bank transfer or USSD through our secure Paystack page.'), tt('Bank transfer', `Send directly to our ${SITE.bank.bankName} account and notify us so we can acknowledge your gift.`), tt('Start a fundraiser', 'Create a campaign for a program and invite others to give.'), tt('Give in honour of someone', 'Mark a birthday, wedding or memorial with a gift in someone’s name.')],
    stepsTitle: 'How fundraising works',
    steps: [tt('Choose a cause', 'Pick a program or fund that matters to you.'), tt('Give or start a campaign', 'Donate directly or tell us about your fundraiser.'), tt('We confirm and acknowledge', 'We confirm your gift or campaign details and thank you.'), tt('See the results', 'We report on how contributions were used.')],
    blocks: [
      { kind: 'cards', title: 'Current campaigns', intro: 'Campaigns you can support or share today.', items: [tt('Back to School Drive', 'Uniforms, books and fees for students at risk of dropping out.'), tt('Flood Relief Fund', 'Food, shelter and clean water for families affected by flooding.'), tt('Women’s Business Boost', 'Start-up grants and tools for women entrepreneurs.')] },
      { kind: 'allocation', title: 'How funds are allocated', intro: 'Here is how contributions are divided across the foundation’s work.' },
      { kind: 'notice', tone: 'info', title: 'Give only through our official channels', text: `Use the Donate page on this website or the official ${SITE.bank.bankName} account. If in doubt, call ${SITE.phones[0].display} before sending money.` },
    ],
    form: { key: 'fundraiser', heading: 'Start a fundraiser', intro: 'Tell us about your campaign and we will help you get started.', points: ['We review every campaign before it is shared.', 'Funds are received through the foundation’s official channels.', 'We provide graphics and updates for your supporters.'] },
    faqs: [{ q: 'Can I run a fundraiser for my own cause?', a: 'Campaigns should support one of our programs or an approved community need. Tell us your idea and we will advise.' }, { q: 'Where does fundraiser money go?', a: 'All funds are received into the foundation’s official account and directed to the program you choose.' }, { q: 'Will my supporters get receipts?', a: 'Yes. Online gifts receive a Paystack receipt and we acknowledge bank transfers.' }],
    related: ['grants', 'scholarships', 'humanitarian-emergencies'],
  },

  grants: {
    slug: 'grants', title: 'Grants', image: img('grants'), applyLabel: 'Apply for a grant',
    tagline: 'Funding for community organizations and projects that expand opportunity.',
    overview: ['Our grants fund practical projects led by community organizations, cooperatives and groups that know their neighbourhoods best.', 'We look for clear plans, honest budgets and a commitment to reporting on results.'],
    servesTitle: 'Who can apply', serves: ['Community-based organizations', 'Registered NGOs and charities', 'Cooperatives, associations and youth or women’s groups', 'Informal groups with a clear plan and a local sponsor'],
    offersTitle: 'What grants cover', offers: [tt('Small grants', 'Up to ₦500,000 for local projects and equipment.'), tt('Project grants', '₦500,000 to ₦3,000,000 for programs of up to twelve months.'), tt('Capacity grants', 'Training, systems and governance support for growing organizations.'), tt('Emergency grants', 'Fast, short-term funding for urgent community needs.')],
    blocks: [
      { kind: 'list', title: 'Eligibility criteria', items: ['Based in and serving communities in Nigeria', 'A clear project aligned with one of our program areas', 'A named project lead and a bank account in the organization’s name', 'No history of misusing funds', 'Willingness to report on progress and results'] },
      { kind: 'steps', title: 'Application steps', items: [tt('Check eligibility', 'Read the criteria and choose the grant type that fits.'), tt('Submit the form', 'Use the application form below and send your documents on WhatsApp.'), tt('Review and interview', 'Our panel reviews applications and may call you to clarify details.'), tt('Decision and agreement', 'Successful applicants sign a grant agreement and receive funds in stages.')] },
      { kind: 'dates', title: 'Deadlines', items: [{ label: 'Applications open', date: '2026-11-01' }, { label: 'Application deadline', date: '2027-01-31', note: 'Applications received after this date join the next round.' }, { label: 'Decisions announced', date: '2027-03-15' }, { label: 'First funding released', date: '2027-04-15' }] },
      { kind: 'list', title: 'Required documents', items: ['Project proposal (up to 5 pages)', 'Itemized budget', 'Organization registration or group introduction letter', 'Bank account details in the organization’s name', 'Two references from community leaders or partners'] },
      { kind: 'table', title: 'Selection process', columns: ['Stage', 'What happens', 'Typical time'], rows: [['Screening', 'Eligibility and completeness check', '1 week'], ['Assessment', 'Scored on need, plan, budget and capacity', '3 to 4 weeks'], ['Interview', 'Short call or visit with shortlisted applicants', '1 to 2 weeks'], ['Approval', 'Final decision by the grants committee', '1 week']] },
    ],
    form: { key: 'grant', heading: 'Grant application', intro: 'Complete the form, then send your documents in the WhatsApp chat.', points: ['Applications are free.', 'We will confirm receipt within five working days.', 'You will always receive a decision.'] },
    faqs: [{ q: 'Can individuals apply?', a: 'Grants are mainly for organizations and groups. Individuals with a strong community project can apply with a local sponsor.' }, { q: 'Are grants paid all at once?', a: 'Larger grants are paid in stages linked to progress reports.' }, { q: 'Can I apply more than once?', a: 'Yes. Organizations may apply again after submitting their final report for an earlier grant.' }],
    related: ['scholarships', 'cooperative-society', 'training'],
  },

  scholarships: {
    slug: 'scholarships', title: 'Scholarships', image: img('scholarships'), applyLabel: 'Apply for a scholarship',
    tagline: 'Awards that keep bright students in school and help them finish strong.',
    overview: ['Our scholarships cover school fees, learning materials and support costs for students from families who cannot afford them.', 'We back students at secondary and tertiary level and stay in touch to support them to graduation.'],
    servesTitle: 'Who can apply', serves: ['Secondary school students in SS1 to SS3', 'Undergraduate and diploma students', 'Students who show financial need and strong effort', 'Students from every state in Nigeria'],
    offersTitle: 'Award details', offers: [tt('Secondary award', 'Full tuition for one academic year plus uniforms and books.'), tt('Tertiary award', 'A contribution of up to ₦300,000 per session towards fees and materials.'), tt('Mentor match', 'Every scholar is paired with a volunteer mentor.'), tt('Renewable', 'Awards can be renewed each year with good academic progress.')],
    blocks: [
      { kind: 'list', title: 'Eligibility', items: ['Admission or current enrolment at a recognized school or institution', 'Demonstrated financial need', 'Good academic record or clear potential', 'Good conduct, confirmed by a teacher or community leader'] },
      { kind: 'list', title: 'Application requirements', items: ['Completed application form', 'Admission letter or latest result slip', 'Short statement on why you are applying (up to 300 words)', 'One reference letter from a teacher or community leader', 'Parent or guardian contact details'] },
      { kind: 'dates', title: 'Important dates', items: [{ label: 'Applications open', date: '2026-10-09' }, { label: 'Application deadline', date: '2026-11-30' }, { label: 'Shortlist interviews', date: '2027-01-18' }, { label: 'Awards announced', date: '2027-02-12' }] },
      { kind: 'notice', tone: 'info', title: 'Free to apply', text: 'We never charge a fee for scholarship applications. Report anyone asking for money to our team.' },
    ],
    form: { key: 'scholarship', heading: 'Scholarship application', intro: 'Fill in the form, then send your documents in the WhatsApp chat.', points: ['Applications are free.', 'Awards are decided by an independent committee.', 'You will hear from us whether or not you are selected.'] },
    faqs: [{ q: 'Can I apply if I am already in school?', a: 'Yes. Students at risk of dropping out because of fees are encouraged to apply.' }, { q: 'Is there an age limit?', a: 'No, but applicants must be enrolled in an approved school or institution.' }, { q: 'Who decides awards?', a: 'A committee that includes educators and community representatives scores every application.' }],
    related: ['education', 'coaching-and-mentorship', 'youth-empowerment'],
  },

  'cooperative-society': {
    slug: 'cooperative-society', title: 'Cooperative Society', image: img('cooperative-society'), applyLabel: 'Become a member',
    tagline: 'A member-owned society for saving, borrowing responsibly and supporting one another.',
    overview: ['The Cooperative Society helps members build savings, access fair loans and support each other through hard times.', 'It is owned and governed by its members, guided by clear rules and regular reporting.'],
    servesTitle: 'Who can join', serves: ['Traders, artisans and small business owners', 'Salaried workers and professionals', 'Women’s and youth groups', 'Anyone aged 18 and above who supports the society’s rules'],
    offersTitle: 'Member benefits', offers: [tt('Regular savings', 'Build a safe savings habit with weekly or monthly contributions.'), tt('Affordable loans', 'Borrow against your savings at fair rates agreed by members.'), tt('Emergency support', 'A mutual fund members can draw on in a crisis.'), tt('Training', 'Free financial literacy and business workshops.')],
    blocks: [
      { kind: 'list', title: 'Membership criteria', items: ['Aged 18 or above', 'Resident or working in Nigeria', 'Valid means of identification', 'Agree to the society’s rules and regular contributions'] },
      { kind: 'table', title: 'Contributions', columns: ['Plan', 'Contribution', 'Notes'], rows: [['Weekly', '₦1,000 per week', 'Suited to traders and daily earners'], ['Monthly', '₦5,000 per month', 'Suited to salaried members'], ['Quarterly', '₦15,000 per quarter', 'For members with irregular income']] },
      { kind: 'cards', title: 'Savings and loan services', items: [tt('Savings', 'Your contributions earn a yearly dividend based on the society’s surplus.'), tt('Loans', 'Members can borrow up to three times their savings after six months.'), tt('Repayment', 'Flexible monthly repayment over three to twelve months.')] },
      { kind: 'list', title: 'Rules at a glance', items: ['Contributions are paid on time to the society’s official account', 'Loans need two member guarantors', 'Members vote on policy at the annual general meeting', 'Records and accounts are open to every member', 'Members who leave can withdraw savings after notice'] },
    ],
    form: { key: 'membership', heading: 'Apply for membership', intro: 'Share your details and a member of our team will call you with the next steps.', points: ['Joining is open throughout the year.', 'You will receive a copy of the rules.', 'Your savings are recorded in your name.'] },
    faqs: [{ q: 'Is there a joining fee?', a: 'There is a small one-time registration fee, explained when you apply.' }, { q: 'When can I take a loan?', a: 'After six months of regular contributions.' }, { q: 'Can a group join together?', a: 'Yes. Associations and groups can apply as a group member.' }],
    related: ['womens-empowerment', 'youth-empowerment', 'training'],
  },

  'youth-empowerment': {
    slug: 'youth-empowerment', title: 'Youth Empowerment', image: img('youth-empowerment'), applyLabel: 'Join the program',
    tagline: 'Skills, mentorship and enterprise pathways that help young people move forward.',
    overview: ['Our youth program equips young people with the skills, confidence and connections to build a livelihood and contribute to their communities.', 'We combine practical training, mentorship and small enterprise support.'],
    servesTitle: 'Who can take part', serves: ['Young people aged 15 to 35', 'School leavers and graduates looking for work', 'Young entrepreneurs with an idea', 'Young leaders and volunteers'],
    offersTitle: 'Available initiatives', offers: [tt('Skills academy', 'Hands-on courses in digital skills, trades and business.'), tt('Enterprise starter', 'Business coaching and small start-up support.'), tt('Leadership circles', 'Monthly sessions on leadership, civic action and teamwork.'), tt('Career connect', 'CV clinics, interview practice and job placement links.')],
    blocks: [
      { kind: 'list', title: 'Eligibility', items: ['Aged 15 to 35', 'Resident in Nigeria', 'Commitment to attend sessions and complete activities', 'Parent or guardian consent for participants under 18'] },
      { kind: 'table', title: 'Participation details', columns: ['Initiative', 'Duration', 'Format'], rows: [['Skills academy', '4 to 12 weeks', 'In person and hybrid'], ['Enterprise starter', '6 weeks plus 3 months of follow-up', 'Group sessions and one-to-one coaching'], ['Leadership circles', 'Monthly, ongoing', 'In person'], ['Career connect', '2 weeks', 'Online and in person']] },
    ],
    form: { key: 'youth-registration', heading: 'Register for Youth Empowerment', intro: 'Tell us a little about yourself and what you want to achieve.', points: ['Participation is free for most initiatives.', 'We contact you within one week.', 'Under-18s need a guardian’s permission.'] },
    faqs: [{ q: 'Do I need to be in school?', a: 'No. The program is open to students, graduates and young people not currently in school.' }, { q: 'Is it free?', a: 'Most initiatives are free. Where there is a small fee it is listed on the course page.' }, { q: 'Can I join more than one initiative?', a: 'Yes, as long as you can commit to the schedules.' }],
    related: ['training', 'coaching-and-mentorship', 'scholarships'],
  },

  'womens-empowerment': {
    slug: 'womens-empowerment', title: 'Women’s Empowerment', image: img('womens-empowerment'), applyLabel: 'Apply for support',
    tagline: 'Business support, financial skills and leadership development for women.',
    overview: ['We help women build resilient businesses, grow their savings and take on leadership roles in their families and communities.', 'Support is practical: training, funding access, mentoring and markets.'],
    servesTitle: 'Who can apply', serves: ['Women running or starting small businesses', 'Women’s groups and cooperatives', 'Women returning to work or learning new trades', 'Women leaders in their communities'],
    offersTitle: 'Services offered', offers: [tt('Business training', 'Planning, pricing, record keeping and marketing.'), tt('Start-up and growth support', 'Small grants, tools and equipment for qualifying businesses.'), tt('Savings groups', 'Peer savings and loan circles with financial coaching.'), tt('Mentorship and networks', 'Pairing with experienced women entrepreneurs.')],
    blocks: [
      { kind: 'cards', title: 'Business support', items: [tt('Idea to income', 'For women with a business idea who need a plan and first customers.'), tt('Grow your business', 'For established businesses ready to hire, expand or reach new markets.'), tt('Market days', 'Quarterly market events where women sell products and meet buyers.')] },
      { kind: 'steps', title: 'Application process', items: [tt('Apply', 'Send the application form on WhatsApp.'), tt('Conversation', 'A program officer calls to learn about your business.'), tt('Plan', 'Choose the support that fits your stage.'), tt('Start', 'Begin training, mentoring or funding according to your plan.')] },
    ],
    form: { key: 'womens-application', heading: 'Apply for Women’s Empowerment support', intro: 'Tell us about your business and what support would help most.', points: ['Applications are free.', 'We respond within seven days.', 'Groups can apply together.'] },
    faqs: [{ q: 'Do I need a registered business?', a: 'No. We support informal and registered businesses alike.' }, { q: 'Is funding guaranteed?', a: 'Funding depends on need and available resources. Training and mentoring are open to everyone who qualifies.' }, { q: 'Can I bring a friend?', a: 'Yes, many sessions are open to women who attend together.' }],
    related: ['cooperative-society', 'training', 'coaching-and-mentorship'],
  },

  'support-for-the-elderly': {
    slug: 'support-for-the-elderly', title: 'Support for the Elderly', image: img('support-for-the-elderly'), applyLabel: 'Refer an older person',
    tagline: 'Care, practical help and companionship for older members of our communities.',
    overview: ['Many older people live alone, on small incomes, with little support. Our program brings regular visits, practical help and connections to care.', 'Neighbours, relatives and community leaders can refer an older person who needs support.'],
    servesTitle: 'Who we support', serves: ['Older people aged 60 and above', 'Those living alone or without family support', 'Those with limited income or poor health', 'Older people affected by emergencies'],
    offersTitle: 'Assistance available', offers: [tt('Weekly check-ins', 'Trained volunteers visit, listen and check on wellbeing.'), tt('Food and essentials', 'Monthly food parcels and household items for those in need.'), tt('Health support', 'Health screening days, medication support and transport to appointments.'), tt('Home repairs', 'Small repairs to keep homes safe and dry.')],
    blocks: [
      { kind: 'steps', title: 'Referral process', intro: 'Anyone can refer an older person with their permission.', items: [tt('Send a referral', 'Use the form below. Share only general details such as first name, area and the type of help needed.'), tt('We make contact', 'A social worker contacts the referrer, then visits with the older person’s consent.'), tt('Assessment', 'We discuss needs and agree a support plan.'), tt('Follow-up', 'Volunteers and staff check in and adjust support over time.')] },
      { kind: 'notice', tone: 'warning', title: 'Protecting privacy', text: 'Please do not include medical details, addresses or photos in the referral. We will gather what we need in person, with consent.' },
    ],
    form: { key: 'referral-elderly', heading: 'Refer an older person', intro: 'Share general details only. Our team will follow up directly.', points: ['The person’s consent is needed.', 'We never share personal information without permission.', 'Urgent cases are prioritised.'] },
    faqs: [{ q: 'Can an older person refer themselves?', a: 'Yes. They or someone they trust can call us or use the form.' }, { q: 'Is the support free?', a: 'Yes, support is free for those who qualify.' }, { q: 'Can I volunteer as a visitor?', a: 'Yes. Apply through the Volunteering page and you will be trained before visits.' }],
    related: ['volunteering', 'counselling', 'humanitarian-emergencies'],
  },

  'support-for-vulnerable-children': {
    slug: 'support-for-vulnerable-children', title: 'Support for Vulnerable Children', image: img('support-for-vulnerable-children'), applyLabel: 'Refer a child',
    tagline: 'Essentials, education support and protection for children who need it most.',
    overview: ['We work with families, schools and communities to keep children safe, healthy and learning.', 'Every child we support is protected by our safeguarding policy and a clear referral process.'],
    servesTitle: 'Who we support', serves: ['Children from low-income households', 'Orphaned and separated children', 'Children out of school or at risk of dropping out', 'Children affected by emergencies'],
    offersTitle: 'Services provided', offers: [tt('Education support', 'School fees, uniforms, books and learning clubs.'), tt('Food and essentials', 'Nutrition support and basic household items.'), tt('Health access', 'Referrals for medical care and school health days.'), tt('Safe spaces', 'Supervised activities, play and life skills sessions.')],
    blocks: [
      { kind: 'cards', title: 'Our safeguarding approach', intro: 'Children’s safety comes first in everything we do.', items: [tt('Trained people', 'All staff and volunteers are screened, trained and sign our child protection code.'), tt('Consent and privacy', 'We only share a child’s information with permission and never publish identifying details.'), tt('Clear reporting', 'Concerns are reported to our safeguarding lead and, where required, to the authorities.')] },
      { kind: 'steps', title: 'Referral process', items: [tt('Refer', 'Use the form below. Do not include a child’s full name, school, photo or address.'), tt('Contact', 'A trained social worker contacts the referrer, then the family.'), tt('Assess', 'We understand the child’s situation and agree a plan with the family or guardian.'), tt('Support and review', 'We provide support and review progress regularly.')] },
      { kind: 'notice', tone: 'warning', title: 'If a child is in danger', text: `Call 112 now. Then contact our safeguarding team on ${SITE.phones[0].display}.` },
    ],
    form: { key: 'referral-children', heading: 'Refer a child for support', intro: 'Share general details only. A trained social worker will follow up.', points: ['No photos or full names, please.', 'Referrals are handled in confidence.', 'Urgent cases are prioritised.'] },
    faqs: [{ q: 'Who can refer a child?', a: 'Teachers, relatives, neighbours, religious and community leaders, or anyone concerned for a child’s welfare.' }, { q: 'Will the family know who referred them?', a: 'We protect the referrer’s identity where possible, but we cannot promise anonymity in every situation.' }, { q: 'How are photos handled?', a: 'We only photograph children with written guardian consent, and we avoid identifying details.' }],
    related: ['education', 'counselling', 'scholarships'],
  },

  'humanitarian-emergencies': {
    slug: 'humanitarian-emergencies', title: 'Humanitarian Emergencies', image: img('humanitarian-emergencies'), applyLabel: 'Report or respond',
    tagline: 'Fast, verified relief when floods, displacement or other crises strike.',
    overview: ['When disaster strikes, speed and trust matter. Our emergency response delivers food, shelter and care to affected families, working with local leaders and responders.', 'We verify needs before we deploy and we report on what we deliver.'],
    servesTitle: 'Who we support', serves: ['Families affected by floods and storms', 'Displaced households', 'Communities facing disease outbreaks', 'Survivors of fires and building collapses'],
    offersTitle: 'Areas of response', offers: [tt('Food and water', 'Emergency food packs and safe drinking water.'), tt('Shelter and essentials', 'Mats, blankets, tarpaulins and hygiene kits.'), tt('Health and sanitation', 'First aid, referrals and sanitation items.'), tt('Recovery support', 'Help to rebuild homes and livelihoods after the immediate crisis.')],
    blocks: [
      { kind: 'cards', title: 'Urgent needs', intro: 'Updated whenever we respond to a new emergency.', items: [tt('Food packs', 'Rice, beans, oil and salt for families in temporary shelters.'), tt('Blankets and mats', 'For families who lost bedding and clothing.'), tt('Clean water', 'Water treatment tablets and storage containers.')] },
      { kind: 'list', title: 'Verified ways to contribute', intro: 'Only use these official channels.', items: ['Online through the Donate page (select “Humanitarian Emergencies”)', `Bank transfer to ${SITE.bank.bankName}, account name ${SITE.bank.accountName}, number ${SITE.bank.accountNumber}`, `Donations of food and supplies: call ${SITE.phones[0].display} to arrange drop-off`, 'Volunteering as a responder through the Volunteering page'] },
      { kind: 'notice', tone: 'warning', title: 'Beware of fake appeals', text: `We only collect money through the channels above. Confirm any appeal by calling ${SITE.phones[0].display} or ${SITE.phones[1].display}.` },
    ],
    form: { key: 'emergency-report', heading: 'Report an emergency or offer help', intro: 'Tell us what is happening or how you can help.', points: ['Call 112 first if anyone is in danger.', 'We verify every report before responding.', 'Volunteers and donors are welcome.'] },
    faqs: [{ q: 'How fast do you respond?', a: 'We aim to assess within 24 hours and deliver first relief within 72 hours where access allows.' }, { q: 'How do I know my gift reaches families?', a: 'We publish response reports with what was delivered, to how many households and where.' }, { q: 'Can I donate items?', a: 'Yes. Call us to arrange a drop-off so supplies match actual needs.' }],
    related: ['fundraising', 'volunteering', 'support-for-vulnerable-children'],
  },

  education: {
    slug: 'education', title: 'Education', image: img('education'), applyLabel: 'Ask about education support',
    tagline: 'Learning support, resources and partnerships that make education possible.',
    overview: ['We support students, teachers and schools with the resources that make learning possible, from textbooks to learning clubs.', 'We work closely with schools and parents to keep children learning and help adults pick up education they missed.'],
    servesTitle: 'Who we support', serves: ['Students in public and community schools', 'Teachers and school leaders', 'Parents and guardians', 'Adults seeking second-chance education'],
    offersTitle: 'Educational support', offers: [tt('Learning materials', 'Textbooks, notebooks, uniforms and school bags.'), tt('Learning clubs', 'After-school lessons in reading, mathematics and science.'), tt('Teacher support', 'Training and resources for teachers in partner schools.'), tt('Adult education', 'Literacy and numeracy classes for adults.')],
    blocks: [
      { kind: 'cards', title: 'Resources and programs', items: [tt('Library on the go', 'A mobile library that visits partner schools monthly.'), tt('Reading champions', 'Volunteers help young readers build confidence.'), tt('STEM clubs', 'Hands-on science and technology sessions.')] },
      { kind: 'table', title: 'Program details', columns: ['Program', 'Who it is for', 'Schedule'], rows: [['Learning clubs', 'Primary and junior secondary students', 'Weekdays, 3:30 pm to 5:30 pm'], ['Teacher workshops', 'Teachers in partner schools', 'One Saturday a month'], ['Adult literacy', 'Adults aged 18 and above', 'Tuesday and Thursday evenings']] },
    ],
    form: { key: 'education-enquiry', heading: 'Education support enquiry', intro: 'Ask about materials, partnerships or classes.', points: ['We reply within a week.', 'Schools and community groups are welcome.', 'Book and equipment donations are accepted.'] },
    faqs: [{ q: 'Can a school partner with you?', a: 'Yes. Send an enquiry and we will arrange a visit.' }, { q: 'Do you accept book donations?', a: 'Yes. Please contact us first so we can match donations to needs.' }, { q: 'Are classes free?', a: 'Learning clubs and adult classes are free for qualifying participants.' }],
    related: ['scholarships', 'training', 'support-for-vulnerable-children'],
  },

  training: {
    slug: 'training', title: 'Training', image: img('training'), applyLabel: 'Register for a course',
    tagline: 'Practical courses in digital skills, business, trades and personal development.',
    overview: ['Our training courses are short, practical and built around what people need to earn and grow. Classes are small so that every learner gets attention.', 'Browse the courses below and register with a few details.'],
    servesTitle: 'Who can register', serves: ['Young people and adults aged 16 and above', 'Job seekers and school leavers', 'Small business owners', 'Community and group leaders'],
    blocks: [
      { kind: 'courses', title: 'Courses offered', intro: 'Filter by category to find the right course.' },
      { kind: 'cards', title: 'Registration information', items: [tt('Register', 'Choose a course and send the registration form.'), tt('Confirm', 'We confirm your place and share the schedule.'), tt('Attend and certify', 'Complete the course and receive a certificate of participation.')] },
      { kind: 'notice', tone: 'info', title: 'Fees', text: 'Many courses are free or subsidized. Fees, where they apply, are listed on each course card. Nobody is turned away for inability to pay without a conversation first.' },
    ],
    form: { key: 'training', heading: 'Register for a course', intro: 'Choose your course and tell us a bit about yourself.', points: ['We confirm your place within a week.', 'Classes are small.', 'Certificates are awarded on completion.'] },
    faqs: [{ q: 'Do I need a computer?', a: 'No. Computers are provided for in-person classes.' }, { q: 'Can I do more than one course?', a: 'Yes, once you have completed your first course.' }, { q: 'Are the certificates recognised?', a: 'Certificates confirm participation and skills covered. They are not a formal academic qualification.' }],
    related: ['youth-empowerment', 'womens-empowerment', 'coaching-and-mentorship'],
  },

  'coaching-and-mentorship': {
    slug: 'coaching-and-mentorship', title: 'Coaching and Mentorship', image: img('coaching-and-mentorship'), applyLabel: 'Sign up',
    tagline: 'Guidance from experienced coaches and mentors who help you grow.',
    overview: ['Good guidance changes lives. We match mentees with experienced professionals and offer group coaching for leaders, entrepreneurs and students.', 'Mentors volunteer their time and are trained and supported by the foundation.'],
    servesTitle: 'Who can sign up', serves: ['Students and young graduates', 'Early-career professionals', 'Entrepreneurs and community leaders', 'Experienced professionals who want to mentor'],
    offersTitle: 'Topics covered', offers: [tt('Career and employment', 'Direction, CVs, interviews and workplace skills.'), tt('Business and entrepreneurship', 'Planning, finance, sales and growth.'), tt('Education and study skills', 'Goal setting, study habits and applications.'), tt('Leadership and personal growth', 'Confidence, communication and decision making.')],
    blocks: [
      { kind: 'cards', title: 'Format', items: [tt('One-to-one mentoring', 'A monthly session for six months with a matched mentor.'), tt('Group coaching', 'Small groups meet every two weeks around a topic.'), tt('Online or in person', 'Choose what suits your schedule and location.')] },
      { kind: 'list', title: 'Mentor and coach qualifications', items: ['At least five years’ experience in their field', 'Completed our mentor training and safeguarding briefing', 'References checked', 'A commitment of at least six months'] },
      { kind: 'steps', title: 'How to sign up', items: [tt('Apply', 'Choose mentee or mentor and send the form.'), tt('Match', 'We pair you with someone suited to your goals.'), tt('Meet', 'Agree goals and a meeting schedule.'), tt('Review', 'Check progress after three and six months.')] },
    ],
    form: { key: 'mentorship', heading: 'Sign up for mentorship', intro: 'Tell us whether you want a mentor or want to mentor.', points: ['Matching takes up to three weeks.', 'Mentors are trained.', 'Programs run in six-month cycles.'] },
    faqs: [{ q: 'Is mentoring free?', a: 'Yes, for both mentees and mentors.' }, { q: 'How much time does mentoring take?', a: 'About two hours a month, plus occasional messages.' }, { q: 'Can I change my mentor?', a: 'Yes. Tell the program team and we will find a better match.' }],
    related: ['youth-empowerment', 'scholarships', 'volunteering'],
  },

  counselling: {
    slug: 'counselling', title: 'Counselling', image: img('counselling'), applyLabel: 'Book a session',
    tagline: 'Confidential, professional support for individuals, couples and families.',
    overview: ['Counselling gives people a safe place to talk through hard times. Our counsellors support people facing family stress, grief, anxiety and life changes.', 'Sessions are free for those who qualify and private for everyone.'],
    servesTitle: 'Who can book', serves: ['Adults seeking support with stress, anxiety or grief', 'Couples and families', 'Young people (with guardian consent where required)', 'Caregivers and community workers'],
    offersTitle: 'Services', offers: [tt('Individual counselling', 'One-to-one sessions with a qualified counsellor.'), tt('Family and couples sessions', 'Support for communication and conflict.'), tt('Group support', 'Peer support groups for grief, parenting and caregiving.'), tt('Referrals', 'Links to clinical and emergency services when needed.')],
    blocks: [
      { kind: 'cards', title: 'Confidentiality', items: [tt('Private by default', 'What you share stays between you and your counsellor.'), tt('Limits explained', 'We explain the rare situations where we must act to keep someone safe.'), tt('Secure records', 'Notes are stored securely and shared with nobody without permission.')] },
      { kind: 'steps', title: 'Appointment process', items: [tt('Request a session', 'Send the form with your preferred day and time.'), tt('We confirm', 'A coordinator confirms a time by phone or WhatsApp.'), tt('Attend', 'Meet by phone, video or in person.'), tt('Follow up', 'Decide together whether further sessions would help.')] },
      { kind: 'contacts', title: 'Emergency contacts', intro: 'If you or someone else is in immediate danger, contact emergency services first.' },
    ],
    form: { key: 'counselling', heading: 'Request a counselling session', intro: 'Share only what you are comfortable with. Details are discussed privately in your session.', points: ['Confidential and respectful.', 'Phone, video and in-person options.', 'Free for those who qualify.'] },
    faqs: [{ q: 'Do I have to say why I need counselling?', a: 'You choose how much to share. The form only asks for a general topic.' }, { q: 'Is it free?', a: 'Sessions are free for those who qualify. We will explain any costs before you start.' }, { q: 'Can I bring my child?', a: 'Young people can attend with guardian consent where required.' }],
    related: ['support-for-vulnerable-children', 'support-for-the-elderly', 'coaching-and-mentorship'],
  },

  volunteering: {
    slug: 'volunteering', title: 'Volunteering', image: img('volunteering'), applyLabel: 'Apply to volunteer',
    tagline: 'Give your time and skills to people and projects that need them.',
    overview: ['Volunteers are the heart of our work. Whether you have two hours a month or two days a week, there is a role for you.', 'We train and support every volunteer and recognise their contribution.'],
    servesTitle: 'Who can volunteer', serves: ['Students and young people aged 16 and above', 'Professionals offering their skills', 'Retirees and community members', 'Companies and groups volunteering together'],
    blocks: [
      { kind: 'cards', title: 'Roles available', items: [tt('Tutors and reading buddies', 'Support students with homework and reading.'), tt('Health outreach helpers', 'Assist at screening days and wellness events.'), tt('Mentors and trainers', 'Share professional skills and experience.'), tt('Community visitors', 'Visit older residents and families.'), tt('Media and content', 'Photography, writing and social media.'), tt('Event and logistics support', 'Set-up, registration and coordination.')] },
      { kind: 'list', title: 'Requirements', items: ['Aged 16 or above (under 18s need guardian consent)', 'Complete a short interview and reference check', 'Agree to our code of conduct and safeguarding policy', 'Attend an induction session'] },
      { kind: 'table', title: 'Time commitments', columns: ['Role type', 'Time', 'Duration'], rows: [['Event-based', '3 to 6 hours', 'Single events'], ['Regular', '2 to 4 hours a week', '3 months or more'], ['Skilled project', 'Agreed with the team', 'Project duration']] },
      { kind: 'cards', title: 'Training and support', items: [tt('Induction', 'Learn about our values, safeguarding and your role.'), tt('Role training', 'Specific training before you begin.'), tt('Recognition', 'Certificates, references and volunteer meet-ups.')] },
    ],
    form: { key: 'volunteer', heading: 'Volunteer application', intro: 'Tell us how you would like to help.', points: ['We reply within a week.', 'Training is provided.', 'References are provided on request.'] },
    faqs: [{ q: 'Do I need experience?', a: 'No. Many roles need only enthusiasm. We train you for the rest.' }, { q: 'Can my company volunteer?', a: 'Yes. We organise team volunteering days for companies and groups.' }, { q: 'Do volunteers get reimbursed?', a: 'We cover agreed transport and meal costs for regular volunteers.' }],
    related: ['coaching-and-mentorship', 'support-for-the-elderly', 'education'],
  },
}

export const getProgramDetail = (slug: string): PageContent | undefined => PROGRAM_DETAILS[slug]
