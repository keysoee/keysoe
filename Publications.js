import { useState } from 'react';
import Section from './Section';
import styles from './Publications.module.css';
import { FaBook, FaFileAlt, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

const publicationsData = [
  {
    title: 'IMPLEMENTASI CONVOLUTIONAL NEURAL NETWORK DENGAN SMOTE+ENN UNTUK KLASIFIKASI KUALITAS UDARA BERDASARKAN DATA DERET WAKTU POLUTAN',
    journal: 'BITS, a SINTA 3 indexed national journal',
    date: 'Sept 2025',
    type: 'journal',
    icon: <FaBook />,
    link: 'https://ejurnal.seminar-id.com/index.php/bits/article/view/8057'
  },
  {
    title: 'APLIKASI JAYA EVENTS UNTUK MENGELOLA ACARA & INFORMASI KAMPUS',
    journal: 'REMIK, a SINTA 5 indexed national journal',
    date: 'Jan 2025',
    type: 'journal',
    icon: <FaBook />,
    link: 'https://jurnal.polgan.ac.id/index.php/remik/article/view/14378'
  },
  {
    title: 'PELATIHAN GOOGLE DOCS UNTUK MENINGKATKAN KETERAMPILAN DIGITAL GURU DI PAUD KHAIRANI, PAMULANG, TANGERANG SELATAN',
    journal: 'National Seminar SEMBADHA Proceedings',
    date: 'Dec 2024',
    type: 'conference',
    icon: <FaFileAlt />,
    link: 'https://jurnal.pknstan.ac.id/index.php/sembadha/article/view/3053'
  },
  {
    title: 'PELATIHAN KOMPETENSI GURU PAUD KHAIRANI TANGERANG SELATAN DALAM PEMBUATAN MATERI PEMBELAJARAN INTERAKTIF DENGAN GOOGLE SLIDES',
    journal: 'Jurnal iKRAITH-ABDIMAS',
    date: 'Okt 2024',
    type: 'journal',
    icon: <FaBook />,
    link: 'https://journals.upi-yai.ac.id/index.php/IKRAITH-ABDIMAS/article/view/4402'
  }
];

const Publications = () => {
  const [expandedPub, setExpandedPub] = useState(null);

  const togglePub = (index) => {
    setExpandedPub(expandedPub === index ? null : index);
  };

  return (
    <Section title="Publications & Conference Papers" id="publications">
      <div className={styles.publicationsList}>
        {publicationsData.map((pub, index) => (
          <div 
            key={index} 
            className={`${styles.publicationItem} ${expandedPub === index ? styles.expanded : ''}`}
            onClick={() => togglePub(index)}
          >
            <div className={styles.itemHeader}>
              <div className={styles.iconWrapper}>
                {pub.icon}
              </div>
              <div className={styles.headerContent}>
                <h3>{pub.title.length > 60 ? pub.title.substring(0, 60) + '...' : pub.title}</h3>
                <span className={styles.date}>{pub.date}</span>
              </div>
              <div className={styles.expandIcon}>
                {expandedPub === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {expandedPub === index && (
              <div className={styles.itemContent}>
                <p className={styles.fullTitle}>{pub.title}</p>
                <p className={styles.journal}>
                  <strong>Published in:</strong> {pub.journal}
                </p>
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> View Publication
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
