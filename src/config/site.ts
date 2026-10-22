/**
 * Single source of truth for contact details, social links and bank details.
 * Edit here and the whole site (header, footer, forms, contact page) updates.
 */
export const SITE = {
  name: 'Margaret Amshi Foundation',
  shortName: 'Margaret Amshi',
  tagline: 'Enduring generosity. Thriving communities.',
  description:
    'Margaret Amshi Foundation partners with donors and local leaders to improve lives through strategic grantmaking and dedicated leadership. Working across Nigeria.',
  url: (import.meta.env.VITE_SITE_URL ?? 'https://margaretamshifoundation.org').replace(/\/$/, ''),

  phones: [
    { display: '0911 777 6004', tel: '+2349117776004' },
    { display: '0903 724 6971', tel: '+2349037246971' },
  ],
  /** Number that receives every website form through WhatsApp (international format, no +). */
  whatsapp: { number: '2349117776004', display: '0911 777 6004' },
  email: 'margaretamshifoundation@gmail.com',
  /** The foundation works nationwide, so no single state or city is shown. */
  address: {
    country: 'Nigeria',
    line: 'Across Nigeria',
  },
  hours: [
    { days: 'Monday to Friday', time: '8:30 am to 5:00 pm' },
    { days: 'Saturday', time: '10:00 am to 2:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  emergencyNumber: '112',

  /** Platforms with an empty url are hidden automatically. */
  socials: [
    { key: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/margaretamshifoundation' },
    { key: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/margaretamshifoundation' },
    { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/margaret-amshi-foundation' },
    { key: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@MargaretAmshiFoundation' },
    { key: 'x', label: 'X', url: 'https://x.com/margaretamshifo' },
    { key: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@margaret.amshi.fo' },
    { key: 'medium', label: 'Medium', url: 'https://medium.com/@margaretamshifoundation' },
    { key: 'pinterest', label: 'Pinterest', url: 'https://www.pinterest.com/margaretamshifoundation' },
  ],

  bank: {
    bankName: 'Zenith Bank',
    accountName: 'Margaret Amshi Foundation',
    accountNumber: '1313023773',
    currency: 'Naira (NGN)',
  },

  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6777363.061314114!2d8.6707713!3d9.0338725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d79b06fd6300031%3A0xf6893c55837a7d2f!2sMargaret%20Amshi%20Foundation!5e1!3m2!1sen!2sng!4v1792086601521!5m2!1sen!2sng',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Margaret+Amshi+Foundation+Nigeria',
  },
} as const

export const phoneLinks = () => SITE.phones.map((p) => ({ ...p, href: `tel:${p.tel}` }))
export const whatsappChatUrl = (text?: string) =>
  `https://wa.me/${SITE.whatsapp.number}${text ? `?text=${encodeURIComponent(text)}` : ''}`
