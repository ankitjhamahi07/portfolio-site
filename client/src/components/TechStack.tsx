import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  const technologies = [
    { 
      name: "JavaScript/TypeScript", 
      icon: "⚡", 
      proficiency: "Expert",
      description: "5+ years building scalable applications",
      barWidth: "95%",
      color: "bg-yellow-500"
    },
    { 
      name: "Node.js", 
      icon: "🟢", 
      proficiency: "Expert",
      description: "Core backend technology, microservices",
      barWidth: "98%",
      color: "bg-green-500"
    },
    { 
      name: "Express.js", 
      icon: "🚂", 
      proficiency: "Expert",
      description: "RESTful APIs, middleware architecture",
      barWidth: "96%",
      color: "bg-blue-500"
    },
    { 
      name: "MongoDB", 
      icon: "🍃", 
      proficiency: "Advanced",
      description: "Schema design, indexing strategies",
      barWidth: "92%",
      color: "bg-green-600"
    },
    { 
      name: "Redis", 
      icon: "🔴", 
      proficiency: "Advanced",
      description: "Caching, session management",
      barWidth: "88%",
      color: "bg-red-500"
    },
    { 
      name: "PostgreSQL", 
      icon: "🐘", 
      proficiency: "Intermediate",
      description: "Relational database operations",
      barWidth: "85%",
      color: "bg-blue-600"
    },
    { 
      name: "Docker", 
      icon: "🐳", 
      proficiency: "Intermediate",
      description: "Containerization, deployment",
      barWidth: "80%",
      color: "bg-blue-400"
    },
    { 
      name: "AWS/Cloud", 
      icon: "☁️", 
      proficiency: "Intermediate",
      description: "Cloud infrastructure, deployments",
      barWidth: "82%",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Tech Proficiency</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="bg-card border rounded-xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{tech.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    tech.proficiency === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    tech.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {tech.proficiency}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${tech.color}`}
                      style={{ 
                        width: isVisible ? tech.barWidth : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}