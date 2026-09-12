import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'voice-recovery-coach',
    title: 'Voice Recovery Coach',
    summary:
      '78% of first-time job seekers who tried voice on ChatGPT India never used it again. I traced the cause to trust collapse after one bad transcript, evaluated three solutions on an Effort/Impact/Confidence framework, and took the winner from research through a full PRD to a working prototype.',
    role: 'Independent product project: research, PRD, and prototype, solo',
    timeframe: 'June-July 2026',
    tags: ['0→1', 'AI/voice', 'PRD', 'Prototype'],
    isIndependent: true,
    heroMetric: { label: 'Target D7 voice repeat use', value: '18% → 35%' },
    decks: [
      { href: '/decks/vrx-prd.pdf', label: 'View PRD' },
      { href: '/decks/vrx-wireframes.pdf', label: 'View wireframes' },
    ],
    blocks: [
      { kind: 'heading', text: 'Context' },
      {
        kind: 'paragraph',
        text: 'Independent product project, June-July 2026, self-directed: no company brief. I ran the research, framed the problem, evaluated solutions, wrote the PRD, and built the prototype end to end. Scope: ChatGPT Mobile’s voice input, India market, first-time job seekers.',
      },
      { kind: 'heading', text: 'The problem, with evidence' },
      {
        kind: 'paragraph',
        text: 'Of 40 surveyed first-time job seekers (21-26, Tier 1/2 cities), 100% knew voice existed and most had tried it, but 78% never used it again after one failed attempt. 64% cited Hinglish or accent misrecognition as the cause, and 52% described the failure as embarrassing, not just inconvenient. Only 12% got any in-app explanation of what went wrong. The obvious read, that voice isn’t discoverable, was wrong from the start. The real problem was that a single bad transcript permanently killed trust, with no recovery path offered.',
      },
      {
        kind: 'metrics',
        items: [
          { label: 'Never returned after 1 failure', value: '78%' },
          { label: 'Cited accent/Hinglish misrecognition', value: '64%' },
          { label: 'Described the failure as embarrassing', value: '52%' },
          { label: 'Got any in-app explanation', value: '12%' },
        ],
      },
      { kind: 'heading', text: 'What I did' },
      {
        kind: 'list',
        items: [
          'Built a persona (Riya, 23, applying to 8-12 jobs a week from Indore) to check every design decision against a specific, concrete journey rather than an abstract user.',
          'Evaluated three solutions on Effort/Impact/Confidence rather than instinct: Voice Recovery Coach (Medium effort, High impact, High confidence, chosen), Voice Learner Mode / Siri-style calibration (Medium-High effort, Medium-High impact, Medium confidence), Contextual Voice Nudge (Low-Med effort, Medium impact, Medium confidence).',
          'Chose Voice Recovery Coach because it repairs the actual failure moment directly, rather than trying to prevent all failures in advance (Learner Mode) or just prompting more voice use without fixing trust (Nudge), and kept Learner Mode as a documented alternative to revisit rather than a discarded idea.',
          'Defined non-goals before scoping the build: explicitly ruled out solving model-layer ASR accuracy, full voice onboarding for every user, and Advanced Voice Mode / regional-language launch in v1.',
          'Specified real trigger logic: Recovery Coach fires when ASR confidence drops below 0.72 or the user edits/deletes a submitted query within 10 seconds, with guardrails so the recovery card auto-hides after 8 seconds and shows at most once per session.',
          'Took it to a working prototype, not just wireframes: a live, clickable 6-screen flow (idle → recording → ASR-confidence-triggered failure → editable recovery card → retry → success with a streak nudge).',
        ],
      },
      {
        kind: 'link',
        href: 'https://speak-and-recover.lovable.app',
        text: 'Open the live interactive prototype →',
      },
      { kind: 'heading', text: 'Outcome' },
      {
        kind: 'paragraph',
        text: 'This is a self-directed project, not a shipped feature, so the honest outcome is the completeness of the artifact chain: primary research → a solution decision made on a documented trade-off framework → a full PRD with goals, non-goals, trigger logic, and a real experimentation plan (50/50 A/B, D7 repeat voice use as the primary metric, explicit guardrails on session length and dismiss rate) → a working interactive prototype.',
      },
      {
        kind: 'metrics',
        items: [
          { label: 'D7 repeat voice use (target)', value: '≥35%', baseline: '~18% baseline' },
          { label: 'First-attempt success (target)', value: '≥62%', baseline: '~38% baseline' },
          { label: 'Self-reported confidence (target)', value: '≥4.0/5', baseline: '3.1/5 baseline' },
        ],
      },
      { kind: 'heading', text: 'What I’d do differently' },
      {
        kind: 'list',
        items: [
          'The 0.72 ASR confidence threshold and the dismiss-without-retry guardrail were set from research intuition, not a live data pull against real ASR failure distributions. Worth flagging as an assumption if this were handed to an engineering team.',
          'I left two open questions unresolved in the PRD (default-on vs. privacy-gated live transcript; 2G/noisy-environment degradation). I’d want to actually prototype an answer to at least the first one rather than leave it open, since it affects a core piece of the UX.',
        ],
      },
    ],
  },
  {
    slug: 'voice-adoption-research',
    title: 'Voice Adoption Research',
    summary:
      'Voice on ChatGPT Mobile in India has 82% trial but 68% never return after one failed attempt. I ran primary research to find out why, traced it to a fixable trust-accuracy gap rather than a discoverability problem, and turned the diagnosis into a three-part intervention with a KPI framework to track it.',
    role: 'Independent research project, solo',
    timeframe: 'June 2026',
    tags: ['Research', 'Problem framing', 'KPI strategy'],
    isIndependent: true,
    heroMetric: { label: 'Tried voice, never returned', value: '68%' },
    decks: [{ href: '/decks/voice-adoption-research-deck.pdf', label: 'View research deck' }],
    blocks: [
      { kind: 'heading', text: 'Context' },
      {
        kind: 'paragraph',
        text: 'Independent product research project, June 2026, self-directed: no company brief, no existing team. I picked the product, defined the segment, ran the research, and framed the problem end to end. Scope: ChatGPT Mobile’s voice input feature, India market.',
      },
      { kind: 'heading', text: 'The problem, with evidence' },
      {
        kind: 'paragraph',
        text: 'ChatGPT’s voice feature had reach without retention. Of 40 surveyed first-time job seekers (21-26, Tier 1/2 cities), 100% knew voice existed and 82% had tried it, but 68% reverted permanently to typing after a single failed attempt, most citing accent and transcription errors ("I repeat myself 3-4 times for the same query. Eventually I just type it"). The obvious hypothesis, that voice isn’t discoverable, was wrong: awareness was already total. The real failure was in what happened after someone tried it once.',
      },
      {
        kind: 'metrics',
        items: [
          { label: 'Knew voice existed', value: '100%' },
          { label: 'Tried voice at least once', value: '82%' },
          { label: 'Reverted to typing after 1 fail', value: '68%' },
        ],
      },
      { kind: 'heading', text: 'What I did' },
      {
        kind: 'list',
        items: [
          'Rejected two other candidate segments with reasons, not instinct: college students (crowded, lower urgency), homemakers (unrecruitable in a two-week research window), regional-language users (barrier overlaps with and would confound the accent/ASR signal). First-time job seekers won on a market-backed case: ~50% of all ChatGPT India messages already come from 18-24-year-olds, and fresher hiring was up 26% YoY.',
          'Reframed the research question mid-project: started from "why don’t they use voice" and rewrote it to "why do they stop after trying it" once the 100% awareness number came back. That reframe is what surfaced the accent, privacy, and public-space findings.',
          'Ruled out competing explanations with the data rather than by argument: privacy anxiety, public-space discomfort, and accent accuracy all showed up qualitatively, and I traced which one the "permanent reversion" pattern actually tracked back to.',
          'Pushed past diagnosis to a specific intervention: better Hinglish/accent ASR accuracy, an inline correction step post-transcription, and contextual nudges to try voice in private/quiet-mode contexts.',
          'Built a KPI tree (Discovery → Activation → Retention → Monetization) with a named North Star metric (% of WAU using voice ≥1×/week), so the finding hands off as something a team could run against.',
        ],
      },
      { kind: 'heading', text: 'Outcome' },
      {
        kind: 'paragraph',
        text: 'This was a diagnosis-and-recommendation deliverable, not a shipped change, so the honest outcome is the quality and specificity of that deliverable rather than a business metric. Concretely: a validated root-cause finding (trust/accuracy, not discovery) backed by primary data across 40 respondents, a three-part intervention tied to named findings, and a competitive urgency case (Gemini Live and Sarvam AI already building India-specific voice) for why it needed solving soon.',
      },
      { kind: 'heading', text: 'What I’d do differently' },
      {
        kind: 'list',
        items: [
          '40 responses is enough for a strong directional signal, not enough to precisely size the "68% never return" number. A second research wave would give a confidence interval on it, since it’s the load-bearing statistic in the argument.',
          'I stopped at recommendation here. The natural next step, prototyping the fix and testing it, is what the follow-on Voice Recovery Coach project does.',
        ],
      },
      { kind: 'link', href: '/work/voice-recovery-coach', text: 'See the follow-on project: Voice Recovery Coach →' },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug)
}
