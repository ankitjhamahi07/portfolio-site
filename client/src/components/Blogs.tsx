import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Blogs() {
  const { ref, isVisible } = useScrollAnimation();

  // Sample blog data - in a real app, this would come from an API
  const featuredBlogs = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to design and implement microservices architecture that can handle millions of requests...",
      readTime: "8 min read",
      category: "Architecture",
      tags: ["Node.js", "Microservices", "Scalability"],
      publishedAt: "2024-01-15"
    },
    {
      title: "Redis Caching Strategies for High Performance APIs",
      excerpt: "Discover advanced caching patterns and optimization techniques that reduced our API response time by 30%...",
      readTime: "6 min read", 
      category: "Performance",
      tags: ["Redis", "Caching", "Performance"],
      publishedAt: "2024-01-10"
    },
    {
      title: "JWT Authentication Best Practices in 2024",
      excerpt: "Security considerations and implementation patterns for robust authentication systems...",
      readTime: "10 min read",
      category: "Security", 
      tags: ["JWT", "Security", "Authentication"],
      publishedAt: "2024-01-05"
    }
  ];

  return (
    <section id="blogs" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Latest Articles</h2>
          
          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBlogs.map((blog, index) => (
              <article 
                key={index}
                className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
              >
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {blog.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </div>
                  <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Medium CTA */}
          <div className="text-center">
            <div className="bg-card rounded-xl p-8 max-w-2xl mx-auto border">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <svg 
                  className="text-white" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 0A6.8 6.8 0 0 0 3.4 18.9L2.28 17.78a8.18 8.18 0 0 1 8.91-1.64 8.18 8.18 0 0 1 8.91 1.64l-1.12 1.12A6.8 6.8 0 0 0 13.54 12zm-6.77 0a6.8 6.8 0 0 1 6.77 0 6.8 6.8 0 0 0 5.43 6.9l1.12-1.12a8.18 8.18 0 0 1-8.91-1.64 8.18 8.18 0 0 1-8.91 1.64l1.12 1.12A6.8 6.8 0 0 0 6.77 12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Read More on Medium</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dive deeper into backend development, system architecture, and Node.js best practices. 
                Join thousands of developers learning from real-world experiences.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a 
                  href="https://medium.com/@ankitkumarjha0407" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span>Follow on Medium</span>
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
