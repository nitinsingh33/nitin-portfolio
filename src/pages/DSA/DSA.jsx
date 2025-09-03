import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GridBackground from "@/components/GridBackground";

const CodingProblems = () => {

  const achievements = [
    {
      platform: "LeetCode",
      rank: "Target: Knight (1800+ rating)",
      solved: "Goal: 450+ problems",
      specialties: ["Dynamic Programming", "Graph Algorithms", "System Design"],
      profile: "https://leetcode.com/your-profile",
      icon: "💻",
      color: "from-orange-500 to-red-500",
      status: "In Progress"
    },
    {
      platform: "CodeChef",
      rank: "Target: 4 Star (1800+ rating)",
      solved: "Goal: 200+ problems",
      specialties: ["Competitive Programming", "Algorithms", "Data Structures"],
      profile: "https://codechef.com/your-profile",
      icon: "🏆",
      color: "from-blue-500 to-purple-500",
      status: "Starting Soon"
    },
    {
      platform: "GeeksforGeeks",
      rank: "Currently Learning",
      solved: "Practicing Daily",
      specialties: ["DSA", "System Design", "Interview Prep"],
      profile: "https://auth.geeksforgeeks.org/your-profile",
      icon: "🎯",
      color: "from-green-500 to-teal-500",
      status: "Active"
    }
  ];

  const systemDesignProjects = [
    {
      title: "Distributed Chat System",
      description: "Scalable real-time messaging system supporting 10k+ concurrent users",
      techStack: ["Node.js", "Socket.io", "Redis", "MongoDB", "Docker"],
      features: ["Load Balancing", "Message Queuing", "Horizontal Scaling"],
      github: "https://github.com/your-repo"
    },
    {
      title: "URL Shortener (Bitly Clone)",
      description: "High-performance URL shortening service with analytics",
      techStack: ["Express.js", "PostgreSQL", "Redis", "AWS", "Nginx"],
      features: ["Custom Aliases", "Analytics Dashboard", "Rate Limiting"],
      github: "https://github.com/your-repo"
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gray-50 dark:bg-[#04081A] transition-colors duration-300">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">🧠</span>
            <span className="text-blue-500 dark:text-blue-400 font-medium">Problem Solving</span>
          </motion.div>
          
          <h2 className="relative z-10 max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              DSA Learning
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Journey</span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Coding Platform Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.platform}
                </h3>
                <div className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                  {achievement.rank}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {achievement.solved}
                </p>
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    achievement.status === 'Active' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' :
                    achievement.status === 'In Progress' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800' :
                    'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  }`}>
                    {achievement.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {achievement.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <a
                  href={achievement.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Design Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            System Design Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {systemDesignProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProblems;
