import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import profileImg from '../assets/profile.png';
import './Hero.css';

export default function Hero() {
  const handleScrollClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left: Introduction */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot-pulse" />
            <span>Available for frontend opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-accent">Kunal Kumar</span>
          </h1>

          <p className="hero-role-lead">
            Frontend developer crafting responsive, clean, and intuitive web experiences.
          </p>

          <p className="hero-bio">
            BCA undergraduate at Netaji Subhas University with a strong foundation in modern 
            JavaScript, React, and frontend development. Focused on performance, 
            accessibility, and pixel-perfect design execution.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => handleScrollClick('projects')}
            >
              <span>View Projects</span>
              <ArrowDown size={15} />
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleScrollClick('contact')}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="hero-social-strip">
            <a
              href="https://github.com/kunalkumar-03"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-kumar-572722393/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: Portrait Composition with Crimson Ambient Light */}
        <div className="hero-portrait-stage">
          {/* Subtle Crimson Ambient Lighting Behind Portrait */}
          <div className="portrait-crimson-aura" />
          <div className="portrait-glow-ring" />

          {/* Large Professional Portrait Frame */}
          <div className="portrait-frame-clean">
            <img
              src={profileImg}
              alt="Kunal Kumar - Frontend Developer"
              className="portrait-main-image"
              loading="eager"
            />
          </div>

          {/* Minimal Location & Status Pill */}
          <div className="portrait-meta-badge">
            <span className="badge-crimson-dot" />
            <span>Jamshedpur, India • BCA Student</span>
          </div>
        </div>
      </div>
    </section>
  );
}
