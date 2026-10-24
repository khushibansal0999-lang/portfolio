import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tip-of-my-tongue',
    title: 'Tip of My Tongue',
    summary:
      'People with large photo libraries fail to find a photo monthly or more, and 82% of those failures start on a clue the app misread rather than a clue the person never gave. I reproduced the failure in a controlled test, traced it to a silent guess inside the search, and shipped a version that shows its reading and asks once instead of guessing.',
    role: 'Graduation project, Next Leap PM Fellowship. Discovery research, root-cause test, solution trade-off and build, solo.',
    timeframe: 'September 2026',
    tags: ['0→1', 'User research', 'Root-cause analysis', 'RICE', 'AI/LLM'],
    isIndependent: false,
    heroMetric: { label: 'of failures start on a misread clue', value: '82%' },
    decks: [{ href: '/decks/tip-of-my-tongue-deck.pdf', label: 'View full deck' }],
    blocks: [
      { kind: 'heading', text: 'Context' },
      {
        kind: 'paragraph',
        text: 'Graduation project for the Next Leap PM fellowship, September 2026. Self-directed end to end: I picked the problem, built the research pipeline, ran the interviews, reproduced the failure, scored the options, and shipped the MVP. Scope: finding your own photos in Google Photos when the photo is over a year old.',
      },
      { kind: 'heading', text: 'The problem, with evidence' },
      {
        kind: 'paragraph',
        text: 'The easy read is that people cannot describe what they are looking for. The data says the opposite. Across 84 verified failure cases, 82% gave the app a fair clue and it was read wrong. Only 3 people could not say what they wanted at all. Nineteen of them remembered words printed in the photo, a bill, a receipt, an ID card, and still failed. Sixteen had forgotten exactly one thing: roughly when.',
      },
      {
        kind: 'metrics',
        items: [
          { label: 'Failures on a misread clue', value: '82%' },
          { label: 'Fail to find a photo monthly or more', value: '52%' },
          { label: 'Scroll by date instead of searching', value: '74%' },
          { label: 'Needed several tries', value: '77%' },
        ],
      },
      {
        kind: 'paragraph',
        text: 'Two findings from the interviews mattered more than the survey numbers. Face search worked in a 5,000-item library and failed the same task at 75,000, because an old face no longer matches the person today. And three of five people could not find a document they had deliberately photographed, so they had quietly moved their paperwork to Drive. None of that workaround shows up anywhere as a failed search.',
      },
      { kind: 'heading', text: 'How the research was built' },
      {
        kind: 'list',
        items: [
          'Built a discovery engine over 6,551 public posts from Reddit, the Play Store and the App Store across five countries. A keyword filter dropped storage and billing complaints before any model ran, Gemini pulled the same 15 facts out of every remaining post, and a second pass separated real memory failures from bug reports. 1,196 posts kept, 84 real cases. Open-source scrapers, Python, Gemini and Streamlit, all on free tiers, so the whole thing cost nothing.',
          'Tagged every case to the point in the journey where it broke, so failures could be sliced by photo type, by what the person remembered, and by what they did next rather than just counted.',
          'Hand-audited 20 of the classifications and published the correction rather than the flattering number: 12 of 20 agreed. The misses were nearly all posts that never describe the photo, and dropping those leaves 51 cases and moves the 82% to 76%. The finding holds, the precision does not.',
          'Ran the primary research because public posts hear only the people annoyed enough to write one, and 57% of them never say what the photo actually was. Survey of 31, then five interviews where people did real retrieval tasks on their own libraries while I watched.',
          'Dropped an idea the research killed: four of five people said juggling several Google accounts never hurt them. The fifth said it did, so it went back in as an open question rather than a finding.',
        ],
      },
      { kind: 'heading', text: 'The root cause, reproduced' },
      {
        kind: 'paragraph',
        text: 'I ran the same search four ways against one live library on 28 September 2026. "bill from last august" failed: the app heard August 2026, made it a hard filter, and dropped a bill from August 2025. "bill from august 2025" returned it at once. "around a year ago" also found it, buried in 64 results. Reading the photo was never the problem, it could list the dishes on the bill. The problem is a wall between what you typed and what the app decided you meant, with nothing on screen saying a guess had been made.',
      },
      {
        kind: 'image',
        src: '/projects/tip-of-my-tongue-rootcause.webp',
        alt: 'Root cause slide showing four versions of the same search: last august failed, last august at one8 failed, august 2025 found it at once, around a year ago found it buried in 64 results',
        caption: 'Three ways people say when, and the middle one is the trap. An exact date becomes an exact filter and works. An openly vague phrase becomes a wide range and works. "Last August" gets quietly pinned to one year and fails.',
      },
      { kind: 'heading', text: 'Choosing what to build' },
      {
        kind: 'paragraph',
        text: 'Three options, all attacking the same step, differing by what the person can actually give you. The Composer turns your sentence into small editable tags and marks the uncertain ones as preferences rather than filters (RICE 162). The Prompter asks for what memory actually keeps, strongest first, and never asks for a date (RICE 79). The Anchor lets you point at a photo and say "same trip as this one." I wrote the best argument against each one before picking, rather than after.',
      },
      {
        kind: 'list',
        items: [
          'The strongest case against the Composer: it is a filter drawer with extra steps, and the research says nobody should build one. The answer: the tags come from the person\'s own words. It is a receipt, not a control panel.',
          'The strongest case against the Prompter: it is a form, forms feel like work, and nobody asked for one. That is exactly why it scores 5 on confidence, and why it only appears after a blank result or a long pause.',
          'The strongest case against the Anchor: Google already has "more from this day", so this is browsing renamed. Browsing from a photo does exist. Searching from one does not.',
          'What stops a competitor copying it: anyone could copy the screen in a week. The hard part is knowing whether "last August" is ambiguous for you, which needs your own history.',
          'The kill line, written before the build: drop the whole idea if it asks more than 0.4 questions per search, or if fewer than 2 of 3 testers do better than they did on their own.',
        ],
      },
      { kind: 'heading', text: 'What shipped' },
      {
        kind: 'paragraph',
        text: 'You type one sentence. The app shows every clue it took as a chip you can see, change or drop. It asks exactly once, and only when a clue could mean two things: did you mean August 2025 or August 2026? Google Photos picks one silently and drops the other. When nothing matches, you get the closest few plus one question rather than a dead end.',
      },
      {
        kind: 'image',
        src: '/projects/tip-of-my-tongue-cover.webp',
        alt: 'MVP slide showing the four-step flow, a worked example of the bill from last august, and the version 1 to version 2 fixes found in testing',
        caption: 'Three unmoderated test sessions moved it from v1 to v2: the box now keeps what you type, a date alone can no longer surface a photo, and "my sister at the wedding" went from 36 results to 8 with both wedding photos first.',
      },
      {
        kind: 'link',
        href: 'https://tip-of-my-tongue.streamlit.app',
        text: 'Open the live app →',
      },
      {
        kind: 'link',
        href: 'https://app-photos-retrieval-qvlu7ymwqfadwg3siqnqjb.streamlit.app/',
        text: 'Open the discovery engine and question the evidence yourself →',
      },
      {
        kind: 'paragraph',
        text: 'The discovery engine is live rather than a screenshot, and it takes questions in plain English: ask what people type when they cannot describe the photo, and it picks the slice of the 1,196 tagged records that answers you and replies with the real quotes and the record IDs behind them. Nothing in this case study has to be taken on trust. Both apps run on free tiers, which is the point, so give either one about 15 seconds to wake up if nobody has opened it recently.',
      },
      { kind: 'heading', text: 'How it would be judged' },
      {
        kind: 'paragraph',
        text: 'The one number: of the times someone hunts for a photo over a year old, how often do they end up opening it. Target +15 points. Under it sit five more, each with the formula and the instrumentation it would need. The one the fix moves directly is "clues read correctly", vague clues kept loose rather than hardened into filters, target 95%, and it is the only measure on the list you cannot game by simply returning more photos. Questions per search is a limit, not a goal, capped at 0.4.',
      },
      {
        kind: 'metrics',
        items: [
          { label: 'Photos found when hunting old ones', value: '+15pts' },
          { label: 'People who type a clue', value: '65%', baseline: '48% today' },
          { label: 'Vague clues kept loose', value: '95%+' },
          { label: 'Dead ends rescued', value: '30%+' },
        ],
      },
      { kind: 'heading', text: 'What I would do differently, and what this cannot tell you' },
      {
        kind: 'list',
        items: [
          'I said I would run three interviewees on their own task in Google Photos first and then here, scored on number of tries. What actually ran was three unmoderated sessions on the new app only, so the comparison that would have proved the improvement is still untested. That is the weakest link in the argument and I would run it first.',
          'The biggest number in the deck, 52% failing monthly, comes off a 31-person volunteer survey, so I halved the share it suggested before sizing anything with it. The sizing is an order of magnitude, not a measurement.',
          'A 180-item demo library is not 75,000 photos, and things are easier to find in a small one. The controlled test is one library, mine.',
          'The risk I would watch first is a confident wrong answer, which hurts more than an empty one. The warning sign is people searching again within a day, and the fix costs screen space and a slower first load.',
          'External research says the bigger prize is further down the journey, at scanning results. My research says it is earlier, at understanding the words. I have not settled that disagreement, and the deck says so rather than hiding it.',
        ],
      },
    ],
  },
  {
    slug: 'voice-recovery-coach',
    title: 'Voice Recovery Coach',
    summary:
      '78% of first-time job seekers who tried voice on ChatGPT India never used it again. I traced the cause to trust collapse after one bad transcript, evaluated three solutions on an Effort/Impact/Confidence framework, and took the winner from research through a full PRD to a working prototype.',
    role: 'Independent product project: research, PRD, and prototype, solo',
    timeframe: 'June – July 2026',
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
        text: 'Independent product project, June–July 2026. Self-directed, with no company brief. I ran the research, framed the problem, evaluated solutions, wrote the PRD, and built the prototype end to end. Scope: ChatGPT Mobile’s voice input, India market, first-time job seekers.',
      },
      { kind: 'heading', text: 'The problem, with evidence' },
      {
        kind: 'paragraph',
        text: 'Of 40 surveyed first-time job seekers (21–26, Tier 1/2 cities), 100% knew voice existed and most had tried it, but 78% never used it again after one failed attempt. 64% cited Hinglish or accent misrecognition as the cause, and 52% described the failure as embarrassing, not just inconvenient. Only 12% got any in-app explanation of what went wrong. The obvious read, that voice simply wasn’t discoverable, was wrong from the start: the real problem was that a single bad transcript permanently killed trust, with no recovery path offered.',
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
          'Built a persona (Riya, 23, applying to 8–12 jobs a week from Indore) to check every design decision against a specific, concrete journey rather than an abstract user.',
          'Evaluated three solutions on Effort/Impact/Confidence rather than instinct: Voice Recovery Coach (Medium effort, High impact, High confidence, chosen), Voice Learner Mode / Siri-style calibration (Medium-High effort, Medium-High impact, Medium confidence), Contextual Voice Nudge (Low-Med effort, Medium impact, Medium confidence).',
          'Chose Voice Recovery Coach because it repairs the actual failure moment directly, rather than trying to prevent all failures in advance (Learner Mode) or just prompting more voice use without fixing trust (Nudge). I kept Learner Mode as a documented alternative to revisit, not a discarded idea.',
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
          'The 0.72 ASR confidence threshold and the dismiss-without-retry guardrail were set from research intuition, not a live data pull against real ASR failure distributions, worth flagging as an assumption if this were handed to an engineering team.',
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
        text: 'Independent product research project, June 2026. Self-directed, with no company brief and no existing team. I picked the product, defined the segment, ran the research, and framed the problem end to end. Scope: ChatGPT Mobile’s voice input feature, India market.',
      },
      { kind: 'heading', text: 'The problem, with evidence' },
      {
        kind: 'paragraph',
        text: 'ChatGPT’s voice feature had reach without retention. Of 40 surveyed first-time job seekers (21–26, Tier 1/2 cities), 100% knew voice existed and 82% had tried it, but 68% reverted permanently to typing after a single failed attempt, most citing accent and transcription errors ("I repeat myself 3–4 times for the same query. Eventually I just type it"). The obvious hypothesis, that voice isn’t discoverable, was wrong: awareness was already total. The real failure was in what happened after someone tried it once.',
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
          'Rejected two other candidate segments with reasons, not instinct: college students (crowded, lower urgency), homemakers (unrecruitable in a two-week research window), regional-language users (barrier overlaps with and would confound the accent/ASR signal). First-time job seekers won on a market-backed case: ~50% of all ChatGPT India messages already come from 18–24-year-olds, and fresher hiring was up 26% YoY.',
          'Reframed the research question mid-project: started from "why don’t they use voice" and rewrote it to "why do they stop after trying it" once the 100% awareness number came back, and that reframe is what surfaced the accent, privacy, and public-space findings.',
          'Ruled out competing explanations with the data rather than by argument: privacy anxiety, public-space discomfort, and accent accuracy all showed up qualitatively, and I traced which one the "permanent reversion" pattern actually tracked back to.',
          'Pushed past diagnosis to a specific intervention: better Hinglish/accent ASR accuracy, an inline correction step post-transcription, and contextual nudges to try voice in private/quiet-mode contexts.',
          'Built a KPI tree (Discovery → Activation → Retention → Monetization) with a named North Star metric (% of WAU using voice ≥1×/week), so the finding hands off as something a team could run against.',
        ],
      },
      { kind: 'heading', text: 'Outcome' },
      {
        kind: 'paragraph',
        text: 'This was a diagnosis-and-recommendation deliverable, not a shipped change, so the honest outcome is the quality and specificity of that deliverable, not a business metric. Concretely: a validated root-cause finding (trust/accuracy, not discovery) backed by primary data across 40 respondents, a three-part intervention tied to named findings, and a competitive urgency case (Gemini Live and Sarvam AI already building India-specific voice) for why it needed solving soon.',
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
