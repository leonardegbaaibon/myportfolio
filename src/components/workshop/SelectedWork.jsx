import { projectsData } from '../../Utils/data';
import { featuredWork } from '../../Utils/content';
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
        <img
          className="block aspect-video w-full border-b-2 border-ink bg-cream object-cover object-top"
          src={project.image}
          alt={`${project.name} interface`}
          loading="lazy"
        />
      )}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px]">
        <div className="mb-[3px] flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-[22px] font-extrabold tracking-[-0.03em]">
            {href ? (
              <a href={href} target="_blank" rel="noreferrer" className="no-underline hover:text-clay">
                {entry.name || project.name}
              </a>
            ) : (
              entry.name || project.name
            )}
          </h3>
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

      <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-6">
        {featuredWork.map((e) => (
          <WorkBlock key={e.id} entry={e} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn btn-olive" href="#/dashboard">
          Open the dashboard, all {projectsData.length} builds →
        </a>
      </div>
    </Hold>
  </section>
);

export default SelectedWork;
