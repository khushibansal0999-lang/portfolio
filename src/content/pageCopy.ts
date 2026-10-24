// Every sentence of page prose on the site, in one place.
//
// Pages used to hold their own copy as JSX, which meant the same paragraph existed
// twice (once in the shared themes, once in the Poster skin) and the two drifted.
// Everything here is theme-agnostic: both renderings read the same strings, so a
// wording change lands on all five themes at once.
//
// This file, plus roles.ts / caseStudies.ts / projects.ts / availability.ts /
// labels.ts, is what `npm run export:copy` turns into COPY.md for review and
// editing. If you add a field here, it shows up there automatically.

export interface Bullet {
  /** Optional bolded opening sentence. */
  lead?: string
  text: string
}

export const pageCopy = {
  home: {
    tagline: 'Khushi Bansal · Product Manager, Deep Tech, AI & Data-Driven Products',
    /** The mono caption under the hero portrait. Poster theme only. */
    photoCaption:
      'I make product decisions with evidence, write the artifact, and own the tradeoff.',
    intro:
      'Four years of end-to-end product ownership at Ola Electric, shipping battery-management features to millions of EVs. ₹3 Cr of hardware recovered, false alerts cut 80%, one patent co-filed. Top Fellow at Next Leap, and now I build AI products solo, start to finish.',
    greetingLine1: 'Hello,',
    greetingLine2: "I'm Khushi!",
    arc: 'I joined Ola Electric in 2022 as a firmware engineer on battery management systems, and the product decisions came with the modules: writing the spec, reading the fleet telemetry, making the tradeoff call on things that shipped to millions of vehicles. I left in April 2026 to make the switch official, was named Top Fellow of my Next Leap cohort, and now I build AI products solo, start to finish.',
    contactHeading: 'Contact',
    trackRecordHeading: 'Track record',
    caseStudiesHeading: 'Case studies',
    caseStudyTags: ['Problem framing', 'PRDs', '0→1', 'Data fluency'],
    toolkitHeading: 'Toolkit',
    toolkit: {
      productHeading: 'Product',
      product: [
        'PRDs & acceptance criteria',
        'Primary user research',
        'KPI trees & A/B design',
        'RICE · Kano · MoSCoW',
      ],
      technicalHeading: 'Technical',
      technical: [
        'Fleet telemetry analysis',
        'Optimisation (LP, MPC)',
        'Embedded systems',
        'SQL · Python · RAG · LLM APIs',
      ],
    },
    shippedHeading: 'SHIPPED',
    howIWorkHeading: 'How I work',
    /** The short version, on the home page. The long version lives in about.howIWork. */
    howIWork: [
      'The mutual-fund RAG assistant abstains and cites its sources instead of ever speculating. I\'d rather it cover less and be right every time.',
      'Fleet telemetry usually told me what to build next before a roadmap meeting could, separating real failure modes from sensor noise instead of guessing at them.',
      'Progressive thermal de-rating over a hard cutoff cost some peak performance, on purpose. A rider noticing a slower charge beats one who inherits a corner cut on safety.',
    ],
    outsideHeading: 'Outside work',
    outside: [
      'Painting & writing',
      'Badminton, often',
      'Always a book going',
      'Volunteering & mentoring',
    ],
  },

  about: {
    intro:
      'I spent four years owning product decisions on features I was also engineering: writing the spec, reading the fleet telemetry, making the tradeoff call on things that shipped to millions of vehicles. In 2026 I made that role official.',
    arcHeading: 'The arc',
    arc: 'I joined Ola Electric in 2022 as a firmware engineer on battery management systems. I owned those modules end to end, so the product decisions came with them: turning a vague "reduce charge time" ask into a shipped optimization framework, or deciding how much peak performance to trade away for rider safety in a thermal model. Fleet data usually told me what to build next before anyone had to ask. I left in April 2026 to make the switch official. Since then I\'ve been named Top Fellow of my Next Leap cohort and shipped solo AI products, brief, PRD, working prototype, the whole thing, because I wanted proof this was a real shift and not just a new title on a resume.',
    howIWorkHeading: 'How I work',
    howIWork: [
      {
        lead: 'I ship the boundary, not just the feature.',
        text: 'For a mutual-fund FAQ assistant, the real product decision wasn\'t the retrieval pipeline. It was making the assistant abstain and cite sources rather than ever speculate, since a confident wrong answer in that domain is a trust and regulatory risk. I\'d rather cover less and be right every time.',
      },
      {
        text: 'I publish the number that makes me look worse. A hand audit of my own AI classifications on the Google Photos research found only 12 of 20 agreed, which moved the headline finding from 82% to 76%. It went in the deck, because a research number nobody has stress-tested isn\'t a finding yet.',
      },
      {
        text: 'Mining charging, voltage, temperature, and fault telemetry across the fleet, separating real failure modes from sensor noise, is what actually told us what to build next, not a roadmap meeting. It cut fault false positives 80% and 25% across two systems.',
      },
      {
        text: 'Progressive thermal de-rating over a hard safety cutoff cost a bit of peak performance, on purpose. I\'d rather a rider notice a slightly slower charge than have the product quietly inherit a default that cuts corners on safety.',
      },
      {
        text: 'I wrote a 17-page PRD with Given/When/Then acceptance criteria and six non-goals for a solo AI build that nobody but me would ever read. Not because anyone asked. Sloppy specs make sloppy products, even when you\'re the only stakeholder.',
      },
      {
        text: 'Spec ownership, cross-functional coordination, phased rollout on production firmware across six teams: that was just Tuesday at Ola for four years. The pivot isn\'t really about the fellowship. It\'s catching my résumé up to what I was already doing.',
      },
    ] as Bullet[],
    stillBuildingHeading: "What I'm still building",
    stillBuilding:
      'So far I\'ve mostly shipped alone, or as the one person holding both the spec and the code. That taught me ownership, but not yet what it\'s like to drive a roadmap through a team where I\'m not also the one building it. That\'s the gap I want the next role to close.',
    outsideHeading: 'Outside work',
    outside:
      'I paint and write outside of anything that needs a deadline, play badminton badly but often, and I\'m rarely without a book going. I also volunteer regularly, the same instinct that had me running webinars and mock-interview drives back in college, just less official about it now.',
    timelineLink: 'The full timeline →',
    projectsLink: "What I've built on my own →",
  },

  work: {
    intro:
      'Everything here is mine end to end. Case studies and builds, plus the teardowns and analysis I write to keep the muscle warm.',
    seoDescription:
      "Case studies, builds, teardowns, and analysis: the full library of what I've shipped and taken apart.",
  },

  resume: {
    summary:
      'Engineer moving into product management. 3.9 years at Ola Electric owning battery-management features end to end across millions of EVs: ₹3 Cr of scrapped hardware recovered, false failure alerts cut 80%, one patent co-filed. Top Fellow at Next Leap. I scope ambiguous problems into specs, mine fleet telemetry to decide what to build, and drive delivery across teams to launch. Now building AI products solo, from problem definition through to a shipped app.',
    downloadLabel: 'Download PDF',
    experienceHeading: 'Experience',
    educationHeading: 'Education',
    leadershipHeading: 'Leadership',
  },

  footer: {
    posterHeadline: "Let's talk product.",
  },
} as const
