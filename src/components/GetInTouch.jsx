import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiMail, FiGithub, FiLinkedin, FiGlobe, FiMessageSquare, FiYoutube } from 'react-icons/fi';
import { 
  SiReact, SiVuedotjs, SiKotlin, SiTypescript,
  SiJavascript, SiNodedotjs, SiPython, SiFigma,
  SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb,
  SiDocker, SiGit, SiJest, SiRedux
} from 'react-icons/si';
import { useState, useEffect } from 'react';
import { contactInfo } from '../Utils/data';

const ContactButton = ({ icon: Icon, label, href, isDarkMode, isPrimary = false }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-200 ${
      isPrimary
        ? isDarkMode
          ? 'bg-primary-dark text-white'
          : 'bg-primary-light text-white'
        : isDarkMode
        ? 'bg-surface-dark text-text-dark'
        : 'bg-surface-light text-text-light'
    } hover:shadow-lg`}
  >
    <Icon className="text-xl" />
    <span className="font-medium">{label}</span>
  </motion.a>
);

const SkillIcon = ({ Icon, name, color, isDarkMode }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`p-4 rounded-xl ${
      isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
    } shadow-lg group cursor-pointer relative`}
  >
    <Icon className={`w-12 h-12 transition-colors duration-300 ${
      isDarkMode ? 'text-gray-400 group-hover:text-' + color : 'text-' + color
    }`} />
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs ${
        isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'
      } whitespace-nowrap shadow-lg`}
    >
      {name}
    </motion.div>
  </motion.div>
);

const GetInTouch = () => {
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const skills = [
    { Icon: SiReact, name: 'React', color: 'blue-400' },
    { Icon: SiVuedotjs, name: 'Vue.js', color: 'green-500' },
    { Icon: SiKotlin, name: 'Kotlin', color: 'purple-500' },
    { Icon: SiTypescript, name: 'TypeScript', color: 'blue-600' },
    { Icon: SiJavascript, name: 'JavaScript', color: 'yellow-400' },
    { Icon: SiNodedotjs, name: 'Node.js', color: 'green-600' },
    { Icon: SiPython, name: 'Python', color: 'blue-500' },
    { Icon: SiFigma, name: 'Figma', color: 'purple-400' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'cyan-400' },
    { Icon: SiNextdotjs, name: 'Next.js', color: 'gray-700' },
    { Icon: SiFirebase, name: 'Firebase', color: 'yellow-500' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'green-500' },
    { Icon: SiDocker, name: 'Docker', color: 'blue-500' },
    { Icon: SiGit, name: 'Git', color: 'orange-500' },
    { Icon: SiJest, name: 'Jest', color: 'red-500' },
    { Icon: SiRedux, name: 'Redux', color: 'purple-600' }
  ];

  return (
    <section className={`py-12 lg:py-20 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            Let's collaborate on your next project or discuss potential opportunities
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactButton
              icon={FiMail}
              label="Send Email"
              href={`mailto:${contactInfo.email}`}
              isDarkMode={isDarkMode}
              isPrimary={true}
            />
            <ContactButton
              icon={FiMessageSquare}
              label="Schedule a Call"
              href={contactInfo.scheduling}
              isDarkMode={isDarkMode}
              isPrimary={false}
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ContactButton
              icon={FiGithub}
              label="GitHub"
              href={contactInfo.github}
              isDarkMode={isDarkMode}
            />
            <ContactButton
              icon={FiLinkedin}
              label="LinkedIn"
              href={contactInfo.linkedin}
              isDarkMode={isDarkMode}
            />
            <ContactButton
              icon={FiYoutube}
              label="YouTube"
              href={contactInfo.youtube}
              isDarkMode={isDarkMode}
            />
            <ContactButton
              icon={FiGlobe}
              label="Portfolio"
              href="/"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
          } shadow-lg border ${
            isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
          }`}
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Technologies I Work With
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {skills.map((skill) => (
              <SkillIcon
                key={skill.name}
                Icon={skill.Icon}
                name={skill.name}
                color={skill.color}
                isDarkMode={isDarkMode}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;