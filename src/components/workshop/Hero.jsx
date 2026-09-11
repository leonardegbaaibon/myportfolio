import { personalInfo } from '../../Utils/data';
import { hero, heroTiles, availability, tickerItems } from '../../Utils/content';
import { Hold, RichHeading } from './primitives';

const TILE_TONE = {
  clay: 'bg-clay text-sheet',
  sky:  'bg-sky text-ink',
};

const Tile = ({ tile }) => (
  <div
    className={`border-2 border-ink p-4 shadow-drop ${tile.wide ? 'col-span-full' : ''} ${
      TILE_TONE[tile.tone] || 'bg-sheet'
    }`}
  >
    <div className={`font-extrabold leading-none tracking-[-0.05em] ${tile.wide ? 'text-[56px]' : 'text-[38px]'}`}>
      {tile.value}
    </div>
    <div className="mt-2 text-sm font-semibold tracking-[-0.02em]">{tile.label}</div>
    <div className="mt-1 font-mono text-[11px] leading-snug opacity-75">{tile.note}</div>
  </div>
);

/** Duplicated once so the marquee can loop seamlessly at -50%. */
const TickerRun = () =>
  tickerItems.map((item, i) => (
    <span key={i} className="px-[22px]">
      {item.lead && <b className="font-medium text-butter">{item.lead} </b>}
      {item.text}
    </span>
  ));

const Hero = () => (
  <>
    <section id="top" className="border-b-2 border-ink bg-cream pb-14 pt-12">
      <Hold>
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-[46px]">
          <div>
            {availability.open && (
              <div className="mb-5 inline-flex items-center gap-2.5 border-2 border-ink bg-olive px-3 py-[5px] font-mono text-xs font-medium text-sheet shadow-drop-sm">
                <i className="block h-[7px] w-[7px] bg-butter" />
                {availability.line}
              </div>
            )}

            <RichHeading
              parts={hero.headline}
              className="text-[clamp(38px,6.4vw,76px)] font-extrabold leading-[1] tracking-[-0.04em]"
            />

            <p className="mt-5 max-w-[58ch] text-lg text-soft">{hero.intro}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-clay" href={personalInfo.scheduling} target="_blank" rel="noreferrer">
                Book 30 minutes ↗
              </a>
              <a className="btn" href="#work">See the work</a>
              <a className="btn" href={personalInfo.resumeUrl}>CV, PDF ↓</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {heroTiles.map((t) => (
              <Tile key={t.label} tile={t} />
            ))}
          </div>
        </div>
      </Hold>
    </section>

    <div className="overflow-hidden whitespace-nowrap border-b-2 border-ink bg-ink py-2.5 text-cream">
      <div className="inline-block animate-slide font-mono text-[12.5px]">
        <TickerRun />
        <TickerRun />
      </div>
    </div>
  </>
);

export default Hero;
