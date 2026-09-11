import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FiGithub, FiExternalLink, FiDownload, FiLayers, 
  FiSmartphone, FiGlobe, FiCheckCircle, FiInfo
} from 'react-icons/fi';
import DownloadApk from './DownloadApk';
import ProjectModal from './ProjectModal';

const ProjectsSection = ({ projects }) => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [apkProject, setApkProject] = useState(null);

  const categories = ['All', 'Mobile', 'Web', 'Desktop'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOpenApk = (e, project) => {
    e.stopPropagation();
    setApkProject(project);
    setIsApkModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 relative bg-transparent">
      {/* Background glow effect */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3">
            <FiLayers className="text-sm" /> Portfolio Work
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">
            A selection of production-grade mobile applications, fintech platforms, enterprise tools, and decentralized protocols.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : isDarkMode
                      ? 'bg-surface-dark text-gray-400 hover:text-white border border-white/5'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                {category === 'Mobile' && <FiSmartphone className="inline mr-1.5" />}
                {category === 'Web' && <FiGlobe className="inline mr-1.5" />}
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-surface-dark/90 border border-white/10 hover:border-white/20 shadow-xl' 
                    : 'bg-white border border-gray-200/80 hover:border-gray-300 shadow-lg'
                } hover:-translate-y-1.5`}
              >
                {/* Top Image Preview & Badges */}
                <div>
                  <div className="relative aspect-video overflow-hidden bg-black/5 dark:bg-black/20">
                    <img
                      src={project.imagePath}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Bar Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {project.company ? (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 text-white border border-white/10">
                          {project.company}
                        </span>
                      ) : <span />}

                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        project.stage === 'Production' || project.stage === 'Completed'
                          ? 'bg-emerald-500/80 text-white'
                          : project.stage?.includes('Review')
                            ? 'bg-blue-500/80 text-white'
                            : 'bg-amber-500/80 text-white'
                      }`}>
                        {project.stage}
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-white/20 text-white border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {(project.logo || project.icon) && (
                        <img 
                          src={project.logo || project.icon} 
                          alt="" 
                          className="w-7 h-7 rounded-lg object-contain bg-black/5 dark:bg-white/10 p-0.5 border border-black/10 dark:border-white/10 shrink-0" 
                        />
                      )}
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark group-hover:text-primary-500 transition-colors truncate">
                        {project.name || project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-text-mutedLight dark:text-text-mutedDark line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights bullet points if available */}
                    {project.highlights && (
                      <div className="space-y-1.5 mb-5">
                        {project.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-text-mutedLight dark:text-text-mutedDark">
                            <FiCheckCircle className="text-primary-500 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                            isDarkMode 
                              ? 'bg-surface-darkElevated text-gray-300 border border-white/5' 
                              : 'bg-gray-100 text-gray-700 border border-gray-200/60'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-lg text-xs font-medium text-text-mutedLight dark:text-text-mutedDark">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-500 hover:underline"
                  >
                    <FiInfo /> View Details
                  </button>

                  <div className="flex items-center gap-2">
                    {project.apkUrl && (
                      <button
                        onClick={(e) => handleOpenApk(e, project)}
                        title="Download APK Build"
                        className="p-2 rounded-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                      >
                        <FiDownload className="text-sm" />
                      </button>
                    )}

                    {!project.isPrivate && project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source on GitHub"
                        className={`p-2 rounded-full transition-colors ${
                          isDarkMode ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <FiGithub className="text-sm" />
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Live Application"
                        className="p-2 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-colors"
                      >
                        <FiExternalLink className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* APK Modal */}
      <DownloadApk
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
        project={apkProject}
      />

      {/* Detailed Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
        onVisit={(url) => window.open(url, '_blank')}
      />
    </section>
  );
};

export default ProjectsSection;