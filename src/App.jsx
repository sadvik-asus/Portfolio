import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="bg-mesh"></div>
      <Navbar />
      <Hero />
      <Projects />
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>© 2026 Sadvik Kumar. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Architecting Intelligent Systems | Python, TensorFlow, & Scikit-Learn
        </p>
      </footer>
    </>
  );
}

export default App;
