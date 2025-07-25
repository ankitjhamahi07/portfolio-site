import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    "Backend Development: Designed and implemented robust, scalable backend architectures using Node.js and Express.js, ensuring optimized performance for high-traffic applications.",
    "Certificate Systems: Created certificate generation systems with templating, reporting, and QR-based authentication, scaling up to 2M+ certificates.",
    "Microservices Architecture: Spearheaded the transition of monolithic applications to microservices, enabling modular development and easier scaling.",
    "API Integration: Led API integrations with third-party services like Azure Communication Services, Twilio, and Discourse, ensuring secure workflows.",
    "Mentorship & Leadership: Mentored junior developers and led teams to deliver critical projects under tight deadlines with focus on quality and scalability."
  ];

  const technologies = ["Node.js", "Express.js", "MongoDB", "Redis", "Microservices", "REST APIs"];

  return (
    <section id="experience" className="py-20 px-6 bg-[var(--dark-secondary)]/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
          
          <div className="bg-[var(--dark-secondary)] rounded-xl p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-semibold text-primary mb-2">NineLeaps</h3>
                <h4 className="text-xl font-medium mb-2">Software Development Engineer - 3</h4>
                <p className="text-[var(--text-muted)] mb-4">July 2019 – Present</p>
                <p className="text-[var(--text-muted)]">Bengaluru, India</p>
              </div>
              
              <div className="md:w-2/3">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-[var(--text-gray)]">
                        {achievement.includes(':') ? (
                          <>
                            <strong>{achievement.split(':')[0]}:</strong>
                            {achievement.split(':')[1]}
                          </>
                        ) : (
                          achievement
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="bg-[var(--dark-primary)] px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
