import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="connect" className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerLeft}>
          <h3 className={styles.footerLogo}>Keysoee.</h3>
          <p className={styles.address}>Perumahan Alam Pancoran Mas Blok C No.5</p>
          <p className={styles.address}>Kota Depok, Indonesia</p>
        </div>

        <div className={styles.footerCenter}>
          <h4 className={styles.sitemapTitle}>Sitemap</h4>
          <div className={styles.sitemapLinks}>
            <div className={styles.sitemapColumn}>
              <a href="#home">Home</a>
              <a href="#education">Education</a>
              <a href="#experiences">Experiences</a>
              <a href="#skills">Skills</a>
            </div>
            <div className={styles.sitemapColumn}>
              <a href="#awards">Awards</a>
              <a href="#publications">Publications</a>
              <a href="#contact">Connect Me</a>
            </div>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/maria-rachel-kesya-makarena-b43979287" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/rcheell_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/6285183122699" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://github.com/keysoee" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          </div>
          <p className={styles.copyright}>© Copyright <strong>Keysoee</strong>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
