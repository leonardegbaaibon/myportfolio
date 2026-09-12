const ViewSwitch = ({ view }) => (
  <nav className="fixed bottom-[18px] right-[18px] z-[60] flex border-2 border-ink bg-sheet font-mono text-[11.5px] shadow-drop-sm">
    <a
      href="#/"
      aria-current={view === 'landing' ? 'page' : undefined}
      className={`border-r-2 border-ink px-3.5 py-2 no-underline ${
        view === 'landing' ? 'bg-clay text-sheet' : 'text-ink hover:bg-cream'
      }`}
    >
      Landing
    </a>
    <a
      href="#/dashboard"
      aria-current={view === 'dashboard' ? 'page' : undefined}
      className={`px-3.5 py-2 no-underline ${
        view === 'dashboard' ? 'bg-clay text-sheet' : 'text-ink hover:bg-cream'
      }`}
    >
      Dashboard
    </a>
  </nav>
);

export default ViewSwitch;
