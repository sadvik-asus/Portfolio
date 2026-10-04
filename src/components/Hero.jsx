import { motion } from 'framer-motion';
import { ArrowRight, GitBranch } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="badge" 
            style={{ display: 'inline-block', marginBottom: '2rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            CS Student | AI/ML Engineer & Data Scientist
          </motion.div>
          
          <h1>
            Architecting <br />
            <span className="gradient-text">Intelligent Systems</span>
          </h1>
          
          <p>
            Turning data into predictions | Python, TensorFlow, & Scikit-Learn <br />
            Currently building: <span className="gradient-text">sadvik-asus</span>
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="https://github.com/sadvik-asus" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <GitBranch size={18} /> GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
