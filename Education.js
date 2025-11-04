import Section from './Section';
import styles from './Education.module.css';

const educationData = [
  {
    degree: 'Undergraduate Information Systems',
    institution: 'Universitas Pembangunan Jaya',
    location: 'Tangerang Selatan, Indonesia',
    period: 'Aug 2023 - Aug 2027 (Expected)',
    description: null
  },
  {
    degree: 'Vocational High School Graduate - Akuntansi Keuangan Lembaga',
    institution: 'SMK STRADA 1',
    location: 'Jakarta Pusat, Indonesia',
    period: '2019 - 2022',
    description: null
  }
];

const Education = () => {
  return (
    <Section title="Education" id="education">
      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.location}>{item.location}</p>
              <span className={styles.period}>{item.period}</span>
              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
