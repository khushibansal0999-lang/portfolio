// Contact details as they appear on the resume. Kept here so the resume page and
// the PDF never drift apart.
//
// Note on the phone number: it is deliberately shown only on /resume, not in the
// site footer, nav, or any other page. A number in the page chrome gets scraped
// from every URL; on the resume page it sits where someone who has actually read
// the work would look for it.

export const contact = {
  email: 'khushi.bansal0999@gmail.com',
  /** Display form, matching the resume. */
  phone: '+91 78916 11159',
  /** tel: href form, digits only. */
  phoneHref: 'tel:+917891611159',
  location: 'Ajmer / Bengaluru, India',
  linkedin: 'https://www.linkedin.com/in/khushi-bansal0999/',
  github: 'https://github.com/khushibansal0999-lang',
} as const
