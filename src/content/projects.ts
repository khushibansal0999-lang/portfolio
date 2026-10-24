import type { Project } from './types'

// Order is deliberate: most interesting first, not most recent. See PLAN.md /projects spec.
// `category` decides which section of the work library an entry lands in — see
// src/content/categories.ts for the taxonomy and CONTENT.md for how to add a new entry.
export const projects: Project[] = [
  {
    slug: 'tip-of-my-tongue-app',
    title: 'Tip of My Tongue',
    summary:
      'Photo search that shows you every clue it took from your sentence, lets you fix the ones it read wrong, and asks once when a clue could mean two things. The shipped MVP behind the graduation-project case study.',
    category: 'build',
    status: 'Live',
    stack: ['Python', 'Streamlit', 'Gemini'],
    liveUrl: 'https://tip-of-my-tongue.streamlit.app',
    caseStudySlug: 'tip-of-my-tongue',
    cover: '/projects/tip-of-my-tongue-cover.webp',
    hasDetail: false,
    timeframe: 'September 2026',
  },
  {
    slug: 'photo-retrieval-discovery-engine',
    title: 'Photo Retrieval Discovery Engine',
    summary:
      'A research pipeline that read 6,551 public complaints about losing your own photos and turned them into 84 verified, filterable failure cases. Ask it a question in plain English and it answers from the tagged evidence, with the real quotes and record IDs behind every claim. Free tier, so give it about 15 seconds to wake up.',
    category: 'research',
    status: 'Live',
    stack: ['Python', 'Gemini', 'Streamlit', 'Reddit & app store data'],
    liveUrl: 'https://app-photos-retrieval-qvlu7ymwqfadwg3siqnqjb.streamlit.app/',
    cover: '/projects/tip-of-my-tongue-engine.webp',
    hasDetail: true,
    timeframe: 'September 2026',
    whyBuiltLabel: 'How it works',
    whyBuilt:
      'Reading reviews by hand gives you quotes and no counts. I wanted both. The pipeline collects posts from Reddit, the Play Store and the App Store across five countries, drops storage and billing complaints with a keyword filter before any model runs, then has Gemini pull the same 15 facts out of every remaining post: what the photo was, what the person remembered, what they had forgotten, where the search broke, and what they did instead. A second pass separates real memory failures from bug reports. 6,551 posts collected, 1,196 kept, 84 real cases. Every case is tagged to the point in the journey where it broke, so the failures can be sliced by photo type, by what was remembered, and by what the person did next, and every number traces back to a quote. The live app puts a question box on top of all of it: ask "what do people type when they cannot describe the photo?" and Gemini picks the slice of the 1,196 records that answers it and replies with real quotes and the record IDs behind them, so any claim can be checked rather than taken on trust. Underneath are the breakdowns the slide could not fit: where retrieval breaks down, photo type against failure stage as a heatmap, and a memory-versus-index list pairing what each person remembered with what the app actually needed. Open-source scrapers, Python, Gemini and Streamlit Cloud, all on free tiers, no spend, which is also why it takes about 15 seconds to wake up when nobody has opened it in a while.',
    lessonLabel: 'The honest limits',
    lesson:
      'I hand-audited 20 of the classifications and published the correction rather than the flattering number: 12 of 20 agreed. The misses were nearly all posts that never describe the photo, and dropping those leaves 51 cases and moves the headline 82% to 76%. The finding holds, the precision does not. The deeper limit is who writes a public post at all: this hears the people annoyed enough to complain, and 57% of them never say what the photo actually was. That gap is exactly why the project also ran a survey of 31 and five interviews rather than stopping here.',
    screens: [
      {
        src: '/projects/tip-of-my-tongue-engine.webp',
        alt: 'Discovery engine slide showing the five-stage pipeline from 6,551 collected posts down to 84 real cases, with the four headline findings',
      },
    ],
  },
  {
    slug: 'voice-recovery-prototype',
    title: 'Voice Recovery Coach Prototype',
    summary:
      'The working interactive prototype behind the Voice Recovery Coach case study: a live, clickable 6-screen flow you can try yourself.',
    category: 'build',
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
      'A mood-and-taste-aware recommendation engine for movies and books, built to eliminate the 15 to 25 minutes people lose scrolling Netflix and Goodreads after finishing something great.',
    category: 'build',
    status: 'Live',
    stack: ['React', 'Lovable', 'Supabase', 'TMDB API'],
    liveUrl: 'https://cine-verseai.lovable.app',
    cover: '/projects/cineverse-cover.webp',
    decks: [{ href: '/decks/cineverse-prd.pdf', label: 'View PRD' }],
    hasDetail: true,
    timeframe: 'July 2026',
    whyBuilt:
      'Existing recommendation engines are calibrated for platform retention, not user satisfaction. "Based on your viewing history" surfaces things already seen or plainly irrelevant. I wanted to test a narrower idea: a single hero recommendation with a visible match score and a one-line reason, spanning both movies and books in one taste profile, so a user never has to think. There\'s already a best pick waiting when they open the app. I wrote a full PRD before touching code: two personas (a "Paralysed Finisher" and a "List Hoarder"), a 10-entity data model, 5 core screens with Given/When/Then acceptance criteria, and the part I\'d skip on a smaller project, 6 explicit non-goals (no social features, no streaming deep links, no native apps in v1) to keep the build from sprawling.',
    lesson:
      'Writing the non-goals list before the screens was the single highest-leverage hour of the project. Every scope argument I would otherwise have had with myself mid-build was already resolved on paper. If I rebuilt this, I\'d cut Discover/Browse from v1 entirely; the hero recommendation card does most of the actual job, and the browsable grid was more effort than the PRD\'s own success metric (recommendation-to-action rate) needed to validate.',
    screens: [
      { src: '/projects/cineverse-cover.webp', alt: 'CineVerse AI home dashboard showing a hero recommendation card with match score, and horizontal shelves for movies and books' },
      { src: '/projects/cineverse-taste-setup.webp', alt: 'CineVerse AI taste setup onboarding screen with a genre selection grid' },
    ],
  },
  {
    slug: 'ascend',
    title: 'Ascend',
    summary:
      'A gamified habit tracker themed as an RPG progression system: clear quests, earn XP, level up your stats.',
    category: 'build',
    status: 'Live',
    stack: ['React', 'Lovable'],
    liveUrl: 'https://ascend-web-sparkle.lovable.app',
    cover: '/projects/ascend-cover.webp',
    hasDetail: true,
    timeframe: 'July 2026',
    whyBuilt:
      'Most habit trackers make finishing a task feel like clearing a checkbox. I wanted to test whether framing habits as an RPG progression system (quests, XP, stat growth across STR/VIT/INT/DISC/WILL, rank-ups) made the daily-return loop stronger than a plain streak counter does. The system quests are pre-defined (100 pushups, a 10km run, morning meditation); custom quests let a user define their own and assign the XP and stat themselves.',
    lesson:
      'I deliberately scoped v1 down to just the core XP-and-streaks loop rather than building the full stat-progression and ranking system I\'d designed. The goal was to validate the retention mechanic first, not ship every idea in the concept. That constraint is what let this ship at all in the time I had; the fuller "Hunter" progression system is the natural v2 if the core loop actually holds up.',
    screens: [
      { src: '/projects/ascend-cover.webp', alt: 'Ascend daily quest board showing system quests, custom quests, and XP totals' },
      { src: '/projects/ascend-hunter-profile.webp', alt: 'Ascend hunter profile screen showing rank and stat progression' },
    ],
  },
  {
    slug: 'mutual-fund-faq-assistant',
    title: 'Mutual Fund FAQ Assistant',
    summary:
      'A grounded RAG assistant that answers factual questions about 3 HDFC mutual fund schemes, and is designed to refuse anything it isn\'t certain of.',
    category: 'build',
    status: 'Live',
    stack: ['React', 'Lovable', 'LLM API'],
    liveUrl: 'https://hdfc-fund-fact.lovable.app',
    hasDetail: true,
    timeframe: 'August 2026',
    whyBuilt:
      'The interesting product decision here wasn\'t the retrieval pipeline. It was the boundary. In financial services, a confident wrong answer is worse than no answer: it\'s a regulatory and user-harm risk, not just a bad experience. So I scoped the assistant to facts-only questions pulled from official scheme documents (expense ratio, exit load, minimum SIP, lock-in period, riskometer, benchmark), had every answer cite its source, and built it to abstain the moment a question drifted toward advice. I\'d rather it knew less and never got it wrong.',
    lesson:
      'Building the refusal behavior took longer than building the retrieval. Testing and tuning when the assistant should say "I can\'t answer that" is a much less well-trodden problem than testing when it should answer correctly. I\'d budget for that asymmetry earlier next time rather than treating refusal as a small add-on at the end.',
  },
  {
    slug: 'smallcase-teardown',
    title: 'smallcase Product Teardown',
    summary:
      'smallcase is building a trust product on top of a transaction product\'s instincts. A 21-slide teardown from one six-minute session: the net-worth ledger shipped a confident headline number on holdings 16 months stale, the marketplace ranks its own in-house baskets on a leaderboard it computes itself, and 12 defects surfaced in the time it took to scroll the app.',
    category: 'teardown',
    status: 'Experiment',
    stack: ['Retention analysis', 'Trust & data integrity', 'Competitive read'],
    hasDetail: true,
    timeframe: 'July 2026',
    cover: '/projects/smallcase-stale-data.webp',
    decks: [{ href: '/decks/smallcase-teardown-deck.pdf', label: 'View full deck' }],
    whyBuiltLabel: 'Scope & lens',
    whyBuilt:
      'Evidence base: one uninterrupted Android session, 21:14 to 21:20 on a single July 2026 evening, 20 screens reviewed. The teardown states up front what it did not see, so it cannot be read as claiming more than it has: no order placement or broker execution, no Investments tab, no Credit tab, no search, no paywall or real pricing, no first-run onboarding, and no view of what the returns figures look like unlocked. Capture order is not a user journey, so no intent is inferred from the sequence, with one exception: the Weekly Wrap is an authored linear story whose own progress indicator fixes card position 1 to 8, so claims about that ordering hold where claims about ordering elsewhere do not. Lens: smallcase sells curated baskets executed through your existing broker, which is a transaction business with weak switching costs. But the screens with the most investment behind them (Wealth Office, Ask AI, Forecast 2029, Credit, US equities) are aimed at a different job: own the household ledger. A basket is a purchase, a net worth is a relationship, and the teardown reads every finding against the gap between those two.',
    lessonLabel: 'The critical finding, and what I would do',
    lesson:
      'The Wealth Office displays a net worth of ₹4.23L with a ▲₹2.34K monthly delta and a dashed three-year forecast cone out to 2029, on holdings last synced in March 2025. Sixteen months stale, rendered as current, with a dismissible toast as the only tell. The defect is not the stale data, it is the confidence rendered on top of it, and Ask AI reads the same inputs. A net-worth product\'s entire value is that the number is true, so this is the worst possible bug in the worst possible place. Two other trust cracks sit beside it: 3 of the 5 top stock baskets by inflow are Windmill Capital, smallcase\'s own in-house research arm, ranked on a leaderboard the platform computes itself with no disclosure of the relationship, which is the Amazon Basics problem. And the card whose only job is ranking prints its ranks as 1, 2, 3, 2, 5. My P0 is trust integrity: never render a net worth, delta or forecast from inputs past a staleness threshold, make re-auth the primary action rather than a dismissible banner, and put a QA gate on the Weekly Wrap pipeline before publish, measured by the share of views served a stale-flagged number and resync completion within 7 days. P1 is conversion honesty: show something on returns before the unlock so users stop ranking baskets by minimum ticket size, label first-party baskets before someone else does it for you, and break the sequence that ends a fear-framed story on a buy-adjacent CTA. P2 is structural: promote Wealth Office into primary nav, move the activation checklist above three screens of merchandising, give Create a fork-an-existing-basket first step, and attack the 72× cliff between a ₹300 beginner basket and a ₹21,701 themed one that sit in the same browsing surface.',
    screens: [
      {
        src: '/projects/smallcase-thesis.webp',
        alt: 'Thesis slide: two products and two instincts, contrasting the polished transaction layer against the trust layer shipping a headline net worth built on sixteen-month-old data',
      },
      {
        src: '/projects/smallcase-stale-data.webp',
        alt: 'Critical finding slide: a timeline from holdings last synced in March 2025, to a net worth displayed as current in July 2026, to a three-year forecast cone rendered out to 2029',
      },
      {
        src: '/projects/smallcase-defect-log.webp',
        alt: 'Defect log slide listing twelve issues found in six minutes, graded from critical to low, with screen and severity for each',
      },
      {
        src: '/projects/smallcase-recommendations.webp',
        alt: 'Recommendations slide with P0 trust integrity and P1 conversion honesty, each action paired with the metric that would show whether it worked',
      },
    ],
  },
  {
    slug: 'duolingo-teardown',
    title: 'Duolingo Product Teardown',
    summary:
      'Duolingo doesn\'t sell language learning. It sells not breaking the chain. A 13-slide teardown of the four reinforcing systems (streak, XP, social, re-engagement) that turn a language app into a daily habit, built from a live walkthrough of a real 500-day account.',
    category: 'teardown',
    status: 'Experiment',
    stack: ['Retention analysis', 'Engagement loops'],
    hasDetail: true,
    timeframe: 'July 2026',
    cover: '/projects/duolingo-streak.webp',
    decks: [{ href: '/decks/duolingo-teardown-deck.pdf', label: 'View full deck' }],
    whyBuiltLabel: 'Scope & lens',
    whyBuilt:
      'Source: 13 screens captured from a single live session on a real account (Diamond league, 500-day streak, 50,367 lifetime XP). That profile is a highly engaged power user, so the analysis reads its mechanics accordingly, not as typical new-user behavior. Lens: engagement and retention loops, the mechanics that pull a user back tomorrow, rather than a feature-by-feature UI critique. Out of scope: pricing/paywall, onboarding, and course content quality, none of which appeared in this session. The framework: every screen maps back to one of four reinforcing systems. Streak (a loss-averse daily habit protected by one number), XP & Gems (a variable-reward currency with combos and multipliers on every action), Social (friend streaks, nudges, and a feed that makes progress visible to others), and Push back in (quests and leagues that expire, built to justify tomorrow\'s session). Two findings from the walkthrough: the 500-day milestone gets a full-screen celebration with the same visual weight most apps reserve for onboarding or a purchase confirmation, and a "Show it off" share button converts an internal engagement stat into external social proof, recruiting the user as a free marketing channel. Separately, the Diamond league (the terminal tier, nothing left to promote to) still drives return visits through a 5-day countdown that resets on a fixed clock, independent of the daily streak. And a rival\'s +540 XP badge is deliberately surfaced just above the user\'s own position, not the unreachable #1, because a beatable target nudges harder than an aspirational one.',
    lessonLabel: 'The recommendation',
    lesson:
      'If I owned this surface, I\'d replace four scattered engagement entry points (Feed, Friend Streaks, Practice Hub, Friends Quests, with no shared home, so users have to already know where to look) with one merged tab: "Learner\'s Meet-up," split into People (friend streaks, gifting, the feed, and quests unified into one social space, with live study rooms, language-matched practice partners, and threaded conversation instead of a scrolling achievement feed) and Theory (a companion space for the grammar rules and structured explainers that bite-sized lessons skip, tied to whatever unit the learner is currently on, filling a real gap since nothing in this session taught grammar theory directly). Success metric: weekly active use of the merged tab against today\'s combined usage of its four predecessors, plus session length per visit as a depth signal.',
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
