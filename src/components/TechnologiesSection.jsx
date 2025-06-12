import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  SiReact, SiVuedotjs, SiKotlin, SiTypescript,
  SiJavascript, SiNodedotjs, SiPython, SiFigma,
  SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb,
  SiDocker, SiGit, SiJest, SiRedux, SiExpo,
  SiWeb3Dotjs, SiSupabase, SiExpress, SiPostgresql,
  SiStripe, SiAndroid, SiIos, SiChartdotjs, SiNetlify
} from 'react-icons/si';

const TechnologiesSection = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    // Frontend
    { Icon: SiReact, name: 'React', color: 'blue-400' },
    { Icon: SiVuedotjs, name: 'Vue.js', color: 'green-500' },
    { Icon: SiNextdotjs, name: 'Next.js', color: 'gray-700' },
    { Icon: SiTypescript, name: 'TypeScript', color: 'blue-600' },
    { Icon: SiJavascript, name: 'JavaScript', color: 'yellow-400' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'cyan-400' },
    { Icon: SiRedux, name: 'Redux', color: 'purple-600' },
    
    // Mobile
    { Icon: SiKotlin, name: 'Kotlin', color: 'purple-500' },
    { Icon: SiExpo, name: 'Expo', color: 'gray-700' },
    { Icon: SiAndroid, name: 'Android', color: 'green-500' },
    { Icon: SiIos, name: 'iOS', color: 'gray-700' },
    
    // Backend
    { Icon: SiNodedotjs, name: 'Node.js', color: 'green-600' },
    { Icon: SiPython, name: 'Python', color: 'blue-500' },
    { Icon: SiExpress, name: 'Express', color: 'gray-700' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'green-500' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: 'blue-400' },
    { Icon: SiSupabase, name: 'Supabase', color: 'green-500' },
    
    // Blockchain & Web3
    { Icon: SiWeb3Dotjs, name: 'Web3.js', color: 'yellow-500' },
    
    // DevOps & Tools
    { Icon: SiDocker, name: 'Docker', color: 'blue-500' },
    { Icon: SiGit, name: 'Git', color: 'orange-500' },
    { Icon: SiJest, name: 'Jest', color: 'red-500' },
    { Icon: SiNetlify, name: 'Netlify', color: 'green-500' },
    
    // Services & APIs
    { Icon: SiFirebase, name: 'Firebase', color: 'yellow-500' },
    { Icon: SiStripe, name: 'Stripe', color: 'blue-500' },
    { Icon: SiChartdotjs, name: 'Chart.js', color: 'pink-500' },
    
    // Design
    { Icon: SiFigma, name: 'Figma', color: 'purple-400' }
  ];

  return (
    <section className={`py-12 lg:py-20 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 ${
            isDarkMode ? 'text-text-dark' : 'text-text-light'
          }`}>
            Technologies I Work With
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-text-dark/70' : 'text-text-light/70'
          }`}>
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-5xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className={`flex flex-col items-center gap-2 p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-surface-dark/50' : 'hover:bg-surface-light/50'
              } transition-colors duration-200`}
            >
              <skill.Icon className={`text-2xl text-${skill.color}`} />
              <span className={`text-xs text-center ${
                isDarkMode ? 'text-text-dark/80' : 'text-text-light/80'
              }`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection; 