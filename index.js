import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Education from '../components/Education';
import Experiences from '../components/Experiences';
import Awards from '../components/Awards';
import Skills from '../components/Skills';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function Home() {
  const [currentMedia, setCurrentMedia] = useState(0);
  const mediaItems = [
    { type: 'video', src: '/keyy.mp4' },
    { type: 'image', src: '/keyy1.jpeg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
    }, 10000); // Ganti setiap 10 detik (lebih lama)
    return () => clearInterval(interval);
  }, []);

  const nextMedia = () => {
    setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentMedia((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <Layout>
      <Head>
        <title>Maria Rachel Kesya Makarena - Frontend & Business Analyst Enthusias</title>
        <meta name="description" content="Portfolio of Maria Rachel Kesya Makarena, a Fullstack Web Developer" />
      </Head>

      <div className={`container ${styles.hero}`}>
        <div className={styles.heroContent}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.mediaSlider}>
                {mediaItems[currentMedia].type === 'video' ? (
                  <video 
                    key={mediaItems[currentMedia].src}
                    src={mediaItems[currentMedia].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.heroMedia}
                  />
                ) : (
                  <Image 
                    src={mediaItems[currentMedia].src}
                    alt="Maria Rachel Kesya Makarena"
                    width={400}
                    height={400}
                    className={styles.heroMedia}
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                )}
              </div>
              <button className={`${styles.mediaButton} ${styles.prevMediaButton}`} onClick={prevMedia}>‹</button>
              <button className={`${styles.mediaButton} ${styles.nextMediaButton}`} onClick={nextMedia}>›</button>
              <div className={styles.mediaDots}>
                {mediaItems.map((_, i) => (
                  <span 
                    key={i} 
                    className={`${styles.mediaDot} ${currentMedia === i ? styles.activeMediaDot : ''}`}
                    onClick={() => setCurrentMedia(i)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h1>Hello! I am <span className={styles.highlight}>Maria Rachel Kesya Makarena</span></h1>
            <p className={styles.subtitle}>And I'm a <span className={styles.highlight}>Frontend & Business Analyst Enthusias</span></p>
            
            <div className={styles.buttonGroup}>
              <a 
                href="/Maria Rachel Kesya Makarena-resume.pdf" 
                download="Maria Rachel Kesya Makarena-resume.pdf"
                className={styles.primaryButton}
              >
                <FiDownload /> Download my CV
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                <FiMail /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div id="connect"></div>
      <Education />
      <Experiences />
      <Awards />
      <Publications />
      <Skills />
      <Contact />
    </Layout>
  );
}

