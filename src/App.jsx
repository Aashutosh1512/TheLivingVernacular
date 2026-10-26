import React, { useState, useMemo, useRef, useEffect } from 'react';
import { STONE_PALETTES } from './data/palettes';
import { PROJECTS } from './data/projects';
import { SERVICES } from './data/services';
import { JOURNAL_POSTS } from './data/journal';
import { useIstClock } from './hooks/useIstClock';

import HeaderPill from './components/layout/HeaderPill';
import MenuOverlay from './components/layout/MenuOverlay';
import TokenSwitcher from './components/layout/TokenSwitcher';
import LightboxModal from './components/layout/LightboxModal';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import StudioPage from './pages/StudioPage';
import JournalPage from './pages/JournalPage';
import PostDetailPage from './pages/PostDetailPage';
import ContactPage from './pages/ContactPage';
import BlueprintPage from './pages/BlueprintPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState('ballard-estate-apartment');
  const [selectedServiceId, setSelectedServiceId] = useState('full-interiors');
  const [selectedPostId, setSelectedPostId] = useState('designing-rooms-for-monsoon-and-sun');
  const [projectFilter, setProjectFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuCloseTimer = useRef(null);

  const [paletteKey, setPaletteKey] = useState('dholpur');
  const [tokenDrawerOpen, setTokenDrawerOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'A home',
    budgetRange: '₹50L to ₹1.5 Crore',
    timing: 'Within six months',
    spaceDetails: ''
  });
  const [submittedEnquiries, setSubmittedEnquiries] = useState([]);
  const [enquirySuccess, setEnquirySuccess] = useState(null);

  const istTime = useIstClock();
  const palette = STONE_PALETTES[paletteKey] || STONE_PALETTES.dholpur;

  useEffect(
    () => () => {
      window.clearTimeout(menuCloseTimer.current);
    },
    []
  );

  const openMenuOnHover = () => {
    window.clearTimeout(menuCloseTimer.current);
    setMenuOpen(true);
  };

  const scheduleMenuClose = () => {
    window.clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = window.setTimeout(() => setMenuOpen(false), 300);
  };

  const navigateTo = (page, itemId = null) => {
    if (page === 'project-detail' && itemId) setSelectedProjectId(itemId);
    if (page === 'service-detail' && itemId) setSelectedServiceId(itemId);
    if (page === 'post-detail' && itemId) setSelectedPostId(itemId);
    window.clearTimeout(menuCloseTimer.current);
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentProject = useMemo(
    () => PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0],
    [selectedProjectId]
  );
  const nextProject = useMemo(() => {
    const idx = PROJECTS.findIndex((p) => p.id === currentProject.id);
    return PROJECTS[(idx + 1) % PROJECTS.length];
  }, [currentProject]);

  const currentService = useMemo(
    () => SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0],
    [selectedServiceId]
  );

  const currentPost = useMemo(
    () => JOURNAL_POSTS.find((p) => p.id === selectedPostId) || JOURNAL_POSTS[0],
    [selectedPostId]
  );

  const handleSelectServiceForEnquiry = (serviceTitle) => {
    setEnquiryForm((prev) => ({ ...prev, projectType: serviceTitle }));
    navigateTo('contact');
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const refCode = `SND-IN-${Math.floor(1000 + Math.random() * 9000)}`;
    const entry = {
      ...enquiryForm,
      name: enquiryForm.name.trim() || 'Priya & Arjun Nair',
      email: enquiryForm.email.trim() || 'priya.nair@domain.in',
      location: enquiryForm.location.trim() || 'Bandra West, Mumbai',
      refCode,
      submittedAt: `Today at ${istTime} IST`
    };
    setSubmittedEnquiries((prev) => [entry, ...prev]);
    setEnquirySuccess(entry);
  };

  return (
    <div
      style={{
        backgroundColor: palette.tokens.bg,
        color: palette.tokens.fg,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
      className="min-h-screen transition-colors duration-500 selection:bg-neutral-900 selection:text-white"
    >
      <HeaderPill
        palette={palette}
        activePage={activePage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onMenuMouseEnter={openMenuOnHover}
        onMenuMouseLeave={scheduleMenuClose}
        setTokenDrawerOpen={setTokenDrawerOpen}
        navigateTo={navigateTo}
      />

      <MenuOverlay
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onMenuMouseEnter={openMenuOnHover}
        onMenuMouseLeave={scheduleMenuClose}
        setTokenDrawerOpen={setTokenDrawerOpen}
        palette={palette}
        istTime={istTime}
        navigateTo={navigateTo}
      />

      <TokenSwitcher
        tokenDrawerOpen={tokenDrawerOpen}
        setTokenDrawerOpen={setTokenDrawerOpen}
        paletteKey={paletteKey}
        setPaletteKey={setPaletteKey}
        palette={palette}
      />

      <main className="px-4 md:px-8 pt-4 pb-20 max-w-[1440px] mx-auto">
        {activePage === 'home' && (
          <HomePage
            palette={palette}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
            navigateTo={navigateTo}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            palette={palette}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
            navigateTo={navigateTo}
          />
        )}

        {activePage === 'project-detail' && (
          <ProjectDetailPage
            currentProject={currentProject}
            nextProject={nextProject}
            palette={palette}
            navigateTo={navigateTo}
            setLightboxImg={setLightboxImg}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            palette={palette}
            navigateTo={navigateTo}
            onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
          />
        )}

        {activePage === 'service-detail' && (
          <ServiceDetailPage
            currentService={currentService}
            palette={palette}
            navigateTo={navigateTo}
            onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
          />
        )}

        {activePage === 'studio' && <StudioPage palette={palette} />}

        {activePage === 'journal' && (
          <JournalPage palette={palette} navigateTo={navigateTo} />
        )}

        {activePage === 'post-detail' && (
          <PostDetailPage
            currentPost={currentPost}
            palette={palette}
            navigateTo={navigateTo}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            palette={palette}
            enquiryForm={enquiryForm}
            setEnquiryForm={setEnquiryForm}
            submittedEnquiries={submittedEnquiries}
            enquirySuccess={enquirySuccess}
            setEnquirySuccess={setEnquirySuccess}
            handleEnquirySubmit={handleEnquirySubmit}
          />
        )}

        {activePage === 'blueprint' && <BlueprintPage palette={palette} />}
      </main>

      <Footer
        palette={palette}
        istTime={istTime}
        navigateTo={navigateTo}
        setTokenDrawerOpen={setTokenDrawerOpen}
      />

      <LightboxModal lightboxImg={lightboxImg} setLightboxImg={setLightboxImg} />
    </div>
  );
}
