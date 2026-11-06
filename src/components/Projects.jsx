import { ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { useScrollReveal } from '../hooks/useAnimations';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Safe Steel',
    category: 'Industrial Safety Platform',
    description:
      'A dedicated workplace safety web platform designed for steel plants. Features incident reporting workflows, real-time safety alert broadcasts, and an interactive operational dashboard to enhance employee safety standards and monitoring.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    preview: 'safe-steel',
    github: 'https://github.com/kunalkumar-03',
    live: 'https://kunalportfolio-01.netlify.app/',
  },
  {
    id: 2,
    title: 'Weather App',
    category: 'Real-Time Utility Application',
    description:
      'A responsive weather application integrating live REST API endpoints to fetch accurate meteorological data. Includes location-based search, temperature, humidity, wind metrics, and user-friendly error states.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    preview: 'weather-app',
    github: 'https://github.com/kunalkumar-03',
    live: 'https://weather-app036.netlify.app/',
  },
];

function CleanBrowserMockup({ type }) {
  return (
    <div className="browser-mockup">
      <div className="browser-topbar">
        <div className="browser-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="browser-address">
          <span>{type === 'safe-steel' ? 'safesteel-dashboard.internal' : 'weather-app.live'}</span>
        </div>
      </div>

      <div className="browser-viewport">
        {type === 'safe-steel' ? (
          <div className="mock-ui-steel">
            <div className="steel-sidebar">
              <div className="sidebar-item active" />
              <div className="sidebar-item" />
              <div className="sidebar-item" />
            </div>
            <div className="steel-main">
              <div className="steel-header">
                <span className="header-pill">Shift A — Plant Monitor</span>
                <span className="header-status">Live</span>
              </div>
              <div className="steel-metrics">
                <div className="metric-box">
                  <span className="metric-num">0</span>
                  <span className="metric-label">Active Hazards</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">100%</span>
                  <span className="metric-label">Gear Compliance</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">98.4</span>
                  <span className="metric-label">Safety Index</span>
                </div>
              </div>
              <div className="steel-log">
                <div className="log-line" />
                <div className="log-line short" />
              </div>
            </div>
          </div>
        ) : (
          <div className="mock-ui-weather">
            <div className="weather-search-mock">
              <span>Search city... (e.g. Jamshedpur)</span>
            </div>
            <div className="weather-card-mock">
              <div className="weather-temp-mock">
                <span className="temp-mock-num">28°C</span>
                <span className="temp-mock-city">Jamshedpur, IN</span>
              </div>
              <div className="weather-details-mock">
                <div className="weather-chip">Humidity: 45%</div>
                <div className="weather-chip">Wind: 12 km/h</div>
                <div className="weather-chip">Condition: Clear</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div ref={ref} className={`projects-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Selected Projects.</h2>
            <p className="section-subtitle">
              A curated selection of web applications showcasing practical problem solving and frontend implementation.
            </p>
          </div>

          <div className="projects-feed">
            {PROJECTS.map((project, index) => (
              <article key={project.id} className="project-row glass-card">
                {/* Visual Preview */}
                <div className="project-visual">
                  <CleanBrowserMockup type={project.preview} />
                </div>

                {/* Info & Content */}
                <div className="project-details">
                  <div className="project-meta-top">
                    <span className="project-index">0{index + 1}</span>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <h3 className="project-heading">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-pills">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-cta-group">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary project-btn"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={15} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary project-btn"
                    >
                      <Github size={15} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
