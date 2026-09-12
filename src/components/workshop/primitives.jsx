/**
 * The small shared pieces of the Workshop language.
 * Everything here is an outline plus a flat offset shadow. No blur, no radius
 * beyond 2px, no gradient.
 */

export const Hold = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1160px] px-6 ${className}`}>{children}</div>
);

/**
 * Section identity sits inline with the heading on the same row, rather than
 * as a small uppercase label stacked above it.
 */
export const Marker = ({ n, children, light = false }) => (
  <div className="mb-5 flex flex-wrap items-center gap-3.5">
    <b className="border-2 border-ink bg-sheet px-2.5 py-0.5 font-mono text-xs font-bold text-ink">
      {n}
    </b>
    <span className={`font-mono text-xs ${light ? 'text-sheet/70' : 'text-soft'}`}>{children}</span>
  </div>
);

const FLAG_TONE = {
  live:   'bg-olive text-sheet',
  review: 'bg-butter text-ink',
  dev:    'bg-blush text-ink',
  done:   'bg-cream text-soft',
};

export const Flag = ({ tone = 'live', children }) => (
  <span className={`flag ${FLAG_TONE[tone] || FLAG_TONE.done}`}>{children}</span>
);

export const Tags = ({ items = [], className = '' }) => (
  <div className={`mb-3.5 flex flex-wrap gap-[5px] ${className}`}>
    {items.map((t) => (
      <span key={t} className="tag">{t}</span>
    ))}
  </div>
);

/**
 * Measured outcomes, struck along the bottom edge of a block.
 * Sits flush inside the block outline rather than floating as its own card.
 */
export const Hits = ({ items = [] }) => (
  <div className="mt-auto flex flex-wrap border-2 border-ink">
    {items.map((h, i) => (
      <div
        key={h.k}
        className={`min-w-[92px] flex-1 px-[11px] py-2.5 ${
          i < items.length - 1 ? 'border-r-2 border-ink' : ''
        }`}
      >
        <b className="block text-[19px] font-extrabold tracking-[-0.04em] text-clay">{h.v}</b>
        <span className="mt-0.5 block text-[11px] leading-tight text-soft">{h.k}</span>
      </div>
    ))}
  </div>
);

/** A bordered panel used throughout the dashboard. */
export const Slab = ({ title, aside, children, className = '', headClass = '' }) => (
  <section className={`slab mb-6 ${className}`}>
    {(title || aside) && (
      <div
        className={`flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink bg-cream px-[18px] py-3 ${headClass}`}
      >
        {title && <h2 className="text-[17px] font-extrabold tracking-[-0.03em]">{title}</h2>}
        {aside && <span className="font-mono text-[11px] text-soft">{aside}</span>}
      </div>
    )}
    {children}
  </section>
);

/** Renders a headline built from marked / serif runs. */
export const RichHeading = ({ parts, className = '' }) => (
  <h1 className={className}>
    {parts.map((p, i) => {
      if (p.serif) {
        return (
          <span key={i} className="font-serif font-normal italic tracking-[-0.02em]">
            {p.text}
          </span>
        );
      }
      if (p.mark) {
        return (
          <span key={i} className={p.mark === 'sky' ? 'mark mark-sky' : 'mark'}>
            {p.text}
          </span>
        );
      }
      return <span key={i}>{p.text}</span>;
    })}
  </h1>
);
