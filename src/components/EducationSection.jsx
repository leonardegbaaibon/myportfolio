import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { educationData } from '../Utils/data';
import { FiAward, FiCalendar, FiMapPin, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';

const EducationSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="education" className="py-20 relative bg-transparent">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3">
            <IoSchoolOutline className="text-sm" /> Academic Foundation
          </div>
          <h2 className="section-title">Education & Engineering Background</h2>
          <p className="section-subtitle">
            Rigorous engineering education providing deep foundations in mechatronics, systems architecture, and physical-digital product synthesis.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 md:p-10 rounded-3xl ${
              isDarkMode 
                ? 'bg-surface-dark/90 border border-white/10 shadow-2xl' 
                : 'bg-white border border-gray-200/80 shadow-xl'
            } backdrop-blur-xl relative overflow-hidden`}
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500">
                  <FiAward className="text-sm" /> Degree Program
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark">
                  {educationData.institution}
                </h3>
                <p className="text-lg font-semibold text-primary-500 dark:text-primary-400">
                  {educationData.degree} — {educationData.department}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-text-mutedLight dark:text-text-mutedDark">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-primary-500" />
                  <span>{educationData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-primary-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed text-text-mutedLight dark:text-text-mutedDark mb-8">
              {educationData.description}
            </p>

            {/* Coursework Matrix */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiCpu className="text-primary-500 text-lg" />
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                  Relevant Coursework & Technical Domains
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {educationData.coursework.map((course, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-sm ${
                      isDarkMode 
                        ? 'bg-surface-darkElevated/80 border border-white/5 text-gray-300' 
                        : 'bg-gray-50 border border-gray-200/60 text-gray-700'
                    }`}
                  >
                    <FiCheckCircle className="text-primary-500 shrink-0 text-base" />
                    <span className="font-medium">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
