import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube, IoCalendarOutline, IoMailOutline } from 'react-icons/io5';
import { contactInfo } from '../Utils/data';
import { useTheme } from '../context/ThemeContext';

const GetInTouch = () => {
  const { isDarkMode } = useTheme();

  const contactMethods = [
    {
      icon: <IoMailOutline className="w-6 h-6" />,
      label: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      description: 'Drop me a line anytime'
    },
    {
      icon: <IoCalendarOutline className="w-6 h-6" />,
      label: 'Schedule a Call',
      value: 'Calendly',
      link: contactInfo.scheduling,
      description: 'Book a 30-minute chat'
    },
    {
      icon: <IoLogoGithub className="w-6 h-6" />,
      label: 'GitHub',
      value: 'leonardegbaaibon',
      link: contactInfo.github,
      description: 'Check out my code'
    },
    {
      icon: <IoLogoLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'leonard-egbaaibon',
      link: contactInfo.linkedin,
      description: 'Let\'s connect professionally'
    },
    {
      icon: <IoLogoYoutube className="w-6 h-6" />,
      label: 'YouTube',
      value: 'yor-dev',
      link: contactInfo.youtube,
      description: 'Watch my tutorials'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi,
            I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl ${
                isDarkMode 
                  ? 'bg-surface-dark hover:bg-surface-dark/80' 
                  : 'bg-surface-light hover:bg-surface-light/80'
              } transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-background-dark' : 'bg-background-light'
                } group-hover:text-primary-light transition-colors`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{method.label}</h3>
                  <p className="text-sm opacity-80 mb-2">{method.description}</p>
                  <p className="text-sm font-medium group-hover:text-primary-light transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg opacity-80">
            Based in Nigeria • Available Worldwide
          </p>
          <p className="text-sm mt-2 opacity-60">
            Response time: Usually within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;