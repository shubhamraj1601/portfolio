import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, GraduationCap, Award, HeartHandshake, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../../data/content';
import FrameLines from '../ui/FrameLines';
import type { Route } from '../../lib/router';

const sectionLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
];

const pageLinks = [
  { name: 'Education', href: '/education', route: '/education', icon: <GraduationCap size={15} /> },
  { name: 'Certifications', href: '/certifications', route: '/certifications', icon: <Award size={15} /> },
  { name: 'Volunteer Work', href: '/volunteer', route: '/volunteer', icon: <HeartHandshake size={15} /> },
];

interface NavbarProps {
  route: Route;
}

export default function Navbar({ route }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [route]);

  // Close "More" on outside click / Escape
  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMoreOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [moreOpen]);

  // Highlight the section currently in view on the home page
  useEffect(() => {
    if (route !== '/') {
      setActiveSection('');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...sectionLinks.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [route]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  const onPage = route !== '/';
  const atTop = !onPage && (activeSection === '' || activeSection === 'top');

  return (
    <motion.header
      className={`navbar ${scrolled || mobileOpen ? 'navbar-scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <nav className="nav-inner" aria-label="Main">
        <FrameLines top={false} />

        <a href="/" className="nav-brand" aria-label="Home">
          <img className="nav-avatar" src={portfolioData.hero.navAvatar} alt="" width={32} height={32} />
          <span className="nav-name">{portfolioData.hero.name}</span>
        </a>

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="/" className={`nav-link ${atTop ? 'active' : ''}`}>Home</a>
            </li>
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <a href={`/#${link.id}`} className={`nav-link ${activeSection === link.id ? 'active' : ''}`}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-more" ref={moreRef}>
              <button
                type="button"
                className={`nav-link nav-more-btn ${onPage ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((o) => !o)}
              >
                More <ChevronDown size={14} className={moreOpen ? 'rotate-180' : ''} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    className="dropdown card"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                  >
                    {pageLinks.map((p) => (
                      <a key={p.href} href={p.href} onClick={() => setMoreOpen(false)} className={`dropdown-item ${route === p.route ? 'active' : ''}`}>
                        {p.icon} {p.name}
                      </a>
                    ))}
                    <div className="dropdown-sep" />
                    <a href="/#contact" onClick={() => setMoreOpen(false)} className="dropdown-item">
                      <Mail size={15} /> Contact
                    </a>
                    <a href={portfolioData.hero.resumeLink} target="_blank" rel="noopener noreferrer" className="dropdown-item">
                      <FileText size={15} /> Resume
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            className="icon-btn nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ul>
              <li>
                <a href="/" onClick={() => setMobileOpen(false)}>Home</a>
              </li>
              {sectionLinks.map((link) => (
                <li key={link.id}>
                  <a href={`/#${link.id}`} onClick={() => setMobileOpen(false)}>{link.name}</a>
                </li>
              ))}
              <li className="mobile-menu-label mono">more</li>
              {pageLinks.map((p) => (
                <li key={p.href}>
                  <a href={p.href} onClick={() => setMobileOpen(false)} className={route === p.route ? 'active' : ''}>
                    {p.icon} {p.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#contact" onClick={() => setMobileOpen(false)}><Mail size={15} /> Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
