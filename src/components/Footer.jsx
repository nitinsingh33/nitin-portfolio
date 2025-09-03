import { motion } from "framer-motion";
import { Heart, Coffee, Code, ArrowUp } from "lucide-react";
import GridBackground from "./GridBackground";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-[#04081A] border-t border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      {/* Grid Background */}
      <GridBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8"
        >
          {/* Simple centered content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Left: Brand */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20">
                <Code className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-500 dark:text-blue-400">Nitin Singh</span>
              </div>
            </motion.div>

            {/* Center: Copyright */}
            <motion.p 
              className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              © {currentYear} • Crafted with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and
              <Coffee className="w-4 h-4 text-amber-500" />
            </motion.p>
            
            {/* Right: Tech Stack & Back to Top */}
            <motion.div 
              className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <span>Built with</span>
                <motion.span 
                  className="font-medium text-blue-600 dark:text-blue-400 px-2 py-1 rounded bg-blue-500/10"
                  whileHover={{ scale: 1.05 }}
                >
                  React + Vite
                </motion.span>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-3 h-3" />
                <span className="text-xs font-medium">Top</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
