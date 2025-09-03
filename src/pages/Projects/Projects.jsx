import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import GridBackground from "@/components/GridBackground";
import { ExternalLink, Github, Star, Globe, Code, Zap } from "lucide-react";

const projects = [
  {
    title: "Olova! A Lightweight JavaScript Library",
    description:
      "A modern, production-ready JavaScript library with 1.2k+ GitHub stars. Built with zero dependencies, serving 10k+ developers worldwide. Implements advanced optimization techniques including tree-shaking, lazy loading, and micro-bundling for maximum performance.",
    image: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    tags: ["JavaScript", "UI Library", "Open Source", "NPM"],
    techStack: ["Vanilla JS", "CSS3", "Webpack", "Jest", "ESLint"],
    githubLink: "https://github.com/olovajs/olova",
    liveLink: "https://olova.js.org/",
    featured: true,
    year: "2024",
    status: "Active Development",
    highlights: ["1.2k+ GitHub Stars", "Zero Dependencies", "TypeScript Support", "10k+ Weekly Downloads"],
    metrics: ["Bundle Size: 12KB gzipped", "Performance: 98/100 Lighthouse", "Coverage: 95% Tests", "Users: 10k+ Developers"]
  },
  {
    title: "CodeWhisperer - Scalable Code Editor Platform",
    description:
      "Enterprise-grade online IDE supporting 1000+ concurrent users with real-time collaboration. Implements WebSocket optimization, custom parsing algorithms, and distributed architecture. Features intelligent code completion using machine learning models.",
    image: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    tags: ["React", "Scalability", "Real-time", "Machine Learning"],
    techStack: ["React", "Monaco Editor", "Socket.io", "Node.js", "Redis", "Docker"],
    githubLink: "https://github.com/seraprogrammer/codewhisperer",
    liveLink: "https://codewhisperer.vercel.app/",
    featured: true,
    year: "2024",
    status: "Production Ready",
    highlights: ["1000+ Concurrent Users", "15+ Languages", "ML-Powered Completion", "99.9% Uptime"],
    metrics: ["Response Time: <100ms", "Concurrent Users: 1000+", "Languages: 15+", "Availability: 99.9%"]
  },
  {
    title: "CodeKori - AI-Powered Development Platform",
    description:
      "Full-stack development platform with integrated CI/CD, auto-scaling infrastructure, and AI-driven code optimization. Reduces deployment time by 80% and supports automatic horizontal scaling based on traffic patterns.",
    image: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    tags: ["React", "DevOps", "AI/ML", "Microservices"],
    techStack: ["React", "Node.js", "Docker", "Kubernetes", "AWS", "MongoDB", "TensorFlow"],
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
    featured: false,
    year: "2024",
    status: "Beta Release",
    highlights: ["AI Code Assistant", "Auto-Scaling", "80% Faster Deployment", "Microservices Architecture"],
    metrics: ["Deployment Speed: 80% Faster", "Cost Reduction: 40%", "Auto-scaling: 0-100 instances", "AI Accuracy: 92%"]
  },
  {
    title: "Distributed Chat System (System Design)",
    description:
      "Horizontally scalable real-time messaging system supporting 50k+ concurrent connections. Implements message queuing, load balancing, and data partitioning strategies. Built with microservices architecture and event-driven design patterns.",
    image: "https://via.placeholder.com/600x400/1f2937/white?text=Chat+System+Architecture",
    tags: ["System Design", "Microservices", "Scalability", "Real-time"],
    techStack: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Nginx"],
    githubLink: "https://github.com/your-username/distributed-chat",
    liveLink: "https://chat-demo.your-domain.com",
    featured: true,
    year: "2024",
    status: "Production Ready",
    highlights: ["50k+ Concurrent Users", "Sub-second Latency", "99.99% Availability", "Global CDN"],
    metrics: ["Latency: <200ms global", "Throughput: 100k msg/sec", "Uptime: 99.99%", "Nodes: Auto-scaling"]
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, margin: "0px 0px -100px 0px" }); // Optimized threshold

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reduced from 0.15
        delayChildren: 0.05, // Reduced from 0.1
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20, // Reduced from -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6
        ease: "easeOut", // Simpler easing
      },
    },
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 15 // Reduced from 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.5
        delay: 0.1, // Reduced from 0.2
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
            transition={{ duration: 0.4, delay: 0.2 }} // Reduced duration and delay
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
  const isInView = useInView(cardRef, { amount: 0.2, margin: "0px 0px -50px 0px" }); // Optimized

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, // Reduced from 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6
        delay: index * 0.05, // Reduced from 0.1
        ease: "easeOut", // Simpler easing
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-teal-300/50 dark:hover:border-teal-600/50 transition-all duration-200 shadow-sm hover:shadow-lg ${
        project.featured ? 'col-span-full' : ''
      }`}
      whileHover={{ 
        y: -4, // Reduced from -8
        transition: { duration: 0.2 } // Faster transition
      }}
    >
      {project.featured && (
        <motion.div 
          className="absolute top-6 left-6 z-30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }} // Simplified animation
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-teal-500/90 to-blue-500/90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
            <Star className="w-4 h-4 fill-current" />
            Featured
          </div>
        </motion.div>
      )}

      <motion.div 
        className="absolute top-6 right-6 z-30"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.05 + 0.3, duration: 0.3 }} // Simplified
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
            className="w-full h-full object-cover transition-transform duration-300" // Removed redundant whileHover
          />
          
          <div 
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
          >
            <div className="flex gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-150 font-medium" // Faster transition
                whileHover={{ scale: 1.02, y: -1 }} // Reduced movement
                whileTap={{ scale: 0.98 }}
              >
                <Globe className="w-5 h-5" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-150 font-medium" // Faster transition
                whileHover={{ scale: 1.02, y: -1 }} // Reduced movement
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                Source
              </motion.a>
            </div>
          </div>
        </div>

        <div className={`p-8 ${project.featured ? 'xl:w-1/2' : 'w-full'} flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-2 h-2 rounded-full bg-teal-500 opacity-70" // Removed animation for performance
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Project {index + 1} • {project.year}
                </span>
              </div>
            </div>
            
            <h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 leading-tight"
            >
              {project.title}
            </h3>
            
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
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-colors duration-150"
                  >
                    {tech}
                  </span>
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
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.05 + highlightIndex * 0.02 + 0.3, duration: 0.3 }} // Simplified
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metricIndex}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.05 + metricIndex * 0.02 + 0.4, duration: 0.3 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {metric}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors duration-150"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:shadow-md transition-all duration-150 font-medium flex-1 justify-center" // Faster transition
              whileHover={{ scale: 1.01, y: -1 }} // Reduced movement
              whileTap={{ scale: 0.99 }} // Reduced scale
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live</span>
            </motion.a>
            
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-150 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 font-medium flex-1 justify-center" // Faster transition
              whileHover={{ scale: 1.01, y: -1 }} // Reduced movement
              whileTap={{ scale: 0.99 }} // Reduced scale
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
