import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";
import GridBackground from "@/components/GridBackground";

const Blog = () => {
  const publishedArticles = [
    {
      title: "Building Scalable React Applications: Performance Optimization Strategies",
      excerpt: "Deep dive into React performance optimization techniques, including memoization, code splitting, and bundle analysis that improved Olova.js performance by 40%.",
      status: "Published",
      platform: "Medium",
      link: "https://medium.com/@nitinsingh/react-performance-optimization",
      tags: ["React", "Performance", "JavaScript"],
      readTime: "8 min read",
      views: "2.3k",
      publishDate: "Aug 2024",
      type: "Engineering Deep Dive"
    },
    {
      title: "System Design: Scaling WebSocket Connections for Real-time Applications",
      excerpt: "Complete architectural breakdown of handling 1000+ concurrent WebSocket connections, including load balancing strategies and Redis clustering.",
      status: "Published", 
      platform: "Dev.to",
      link: "https://dev.to/nitinsingh/scaling-websockets",
      tags: ["System Design", "WebSockets", "Scalability"],
      readTime: "12 min read",
      views: "4.1k",
      publishDate: "Jul 2024",
      type: "Architecture Guide"
    },
    {
      title: "Open Source Engineering: Lessons from Building Olova.js",
      excerpt: "Technical insights from creating a zero-dependency JavaScript library, including API design decisions, performance benchmarks, and community building.",
      status: "Published",
      platform: "Hashnode", 
      link: "https://hashnode.com/@nitinsingh/olova-engineering",
      tags: ["Open Source", "JavaScript", "API Design"],
      readTime: "10 min read",
      views: "1.8k",
      publishDate: "Jun 2024",
      type: "Project Case Study"
    }
  ];

  const upcomingContent = [
    {
      title: "Microservices Architecture: Docker + Kubernetes in Production",
      excerpt: "Production-ready containerization strategies and orchestration patterns for scalable applications.",
      status: "In Progress",
      estimatedDate: "Sep 2024",
      tags: ["DevOps", "Kubernetes", "Docker"],
      type: "Technical Tutorial"
    },
    {
      title: "Database Optimization: From N+1 Queries to Sub-second Response Times",
      excerpt: "Advanced database optimization techniques including indexing strategies, query optimization, and caching patterns.",
      status: "Planned",
      estimatedDate: "Oct 2024", 
      tags: ["Database", "Performance", "SQL"],
      type: "Performance Guide"
    }
  ];

  const technicalFocus = {
    totalArticles: publishedArticles.length,
    totalViews: "8.2k+",
    platforms: ["Medium", "Dev.to", "Hashnode"],
    expertise: ["System Design", "Performance", "Architecture", "Open Source"]
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
            <span className="text-2xl">📝</span>
            <span className="text-blue-500 dark:text-blue-400 font-medium">Engineering Insights</span>
          </motion.div>
          
          <h2 className="relative z-10 max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Technical
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Articles</span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Technical Writing Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {technicalFocus.totalArticles}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Published Articles</div>
          </motion.div>
          
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {technicalFocus.totalViews}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Views</div>
          </motion.div>
          
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {technicalFocus.platforms.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
          </motion.div>
          
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ y: -5 }}
          >
            <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {technicalFocus.expertise.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Focus Areas</div>
          </motion.div>
        </div>

        {/* Published Technical Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Published Technical Articles
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {publishedArticles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {article.platform}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                      {article.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.views} views</span>
                    <span>•</span>
                    <span>{article.publishDate}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
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
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Upcoming Technical Content
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingContent.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {article.type}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    article.status === 'In Progress' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800' :
                    'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
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
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Expected: {article.estimatedDate}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Technical Expertise Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technical Writing Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFocus.expertise.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">
                  {index === 0 ? '🏗️' : index === 1 ? '⚡' : index === 2 ? '🏛️' : '🌐'}
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
            Follow my technical writing journey and engineering insights
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
