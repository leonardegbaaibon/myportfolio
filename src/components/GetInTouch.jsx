import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IoLogoGithub, IoLogoLinkedin, IoLogoYoutube, 
  IoCalendarOutline, IoMailOutline, IoCopyOutline, 
  IoCheckmarkOutline, IoDocumentTextOutline 
} from 'react-icons/io5';
import { contactInfo, personalInfo } from '../Utils/data';
import { useTheme } from '../context/ThemeContext';
import { FiMapPin, FiClock } from 'react-icons/fi';

const GetInTouch = () => {
  const { isDarkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactMethods = [
    {
      icon: <IoMailOutline className="w-6 h-6" />,
      label: 'Email',
      value: contactInfo.email,
      action: 'mailto:' + contactInfo.email,
      isExternal: true,
      description: 'Drop me a direct email'
    },
    {
      icon: <IoCalendarOutline className="w-6 h-6" />,
      label: 'Schedule a Call',
      value: 'Book 30-min on Calendly',
      action: contactInfo.scheduling,
      isExternal: true,
      description: 'Discuss full-time or contract roles'
    },
    {
      icon: <IoLogoLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: '/in/leonard-egbaaibon',
      action: contactInfo.linkedin,
      isExternal: true,
      description: 'Connect professionally'
    },
    {
      icon: <IoLogoGithub className="w-6 h-6" />,
      label: 'GitHub',
      value: '@leonardegbaaibon',
      action: contactInfo.github,
      isExternal: true,
      description: 'Explore open source code'
    },
    {
      icon: <IoLogoYoutube className="w-6 h-6" />,
      label: 'YouTube',
      value: '@yor-dev',
      action: contactInfo.youtube,
      isExternal: true,
      description: 'Watch engineering tutorials'
    },
    {
      icon: <IoDocumentTextOutline className="w-6 h-6" />,
      label: 'Curriculum Vitae',
      value: 'Download Resume (PDF)',
      action: personalInfo.resumeUrl,
      isExternal: true,
      description: 'Latest verified CV'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      {/* Ambient background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Available for Opportunities
          </div>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-subtitle">
            Open to senior engineering roles, mobile architecture consultations, contract builds, or tech mentorship.
          </p>

          {/* Quick Copy Email Action Box */}
          <div className="inline-flex items-center gap-3 p-2 pl-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mt-2">
            <span className="text-xs sm:text-sm font-mono text-text-light dark:text-text-dark select-all">
              {contactInfo.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <IoCheckmarkOutline className="text-sm" /> Copied!
                </>
              ) : (
                <>
                  <IoCopyOutline className="text-sm" /> Copy Email
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.action}
              target={method.isExternal ? "_blank" : "_self"}
              rel={method.isExternal ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`p-6 rounded-3xl transition-all duration-300 group ${
                isDarkMode 
                  ? 'bg-surface-dark/90 border border-white/10 hover:border-primary-500/40 shadow-lg' 
                  : 'bg-white border border-gray-200/80 hover:border-primary-500/40 shadow-md'
              } backdrop-blur-xl flex items-start gap-4`}
            >
              <div className="p-3.5 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                {method.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base text-text-light dark:text-text-dark mb-1">
                  {method.label}
                </h3>
                <p className="text-xs text-text-mutedLight dark:text-text-mutedDark mb-2">
                  {method.description}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-primary-500 truncate group-hover:underline">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer info & copyright */}
        <div className="pt-12 border-t border-gray-200 dark:border-white/10 text-center text-xs sm:text-sm text-text-mutedLight dark:text-text-mutedDark space-y-2">
          <p className="flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-primary-500" /> Lagos, Nigeria • Worldwide Remote
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-primary-500" /> Fast Response (Within 24 Hours)
            </span>
          </p>
          <p className="pt-2">
            © {new Date().getFullYear()} Leonard Egbaaibon. Engineered with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;