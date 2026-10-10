import { useEffect } from 'react'
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import FloatingSideElements from './components/layout/FloatingSideElements'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import EducationPage from './components/pages/EducationPage'
import CertificationsPage from './components/pages/CertificationsPage'
import VolunteerPage from './components/pages/VolunteerPage'
import { portfolioData } from './data/content'
import { useHash, routeFromHash, Route } from './lib/router'

const pageTitles: Record<Route, string> = {
  '/': portfolioData.meta.siteTitle,
  '/education': `Education | ${portfolioData.hero.name}`,
  '/certifications': `Certifications | ${portfolioData.hero.name}`,
  '/volunteer': `Volunteer Work | ${portfolioData.hero.name}`,
};

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  const hash = useHash();
  const route = routeFromHash(hash);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.title = pageTitles[route];
  }, [route]);

  // Page routes ("#/...") start at the top; section anchors ("#about") scroll once the home page has rendered
  useEffect(() => {
    if (!hash || hash.startsWith('#/')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <div className="cursor-glow" />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar route={route} />
        <div className="rails" aria-hidden="true" />
        <FloatingSideElements />
        <main className="frame">
          {route === '/' && <Home />}
          {route === '/education' && <EducationPage />}
          {route === '/certifications' && <CertificationsPage />}
          {route === '/volunteer' && <VolunteerPage />}
          <Footer />
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
