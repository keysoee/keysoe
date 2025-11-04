import Section from './Section';
import styles from './Projects.module.css';

const projectData = [
  {
    title: 'Project Alpha',
    description: 'Platform e-commerce canggih yang dibangun dengan Next.js, menyediakan fitur real-time cart, payment gateway integration, dan admin dashboard.',
    tags: ['Next.js', 'React', 'MongoDB', 'Stripe']
  },
  {
    title: 'Project Beta',
    description: 'Dashboard analitik media sosial yang memvisualisasikan data engagement. ',
    tags: ['React', 'Node.js', 'Express', 'Chart.js']
  },
  {
    title: 'Project Gamma',
    description: 'Website profil perusahaan yang modern dan responsif, dioptimalkan untuk SEO dan kecepatan loading.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO']
  }
];

const Projects = () => {
  return (
    <Section title="Projects" id="projects">
      <div className={styles.projectGrid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
