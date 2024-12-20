import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SpacepayLab from "../public/Image/spacepaylab.png"
import Gumshoe from "../public/Image/gumshoe.png"
import Mogroup from "../public/Image/Mogroup.png"
// import pdf from "../public/Image/LeonardEgbaaibon2.pdf"
// import { ReactSVG } from "react-svg";
import Designer from "../public/Image/Designer.png"
import Developer from "../public/Image/Developer.png";
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { boxes, projectsData } from "./Utils/data";
import { IoLogoMedium, IoLogoTwitch, IoLogoTwitter } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";



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

  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it loads only once when visible
    threshold: 0.1, // Load when 10% of the component is visible
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
      link: "../public/Image/LeonardEgbaaibon2.pdf", // Replace with the actual path to your PDF file
    },
  ];



  useEffect(() => {
    // Dynamically load the Spline Viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.44/build/spline-viewer.js";
    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        setScreenHeight("120vh");
      } else {
        setScreenHeight("70vh");
      }
    };

    updateHeight(); // Initial check

    // Event listener to update on resize
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight); // Cleanup listener
    };
  }, []);


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
          className="absolute z-20 top-16 left-0 w-full bg-[#0b0b0b] p-6 rounded-xl shadow-lg md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <div className="flex flex-col gap-4">
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Text Section */}
          <div className="w-screen h-[70vh] md:h-[120vh] relative mt-8 md:mt-24">
            <div className="relative">
              <spline-viewer
                url="https://prod.spline.design/yCeW7w4VEu5eoC27/scene.splinecode"
                style={{
                  width: "100%",
                  height: screenHeight,
                }}
                className="transition-all duration-500"
              />
            </div>
            <div class="absolute bottom-2 right-2 bg-black w-[200px] h-[50px] z-10"></div>
            <div class="absolute top-36 md:top-48 left-5 md:left-20 md:w-[100vh] w-[40vh] h-[30vh] z-10">
              <h1 className="text-xl font-bold text-start md:text-4xl text-fuchsia-600" style={{ fontFamily: '"Lexend Tera", sans-serif;' }}>Hi, I am Leonard Egbaaibon 👨‍💻</h1>
              <p className="mt-4 text-start text-[16px] md:text-2xl text-fuchsia-200">
                Frontend Engineer | Native Mobile Developer | Product Designer </p>
              <p className="mt-4 text-start text-[15px] md:text-[20px] text-fuchsia-100">
                I'm a passionate Frontend Engineer with experience building web, mobile, and desktop applications. Skilled in React, Kotlin (Android), React Native, and UI/UX design (Figma, Spline).
              </p>
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
          {/* Left Spline with Design Focus */}
          <div className="relative lg:flex flex-row items-center justify-center w-full lg:w-1/4 h-[50vh]">
            <div className="flex flex-row items-center justify-center w-full h-full">
              <img
                src={Designer}
                height={200}
                width={200}
                style={{
                  borderRadius: 10,
                }}
                className="rounded-lg shadow-[0_0_20px_10px_rgba(226,43,220,0.6)] transition-transform duration-300 lg:hover:scale-90"
                alt="Designer"
              />

            </div>

            <div className="absolute px-4 py-2 rounded-md shadow-lg top-4 left-4 bg-gradient-to-r from-pink-600 to-purple-600">
              <span className="text-[11px] font-bold uppercase tracking-wide">Design Innovator</span>
            </div>
            <div className="absolute z-10 px-4 py-2 bg-black rounded-md shadow-lg bottom-4 left-4">
              <p>
                <span className="font-semibold text-purple-400"> Product Designer</span>, Delivering pixel-perfect designs and code that breathe life into ideas.
              </p>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 w-full mb-10 text-center lg:w-2/3 md:mb-0">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="  h-[80vh] md:h-[100vh] relative"
            >
              <spline-viewer url="https://prod.spline.design/6zzuU6ESJ31BHEDG/scene.splinecode" className="w-[100vh] lg:h-[120vh]"
              ></spline-viewer>
              <div class="absolute bottom-2 right-2 bg-black w-[200px] h-[50px] z-10"></div>
            </motion.div>
            <button className="px-6 py-3 mt-8 font-semibold text-white transition rounded-md shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90">
              Explore My Work
            </button>
          </div>

          {/* Right Spline with Code Focus */}
          <div className="relative lg:flex flex-col items-center justify-center w-full lg:w-1/4 h-[50vh]">
            <div className="flex flex-row items-center justify-center w-full h-full">
              <img
                src={Developer}
                height={200}
                width={200}
                style={{
                  borderRadius: 10,
                  boxShadow: "0px 0px 20px 10px rgb(47, 176, 77, 0.6)",
                }}
                className="transition-transform duration-300 rounded-lg lg:hover:scale-90"
                alt="Programmer"
              />
            </div>
            <div className="absolute px-4 py-2 rounded-md shadow-lg top-4 right-4 bg-gradient-to-r from-blue-600 to-green-600">
              <span className="text-[11px] font-bold uppercase tracking-wide">Code Specialist</span>
            </div>
            <div className="absolute z-10 px-4 py-2 bg-black rounded-md shadow-lg bottom-4 left-4">
              <p> <span className="font-semibold text-purple-500"> Frontend Engineer</span>, Building seamless application for all devices across all platform.
              </p>
            </div>
          </div>
        </motion.div>
      </div>


      {/* Section with Spline Viewer as Background */}
      <section
        id="experience"
        className="w-full mb-28 md:mb-14"
      >
        <span className="text-xl text-white md:text-4xl ">My Work Experience</span>

        <div className="flex items-center justify-center mt-14">
          <VerticalTimeline >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'linear-gradient(to right, #00a267, #ff8300, #6a1bb8)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2024 - present"
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={<img src={SpacepayLab} height={50} width={50} className="hidden md:block" style={{ padding: 1, marginLeft: 5 }} alt="Description of the image" />
              }>
              <h3 className="vertical-timeline-element-title">Mobile Developer at Spacepay labs</h3>
              <h4 className="vertical-timeline-element-subtitle">Lagos, Nigeria</h4>
              <p>
                Tech stack: React Native, Expo, Axios for API calls, React Navigation for seamless navigation, Jest for unit testing, and Redux for state management.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'linear-gradient(to right, #4a707a, #f7b046, #ffffff)', color: '#fff' }}
              date="2022 - 2024"
              iconStyle={{ background: '#4a707a', color: '#fff' }}
              icon={<img src={Gumshoe} height={40} width={40} style={{ padding: 1, marginLeft: 10, marginTop: 10 }} className="hidden md:block" alt="Description of the image" />
              }>
              <h3 className="vertical-timeline-element-title">Sofware Engineer and Product designer at Tsaron Telematics</h3>
              <h4 className="vertical-timeline-element-subtitle">Lagos, Nigeria</h4>
              <p>
                Kotlin (Android),XML, Redux (State Management), Vue.js (Web), React Navigation, Tailwind CSS (UI Styling), and Axios (API Integrations).
              </p>
              <p>
                Contribution: Gumshoe(Mobile app), Loveletter (web app), Blackbox fleet operation(web app)
              </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2024"
              iconStyle={{ background: 'white', color: '#fff' }}
              contentStyle={{ background: '#FF3535', color: '#fff' }}
              icon={<img src={Mogroup} height={40} width={40} className="hidden md:block" style={{ padding: 1, marginLeft: 10, marginTop: 10 }} alt="Description of the image" />
              }            >
              <h3 className="vertical-timeline-element-title">Mobile developer at Mo group</h3>
              <h4 className="vertical-timeline-element-subtitle">Lagos, Nigeria</h4>
              <p>
                Tech Stack: React,Vite, React Native, React Hooks for state management, Tailwind CSS for styling, React Navigation for mobile navigation, and Axios for API calls.
              </p>
              <p>
                Contribution: Proptibaank,
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </section>

      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative "
      >
        <div ref={ref} className="relative h-[60vh]">
          {inView ? (
            <spline-viewer
              url="https://prod.spline.design/L7aiMCz9M-dZNGgu/scene.splinecode"
              className="w-full h-[20vh] lg:h-[120vh]" // Adjust height for responsive screens
            />
          ) : (
            <div className="h-[50vh] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Loading...</p> {/* Placeholder */}
            </div>
          )}
          <div class="absolute bottom-2 right-2 bg-black w-[200px] h-[50px] z-10"></div>
        </div>
      </motion.div>

      <span id="projects" className="text-xl text-white md:text-4xl ">My Projects</span>

      <section className="flex flex-wrap items-center gap-4 my-24 justify-evenly">

        {projectsData.map((project, index) => (
          <div
            key={index}
            className="border border-zinc-700 hover:border-zinc-500 duration-100 ease-in-out m-2 p-2 rounded-md min-w-[275px] md:max-[275px]"
          >
            <p className="text-lg font-medium text-white uppercase">
              {(project.name).length > 24 ? (project.name).slice(0, 24) + '...' : project.name}
            </p>

            <img
              src={project.imagePath}
              className="my-4 rounded-md h-[22vh]"
              width={300}
              // height={400}
              alt={`${project.name} preview`}
            />

            <div className="flex items-center justify-between flex-1 w-full">
              <p className="text-lg text-gray-300 text-start">
                Technologies
                <span className="block text-sm text-gray-500">
                  {project.technologies.length > 4 ? project.technologies.slice(0, 4).join(", ") + ", ..." : project.technologies.join(", ")}
                </span>
              </p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <div>
                  <IoLogoGithub className="text-4xl text-white cursor-pointer" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </section>


      <p className="top-0 my-10 text-2xl text-white capitalize to-gray-400">
        Recommendations
      </p>

      <section className="relative flex items-center w-full h-full overflow-hidden bg-black">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 240, // Adjust speed
            ease: "linear",
          }}
        >
          {/* Seamlessly repeating content */}
          {boxes.map((box, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] mx-2 bg-black border border-zinc-700 text-white rounded-lg flex flex-col items-center justify-between text-xl font-bold shadow-lg relative"
            >
              <div className="p-4 text-center">
                <i className=" text-[11px] md:text-[15px] text-pretty">" {box.text} "</i>
              </div>

              {/* Bottom left content */}
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

          {/* Duplicate only visually for seamless effect */}
          {boxes.map((box, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] mx-2 bg-black border border-zinc-700 text-white rounded-lg flex flex-col items-center justify-between text-xl font-bold shadow-lg relative"
            >
              <div className="p-4 text-center">
                <i className="text-[15px] text-pretty">" {box.text} "</i>
              </div>

              {/* Bottom left content */}
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
        </motion.div>
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
