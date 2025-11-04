import { useState } from 'react';
import Image from 'next/image';
import Section from './Section';
import styles from './Experiences.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experienceData = [
  {
    role: 'Front End Developer - Freelance',
    company: 'BENGKEL MOBIL DEPO - WEBSITE INFORMATION SYSTEM',
    location: 'Tangerang Selatan, Indonesia',
    period: 'Jul 2025 - Aug 2025',
    tasks: [
      'Developed the complete front-end for the workshop\'s website using a modern stack of React.js and Tailwind CSS.',
      'Focused on rapid development and creating a fully responsive design to serve customers.'
    ],
    technologies: 'React.js, Tailwind CSS',
    image: '/acmobil.jpeg'
  },
  {
    role: 'Front End Developer - Volunteer',
    company: 'GKI MALEO RAYA - CONGREGATION INFORMATION SYSTEM',
    location: 'Tangerang Selatan, Indonesia',
    period: 'Jun 2025 - Aug 2025',
    tasks: [
      'Developed a comprehensive information system to manage the church\'s congregation data.',
      'Designed and built the user dashboard and front-end interface using Bootstrap for a responsive layout.',
      'Engineered the back-end logic and database management system using PHP and the Laravel framework.'
    ],
    technologies: 'PHP, Laravel, Bootstrap, MySQL',
    image: '/gereja.jpeg'
  },
  {
    role: 'Front End Developer - Freelance',
    company: 'PAUD KHAIRANI – WEBSITE INFORMATION SYSTEM',
    location: 'Tangerang Selatan, Indonesia',
    period: 'Nov 2024 - Jun 2025',
    tasks: [
      'Responsible for the end-to-end front-end development of the school\'s official website.',
      'Designed and implemented the entire user interface, including the main dashboard and interactive elements, to create a responsive and user-friendly experience.'
    ],
    technologies: 'React.js, Tailwind CSS',
    image: '/paud.jpeg'
  },
  {
    role: 'Admin Support Keuangan & Purchasing - Staff',
    company: 'PT. GLORY OFFSET PRESS',
    location: 'Jakarta, Indonesia',
    period: 'May 2022 - Jul 2023',
    tasks: [
      'Purchase production needs (Materials - Equipment).',
      'Ensure that the goods sent match the order.',
      'Carrying out stock taking of production goods every week.',
      'Input data into the Accurate System.',
      'Conduct stock taking reports every month.'
    ],
    technologies: null,
    image: '/kerja.jpeg'
  }
];

const Experiences = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  const toggleExp = (index) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  return (
    <Section title="Professional Experiences" id="experiences">
      <div className={styles.experienceList}>
        {experienceData.map((job, index) => (
          <div 
            key={index} 
            className={`${styles.experienceItem} ${expandedExp === index ? styles.expanded : ''}`}
            onClick={() => toggleExp(index)}
          >
            {job.image && (
              <div className={styles.expImageHeader}>
                <Image 
                  src={job.image} 
                  alt={job.company}
                  width={600}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div className={styles.itemHeader}>
              <div className={styles.headerContent}>
                <h3>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
                <span className={styles.period}>{job.period}</span>
              </div>
              <div className={styles.expandIcon}>
                {expandedExp === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {expandedExp === index && (
              <div className={styles.itemContent}>
                <p className={styles.location}>{job.location}</p>
                <ul className={styles.taskList}>
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                {job.technologies && (
                  <p className={styles.technologies}>
                    <strong>Technologies:</strong> {job.technologies}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
