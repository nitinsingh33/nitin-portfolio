import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink, Building2, Trophy, Code } from "lucide-react"
import { motion } from "framer-motion"
import GridBackground from "@/components/GridBackground"

export default function WorkExperience() {
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
  
  const experiences = [
    {
      id: 1,
      company: "Hero MotoCorp (EMBU)",
      position: "Software Developer Intern",
      location: "DLF, Gurugram",
      duration: "July 2025 - Oct 2025",
      type: "Internship",
      icon: <img src="/heromoto.png" alt="Hero MotoCorp" className="w-10 h-10 rounded" />,
      colorTheme: {
        border: "border-red-200/50 hover:border-red-300/70 dark:border-red-800/50 dark:hover:border-red-600/70",
        accent: "text-red-600 dark:text-red-400",
        badge: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
      },
      description:
        "Built Hero’s domain-specific EV-GPT (Synapse) RAG system using internal EV data, enabling the strategy team to retrieve accurate insights instantly. Developed a dedicated CSV-query engine that transformed raw internal EV datasets into structured, actionable outputs. Enhanced the existing EV newsletter pipeline by improving categorization, relevance filtering, and recency sorting to deliver sharper market updates for CXOs.",
      technologies: ["FastAPI", "LangChain", "Python", "Streamlit", "Pinecone DB"],
      achievements: [
        "Delivered two production-ready AI tools adopted by the strategy team for daily EV insights.",
        "Improved newsletter relevance and accuracy, reducing manual cleanup and misclassification",
      ],
      website: "https://drive.google.com/file/d/13yV599Jrm2qrhOrWP3e2o0zIBet3rJaP/view?usp=drive_link",
    },
    {
      id: 2,
      company: "The Earth Care Foundation",
      position: "Backend Developer",
      location: "Saket, New Delhi",
      duration: "Mar 2025 - May 2025",
      type: "Internship",
      icon: <img src="/theearthcare.png" alt="The Earth Care Foundation" className="w-10 h-10 rounded" />,
      colorTheme: {
        border: "border-blue-200/50 hover:border-blue-300/70 dark:border-blue-800/50 dark:hover:border-blue-600/70",
        accent: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
      },
      description:
        "Worked as a Backend Developer intern at The Earth Care Foundation, integrating the React.js frontend with a legacy PHP–MySQL backend and resolving hosting/database performance issues. Also maintained API/database documentation and deployed the application on Hostinger with proper domain and DNS configuration.",
      technologies: ["PHP", "MySQL", "React", "Git", "Hostinger"],
      achievements: [
        "Improved system performance by fixing major database and hosting issues for more stable API operations.",
        "Ensured smooth React–PHP integration by managing Hostinger deployments, including domain, DNS, and environment setup.",
      ],
      website: "https://drive.google.com/file/d/1jAxfgQfIPJDCHIZqPjtBICXXcA-SVd5v/view?usp=drive_link",
    },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-gray-50 dark:bg-[#04081A] transition-colors duration-300">
      <GridBackground />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="relative z-10 max-w-4xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Work
            </span>
            <span className="text-gray-900 dark:text-white"> Experience</span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={cardVariants}>
            <Card
              className={`relative overflow-hidden border transition-all duration-300 bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm hover:scale-[1.02] shadow-lg hover:shadow-xl ${exp.colorTheme.border}`}>
              <CardHeader className="pb-4">
                <div
                  className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{exp.icon}</span>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className={`w-5 h-5 ${exp.colorTheme.accent}`} />
                      <CardDescription className={`text-lg font-semibold ${exp.colorTheme.accent}`}>{exp.company}</CardDescription>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-gray-500 dark:text-gray-400 hover:${exp.colorTheme.accent} transition-colors`}>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <CalendarDays className={`w-4 h-4 ${exp.colorTheme.accent}`} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className={`w-4 h-4 ${exp.colorTheme.accent}`} />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="secondary" className={`text-xs ${exp.colorTheme.badge}`}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <div className={`border-l-2 pl-3 ${exp.colorTheme.border.replace('border-', 'border-l-').replace('/30', '/50')}`}>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">{exp.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className={`w-5 h-5 ${exp.colorTheme.accent}`} />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technologies & Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`transition-colors hover:scale-105 ${exp.colorTheme.badge}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className={`w-5 h-5 ${exp.colorTheme.accent}`} />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className={`mt-1.5 flex-shrink-0 ${exp.colorTheme.accent}`}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-4 left-8 w-0.5 h-8 bg-gray-400 dark:bg-gray-600"></div>
              )}
            </Card>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
