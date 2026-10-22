export const VALUES = [
  { title: 'Integrity', icon: 'ShieldCheck', text: 'Doing what is right with honesty, transparency, and discipline.' },
  { title: 'Equity', icon: 'Scale', text: 'Removing systemic barriers to ensure opportunity for all.' },
  { title: 'Curiosity', icon: 'Lightbulb', text: 'Remaining open to learning and adapting through continuous discovery.' },
  { title: 'Partnership', icon: 'HeartHandshake', text: 'Uniting with donors, advisors, and communities to co-create lasting impact.' },
  { title: 'Courage', icon: 'Flame', text: 'Speaking up and leading boldly, especially through uncertainty.' },
  { title: 'Accountability', icon: 'CheckCircle2', text: 'Owning our results and upholding high standards in everything we do.' },
] as const

export const ABOUT_TEXT = 'The Margaret Amshi Foundation partners with donors and local leaders to improve lives through strategic grantmaking and dedicated leadership.'
export const MISSION = 'To cultivate a thriving humanity grounded in community and sustained across generations through transformative philanthropy.'
export const VISION = 'A world where enduring generosity empowers every individual, neighborhood, and future generation to flourish.'
export const VALUES_INTRO = 'Our values define how we act, driving bold decisions and keeping us accountable to the communities we serve.'

/** What each value looks like in daily practice (used on the Our Values page). */
export const VALUE_PRACTICE: Record<string, string[]> = {
  Integrity: ['We publish how funds are received and used.', 'We decline funding that would compromise our independence.', 'We tell the truth about results, including what did not work.'],
  Equity: ['We design programs with the people who face the biggest barriers.', 'We keep applications simple and free to submit.', 'We check who we reach and who we are missing.'],
  Curiosity: ['We gather feedback after every program cycle.', 'We pilot ideas on a small scale before scaling them.', 'We share lessons openly with partners.'],
  Partnership: ['We consult local leaders before choosing priorities.', 'We credit partners for their contributions.', 'We co-design programs with donors, advisers and communities.'],
  Courage: ['We speak up for people who are often unheard.', 'We take on hard problems, not only easy wins.', 'We make difficult decisions openly and explain them.'],
  Accountability: ['We set measurable goals and report against them.', 'We keep clear financial controls and independent audits.', 'We give communities a way to raise complaints and get a response.'],
}
