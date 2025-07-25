import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Tag, MessageSquare, Shield, Zap, Users, TrendingUp, Lock, Rocket, ExternalLink } from "lucide-react";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Tag Automation",
      description: "Scalable certificate generation system",
      fullDescription: "Automated the generation and authentication of digital certificates via QR codes, serving 2M+ users. Built with comprehensive templating, reporting, and secure authentication systems.",
      icon: Tag,
      iconColor: "text-blue-400",
      technologies: ["Node.js", "Express.js", "Puppeteer", "REST APIs"],
      achievement: "2M+ Users Served",
      achievementIcon: Users
    },
    {
      title: "Feedback Service",
      description: "Unified feedback framework",
      fullDescription: "Designed a unified feedback framework handling millions of responses daily, with multilingual support and adaptive survey capabilities for diverse user needs.",
      icon: MessageSquare,
      iconColor: "text-green-400",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs"],
      achievement: "Millions of Daily Responses",
      achievementIcon: TrendingUp
    },
    {
      title: "Authentication System",
      description: "OAuth2 & JWT implementation",
      fullDescription: "Leading initiatives on integrating OAuth2 and JWT authentication, ensuring secure access control for sensitive systems with robust security measures.",
      icon: Shield,
      iconColor: "text-purple-400",
      technologies: ["OAuth2", "JWT", "Security", "Node.js"],
      achievement: "Enterprise Security",
      achievementIcon: Lock
    },
    {
      title: "Performance Optimization",
      description: "High-performance systems",
      fullDescription: "Improved API response times by 30% through strategic caching implementation using Redis and middleware optimization for enhanced system performance.",
      icon: Zap,
      iconColor: "text-red-400",
      technologies: ["Redis", "Caching", "Optimization", "Middleware"],
      achievement: "30% Performance Improvement",
      achievementIcon: Rocket
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-[var(--dark-secondary)] rounded-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-[var(--text-muted)]">{project.description}</p>
                  </div>
                  <project.icon className={`text-3xl ${project.iconColor}`} size={32} />
                </div>
                
                <p className="text-[var(--text-gray)] mb-6 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[var(--dark-primary)] px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                    <project.achievementIcon size={16} />
                    {project.achievement}
                  </div>
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
