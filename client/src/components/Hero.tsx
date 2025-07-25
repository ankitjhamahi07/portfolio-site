import { MapPin, Mail, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCodeSnippet from "./AnimatedCodeSnippet";

export default function Hero() {
  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/attached_assets/Ankit_Kumar_Jha_Resume_1753447442464.pdf';
    link.download = 'Ankit_Kumar_Jha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Ankit Kumar Jha
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Development Engineer III
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Backend Systems • Node.js • Microservices • Scalable Architecture
          </p>
        </div>

        <AnimatedCodeSnippet />

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>ankitjkumarjha.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>ankitkjha.netlify.app</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 px-8 py-3">
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            onClick={handleResumeDownload}
            className="border-border hover:border-primary px-8 py-3 flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
