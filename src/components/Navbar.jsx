import { useState, useEffect, useMemo } from 'react';
import { useActiveSection, useScrollProgress } from '../hooks/useAnimations';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.id), []);
  const activeSection = useActiveSection(sectionIds);
  const { scrollProgress } = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleClick = (id) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-brand" onClick={() => handleClick('hero')}>
          <span className="brand-dot" />
          <span className="brand-name">Kunal Kumar</span>
          <span className="brand-role">/ dev</span>
        </a>

        <nav className={`navbar-links ${isMobileOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
            >
              {item.label}
              {activeSection === item.id && <span className="nav-indicator" />}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta-btn mobile-only"
            onClick={(e) => {
              e.preventDefault();
              handleClick('contact');
            }}
          >
            <span>Let's Talk</span>
          </a>
        </nav>

        <div className="navbar-actions">
          <a
            href="#contact"
            className="nav-cta-btn desktop-only"
            onClick={(e) => {
              e.preventDefault();
              handleClick('contact');
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileOpen(false)} />
      )}
      <div
        className="scroll-progress-line"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </header>
  );
}
