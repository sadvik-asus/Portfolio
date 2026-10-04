import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: "Self-Evolving-AI-HoneyPot",
    desc: "A dynamic, self-evolving SSH honeypot that uses Google Gemini AI to hallucinate realistic fake environments, deceive attackers in real-time, and log threat intelligence.",
    tags: ["Python", "Gemini AI", "Cybersecurity", "SSH"],
    github: "https://github.com/sadvik-asus/Self-Evolving-AI-HoneyPot"
  },
  {
    title: "voice-cloning-detector",
    desc: "AI-powered real-time detection of cloned voices in calls. SIH 2026 - SIH26104 (Team Victrix). Wav2Vec2 deepfake classifier + explainable signal forensics. FastAPI + React.",
    tags: ["FastAPI", "React", "Wav2Vec2", "Deepfake Detection"],
    github: "https://github.com/sadvik-asus/voice-cloning-detector"
  },
  {
    title: "Health-insurance-prediction",
    desc: "End-to-end data science pipeline that predicts whether health insurance customers will be interested in purchasing vehicle insurance. Optimizes cross-selling strategy and maximizes revenue.",
    tags: ["Jupyter Notebook", "Machine Learning", "Data Science"],
    github: "https://github.com/sadvik-asus/Health-insurance-prediction"
  },
  {
    title: "P4-DDoS-Mitigation",
    desc: "A containerized In-Network DDoS Mitigation system using P4 and BMv2 to detect and drop volumetric SYN floods at line-rate without CPU overhead.",
    tags: ["P4", "Python", "Networking", "Cybersecurity"],
    github: "https://github.com/sadvik-asus/P4-DDoS-Mitigation"
  },
  {
    title: "CiteRight",
    desc: "A full-stack AI app built with React, FastAPI, Groq, and Supabase that grounds LLM generation in your real documents. Eliminates hallucinations by verifying claims.",
    tags: ["React", "FastAPI", "RAG", "LLM", "Python"],
    github: "https://github.com/sadvik-asus/CiteRight",
    live: "https://cite-right-nine.vercel.app"
  },
  {
    title: "Neuro-Mimesis",
    desc: "A Cognitive Identity Verification & Active Defense System. Uses behavioral biometrics (mouse dynamics) to detect intruders in real-time and execute automated security countermeasures.",
    tags: ["TypeScript", "Machine Learning", "Cybersecurity", "Python"],
    github: "https://github.com/sadvik-asus/Neuro_Mimesis"
  },
  {
    title: "Echo-Guard-Predictive-Maintenance",
    desc: "End-to-end Industrial IoT Predictive Maintenance system. Uses Deep Learning (CNNs) and Audio Signal Processing to detect machinery failure from raw sensor data.",
    tags: ["Deep Learning", "CNN", "Signal Processing", "Python"],
    github: "https://github.com/sadvik-asus/Echo-Guard-Predictive-Maintenance",
    live: "https://echo-guard-predictive-maintenance.vercel.app"
  },
  {
    title: "Federated Learning Flood Forecasting",
    desc: "A privacy-preserving flood forecasting system that leverages Federated Learning to aggregate predictive models across distributed weather stations without sharing raw data.",
    tags: ["Federated Learning", "TensorFlow", "Keras", "Python"],
    github: "https://github.com/sadvik-asus/FloodForecasting_Using_FederatedLearning"
  },
  {
    title: "P4 In-Network FL Aggregation",
    desc: "P4-based in-network aggregation system for Federated Learning that performs gradient summation directly inside programmable switches, reducing network congestion.",
    tags: ["P4", "Federated Learning", "SDN", "Python"],
    github: "https://github.com/sadvik-asus/P4-In-Network-FederatedLearning-Aggregation"
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Research & Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <GitBranch size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
