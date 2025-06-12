import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { projectsData } from "./Utils/data";
import { IoGlobeOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ProjectsSection from './components/ProjectsSection';
import WorkExperience from './components/WorkExperience';
import Teaching from './components/Teaching';
import Recommendations from './components/Recommendations';
import GetInTouch from './components/GetInTouch';
import TechnologiesSection from './components/TechnologiesSection';
import { contactInfo } from './Utils/data';
import TeachingSection from "./components/TeachingSection";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ref, inView] = useInView();
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? 'bg-surface-dark/80' : 'bg-surface-light/80'
      } backdrop-blur-lg`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Leonard.dev
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ThemeToggle />
              <a href="#about" className="hover:text-primary-light transition-colors">About</a>
              <a href="#experience" className="hover:text-primary-light transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary-light transition-colors">Projects</a>
              <a href="#teaching" className="hover:text-primary-light transition-colors">Teaching</a>
              <a href="#recommendations" className="hover:text-primary-light transition-colors">Recommendations</a>
              <a href="#contact" className="hover:text-primary-light transition-colors">Contact</a>
              <div className="flex items-center space-x-4">
                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl hover:text-primary-light transition-colors"
                >
                  <IoLogoGithub />
                </motion.a>
                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl hover:text-primary-light transition-colors"
                >
                  <IoLogoLinkedin />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`px-4 py-2 ${isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'}`}>
            <ThemeToggle />
            <a href="#about" className="block py-2">About</a>
            <a href="#experience" className="block py-2">Experience</a>
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#teaching" className="block py-2">Teaching</a>
            <a href="#recommendations" className="block py-2">Recommendations</a>
            <a href="#contact" className="block py-2">Contact</a>
            <div className="flex items-center space-x-4 py-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-primary-light transition-colors"
              >
                <IoLogoGithub />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-primary-light transition-colors"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frontend Engineer & Mobile Developer
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8">
              Crafting beautiful, responsive, and user-friendly applications
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                }`}
              >
                <IoLogoGithub size={24} />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                }`}
              >
                <IoLogoLinkedin size={24} />
              </motion.a>
              <motion.a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                }`}
              >
                <IoGlobeOutline size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection projects={projectsData} />
      </section>

      {/* Work Experience Section */}
      <section id="experience">
        <WorkExperience />
      </section>

      {/* Teaching Section */}
      <section id="teaching">
        <Teaching />
        <TeachingSection />
      </section>

      {/* Recommendations Section */}
      <section id="recommendations">
        <Recommendations />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <GetInTouch />
      </section>
    </div>
  );
};

// Wrap the app with ThemeProvider
const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
