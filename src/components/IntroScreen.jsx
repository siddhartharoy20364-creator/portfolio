import { useState, useEffect } from 'react';
import './IntroScreen.css';

export default function IntroScreen({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete?.();
      return;
    }

    // Lock scrolling during intro
    document.body.style.overflow = 'hidden';

    // Begin fade-out at 1.7s
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 1700);

    // Complete and unmount at 2.3s
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = '';
      onComplete?.();
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className={`intro-screen ${fadingOut ? 'fade-out' : ''}`} aria-hidden="true">
      <div className="intro-ambient-glow" />

      <div className="intro-content">
        <div className="intro-badge">
          <span className="intro-dot" />
          <span className="intro-role">/ dev</span>
        </div>

        <h1 className="intro-name">
          kunal kumar
        </h1>

        <div className="intro-line-wrap">
          <div className="intro-line" />
        </div>
      </div>
    </div>
  );
}

