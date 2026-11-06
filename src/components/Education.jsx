import { GraduationCap, BookOpen, School } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Education.css';

const JOURNEY_STEPS = [
  {
    period: 'Present',
    degree: "Bachelor's Degree",
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Netaji Subhas University, Jamshedpur',
    icon: GraduationCap,
    current: true,
    description:
      'Pursuing comprehensive foundations in software development, data structures, web technologies, and database systems while independently building frontend projects.',
  },
  {
    period: 'Completed',
    degree: 'Intermediate — Class XII',
    title: 'Higher Secondary Education',
    institution: 'Kasidih High School, Jamshedpur',
    icon: BookOpen,
    current: false,
    description:
      'Completed secondary education with focused analytical and computational coursework, fostering an early enthusiasm for coding and technology.',
  },
  {
    period: 'Completed',
    degree: 'Matriculation — Class X',
    title: 'Secondary Education',
    institution: 'DAV Public School, Jamshedpur',
    icon: School,
    current: false,
    description:
      'Strong academic foundation with an emphasis on science, mathematics, and logical reasoning.',
  },
];

export default function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="journey" className="section education-section">
      <div className="container">
        <div ref={ref} className={`education-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <span className="section-label">Academic Path</span>
            <h2 className="section-title">Education &amp; Journey.</h2>
            <p className="section-subtitle">
              The academic milestones and continuous learning that form the foundation of my engineering mindset.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-spine" />

            <div className="timeline-entries">
              {JOURNEY_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="timeline-row">
                    <div className="timeline-node">
                      <div className={`node-marker ${step.current ? 'current' : ''}`}>
                        <Icon size={16} />
                      </div>
                    </div>

                    <div className="timeline-content-card glass-card">
                      <div className="card-topline">
                        <span className="card-degree">{step.degree}</span>
                        {step.current ? (
                          <span className="status-badge-current">Active Degree</span>
                        ) : (
                          <span className="status-badge-completed">Completed</span>
                        )}
                      </div>

                      <h3 className="card-title">{step.title}</h3>
                      <p className="card-institution">{step.institution}</p>
                      <p className="card-description">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
