import { motion } from "framer-motion";
import { Clock, BookOpen, TrendingUp } from "lucide-react";
import GridBackground from "@/components/GridBackground";

const Blog = () => {
  const upcomingArticles = [
    {
      title: "Building Scalable React Applications: Lessons from Olova.js",
      excerpt: "Deep dive into performance optimization, state management, and architectural patterns I learned while building Olova.js.",
      status: "Coming Soon",
      platform: "Medium",
      tags: ["React", "Performance", "Architecture"],
      estimatedReadTime: "8 min read"
    },
    {
      title: "System Design: Building a Real-time Chat Application",
      excerpt: "Complete walkthrough of designing and implementing a scalable chat system that handles thousands of concurrent users.",
      status: "In Progress",
      platform: "Dev.to",
      tags: ["System Design", "WebSockets", "Scalability"],
      estimatedReadTime: "12 min read"
    },
    {
      title: "Open Source Success: How I Built Olova.js from Scratch",
      excerpt: "My journey of creating a JavaScript library, growing the community, and lessons learned along the way.",
      status: "Planned",
      platform: "Hashnode",
      tags: ["Open Source", "JavaScript", "Community"],
      estimatedReadTime: "10 min read"
    },
    {
      title: "From College to Production: Building Real-World Projects",
      excerpt: "Practical guide for computer science students on transitioning from academic projects to production-ready applications.",
      status: "Planned",
      platform: "Medium",
      tags: ["Career", "Projects", "Learning"],
      estimatedReadTime: "15 min read"
    }
  ];

  const goals = {
    targetArticles: 12,
    targetPlatforms: 3,
    publishingGoal: "1 article per week",
    focusAreas: ["System Design", "React/JavaScript", "Open Source", "Career Tips"]
  };

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
            <span className="text-2xl">✍️</span>
            <span className="text-blue-500 dark:text-blue-400 font-medium">Content Creation</span>
          </motion.div>
          
          <h2 className="relative z-10 max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Technical Writing
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

        {/* Writing Goals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {goals.targetArticles}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Articles Goal</div>
          </motion.div>
          
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {goals.targetPlatforms}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
          </motion.div>
          
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <div className="text-2xl mb-2">�</div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              Weekly
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Publishing Goal</div>
          </motion.div>
          
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <div className="text-2xl mb-2">�</div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              Starting
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
          </motion.div>
        </div>

        {/* Upcoming Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Upcoming Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingArticles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {article.platform}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    article.status === 'Coming Soon' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' :
                    article.status === 'In Progress' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800' :
                    'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  }`}>
                    {article.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.estimatedReadTime}
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 font-medium">
                    {article.status === 'Coming Soon' ? 'Publishing Soon' : 
                     article.status === 'In Progress' ? 'Writing...' : 'Planning'}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Writing Focus Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Writing Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">
                  {index === 0 ? '🏗️' : index === 1 ? '⚛️' : index === 2 ? '🌐' : '💼'}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Follow my writing journey and get notified when I publish new articles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://medium.com/@nitin-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Follow on Medium
            </a>
            <a
              href="https://dev.to/nitin-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Follow on Dev.to
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
