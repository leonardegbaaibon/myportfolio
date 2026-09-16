import { projectsData } from '../../Utils/data';
import { featuredWork, webPlatforms } from '../../Utils/content';
import { Hold, Marker, Flag, Tags, Hits } from './primitives';

const SPAN = {
  wide:  'lg:col-span-4',
  half:  'lg:col-span-3',
  third: 'lg:col-span-2',
};

const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
const spell = (n) => WORDS[n] || String(n);

/** Bolds the emphasised clause inside a paragraph without needing markup in the copy. */
const Para = ({ text, emphasis }) => {
  if (!emphasis || !text.includes(emphasis)) {
    return <p className="mb-3 text-[14.5px] text-soft">{text}</p>;
  }
  const [before, after] = text.split(emphasis);
  return (
    <p className="mb-3 text-[14.5px] text-soft">
      {before}
      <b className="font-bold text-ink">{emphasis}</b>
      {after}
    </p>
  );
};

const WorkBlock = ({ entry }) => {
  const project = projectsData.find((p) => p.id === entry.id);
  if (!project) return null;

  const href = project.liveLink || project.liveUrl;

  return (
    <article className={`slab flex flex-col overflow-hidden ${SPAN[entry.span] || SPAN.third}`}>
      {entry.showImage && project.image && (
        <div className="flex aspect-video w-full items-center justify-center overflow-hidden border-b-2 border-ink bg-ink">
          {['glamorgram', 'nididrive', 'swiftpoint'].includes(entry.id) ? (
            <img
              className="max-h-[65%] max-w-[65%] object-contain object-center"
              src={project.image}
              alt={`${project.name} interface`}
              loading="lazy"
            />
          ) : (
            <img
              className="h-full w-full object-cover object-center"
              src={project.image}
              alt={`${project.name} interface`}
              loading="lazy"
            />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px]">
        <div className="mb-[3px] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-6 w-6 rounded border border-ink/20 bg-sheet p-0.5 object-contain shrink-0"
              />
            )}
            <h3 className="text-[22px] font-extrabold tracking-[-0.03em]">
              {href ? (
                <a href={href} target="_blank" rel="noreferrer" className="no-underline hover:text-clay">
                  {entry.name || project.name}
                </a>
              ) : (
                entry.name || project.name
              )}
            </h3>
          </div>
          <Flag tone={entry.stage.tone}>{entry.stage.label}</Flag>
        </div>

        <div className="mb-[11px] font-mono text-[11px] text-faint">{entry.meta}</div>

        {entry.body.map((t, i) => (
          <Para key={i} text={t} emphasis={entry.emphasis} />
        ))}

        <Tags items={entry.tags} />
        <Hits items={entry.hits} />
      </div>
    </article>
  );
};

const SelectedWork = () => (
  <section id="work" className="border-b-2 border-ink bg-cream py-14">
    <Hold>
      <Marker n="01">Selected work, {featuredWork.length} of {projectsData.length}</Marker>

      <h2 className="text-[clamp(28px,4.2vw,48px)] font-extrabold leading-none tracking-[-0.04em]">
        {spell(featuredWork.length)} builds, and the{' '}
        <span className="font-serif font-normal italic tracking-[-0.02em]">number each one moved.</span>
      </h2>

      <p className="mb-9 mt-5 max-w-[58ch] text-lg text-soft">
        Every project here went to production or store review. Where the source is under NDA I have said
        so and given the measurement instead.
      </p>

      {/* Featured Mobile Builds Grid */}
      <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-6">
        {featuredWork.map((e) => (
          <WorkBlock key={e.id} entry={e} />
        ))}
      </div>

      {/* Web Platforms & Landing Pages */}
      <div className="mt-16 border-t-2 border-ink pt-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-faint">Web Systems & Live Platforms</span>
            <h3 className="mt-1 text-[clamp(24px,3.2vw,36px)] font-extrabold tracking-[-0.035em]">
              Web applications with <span className="font-serif font-normal italic text-clay">live landing pages.</span>
            </h3>
          </div>
          <span className="font-mono text-xs text-soft">{webPlatforms.length} live deployments</span>
        </div>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {webPlatforms.map((w) => (
            <article key={w.id} className="slab flex flex-col overflow-hidden bg-sheet">
              {w.image && (
                <div className="relative aspect-video w-full border-b-2 border-ink bg-ink overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-top"
                    src={w.image}
                    alt={`${w.name} screenshot`}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px]">
                <div className="mb-[3px] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    {w.logo && (
                      <img
                        src={w.logo}
                        alt={`${w.name} logo`}
                        className="h-6 w-6 rounded border border-ink/20 bg-sheet p-0.5 object-contain shrink-0"
                      />
                    )}
                    <h4 className="text-[20px] font-extrabold tracking-[-0.03em]">
                      <a
                        href={w.url}
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline hover:text-clay inline-flex items-center gap-1.5"
                      >
                        {w.name}
                        <span className="text-xs text-soft">↗</span>
                      </a>
                    </h4>
                  </div>
                  <Flag tone={w.stage.tone}>{w.stage.label}</Flag>
                </div>

                <div className="mb-2.5 flex items-center justify-between font-mono text-[11px] text-faint">
                  <span>{w.meta}</span>
                </div>

                <p className="mb-4 text-[13.5px] leading-relaxed text-soft">{w.desc}</p>

                <div className="mb-4">
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-clay hover:underline"
                  >
                    <span>Visit {w.displayUrl}</span>
                    <span>→</span>
                  </a>
                </div>

                <Tags items={w.tags} />
                <Hits items={w.hits} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a className="btn btn-olive" href="#/dashboard">
          Open the dashboard, all {projectsData.length} builds →
        </a>
      </div>
    </Hold>
  </section>
);

export default SelectedWork;
