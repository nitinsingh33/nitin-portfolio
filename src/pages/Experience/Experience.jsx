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
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      icon: "💻",
      colorTheme: {
        border: "border-teal-200/50 hover:border-teal-300/70 dark:border-teal-800/50 dark:hover:border-teal-600/70",
        accent: "text-teal-600 dark:text-teal-400",
        badge: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800"
      },
      description:
        "Led the development of responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality user experiences and improved application performance by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      achievements: [
        "Architected component library used across 5+ products, reducing development time by 60%",
        "Improved Core Web Vitals: LCP from 4.2s → 1.1s, FID from 180ms → 45ms",
        "Mentored 3 junior developers and conducted 50+ code reviews, improving team velocity by 35%",
        "Reduced bundle size by 30% (2.1MB → 1.5MB) through tree-shaking and lazy loading",
        "Implemented automated testing pipeline with 85% code coverage",
      ],
      website: "https://techcorp.com",
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Remote",
      duration: "Mar 2020 - Dec 2021",
      type: "Full-time",
      icon: "🚀",
      colorTheme: {
        border: "border-blue-200/50 hover:border-blue-300/70 dark:border-blue-800/50 dark:hover:border-blue-600/70",
        accent: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
      },
      description:
        "Built and maintained full-stack applications from concept to deployment. Worked directly with founders to translate business requirements into technical solutions.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Developed MVP that secured $2M in Series A funding within 6 months",
        "Implemented CI/CD pipeline reducing deployment time from 2 hours → 20 minutes (83% reduction)",
        "Built real-time chat system supporting 10k+ concurrent users with 99.9% uptime",
        "Optimized database queries reducing API response time from 800ms → 150ms",
        "Architected microservices on AWS handling 1M+ daily requests",
      ],
      website: "https://startupxyz.com",
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "New York, NY",
      duration: "Jun 2018 - Feb 2020",
      type: "Full-time",
      icon: "🎨",
      colorTheme: {
        border: "border-emerald-200/50 hover:border-emerald-300/70 dark:border-emerald-800/50 dark:hover:border-emerald-600/70",
        accent: "text-emerald-600 dark:text-emerald-400",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800"
      },
      description:
        "Developed custom websites and web applications for clients across various industries. Focused on creating pixel-perfect, responsive designs with optimal performance.",
      technologies: ["JavaScript", "SCSS", "WordPress", "PHP", "jQuery"],
      achievements: [
        "Delivered 25+ client projects with 98% satisfaction rate and zero critical bugs",
        "Improved average page load speed by 45% (3.8s → 2.1s) across all projects",
        "Achieved 100% mobile responsiveness score on Google PageSpeed Insights",
        "Increased client conversion rates by average of 32% through UX optimization",
        "Established frontend development best practices adopted by 12-person team",
      ],
      website: "https://digitalagencypro.com",
    },
    {
      id: 4,
      company: "Freelance",
      position: "Web Developer",
      location: "Various",
      duration: "Jan 2017 - May 2018",
      type: "Contract",
      icon: "⚡",
      colorTheme: {
        border: "border-orange-200/50 hover:border-orange-300/70 dark:border-orange-800/50 dark:hover:border-orange-600/70",
        accent: "text-orange-600 dark:text-orange-400",
        badge: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800"
      },
      description:
        "Provided web development services to small businesses and startups. Specialized in creating modern, responsive websites that drive business growth.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
      achievements: [
        "Completed 15+ freelance projects with 100% on-time delivery record",
        "Increased client website traffic by average of 65% within 3 months",
        "Built long-term partnerships with 8 recurring clients generating $50k+ revenue",
        "Designed and developed 5 e-commerce sites with average 28% conversion rate",
        "Reduced client maintenance costs by 40% through clean, scalable code architecture",
      ],
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
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Building2 className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            <span className="text-blue-500 dark:text-blue-400 font-medium">Professional Journey</span>
          </motion.div>
          
          <h2 className="relative z-10 max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Work Experience
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">& Achievements</span>
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
