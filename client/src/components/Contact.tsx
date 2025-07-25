import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const handleEmailClick = () => {
    window.location.href = "mailto:ankitjkumarjha.dev@gmail.com";
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[var(--dark-secondary)]/30">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="text-center">
            <div className="bg-[var(--dark-secondary)] rounded-xl p-12 max-w-2xl mx-auto">
              <p className="text-lg text-[var(--text-gray)] mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and backend architecture challenges. 
                Let's connect and build something amazing together.
              </p>
              
              <div 
                onClick={handleEmailClick}
                className="inline-flex items-center gap-4 bg-primary hover:bg-primary/90 transition-all duration-300 px-8 py-4 rounded-lg cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white text-lg">Email Me</h4>
                  <p className="text-white/80">ankitjkumarjha.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
