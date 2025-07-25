import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Code, Database, GitBranch } from "lucide-react";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[var(--text-gray)] mb-6 leading-relaxed">
                I'm a passionate Backend Systems Engineer with over 4 years of experience building scalable, 
                high-performance applications. My expertise lies in designing robust architectures using Node.js, 
                Express.js, and modern database technologies.
              </p>
              <p className="text-lg text-[var(--text-gray)] mb-6 leading-relaxed">
                At NineLeaps, I've led the development of systems serving 2M+ users, implemented microservices 
                architectures, and mentored junior developers on best practices. I'm passionate about clean code, 
                performance optimization, and building systems that scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="skill-badge bg-[var(--dark-secondary)] px-4 py-2 rounded-lg flex items-center gap-2">
                  <Code className="text-green-400" size={20} />
                  Node.js Expert
                </div>
                <div className="skill-badge bg-[var(--dark-secondary)] px-4 py-2 rounded-lg flex items-center gap-2">
                  <Database className="text-blue-400" size={20} />
                  Database Architect
                </div>
                <div className="skill-badge bg-[var(--dark-secondary)] px-4 py-2 rounded-lg flex items-center gap-2">
                  <GitBranch className="text-purple-400" size={20} />
                  Microservices
                </div>
              </div>
            </div>
            <div className="bg-[var(--dark-secondary)] rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Experience</span>
                  <span className="font-medium">4+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Location</span>
                  <span className="font-medium">Bengaluru, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Specialty</span>
                  <span className="font-medium">Backend Systems</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Focus</span>
                  <span className="font-medium">Scalable Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
