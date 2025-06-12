import { IoClose, IoGlobeOutline, IoLogoGithub } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi';
import { getTechIcon } from './WorkExperience';

function ProjectModal({ project, isOpen, onClose, onVisit }) {
  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-zinc-900 rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col"
        >
          {/* Header - Fixed */}
          <div className="flex-shrink-0 bg-zinc-900 p-4 border-b border-zinc-800">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white break-words">
                  {project.name}
                </h2>
                {project.isPrivate && (
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      Private Project
                    </span>
                    {project.note && (
                      <span className="text-gray-400 text-xs sm:text-sm">
                        ({project.note})
                      </span>
                    )}
                  </div>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1"
              >
                <IoClose size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4">
              {/* Image */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative w-full aspect-video mb-4"
              >
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-sm sm:text-base mb-6"
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-white font-medium mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <motion.span
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-zinc-800 px-2 py-1 rounded-full text-xs sm:text-sm text-gray-300 inline-flex items-center gap-1.5"
                      >
                        <Icon className="text-base" />
                        <span>{tech}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer - Fixed */}
          <div className="flex-shrink-0 bg-zinc-900 p-4 border-t border-zinc-800">
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="px-4 py-2 text-gray-400 hover:text-white text-sm sm:text-base"
              >
                Close
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 text-center text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <IoLogoGithub />
                  View Code
                </span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onVisit(project.liveLink)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <IoGlobeOutline />
                  {project.isPrivate ? "Visit Demo Site" : "Visit Site"}
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Add this to your global CSS file
const styles = `
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}
`;

export default ProjectModal;