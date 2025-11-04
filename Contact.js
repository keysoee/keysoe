import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import Section from './Section';
import { FaEnvelope, FaPaperPlane, FaUser, FaComments } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Toast disappears after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToastMessage('');
    setIsError(false);

    emailjs.sendForm(
      'service_4s6dm15', 
      'template_f1n46ih', 
      form.current, 
      '20zkL5ztYz6KCPgJq'
    )
    .then((result) => {
        console.log(result.text);
        setToastMessage('Message sent successfully!');
        setShowToast(true);
        setIsError(false);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
        setToastMessage('Failed to send message. Please try again.');
        setShowToast(true);
        setIsError(true);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <Section id="contact">
      <h2 className={styles.title}>Connect Me</h2>
      <p className={styles.subtitle}>Feel free to connect me!</p>
      <p className={styles.description}>i'll be waiting for our coorperation.</p>
      
      <div className={styles.contactContainer}>
        <div className={styles.illustrationContainer}>
          <div className={styles.iconCircle}>
            <FaEnvelope className={styles.mainIcon} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.icon1}`}>
            <FaUser />
          </div>
          <div className={`${styles.floatingIcon} ${styles.icon2}`}>
            <FaPaperPlane />
          </div>
          <div className={`${styles.floatingIcon} ${styles.icon3}`}>
            <FaComments />
          </div>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
        {/* Form groups remain the same */}
        <div className={styles.formGroup}>
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
      
      {showToast && (
        <div className={`${styles.toast} ${isError ? styles.error : styles.success}`}>
          {toastMessage}
        </div>
      )}
    </Section>
  );
};

export default Contact;
