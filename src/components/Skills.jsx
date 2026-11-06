import { useScrollReveal } from '../hooks/useAnimations';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  Layout, 
  Coffee, 
  Cpu, 
  Layers, 
  Boxes,
  GitBranch
} from 'lucide-react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    description: 'Building responsive, accessible, and standards-compliant web interfaces.',
    icon: Layout,
    skills: [
      { name: 'JavaScript', icon: Code2, tag: 'ES6+' },
      { name: 'React', icon: Boxes, tag: 'UI Library' },
      { name: 'HTML5', icon: Layers, tag: 'Semantic Web' },
      { name: 'CSS3', icon: Layout, tag: 'Modern Styling' },
      { name: 'Bootstrap', icon: Boxes, tag: 'CSS Framework' },
    ],
  },
  {
    category: 'Programming Languages',
    description: 'Foundational programming concepts, data structures, and algorithms.',
    icon: Terminal,
    skills: [
      { name: 'Java', icon: Coffee, tag: 'OOP & Logic' },
      { name: 'Python', icon: Terminal, tag: 'Scripting' },
      { name: 'C', icon: Cpu, tag: 'Systems & Core' },
    ],
  },
  {
    category: 'Workflow & Core Strengths',
    description: 'Development methodologies, version control, and problem-solving mindset.',
    icon: Sparkles,
    skills: [
      { name: 'Git & GitHub', icon: GitBranch, tag: 'Version Control' },
      { name: 'Problem Solving', icon: Sparkles, tag: 'Analytical Thinking' },
      { name: 'Eagerness to Learn', icon: Code2, tag: 'Continuous Growth' },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div ref={ref} className={`skills-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <span className="section-label">Technical Stack</span>
            <h2 className="section-title">Skills &amp; Technologies.</h2>
            <p className="section-subtitle">
              The tools, frameworks, and programming languages I use to craft functional digital products.
            </p>
          </div>

          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.category} className="skill-group-card glass-card">
                  <div className="group-header">
                    <div className="group-icon-wrap">
                      <GroupIcon size={20} />
                    </div>
                    <div>
                      <h3 className="group-title">{group.category}</h3>
                      <p className="group-desc">{group.description}</p>
                    </div>
                  </div>

                  <div className="skills-pill-list">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name} className="skill-pill">
                          <SkillIcon size={15} className="skill-pill-icon" />
                          <div className="skill-pill-info">
                            <span className="skill-pill-name">{skill.name}</span>
                            <span className="skill-pill-tag">{skill.tag}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
