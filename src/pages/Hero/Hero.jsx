import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import { FlipWords } from "@/components/ui/flip-words";
import GridBackground from "@/components/GridBackground";

export default function Hero() {
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
    yearsOfExperience: 3, 
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
    // Re-highlight code and add animations
    setTimeout(() => {
      Prism.highlightAll();
    }, 100);

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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-10">
          <div className="absolute inset-0"></div>

          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={15} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 gap-6 sm:gap-8 lg:gap-16 text-center lg:text-left">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft relative order-1 lg:order-1">
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-4 sm:mb-6 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome to my desk
                </span>
              </div>

              <div className="relative mb-4 sm:mb-6 font-[Inter]">
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight text-white">
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
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-4 sm:mb-6 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-sm sm:text-lg text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-medium font-sans">
                  SDE Intern @Hero MotoCorp (EMBU) • BS in CS & Data Analytics @IIT Patna • Former Intern @Apna College • Full Stack Developer • GPT & Automation
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate__animated animate__fadeInUp animate__delay-2s">

                {/* Hire Me Button */}
                <a
                  href="/#contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gray-900 hover:bg-black text-white font-medium border-[2px] border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-sm sm:text-base">
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
                  className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gray-900 hover:bg-black text-white font-medium border border-gray-600/50 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-sm sm:text-base">
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
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s order-2 mt-4 lg:mt-0">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
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
        <PortfolioPage />
      </main>
    </>
  );
}
