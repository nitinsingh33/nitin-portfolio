import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import GridBackground from "@/components/GridBackground";
import { ExternalLink, Github, Star, Globe, Code, Zap } from "lucide-react";

const projects = [
  {
    title: "Olova! A Lightweight JavaScript Library",
    description:
      "A modern, lightweight JavaScript library designed for creating beautiful, responsive UI components with minimal overhead and exceptional developer experience.",
    image: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    tags: ["JavaScript", "UI Library", "Open Source", "NPM"],
    techStack: ["Vanilla JS", "CSS3", "Webpack", "Jest", "ESLint"],
    githubLink: "https://github.com/olovajs/olova",
    liveLink: "https://olova.js.org/",
    featured: true,
    year: "2024",
    status: "Active Development",
    highlights: ["50+ Components", "Zero Dependencies", "TypeScript Support", "1.2k+ GitHub Stars"]
  },
  {
    title: "CodeWhisperer - Online Code Editor",
    description:
      "A powerful, feature-rich online code editor with real-time collaboration, syntax highlighting, and multi-language support for modern development workflows.",
    image: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    tags: ["React", "Code Editor", "Real-time", "Collaboration"],
    techStack: ["React", "Monaco Editor", "Socket.io", "Node.js", "Express"],
    githubLink: "https://github.com/seraprogrammer/codewhisperer",
    liveLink: "https://codewhisperer.vercel.app/",
    featured: true,
    year: "2024",
    status: "Production Ready",
    highlights: ["Real-time Collab", "15+ Languages", "Live Preview", "Cloud Sync"]
  },
  {
    title: "CodeKori - Advanced Code Platform",
    description:
      "An enterprise-grade online development platform featuring advanced collaboration tools, instant deployment, and comprehensive project management capabilities.",
    image: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    tags: ["React", "Enterprise", "DevOps", "AI-Powered"],
    techStack: ["React", "Node.js", "Docker", "AWS", "MongoDB"],
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
    featured: false,
    year: "2024",
    status: "Beta Release",
    highlights: ["AI Code Assistant", "Auto Deployment", "Team Workspace", "Performance Analytics"]
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gray-50 dark:bg-[#04081A] transition-colors duration-300">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 dark:from-teal-400 to-blue-600 dark:to-blue-500 bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            variants={subtitleVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Discover my latest work - innovative solutions that blend cutting-edge technology with exceptional user experience
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3 });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-teal-300/50 dark:hover:border-teal-600/50 transition-all duration-300 shadow-sm hover:shadow-lg ${
        project.featured ? 'col-span-full' : ''
      }`}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 25 }
      }}
    >
      {project.featured && (
        <motion.div 
          className="absolute top-6 left-6 z-30"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-teal-500/90 to-blue-500/90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
            <Star className="w-4 h-4 fill-current" />
            Featured
          </div>
        </motion.div>
      )}

      <motion.div 
        className="absolute top-6 right-6 z-30"
        initial={{ scale: 0, x: 50 }}
        animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 50 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          {project.status}
        </div>
      </motion.div>

      <div className={`flex ${project.featured ? 'flex-col xl:flex-row' : 'flex-col'} h-full`}>
        <div className={`relative overflow-hidden ${project.featured ? 'xl:w-1/2' : 'w-full'} ${project.featured ? 'h-80 xl:h-auto' : 'h-64'}`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="flex gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Source
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className={`p-8 ${project.featured ? 'xl:w-1/2' : 'w-full'} flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-teal-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Project {index + 1} • {project.year}
                </span>
              </div>
            </div>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((highlight, highlightIndex) => (
                  <motion.div
                    key={highlightIndex}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + highlightIndex * 0.05 + 0.6 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:shadow-md transition-all duration-200 font-medium flex-1 justify-center"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live</span>
            </motion.a>
            
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 font-medium flex-1 justify-center"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>Source</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
