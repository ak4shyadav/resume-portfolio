import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
    </div>
  );
}

export default App;