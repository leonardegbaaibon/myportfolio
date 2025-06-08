import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiExternalLink, FiFilter, FiDownload } from 'react-icons/fi';
import DownloadApk from './DownloadApk';

const ProjectsSection = ({ projects }) => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);

  const categories = ['All', 'Web', 'Mobile', 'Desktop'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="section-title mb-6 md:mb-0">Projects</h2>
          
          {/* Category Filter */}
          <div className="flex items-center gap-4">
            <FiFilter className={isDarkMode ? 'text-text-dark' : 'text-text-light'} />
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                    selectedCategory === category
                      ? isDarkMode
                        ? 'bg-primary-dark text-white'
                        : 'bg-primary-light text-white'
                      : isDarkMode
                        ? 'bg-surface-dark text-text-dark hover:bg-surface-dark/80'
                        : 'bg-surface-light text-text-light hover:bg-surface-light/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              className={`relative rounded-lg overflow-hidden group ${
                isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0  ${
                  isDarkMode 
                    ? 'from-surface-dark/90 to-transparent'
                    : 'from-surface-light/90 to-transparent'
                }`} />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? 'text-text-dark' : 'text-text-light'
                  }`}>
                    {project.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    project.stage === 'Completed'
                      ? 'bg-green-500/10 text-green-500'
                      : project.stage === 'Ongoing'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-purple-500/10 text-purple-500'
                  }`}>
                    {project.stage}
                  </span>
                </div>

                <p className={`text-sm mb-4 line-clamp-2 ${
                  isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode
                          ? 'bg-background-dark/50 text-text-dark/70'
                          : 'bg-background-light/50 text-text-light/70'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      isDarkMode
                        ? 'bg-background-dark/50 text-text-dark/70'
                        : 'bg-background-light/50 text-text-light/70'
                    }`}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {!project.isPrivate && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? 'bg-background-dark hover:bg-background-dark/80'
                          : 'bg-background-light hover:bg-background-light/80'
                      } transition-colors duration-200`}
                    >
                      <FiGithub className={isDarkMode ? 'text-text-dark' : 'text-text-light'} />
                    </a>
                  )}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode
                        ? 'bg-background-dark hover:bg-background-dark/80'
                        : 'bg-background-light hover:bg-background-light/80'
                    } transition-colors duration-200`}
                  >
                    <FiExternalLink className={isDarkMode ? 'text-text-dark' : 'text-text-light'} />
                  </a>
                  {project.category === 'Mobile' && project.apkUrl && (
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsApkModalOpen(true);
                      }}
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? 'bg-background-dark hover:bg-background-dark/80'
                          : 'bg-background-light hover:bg-background-light/80'
                      } transition-colors duration-200`}
                    >
                      <FiDownload className={isDarkMode ? 'text-text-dark' : 'text-text-light'} />
                    </button>
                  )}
                </div>
              </div>

              {/* Company Badge */}
              {project.company && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs ${
                  isDarkMode
                    ? 'bg-surface-dark/90 text-primary-dark'
                    : 'bg-surface-light/90 text-primary-light'
                }`}>
                  {project.company}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <DownloadApk
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection; 