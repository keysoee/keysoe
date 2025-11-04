import Section from './Section';
import styles from './Skills.module.css';
import { 
  FaReact, 
  FaDatabase, 
  FaGithub, 
  FaPython, 
  FaPhp, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaCode,
  FaPalette,
  FaLaptopCode
} from 'react-icons/fa';

const skillsData = [
  {
    category: 'Programming & Frameworks',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'Tailwind', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaCss3Alt /> },
      { name: 'Laravel', icon: <FaPhp /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ]
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MySQL', icon: <FaDatabase /> },
      { name: 'HeidiSQL', icon: <FaDatabase /> },
      { name: 'PHPMyAdmin', icon: <FaDatabase /> },
      { name: 'Github', icon: <FaGithub /> },
      { name: 'Figma', icon: <FaPalette /> },
      { name: 'Canva', icon: <FaPalette /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'MS Office', icon: <FaLaptopCode /> },
    ]
  }
];

const Skills = () => {
  return (
    <Section title="Professional Skills" id="skills">
      <div className={styles.skillsContainer}>
        {skillsData.map((category, idx) => (
          <div key={idx} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
