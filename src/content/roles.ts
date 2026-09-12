import type { EducationEntry, RoleEntry } from './types'

export const roles: RoleEntry[] = [
  {
    id: 'independent-pm',
    company: 'Independent Product Work / PM Fellowship',
    title: 'Product Manager (self-directed)',
    start: 'June 2026',
    end: 'Present',
    location: 'Remote',
    scope:
      'Solo PM and builder on every project: no team, no dedicated engineer, full ownership of research through prototype.',
    isCurrent: true,
    bullets: [
      {
        text: 'Voice Recovery Coach: took primary research through a full PRD, a documented 3-way solution trade-off, and a working interactive prototype.',
        caseStudySlug: 'voice-recovery-coach',
      },
      {
        text: 'Voice Adoption Research: 40-respondent primary research diagnosing why ChatGPT Mobile’s voice feature has high trial but near-zero retention among first-time job seekers in India.',
        caseStudySlug: 'voice-adoption-research',
      },
      {
        text: 'Mutual Fund FAQ Assistant (Aug 2026): a grounded RAG Q&A assistant over official scheme documents for 3 HDFC funds, scoped to abstain and cite sources rather than ever speculate.',
      },
      {
        text: 'CineVerse AI (Jul 2026): a personalized movie/book recommender with a 10-entity data model, a 17-page PRD with Given/When/Then acceptance criteria, and MoSCoW prioritization with 6 explicit non-goals.',
      },
      {
        text: 'Ascend (Jul 2026): a gamified habit tracker, prioritizing the core XP + streaks loop over secondary features in v1 to validate the retention mechanic first.',
      },
      {
        text: 'Also completed structured product teardowns: Duolingo (retention-loop analysis with a consolidation recommendation), smallcase, Swiggy, Peppo, Wanderlust, GameOn.',
      },
    ],
  },
  {
    id: 'ola-electric',
    company: 'Ola Electric',
    title: 'Software Development Engineer: BMS, Algorithms & Fleet Analytics',
    start: 'June 2022',
    end: 'April 2026',
    location: 'Bengaluru, India',
    companyBlurb:
      'India’s largest electric two-wheeler manufacturer, publicly listed (NSE: OLAELEC).',
    scope:
      'Sole engineering owner of 3 production firmware modules with no dedicated PM, covering problem definition, specs, acceptance criteria, and phased rollout across millions of vehicles, while coordinating cross-functionally across 6 teams (hardware, firmware, QA, PM, system integration, GTM).',
    bullets: [
      {
        text: 'Fleet diagnostics: mined charging, voltage, thermal, and fault telemetry to separate real failure modes from measurement noise, then shipped spec changes that cut voltage-fault false positives 80% and pre-charge false positives 25% fleet-wide, reducing avoidable service visits.',
      },
      {
        text: 'Digital Charger: owned CC-CV transition, ripple control, fault detection, and de-rating end-to-end, saving ₹1,500/unit in BOM cost.',
      },
      {
        text: 'Charge optimization: designed a dual-simplex LP balancing fast-charge current against health, temperature, SoC, and voltage limits, cutting charge time without degrading battery health, for a +30% gain in charge-time prediction accuracy.',
      },
      {
        text: 'Safety/performance tradeoff: scoped an unaddressed safety risk from field data and shipped a predictive core-temperature model (MPC), choosing progressive de-rating over a hard cutoff and trading minor peak performance for reliability.',
      },
      {
        text: 'Pack health: built an RLS + Kalman-filter diagnostics engine (SoC/SoH) that enabled a 13S reconfiguration, salvaging ~70% of warranty-return packs instead of scrapping them.',
      },
      {
        text: 'IP: co-inventor on a filed patent, "Adaptive Charge Scheduling for Energy Storage Devices of Electric Vehicles" (App. No. 202441061894, filed July 2025).',
      },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'National Institute of Technology (NIT), Durgapur',
    degree: 'B.Tech, Electrical Engineering',
    detail: 'CGPA 7.79/10.0, First Class',
    date: 'May 2022',
  },
]

export const leadership: string[] = [
  'Webinar & Online Training Lead, IEEE India Council SCT (2022-23)',
  'Vice-Chair, IEEE Student Branch NIT Durgapur (2021-22)',
  'Vice-President, Debating Society, NIT Durgapur',
]
