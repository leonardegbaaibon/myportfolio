import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiDownload, FiSmartphone, FiX, FiAlertCircle } from 'react-icons/fi';
import { SiAndroid } from 'react-icons/si';

const DownloadApk = ({ isOpen, onClose, project }) => {
  const { isDarkMode } = useTheme();

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`relative w-full max-w-lg rounded-2xl ${
            isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
          } shadow-xl overflow-hidden`}
        >
          {/* Header */}
          <div className={`p-6 border-b ${
            isDarkMode ? 'border-text-dark/10' : 'border-text-light/10'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiAndroid className="text-2xl text-green-500" />
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-text-dark' : 'text-text-light'
                }`}>
                  Download APK
                </h3>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-full hover:bg-black/5 ${
                  isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                }`}
              >
                <FiX className="text-xl" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className={`mb-6 p-4 rounded-xl ${
              isDarkMode ? 'bg-background-dark' : 'bg-background-light'
            }`}>
              <div className="flex items-start gap-3">
                <FiAlertCircle className={`text-xl mt-0.5 ${
                  isDarkMode ? 'text-primary-dark' : 'text-primary-light'
                }`} />
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    isDarkMode ? 'text-text-dark' : 'text-text-light'
                  }`}>
                    Test Version
                  </h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                  }`}>
                    This is a development build for testing purposes. Some features may be incomplete or unstable.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Project Info */}
              <div>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-text-dark' : 'text-text-light'
                }`}>
                  {project.name}
                </h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                }`}>
                  Version: {project.version || '1.0.0-beta'}
                </p>
              </div>

              {/* Instructions */}
              <div>
                <h4 className={`font-semibold mb-3 ${
                  isDarkMode ? 'text-text-dark' : 'text-text-light'
                }`}>
                  Installation Instructions
                </h4>
                <ol className={`text-sm space-y-2 ${
                  isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                }`}>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">1.</span>
                    Enable "Install from Unknown Sources" in your Android settings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">2.</span>
                    Download and open the APK file
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">3.</span>
                    Follow the installation prompts
                  </li>
                </ol>
              </div>

              {/* Requirements */}
              <div>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-text-dark' : 'text-text-light'
                }`}>
                  Requirements
                </h4>
                <div className="flex items-center gap-2">
                  <FiSmartphone className={
                    isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                  } />
                  <span className={`text-sm ${
                    isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                  }`}>
                    Android 6.0 or higher
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`p-6 border-t ${
            isDarkMode ? 'border-text-dark/10' : 'border-text-light/10'
          }`}>
            <motion.a
              href={project.apkUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl ${
                isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'
              } text-white font-medium`}
            >
              <FiDownload className="text-lg" />
              Download APK
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DownloadApk; 