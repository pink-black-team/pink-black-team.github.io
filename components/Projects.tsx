'use client';

import { useI18n } from '@/i18n';
import { getProductCards } from '@/lib/products';
import Reveal from './Reveal';
import Card3D from './Card3D';
import styles from './Projects.module.css';

export default function Projects() {
  const { t, locale } = useI18n();

  // Get real projects data
  const projects = getProductCards();

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
                    <h3 className="card-title">{project.title[locale]}</h3>
                    <p className="card-description">{project.shortDescription[locale]}</p>
                  </div>
                  <p className={styles.tech}>{project.techStack.slice(0, 3).join(', ')}</p>
                  <a href={`/projects/${project.slug}`} className={styles.projectLink}>
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
