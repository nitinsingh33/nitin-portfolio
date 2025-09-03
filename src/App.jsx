import { useState } from "react";
import "./assets/css/index.css"; // ✅ Make sure this file contains `html { scroll-behavior: smooth; }`

// Theme Provider
import { ThemeProvider } from "./contexts/ThemeContext";

// Page Components
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import DSA from "./pages/DSA/DSA";
import Blog from "./pages/Blog/Blog";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage] = useState(true); // ✅ Enable one-page mode for smooth scroll

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />

        {isOnePage ? (
          // ✅ One-Page Mode: All sections on the same page
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="dsa">
              <DSA />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="blog">
              <Blog />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </>
        ) : (
          // ❌ Multi-page mode (disabled currently)
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}
