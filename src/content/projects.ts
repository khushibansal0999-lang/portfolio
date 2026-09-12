import type { Project } from './types'

// Order is deliberate — most interesting first, not most recent. See PLAN.md /projects spec.
export const projects: Project[] = [
  {
    slug: 'voice-recovery-prototype',
    title: 'Voice Recovery Coach — Prototype',
    summary:
      'The working interactive prototype behind the Voice Recovery Coach case study — a live, clickable 6-screen flow you can try yourself.',
    status: 'Live',
    stack: ['React', 'Lovable'],
    liveUrl: 'https://speak-and-recover.lovable.app',
    caseStudySlug: 'voice-recovery-coach',
    hasDetail: false,
    timeframe: 'July 2026',
  },
  {
    slug: 'cineverse-ai',
    title: 'CineVerse AI',
    summary:
      'A mood-and-taste-aware recommendation engine for movies and books — built to eliminate the 15–25 minutes people lose scrolling Netflix and Goodreads after finishing something great.',
    status: 'Live',
    stack: ['React', 'Lovable', 'Supabase', 'TMDB API'],
    liveUrl: 'https://cine-verseai.lovable.app',
    cover: '/projects/cineverse-cover.webp',
    decks: [{ href: '/decks/cineverse-prd.pdf', label: 'View PRD' }],
    hasDetail: true,
    timeframe: 'July 2026',
    whyBuilt:
      'Existing recommendation engines are calibrated for platform retention, not user satisfaction — "Based on your viewing history" surfaces things already seen or plainly irrelevant. I wanted to test a narrower idea: a single hero recommendation with a visible match score and a one-line reason, spanning both movies and books in one taste profile, so a user never has to think — there\'s already a best pick waiting when they open the app. I wrote a full PRD before touching code: two personas (a "Paralysed Finisher" and a "List Hoarder"), a 10-entity data model, 5 core screens with Given/When/Then acceptance criteria, and — the part I\'d skip on a smaller project — 6 explicit non-goals (no social features, no streaming deep links, no native apps in v1) to keep the build from sprawling.',
    lesson:
      'Writing the non-goals list before the screens was the single highest-leverage hour of the project — every scope argument I would otherwise have had with myself mid-build was already resolved on paper. If I rebuilt this, I\'d cut Discover/Browse from v1 entirely; the hero recommendation card does most of the actual job, and the browsable grid was more effort than the PRD\'s own success metric (recommendation-to-action rate) needed to validate.',
    screens: [
      { src: '/projects/cineverse-cover.webp', alt: 'CineVerse AI home dashboard showing a hero recommendation card with match score, and horizontal shelves for movies and books' },
      { src: '/projects/cineverse-taste-setup.webp', alt: 'CineVerse AI taste setup onboarding screen with a genre selection grid' },
    ],
  },
  {
    slug: 'ascend',
    title: 'Ascend',
    summary:
      'A gamified habit tracker themed as an RPG progression system — clear quests, earn XP, level up your stats.',
    status: 'Live',
    stack: ['React', 'Lovable'],
    liveUrl: 'https://ascend-web-sparkle.lovable.app',
    cover: '/projects/ascend-cover.webp',
    hasDetail: true,
    timeframe: 'July 2026',
    whyBuilt:
      'Most habit trackers make finishing a task feel like clearing a checkbox. I wanted to test whether framing habits as an RPG progression system — quests, XP, stat growth (STR/VIT/INT/DISC/WILL), rank-ups — made the daily-return loop stronger than a plain streak counter does. The system quests are pre-defined (100 pushups, a 10km run, morning meditation); custom quests let a user define their own and assign the XP and stat themselves.',
    lesson:
      'I deliberately scoped v1 down to just the core XP-and-streaks loop rather than building the full stat-progression and ranking system I\'d designed — the goal was to validate the retention mechanic first, not ship every idea in the concept. That constraint is what let this ship at all in the time I had; the fuller "Hunter" progression system is the natural v2 if the core loop actually holds up.',
    screens: [
      { src: '/projects/ascend-cover.webp', alt: 'Ascend daily quest board showing system quests, custom quests, and XP totals' },
      { src: '/projects/ascend-hunter-profile.webp', alt: 'Ascend hunter profile screen showing rank and stat progression' },
    ],
  },
  {
    slug: 'mutual-fund-faq-assistant',
    title: 'Mutual Fund FAQ Assistant',
    summary:
      'A grounded RAG assistant that answers factual questions about 3 HDFC mutual fund schemes — and is designed to refuse anything it isn\'t certain of.',
    status: 'Live',
    stack: ['React', 'Lovable', 'LLM API'],
    liveUrl: 'https://hdfc-fund-fact.lovable.app',
    hasDetail: true,
    timeframe: 'August 2026',
    whyBuilt:
      'The interesting product decision here wasn\'t the retrieval pipeline — it was the boundary. In financial services, a confident wrong answer is worse than no answer: it\'s a regulatory and user-harm risk, not just a bad experience. So I scoped the assistant to facts-only questions pulled from official scheme documents (expense ratio, exit load, minimum SIP, lock-in period, riskometer, benchmark), had every answer cite its source, and built it to abstain the moment a question drifted toward advice. I\'d rather it knew less and never got it wrong.',
    lesson:
      'Building the refusal behavior took longer than building the retrieval — testing and tuning when the assistant should say "I can\'t answer that" is a much less well-trodden problem than testing when it should answer correctly. I\'d budget for that asymmetry earlier next time rather than treating refusal as a small add-on at the end.',
  },
  {
    slug: 'duolingo-teardown',
    title: 'Duolingo — Product Teardown',
    summary:
      'Duolingo doesn\'t sell language learning. It sells not breaking the chain — a 13-slide teardown of the four reinforcing systems (streak, XP, social, re-engagement) that turn a language app into a daily habit, built from a live walkthrough of a real 500-day account.',
    status: 'Experiment',
    stack: ['Product teardown', 'Retention analysis'],
    hasDetail: true,
    timeframe: 'July 2026',
    cover: '/projects/duolingo-streak.webp',
    decks: [{ href: '/decks/duolingo-teardown-deck.pdf', label: 'View full deck' }],
    whyBuiltLabel: 'Scope & lens',
    whyBuilt:
      'Source: 13 screens captured from a single live session on a real account — Diamond league, 500-day streak, 50,367 lifetime XP. That profile is a highly engaged power user, so the analysis reads its mechanics accordingly, not as typical new-user behavior. Lens: engagement and retention loops — the mechanics that pull a user back tomorrow, not a feature-by-feature UI critique. Out of scope: pricing/paywall, onboarding, and course content quality, none of which appeared in this session. The framework: every screen maps back to one of four reinforcing systems — Streak (a loss-averse daily habit protected by one number), XP & Gems (a variable-reward currency with combos and multipliers on every action), Social (friend streaks, nudges, and a feed that makes progress visible to others), and Push back in (quests and leagues that expire, built to justify tomorrow\'s session). Two findings from the walkthrough: the 500-day milestone gets a full-screen celebration with the same visual weight most apps reserve for onboarding or a purchase confirmation, and a "Show it off" share button converts an internal engagement stat into external social proof — recruiting the user as a free marketing channel. Separately, the Diamond league (the terminal tier, nothing left to promote to) still drives return visits through a 5-day countdown that resets on a fixed clock, independent of the daily streak — and a rival\'s +540 XP badge is deliberately surfaced just above the user\'s own position, not the unreachable #1, because a beatable target nudges harder than an aspirational one.',
    lessonLabel: 'The recommendation',
    lesson:
      'If I owned this surface, I\'d replace four scattered engagement entry points (Feed, Friend Streaks, Practice Hub, Friends Quests — no shared home, users have to already know where to look) with one merged tab: "Learner\'s Meet-up," split into People (friend streaks, gifting, the feed, and quests unified into one social space — live study rooms, language-matched practice partners, threaded conversation instead of a scrolling achievement feed) and Theory (a companion space for the grammar rules and structured explainers that bite-sized lessons skip, tied to whatever unit the learner is currently on — filling a real gap, since nothing in this session taught grammar theory directly). Success metric: weekly active use of the merged tab against today\'s combined usage of its four predecessors, plus session length per visit as a depth signal.',
    screens: [
      { src: '/projects/duolingo-streak.webp', alt: 'Teardown slide analyzing the Duolingo streak screen: a 500-day milestone celebration, 7-day calendar strip, and Show It Off share button' },
      { src: '/projects/duolingo-leagues.webp', alt: 'Teardown slide analyzing the Duolingo Diamond League leaderboard screen: terminal-tier framing, a 5-day countdown, and a beatable rival badge' },
      { src: '/projects/duolingo-recommendation.webp', alt: 'Recommendation slide proposing a unified "Learner\'s Meet-up" tab split into People and Theory' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
