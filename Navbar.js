import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" legacyBehavior>
            <a className={styles.brand}>Keysoee</a>
          </Link>
          
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
            <li><Link href="#education" legacyBehavior><a onClick={closeMenu}>Education</a></Link></li>
            <li><Link href="#experiences" legacyBehavior><a onClick={closeMenu}>Experiences</a></Link></li>
            <li><Link href="#awards" legacyBehavior><a onClick={closeMenu}>Awards</a></Link></li>
            <li><Link href="#projects" legacyBehavior><a onClick={closeMenu}>Projects</a></Link></li>
            <li><Link href="#publications" legacyBehavior><a onClick={closeMenu}>Publications</a></Link></li>
            <li><Link href="#skills" legacyBehavior><a onClick={closeMenu}>Skills</a></Link></li>
            <li><Link href="#contact" legacyBehavior><a onClick={closeMenu}>Contact</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
