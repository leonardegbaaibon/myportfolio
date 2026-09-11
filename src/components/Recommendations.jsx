import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { recommendations } from '../Utils/data';
import { FiLinkedin } from 'react-icons/fi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

const Recommendations = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="recommendations" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3">
            <IoShieldCheckmarkOutline className="text-sm" /> Peer Endorsements
          </div>
          <h2 className="section-title">Recommendations & Colleague Feedback</h2>
          <p className="section-subtitle">
            What engineering leads and senior collaborators say about my problem-solving ability, speed, and architecture standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-surface-dark/90 border border-white/10 hover:border-blue-500/30 shadow-xl' 
                  : 'bg-white border border-gray-200/80 hover:border-blue-500/30 shadow-md'
              } backdrop-blur-xl relative`}
            >
              <div>
                <div className="text-4xl text-primary-500/40 font-serif leading-none mb-4">
                  “
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-text-light dark:text-text-dark/90 mb-6 italic">
                  {rec.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/30 bg-black/10">
                    <img
                      src={rec.image}
                      alt={rec.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-light dark:text-text-dark">
                      {rec.author}
                    </h4>
                    <p className="text-xs text-text-mutedLight dark:text-text-mutedDark">
                      {rec.role}
                    </p>
                  </div>
                </div>

                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                  title="View LinkedIn Profile"
                >
                  <FiLinkedin className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;