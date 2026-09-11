import { howIWork } from '../../Utils/content';
import { Hold, Marker } from './primitives';

const HowIWork = () => (
  <section id="how" className="border-b-2 border-ink bg-butter py-14">
    <Hold>
      <Marker n="02">How I work</Marker>

      <h2 className="max-w-[20ch] text-[clamp(28px,4.2vw,48px)] font-extrabold leading-none tracking-[-0.04em]">
        {howIWork.heading}{' '}
        <span className="font-serif font-normal italic tracking-[-0.02em]">{howIWork.headingServif}</span>
      </h2>

      <p className="mb-9 mt-5 max-w-[58ch] text-lg text-[#4a4136]">{howIWork.intro}</p>

      {/*
        Every cell carries a right and bottom rule; the wrapper clips the 2px
        that overhang, so the trailing edges disappear at any column count
        without per-index breakpoint rules.
      */}
      <div className="overflow-hidden border-2 border-ink bg-sheet shadow-drop">
        <div className="-mb-[2px] -mr-[2px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.steps.map((s) => (
            <div key={s.n} className="border-b-2 border-r-2 border-ink p-5">
              <div className="mb-2.5 font-serif text-[44px] font-normal italic leading-none text-clay">
                {s.n}
              </div>
              <h4 className="mb-[7px] text-base font-extrabold tracking-[-0.025em]">{s.title}</h4>
              <p className="text-[13.5px] text-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Hold>
  </section>
);

export default HowIWork;
