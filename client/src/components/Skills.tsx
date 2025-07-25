import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const backendSkills = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" }
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
    { name: "PostgreSQL", icon: "🐘" }
  ];

  const toolsSkills = [
    { name: "Git/GitHub", icon: "🔧" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "RabbitMQ", icon: "🐰" }
  ];

  const apiSkills = ["RESTful APIs", "GraphQL", "WebSockets", "Swagger/OpenAPI"];
  const architectureSkills = ["Microservices", "OAuth2/JWT", "CI/CD", "Scalable Systems"];

  return (
    <section id="skills" className="py-20 px-6 bg-[var(--dark-secondary)]/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend Technologies */}
            <div className="bg-[var(--dark-secondary)] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">Backend Technologies</h3>
              <div className="space-y-3">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="skill-badge bg-[var(--dark-primary)] px-4 py-2 rounded-lg flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Databases */}
            <div className="bg-[var(--dark-secondary)] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-green-400">Databases</h3>
              <div className="space-y-3">
                {databaseSkills.map((skill) => (
                  <div key={skill.name} className="skill-badge bg-[var(--dark-primary)] px-4 py-2 rounded-lg flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Services */}
            <div className="bg-[var(--dark-secondary)] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Tools & Services</h3>
              <div className="space-y-3">
                {toolsSkills.map((skill) => (
                  <div key={skill.name} className="skill-badge bg-[var(--dark-primary)] px-4 py-2 rounded-lg flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* API & Architecture */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--dark-secondary)] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-yellow-400">API Design</h3>
              <div className="flex flex-wrap gap-3">
                {apiSkills.map((skill) => (
                  <span key={skill} className="skill-badge bg-[var(--dark-primary)] px-4 py-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--dark-secondary)] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-red-400">Architecture</h3>
              <div className="flex flex-wrap gap-3">
                {architectureSkills.map((skill) => (
                  <span key={skill} className="skill-badge bg-[var(--dark-primary)] px-4 py-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
