export interface Faq {
  q: string
  a: string
  category: string
}

export const FAQ_CATEGORIES = ['Giving', 'Programs', 'Volunteering', 'Partnerships', 'Safety and privacy', 'General'] as const

/** All FAQs for the FAQ page. The home page and Donate page pick from this list by category. */
export const FAQS: Faq[] = [
  { category: 'Giving', q: 'How can I donate?', a: 'You can give online with a card, bank transfer or USSD through our secure Paystack page, or send a transfer directly to our Zenith Bank account. Both options are on the Donate page.' },
  { category: 'Giving', q: 'Will I get a receipt?', a: 'Paystack emails a payment receipt for online gifts. For bank transfers, send us your transfer details through the form on the Donate page and we will issue an acknowledgement.' },
  { category: 'Giving', q: 'Can I choose which program my gift supports?', a: 'Yes. When you donate online or notify us of a transfer, pick a fund such as Education, Youth Empowerment or Humanitarian Emergencies. Otherwise your gift supports our General Fund.' },
  { category: 'Giving', q: 'Is my card information safe?', a: 'Card payments are processed by Paystack. Your card details are never stored on this website.' },
  { category: 'Giving', q: 'How do I know my gift is used well?', a: 'We publish how funds are allocated and report on results on the Impact and Accountability pages.' },
  { category: 'Programs', q: 'Who can apply for a grant or scholarship?', a: 'Eligibility differs for each program. Open calls, requirements and deadlines are listed on the Grants and Scholarships pages and in our application notices.' },
  { category: 'Programs', q: 'Do applications cost money?', a: 'No. We never charge a fee to apply for a grant, scholarship or program. Report anyone asking for payment.' },
  { category: 'Programs', q: 'How do I refer someone who needs support?', a: 'Use the referral form. It opens WhatsApp with your details filled in, and a member of our team will follow up. Please do not include sensitive personal details in the form.' },
  { category: 'Programs', q: 'Where do you work?', a: 'Across Nigeria. Our programs are open to residents of every state, and we work with local partners in each region.' },
  { category: 'Volunteering', q: 'Do I need experience to volunteer?', a: 'No. Many roles need only enthusiasm. We train you for the rest.' },
  { category: 'Volunteering', q: 'How much time do volunteers give?', a: 'It ranges from a few hours at an event to a few hours each week.' },
  { category: 'Partnerships', q: 'How can my company partner with you?', a: 'Use the partnership inquiry form. We discuss goals, agree a written plan and report results.' },
  { category: 'Partnerships', q: 'Do you accept goods and services?', a: 'Yes. Goods, services, venues and skills are welcome. Please contact us first so they match real needs.' },
  { category: 'Safety and privacy', q: 'How do the website forms work?', a: 'When you submit a form, WhatsApp opens with your answers already written in a message to us. Tap Send to complete your request. Nothing is sent until you do.' },
  { category: 'Safety and privacy', q: 'How do you protect children and vulnerable people?', a: 'All staff and volunteers are screened and trained, and we follow a safeguarding policy. We never publish identifying details without consent.' },
  { category: 'Safety and privacy', q: 'How do I know a request for money is real?', a: 'We only collect money through the Donate page and the official bank account listed on this website. If unsure, call our official numbers.' },
  { category: 'General', q: 'How can I contact the foundation?', a: 'Call 0911 777 6004 or 0903 724 6971, message us on WhatsApp, or email margaretamshifoundation@gmail.com.' },
  { category: 'General', q: 'Can I visit your office?', a: 'Yes, during office hours. Please call ahead so we can welcome you properly.' },
]
