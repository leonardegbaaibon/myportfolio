import { useEffect, useState } from 'react';

import TopNav from './components/workshop/TopNav';
import Hero from './components/workshop/Hero';
import SelectedWork from './components/workshop/SelectedWork';
import HowIWork from './components/workshop/HowIWork';
import References from './components/workshop/References';
import Contact from './components/workshop/Contact';
import Dashboard from './components/workshop/Dashboard';
import ViewSwitch from './components/workshop/ViewSwitch';

/**
 * Two views, switched on the hash so both are linkable and the back button
 * works. In-page anchors (#work, #how) stay on the landing page; only
 * `#/dashboard` changes the view.
 */
const readView = () => (window.location.hash.startsWith('#/dashboard') ? 'dashboard' : 'landing');

const Landing = () => (
  <>
    <TopNav />
    <Hero />
    <SelectedWork />
    <HowIWork />
    <References />
    <Contact />
  </>
);

const App = () => {
  const [view, setView] = useState(readView);

  useEffect(() => {
    const onHashChange = () => setView(readView());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Switching views should start at the top, not keep the previous scroll.
  useEffect(() => {
    if (!window.location.hash.includes('#/')) return;
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-cream text-left">
      {view === 'dashboard' ? <Dashboard /> : <Landing />}
      <ViewSwitch view={view} />
    </div>
  );
};

export default App;
