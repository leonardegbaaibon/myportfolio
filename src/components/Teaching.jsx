import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { teachingExperience } from '../Utils/data';
import { 
  FiBook, FiUsers, FiMail, FiCalendar, 
  FiPlay, FiCheckCircle, FiArrowUpRight
} from 'react-icons/fi';
import { SiYoutube } from 'react-icons/si';

const Teaching = () => {
  const { isDarkMode } = useTheme();

  const featuredTutorials = [
    {
      title: "React Native Navigation & Deep Linking Mastery",
      platform: "YouTube / Yor-Dev",
      duration: "32 mins",
      level: "Intermediate",
      url: "https://www.youtube.com/@yor-dev",
      description: "Implementing nested stack, tab, and drawer navigators with state persistence and universal deep links."
    },
    {
      title: "Building Resilient Custom Hooks in React",
      platform: "YouTube / Yor-Dev",
      duration: "28 mins",
      level: "Advanced",
      url: "https://www.youtube.com/@yor-dev",
      description: "Patterns for encapsulating complex stateful logic, caching, and WebSocket subscriptions in reusable hooks."
    },
    {
      title: "Kotlin Coroutines & Flow for Android Apps",
      platform: "YouTube / Yor-Dev",
      duration: "45 mins",
      level: "Advanced",
      url: "https://www.youtube.com/@yor-dev",
      description: "Mastering asynchronous background tasks, lifecycle-aware coroutines, and real-time state emission in Kotlin."
    }
  ];

  return (
    <section id="mentorship" className="py-20 relative bg-transparent">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-500 mb-3">
            <FiUsers className="text-sm" /> Developer Advocacy & Content
          </div>
          <h2 className="section-title">Mentorship & Technical Tutorials</h2>
          <p className="section-subtitle">
            Dedicated to empowering developers through real-world architecture teardowns, 1-on-1 mentorship, and YouTube video tutorials.
          </p>
        </motion.div>

        {/* Courses & Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {teachingExperience.courses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl ${
                isDarkMode ? 'bg-surface-dark/90 border border-white/10 shadow-xl' : 'bg-white border border-gray-200/80 shadow-md'
              } backdrop-blur-xl flex flex-col justify-between`}
            >
              <div>
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 w-fit mb-5">
                  <FiBook className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">
                  {course.name}
                </h3>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-500 mb-4">
                  {course.level}
                </div>
                <div className="space-y-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-mutedLight dark:text-text-mutedDark">
                      <FiCheckCircle className="text-primary-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Tutorials Highlight */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">
                Featured Video Masterclasses
              </h3>
              <p className="text-sm text-text-mutedLight dark:text-text-mutedDark">
                Watch deep-dives on the YouTube channel (@yor-dev)
              </p>
            </div>

            <a
              href="https://www.youtube.com/@yor-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-500/20 transition-colors"
            >
              <SiYoutube className="text-base" />
              <span>YouTube Channel</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTutorials.map((vid, idx) => (
              <a
                key={idx}
                href={vid.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-3xl transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-surface-dark/90 border border-white/10 hover:border-red-500/40' 
                    : 'bg-white border border-gray-200/80 hover:border-red-500/40'
                } shadow-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <FiPlay className="text-lg" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 font-medium text-text-mutedLight dark:text-text-mutedDark">
                    {vid.duration}
                  </span>
                </div>

                <h4 className="font-bold text-base text-text-light dark:text-text-dark group-hover:text-primary-500 transition-colors mb-2">
                  {vid.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-mutedLight dark:text-text-mutedDark line-clamp-2 mb-4">
                  {vid.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5 text-xs text-text-mutedLight dark:text-text-mutedDark font-medium">
                  <span>{vid.level}</span>
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Watch Video <FiArrowUpRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mentorship CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 md:p-10 rounded-3xl text-center relative overflow-hidden ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border border-white/10' 
              : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-text-light dark:text-text-dark">
            Looking for 1-on-1 Mentorship or Code Reviews?
          </h3>
          <p className="text-sm md:text-base text-text-mutedLight dark:text-text-mutedDark max-w-2xl mx-auto mb-8">
            Whether you want help with production app deployment, interview prep, or React Native state architecture, let's connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={teachingExperience.contact.scheduling}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              <FiCalendar />
              <span>Schedule Mentorship Session</span>
            </a>
            <a
              href={`mailto:${teachingExperience.contact.email}`}
              className="btn-secondary text-sm px-6 py-3"
            >
              <FiMail />
              <span>Email Directly</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaching;