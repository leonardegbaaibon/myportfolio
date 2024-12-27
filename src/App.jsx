import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SpacepayLab from "../public/Image/spacepaylab.png"
import Gumshoe from "../public/Image/gumshoe.png"
import Mogroup from "../public/Image/Mogroup.png"
import Designer from "../public/Image/Designer.png"
import Developer from "../public/Image/Developer.png";
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { boxes, projectsData } from "./Utils/data";
import { IoEarthOutline, IoGlobe, IoGlobeOutline, IoLogoMedium, IoLogoTwitch, IoLogoTwitter } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import Marquee from 'react-fast-marquee';
import ProjectModal from './components/ProjectModal';
import { Application } from '@splinetool/runtime';
import { 
  FaReact, 
  FaNodeJs, 
  FaAndroid 
} from "react-icons/fa";
import { 
  SiKotlin, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiElectron 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";



const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, y: -20 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenHeight, setScreenHeight] = useState("70vh");
  const [selectedProject, setSelectedProject] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About" },
    {
      id: "download",
      label: "Download",
      link: "../public/Image/LeonardEgbaaibon2.pdf",
    },
  ];



  useEffect(() => {
    const canvas = document.getElementById('spline-canvas');
    if (canvas) {
      const spline = new Application(canvas);
      spline.load('../public/Image/glassmorph_landing_page.spline')
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        setScreenHeight("120vh");
      } else {
        setScreenHeight("70vh");
      }
    };

    updateHeight(); 

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight); 
    };
  }, []);

  const handleVisitSite = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed inset-x-0 z-50 flex items-center justify-center w-full px-6 top-2">
        <div className="w-full md:w-2/3 bg-[#0b0b0b] p-4 rounded-2xl flex items-center justify-between">
          <p className="text-lg font-medium text-slate-200">Leonard Egbaaibon</p>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <FiX
                size={24}
                className="text-gray-300 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FiMenu
                size={24}
                className="text-gray-300 cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <div className="items-center flex-1 hidden gap-6 ml-6 md:flex">
            {menuItems.map((item) =>
              item.link ? (
                <a
                  key={item.id}
                  href={item.link}
                  download
                  className="text-base font-medium text-gray-400 hover:text-slate-100"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-base font-medium text-gray-400 hover:text-slate-100"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-x-0 z-20 top-16 left-0 w-full bg-[#0b0b0b] p-6 rounded-xl shadow-lg md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <div className="flex flex-col gap-4 ">
            {menuItems.map((item) =>
              item.link ? (
                <motion.a
                  key={item.id}
                  href={item.link}
                  download
                  className="text-base font-medium text-gray-400 hover:text-slate-100"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  {item.label}
                </motion.a>
              ) : (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-base font-medium text-gray-400 hover:text-slate-100"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  {item.label}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      )}
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-around w-full text-center bg-black rounded-lg shadow-lg md:p-6 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-screen h-[70vh] md:h-[100vh] relative mt-8 md:mt-2 overflow-hidden">
            <motion.div 
              className="relative w-full h-full bg-cover bg-center bg-no-repeat"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.5,
                ease: "easeOut"
              }}
              style={{
                backgroundImage: "url('/Image/Glassmorph-page.jpg')",
                backgroundBlendMode: "soft-light",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              }}
            >
              {/* Gradient overlays with animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 0.7 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />
            </motion.div>
            
            <div className="absolute top-36 md:top-48 left-5 md:left-20 md:w-[100vh] w-[40vh] h-[30vh] z-10">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="text-xl font-bold text-start md:text-4xl text-fuchsia-600" 
                    style={{ fontFamily: '"Lexend Tera", sans-serif' }}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Hi, I am Leonard Egbaaibon 
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    👨‍💻
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p 
                className="mt-4 text-start text-[16px] md:text-2xl text-fuchsia-200"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Frontend Engineer | Native Mobile Developer | Product Designer 
              </motion.p>

              <motion.p 
                className="mt-4 text-start text-[15px] md:text-[20px] text-fuchsia-100"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                I'm a passionate Frontend Engineer with experience building web, mobile, and desktop applications. 
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  {" "}Skilled in React, Kotlin (Android), React Native, and UI/UX design (Figma, Spline).
                </motion.span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white mt-28 md:mt-0">
        <motion.div
          className="flex flex-col items-center justify-between w-full bg-black shadow-2xl rounded-xl md:p-8 lg:flex-row"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Section with Enhanced Infinity Image */}
          {/* <motion.div 
            className="relative lg:flex flex-col items-center justify-center w-full lg:w-1/4 h-[50vh] mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex flex-row items-center justify-center w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative w-[200px] h-[200px]">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                  animate={{ 
                    rotate: [0, 360],
                    borderColor: ['rgba(59, 130, 246, 0.2)', 'rgba(139, 92, 246, 0.2)', 'rgba(59, 130, 246, 0.2)']
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />


                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-purple-500/10"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: [1, 1.1 + (i * 0.1), 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ 
                      duration: 2 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                ))}

                <motion.div 
                  className="relative w-full h-full rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.img
                    src="/Image/infinity.jpg"
                    className="w-full h-full object-cover mix-blend-screen filter"
                    style={{
                      boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.1)",
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(30,64,175,0.4) 0%, transparent 50%, rgba(147,51,234,0.4) 100%)",
                        "linear-gradient(225deg, rgba(30,64,175,0.4) 0%, transparent 50%, rgba(147,51,234,0.4) 100%)",
                        "linear-gradient(315deg, rgba(30,64,175,0.4) 0%, transparent 50%, rgba(147,51,234,0.4) 100%)",
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const radius = 105;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [
                          Math.cos(angle) * radius,
                          Math.cos(angle + Math.PI * 2) * radius
                        ],
                        y: [
                          Math.sin(angle) * radius,
                          Math.sin(angle + Math.PI * 2) * radius
                        ],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute px-4 py-2 rounded-md shadow-lg top-4 right-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <motion.div 
                className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 rounded-md px-6 py-1"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent "
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-[11px] font-bold uppercase tracking-wide relative z-10">
                  Infinite Growth
                </span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute z-10 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-md shadow-lg bottom-0 left-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.p>
                <motion.span 
                  className="font-semibold text-blue-400 "
                  animate={{ 
                    color: ['#60A5FA', '#818CF8', '#60A5FA']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Continuous Learning
                </motion.span>
                <motion.span 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  , Embracing the endless cycle of innovation and adaptation in tech.
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div> */}

          <div className="flex-1 w-full mb-10 text-center lg:w-2/3 md:mb-0">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[80vh] md:h-[100vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-[400px] h-[500px] md:w-[600px] md:h-[500px] isolate">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-sky-500/20 z-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-purple-500/20" />
                </div>
                
                <div className="absolute inset-0 overflow-hidden z-0">
                  {[
                    { icon: <FaReact />, color: "#61DAFB" },
                    { icon: <TbBrandReactNative />, color: "#61DAFB" },
                    { icon: <SiKotlin />, color: "#7F52FF" },
                    { icon: <FaNodeJs />, color: "#339933" },
                    { icon: <SiTailwindcss />, color: "#06B6D4" },
                    { icon: <SiNextdotjs />, color: "#ffffff" },
                    { icon: <SiElectron />, color: "#47848F" },
                    { icon: <FaAndroid />, color: "#3DDC84" },
                  ].map((item, i) => {
                    const angle = (i * 45) * (Math.PI / 180);
                    
                    const getRadius = () => {
                      if (typeof window !== 'undefined') {
                        const width = window.innerWidth;
                        if (width < 480) return 100; // Mobile
                        if (width < 768) return 140; // Large Mobile
                        if (width < 1024) return 180; // Tablet
                        if (width < 1280) return 200; // Small Desktop
                        return 220; // Large Desktop
                      }
                      return 180; // Default fallback
                    };

                    return (
                      <motion.div
                        key={`icon-${i}`}
                        className="absolute flex items-center justify-center"
                        style={{
                          top: '50%',
                          left: '50%',
                          color: item.color,
                        }}
                        animate={{
                          x: [
                            Math.cos(angle) * getRadius(),
                            Math.cos(angle + Math.PI * 2) * getRadius()
                          ],
                          y: [
                            Math.sin(angle) * getRadius(),
                            Math.sin(angle + Math.PI * 2) * getRadius()
                          ],
                          opacity: [0.4, 0.8, 0.4],
                          scale: [1, 1.1, 1],
                        }}
                        whileHover={{
                          scale: 1.2,
                          opacity: 1,
                          transition: { duration: 0.2 }
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          times: [0, 0.5, 1],
                        }}
                      >
                        {/* Responsive icon sizing */}
                        <div className="
                          text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                          transform transition-transform duration-200 hover:scale-110
                        ">
                          {item.icon}
                        </div>

                        {/* Responsive tooltip */}
                        <motion.div
                          className="absolute top-full mt-1 
                            text-[8px] sm:text-[10px] md:text-xs
                            whitespace-nowrap bg-gray-900/80 
                            px-1.5 py-0.5 sm:px-2 sm:py-1 rounded 
                            opacity-0 pointer-events-none
                            backdrop-blur-sm"
                          initial={{ opacity: 0, y: -5 }}
                          whileHover={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { duration: 0.2 } 
                          }}
                        >
                          {i === 0 ? "React" :
                           i === 1 ? "React Native" :
                           i === 2 ? "Kotlin" :
                           i === 3 ? "Node.js" :
                           i === 4 ? "Tailwind" :
                           i === 5 ? "Next.js" :
                           i === 6 ? "Electron" :
                           "Android"}
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Responsive center glow */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 
                      rounded-full"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative max-w-md mx-auto mt-8 text-center px-4 z-20"
              >
                <motion.p 
                  className="text-sky-400 italic mb-2 text-lg font-semibold"
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "Where particles of code converge into digital harmony"
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  In the quantum realm of development, each particle represents a piece of logic,
                  flowing seamlessly through the digital space. Like atoms forming molecules,
                  our code builds complex systems from simple, elegant components.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section with Enhanced Yin-Yang Video */}
          {/* <motion.div 
            className="relative lg:flex flex-col items-center justify-center w-full lg:w-1/4 h-[50vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          > */}
            {/* <motion.div 
              className="flex flex-row items-center justify-center w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            > */}
              {/* <div className="relative w-[200px] h-[200px]"> */}
                {/* Rotating outer ring */}
                {/* <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                /> */}
                
                {/* Pulsing ring */}
                {/* <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                /> */}

                {/* Video container with effects */}
                {/* <motion.div 
                  className="relative w-full h-full rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                > */}
                  {/* <video
                    src="/Image/yingyang.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover mix-blend-screen filter contrast-500"
                    style={{
                      boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.1)",
                    }}
                  /> */}
                  
                  {/* Animated gradient overlay */}
                  {/* <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/40 rounded-full pointer-events-none"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
                        "linear-gradient(225deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
                        "linear-gradient(315deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
                        "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  /> */}
                {/* </motion.div> */}

                {/* Floating particles */}
                {/* {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      top: `${50 + Math.cos(i * 60) * 45}%`,
                      left: `${50 + Math.sin(i * 60) * 45}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))} */}
              {/* </div>
            </motion.div> */}
            
            {/* Animated title card */}
            {/* <motion.div 
              className="absolute px-4 py-2 rounded-md shadow-lg top-4 right-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-md px-6 py-1">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                  animate={{
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="text-[11px] font-bold uppercase tracking-wide relative z-10">
                  Balance in Code
                </span>
              </div>
            </motion.div> */}

            {/* Animated description card */}
            {/* <motion.div 
              className="absolute z-10 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-md shadow-lg bottom-0 left-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.span 
                  className="font-semibold text-gray-300"
                  animate={{ color: ["#E5E7EB", "#9CA3AF", "#E5E7EB"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Technical Harmony
                </motion.span>
                <motion.span 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  , Where logic meets intuition in development.
                </motion.span>
              </motion.p>
            </motion.div> */}
          {/* </motion.div> */}
        </motion.div>
      </div>


      <section
        id="experience"
        className="w-full mb-28 mt-10 md:mb-14"
      >
        <span className="text-xl text-white md:text-4xl mix-blend-difference">My Work Experience</span>
        <div className="flex items-center justify-center mt-14">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(88, 28, 135, 0.8))',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.15)',
                color: '#fff'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(88, 28, 135, 0.8)' }}
              date="2024 - present"
              dateClassName="text-gray-300"
              iconStyle={{ 
                background: 'black',
                boxShadow: '0 0 0 4px #581C87, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
              }}
              icon={<img src={SpacepayLab} height={50} width={50} className="hidden md:block" style={{ padding: 1, marginLeft: 5 }} alt="Spacepay Labs" />}
            >
              <h3 className="vertical-timeline-element-title text-violet-200">Mobile Developer at Spacepay labs</h3>
              <h4 className="vertical-timeline-element-subtitle text-violet-300">Lagos, Nigeria</h4>
              <p className="text-gray-200">
                Tech stack: React Native, Expo, Axios for API calls, React Navigation for seamless navigation, Jest for unit testing, and Redux for state management.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(55, 65, 81, 0.8))',
                boxShadow: '0 0 20px rgba(156, 163, 175, 0.15)',
                color: '#fff'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(55, 65, 81, 0.8)' }}
              date="2022 - 2024"
              dateClassName="text-gray-300"
              iconStyle={{ 
                background: '#1F2937',
                boxShadow: '0 0 0 4px #374151, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
              }}
              icon={
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                  {/* <img src={Gumshoe} height={40} width={40} className="hidden md:block" style={{ padding: 1, marginLeft: 10, marginTop: 10 }} alt="Tsaron" /> */}
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title text-gray-200">Software Engineer and Product designer at Tsaron Telematics</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-300">Lagos, Nigeria</h4>
              <p className="text-gray-300">
                Kotlin (Android), XML, Redux (State Management), Vue.js (Web), React Navigation, Tailwind CSS (UI Styling), and Axios (API Integrations).
              </p>
              <p className="text-gray-400 mt-2">
                Contribution: Gumshoe (Mobile app), Loveletter (web app), Blackbox fleet operation (web app)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(185, 28, 28, 0.8))',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.15)',
                color: '#fff'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(185, 28, 28, 0.8)' }}
              date="2021 - 2024"
              dateClassName="text-gray-300"
              iconStyle={{ 
                background: 'white',
                boxShadow: '0 0 0 4px #B91C1C, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
              }}
              icon={<img src={Mogroup} height={40} width={40} className="hidden md:block" style={{ padding: 1, marginLeft: 10, marginTop: 10 }} alt="Mo group" />}
            >
              <h3 className="vertical-timeline-element-title text-red-200">Mobile developer at Mo group</h3>
              <h4 className="vertical-timeline-element-subtitle text-red-300">Lagos, Nigeria</h4>
              <p className="text-gray-200">
                Tech Stack: React, Vite, React Native, React Hooks for state management, Tailwind CSS for styling, React Navigation for mobile navigation, and Axios for API calls.
              </p>
              <p className="text-gray-300 mt-2">
                Contribution: Proptibaank
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ 
                background: 'linear-gradient(135deg, #059669, #047857)',
                boxShadow: '0 0 0 4px #065F46, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
              }}
            />
          </VerticalTimeline>
        </div>
      </section>


      {/* <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative "
      >
        <div ref={ref} className="relative h-[60vh]">
          {inView ? (
            <spline-viewer
              url="https://prod.spline.design/L7aiMCz9M-dZNGgu/scene.splinecode"
              className="w-full h-[20vh] lg:h-[120vh]"
            />
          ) : (
            <div className="h-[50vh] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Loading...</p>
            </div>
          )}
          <div class="absolute bottom-2 right-2 bg-black w-[200px] h-[50px] z-10"></div>
        </div>
      </motion.div> */}

      <span id="projects" className="text-xl text-white md:text-4xl ">My Projects</span>

      <section className="flex flex-wrap items-center gap-4 my-24 justify-evenly">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="border border-zinc-700 hover:border-zinc-500 duration-100 ease-in-out m-2 p-2 rounded-md w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex flex-col"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-white uppercase">
                {(project.name).length > 24 ? (project.name).slice(0, 24) + '...' : project.name}
              </p>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${
                  project.stage === "Completed" ? "text-green-400" :
                  project.stage === "Ongoing" ? "text-orange-400" :
                  "text-purple-400"  // For MVP
                }`}>
                  {project.stage}
                </span>
                <span className={`h-2 w-2 rounded-full ${
                  project.stage === "Completed" ? "bg-green-400 animate-pulse" :
                  project.stage === "Ongoing" ? "bg-orange-400 animate-pulse" :
                  "bg-purple-400 animate-pulse"  // For MVP
                }`}></span>
              </div>
            </div>

            <div className="relative w-full h-[200px] md:h-[225px] my-4">
              <img
                src={project.imagePath}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
                alt={`${project.name} preview`}
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between flex-1 w-full mt-auto">
              <p className="text-lg text-gray-300 text-start">
                Technologies
                <span className="block text-sm text-gray-500">
                  {project.technologies.length > 4 ? project.technologies.slice(0, 4).join(", ") + ", ..." : project.technologies.join(", ")}
                </span>
              </p>
              <div className="flex items-center justify-center gap-2">
                <IoLogoGithub className="text-2xl text-white cursor-pointer" />
                <div className="flex items-center justify-center gap-2">
                  <IoGlobeOutline className="text-2xl text-white cursor-pointer" />
                  <span className="text-xl text-white cursor-pointer">View</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onVisit={handleVisitSite}
        />
      </section>


      <p className="top-0 my-10 text-2xl text-white capitalize to-gray-400">
        Recommendations
      </p>

      <section className="relative w-full h-full overflow-hidden bg-black">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
        >
          {boxes.map((box, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] mx-2 bg-black border border-zinc-700 text-white rounded-lg flex flex-col items-center justify-between text-xl font-bold shadow-lg relative"
            >
              <div className="p-4 text-center">
                <i className="text-[11px] md:text-[15px] text-pretty">" {box.text} "</i>
              </div>

              <div className="absolute flex items-center space-x-2 bottom-4 left-4">
                <img
                  src={box.image}
                  alt={box.recommendation}
                  className="w-10 h-10 rounded-full"
                />
                <a
                  href={box.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {box.recommendation}
                </a>
              </div>
            </div>
          ))}
        </Marquee>
      </section>


      <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
        <p className="my-10 text-2xl text-white capitalize to-gray-400">
          Follow me on
        </p>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 mx-5 my-4">
          <a href="https://github.com/leonardegbaaibon" className="flex items-center justify-center w-full gap-3 px-3 py-5 mx-6 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-zinc-800 rounded-2xl hover:border-zinc-600">
            <IoLogoGithub className="text-3xl text-white cursor-pointer" />
            <p className="text-lg text-white">Github</p>
          </a>
          <a href="https://www.linkedin.com/in/leonard-egbaaibon/" className="flex items-center justify-center w-full gap-3 px-3 py-5 mx-6 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-zinc-800 rounded-2xl hover:border-zinc-600">
            <IoLogoLinkedin className="text-3xl text-blue-800 cursor-pointer" />
            <p className="text-lg text-white">Linkedin</p>
          </a>
          <a href="https://medium.com/@legbaaibon" className="flex items-center justify-center w-full gap-3 px-3 py-5 mx-6 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-zinc-800 rounded-2xl hover:border-zinc-600">
            <IoLogoMedium className="text-3xl text-white cursor-pointer" />
            <p className="text-lg text-white">Medium</p>
          </a>
          <a href="https://x.com/Realcod3r" className="flex items-center justify-center w-full gap-3 px-3 py-5 mx-6 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-zinc-800 rounded-2xl hover:border-zinc-600">
            <IoLogoTwitter className="text-3xl text-blue-400 cursor-pointer" />
            <p className="text-lg text-white">Twitter</p>
          </a>
          <a href="#" className="flex items-center justify-center w-full gap-3 px-3 py-5 mx-6 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-zinc-800 rounded-2xl hover:border-zinc-600">
            <IoLogoYoutube className="text-3xl text-red-500 cursor-pointer" />
            <p className="text-lg text-white">Youtube</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
