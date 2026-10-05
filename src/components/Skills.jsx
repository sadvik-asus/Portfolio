import { motion } from 'framer-motion';
import { Network, ShieldAlert, BookOpen, Database } from 'lucide-react';

const skills = [
  {
    title: "In-Network ML",
    icon: <Network size={24} />,
    desc: "Programmable data planes (P4), gradient aggregation at line-rate",
    tech: ["P4", "BMv2", "Mininet", "Scapy"]
  },
  {
    title: "Behavioral Security",
    icon: <ShieldAlert size={24} />,
    desc: "Keystroke/mouse dynamics, continuous auth, anomaly detection",
    tech: ["Python", "Machine Learning", "TypeScript"]
  },
  {
    title: "Applied RAG",
    icon: <BookOpen size={24} />,
    desc: "Retrieval systems built from primitives, not frameworks",
    tech: ["FastAPI", "React", "Groq", "Supabase", "pgvector"]
  },
  {
    title: "Federated Learning",
    icon: <Database size={24} />,
    desc: "Distributed training with network-layer optimization",
    tech: ["TensorFlow", "Keras", "Python"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I Work On
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="glass-card skill-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div style={{ color: 'var(--accent-1)', marginBottom: '1rem' }} aria-hidden="true">
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{skill.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                {skill.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skill.tech.map((t) => (
                  <span key={t} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
