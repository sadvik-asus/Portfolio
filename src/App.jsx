import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Github, Linkedin, Instagram } from 'lucide-react';

function App() {
  return (
    <>
      <div className="bg-mesh"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href="https://github.com/sadvik-asus" target="_blank" rel="noreferrer" className="social-link" style={{ transition: 'color 0.2s' }}>
            <GitBranch size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sadvikkumar" target="_blank" rel="noreferrer" className="social-link" style={{ transition: 'color 0.2s' }}>
            <Linkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" style={{ transition: 'color 0.2s' }}>
            <Instagram size={24} />
          </a>
        </div>
        <p>© 2026 Sadvik Kumar. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Architecting Intelligent Systems | Python, TensorFlow, & Scikit-Learn
        </p>
      </footer>
    </>
  );
}

export default App;
