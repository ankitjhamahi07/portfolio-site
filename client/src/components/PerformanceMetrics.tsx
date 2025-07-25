import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

export default function PerformanceMetrics() {
  const { ref, isVisible } = useScrollAnimation();

  const metrics = [
    {
      icon: Users,
      value: "2M+",
      label: "Users Served",
      description: "Scalable systems handling millions of users",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      value: "30%",
      label: "Performance Boost",
      description: "API response time improvement through caching",
      color: "text-green-500"
    },
    {
      icon: Zap,
      value: "4+",
      label: "Years Experience",
      description: "Building enterprise-grade backend systems",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      value: "99.9%",
      label: "System Uptime",
      description: "Reliable and robust architecture design",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref} 
          className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Impact & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${metric.color} group-hover:bg-primary/10 transition-colors duration-300`}>
                  <metric.icon size={32} />
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}