export interface LegalSection {
  heading: string
  paragraphs?: string[]
  items?: string[]
}

export const LEGAL_UPDATED = '2026-10-19'

/**
 * Plain-language policy text. Have a lawyer review it before publishing, and update it if you
 * change how the website collects or stores information.
 */
export const PRIVACY: LegalSection[] = [
  { heading: 'Who we are', paragraphs: ['Margaret Amshi Foundation (“we”, “us”) is a Nigerian organization working across the country. This policy explains what information we collect through this website, why we collect it and the choices you have.'] },
  { heading: 'Information we collect', items: ['Information you give us in website forms, such as your name, phone number, email address and the details of your request.', 'Donation details you enter when you give online: your name, email, optional phone number, chosen fund and message. Card details are entered on Paystack and are never seen or stored by us.', 'Basic usage data collected by Google Analytics, such as pages visited, device type and approximate location, to help us improve the website.'] },
  { heading: 'How our forms work', paragraphs: ['When you submit a form on this website, your browser opens WhatsApp with a message containing your answers, addressed to the foundation. Nothing is sent to us until you tap Send in WhatsApp.', 'The website itself does not store your form answers. Once you send the message, it is handled in our WhatsApp account and by the staff who respond to you. WhatsApp’s own privacy policy applies to messages you send through it.'] },
  { heading: 'Donations and Paystack', paragraphs: ['Online donations are processed by Paystack, a third-party payment provider. Paystack receives your payment details and email address to complete the payment and send a receipt. Please read Paystack’s privacy notice for details.', 'For bank transfers, we receive the transfer information you or your bank provide, and the details you share in the transfer notification form.'] },
  { heading: 'Cookies and analytics', paragraphs: ['We use Google Analytics to understand how people use this website. It uses cookies and similar technologies and collects information such as pages viewed and the type of device used. We do not send names, phone numbers, email addresses or message text to Google Analytics.', 'You can block or delete cookies in your browser settings. The website still works without them.'] },
  { heading: 'How we use information', items: ['To respond to your messages, applications and referrals', 'To process and acknowledge donations', 'To deliver programs and services you apply for', 'To report on our work in a way that does not identify individuals without their consent', 'To keep the website secure and improve it'] },
  { heading: 'Sharing information', paragraphs: ['We do not sell personal information. We share it only with service providers who help us run the website and payments, with partners when needed to deliver a program you have applied for (with your knowledge), or when the law requires it.'] },
  { heading: 'Children and sensitive information', paragraphs: ['We take extra care with information about children and vulnerable people. Our referral and counselling forms ask only for minimal details. Please do not include medical information, a child’s full name, school, photos or home address in a form.', 'We only publish photographs or stories of people with their consent, and with a parent or guardian’s consent for children.'] },
  { heading: 'How long we keep information', paragraphs: ['We keep information only as long as needed for the purpose it was collected, and to meet legal, financial and reporting duties. Donation records are kept for as long as financial rules require.'] },
  { heading: 'Your rights', paragraphs: ['You can ask to see the personal information we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. We aim to handle personal information in line with Nigerian data protection law, including the Nigeria Data Protection Act 2023.'] },
  { heading: 'Contact us', paragraphs: ['For privacy questions or requests, call 0911 777 6004 or 0903 724 6971, or email margaretamshifoundation@gmail.com.'] },
]

export const TERMS: LegalSection[] = [
  { heading: 'Using this website', paragraphs: ['By using this website you agree to these terms. If you do not agree, please do not use it. We may update these terms and will show the date of the latest update on this page.'] },
  { heading: 'Information on this website', paragraphs: ['We work to keep information accurate and up to date, but program details, dates, amounts and eligibility can change. Always confirm important details with our team before relying on them.', 'Nothing on this website is legal, financial or professional advice.'] },
  { heading: 'Donations', items: ['Donations are voluntary and made through the payment options on the Donate page or to the foundation’s official bank account.', 'You are responsible for entering your details and amount correctly. If you believe a payment was made in error, contact us as soon as possible with your payment reference.', 'We aim to use gifts for the fund or program you choose. If a program is fully funded or can no longer proceed, we may use the gift for a similar purpose.', 'Always confirm our bank details on this website or by calling our official numbers before sending a transfer.'] },
  { heading: 'Applications and programs', paragraphs: ['Applications are free. Submitting an application does not guarantee a grant, scholarship, place or service. Decisions are made using the published criteria. We may update criteria and dates.'] },
  { heading: 'Forms and WhatsApp', paragraphs: ['Website forms open WhatsApp with a prefilled message. A request is received only when you send that message. Please do not share sensitive personal information in forms.'] },
  { heading: 'Acceptable use', items: ['Do not misuse the website, attempt to disrupt it or try to access it without permission.', 'Do not use our name, logo or content to mislead people or to request money.', 'Do not submit false information in applications or referrals.'] },
  { heading: 'Our content', paragraphs: ['Text, images, logos and other content on this website belong to the foundation or its licensors. You may share links and short extracts with credit, but please ask before reusing our logo or photographs.'] },
  { heading: 'Links to other websites', paragraphs: ['This website links to services such as Paystack, WhatsApp, Google Maps and social media. We are not responsible for their content or policies.'] },
  { heading: 'Limits of liability', paragraphs: ['To the extent allowed by law, we are not liable for losses arising from use of this website or reliance on its content, including temporary unavailability.'] },
  { heading: 'Contact', paragraphs: ['Questions about these terms? Call 0911 777 6004 or 0903 724 6971, or email margaretamshifoundation@gmail.com.'] },
]
