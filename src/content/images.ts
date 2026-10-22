/**
 * ALL website photos are listed here, in one place.
 *
 * Every slot currently uses the same branded placeholder (/images/placeholder.webp).
 * To use your own photo:
 *   1. Copy the file into  public/images/   (for example  public/images/hero.jpg)
 *   2. Change the `src` of that slot below to  '/images/hero.jpg'
 *   3. Update the `alt` text to describe the photo (important for accessibility and SEO)
 *   4. Optional: `position` sets which part stays visible when the photo is cropped,
 *      for example 'center top' to keep faces in view.
 *
 * Tips: use landscape photos for banners (about 1920x1080), keep each file under about 250 KB
 * (WebP or compressed JPG), and only use photos you have permission to publish.
 * Always get consent before publishing photos of people, especially children.
 */
export interface ImageSlot {
  src: string
  alt: string
  position?: string
  width?: number
  height?: number
}

export interface GalleryItem extends ImageSlot {
  caption: string
  category: string
}

const PLACEHOLDER = '/images/placeholder.webp'
const slot = (alt: string, position?: string): ImageSlot => ({ src: PLACEHOLDER, alt, position, width: 1600, height: 1200 })
const gi = (alt: string, caption: string, category: string, position?: string): GalleryItem => ({ ...slot(alt, position), caption, category })

export const IMAGES = {
  // ---- Large banners (landscape, about 1920x1080) ----
  hero: slot('Volunteers and community members working together'),
  pageHero: slot('Community members at a Margaret Amshi Foundation event'),
  donateHero: slot('Families supported by gifts to Margaret Amshi Foundation'),
  contactHero: slot('The Margaret Amshi Foundation team meeting community members'),
  partner: slot('Partners and volunteers collaborating on a community project'),

  // ---- Home page: about section (portrait about 800x1000, square about 800x800) ----
  aboutMain: slot('Foundation staff speaking with community leaders', 'center top'),
  aboutSecondary: slot('A volunteer helping a student with schoolwork'),

  // ---- Side images (landscape about 1200x800) ----
  values: slot('The foundation team gathered for a community planning session'),
  updates: slot('Community members reading updates on their phones'),
  contactSide: slot('Our office team ready to help'),
  donateSide: slot('A gift helping families and communities'),
  generic: slot('Community programs by Margaret Amshi Foundation'),

  // ---- Ways to give (landscape about 800x500) ----
  ways: {
    online: slot('A supporter giving online from a phone'),
    bank: slot('A supporter making a bank transfer'),
    fundraise: slot('Friends fundraising together for a cause'),
    partner: slot('Business partners shaking hands'),
  } as Record<string, ImageSlot>,

  // ---- Program cards and pages (landscape about 1200x750) ----
  programs: {
    fundraising: slot('Community members at a fundraising campaign'),
    grants: slot('A community project funded by a foundation grant'),
    scholarships: slot('Students in uniform smiling at school'),
    'cooperative-society': slot('Cooperative society members at a savings meeting'),
    'youth-empowerment': slot('Young people learning new skills together'),
    'womens-empowerment': slot('Women entrepreneurs running a small business'),
    'support-for-the-elderly': slot('A volunteer visiting an older community member'),
    'support-for-vulnerable-children': slot('Children playing safely at a community centre'),
    'humanitarian-emergencies': slot('Relief supplies being distributed to families'),
    education: slot('Children learning in a classroom'),
    training: slot('Trainees working during a skills course'),
    'coaching-and-mentorship': slot('A mentor coaching a young professional'),
    counselling: slot('A counsellor speaking with a client in a calm setting'),
    volunteering: slot('Volunteers wearing foundation T-shirts at an outreach'),
  } as Record<string, ImageSlot>,

  // ---- Impact stories (portrait about 800x1000). Keys match src/content/stories.ts ----
  stories: {
    'amina-tailoring-business': slot('Amina at her sewing machine in her shop', 'center top'),
    'chidi-scholarship': slot('Chidi in his graduation gown', 'center top'),
    'mama-rakiya-care': slot('Mama Rakiya smiling at home', 'center top'),
    'flood-response': slot('Families receiving relief supplies after flooding', 'center'),
    'tunde-youth-coding': slot('Tunde working on a website at his laptop', 'center top'),
    'hadiza-savings-group': slot('Hadiza and her savings group at their market stall', 'center'),
  } as Record<string, ImageSlot>,

  // ---- News covers (landscape about 1200x675). Keys match src/content/news.ts ----
  news: {
    'scholarship-applications-open': slot('Students reading scholarship application notices'),
    'digital-skills-graduation': slot('Graduates holding certificates at the Digital Skills Bootcamp'),
    'community-health-outreach': slot('Volunteer nurses screening residents at a health outreach'),
    'flood-relief-benue': slot('Relief supplies being delivered to flooded households'),
    'cooperative-annual-meeting': slot('Cooperative members voting at their annual meeting'),
    'mentorship-programme-expands': slot('A mentor coaching a young entrepreneur'),
  } as Record<string, ImageSlot>,

  // ---- Event thumbnails (square about 600x600). Keys match src/content/events.ts ----
  events: {
    'community-wellness-day': slot('Families at the Community Wellness Day'),
    'small-business-clinic': slot('Women at a small business clinic'),
    'scholarship-awards-ceremony': slot('Scholars receiving awards on stage'),
    'back-to-school-drive': slot('Students receiving school bags at the back to school drive'),
    'volunteer-appreciation-day': slot('Volunteers celebrating at the appreciation day'),
    'youth-leadership-summit': slot('Young people at the leadership summit'),
  } as Record<string, ImageSlot>,

  // ---- Annual report covers (portrait about 800x1100). Keys match src/content/reports.ts ----
  reports: {
    'annual-report-2025': slot('Cover of the 2025 annual report'),
    'annual-report-2024': slot('Cover of the 2024 annual report'),
    'annual-report-2023': slot('Cover of the 2023 annual report'),
    'half-year-review-2026': slot('Cover of the 2026 half-year review'),
  } as Record<string, ImageSlot>,

  // ---- Project updates (landscape about 1200x750). Keys match src/content/projects.ts ----
  projects: {
    'back-to-school-2026': slot('Students at the back to school drive'),
    'benue-flood-recovery': slot('Families rebuilding homes after the floods'),
    'digital-skills-cohort-3': slot('Graduates of the Digital Skills Bootcamp'),
    'womens-market-days': slot('Women selling products at a market day'),
    'elderly-weekly-visits': slot('A volunteer visiting an older resident'),
    'scholarship-2026-27': slot('Students applying for scholarships'),
  } as Record<string, ImageSlot>,

  // ---- Impact and accountability banners ----
  impactHero: slot('Community members celebrating a completed project'),
  transparency: slot('The finance team reviewing the foundation’s accounts'),



  // ---- Founder page ----
  founderHero: slot('Margaret Amshi meeting community members', 'center top'),
  founderPortrait: slot('Portrait of Margaret Amshi, founder of the foundation', 'center top'),
  founderSecondary: slot('Margaret Amshi speaking with young people', 'center'),
  /** Gallery on the Founder page (about 1200x900 each). Edit the caption and category of every photo. */
  founderGallery: [
    gi('Margaret Amshi greeting residents on a community visit', 'Meeting residents during a community visit', 'Community visits'),
    gi('Margaret Amshi with students at a partner school', 'With students at a partner school', 'Programs'),
    gi('Margaret Amshi speaking on stage at a conference', 'Speaking at a philanthropy forum', 'Speaking and events'),
    gi('Margaret Amshi with women entrepreneurs at a market day', 'With women entrepreneurs at a market day', 'Programs'),
    gi('Margaret Amshi presenting a scholarship award', 'Presenting a scholarship award', 'Speaking and events'),
    gi('Margaret Amshi visiting an older resident at home', 'Visiting an older resident', 'Community visits'),
    gi('Margaret Amshi with volunteers at an outreach', 'Thanking volunteers after an outreach', 'Community visits'),
    gi('Margaret Amshi at a signing with partners', 'Signing a partnership agreement', 'Speaking and events'),
    gi('Margaret Amshi inspecting relief supplies after flooding', 'Reviewing emergency relief supplies', 'Programs'),
  ] as GalleryItem[],

  // ---- About pages ----
  aboutStory: slot('Foundation staff and volunteers with community members'),
  aboutApproach: slot('A planning meeting between the foundation and local leaders'),
  missionVision: slot('A community gathering at sunrise'),

  // ---- People (portrait about 800x1000). Default used when a person has no photo of their own ----
  person: slot('Portrait of a member of the foundation', 'center top'),
  /** Optional per-person photos. Key = the person's slug from src/content/people.ts, for example 'ngozi-adebayo-musa'. */
  people: {} as Record<string, ImageSlot>,

  // ---- Get involved pages (landscape about 1600x900) ----
  involve: {
    fundraise: slot('Friends organizing a community fundraiser'),
    volunteer: slot('Volunteers at a foundation outreach'),
    'become-a-member': slot('Cooperative members at a monthly meeting'),
    'refer-someone': slot('A community volunteer talking with a neighbour'),
    partner: slot('Partners signing an agreement with the foundation'),
    careers: slot('The foundation team working together in the office'),
  } as Record<string, ImageSlot>,

  // ---- Training courses (landscape about 1200x750). Keys match src/content/courses.ts ----
  courses: {
    'digital-literacy-essentials': slot('Learners using computers in a digital skills class'),
    'web-design-basics': slot('A trainee designing a website on a laptop'),
    'business-start-up': slot('A small business owner planning with a mentor'),
    'financial-literacy': slot('Participants learning to budget and save'),
    'tailoring-and-fashion': slot('Trainees cutting fabric in a tailoring workshop'),
    'catering-and-baking': slot('Trainees baking in a kitchen'),
    'leadership-and-communication': slot('A young leader speaking to a group'),
    'job-readiness': slot('A job seeker practising an interview'),
  } as Record<string, ImageSlot>,

  // ---- Home page gallery (mixed shapes, about 1200x900) ----
  gallery: [
    slot('Children singing at a community event'),
    slot('Volunteers packing food items for families'),
    slot('A classroom of students listening to a teacher'),
    slot('Women learning tailoring in a workshop'),
    slot('Elders sharing a meal with volunteers'),
    slot('Young people collaborating on laptops'),
  ] as ImageSlot[],
} as const

export const personImage = (slug: string): ImageSlot => IMAGES.people[slug] ?? IMAGES.person
export const courseImage = (slug: string): ImageSlot => IMAGES.courses[slug] ?? IMAGES.generic
export const involveImage = (slug: string): ImageSlot => IMAGES.involve[slug] ?? IMAGES.generic
export const programImage = (slug: string): ImageSlot => IMAGES.programs[slug] ?? IMAGES.generic
export const storyImage = (slug: string): ImageSlot => IMAGES.stories[slug] ?? IMAGES.generic
export const newsImage = (slug: string): ImageSlot => IMAGES.news[slug] ?? IMAGES.generic
export const reportImage = (slug: string): ImageSlot => IMAGES.reports[slug] ?? IMAGES.generic
export const projectImage = (slug: string): ImageSlot => IMAGES.projects[slug] ?? IMAGES.generic
export const eventImage = (slug: string): ImageSlot => IMAGES.events[slug] ?? IMAGES.generic
