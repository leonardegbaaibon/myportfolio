import { recommendations } from '../../Utils/data';
import { Hold, Marker } from './primitives';

// Second card gets the lilac fill so the row is not three identical rectangles.
const FILL = ['bg-sheet', 'bg-lilac', 'bg-sheet'];

const prettyLink = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const References = () => (
  <section id="references" className="border-b-2 border-ink bg-cream py-14">
    <Hold>
      <Marker n="03">References, named and linked</Marker>

      <h2 className="mb-8 text-[clamp(28px,4.2vw,48px)] font-extrabold leading-none tracking-[-0.04em]">
        People I have <span className="mark mark-blush">shipped alongside.</span>
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {recommendations.map((r, i) => (
          <figure
            key={r.author}
            className={`m-0 border-2 border-ink p-5 shadow-drop ${FILL[i % FILL.length]}`}
          >
            <blockquote className="mb-3.5 text-[15px] leading-snug tracking-[-0.015em]">
              “{r.text}”
            </blockquote>
            <figcaption className="border-t-2 border-ink pt-2.5 font-mono text-[11.5px] leading-relaxed">
              <b className="block font-sans text-sm font-bold tracking-[-0.02em]">{r.author}</b>
              {r.role}
              <br />
              <a href={r.linkedin} target="_blank" rel="noreferrer" className="text-clay">
                {prettyLink(r.linkedin)}
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </Hold>
  </section>
);

export default References;
