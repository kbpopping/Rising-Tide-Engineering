import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Piping from './pages/Piping';
import AssetIntegrity from './pages/AssetIntegrity';
import About from './pages/About';
import Corrosion from './pages/Corrosion';
import NDT from './pages/NDT';
import ThermalInsulation from './pages/ThermalInsulation';

// Helper to scroll to top on route change
const ScrollToTopHelper = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTopHelper />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/piping" element={<Piping />} />
          <Route path="services/asset-integrity" element={<AssetIntegrity />} />
          <Route path="services/corrosion" element={<Corrosion />} />
          <Route path="services/ndt" element={<NDT />} />
          <Route path="services/thermal-insulation" element={<ThermalInsulation />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;