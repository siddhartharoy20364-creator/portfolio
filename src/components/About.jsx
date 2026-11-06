import { MapPin, GraduationCap, Code2, Compass } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import './About.css';

const QUICK_FACTS = [
  { icon: MapPin, label: 'Location', value: 'Jamshedpur, Jharkhand, India' },
  { icon: GraduationCap, label: 'Education', value: 'BCA — Netaji Subhas University' },
  { icon: Code2, label: 'Specialization', value: 'Frontend Web Development' },
  { icon: Compass, label: 'Mindset', value: 'Continuous Learning & Problem Solving' },
];

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div ref={ref} className={`about-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Beyond The Code.</h2>
            <p className="section-subtitle">
              A glimpse into who I am, my philosophy as a developer, and what drives me to build.
            </p>
          </div>

          <div className="about-grid">
            {/* Story & Philosophy */}
            <div className="about-story">
              <div className="about-prose">
                <p>
                  I'm <strong>Kunal Kumar</strong>, an undergraduate BCA student at Netaji Subhas University, 
                  Jamshedpur. My journey with web development began with a genuine fascination for how pixels, 
                  logic, and design converge to create intuitive experiences.
                </p>
                <p>
                  I focus on writing clean, modular, and maintainable frontend code. Whether building 
                  responsive web applications, experimenting with interactive interfaces, or participating 
                  in hackathons, I approach every project with curiosity, rigor, and an eye for detail.
                </p>
                <p>
                  Outside of coding, I enjoy exploring emerging web standards, refining my problem-solving 
                  abilities in Java and Python, and collaborating with fellow developers.
                </p>
              </div>

              {/* Clean Stats */}
              <div className="about-stats-strip">
                <div className="stat-box">
                  <span className="stat-value">2+</span>
                  <span className="stat-desc">Featured Projects</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-box">
                  <span className="stat-value">4</span>
                  <span className="stat-desc">Hackathons</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-box">
                  <span className="stat-value">6+</span>
                  <span className="stat-desc">Core Technologies</span>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="about-facts-card glass-card">
              <h3 className="facts-card-title">Quick Overview</h3>
              <div className="facts-list">
                {QUICK_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="fact-item">
                      <div className="fact-icon">
                        <Icon size={16} />
                      </div>
                      <div className="fact-content">
                        <span className="fact-label">{fact.label}</span>
                        <span className="fact-value">{fact.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="facts-footer">
                <div className="facts-availability">
                  <span className="availability-dot" />
                  <span>Available for summer &amp; full-time internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
