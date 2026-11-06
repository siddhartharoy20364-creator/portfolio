import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress, useActiveSection } from '../hooks/useAnimations';
import './ScrollCompanion.css';

const SECTION_LABELS = {
  hero: 'Overview',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  journey: 'Journey',
  contact: 'Contact',
};

export default function ScrollCompanion() {
  const { scrollProgress, scrollY } = useScrollProgress();
  const activeSection = useActiveSection(['hero', 'about', 'skills', 'projects', 'journey', 'contact']);
  const [isHovered, setIsHovered] = useState(false);

  // Show only after scrolling down
  const isVisible = scrollY > 280;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      className={`scroll-companion ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`companion-tooltip ${isHovered ? 'hovered' : ''}`}>
        <span>{isHovered ? 'Back to top' : (SECTION_LABELS[activeSection] || 'Explore')}</span>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="companion-button"
        aria-label="Scroll to top"
      >
        <svg className="companion-ring" width="46" height="46">
          <circle
            className="ring-bg"
            stroke="rgba(139, 30, 45, 0.2)"
            strokeWidth="2.5"
            fill="transparent"
            r={radius}
            cx="23"
            cy="23"
          />
          <circle
            className="ring-fill"
            stroke="#E05252"
            strokeWidth="2.5"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="23"
            cy="23"
          />
        </svg>

        <div className="companion-arrow-wrap">
          <ArrowUp size={16} />
        </div>
      </button>
    </div>
  );
}
