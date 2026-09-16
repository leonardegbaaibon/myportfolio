import { useMemo, useState } from 'react';
import { projectsData, workExperience, personalInfo } from '../../Utils/data';
import {
  boardMeta, scoreboard, stackCoverage, storeRecord, blurbs, shortNames,
  openedRow, availability, stageTone, stageLabel,
} from '../../Utils/content';
import { Flag, Tags, Slab } from './primitives';

/* ------------------------------------------------------------------ helpers */

const toneOf  = (stage) => stageTone[stage] || 'done';
const labelOf = (stage) => stageLabel[stage] || stage.toUpperCase();

const countBy = (list, predicate) => list.filter(predicate).length;

/* ----------------------------------------------------------------- side nav */

const NavGroup = ({ title, items }) => (
  <>
    <h5 className="mx-[18px] mb-[7px] mt-[18px] font-mono text-[10px] font-medium tracking-[0.04em] text-faint">
      {title}
    </h5>
    {items.map((it) => (
      <a
        key={it.label}
        href={it.href || '#'}
        aria-current={it.active ? 'page' : undefined}
        className={`mx-3 mb-[5px] flex items-center justify-between gap-2 border-2 px-2.5 py-1.5 text-sm font-semibold tracking-[-0.02em] no-underline ${
          it.active
            ? 'border-ink bg-clay text-sheet shadow-drop-sm'
            : 'border-transparent hover:border-ink'
        }`}
      >
        <span>{it.label}</span>
        {it.count != null && (
          <em className={`font-mono text-[11px] font-normal not-italic ${it.active ? 'text-sheet/75' : 'text-faint'}`}>
            {it.count}
          </em>
        )}
      </a>
    ))}
  </>
);

const SideNav = ({ counts }) => (
  <aside className="border-b-2 border-ink bg-sheet pb-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r-2">
    <div className="border-b-2 border-ink bg-butter px-[18px] py-3.5 text-base font-extrabold tracking-[-0.03em]">
      LEONARD E.
      <span className="mt-[3px] block font-mono text-[10.5px] font-normal">
        {boardMeta.title} · {counts.total} builds
      </span>
    </div>

    <NavGroup
      title="Views"
      items={[
        { label: 'All builds', count: counts.total, active: true },
        { label: 'Engagements', count: workExperience.length },
        { label: 'Measured results', count: counts.outcomes },
        { label: 'Store submissions', count: counts.total },
      ]}
    />
    <NavGroup
      title="Surface"
      items={[
        { label: 'Mobile', count: counts.mobile },
        { label: 'Web', count: counts.web },
        { label: 'Android native', count: counts.native },
      ]}
    />
    <NavGroup
      title="Stage"
      items={[
        { label: 'Live', count: counts.live },
        { label: 'In review', count: counts.review },
        { label: 'In development', count: counts.dev },
        { label: 'Completed', count: counts.done },
      ]}
    />
    <NavGroup
      title="Elsewhere"
      items={[
        { label: 'Landing page', href: '#/' },
        { label: 'Book a call', href: personalInfo.scheduling },
      ]}
    />
  </aside>
);

/* --------------------------------------------------------------- scoreboard */

const SCORE_TONE = {
  clay:   'bg-clay text-sheet',
  sky:    'bg-sky text-ink',
  butter: 'bg-butter text-ink',
};

const Scoreboard = () => (
  <section className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr]">
    {scoreboard.map((s) => (
      <div
        key={s.label}
        className={`border-2 border-ink p-[18px] shadow-drop ${SCORE_TONE[s.tone] || 'bg-sheet'}`}
      >
        <div className={`font-extrabold leading-none tracking-[-0.05em] ${s.wide ? 'text-[52px]' : 'text-[34px]'}`}>
          {s.value}
        </div>
        <div className="mt-2.5 text-[13.5px] font-bold tracking-[-0.02em]">{s.label}</div>
        <div className="mt-1 font-mono text-[10.5px] leading-snug opacity-75">{s.note}</div>
      </div>
    ))}
  </section>
);

/* -------------------------------------------------------------------- table */

const BuildTable = ({ rows }) => (
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr>
        {['#', 'Build', 'Role', 'Stage', 'Year', 'Complexity'].map((h, i) => (
          <th
            key={h}
            className={`border-b-2 border-ink px-4 py-2.5 font-mono text-[10px] font-medium tracking-[0.03em] text-faint ${
              i === 5 ? 'text-right' : 'text-left'
            } ${i === 2 || i === 4 ? 'hidden lg:table-cell' : ''}`}
          >
            {h === '#' ? '' : h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((p, i) => {
        const picked = p.id === openedRow.id;
        return (
          <tr key={p.id} className={picked ? 'bg-butter' : 'hover:bg-cream'}>
            <td className="w-10 border-b-[1.5px] border-rule px-4 py-2.5 font-mono text-[11px] text-faint">
              {String(i + 1).padStart(2, '0')}
            </td>
            <td className="border-b-[1.5px] border-rule px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                {p.logo && (
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="h-6 w-6 rounded border border-ink/20 bg-sheet p-0.5 object-contain shrink-0"
                  />
                )}
                <div>
                  <span className="whitespace-nowrap font-bold tracking-[-0.025em]">{shortNames[p.id] || p.name}</span>
                  <span className="block text-[12.5px] font-normal text-soft">{blurbs[p.id]}</span>
                </div>
              </div>
            </td>
            <td className="hidden whitespace-nowrap border-b-[1.5px] border-rule px-4 py-2.5 font-mono text-[11px] text-soft lg:table-cell">
              {p.role}
            </td>
            <td className="border-b-[1.5px] border-rule px-4 py-2.5">
              <Flag tone={toneOf(p.stage)}>{labelOf(p.stage)}</Flag>
            </td>
            <td className="hidden border-b-[1.5px] border-rule px-4 py-2.5 font-mono text-[11px] text-soft lg:table-cell">
              {p.year}
            </td>
            <td className="border-b-[1.5px] border-rule px-4 py-2.5 text-right">
              <span className="inline-flex items-center gap-2.5">
                <span className="h-[11px] w-[70px] border-2 border-ink bg-sheet">
                  <i
                    className={`block h-full ${p.complexityScore >= 95 ? 'bg-clay' : 'bg-olive'}`}
                    style={{ width: `${p.complexityScore}%` }}
                  />
                </span>
                <b className="font-mono text-xs font-bold">{p.complexityScore}</b>
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

/* ------------------------------------------------------------- opened row */

const OpenedRow = ({ position }) => {
  const project = projectsData.find((p) => p.id === openedRow.id);
  if (!project) return null;

  return (
    <Slab title={`Row ${position}, opened`} aside={project.name}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="border-b-2 border-ink p-[18px] lg:border-b-0 lg:border-r-2">
          <div className="flex items-center gap-2.5 mb-1">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-7 w-7 rounded border border-ink/20 bg-sheet p-0.5 object-contain shrink-0"
              />
            )}
            <h3 className="text-[21px] font-extrabold tracking-[-0.035em]">{project.name}</h3>
          </div>
          <div className="mb-3 font-mono text-[11px] text-soft">{openedRow.meta}</div>
          {openedRow.body.map((t, i) => (
            <p key={i} className="mb-3 text-sm text-soft">{t}</p>
          ))}
          <Tags items={openedRow.tags} className="mb-0" />
        </div>

        <div className="p-[18px]">
          <div className="border-2 border-ink">
            {openedRow.outcomes.map((o, i) => (
              <div
                key={o.k}
                className={`grid grid-cols-[78px_1fr] gap-3 px-3 py-2.5 text-[13px] ${
                  i < openedRow.outcomes.length - 1 ? 'border-b-2 border-ink' : ''
                }`}
              >
                <b className="font-mono font-bold text-clay">{o.v}</b>
                <span className="text-soft">{o.k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slab>
  );
};

/* ------------------------------------------------------------ side panels */

const BAR_TONE = { olive: 'bg-olive', clay: 'bg-clay', sky: 'bg-sky' };

const EngagementHistory = () => (
  <Slab title="Engagement history" aside={`${workExperience.length} entries, most recent first`}>
    <div className="py-1">
      {workExperience.map((w, i) => (
        <div
          key={`${w.company}-${w.duration}`}
          className={`grid grid-cols-[84px_1fr] gap-3 px-[18px] py-2.5 ${
            i < workExperience.length - 1 ? 'border-b-[1.5px] border-rule' : ''
          }`}
        >
          <div className="font-mono text-[10.5px] leading-relaxed text-faint">
            {w.duration.replace(/\s*[–-]\s*/, '\n').split('\n').map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-2">
              {w.logo && (
                <img
                  src={w.logo}
                  alt={`${w.company} logo`}
                  className="h-4 w-4 rounded object-contain shrink-0"
                />
              )}
              <b className="block text-[14.5px] font-bold tracking-[-0.02em]">{w.company}</b>
            </div>
            <span className="text-[13px] text-soft">{w.position}. {w.description}</span>
          </div>
        </div>
      ))}
    </div>
  </Slab>
);

const StackCoverage = () => (
  <Slab title="Where the time goes" aside={`Share of ${projectsData.length} builds`}>
    <div className="px-[18px] py-3.5">
      {stackCoverage.map((s) => (
        <div key={s.label} className="mb-3.5 last:mb-0">
          <div className="mb-[5px] flex justify-between text-[13.5px] font-semibold tracking-[-0.02em]">
            <span>{s.label}</span>
            <em className="font-mono text-[11px] font-normal not-italic text-soft">
              {s.count}/{s.of}
            </em>
          </div>
          <div className="h-[9px] border-2 border-ink bg-sheet">
            <i
              className={`block h-full ${BAR_TONE[s.tone] || 'bg-sky'}`}
              style={{ width: `${Math.round((s.count / s.of) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </Slab>
);

const FactList = ({ rows }) => (
  <div className="px-[18px] pb-4 pt-1.5">
    {rows.map((r, i) => (
      <div
        key={r.label}
        className={`flex justify-between gap-3 py-[7px] text-[13.5px] ${
          i < rows.length - 1 ? 'border-b-[1.5px] border-rule' : ''
        }`}
      >
        <span>{r.label}</span>
        <b className="font-mono text-[12.5px]">{r.value}</b>
      </div>
    ))}
  </div>
);

/* -------------------------------------------------------------------- board */

const Dashboard = () => {
  const [sort, setSort] = useState(boardMeta.sorts[0]);

  const rows = useMemo(() => {
    const copy = [...projectsData];
    if (sort === 'Recent') {
      return copy.sort((a, b) => String(b.year).localeCompare(String(a.year)));
    }
    if (sort === 'Impact') {
      return copy.sort((a, b) => (b.highlights?.length || 0) - (a.highlights?.length || 0));
    }
    return copy.sort((a, b) => b.complexityScore - a.complexityScore);
  }, [sort]);

  // The opened row keeps its true position when the sort changes.
  const openedPosition = useMemo(() => {
    const i = rows.findIndex((p) => p.id === openedRow.id);
    return i < 0 ? '--' : String(i + 1).padStart(2, '0');
  }, [rows]);

  const counts = useMemo(() => ({
    total: projectsData.length,
    mobile: countBy(projectsData, (p) => p.category === 'Mobile'),
    web: countBy(projectsData, (p) => p.category === 'Web'),
    native: countBy(projectsData, (p) => p.technologies.includes('Android Native')),
    live: countBy(projectsData, (p) => toneOf(p.stage) === 'live'),
    review: countBy(projectsData, (p) => toneOf(p.stage) === 'review'),
    dev: countBy(projectsData, (p) => toneOf(p.stage) === 'dev'),
    done: countBy(projectsData, (p) => toneOf(p.stage) === 'done'),
    outcomes: projectsData.reduce((n, p) => n + (p.highlights?.length || 0), 0),
  }), []);

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[232px_1fr]">
      <SideNav counts={counts} />

      <main className="min-w-0 bg-cream px-4 pb-14 lg:px-[26px]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink py-5">
          <div>
            <h1 className="text-[27px] font-extrabold tracking-[-0.04em]">{boardMeta.title}</h1>
            <p className="mt-[5px] font-mono text-[11.5px] text-soft">{boardMeta.line}</p>
          </div>

          <div className="flex border-2 border-ink bg-sheet shadow-drop-sm">
            {boardMeta.sorts.map((s, i) => (
              <button
                key={s}
                type="button"
                aria-pressed={sort === s}
                onClick={() => setSort(s)}
                className={`px-3.5 py-2 text-[12.5px] font-bold tracking-[-0.02em] ${
                  i < boardMeta.sorts.length - 1 ? 'border-r-2 border-ink' : ''
                } ${sort === s ? 'bg-ink text-sheet' : 'bg-transparent text-ink hover:bg-cream'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <Scoreboard />

        <Slab
          title="Every build, ranked by complexity"
          aside="My own scale: concurrency, device constraints, value handled"
          className="overflow-x-auto"
        >
          <BuildTable rows={rows} />
        </Slab>

        <OpenedRow position={openedPosition} />

        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[1fr_340px]">
          <EngagementHistory />

          <div>
            <StackCoverage />

            <Slab title="Store record" aside="Apple and Google">
              {/* Live count comes from the data so it cannot drift from the stage filters. */}
              <FactList rows={[...storeRecord, { label: 'Still live today', value: String(counts.live) }]} />
            </Slab>

            <Slab title="Availability" aside="September 2026" className="bg-butter" headClass="bg-butter">
              <FactList
                rows={[
                  { label: 'Open seats', value: String(availability.seats) },
                  { label: 'From', value: availability.from },
                  { label: 'Overlap', value: availability.overlap },
                  { label: 'Shape', value: availability.shape },
                ]}
              />
              <div className="px-[18px] pb-[18px]">
                <a className="btn btn-clay" href={personalInfo.scheduling} target="_blank" rel="noreferrer">
                  Book 30 minutes ↗
                </a>
              </div>
            </Slab>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
