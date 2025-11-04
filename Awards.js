import { useState } from 'react';
import Image from 'next/image';
import Section from './Section';
import styles from './Awards.module.css';
import { FaTrophy, FaMedal, FaStar, FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const awardsData = [
  {
    title: 'NATIONAL FINALIST, GEMASTIK XVIII (SMART CITY)',
    organization: 'Telkom University, Bandung',
    period: 'Jul 2025 - Okt 2025',
    role: 'Team Leader',
    icon: <FaTrophy />,
    descriptions: [
      'Led the conceptual design of "TraceCam," a smart public safety platform to accelerate the capture of wanted fugitives in Bali.',
      'Architected a Big Data and Deep Learning solution to upgrade 1,200+ existing CCTVs into a real-time, proactive fugitive tracking network.',
      'Analyzed business process transformations (As-Is vs. To-Be), mapped key stakeholders (Police, Pecalang), and developed a compliance framework for data privacy (PDP) and electronic transaction (ITE) laws.',
      'Developed full functional specifications, including UML diagrams (Use Case, Activity), application workflows, and created UI/UX mockups for mobile and desktop platforms.'
    ],
    images: ['/gemastik1.jpeg', '/gemastik2.jpeg', '/gemastik3.jpeg', '/gemastik4.jpeg']
  },
  {
    title: 'BRONZE AWARD, PEDAS NATIONAL DATA COMPETITION',
    organization: 'UIN, Tangerang Selatan',
    period: 'Aug 2025 - Sept 2025',
    role: 'Team Leader',
    icon: <FaMedal />,
    descriptions: [
      'Awarded in the Preliminary Round of the National Data Festival (PEDAS) organized by APTIKOM.',
      'Led a team to develop a time-series forecasting model predicting GAIKINDO\'s national car sales for August 2025.',
      'Implemented advanced models (SARIMAX, AutoARIMA) using the Python Darts library to effectively analyze and predict complex sales trends.',
      'Validated the model\'s precision using the SMAPE evaluation metric, ensuring high forecast accuracy and technical robustness.'
    ],
    image: '/sertifpedas.jpeg'
  },
  {
    title: 'ACADEMIC ACHIEVEMENT AWARD',
    organization: 'Universitas Pembangunan Jaya, Tangerang Selatan',
    period: 'Sept 2025',
    role: null,
    icon: <FaStar />,
    descriptions: [
      'Awarded by Universitas Pembangunan Jaya, in recognition of outstanding academic performance.'
    ],
    image: '/sertifaka.jpeg'
  },
  {
    title: 'UNIVERSITY BRAND MODEL',
    organization: 'Universitas Pembangunan Jaya, Tangerang Selatan',
    period: '2025',
    role: null,
    icon: <FaStar />,
    descriptions: [
      'Featured as the face of the university\'s 2025 official social media campaigns.'
    ],
    images: ['/fot1.jpeg', '/fot2.jpeg']
  },
  {
    title: '1ST PLACE, INFORMATION SYSTEMS QUIZ COMPETITION',
    organization: 'Universitas Pembangunan Jaya, Tangerang Selatan',
    period: 'Sep 2024',
    role: null,
    icon: <FaAward />,
    descriptions: [
      'Hosted by the Information Systems Department of Universitas Pembangunan Jaya.'
    ],
    image: '/quiz.jpg'
  }
];

const organisationalData = [
  {
    title: 'GIDHUB 2024 & 2025',
    organization: 'Universitas Pembangunan Jaya, Indonesia',
    period: 'May 2024 - Aug 2025',
    role: 'Staff of the Event Division',
    descriptions: [
      'Responsible for creating detailed event schedules (rundowns) to manage program flow and timing effectively.',
      'Prepared and finalized official Memorandums of Understanding (MoU) to establish formal agreements with external partners and vendors.',
      'Ensured clear communication and coordination across teams regarding event logistics and timelines.'
    ],
    image: '/kess7.jpeg'
  },
  {
    title: 'PROGRAT 2025',
    organization: 'Universitas Pembangunan Jaya, Indonesia',
    period: 'Jan 2025 - Sept 2025',
    role: 'Treasurer',
    descriptions: [
      'Oversaw all financial transactions, including recording income and managing expenses for the event.',
      'Conducted routine financial reporting to track budget performance and ensure fiscal responsibility.',
      'Managed the event\'s cash flow, from initial budget allocation to final financial reconciliation.'
    ],
    image: '/kess6.jpeg'
  },
  {
    title: 'STUDENT AMBASSADOR',
    organization: 'Universitas Pembangunan Jaya, Tangerang Selatan',
    period: '2023 - 2024',
    role: 'Telemarketing - Focus',
    descriptions: [
      'Responsible for direct telemarketing engagement with prospective students to support university recruitment goals.',
      'Provided key information on academic programs and successfully drove registrations for admissions events.'
    ],
    image: '/kes5.jpg'
  }
];

const Awards = () => {
  const [expandedAward, setExpandedAward] = useState(null);
  const [expandedOrg, setExpandedOrg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState({});

  const toggleAward = (index) => {
    setExpandedAward(expandedAward === index ? null : index);
  };

  const toggleOrg = (index) => {
    setExpandedOrg(expandedOrg === index ? null : index);
  };

  const nextSlide = (awardIndex, totalImages) => {
    setCurrentSlide(prev => ({
      ...prev,
      [awardIndex]: ((prev[awardIndex] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (awardIndex, totalImages) => {
    setCurrentSlide(prev => ({
      ...prev,
      [awardIndex]: ((prev[awardIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <>
      <Section title="Achievements & Awards" id="awards">
        <div className={styles.awardsList}>
          {awardsData.map((award, index) => (
            <div 
              key={index} 
              className={`${styles.awardItem} ${expandedAward === index ? styles.expanded : ''}`}
            >
              {award.images && award.images.length > 0 ? (
                <div className={styles.sliderContainer}>
                  <div className={styles.orgImageHeader}>
                    <Image 
                      src={award.images[currentSlide[index] || 0]} 
                      alt={award.title}
                      width={600}
                      height={300}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <button 
                    className={`${styles.sliderButton} ${styles.prevButton}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide(index, award.images.length);
                    }}
                  >
                    ‹
                  </button>
                  <button 
                    className={`${styles.sliderButton} ${styles.nextButton}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide(index, award.images.length);
                    }}
                  >
                    ›
                  </button>
                  <div className={styles.sliderDots}>
                    {award.images.map((_, i) => (
                      <span 
                        key={i} 
                        className={`${styles.dot} ${(currentSlide[index] || 0) === i ? styles.activeDot : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(prev => ({ ...prev, [index]: i }));
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : award.image ? (
                <div className={styles.orgImageHeader}>
                  <Image 
                    src={award.image} 
                    alt={award.title}
                    width={600}
                    height={300}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ) : null}
              <div className={styles.itemHeader} onClick={() => toggleAward(index)}>
                <div className={styles.iconWrapper}>
                  {award.icon}
                </div>
                <div className={styles.headerContent}>
                  <h3>{award.title}</h3>
                  <p className={styles.organization}>{award.organization}</p>
                  <span className={styles.period}>{award.period}</span>
                </div>
                <div className={styles.expandIcon}>
                  {expandedAward === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {expandedAward === index && (
                <div className={styles.itemContent}>
                  {award.role && <p className={styles.role}>{award.role}</p>}
                  <ul className={styles.descriptionList}>
                    {award.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Organisational Experiences" id="organisations">
        <div className={styles.orgList}>
          {organisationalData.map((org, index) => (
            <div 
              key={index} 
              className={`${styles.orgItem} ${expandedOrg === index ? styles.expanded : ''}`}
              onClick={() => toggleOrg(index)}
            >
              {org.image && (
                <div className={styles.orgImageHeader}>
                  <Image 
                    src={org.image} 
                    alt={org.title}
                    width={600}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className={styles.itemHeader}>
                <div className={styles.headerContent}>
                  <h3>{org.title}</h3>
                  <p className={styles.organization}>{org.organization}</p>
                  <span className={styles.period}>{org.period}</span>
                </div>
                <div className={styles.expandIcon}>
                  {expandedOrg === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {expandedOrg === index && (
                <div className={styles.itemContent}>
                  <p className={styles.role}>{org.role}</p>
                  <ul className={styles.descriptionList}>
                    {org.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Awards;
