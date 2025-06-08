import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { workExperience } from '../Utils/data';
import { FiMapPin, FiCode, FiBriefcase, FiClock, FiFolder, FiAward, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const TechBadge = ({ tech, isDarkMode }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${
      isDarkMode
        ? 'bg-primary-dark/10 text-primary-dark'
        : 'bg-primary-light/10 text-primary-light'
    } transition-colors duration-200`}
  >
    {tech}
  </motion.span>
);

const ProjectCard = ({ project, isDarkMode, isMobile }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`group ${isMobile ? 'p-3' : 'p-4'} rounded-2xl ${
      isDarkMode ? 'bg-surface-dark/50' : 'bg-surface-light/50'
    } hover:shadow-lg transition-all duration-300 border ${
      isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
    } flex gap-3 md:gap-4`}
  >
    <div className={`relative ${isMobile ? 'w-20 h-20' : 'w-24 h-24'} rounded-xl overflow-hidden flex-shrink-0 bg-black/5`}>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <h5 className={`${isMobile ? 'text-sm' : 'text-base'} font-bold truncate ${
          isDarkMode ? 'text-text-dark' : 'text-text-light'
        }`}>
          {project.name}
        </h5>
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className={`${isMobile ? 'text-base' : 'text-lg'} ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
        >
          <FiExternalLink />
        </motion.a>
      </div>
      <p className={`text-sm line-clamp-2 mb-2 ${
        isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
      }`}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {project.tech.slice(0, isMobile ? 2 : 3).map((tech) => (
          <TechBadge key={tech} tech={tech} isDarkMode={isDarkMode} />
        ))}
        {project.tech.length > (isMobile ? 2 : 3) && (
          <span className={`text-xs ${
            isDarkMode ? 'text-text-dark/50' : 'text-text-light/50'
          }`}>
            +{project.tech.length - (isMobile ? 2 : 3)} more
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Achievement = ({ achievement, isDarkMode, isMobile }) => (
  <motion.div
    whileHover={{ x: 8 }}
    className={`flex items-start gap-3 ${isMobile ? 'p-3' : 'p-4'} rounded-xl ${
      isDarkMode ? 'bg-surface-dark/30 hover:bg-surface-dark/50' : 'bg-surface-light/30 hover:bg-surface-light/50'
    } transition-all duration-200`}
  >
    <FiArrowRight className={`${isMobile ? 'text-base mt-0.5' : 'text-lg mt-1'} ${
      isDarkMode ? 'text-primary-dark' : 'text-primary-light'
    }`} />
    <p className={`${isMobile ? 'text-sm' : 'text-base'} ${
      isDarkMode ? 'text-text-dark/90' : 'text-text-light/90'
    }`}>
      {achievement}
    </p>
  </motion.div>
);

const TimelineConnector = ({ isDarkMode }) => (
  <div className="absolute left-0 top-0 bottom-0 w-px">
    <div className={`w-full h-full ${
      isDarkMode ? 'bg-text-dark/10' : 'bg-text-light/10'
    }`} />
    <div className={`absolute top-8 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 ${
      isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'
    }`} />
  </div>
);

const ExperienceCard = ({ experience, isDarkMode, isLast, isMobile }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative ${isMobile ? 'pl-6' : 'pl-8'}`}
    >
      <TimelineConnector isDarkMode={isDarkMode} />
      
      <div className={`${isMobile ? 'p-4' : 'p-8'} rounded-3xl ${
        isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
      } shadow-lg border ${
        isDarkMode ? 'border-text-dark/5' : 'border-text-light/5'
      }`}>
        {/* Company and Role Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="space-y-3 lg:space-y-4">
            <div className={`inline-flex items-center gap-2 lg:gap-3 ${isMobile ? 'px-3 py-1.5' : 'px-4 py-2'} rounded-full bg-primary-light/10 dark:bg-primary-dark/10`}>
              <FiAward className={`${isMobile ? 'text-xl' : 'text-2xl'} ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
              <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold ${
                isDarkMode ? 'text-text-dark' : 'text-text-light'
              }`}>
                {experience.company}
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <FiBriefcase className={`${isMobile ? 'text-lg' : 'text-xl'} ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
              <p className={`${isMobile ? 'text-base' : 'text-xl'} ${
                isDarkMode ? 'text-text-dark/90' : 'text-text-light/90'
              }`}>
                {experience.position}
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-3 text-sm">
            <div className="flex items-center gap-2">
              <FiMapPin className={`text-lg ${isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'}`} />
              <span className={`${
                isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
              }`}>
                {experience.location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className={`text-lg ${isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'}`} />
              <span className={`${
                isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
              }`}>
                {experience.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 lg:mb-8">
          <p className={`${isMobile ? 'text-base' : 'text-lg'} leading-relaxed mb-6 lg:mb-8 ${
            isDarkMode ? 'text-text-dark/80' : 'text-text-light/80'
          }`}>
            {experience.description}
          </p>
          <div className="grid grid-cols-1 gap-2 lg:gap-3">
            {experience.achievements.map((achievement, idx) => (
              <Achievement 
                key={idx} 
                achievement={achievement} 
                isDarkMode={isDarkMode}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        {experience.projects && (
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2 lg:gap-3">
              <FiFolder className={`${isMobile ? 'text-xl' : 'text-2xl'} ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
              <h4 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold ${
                isDarkMode ? 'text-text-dark' : 'text-text-light'
              }`}>
                Key Projects
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:gap-4">
              {experience.projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  isDarkMode={isDarkMode}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className={`mt-6 pt-6 lg:mt-8 lg:pt-8 border-t border-dashed ${
          isDarkMode ? 'border-text-dark/10' : 'border-text-light/10'
        }`}>
          <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
            <FiCode className={`${isMobile ? 'text-xl' : 'text-2xl'} ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
            <h4 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold ${
              isDarkMode ? 'text-text-dark' : 'text-text-light'
            }`}>
              Technologies & Tools
            </h4>
          </div>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {experience.technologies.map(tech => (
              <TechBadge key={tech} tech={tech} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
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
            Professional Journey
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            Building innovative solutions across blockchain, mobile, and web platforms
          </p>
        </motion.div>
        
        <div className={`relative space-y-12 lg:space-y-16 ${isMobile ? 'pl-6' : 'pl-8'}`}>
          {workExperience.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              isDarkMode={isDarkMode}
              isLast={index === workExperience.length - 1}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 