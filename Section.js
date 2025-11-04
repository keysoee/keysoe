import styles from './Section.module.css';

const Section = ({ title, id, children }) => {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Section;
