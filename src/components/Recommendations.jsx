import { motion, useAnimation, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { recommendations } from '../Utils/data';
import { FiLinkedin, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const RecommendationCard = ({ recommendation, index, isDarkMode, isMobile }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);
  
  // Add spring physics to the rotation
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 }
    });
  }, [controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        perspective: 1000
      }}
      className={`relative p-6 md:p-8 rounded-2xl ${
        isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
      } shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu`}
    >
      {/* Floating Gradient Background */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Quote Icon */}
      <div className="relative">
        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
          className={`absolute -top-4 left-0 text-4xl ${
            isDarkMode ? 'text-primary-dark/20' : 'text-primary-light/20'
          }`}
        >
          "
        </motion.div>

        {/* Recommendation Text */}
        <motion.p
          className={`relative mb-6 pt-4 text-lg italic ${
            isDarkMode ? 'text-text-dark/80' : 'text-text-light/80'
          }`}
        >
          {recommendation.text}
        </motion.p>

        {/* Author Info */}
        <div className="relative flex items-center gap-4 mt-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-12 h-12 rounded-full overflow-hidden"
          >
            <img
              src={recommendation.image}
              alt={recommendation.author}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <div className="flex-1">
            <motion.h4
              whileHover={{ x: 5 }}
              className={`font-semibold ${
                isDarkMode ? 'text-text-dark' : 'text-text-light'
              }`}
            >
              {recommendation.author}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              className={`text-sm ${
                isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
              }`}
            >
              {recommendation.role} at {recommendation.company}
            </motion.p>
          </div>

          <motion.a
            href={recommendation.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full ${
              isDarkMode
                ? 'bg-background-dark hover:bg-background-dark/80'
                : 'bg-background-light hover:bg-background-light/80'
            } transition-colors duration-200`}
          >
            <FiLinkedin className={`text-xl ${
              isDarkMode ? 'text-primary-dark' : 'text-primary-light'
            }`} />
          </motion.a>
        </div>

        {/* Connect Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-6 w-full flex items-center justify-center gap-2 py-2 rounded-xl ${
            isDarkMode
              ? 'bg-background-dark hover:bg-background-dark/80'
              : 'bg-background-light hover:bg-background-light/80'
          } transition-colors duration-200`}
        >
          <FiMessageSquare className={isDarkMode ? 'text-primary-dark' : 'text-primary-light'} />
          <span className={`text-sm ${
            isDarkMode ? 'text-text-dark/80' : 'text-text-light/80'
          }`}>
            Connect with {recommendation.author.split(' ')[0]}
          </span>
          <FiArrowRight className={isDarkMode ? 'text-primary-dark' : 'text-primary-light'} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Recommendations = () => {
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
    <section className={`py-20 ${isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={index}
              recommendation={recommendation}
              index={index}
              isDarkMode={isDarkMode}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;