import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollCompanion from './components/ScrollCompanion';
import ParticleBackground from './components/ParticleBackground';
import IntroScreen from './components/IntroScreen';
import './App.css';

export default function App() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <div className="app">
      {introVisible && <IntroScreen onComplete={() => setIntroVisible(false)} />}
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollCompanion />
    </div>
  );
}
