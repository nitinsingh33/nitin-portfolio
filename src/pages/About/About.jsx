import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroImg from "@/assets/images/picme.jpg";
import GridBackground from "@/components/GridBackground";
import { Lightbulb, Zap, Coffee, Heart } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section 
        id="about" 
        className="py-12 md:py-20 text-gray-900 dark:text-white bg-gray-50 dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden"
      >
        <GridBackground />
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-40 right-20 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <motion.div 
          className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Enhanced Title Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="relative z-10 max-w-4xl mx-auto text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-gray-900 dark:text-white"> Me</span>
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Enhanced Image Section */}
            <motion.div variants={itemVariants} className="relative lg:sticky lg:top-8 max-w-md mx-auto lg:mx-0">
              <div className="relative group">
                {/* Gradient border with hover effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-gradient-to-b aspect-[4/5] rounded-3xl p-1 from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm">
                  <img
                    src={HeroImg}
                    className="rounded-[22px] shadow-2xl block w-full h-full object-cover object-top"
                    alt="Nitin Singh - Developer"
                    width={600}
                    height={750}
                  />
                </div>
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div variants={itemVariants} className="relative space-y-4 lg:pt-2">
              {/* Introduction */}
              <div className="space-y-3">
                <motion.p 
                  className="text-base text-gray-700 dark:text-gray-200 leading-normal"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Hello! I&apos;m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Nitin Singh</span>, a passionate Full-Stack developer specializing in creating innovative web solutions and user-friendly interfaces. 
                  <motion.span 
                    className="inline-flex items-center ml-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Coffee className="w-4 h-4 text-amber-500" />
                  </motion.span>
                </motion.p>
                
                <motion.p 
                  className="text-base text-gray-700 dark:text-gray-200 leading-normal"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  My focus is on creating efficient, scalable solutions and staying updated with the latest technologies. I&apos;m dedicated to writing clean code and building applications that provide exceptional user experiences.
                </motion.p>

                <motion.p 
                  className="text-base text-gray-700 dark:text-gray-200 leading-normal"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Currently expanding into backend development to grow as a full-stack developer and create seamless, robust web applications that make a difference.
                </motion.p>
              </div>

              {/* Enhanced Quote Section */}
              <motion.div 
                className="relative p-4 rounded-xl bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-3 left-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                </div>
                
                <blockquote className="border-l-4 border-gradient-to-b from-blue-500 to-emerald-500 pl-4 mt-2">
                  <p className="text-gray-700 dark:text-gray-200 text-sm italic leading-normal">
                    &ldquo;I&apos;m a lifelong learner and problem solver, driven by a passion for building innovative solutions that make a real impact. My goal is to contribute meaningful value to the developer community.&rdquo;
                  </p>

                  <div className="mt-4 space-y-2">
                    <cite className="block font-semibold text-gray-900 dark:text-white text-lg">
                      Nitin Singh
                    </cite>
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 w-fit"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Zap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                      <span className="text-gray-900 dark:text-white font-medium">Full-Stack Developer</span>
                      <Heart className="w-5 h-5 text-red-500" />
                    </motion.div>
                  </div>
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
