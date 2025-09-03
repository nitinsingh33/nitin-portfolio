import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import { FlipWords } from "@/components/ui/flip-words";
import { useTheme } from "@/contexts/ThemeContext";
import GridBackground from "@/components/GridBackground";

export default function Hero() {
  const { theme } = useTheme();
  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "Learning Integration of AI/ML in Projects ",
    "Learning MARN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Nitin Singh',
    title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver',
    skills: [
        'React.js', 'NextJS', 'Redux', 'Express',
        'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
        'Git'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 2, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  useEffect(() => {
    // Re-highlight code when theme changes
    setTimeout(() => {
      Prism.highlightAll();
    }, 100);
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}>
          <div className="absolute inset-0"></div>

          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                  window.innerWidth <= 1370 &&
                  window.innerHeight >= 760 &&
                  window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}>
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-200/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome to my desk
                </span>
              </div>

              <div className="relative mb-6 sm:mb-8 font-[Inter]">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                  <span className="inline-block animate-fadeInUp opacity-0 animation-delay-0">
                    Hello,
                  </span>{" "}
                  <span className="inline-block animate-fadeInUp opacity-0 animation-delay-200">
                    I&apos;m
                    <span className="typing-effect gradient-text">
                      {" "}
                      Nitin Singh
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-500 dark:text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-500 dark:text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-12 max-w-xl">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed tracking-wide font-medium font-sans">
                  SDE Intern @Hero MotoCorp (EMBU) &nbsp;|&nbsp; BS in CS & Data
                  Analytics @IIT Patna &nbsp;|&nbsp; Former Intern @Apna College
                  &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; GPT &
                  Automatio
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">

                {/* Hire Me Button */}
                <a
                  href="/#contact"
                  className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-gray-900 dark:hover:bg-black text-white font-medium border-[2px] border-blue-500 hover:border-blue-400 dark:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                  <span className="relative z-10">Hire Me</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                </a>

                {/* Download CV Button */}
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-black text-gray-900 dark:text-white font-medium border border-gray-300 hover:border-cyan-400 dark:border-gray-600/50 dark:hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 dark:hover:shadow-cyan-400/20 hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                  <span className="relative z-10">Download CV</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 10l5 5 5-5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15V3"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                </a>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[16rem] top-[5rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;Debugger
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-20 animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Problem Solver
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className={`code-window bg-white dark:bg-[#091121] border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none ${theme === 'light' ? 'light' : 'dark'}`}>
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-500 dark:text-blue-400"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
        <PortfolioPage />
      </main>
    </>
  );
}
