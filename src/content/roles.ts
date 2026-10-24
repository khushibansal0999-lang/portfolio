import type { EducationEntry, RoleEntry } from './types'

export const roles: RoleEntry[] = [
  {
    id: 'next-leap-fellowship',
    company: 'Next Leap PM Fellowship',
    title: 'Product Manager Fellow, selected as Top Fellow',
    start: 'June 2026',
    end: 'Present',
    location: 'Remote',
    scope:
      'Selected as Top Fellow of the cohort. Owned every stage of the graduation project myself: discovery research, a controlled root-cause test, a scored solution trade-off, a shipped MVP, and the metric tree to judge it by.',
    isCurrent: true,
    bullets: [
      {
        text: 'Tip of My Tongue, graduation project: found that 82% of photo-search failures start on a clue the app misread rather than a clue the person never gave, reproduced it in a controlled test, and shipped a search that shows its reading and asks once instead of guessing.',
        caseStudySlug: 'tip-of-my-tongue',
      },
      {
        text: 'Built a discovery engine over 6,551 public posts to reach 84 verified failure cases, then hand-audited 20 of the AI classifications and published the correction: the headline 82% becomes 76%.',
      },
      {
        text: 'Voice Adoption Research: 40-respondent primary research diagnosing why ChatGPT Mobile voice has high trial but near-zero retention among first-time job seekers in India.',
        caseStudySlug: 'voice-adoption-research',
      },
      {
        text: 'Voice Recovery Coach: took that research through a full PRD, a documented 3-way solution trade-off, and a working interactive prototype.',
        caseStudySlug: 'voice-recovery-coach',
      },
      {
        text: 'Structured product teardowns: Duolingo (retention-loop analysis proposing one consolidated reward tier, with a metric), plus smallcase, Swiggy, Peppo, Wanderlust and GameOn.',
      },
      {
        text: 'Three solo AI builds alongside the fellowship: a grounded RAG assistant over mutual fund scheme documents, a movie and book recommender, and a gamified habit tracker.',
      },
    ],
  },
  {
    id: 'ola-electric',
    company: 'Ola Electric',
    title: 'Software Development Engineer, BMS, Algorithms & Fleet Analytics',
    start: 'June 2022',
    end: 'April 2026',
    location: 'Bengaluru, India',
    companyBlurb:
      'India’s largest electric two-wheeler manufacturer, publicly listed (NSE: OLAELEC).',
    scope:
      'Sole owner of 3 production firmware modules, from problem definition through specs, acceptance criteria and phased rollout across millions of vehicles, coordinating across 6 teams (hardware, firmware, QA, product, system integration, GTM).',
    bullets: [
      {
        text: 'Pack health and warranty recovery: returned battery packs were being scrapped with no view of what was still good. Built the fleet-wide pack-health engine (RLS + Kalman filter) behind a 13S rebuild, salvaging ~70% of warranty returns and recovering ₹3 Cr of hardware.',
      },
      {
        text: 'Fault detection: healthy vehicles were being flagged as faulty, sending owners to service centres for nothing. Mined charging, voltage, thermal and fault telemetry to separate real failure modes from sensor noise, then rewrote the fault specs: false alerts down 80%, pre-charge false positives down 25% fleet-wide.',
      },
      {
        text: 'Digital Charger: charger software sat across six teams with nobody owning the whole thing. Took it end to end, hardware through go-to-market, and cut ₹1,500/unit from the bill of materials.',
      },
      {
        text: '"Reduce charge time" arrived as an ask with no definition of what was safe. Designed a dual-simplex LP that picks charging current against pack health, temperature, SoC and voltage limits rather than a fixed profile, improving charge-time prediction accuracy 30%.',
      },
      {
        text: 'Thermal safety: field data showed a heat risk nobody had flagged. Shipped a predictive core-temperature model (MPC) with progressive power easing, chosen deliberately over a hard cutoff.',
      },
      {
        text: 'Patent, co-inventor with Arnav Raj: "Adaptive Charge Scheduling for Energy Storage Devices of Electric Vehicles" (App. No. 202441061894, filed Aug 2024, published Feb 2026). Schedules each charge against that pack\'s own health and temperature history rather than a profile fixed for every vehicle.',
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
  {
    school: 'McKinsey Forward Program',
    degree: 'Leadership and structured problem-solving',
    date: 'Enrolled 2026',
  },
]

export const leadership: string[] = [
  'Webinar & Online Training Lead, IEEE India Council SCT (2022–23). Ran the national training programme.',
  'Vice-Chair, IEEE Student Branch NIT Durgapur (2021–22)',
  'Vice-President, Debating Society, NIT Durgapur',
]
