import { personalInfo } from '../../Utils/data';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#how', label: 'How I work' },
  { href: '#references', label: 'References' },
  { href: '#/dashboard', label: 'Dashboard' },
];

const TopNav = () => (
  <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream">
    <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6 py-3">
      <a
        href="#top"
        className="border-2 border-ink bg-butter px-[11px] py-[5px] text-[17px] font-extrabold tracking-[-0.03em] no-underline shadow-drop-sm"
      >
        LEONARD E.
      </a>

      <nav className="flex flex-wrap items-center gap-1.5">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="border-2 border-transparent px-[11px] py-1.5 text-[13.5px] font-semibold tracking-[-0.01em] no-underline hover:border-ink hover:bg-sheet"
          >
            {l.label}
          </a>
        ))}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="border-2 border-transparent px-[11px] py-1.5 text-[13.5px] font-semibold tracking-[-0.01em] no-underline hover:border-ink hover:bg-sheet"
        >
          CV
        </a>
        <a
          href={personalInfo.scheduling}
          target="_blank"
          rel="noreferrer"
          className="border-2 border-ink bg-clay px-[11px] py-1.5 text-[13.5px] font-semibold tracking-[-0.01em] text-sheet no-underline shadow-drop-sm hover:bg-ink"
        >
          Book a call
        </a>
      </nav>
    </div>
  </header>
);

export default TopNav;
