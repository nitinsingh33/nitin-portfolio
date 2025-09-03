import  { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
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
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
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
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
          <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5 transition-colors duration-300">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <a href="#hero" className="text-gray-900 dark:text-white font-bold">
                Portfolio
              </a>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 dark:text-white p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:focus:ring-white/30"
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
                      hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-white/10
                      active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:focus:ring-white/30
                      ${
                        activeLink === id
                          ? "bg-black/15 dark:bg-white/15 text-gray-900 dark:text-white shadow-md"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base transition-all duration-300 ${
                        activeLink === id ? "scale-110 text-cyan-500 dark:text-cyan-400" : "group-hover:scale-110 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                      }`}
                    />
                    <span className="inline">{text}</span>
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
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease-in-out infinite;
          background-size: 200% 200%;
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
