import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  const technologies = [
    { name: "JavaScript", icon: "⚡", level: 95 },
    { name: "Node.js", icon: "🟢", level: 98 },
    { name: "Express.js", icon: "🚂", level: 96 },
    { name: "MongoDB", icon: "🍃", level: 92 },
    { name: "Redis", icon: "🔴", level: 88 },
    { name: "PostgreSQL", icon: "🐘", level: 85 },
    { name: "Docker", icon: "🐳", level: 80 },
    { name: "AWS", icon: "☁️", level: 82 }
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
                className="bg-background/50 dark:bg-[var(--dark-secondary)] rounded-xl p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="font-semibold mb-3">{tech.name}</h3>
                  
                  {/* Circular Progress */}
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted-foreground opacity-20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - tech.level / 100)}`}
                        className="text-primary transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold">{tech.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}