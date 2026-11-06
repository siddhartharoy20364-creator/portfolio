import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Footer.css';

const FOOTER_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a
              href="#hero"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <span className="footer-logo-dot" />
              <span>Kunal Kumar</span>
            </a>
            <p className="footer-tagline">
              BCA student &amp; frontend developer passionate about building clean, accessible, 
              and interactive digital products.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/kunalkumar-03"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/kunal-kumar-572722393/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:kunalkumar.dev03@gmail.com"
                className="footer-social-link"
                aria-label="Email Kunal"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="footer-nav">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info & Status */}
          <div className="footer-meta">
            <h4 className="footer-col-title">Status</h4>
            <p className="footer-location">Jamshedpur, Jharkhand, India</p>
            <div className="footer-status-pill">
              <span className="status-indicator-dot" />
              <span>Available for Internships</span>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Kunal Kumar. All rights reserved.
          </p>

          <p className="footer-credit">
            Built with React &amp; Modern Web Standards
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
