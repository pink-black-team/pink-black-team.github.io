'use client';

import { useI18n } from '@/i18n';
import Reveal from './Reveal';
import Card3D from './Card3D';
import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useI18n();

  // Placeholder projects data
  const projects = [
    { id: 1, title: 'AI Assistant', description: 'Smart conversational AI', tech: 'GPT-4, Python' },
    { id: 2, title: 'Computer Vision', description: 'Object detection system', tech: 'TensorFlow, OpenCV' },
    { id: 3, title: 'NLP Engine', description: 'Natural language processing', tech: 'BERT, PyTorch' },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.title}>{t.projects.title}</h2>
            <p className={styles.subtitle}>{t.projects.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} animation="scale">
              <Card3D>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                  </div>
                  <p className={styles.tech}>{project.tech}</p>
                  <a href="/projects" className={styles.projectLink}>
                    {t.projects.viewProject} →
                  </a>
                </div>
              </Card3D>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="/projects" className="btn btn-primary btn-lg">
              View All Projects →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
