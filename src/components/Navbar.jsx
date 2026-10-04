import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <motion.div 
          className="nav-logo gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sadvik Kumar
        </motion.div>
        
        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="https://github.com/sadvik-asus" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            GitHub
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
