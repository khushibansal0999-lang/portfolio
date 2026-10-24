# Site copy

_Generated from the code on 2026-10-24 by npm run export:copy_

This is every word of written content on the site. Edit the text freely. Leave the [id] lines alone: they are how each block maps back to the code. When you are done, send this file back to Claude and say which sections you changed.

Two house rules the site already follows, worth keeping as you edit:

- No em dashes. Use a colon, a full stop, or a comma.
- Nothing framed as an absence ("no PM on the team"). Say what you owned instead.

The site has five themes and they share all of this prose, so one change here lands on every theme. Only the labels in the last section differ between themes.

---

## What I am open to

_src/content/availability.ts. Drives every status badge and contact block._

**Headline**
`[availability.headline]`

Open to APM and PM roles

**Short version, for pills and tight spaces**
`[availability.headlineShort]`

Open to APM / PM roles

**Work modes**
`[availability.modesLine]`

Onsite, hybrid, or remote

**Based in**
`[availability.base]`

Bengaluru, India

---

## Home page

_src/content/pageCopy.ts, home_

**Tagline under the name**
`[home.tagline]`

Khushi Bansal · Product Manager, Deep Tech, AI & Data-Driven Products

**Opening paragraph**
`[home.intro]`

Four years of end-to-end product ownership at Ola Electric, shipping battery management features to millions of EVs. Recovered ₹3 Cr of hardware, cut false alerts by 80%, and co-filed a patent. Top Fellow at Next Leap, and now I build AI products solo, start to finish.

**Caption under the hero photo**
`[home.photoCaption]`

I make product decisions with evidence, write the artifact, and own the tradeoff.

**Greeting, line 1**
`[home.greetingLine1]`

Hello,

**Greeting, line 2**
`[home.greetingLine2]`

I'm Khushi!

**The "Hello, I'm Khushi" paragraph**
`[home.arc]`

I joined Ola Electric in 2022 as a firmware engineer on battery management systems, and the product decisions came with the modules: writing the spec, reading the fleet telemetry, making the tradeoff call on things that shipped to millions of vehicles. I left in April 2026 to make the switch official, was named Top Fellow of my Next Leap cohort, and now I build AI products solo, start to finish.

**Tags under the case studies box**
`[home.caseStudyTags]`

- Problem framing
- PRDs
- 0→1
- Data fluency

**Toolkit, product column**
`[home.toolkit.product]`

- PRDs & acceptance criteria
- Primary user research
- KPI trees & A/B design
- RICE · Kano · MoSCoW

**Toolkit, technical column**
`[home.toolkit.technical]`

- Fleet telemetry analysis
- Optimisation (LP, MPC)
- Embedded systems
- SQL · Python · RAG · LLM APIs

**How I work, short version for the home page**
`[home.howIWork]`

- The mutual-fund RAG assistant abstains and cites its sources instead of ever speculating. I'd rather it cover less and be right every time.
- Fleet telemetry usually told me what to build next before a roadmap meeting could, separating real failure modes from sensor noise instead of guessing at them.
- Progressive thermal de-rating over a hard cutoff cost some peak performance, on purpose. A rider noticing a slower charge beats one who inherits a corner cut on safety.

**Outside work**
`[home.outside]`

- Painting & writing
- Badminton, often
- Always a book going
- Volunteering & mentoring

#### Section headings

- `[home.contactHeading]` Contact
- `[home.trackRecordHeading]` Track record
- `[home.caseStudiesHeading]` Case studies
- `[home.toolkitHeading]` Toolkit
- `[home.shippedHeading]` SHIPPED
- `[home.howIWorkHeading]` How I work
- `[home.outsideHeading]` Outside work
---

## About page

_src/content/pageCopy.ts, about_

**Opening paragraph**
`[about.intro]`

I spent four years owning product decisions on features I was also engineering: writing the spec, reading the fleet telemetry, making the tradeoff call on things that shipped to millions of vehicles. In 2026 I made that role official.

**The arc**
`[about.arc]`

I joined Ola Electric in 2022 as a firmware engineer on battery management systems. I owned those modules end to end, so the product decisions came with them: turning a vague "reduce charge time" ask into a shipped optimization framework, or deciding how much peak performance to trade away for rider safety in a thermal model. Fleet data usually told me what to build next before anyone had to ask. I left in April 2026 to make the switch official. Since then I've been named Top Fellow of my Next Leap cohort and shipped solo AI products, brief, PRD, working prototype, the whole thing, because I wanted proof this was a real shift and not just a new title on a resume.

**How I work. A bold opening sentence is optional.**
`[about.howIWork]`

- **I ship the boundary, not just the feature.** For a mutual-fund FAQ assistant, the real product decision wasn't the retrieval pipeline. It was making the assistant abstain and cite sources rather than ever speculate, since a confident wrong answer in that domain is a trust and regulatory risk. I'd rather cover less and be right every time.
- I publish the number that makes me look worse. A hand audit of my own AI classifications on the Google Photos research found only 12 of 20 agreed, which moved the headline finding from 82% to 76%. It went in the deck, because a research number nobody has stress-tested isn't a finding yet.
- Mining charging, voltage, temperature, and fault telemetry across the fleet, separating real failure modes from sensor noise, is what actually told us what to build next, not a roadmap meeting. It cut fault false positives 80% and 25% across two systems.
- Progressive thermal de-rating over a hard safety cutoff cost a bit of peak performance, on purpose. I'd rather a rider notice a slightly slower charge than have the product quietly inherit a default that cuts corners on safety.
- I wrote a 17-page PRD with Given/When/Then acceptance criteria and six non-goals for a solo AI build that nobody but me would ever read. Not because anyone asked. Sloppy specs make sloppy products, even when you're the only stakeholder.
- Spec ownership, cross-functional coordination, phased rollout on production firmware across six teams: that was just Tuesday at Ola for four years. The pivot isn't really about the fellowship. It's catching my résumé up to what I was already doing.

**What I'm still building**
`[about.stillBuilding]`

So far I've mostly shipped alone, holding both the spec and the code. That built deep technical ownership, and now I am ready to scale that rigor across a cross-functional product team where I drive the roadmap directly.

**Outside work**
`[about.outside]`

I paint and write outside of anything that needs a deadline, play badminton badly but often, and I'm rarely without a book going. I also volunteer regularly, the same instinct that had me running webinars and mock-interview drives back in college, just less official about it now.

#### Section headings and links

- `[about.arcHeading]` The arc
- `[about.howIWorkHeading]` How I work
- `[about.stillBuildingHeading]` Where I'm headed
- `[about.outsideHeading]` Outside work
- `[about.timelineLink]` The full timeline →
- `[about.projectsLink]` What I've built on my own →
---

## Work page

_src/content/pageCopy.ts work, and src/content/categories.ts for the sections_

**Opening paragraph**
`[work.intro]`

Everything here is mine end to end. Case studies and builds, plus the teardowns and analysis I write to keep the muscle warm.

**Search and social description**
`[work.seoDescription]`

Case studies, builds, teardowns, and analysis: the full library of what I've shipped and taken apart.

#### Category sections

Empty categories stay hidden until something is filed under them.

- `[category.case-study.label]` Case studies
**Case studies: section blurb**
`[category.case-study.blurb]`

End-to-end product work: research, the decision, the artifact, the outcome.

- `[category.build.label]` Builds & prototypes
**Builds & prototypes: section blurb**
`[category.build.blurb]`

Products I designed and shipped myself. Every link goes to something live and working.

- `[category.teardown.label]` Product teardowns
**Product teardowns: section blurb**
`[category.teardown.blurb]`

Existing products pulled apart to find the mechanics doing the real work.

- `[category.research.label]` User research
**User research: section blurb**
`[category.research.blurb]`

Primary research: who was asked, what they said, and what it changed.

- `[category.market-analysis.label]` Market & competitive analysis
**Market & competitive analysis: section blurb**
`[category.market-analysis.blurb]`

Where a market is moving, who is already there, and what that leaves open.

- `[category.ux-analysis.label]` UX analysis
**UX analysis: section blurb**
`[category.ux-analysis.blurb]`

Flows and interfaces read closely, with the friction named and a fix proposed.

- `[category.metrics.label]` Metrics & experiments
**Metrics & experiments: section blurb**
`[category.metrics.blurb]`

KPI trees, north-star definitions, and experiment designs with the guardrails written down.

- `[category.strategy.label]` Strategy & vision
**Strategy & vision: section blurb**
`[category.strategy.blurb]`

Where a product should go next, and the argument for why that and not the alternatives.

---

## Resume page

_src/content/pageCopy.ts resume, and src/content/roles.ts for the entries below_

**Summary paragraph**
`[resume.summary]`

Technical product manager with 3.9 years of end-to-end ownership at Ola Electric across millions of EVs: recovered ₹3 Cr of hardware, cut false failure alerts by 80%, and co-filed a patent. Top Fellow at Next Leap. I scope ambiguous problems into specs, mine telemetry to decide what to build, and drive cross-functional delivery to launch. Now building AI products solo, from problem definition through to a shipped app.

---

## Experience and timeline

_src/content/roles.ts. Shows on the Resume page, the Work History page, and the home timeline._

### Next Leap PM Fellowship

- `[role.next-leap-fellowship.title]` Product Manager Fellow, selected as Top Fellow
- `[role.next-leap-fellowship.dates]` June 2026 to Present · Remote
**Scope**
`[role.next-leap-fellowship.scope]`

Selected as Top Fellow of the cohort. Owned every stage of the graduation project myself: discovery research, a controlled root-cause test, a scored solution trade-off, a shipped MVP, and the metric tree to judge it by.

**Bullets**
`[role.next-leap-fellowship.bullets]`

- Tip of My Tongue, graduation project: found that 82% of photo-search failures start on a clue the app misread rather than a clue the person never gave, reproduced it in a controlled test, and shipped a search that shows its reading and asks once instead of guessing.
- Built a discovery engine over 6,551 public posts to reach 84 verified failure cases, then hand-audited 20 of the AI classifications and published the correction: the headline 82% becomes 76%.
- Voice Adoption Research: 40-respondent primary research diagnosing why ChatGPT Mobile voice has high trial but near-zero retention among first-time job seekers in India.
- Voice Recovery Coach: took that research through a full PRD, a documented 3-way solution trade-off, and a working interactive prototype.
- Structured product teardowns: Duolingo (retention-loop analysis proposing one consolidated reward tier, with a metric), plus smallcase, Swiggy, Peppo, Wanderlust and GameOn.
- Three solo AI builds alongside the fellowship: a grounded RAG assistant over mutual fund scheme documents, a movie and book recommender, and a gamified habit tracker.

### Ola Electric

- `[role.ola-electric.title]` Software Development Engineer, BMS, Algorithms & Fleet Analytics
- `[role.ola-electric.dates]` June 2022 to April 2026 · Bengaluru, India
**Company, one line**
`[role.ola-electric.companyBlurb]`

India’s largest electric two-wheeler manufacturer, publicly listed (NSE: OLAELEC).

**Scope**
`[role.ola-electric.scope]`

Sole owner of 3 production firmware modules, from problem definition through specs, acceptance criteria and phased rollout across millions of vehicles, coordinating across 6 teams (hardware, firmware, QA, product, system integration, GTM).

**Bullets**
`[role.ola-electric.bullets]`

- Pack health and warranty recovery: returned battery packs were being scrapped with no view of what was still good. Built the fleet-wide pack-health engine (RLS + Kalman filter) behind a 13S rebuild, salvaging ~70% of warranty returns and recovering ₹3 Cr of hardware.
- Fault detection: healthy vehicles were being flagged as faulty, sending owners to service centres for nothing. Mined charging, voltage, thermal and fault telemetry to separate real failure modes from sensor noise, then rewrote the fault specs: false alerts down 80%, pre-charge false positives down 25% fleet-wide.
- Digital Charger: charger software sat across six teams with nobody owning the whole thing. Took it end to end, hardware through go-to-market, and cut ₹1,500/unit from the bill of materials.
- "Reduce charge time" arrived as an ask with no definition of what was safe. Designed a dual-simplex LP that picks charging current against pack health, temperature, SoC and voltage limits rather than a fixed profile, improving charge-time prediction accuracy 30%.
- Thermal safety: field data showed a heat risk nobody had flagged. Shipped a predictive core-temperature model (MPC) with progressive power easing, chosen deliberately over a hard cutoff.
- Patent, co-inventor with Arnav Raj: "Adaptive Charge Scheduling for Energy Storage Devices of Electric Vehicles" (App. No. 202441061894, filed Aug 2024, published Feb 2026). Schedules each charge against that pack's own health and temperature history rather than a profile fixed for every vehicle.

### Education

- `[education.national]` B.Tech, Electrical Engineering · National Institute of Technology (NIT), Durgapur (CGPA 7.79/10.0, First Class) · May 2022
- `[education.mckinsey]` Leadership and structured problem-solving · McKinsey Forward Program · Enrolled 2026
### Leadership

**Entries**
`[leadership]`

- Webinar & Online Training Lead, IEEE India Council SCT (2022–23). Ran the national training programme.
- Vice-Chair, IEEE Student Branch NIT Durgapur (2021–22)
- Vice-President, Debating Society, NIT Durgapur

---

## Case studies

_src/content/caseStudies.ts. The long-form pages at /work/<slug>._

### Tip of My Tongue

- `[case.tip-of-my-tongue.title]` Tip of My Tongue
**Summary**
`[case.tip-of-my-tongue.summary]`

People with large photo libraries fail to find a photo monthly or more, and 82% of those failures start on a clue the app misread rather than a clue the person never gave. I reproduced the failure in a controlled test, traced it to a silent guess inside the search, and shipped a version that shows its reading and asks once instead of guessing.

- `[case.tip-of-my-tongue.role]` Graduation project, Next Leap PM Fellowship. Discovery research, root-cause test, solution trade-off and build, solo.
- `[case.tip-of-my-tongue.timeframe]` September 2026
- `[case.tip-of-my-tongue.tags]` 0→1, User research, Root-cause analysis, RICE, AI/LLM
- `[case.tip-of-my-tongue.heroMetric]` 82%: of failures start on a misread clue
#### Body

**1. Section heading**
`[case.tip-of-my-tongue.block1]`

Context

**2. Paragraph**
`[case.tip-of-my-tongue.block2]`

Graduation project for the Next Leap PM fellowship, September 2026. Self-directed end to end: I picked the problem, built the research pipeline, ran the interviews, reproduced the failure, scored the options, and shipped the MVP. Scope: finding your own photos in Google Photos when the photo is over a year old.

**3. Section heading**
`[case.tip-of-my-tongue.block3]`

The problem, with evidence

**4. Paragraph**
`[case.tip-of-my-tongue.block4]`

The easy read is that people cannot describe what they are looking for. The data says the opposite. Across 84 verified failure cases, 82% gave the app a fair clue and it was read wrong. Only 3 people could not say what they wanted at all. Nineteen of them remembered words printed in the photo, a bill, a receipt, an ID card, and still failed. Sixteen had forgotten exactly one thing: roughly when.

**5. Metric tiles**
`[case.tip-of-my-tongue.block5]`

- 82%: Failures on a misread clue
- 52%: Fail to find a photo monthly or more
- 74%: Scroll by date instead of searching
- 77%: Needed several tries

**6. Paragraph**
`[case.tip-of-my-tongue.block6]`

Two findings from the interviews mattered more than the survey numbers. Face search worked in a 5,000-item library and failed the same task at 75,000, because an old face no longer matches the person today. And three of five people could not find a document they had deliberately photographed, so they had quietly moved their paperwork to Drive. None of that workaround shows up anywhere as a failed search.

**7. Section heading**
`[case.tip-of-my-tongue.block7]`

How the research was built

**8. List**
`[case.tip-of-my-tongue.block8]`

- Built a discovery engine over 6,551 public posts from Reddit, the Play Store and the App Store across five countries. A keyword filter dropped storage and billing complaints before any model ran, Gemini pulled the same 15 facts out of every remaining post, and a second pass separated real memory failures from bug reports. 1,196 posts kept, 84 real cases. Open-source scrapers, Python, Gemini and Streamlit, all on free tiers, so the whole thing cost nothing.
- Tagged every case to the point in the journey where it broke, so failures could be sliced by photo type, by what the person remembered, and by what they did next rather than just counted.
- Hand-audited 20 of the classifications and published the correction rather than the flattering number: 12 of 20 agreed. The misses were nearly all posts that never describe the photo, and dropping those leaves 51 cases and moves the 82% to 76%. The finding holds, the precision does not.
- Ran the primary research because public posts hear only the people annoyed enough to write one, and 57% of them never say what the photo actually was. Survey of 31, then five interviews where people did real retrieval tasks on their own libraries while I watched.
- Dropped an idea the research killed: four of five people said juggling several Google accounts never hurt them. The fifth said it did, so it went back in as an open question rather than a finding.

**9. Section heading**
`[case.tip-of-my-tongue.block9]`

The root cause, reproduced

**10. Paragraph**
`[case.tip-of-my-tongue.block10]`

I ran the same search four ways against one live library on 28 September 2026. "bill from last august" failed: the app heard August 2026, made it a hard filter, and dropped a bill from August 2025. "bill from august 2025" returned it at once. "around a year ago" also found it, buried in 64 results. Reading the photo was never the problem, it could list the dishes on the bill. The problem is a wall between what you typed and what the app decided you meant, with nothing on screen saying a guess had been made.

**11. Image (/projects/tip-of-my-tongue-rootcause.webp)**
`[case.tip-of-my-tongue.block11]`

- alt text: Root cause slide showing four versions of the same search: last august failed, last august at one8 failed, august 2025 found it at once, around a year ago found it buried in 64 results
- caption: Three ways people say when, and the middle one is the trap. An exact date becomes an exact filter and works. An openly vague phrase becomes a wide range and works. "Last August" gets quietly pinned to one year and fails.

**12. Section heading**
`[case.tip-of-my-tongue.block12]`

Choosing what to build

**13. Paragraph**
`[case.tip-of-my-tongue.block13]`

Three options, all attacking the same step, differing by what the person can actually give you. The Composer turns your sentence into small editable tags and marks the uncertain ones as preferences rather than filters (RICE 162). The Prompter asks for what memory actually keeps, strongest first, and never asks for a date (RICE 79). The Anchor lets you point at a photo and say "same trip as this one." I wrote the best argument against each one before picking, rather than after.

**14. List**
`[case.tip-of-my-tongue.block14]`

- The strongest case against the Composer: it is a filter drawer with extra steps, and the research says nobody should build one. The answer: the tags come from the person's own words. It is a receipt, not a control panel.
- The strongest case against the Prompter: it is a form, forms feel like work, and nobody asked for one. That is exactly why it scores 5 on confidence, and why it only appears after a blank result or a long pause.
- The strongest case against the Anchor: Google already has "more from this day", so this is browsing renamed. Browsing from a photo does exist. Searching from one does not.
- What stops a competitor copying it: anyone could copy the screen in a week. The hard part is knowing whether "last August" is ambiguous for you, which needs your own history.
- The kill line, written before the build: drop the whole idea if it asks more than 0.4 questions per search, or if fewer than 2 of 3 testers do better than they did on their own.

**15. Section heading**
`[case.tip-of-my-tongue.block15]`

What shipped

**16. Paragraph**
`[case.tip-of-my-tongue.block16]`

You type one sentence. The app shows every clue it took as a chip you can see, change or drop. It asks exactly once, and only when a clue could mean two things: did you mean August 2025 or August 2026? Google Photos picks one silently and drops the other. When nothing matches, you get the closest few plus one question rather than a dead end.

**17. Image (/projects/tip-of-my-tongue-cover.webp)**
`[case.tip-of-my-tongue.block17]`

- alt text: MVP slide showing the four-step flow, a worked example of the bill from last august, and the version 1 to version 2 fixes found in testing
- caption: Three unmoderated test sessions moved it from v1 to v2: the box now keeps what you type, a date alone can no longer surface a photo, and "my sister at the wedding" went from 36 results to 8 with both wedding photos first.

**18. Link (https://tip-of-my-tongue.streamlit.app)**
`[case.tip-of-my-tongue.block18]`

Open the live app →

**19. Link (https://app-photos-retrieval-qvlu7ymwqfadwg3siqnqjb.streamlit.app/)**
`[case.tip-of-my-tongue.block19]`

Open the discovery engine and question the evidence yourself →

**20. Paragraph**
`[case.tip-of-my-tongue.block20]`

The discovery engine is live rather than a screenshot, and it takes questions in plain English: ask what people type when they cannot describe the photo, and it picks the slice of the 1,196 tagged records that answers you and replies with the real quotes and the record IDs behind them. Nothing in this case study has to be taken on trust. Both apps run on free tiers, which is the point, so give either one about 15 seconds to wake up if nobody has opened it recently.

**21. Section heading**
`[case.tip-of-my-tongue.block21]`

How it would be judged

**22. Paragraph**
`[case.tip-of-my-tongue.block22]`

The one number: of the times someone hunts for a photo over a year old, how often do they end up opening it. Target +15 points. Under it sit five more, each with the formula and the instrumentation it would need. The one the fix moves directly is "clues read correctly", vague clues kept loose rather than hardened into filters, target 95%, and it is the only measure on the list you cannot game by simply returning more photos. Questions per search is a limit, not a goal, capped at 0.4.

**23. Metric tiles**
`[case.tip-of-my-tongue.block23]`

- +15pts: Photos found when hunting old ones
- 65%: People who type a clue (48% today)
- 95%+: Vague clues kept loose
- 30%+: Dead ends rescued

**24. Section heading**
`[case.tip-of-my-tongue.block24]`

What I would do differently, and what this cannot tell you

**25. List**
`[case.tip-of-my-tongue.block25]`

- I said I would run three interviewees on their own task in Google Photos first and then here, scored on number of tries. What actually ran was three unmoderated sessions on the new app only, so the comparison that would have proved the improvement is still untested. That is the weakest link in the argument and I would run it first.
- The biggest number in the deck, 52% failing monthly, comes off a 31-person volunteer survey, so I halved the share it suggested before sizing anything with it. The sizing is an order of magnitude, not a measurement.
- A 180-item demo library is not 75,000 photos, and things are easier to find in a small one. The controlled test is one library, mine.
- The risk I would watch first is a confident wrong answer, which hurts more than an empty one. The warning sign is people searching again within a day, and the fix costs screen space and a slower first load.
- External research says the bigger prize is further down the journey, at scanning results. My research says it is earlier, at understanding the words. I have not settled that disagreement, and the deck says so rather than hiding it.

- `[case.tip-of-my-tongue.decks]` View full deck (/decks/tip-of-my-tongue-deck.pdf)
### Voice Recovery Coach

- `[case.voice-recovery-coach.title]` Voice Recovery Coach
**Summary**
`[case.voice-recovery-coach.summary]`

78% of first-time job seekers who tried voice on ChatGPT India never used it again. I traced the cause to trust collapse after one bad transcript, evaluated three solutions on an Effort/Impact/Confidence framework, and took the winner from research through a full PRD to a working prototype.

- `[case.voice-recovery-coach.role]` Independent product project: research, PRD, and prototype, solo
- `[case.voice-recovery-coach.timeframe]` June – July 2026
- `[case.voice-recovery-coach.tags]` 0→1, AI/voice, PRD, Prototype
- `[case.voice-recovery-coach.heroMetric]` 18% → 35%: Target D7 voice repeat use
#### Body

**1. Section heading**
`[case.voice-recovery-coach.block1]`

Context

**2. Paragraph**
`[case.voice-recovery-coach.block2]`

Independent product project, June–July 2026. Self-directed, with no company brief. I ran the research, framed the problem, evaluated solutions, wrote the PRD, and built the prototype end to end. Scope: ChatGPT Mobile’s voice input, India market, first-time job seekers.

**3. Section heading**
`[case.voice-recovery-coach.block3]`

The problem, with evidence

**4. Paragraph**
`[case.voice-recovery-coach.block4]`

Of 40 surveyed first-time job seekers (21–26, Tier 1/2 cities), 100% knew voice existed and most had tried it, but 78% never used it again after one failed attempt. 64% cited Hinglish or accent misrecognition as the cause, and 52% described the failure as embarrassing, not just inconvenient. Only 12% got any in-app explanation of what went wrong. The obvious read, that voice simply wasn’t discoverable, was wrong from the start: the real problem was that a single bad transcript permanently killed trust, with no recovery path offered.

**5. Metric tiles**
`[case.voice-recovery-coach.block5]`

- 78%: Never returned after 1 failure
- 64%: Cited accent/Hinglish misrecognition
- 52%: Described the failure as embarrassing
- 12%: Got any in-app explanation

**6. Section heading**
`[case.voice-recovery-coach.block6]`

What I did

**7. List**
`[case.voice-recovery-coach.block7]`

- Built a persona (Riya, 23, applying to 8–12 jobs a week from Indore) to check every design decision against a specific, concrete journey rather than an abstract user.
- Evaluated three solutions on Effort/Impact/Confidence rather than instinct: Voice Recovery Coach (Medium effort, High impact, High confidence, chosen), Voice Learner Mode / Siri-style calibration (Medium-High effort, Medium-High impact, Medium confidence), Contextual Voice Nudge (Low-Med effort, Medium impact, Medium confidence).
- Chose Voice Recovery Coach because it repairs the actual failure moment directly, rather than trying to prevent all failures in advance (Learner Mode) or just prompting more voice use without fixing trust (Nudge). I kept Learner Mode as a documented alternative to revisit, not a discarded idea.
- Defined non-goals before scoping the build: explicitly ruled out solving model-layer ASR accuracy, full voice onboarding for every user, and Advanced Voice Mode / regional-language launch in v1.
- Specified real trigger logic: Recovery Coach fires when ASR confidence drops below 0.72 or the user edits/deletes a submitted query within 10 seconds, with guardrails so the recovery card auto-hides after 8 seconds and shows at most once per session.
- Took it to a working prototype, not just wireframes: a live, clickable 6-screen flow (idle → recording → ASR-confidence-triggered failure → editable recovery card → retry → success with a streak nudge).

**8. Link (https://speak-and-recover.lovable.app)**
`[case.voice-recovery-coach.block8]`

Open the live interactive prototype →

**9. Section heading**
`[case.voice-recovery-coach.block9]`

Outcome

**10. Paragraph**
`[case.voice-recovery-coach.block10]`

This is a self-directed project, not a shipped feature, so the honest outcome is the completeness of the artifact chain: primary research → a solution decision made on a documented trade-off framework → a full PRD with goals, non-goals, trigger logic, and a real experimentation plan (50/50 A/B, D7 repeat voice use as the primary metric, explicit guardrails on session length and dismiss rate) → a working interactive prototype.

**11. Metric tiles**
`[case.voice-recovery-coach.block11]`

- ≥35%: D7 repeat voice use (target) (~18% baseline)
- ≥62%: First-attempt success (target) (~38% baseline)
- ≥4.0/5: Self-reported confidence (target) (3.1/5 baseline)

**12. Section heading**
`[case.voice-recovery-coach.block12]`

What I’d do differently

**13. List**
`[case.voice-recovery-coach.block13]`

- The 0.72 ASR confidence threshold and the dismiss-without-retry guardrail were set from research intuition, not a live data pull against real ASR failure distributions, worth flagging as an assumption if this were handed to an engineering team.
- I left two open questions unresolved in the PRD (default-on vs. privacy-gated live transcript; 2G/noisy-environment degradation). I’d want to actually prototype an answer to at least the first one rather than leave it open, since it affects a core piece of the UX.

- `[case.voice-recovery-coach.decks]` View PRD (/decks/vrx-prd.pdf), View wireframes (/decks/vrx-wireframes.pdf)
### Voice Adoption Research

- `[case.voice-adoption-research.title]` Voice Adoption Research
**Summary**
`[case.voice-adoption-research.summary]`

Voice on ChatGPT Mobile in India has 82% trial but 68% never return after one failed attempt. I ran primary research to find out why, traced it to a fixable trust-accuracy gap rather than a discoverability problem, and turned the diagnosis into a three-part intervention with a KPI framework to track it.

- `[case.voice-adoption-research.role]` Independent research project, solo
- `[case.voice-adoption-research.timeframe]` June 2026
- `[case.voice-adoption-research.tags]` Research, Problem framing, KPI strategy
- `[case.voice-adoption-research.heroMetric]` 68%: Tried voice, never returned
#### Body

**1. Section heading**
`[case.voice-adoption-research.block1]`

Context

**2. Paragraph**
`[case.voice-adoption-research.block2]`

Independent product research project, June 2026. Self-directed, with no company brief and no existing team. I picked the product, defined the segment, ran the research, and framed the problem end to end. Scope: ChatGPT Mobile’s voice input feature, India market.

**3. Section heading**
`[case.voice-adoption-research.block3]`

The problem, with evidence

**4. Paragraph**
`[case.voice-adoption-research.block4]`

ChatGPT’s voice feature had reach without retention. Of 40 surveyed first-time job seekers (21–26, Tier 1/2 cities), 100% knew voice existed and 82% had tried it, but 68% reverted permanently to typing after a single failed attempt, most citing accent and transcription errors ("I repeat myself 3–4 times for the same query. Eventually I just type it"). The obvious hypothesis, that voice isn’t discoverable, was wrong: awareness was already total. The real failure was in what happened after someone tried it once.

**5. Metric tiles**
`[case.voice-adoption-research.block5]`

- 100%: Knew voice existed
- 82%: Tried voice at least once
- 68%: Reverted to typing after 1 fail

**6. Section heading**
`[case.voice-adoption-research.block6]`

What I did

**7. List**
`[case.voice-adoption-research.block7]`

- Rejected two other candidate segments with reasons, not instinct: college students (crowded, lower urgency), homemakers (unrecruitable in a two-week research window), regional-language users (barrier overlaps with and would confound the accent/ASR signal). First-time job seekers won on a market-backed case: ~50% of all ChatGPT India messages already come from 18–24-year-olds, and fresher hiring was up 26% YoY.
- Reframed the research question mid-project: started from "why don’t they use voice" and rewrote it to "why do they stop after trying it" once the 100% awareness number came back, and that reframe is what surfaced the accent, privacy, and public-space findings.
- Ruled out competing explanations with the data rather than by argument: privacy anxiety, public-space discomfort, and accent accuracy all showed up qualitatively, and I traced which one the "permanent reversion" pattern actually tracked back to.
- Pushed past diagnosis to a specific intervention: better Hinglish/accent ASR accuracy, an inline correction step post-transcription, and contextual nudges to try voice in private/quiet-mode contexts.
- Built a KPI tree (Discovery → Activation → Retention → Monetization) with a named North Star metric (% of WAU using voice ≥1×/week), so the finding hands off as something a team could run against.

**8. Section heading**
`[case.voice-adoption-research.block8]`

Outcome

**9. Paragraph**
`[case.voice-adoption-research.block9]`

This was a diagnosis-and-recommendation deliverable, not a shipped change, so the honest outcome is the quality and specificity of that deliverable, not a business metric. Concretely: a validated root-cause finding (trust/accuracy, not discovery) backed by primary data across 40 respondents, a three-part intervention tied to named findings, and a competitive urgency case (Gemini Live and Sarvam AI already building India-specific voice) for why it needed solving soon.

**10. Section heading**
`[case.voice-adoption-research.block10]`

What I’d do differently

**11. List**
`[case.voice-adoption-research.block11]`

- 40 responses is enough for a strong directional signal, not enough to precisely size the "68% never return" number. A second research wave would give a confidence interval on it, since it’s the load-bearing statistic in the argument.
- I stopped at recommendation here. The natural next step, prototyping the fix and testing it, is what the follow-on Voice Recovery Coach project does.

**12. Link (/work/voice-recovery-coach)**
`[case.voice-adoption-research.block12]`

See the follow-on project: Voice Recovery Coach →

- `[case.voice-adoption-research.decks]` View research deck (/decks/voice-adoption-research-deck.pdf)
---

## Work entries

_src/content/projects.ts. The tiles on the Work page and the pages at /projects/<slug>._

### Tip of My Tongue

- `[project.tip-of-my-tongue-app.title]` Tip of My Tongue
- `[project.tip-of-my-tongue-app.meta]` build · Live · September 2026
- `[project.tip-of-my-tongue-app.tags]` Python, Streamlit, Gemini
**Summary, shown on the tile**
`[project.tip-of-my-tongue-app.summary]`

Photo search that shows you every clue it took from your sentence, lets you fix the ones it read wrong, and asks once when a clue could mean two things. The shipped MVP behind the graduation-project case study.

### Photo Retrieval Discovery Engine

- `[project.photo-retrieval-discovery-engine.title]` Photo Retrieval Discovery Engine
- `[project.photo-retrieval-discovery-engine.meta]` research · Live · September 2026
- `[project.photo-retrieval-discovery-engine.tags]` Python, Gemini, Streamlit, Reddit & app store data
**Summary, shown on the tile**
`[project.photo-retrieval-discovery-engine.summary]`

A research pipeline that read 6,551 public complaints about losing your own photos and turned them into 84 verified, filterable failure cases. Ask it a question in plain English and it answers from the tagged evidence, with the real quotes and record IDs behind every claim. Free tier, so give it about 15 seconds to wake up.

**First section, heading "How it works"**
`[project.photo-retrieval-discovery-engine.whyBuilt]`

Reading reviews by hand gives you quotes and no counts. I wanted both. The pipeline collects posts from Reddit, the Play Store and the App Store across five countries, drops storage and billing complaints with a keyword filter before any model runs, then has Gemini pull the same 15 facts out of every remaining post: what the photo was, what the person remembered, what they had forgotten, where the search broke, and what they did instead. A second pass separates real memory failures from bug reports. 6,551 posts collected, 1,196 kept, 84 real cases. Every case is tagged to the point in the journey where it broke, so the failures can be sliced by photo type, by what was remembered, and by what the person did next, and every number traces back to a quote. The live app puts a question box on top of all of it: ask "what do people type when they cannot describe the photo?" and Gemini picks the slice of the 1,196 records that answers it and replies with real quotes and the record IDs behind them, so any claim can be checked rather than taken on trust. Underneath are the breakdowns the slide could not fit: where retrieval breaks down, photo type against failure stage as a heatmap, and a memory-versus-index list pairing what each person remembered with what the app actually needed. Open-source scrapers, Python, Gemini and Streamlit Cloud, all on free tiers, no spend, which is also why it takes about 15 seconds to wake up when nobody has opened it in a while.

**Second section, heading "The honest limits"**
`[project.photo-retrieval-discovery-engine.lesson]`

I hand-audited 20 of the classifications and published the correction rather than the flattering number: 12 of 20 agreed. The misses were nearly all posts that never describe the photo, and dropping those leaves 51 cases and moves the headline 82% to 76%. The finding holds, the precision does not. The deeper limit is who writes a public post at all: this hears the people annoyed enough to complain, and 57% of them never say what the photo actually was. That gap is exactly why the project also ran a survey of 31 and five interviews rather than stopping here.

**Image alt text**
`[project.photo-retrieval-discovery-engine.screens]`

- /projects/tip-of-my-tongue-engine.webp: Discovery engine slide showing the five-stage pipeline from 6,551 collected posts down to 84 real cases, with the four headline findings

### Voice Recovery Coach Prototype

- `[project.voice-recovery-prototype.title]` Voice Recovery Coach Prototype
- `[project.voice-recovery-prototype.meta]` build · Live · July 2026
- `[project.voice-recovery-prototype.tags]` React, Lovable
**Summary, shown on the tile**
`[project.voice-recovery-prototype.summary]`

The working interactive prototype behind the Voice Recovery Coach case study: a live, clickable 6-screen flow you can try yourself.

### CineVerse AI

- `[project.cineverse-ai.title]` CineVerse AI
- `[project.cineverse-ai.meta]` build · Live · July 2026
- `[project.cineverse-ai.tags]` React, Lovable, Supabase, TMDB API
**Summary, shown on the tile**
`[project.cineverse-ai.summary]`

A mood-and-taste-aware recommendation engine for movies and books, built to eliminate the 15 to 25 minutes people lose scrolling Netflix and Goodreads after finishing something great.

**First section, heading "Why I built it"**
`[project.cineverse-ai.whyBuilt]`

Existing recommendation engines are calibrated for platform retention, not user satisfaction. "Based on your viewing history" surfaces things already seen or plainly irrelevant. I wanted to test a narrower idea: a single hero recommendation with a visible match score and a one-line reason, spanning both movies and books in one taste profile, so a user never has to think. There's already a best pick waiting when they open the app. I wrote a full PRD before touching code: two personas (a "Paralysed Finisher" and a "List Hoarder"), a 10-entity data model, 5 core screens with Given/When/Then acceptance criteria, and the part I'd skip on a smaller project, 6 explicit non-goals (no social features, no streaming deep links, no native apps in v1) to keep the build from sprawling.

**Second section, heading "What I'd do differently"**
`[project.cineverse-ai.lesson]`

Writing the non-goals list before the screens was the single highest-leverage hour of the project. Every scope argument I would otherwise have had with myself mid-build was already resolved on paper. If I rebuilt this, I'd cut Discover/Browse from v1 entirely; the hero recommendation card does most of the actual job, and the browsable grid was more effort than the PRD's own success metric (recommendation-to-action rate) needed to validate.

**Image alt text**
`[project.cineverse-ai.screens]`

- /projects/cineverse-cover.webp: CineVerse AI home dashboard showing a hero recommendation card with match score, and horizontal shelves for movies and books
- /projects/cineverse-taste-setup.webp: CineVerse AI taste setup onboarding screen with a genre selection grid

### Ascend

- `[project.ascend.title]` Ascend
- `[project.ascend.meta]` build · Live · July 2026
- `[project.ascend.tags]` React, Lovable
**Summary, shown on the tile**
`[project.ascend.summary]`

A gamified habit tracker themed as an RPG progression system: clear quests, earn XP, level up your stats.

**First section, heading "Why I built it"**
`[project.ascend.whyBuilt]`

Most habit trackers make finishing a task feel like clearing a checkbox. I wanted to test whether framing habits as an RPG progression system (quests, XP, stat growth across STR/VIT/INT/DISC/WILL, rank-ups) made the daily-return loop stronger than a plain streak counter does. The system quests are pre-defined (100 pushups, a 10km run, morning meditation); custom quests let a user define their own and assign the XP and stat themselves.

**Second section, heading "What I'd do differently"**
`[project.ascend.lesson]`

I deliberately scoped v1 down to just the core XP-and-streaks loop rather than building the full stat-progression and ranking system I'd designed. The goal was to validate the retention mechanic first, not ship every idea in the concept. That constraint is what let this ship at all in the time I had; the fuller "Hunter" progression system is the natural v2 if the core loop actually holds up.

**Image alt text**
`[project.ascend.screens]`

- /projects/ascend-cover.webp: Ascend daily quest board showing system quests, custom quests, and XP totals
- /projects/ascend-hunter-profile.webp: Ascend hunter profile screen showing rank and stat progression

### Mutual Fund FAQ Assistant

- `[project.mutual-fund-faq-assistant.title]` Mutual Fund FAQ Assistant
- `[project.mutual-fund-faq-assistant.meta]` build · Live · August 2026
- `[project.mutual-fund-faq-assistant.tags]` React, Lovable, LLM API
**Summary, shown on the tile**
`[project.mutual-fund-faq-assistant.summary]`

A grounded RAG assistant that answers factual questions about 3 HDFC mutual fund schemes, and is designed to refuse anything it isn't certain of.

**First section, heading "Why I built it"**
`[project.mutual-fund-faq-assistant.whyBuilt]`

The interesting product decision here wasn't the retrieval pipeline. It was the boundary. In financial services, a confident wrong answer is worse than no answer: it's a regulatory and user-harm risk, not just a bad experience. So I scoped the assistant to facts-only questions pulled from official scheme documents (expense ratio, exit load, minimum SIP, lock-in period, riskometer, benchmark), had every answer cite its source, and built it to abstain the moment a question drifted toward advice. I'd rather it knew less and never got it wrong.

**Second section, heading "What I'd do differently"**
`[project.mutual-fund-faq-assistant.lesson]`

Building the refusal behavior took longer than building the retrieval. Testing and tuning when the assistant should say "I can't answer that" is a much less well-trodden problem than testing when it should answer correctly. I'd budget for that asymmetry earlier next time rather than treating refusal as a small add-on at the end.

### Duolingo Product Teardown

- `[project.duolingo-teardown.title]` Duolingo Product Teardown
- `[project.duolingo-teardown.meta]` teardown · Experiment · July 2026
- `[project.duolingo-teardown.tags]` Retention analysis, Engagement loops
**Summary, shown on the tile**
`[project.duolingo-teardown.summary]`

Duolingo doesn't sell language learning. It sells not breaking the chain. A 13-slide teardown of the four reinforcing systems (streak, XP, social, re-engagement) that turn a language app into a daily habit, built from a live walkthrough of a real 500-day account.

**First section, heading "Scope & lens"**
`[project.duolingo-teardown.whyBuilt]`

Source: 13 screens captured from a single live session on a real account (Diamond league, 500-day streak, 50,367 lifetime XP). That profile is a highly engaged power user, so the analysis reads its mechanics accordingly, not as typical new-user behavior. Lens: engagement and retention loops, the mechanics that pull a user back tomorrow, rather than a feature-by-feature UI critique. Out of scope: pricing/paywall, onboarding, and course content quality, none of which appeared in this session. The framework: every screen maps back to one of four reinforcing systems. Streak (a loss-averse daily habit protected by one number), XP & Gems (a variable-reward currency with combos and multipliers on every action), Social (friend streaks, nudges, and a feed that makes progress visible to others), and Push back in (quests and leagues that expire, built to justify tomorrow's session). Two findings from the walkthrough: the 500-day milestone gets a full-screen celebration with the same visual weight most apps reserve for onboarding or a purchase confirmation, and a "Show it off" share button converts an internal engagement stat into external social proof, recruiting the user as a free marketing channel. Separately, the Diamond league (the terminal tier, nothing left to promote to) still drives return visits through a 5-day countdown that resets on a fixed clock, independent of the daily streak. And a rival's +540 XP badge is deliberately surfaced just above the user's own position, not the unreachable #1, because a beatable target nudges harder than an aspirational one.

**Second section, heading "The recommendation"**
`[project.duolingo-teardown.lesson]`

If I owned this surface, I'd replace four scattered engagement entry points (Feed, Friend Streaks, Practice Hub, Friends Quests, with no shared home, so users have to already know where to look) with one merged tab: "Learner's Meet-up," split into People (friend streaks, gifting, the feed, and quests unified into one social space, with live study rooms, language-matched practice partners, and threaded conversation instead of a scrolling achievement feed) and Theory (a companion space for the grammar rules and structured explainers that bite-sized lessons skip, tied to whatever unit the learner is currently on, filling a real gap since nothing in this session taught grammar theory directly). Success metric: weekly active use of the merged tab against today's combined usage of its four predecessors, plus session length per visit as a depth signal.

**Image alt text**
`[project.duolingo-teardown.screens]`

- /projects/duolingo-streak.webp: Teardown slide analyzing the Duolingo streak screen: a 500-day milestone celebration, 7-day calendar strip, and Show It Off share button
- /projects/duolingo-leagues.webp: Teardown slide analyzing the Duolingo Diamond League leaderboard screen: terminal-tier framing, a 5-day countdown, and a beatable rival badge
- /projects/duolingo-recommendation.webp: Recommendation slide proposing a unified "Learner's Meet-up" tab split into People and Theory

---

## Theme labels

_src/theme/labels.ts. The only copy that differs between themes: nav items, buttons and section names. Everything above is shared._

### Editorial: Documentary profile

- `[labels.editorial.nav]` Home · About · Work · Resume
- `[labels.editorial.ctaEmail]` Email me
- `[labels.editorial.workHeading]` Case studies
- `[labels.editorial.metricsHeading]` By the numbers
- `[labels.editorial.backToWork]` ← Back to work
- `[labels.editorial.nowLabel]` Now
- `[labels.editorial.pageHeading]` The full timeline
- `[labels.editorial.statusBadge]` Open to APM and PM roles · Onsite, hybrid, or remote
### Changelog: Release notes

- `[labels.changelog.nav]` Home · About · Releases · Resume
- `[labels.changelog.ctaEmail]` Email me
- `[labels.changelog.workHeading]` Changelog
- `[labels.changelog.metricsHeading]` Impact
- `[labels.changelog.backToWork]` ← Back to releases
- `[labels.changelog.nowLabel]` Currently shipping
- `[labels.changelog.pageHeading]` Version history
- `[labels.changelog.statusBadge]` status: open to apm / pm roles · onsite, hybrid, or remote
### Dashboard: Mission control

- `[labels.dashboard.nav]` Overview · About · Work · Resume
- `[labels.dashboard.ctaEmail]` Email me
- `[labels.dashboard.workHeading]` Case studies
- `[labels.dashboard.metricsHeading]` Metrics
- `[labels.dashboard.backToWork]` ← Back to overview
- `[labels.dashboard.nowLabel]` Active
- `[labels.dashboard.pageHeading]` Activity log
- `[labels.dashboard.statusBadge]` ● Open to APM and PM roles · Onsite, hybrid, or remote
### Journey: The path

- `[labels.journey.nav]` Start here · About · Quests · Resume
- `[labels.journey.ctaEmail]` Email me
- `[labels.journey.workHeading]` Chapters
- `[labels.journey.metricsHeading]` What changed
- `[labels.journey.backToWork]` ← Back to the path
- `[labels.journey.nowLabel]` You are here
- `[labels.journey.pageHeading]` The path so far
- `[labels.journey.statusBadge]` Open to the next chapter: APM or PM · Onsite, hybrid, or remote
### Poster: Zine cover

- `[labels.poster.nav]` Home · About me · Work · Resume
- `[labels.poster.ctaEmail]` Get in touch!
- `[labels.poster.workHeading]` Case studies
- `[labels.poster.metricsHeading]` Target movement
- `[labels.poster.backToWork]` ← Back to work
- `[labels.poster.nowLabel]` Now
- `[labels.poster.pageHeading]` Track record
- `[labels.poster.statusBadge]` Open to APM / PM roles
---

## Footer

**Closing line, Poster theme**
`[footer.posterHeadline]`

Let's talk product.
