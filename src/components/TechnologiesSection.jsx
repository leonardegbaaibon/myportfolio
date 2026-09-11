import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { skillsCategories } from '../Utils/data';
import { 
  FiLayers, FiSmartphone, FiGlobe, FiDatabase, 
  FiTool, FiCode, FiSearch
} from 'react-icons/fi';
import { 
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiTypescript, 
  SiJavascript, SiKotlin, SiSwift, SiFlutter, SiTailwindcss, 
  SiRedux, SiGit, SiSupabase, SiSentry, 
  SiFigma, SiMongodb, SiRedis, SiFirebase, SiStripe, 
  SiPostgresql, SiAndroid, SiApple, SiOpenjdk
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Mobile Architecture':
      return FiSmartphone;
    case 'Web & Frontend':
      return FiGlobe;
    case 'Backend & Database':
      return FiDatabase;
    case 'Product & Infrastructure':
      return FiTool;
    default:
      return FiLayers;
  }
};

const getSkillIcon = (name) => {
  const iconMap = {
    'React Native': SiReact,
    'Expo': SiReact,
    'Kotlin': SiKotlin,
    'Jetpack Compose': SiAndroid,
    'Swift': SiSwift,
    'SwiftUI': SiApple,
    'Flutter': SiFlutter,
    'App Store & Play Store Deployment': SiApple,
    'ReactJS': SiReact,
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'Vue.js': SiVuedotjs,
    'Angular': SiAngular,
    'Tailwind CSS': SiTailwindcss,
    'Redux / Redux Toolkit': SiRedux,
    'Redux': SiRedux,
    'Supabase & Edge Functions': SiSupabase,
    'Firebase': SiFirebase,
    'SQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'C#': TbBrandCSharp,
    'Java': SiOpenjdk,
    'Figma & UI/UX Design': SiFigma,
    'Git / GitHub Actions': SiGit,
    'Sentry Error Tracking': SiSentry,
    'Stripe & PayPal APIs': SiStripe,
    'WebSockets & Real-Time': FiCode
  };

  return iconMap[name] || FiCode;
};

const TechnologiesSection = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsCategories.map(c => c.category)];

  const filteredCategories = skillsCategories
    .filter(cat => activeCategory === 'All' || cat.category === activeCategory)
    .map(cat => {
      const filteredSkills = cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background ambient light */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3">
            <FiLayers className="text-sm" /> Fullstack & Mobile Stack
          </div>
          <h2 className="section-title">Technical Expertise & Tooling</h2>
          <p className="section-subtitle">
            Comprehensive skill set spanning native mobile frameworks, reactive web architectures, cloud backends, and deployment automation.
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                    : isDarkMode
                      ? 'bg-surface-dark text-gray-400 hover:text-white border border-white/5 hover:border-white/10'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-full text-xs sm:text-sm outline-none transition-all ${
                isDarkMode
                  ? 'bg-surface-dark border border-white/10 text-white placeholder-gray-500 focus:border-primary-500'
                  : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, index) => {
              const CategoryIcon = getCategoryIcon(group.category);
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`p-6 sm:p-8 rounded-3xl ${
                    isDarkMode 
                      ? 'bg-surface-dark/90 border border-white/10 shadow-xl' 
                      : 'bg-white border border-gray-200/80 shadow-md'
                  } backdrop-blur-xl flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500">
                        <CategoryIcon className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                        {group.category}
                      </h3>
                    </div>

                    <p className="text-sm text-text-mutedLight dark:text-text-mutedDark mb-6 leading-relaxed">
                      {group.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => {
                        const Icon = getSkillIcon(skill.name);
                        return (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.04, y: -2 }}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                              skill.highlight
                                ? isDarkMode
                                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                                  : 'bg-blue-50 text-blue-700 border border-blue-200'
                                : isDarkMode
                                  ? 'bg-surface-darkElevated text-gray-300 border border-white/5 hover:border-white/10'
                                  : 'bg-gray-50 text-gray-700 border border-gray-200/60 hover:border-gray-300'
                            }`}
                          >
                            <Icon className="text-base shrink-0" />
                            <span>{skill.name}</span>
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 animate-pulse" />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;