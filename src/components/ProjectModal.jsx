import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function ProjectModal({ project, isOpen, onClose, onVisit }) {
  const { isDarkMode } = useTheme();

  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className={`relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl z-10 ${
            isDarkMode ? 'bg-surface-dark border border-white/10 text-white' : 'bg-white border border-gray-200 text-gray-900'
          } max-h-[90vh] flex flex-col`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {project.name}
                </h2>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  project.stage === 'Production' || project.stage === 'Completed'
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'bg-blue-500/10 text-blue-500'
                }`}>
                  {project.stage}
                </span>
              </div>
              {project.company && (
                <p className="text-xs text-text-mutedLight dark:text-text-mutedDark">
                  Developed for {project.company}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Image Preview */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/10 dark:bg-black/30">
              <img
                src={project.imagePath}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-mutedLight dark:text-text-mutedDark mb-2">
                Overview
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-text-mutedLight dark:text-text-mutedDark">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-mutedLight dark:text-text-mutedDark mb-3">
                  Key Technical Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs sm:text-sm">
                      <FiCheckCircle className="text-primary-500 shrink-0 text-base" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-mutedLight dark:text-text-mutedDark mb-3">
                Architecture & Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-end gap-3 bg-black/[0.01] dark:bg-white/[0.01]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Close
            </button>

            {!project.isPrivate && project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-surface-dark dark:bg-white/10 text-white flex items-center gap-2 hover:bg-surface-darkElevated transition-colors"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
            )}

            {project.liveLink && (
              <button
                onClick={() => onVisit(project.liveLink)}
                className="btn-primary py-2.5 text-sm"
              >
                <FiExternalLink />
                <span>Visit Live Platform</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;