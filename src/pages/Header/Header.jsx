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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none transition-colors duration-300">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-gradient-x hover:shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-blue-500/40 transition-all duration-500">
          <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:rounded-full px-4 md:px-6 py-2.5 transition-colors duration-300 shadow-lg shadow-purple-500/10 dark:shadow-blue-500/20">
            {/* Mobile Menu Button */}
<div className="flex justify-between items-center md:hidden px-2">
              <a href="#hero" className="text-gray-900 dark:text-white font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-emerald-600 transition-all duration-300">
                Nitin&apos;s Portfolio
              </a>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 dark:text-white p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/30 dark:focus:ring-blue-400/30 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <FaBars className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
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
                <div className="hidden md:block ml-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
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
