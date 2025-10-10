'use client';

import { useI18n } from '@/i18n';
import Reveal from './Reveal';
import Card3D from './Card3D';
import Avatar from './Avatar';
import styles from './Team.module.css';

export default function Team() {
  const { t } = useI18n();

  // Placeholder team data
  const team = [
    { id: 1, name: 'Angelina Magidova', role: 'Co-founder', bio: 'Software engineer/Frontend & other', image: '/images/avatars/avatar1.jpg' },
    { id: 2, name: 'Uladzimir Pranevich', role: 'Founder', bio: 'Software engineer/Backend & other', image: '/images/avatars/avatar2.jpeg' },
    { id: 3, name: 'Volha Sakalouskaya', role: 'Co-founder', bio: 'Software engineer/QA & other', image: '/images/avatars/avatar3.png' },
  ];

  return (
    <section id="team" className={styles.team}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.title}>{t.team.title}</h2>
            <p className={styles.subtitle}>{t.team.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={index * 150} animation="fadeUp">
              <Card3D>
                <div className="card">
                  <div className={styles.avatarWrapper}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} avatar`}
                        width={120}
                        height={120}
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                      />
                    ) : (
                      <Avatar name={member.name} size={120} />
                    )}
                  </div>
                  <h3 className="card-title">{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p className="card-description">{member.bio}</p>
                </div>
              </Card3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
