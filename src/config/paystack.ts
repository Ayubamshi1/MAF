/**
 * Paystack Inline (browser only). Only the PUBLIC key belongs in this project.
 * NEVER add a secret key (sk_...) to any file in this repository.
 * Set VITE_PAYSTACK_PUBLIC_KEY in Cloudflare Pages (use pk_test_ while testing).
 */
export const PAYSTACK_PUBLIC_KEY: string =
  import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_live_645ee946fa6508365e07984f98f2b558d1fcccd0'

export const PAYSTACK_SCRIPT_URL = 'https://js.paystack.co/v1/inline.js'

export const DONATION = {
  currency: 'NGN',
  min: 500,
  max: 50_000_000,
  presets: [1000, 5000, 10000, 50000, 100000, 500000, 1000000],
} as const

export const FUND_OPTIONS = [
  'General Fund',
  'Education',
  'Youth Empowerment',
  "Women's Empowerment",
  'Support for the Elderly',
  'Vulnerable Children',
  'Humanitarian Emergencies',
] as const
