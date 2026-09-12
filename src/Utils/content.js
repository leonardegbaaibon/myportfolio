/**
 * Page copy for the Workshop design.
 *
 * `data.js` holds the records: every project, every engagement, every
 * recommendation. This file holds the voice: headlines, framing, and the
 * editorial choices about which six builds lead and what each one is for.
 * Keeping them apart means adding a project never means rewriting a headline.
 */

export const availability = {
  open: true,
  line: 'One seat open from October 2026',
  from: 'Oct 2026',
  overlap: 'WAT / GMT / EST',
  shape: 'Contract or full time',
  seats: 1,
};

export const hero = {
  // Split so the highlighter can sit behind specific runs of words.
  headline: [
    { text: 'I build the apps people use to ' },
    { text: 'move money', mark: 'butter' },
    { text: ' and ' },
    { text: 'move themselves', mark: 'sky' },
    { text: ', ' },
    { text: 'and I stay until they stop breaking.', serif: true },
  ],
  intro:
    'Four years of React Native, Kotlin and TypeScript across fintech, mobility and telematics. ' +
    'Ten apps in production, six through Apple review, eight through Play. Most of the work I am ' +
    'proud of happened after launch, not before it.',
};

/** Uneven on purpose. Sizes vary so the grid has rhythm. */
export const heroTiles = [
  { value: '99.2%', label: 'Crash-free sessions', note: 'Swiift, held through the first production release on both stores', tone: 'clay', wide: true },
  { value: '$70K',  label: 'Settled monthly',     note: 'BlockEx, four currencies, 99.9% uptime' },
  { value: '−42%',  label: 'Battery drain',       note: 'Kabu, after the geolocation rewrite' },
  { value: '−60%',  label: 'False alerts',        note: 'Gumshoe, acoustic DSP retune on Kotlin', tone: 'sky' },
  { value: '14',    label: 'Builds shipped',      note: '11 mobile, 3 web. One of them native Kotlin.' },
];

export const tickerItems = [
  { text: 'Kabu in store review', lead: 'Now:' },
  { text: 'Buildsure in development at Baye Capital', lead: 'Now:' },
  { text: 'React Native' },
  { text: 'Kotlin' },
  { text: 'TypeScript' },
  { text: 'Supabase Edge' },
  { text: 'Stripe' },
  { text: 'Google Maps' },
  { text: 'Jetpack Compose' },
  { text: 'Swift' },
];

/**
 * The six that lead, keyed to `projectsData` ids.
 * `span` drives the asymmetric grid; `body` is the written framing;
 * `hits` are the measured outcomes shown along the bottom of the block.
 */
export const featuredWork = [
  {
    id: 'swiift',
    name: 'Swiift',
    span: 'wide',
    showImage: true,
    stage: { label: 'LIVE, BOTH STORES', tone: 'live' },
    meta: 'Lead Mobile Developer · Swiift Fintech · Jun 2025 to Jan 2026',
    body: [
      'An everyday crypto wallet where you never see the word blockchain. Buy, spend, save, send, pay bills, generate a virtual debit card. I led the build end to end and ran both store submissions, including two rejections.',
      'The hard part was never cryptography, it was network quality. On Lagos mobile data a request can hang for nine seconds and then succeed, so every write is idempotent and the wallet reconciles on resume. The naive version double-spends.',
    ],
    emphasis: 'The hard part was never cryptography, it was network quality.',
    tags: ['React Native', 'Expo', 'Redux Toolkit', 'TypeScript', 'Stripe', 'Crypto rails'],
    hits: [
      { v: '99.2%', k: 'crash-free sessions' },
      { v: '+25%',  k: 'active retention' },
      { v: '<2s',   k: 'median confirmation' },
    ],
  },
  {
    id: 'kabu',
    name: 'Kabu',
    span: 'third',
    stage: { label: 'IN REVIEW', tone: 'review' },
    meta: 'Lead Mobile Engineer · Incenvia · 2026',
    body: [
      'Chauffeur and car rental marketplace for Lagos. I own the rider side: destination entry, vehicle tier, driver hire, live trip view.',
      'Continuous high-accuracy GPS on two devices is how you get uninstalled. Adaptive sampling tied to trip state fixed it.',
    ],
    emphasis: 'Continuous high-accuracy GPS on two devices is how you get uninstalled.',
    tags: ['React Native', 'TypeScript', 'Maps', 'SQLite'],
    hits: [
      { v: '−42%', k: 'battery drain' },
      { v: '<1s',  k: 'dispatch stream' },
    ],
  },
  {
    id: 'blockex',
    name: 'BlockEx',
    span: 'half',
    showImage: true,
    stage: { label: 'LIVE, OPEN SOURCE', tone: 'live' },
    meta: 'Full-Stack Engineer · Blockspace Technologies · 2024 to 2025',
    body: [
      'B2B exchange and remittance desk. I built the trading frontend and the whole serverless backend on Supabase Edge Functions, so the order book and settlement never depend on a long-lived server holding state.',
      'The first WebSocket layer leaked a subscription on every symbol switch. Three tabs open for an afternoon and the browser was gone. The rewrite uses one multiplexed connection with reference-counted topics.',
    ],
    emphasis: 'The first WebSocket layer leaked a subscription on every symbol switch.',
    tags: ['React', 'Next.js', 'Supabase', 'Edge Functions', 'WebSocket'],
    hits: [
      { v: '$70K+', k: 'settled monthly' },
      { v: '99.9%', k: 'uptime' },
      { v: '−68%',  k: 'client memory' },
    ],
  },
  {
    id: 'gumshoe',
    name: 'Gumshoe',
    span: 'half',
    showImage: true,
    stage: { label: 'LIVE, UNDER NDA', tone: 'live' },
    meta: 'Mobile & Systems Engineer · Tsaron Technologies · 2023 to 2024',
    body: [
      'Native Kotlin insurtech telematics. It listens for the acoustic signature of a driver using a phone at the wheel, fuses that with motion sensors, and builds a tamper-evident packet for accident reconstruction and automated subrogation claims.',
      'Most of the work was narrowing the false-positive band: a passenger’s phone, a radio advert, a pothole at the wrong moment. All while keeping a DSP pipeline alive on a mid-range Android without cooking the battery.',
    ],
    emphasis: 'Most of the work was narrowing the false-positive band:',
    tags: ['Kotlin', 'Android native', 'DSP', 'Sensor fusion', 'FNOL'],
    hits: [
      { v: '−60%', k: 'false alerts' },
      { v: 'Auto', k: 'claims from telemetry' },
    ],
  },
  {
    id: 'nididrive',
    name: 'NidiDrive',
    span: 'third',
    stage: { label: 'LIVE', tone: 'live' },
    meta: 'Mobile Developer · 2025',
    body: [
      'Brought in to fix a slow, crashing dispatch app. Map clustering, a state refactor, and moving location subscriptions out of the component tree did most of it.',
    ],
    tags: ['React Native', 'Firebase', 'Maps'],
    hits: [
      { v: '−40%', k: 'crash rate' },
      { v: '+20%', k: 'daily actives' },
    ],
  },
  {
    id: 'glamorgram',
    name: 'Glamorgram',
    span: 'third',
    stage: { label: 'LIVE', tone: 'live' },
    meta: 'Mobile Engineer · 2026',
    body: [
      'Scheduling and payments for salon owners. Beauty services have variable durations, so slot conflict resolution cannot sit on a fixed grid. Stripe collects at booking, which is what actually reduced no-shows.',
    ],
    tags: ['React Native', 'Expo', 'Stripe'],
    hits: [{ v: 'iOS + Android', k: 'one codebase' }],
  },
  {
    id: 'itspaydai',
    name: 'PayDai',
    span: 'third',
    stage: { label: 'COMPLETED', tone: 'done' },
    meta: 'Frontend Engineer · ItsPaydai · 2023',
    body: [
      'Multi-tier commission reconciliation with automated Stripe and PayPal batch payouts. Reps watch their money land on a live channel instead of emailing finance to ask.',
    ],
    tags: ['React', 'Stripe', 'PayPal', 'WebSockets'],
    hits: [{ v: '−75%', k: 'processing time' }],
  },
];

export const howIWork = {
  heading: 'Four habits that produced',
  headingServif: 'most of those numbers.',
  intro: 'Not a philosophy. Things I actually do, in roughly this order.',
  steps: [
    {
      n: '01',
      title: 'Start on the slow phone',
      body: 'A mid-range Android stays in the loop from day one. Simulators lie about battery, thermal throttling and network. The Kabu and NidiDrive results both came from the cheap device.',
    },
    {
      n: '02',
      title: 'Assume the connection drops',
      body: 'Idempotent writes, a reconciliation pass on resume, and never letting a spinner be the only state a screen can hold. That is the normal case where these apps ship, not an edge case.',
    },
    {
      n: '03',
      title: 'Measure, then optimise',
      body: 'Sentry, crash grouping and a few funnel events go in first. The 68% memory reduction came out of a heap snapshot. Without a number, performance work is decoration.',
    },
    {
      n: '04',
      title: 'Leave a runbook',
      body: 'Contracts end. Mine end with an architecture note, the deployment runbook, and the next three things I would do in priority order. Talstrike V2 was scoped that way before handover.',
    },
  ],
};

export const contact = {
  heading: 'Got a build that needs',
  headingSerif: 'finishing?',
  intro:
    'Mobile builds, performance rescues, payments integrations. You get a reply within a working day ' +
    'with either a plan or an honest pointer to someone better suited.',
  teaching:
    'I also run React Native architecture and Figma-to-code sessions, using production code from the ' +
    'builds above rather than toy examples. Intermediate to advanced, one to one or small group.',
};

/* ---------------------------------------------------------------- dashboard */

export const boardMeta = {
  title: 'The board',
  line: '14 builds · 2022 to 2026 · last update: Kabu submitted for store review, 04 Sep 2026',
  sorts: ['Complexity', 'Recent', 'Impact'],
};

export const scoreboard = [
  { value: '99.2%', label: 'Best crash-free rate',  note: 'Swiift, held through the first production release on both stores', tone: 'clay', wide: true },
  { value: '$70K',  label: 'Settled monthly',       note: 'BlockEx, four currencies' },
  { value: '14',    label: 'Builds on the board',   note: '11 mobile, 3 web. One native Kotlin.', tone: 'sky' },
  { value: '4.6y',  label: 'In production code',    note: 'Feb 2022 to Sep 2026', tone: 'butter' },
];

/** Stack coverage across the 14 builds. Counted, not estimated. */
export const stackCoverage = [
  { label: 'TypeScript',         count: 12, of: 14, tone: 'olive' },
  { label: 'React Native, Expo', count: 11, of: 14, tone: 'olive' },
  { label: 'Redux Toolkit',      count: 10, of: 14, tone: 'sky' },
  { label: 'Payments rails',     count: 6,  of: 14, tone: 'clay' },
  { label: 'Maps, geolocation',  count: 3,  of: 14, tone: 'sky' },
  { label: 'Kotlin, native',     count: 2,  of: 14, tone: 'clay' },
  { label: 'Supabase, edge',     count: 2,  of: 14, tone: 'sky' },
];

export const storeRecord = [
  { label: 'App Store submissions',  value: '6' },
  { label: 'Play Store submissions', value: '8' },
  { label: 'Currently in review',    value: '1' },
  { label: 'Rejections resolved',    value: '5' },
];

/** The row that opens by default under the table. */
export const openedRow = {
  id: 'swiift',
  meta: 'Lead Mobile Developer · Jun 2025 to Jan 2026 · live on both stores · source under NDA',
  body: [
    'Buy, spend, save, send, pay bills, issue a virtual debit card. The brief was to hide the blockchain completely, which turns out to be a state-consistency problem more than a crypto one.',
    'Every write is idempotent and the wallet reconciles on resume, because on Lagos mobile data a request can hang for nine seconds and then succeed. The naive version double-spends.',
  ],
  tags: ['React Native', 'Expo', 'Redux Toolkit', 'TypeScript', 'Stripe', 'Crypto rails'],
  outcomes: [
    { v: '99.2%',  k: 'crash-free sessions, first production release' },
    { v: '+25%',   k: 'active retention after the onboarding rewrite' },
    { v: '<2s',    k: 'median confirmation, down from about 6s' },
    { v: 'KYC',    k: 'automated, instant virtual card on approval' },
    { v: '2 / 2',  k: 'Apple review rejections resolved' },
    { v: '4 cur.', k: 'multi-currency funding and in-app conversion' },
  ],
};



/** Short display names for the register table. `data.js` keeps the full titles. */
export const shortNames = {
  glamorgram:  'Glamorgram',
  talstrike:   'Talstrike',
  nididrive:   'NidiDrive',
  kabu:        'Kabu',
  swiftpoint:  'Swiftpoint',
  swiift:      'Swiift',
  blockex:     'BlockEx',
  gumshoe:     'Gumshoe',
  buildsure:   'Buildsure',
  cryptolens:  'CryptoLens',
  itspaydai:   'PayDai',
  powerplay:   'Powerplay',
  proptibaank: 'Proptibaank',
  empirestar:  'Empirestar',
};

/** One-line descriptors for the register table, keyed by project id. */
export const blurbs = {
  glamorgram:  'Salon scheduling, Stripe checkout',
  talstrike:   'Athlete video reels, scout pipeline',
  nididrive:   'Dispatch, geofencing, push alerts',
  kabu:        'Chauffeur marketplace, live trips',
  swiftpoint:  'Bills, airtime, merchant checkout',
  swiift:      'Everyday crypto wallet, virtual cards',
  blockex:     'B2B exchange, Supabase Edge backend',
  gumshoe:     'Kotlin telematics, acoustic DSP',
  buildsure:   'Proptech listings, contract generation',
  cryptolens:  'Market analytics, live price ticks',
  itspaydai:   'Commission engine, Stripe and PayPal',
  powerplay:   'BLE lighting control, energy telemetry',
  proptibaank: 'Fractional real estate staking',
  empirestar:  'Live audition streaming, voting',
};

/** Stage presentation for the register table and work blocks. */
export const stageTone = {
  Production: 'live',
  'Production (Live)': 'live',
  'Production (Play Store & App Store)': 'live',
  'In Review (App Store & Play Store)': 'review',
  'Active Development': 'dev',
  Completed: 'done',
};

export const stageLabel = {
  Production: 'LIVE',
  'Production (Live)': 'LIVE',
  'Production (Play Store & App Store)': 'LIVE',
  'In Review (App Store & Play Store)': 'IN REVIEW',
  'Active Development': 'IN DEV',
  Completed: 'COMPLETED',
};
