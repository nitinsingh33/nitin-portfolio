import  { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaChartLine,
  FaBlog,
} from "react-icons/fa";
import ThemeToggle from "../../components/ui/ThemeToggle";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [setWindowWidth] = useState(window.innerWidth);

  const navLinks = [
    { id: "hero", icon: FaHome, text: "Home" },
    { id: "skills", icon: FaCode, text: "Skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience" },
    { id: "education", icon: FaGraduationCap, text: "Education" },
    { id: "dsa", icon: FaChartLine, text: "DSA" },
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
    { id: "blog", icon: FaBlog, text: "Blog" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  // Scroll listener to auto-highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollY >= offsetTop - 80 && scrollY < offsetTop + offsetHeight - 80) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <nav className="bg-white/98 dark:bg-gray-900/98 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-gray-900 dark:text-white font-semibold text-lg">
              Nitin&apos;s Portfolio
            </a>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <FaBars className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-1">
              {navLinks.map(({ id, icon: Icon, text }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => {
                    setActiveLink(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeLink === id
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${
                    activeLink === id ? "text-blue-500" : "text-gray-400"
                  }`} />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
          <div className="p-[2px] md:rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-gradient-x hover:shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-blue-500/40 transition-all duration-500">
            <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:rounded-full px-4 md:px-6 py-2.5 transition-colors duration-300 shadow-lg shadow-purple-500/10 dark:shadow-blue-500/20">
              <div className="flex flex-row items-center gap-1 lg:gap-2">
                {navLinks.map(({ id, icon: Icon, text }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2 relative overflow-hidden group
                      hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2
                      ${
                        activeLink === id
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-900 dark:text-white shadow-lg shadow-purple-500/20 border border-purple-500/30 focus:ring-purple-500/30 dark:focus:ring-blue-400/30"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:shadow-purple-500/10 dark:hover:shadow-blue-500/10 focus:ring-purple-500/30 dark:focus:ring-blue-400/30"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base transition-all duration-300 ${
                        activeLink === id ? "scale-110 text-purple-600 dark:text-blue-400" : "group-hover:scale-110 group-hover:text-purple-600 dark:group-hover:text-blue-400"
                      }`}
                    />
                    <span className="inline">{text}</span>
                    {/* Active indicator dot */}
                    {activeLink === id && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </a>
                ))}
                
                {/* Theme Toggle for Desktop */}
                <div className="ml-2">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease-in-out infinite;
          background-size: 300% 300%;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
