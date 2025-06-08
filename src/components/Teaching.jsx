import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { teachingExperience } from '../Utils/data';
import { 
  FiBook, FiUsers, FiTarget, FiMail, FiCalendar, 
  FiCode, FiLayout, FiSmartphone, FiDatabase,
  FiGitBranch, FiPackage, FiCloud, FiLayers, FiMonitor, FiServer, FiPenTool
} from 'react-icons/fi';
import { useState, useEffect } from 'react';

const SkillCard = ({ skill, icon: Icon, level, isDarkMode, isMobile }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`${isMobile ? 'p-4' : 'p-6'} rounded-2xl ${
      isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
    } shadow-lg border ${
      isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-xl ${
        isDarkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'
      }`}>
        <Icon className={`${isMobile ? 'text-2xl' : 'text-3xl'} ${
          isDarkMode ? 'text-primary-dark' : 'text-primary-light'
        }`} />
      </div>
      <div className="flex-1">
        <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2 ${
          isDarkMode ? 'text-text-dark' : 'text-text-light'
        }`}>
          {skill}
        </h4>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-full rounded-full ${
              isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'
            }`}
          />
        </div>
        <p className={`mt-2 text-sm ${
          isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
        }`}>
          {level >= 90 ? 'Expert' : level >= 75 ? 'Advanced' : level >= 60 ? 'Intermediate' : 'Beginner'}
        </p>
      </div>
    </div>
  </motion.div>
);

const CourseCard = ({ course, isDarkMode, isMobile }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`${isMobile ? 'p-4' : 'p-6'} rounded-2xl ${
      isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
    } shadow-lg border ${
      isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-xl ${
        isDarkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'
      }`}>
        <FiBook className={`${isMobile ? 'text-2xl' : 'text-3xl'} ${
          isDarkMode ? 'text-primary-dark' : 'text-primary-light'
        }`} />
      </div>
      <div className="flex-1">
        <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2 ${
          isDarkMode ? 'text-text-dark' : 'text-text-light'
        }`}>
          {course.name}
        </h4>
        <div className="flex items-center gap-2 mb-4">
          <FiTarget size={14} className={isDarkMode ? 'text-primary-dark' : 'text-primary-light'} />
          <span className={`text-sm ${
            isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
          }`}>
            {course.level}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <span
              key={topic}
              className={`px-3 py-1 rounded-full text-xs ${
                isDarkMode
                  ? 'bg-background-dark text-text-dark/70'
                  : 'bg-background-light text-text-light/70'
              }`}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Teaching = () => {
  const { isDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

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
    { name: 'Web App Development', icon: FiLayout, level: 95, description: 'React, Vue, Next.js' },
    { name: 'Mobile Development', icon: FiSmartphone, level: 90, description: 'Android, iOS, React Native' },
    { name: 'Desktop Apps', icon: FiMonitor, level: 85, description: 'Electron, Tauri' },
    { name: 'Backend Development', icon: FiServer, level: 80, description: 'Node.js, Express, MongoDB' },
    { name: 'UI/UX Design', icon: FiPenTool, level: 85, description: 'Figma, Adobe XD' },
    { name: 'Cloud Services', icon: FiCloud, level: 60, description: 'Basic AWS, Firebase' },
    { name: 'System Architecture', icon: FiLayers, level: 75, description: 'Microservices, MVC' },
    { name: 'API Development', icon: FiCode, level: 85, description: 'REST, GraphQL' }
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
            Teaching & Mentorship
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            Empowering the next generation of developers through personalized guidance and hands-on learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDarkMode ? 'text-text-dark' : 'text-text-light'
            }`}
          >
            Areas of Expertise
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill.name}
                icon={skill.icon}
                level={skill.level}
                isDarkMode={isDarkMode}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        </div>

        {/* Courses Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDarkMode ? 'text-text-dark' : 'text-text-light'
            }`}
          >
            Course Offerings
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teachingExperience.courses.map((course) => (
              <CourseCard
                key={course.name}
                course={course}
                isDarkMode={isDarkMode}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDarkMode ? 'text-text-dark' : 'text-text-light'
            }`}
          >
            Teaching Approach
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl ${
              isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
            } shadow-lg border ${
              isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
            }`}
          >
            {teachingExperience.methodology.map((method, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-start gap-4"
              >
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'
                }`}>
                  <FiUsers className={`${isMobile ? 'text-xl' : 'text-2xl'} ${
                    isDarkMode ? 'text-primary-dark' : 'text-primary-light'
                  }`} />
                </div>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} ${
                  isDarkMode ? 'text-text-dark/80' : 'text-text-light/80'
                }`}>
                  {method}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center p-8 rounded-2xl ${
            isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
          } shadow-lg border ${
            isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
          }`}
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Ready to Learn?
          </h3>
          <p className={`text-base md:text-lg mb-8 ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            Take the first step towards mastering development. Schedule a session or reach out via email.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`mailto:${teachingExperience.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'
              } text-white`}
            >
              <FiMail className="text-lg" />
              <span>Send Email</span>
            </motion.a>
            <motion.a
              href={teachingExperience.contact.scheduling}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                isDarkMode
                  ? 'bg-background-dark text-text-dark'
                  : 'bg-background-light text-text-light'
              } border ${
                isDarkMode ? 'border-text-dark/10' : 'border-text-light/10'
              }`}
            >
              <FiCalendar className="text-lg" />
              <span>Schedule Session</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaching; 