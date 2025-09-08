import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Shield,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import GridBackground from "@/components/GridBackground";

const EducationSection = () => {

  const educationData = [
    {
      degree: "Computer Science and Data Analytics (B.Tech)",
      school: "IIT Patna",
      mascot: "📘",
      year: "2023-2027",
      achievements: ["CPI: 8.15", "Core: Computer Science"],
      skills: ["Java", "Python", "React", "Node"],
      description:
        "Focused on core computer science subjects with emphasis on practical software development and data analytics methodologies.",
    },
    {
      degree: "Senior Secondary Certificate (CBSE)",
      school: "Rose Land Public School, Gurugram",
      mascot: "📗",
      year: "2021-2023",
      achievements: ["Percentage: 91%", "Subject: PCM"],
      skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of science and mathematics.",
    },
  ];

  const certificatesData = [
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      status: "Target: December 2025",
      credentialId: "Planning to achieve",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500",
      skills: ["AWS Lambda", "EC2", "S3", "DynamoDB", "CloudFormation"],
      description: "Validates technical expertise in developing and maintaining applications on AWS platform."
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      status: "Target: January 2026",
      credentialId: "Planning to achieve",
      icon: "🔷",
      color: "from-blue-500 to-cyan-500",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Pricing"],
      description: "Demonstrates foundational knowledge of cloud services and Microsoft Azure."
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      status: "Target: October 2025",
      credentialId: "In Progress",
      icon: "🟨",
      color: "from-yellow-500 to-orange-500",
      skills: ["ES6", "Algorithms", "Data Structures", "Functional Programming"],
      description: "Comprehensive certification covering modern JavaScript and algorithmic thinking."
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      status: "Target: November 2025",
      credentialId: "Planning to achieve",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
      skills: ["React", "JSX", "Hooks", "Context API", "Testing"],
      description: "Professional certification validating advanced React development skills."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
            <BookOpen className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            <span className="text-blue-500 dark:text-blue-400 font-medium">Academic Journey</span>
          </motion.div>
          
          <h2 className="relative z-10 max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Education
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">& Certifications</span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Academic Background
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-300/50 dark:hover:border-emerald-600/50 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm italic border-l-2 border-emerald-500 pl-3">
                    {edu.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-sm"
                        >
                          <Award className="w-4 h-4" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-600 dark:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Professional Certifications
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificatesData.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`text-2xl p-2 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-10`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.status.includes('Progress') ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800' :
                    'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  }`}>
                    {cert.status.includes('Progress') ? 'In Progress' : 'Planned'}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Status */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Shield className="w-4 h-4" />
                    {cert.status}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {cert.credentialId}
                  </span>
                  {cert.status.includes('Progress') ? (
                    <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Learning
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Verify Later
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
