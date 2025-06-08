import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { recommendations } from '../Utils/data';
import { FiLinkedin } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const RecommendationCard = ({ recommendation, index, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
          stiffness: 100
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative p-6 rounded-2xl transform-gpu ${
        isDarkMode 
          ? 'bg-surface-dark' 
          : 'bg-surface-light'
      } shadow-lg hover:shadow-2xl transition-all duration-300`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-50"
        animate={{
          background: isHovered
            ? [
                'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)'
              ]
            : 'none'
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ 
            scale: 1, 
            opacity: 1,
            transition: { delay: index * 0.2 + 0.3, duration: 0.5 }
          }}
          viewport={{ once: true }}
          className={`text-4xl mb-4 ${
            isDarkMode ? 'text-primary-dark' : 'text-primary-light'
          }`}
        >
          "
        </motion.div>

        <motion.p
          className={`text-lg mb-6 ${
            isDarkMode ? 'text-text-dark/90' : 'text-text-light/90'
          }`}
        >
          {recommendation.text}
        </motion.p>

        <motion.div 
          className="flex items-center gap-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ 
            x: 0, 
            opacity: 1,
            transition: { delay: index * 0.2 + 0.4, duration: 0.5 }
          }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src={recommendation.image}
              alt={recommendation.author}
              className="w-14 h-14 rounded-full object-cover"
            />
            <motion.div
              className={`absolute inset-0 rounded-full ${
                isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'
              }`}
              initial={{ scale: 1.4, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <div>
            <h4 className={`font-semibold ${
              isDarkMode ? 'text-text-dark' : 'text-text-light'
            }`}>
              {recommendation.author}
            </h4>
            <motion.a
              href={recommendation.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-1 text-sm ${
                isDarkMode ? 'text-primary-dark' : 'text-primary-light'
              } hover:underline mt-1`}
            >
              <FiLinkedin />
              <span>Connect</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Recommendations = () => {
  const { isDarkMode } = useTheme();
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, recommendations.length));
  };

  return (
    <section className={`py-20 overflow-hidden ${
      isDarkMode ? 'bg-background-dark' : 'bg-background-light'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Client Testimonials
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            Hear what my clients and colleagues have to say about working together
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Background Gradient Elements */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {recommendations.slice(0, visibleCount).map((recommendation, index) => (
              <RecommendationCard
                key={index}
                recommendation={recommendation}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>

          {visibleCount < recommendations.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full ${
                  isDarkMode 
                    ? 'bg-primary-dark text-white' 
                    : 'bg-primary-light text-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Load More Testimonials
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;