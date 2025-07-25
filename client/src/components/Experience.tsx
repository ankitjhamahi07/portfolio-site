import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle, TrendingUp, Award } from "lucide-react";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const careerJourney = [
    {
      title: "Software Development Engineer III",
      period: "2022 - Present",
      description: "Leading backend development initiatives and mentoring junior developers",
      achievements: [
        "Leading team of 5 developers delivering critical projects under tight deadlines",
        "Mentored 10+ junior developers on Node.js best practices and performance optimization",
        "Architected microservices handling 2M+ users with 99.9% uptime",
        "Improved API response times by 30% through Redis caching strategies"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Microservices", "Team Leadership"],
      isPromotion: true
    },
    {
      title: "Software Development Engineer I",
      period: "2021 - 2022", 
      description: "Developed robust backend systems and APIs with focus on scalability",
      achievements: [
        "Built certificate generation system serving 2M+ certificates with QR authentication",
        "Designed unified feedback framework handling millions of responses daily",
        "Implemented OAuth2 and JWT authentication for secure access control",
        "Led API integrations with Azure Communication Services, Twilio, and Discourse"
      ],
      technologies: ["Node.js", "MongoDB", "REST APIs", "JWT", "Puppeteer", "OAuth2"],
      isPromotion: true
    },
    {
      title: "Member of Technical Staff II (MTS-II)",
      period: "2020 - 2021",
      description: "Contributed to backend development with growing responsibilities",
      achievements: [
        "Established coding standards and comprehensive API documentation using Swagger/OpenAPI",
        "Conducted peer code reviews and promoted best practices across the team",
        "Collaborated on CI/CD pipelines with Jenkins and GitHub Actions",
        "Optimized database schemas and queries for MongoDB performance enhancement"
      ],
      technologies: ["JavaScript/TypeScript", "Express.js", "MongoDB", "REST APIs", "Swagger"],
      isPromotion: true
    },
    {
      title: "Software Engineering Intern",
      period: "July 2019 - 2020",
      description: "Started my journey in backend development, learning and contributing to production systems",
      achievements: [
        "Quickly adapted to production environment and contributed to live systems",
        "Developed foundational skills in Node.js, Express.js, and MongoDB",
        "Collaborated with cross-functional teams including front-end, product, and QA",
        "Demonstrated strong learning ability leading to rapid promotion cycle"
      ],
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Git"],
      isPromotion: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Career Journey at NineLeaps</h2>
          
          {/* Company Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-2">NineLeaps • Bengaluru, India</h3>
            <p className="text-muted-foreground">July 2019 – Present • 5+ Years of Growth</p>
          </div>

          {/* Career Timeline */}
          <div className="space-y-8">
            {careerJourney.map((role, index) => (
              <div 
                key={index}
                className="bg-card border rounded-xl p-8 relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Promotion Badge */}
                {role.isPromotion && index > 0 && (
                  <div className="absolute -top-3 left-8 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <TrendingUp size={12} />
                    Promoted
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-3 mb-4">
                      <Award className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{role.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{role.period}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <div className="space-y-3 mb-6">
                      {role.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <p className="text-sm text-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Role Progressions</div>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years at NineLeaps</div>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
