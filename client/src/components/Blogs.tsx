import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blogs" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Latest Blogs</h2>
          
          <div className="text-center">
            <div className="bg-[var(--dark-secondary)] rounded-xl p-12 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">
                <svg 
                  className="mx-auto text-green-400" 
                  width="64" 
                  height="64" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 0A6.8 6.8 0 0 0 3.4 18.9L2.28 17.78a8.18 8.18 0 0 1 8.91-1.64 8.18 8.18 0 0 1 8.91 1.64l-1.12 1.12A6.8 6.8 0 0 0 13.54 12zm-6.77 0a6.8 6.8 0 0 1 6.77 0 6.8 6.8 0 0 0 5.43 6.9l1.12-1.12a8.18 8.18 0 0 1-8.91-1.64 8.18 8.18 0 0 1-8.91 1.64l1.12 1.12A6.8 6.8 0 0 0 6.77 12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Medium Publications</h3>
              <p className="text-[var(--text-gray)] mb-8 leading-relaxed">
                I share insights about backend development, system architecture, and best practices in Node.js development. 
                Follow my technical journey and learn from real-world experiences.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a 
                  href="https://medium.com/@ankitkumarjha0407" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <span>Read My Articles</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
