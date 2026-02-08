import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Piping from './pages/Piping';
import AssetIntegrity from './pages/AssetIntegrity';
import About from './pages/About';
import History from './pages/History';
import TeamMemberBio from './pages/TeamMemberBio';
import Corrosion from './pages/Corrosion';
import NDT from './pages/NDT';
import ThermalInsulation from './pages/ThermalInsulation';
import Projects from './pages/Projects';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

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
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectCaseStudy />} />
          <Route path="about" element={<About />} />
          <Route path="about/history" element={<History />} />
          <Route path="about/team/:memberId" element={<TeamMemberBio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;