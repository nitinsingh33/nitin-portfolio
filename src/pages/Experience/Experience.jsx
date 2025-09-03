import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink } from "lucide-react"

export default function WorkExperience() {
  
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      description:
        "Led the development of responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality user experiences and improved application performance by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      achievements: [
        "Architected and implemented a component library used across 5+ products",
        "Mentored 3 junior developers and conducted code reviews",
        "Reduced bundle size by 30% through optimization techniques",
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
      description:
        "Built and maintained full-stack applications from concept to deployment. Worked directly with founders to translate business requirements into technical solutions.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
      achievements: [
        "Developed MVP that secured $2M in Series A funding",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built real-time chat feature supporting 10k+ concurrent users",
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
      description:
        "Developed custom websites and web applications for clients across various industries. Focused on creating pixel-perfect, responsive designs with optimal performance.",
      technologies: ["JavaScript", "SCSS", "WordPress", "PHP", "jQuery"],
      achievements: [
        "Delivered 25+ client projects with 98% satisfaction rate",
        "Improved average page load speed by 45% across all projects",
        "Established frontend development best practices for the team",
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
      description:
        "Provided web development services to small businesses and startups. Specialized in creating modern, responsive websites that drive business growth.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
      achievements: [
        "Completed 15+ freelance projects across different industries",
        "Increased client website traffic by average of 65%",
        "Built long-term relationships with 8 recurring clients",
      ],
    },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A journey through my professional career, showcasing the roles, technologies, and achievements that have
            shaped my expertise in web development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="relative overflow-hidden border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <div
                  className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <CardDescription className="text-lg font-semibold text-blue-600">{exp.company}</CardDescription>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-500 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <CalendarDays size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-slate-700 leading-relaxed">{exp.description}</p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-slate-700">
                        <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-4 left-8 w-0.5 h-8 bg-slate-200"></div>
              )}
            </Card>
          ))}
        </div>
        
      </div>
    </div>
  );
}
