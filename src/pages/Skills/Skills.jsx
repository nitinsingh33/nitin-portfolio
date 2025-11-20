import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Cpu, Cloud, Zap, Globe } from "lucide-react";
import GridBackground from "@/components/GridBackground";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
  >
    <Card className="group relative overflow-hidden bg-gray-900/95 dark:bg-gray-900/90 border-gray-700/50 dark:border-gray-600/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className={`p-3 rounded-lg bg-gray-800/80 dark:bg-gray-700/80 ${color} transition-all duration-300 group-hover:bg-gray-700/90 dark:group-hover:bg-gray-600/90 backdrop-blur-sm`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-100 dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.02) }}
            >
              <Badge
                variant="outline"
                className="bg-gray-800/60 dark:bg-gray-800/60 hover:bg-blue-900/50 dark:hover:bg-blue-900/40 text-gray-300 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200 border-gray-600/50 dark:border-gray-500/50 hover:border-blue-400/60 dark:hover:border-blue-300/60 flex items-center gap-2 py-1.5 px-3 transition-all duration-200 cursor-pointer hover:scale-105 backdrop-blur-sm">
                <span>{skill.icon}</span>
                <span className="font-medium text-sm">{skill.name}</span>
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      y: [-15, 15, -15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        {
          name: "Kubernetes",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Webpack",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "AI & LLM",
      color: "text-yellow-400",
      skills: [
        {
          name: "LangChain",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "FastAPI",
          icon: <Zap className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Pinecone DB",
          icon: <Database className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Gemini",
          icon: <Globe className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-12 lg:pt-16 text-gray-900 dark:text-white min-h-screen bg-gray-50 dark:bg-[#020617] relative transition-colors duration-300 overflow-hidden">
      <GridBackground />

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <section className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        
        {/* Enhanced Title Section */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >

          <motion.h2 
            variants={itemVariants}
            className="relative z-10 max-w-4xl mx-auto text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Tech Stack &
            </span>
            <span className="text-gray-900 dark:text-white"> Skills</span>
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-12"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

  

        {/* Enhanced Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              index={index}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;
