import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiPlay, FiBook, FiClock, FiAward, FiBookmark, FiFileText } from 'react-icons/fi';
import { teachingExperience } from '../Utils/data';
import { useState } from 'react';

const TeachingSection = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('videos');

  const featuredVideos = [
    {
      title: "React Native Navigation Mastery",
      duration: "32:15",
      thumbnail: "https://placehold.co/600x400/2563eb/ffffff?text=React+Native+Navigation",
      url: "https://www.youtube.com/@yor-dev",
      level: "Intermediate",
      description: "Learn to implement complex navigation patterns in React Native"
    },
    {
      title: "Building Custom Hooks in React",
      duration: "28:45",
      thumbnail: "https://placehold.co/600x400/2563eb/ffffff?text=React+Custom+Hooks",
      url: "https://www.youtube.com/@yor-dev",
      level: "Advanced",
      description: "Create reusable custom hooks for better code organization"
    },
    {
      title: "Kotlin Coroutines Deep Dive",
      duration: "45:20",
      thumbnail: "https://placehold.co/600x400/2563eb/ffffff?text=Kotlin+Coroutines",
      url: "https://www.youtube.com/@yor-dev",
      level: "Advanced",
      description: "Master asynchronous programming with Kotlin Coroutines"
    }
  ];

  const courseMaterials = [
    {
      title: "React Native Architecture Guide",
      type: "PDF Guide",
      size: "2.8 MB",
      description: "Complete guide to structuring large-scale React Native applications",
      downloadUrl: "/materials/react-native-architecture.pdf"
    },
    {
      title: "Web Development Best Practices",
      type: "Resource Pack",
      size: "15 MB",
      description: "Collection of templates, snippets, and documentation for modern web development",
      downloadUrl: "/materials/web-dev-pack.zip"
    },
    {
      title: "UI/UX Design Templates",
      type: "Figma Files",
      size: "8.5 MB",
      description: "Professional design templates and component libraries",
      downloadUrl: "/materials/ui-templates.fig"
    }
  ];

  const blogPosts = [
    {
      title: "Optimizing React Native Performance",
      date: "March 15, 2024",
      readTime: "8 min",
      description: "Learn advanced techniques for improving your React Native app's performance",
      url: "https://dev.to/leonardegbaaibon"
    },
    {
      title: "State Management Patterns in Modern React",
      date: "March 10, 2024",
      readTime: "12 min",
      description: "Comparing different state management solutions and when to use each",
      url: "https://dev.to/leonardegbaaibon"
    },
    {
      title: "Building Scalable Mobile Apps with Kotlin",
      date: "March 5, 2024",
      readTime: "10 min",
      description: "Best practices for developing maintainable Kotlin applications",
      url: "https://dev.to/leonardegbaaibon"
    }
  ];

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-primary-light text-white'
          : `${isDarkMode ? 'text-text-dark/70 hover:text-text-dark' : 'text-text-light/70 hover:text-text-light'}`
      }`}
    >
      <Icon className="text-xl" />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Learning Resources
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            {teachingExperience.description}
          </p>
        </motion.div>

        {/* Content Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton id="videos" label="Video Tutorials" icon={FiPlay} />
          <TabButton id="materials" label="Course Materials" icon={FiBook} />
          <TabButton id="blog" label="Blog Posts" icon={FiFileText} />
        </div>

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                } shadow-lg`}
              >
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video">
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                    }`}>
                      <FiPlay className="text-4xl text-primary-light" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className={`font-semibold mb-2 ${
                      isDarkMode ? 'text-text-dark' : 'text-text-light'
                    }`}>
                      {video.title}
                    </h4>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                    }`}>
                      {video.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`flex items-center gap-1 ${
                        isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                      }`}>
                        <FiClock className="text-primary-light" />
                        {video.duration}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                      }`}>
                        <FiAward className="text-primary-light" />
                        {video.level}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Materials Tab */}
        {activeTab === 'materials' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courseMaterials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                } shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <FiBook className="text-2xl text-primary-light" />
                  <span className={`text-sm ${
                    isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
                  }`}>
                    {material.size}
                  </span>
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-text-dark' : 'text-text-light'
                }`}>
                  {material.title}
                </h4>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                }`}>
                  {material.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
                  }`}>
                    {material.type}
                  </span>
                  <a
                    href={material.downloadUrl}
                    className="text-primary-light hover:text-primary-light/80 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Blog Posts Tab */}
        {activeTab === 'blog' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
                } shadow-lg`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FiBookmark className="text-primary-light" />
                  <span className={`text-sm ${
                    isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
                  }`}>
                    {post.date}
                  </span>
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-text-dark' : 'text-text-light'
                }`}>
                  {post.title}
                </h4>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
                }`}>
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm flex items-center gap-1 ${
                    isDarkMode ? 'text-text-dark/60' : 'text-text-light/60'
                  }`}>
                    <FiClock className="text-primary-light" />
                    {post.readTime} read
                  </span>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light hover:text-primary-light/80 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-xl text-center max-w-2xl mx-auto ${
            isDarkMode ? 'bg-surface-dark' : 'bg-surface-light'
          } shadow-lg`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Ready to Learn?
          </h3>
          <p className={`mb-6 ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            Schedule a one-on-one mentoring session or reach out to discuss your learning goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={teachingExperience.contact.scheduling}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-light/90 transition-colors"
            >
              Schedule a Session
            </a>
            <a
              href={`mailto:${teachingExperience.contact.email}`}
              className={`px-6 py-3 rounded-lg border ${
                isDarkMode 
                  ? 'border-text-dark/20 hover:border-text-dark/40' 
                  : 'border-text-light/20 hover:border-text-light/40'
              } transition-colors`}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingSection; 