import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import VariantSwitcher from './components/variants/VariantSwitcher';

// Variant 1: Editorial Engineer (Seyi Inspo)
import Variant1Editorial from './components/variants/Variant1Editorial';
import Variant1Dashboard from './components/variants/Variant1Dashboard';

// Variant 2: Systems Architect (Impeccable Brutalist)
import Variant2Terminal from './components/variants/Variant2Terminal';
import Variant2Dashboard from './components/variants/Variant2Dashboard';

// Variant 3: Venture Studio & Product Lab (Tactile Simulator)
import Variant3ProductLab from './components/variants/Variant3ProductLab';
import Variant3Dashboard from './components/variants/Variant3Dashboard';

// Variant 4: Minimalist Artisan Ledger (Narrative Craft)
import Variant4ArtisanLedger from './components/variants/Variant4ArtisanLedger';
import Variant4Dashboard from './components/variants/Variant4Dashboard';

const App = () => {
  const [currentVariant, setCurrentVariant] = useState('editorial');
  const [viewMode, setViewMode] = useState('landing'); // 'landing' | 'dashboard'

  const renderActiveView = () => {
    switch (currentVariant) {
      case 'editorial':
        return viewMode === 'landing' ? <Variant1Editorial /> : <Variant1Dashboard />;
      case 'terminal':
        return viewMode === 'landing' ? <Variant2Terminal /> : <Variant2Dashboard />;
      case 'productlab':
        return viewMode === 'landing' ? <Variant3ProductLab /> : <Variant3Dashboard />;
      case 'artisan':
        return viewMode === 'landing' ? <Variant4ArtisanLedger /> : <Variant4Dashboard />;
      default:
        return <Variant1Editorial />;
    }
  };

  return (
    <div className="relative min-h-screen pb-24">
      {/* Active Screen Render */}
      {renderActiveView()}

      {/* Floating Variant & View Mode Switcher */}
      <VariantSwitcher 
        currentVariant={currentVariant}
        onSelectVariant={setCurrentVariant}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
