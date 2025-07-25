import { useEffect, useState } from "react";

export default function AnimatedCodeSnippet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentVariable, setCurrentVariable] = useState("");
  
  const codeSnippets = [
    {
      variable: "name",
      value: "'Ankit Kumar Jha'",
      color: "text-[var(--syntax-green)]"
    },
    {
      variable: "expertise", 
      value: "['Node.js', 'Express.js', 'MongoDB', 'Redis', 'WebSockets']",
      color: "text-[var(--syntax-green)]"
    },
    {
      variable: "projects",
      value: "['Certificate Automation', 'Feedback Service', 'Auth Systems']",
      color: "text-[var(--syntax-green)]"
    },
    {
      variable: "experience",
      value: "'4+ years building scalable backend systems'",
      color: "text-[var(--syntax-green)]"
    }
  ];

  useEffect(() => {
    const currentSnippet = codeSnippets[currentIndex];
    
    const timer = setTimeout(() => {
      let charIndex = 0;
      setCurrentVariable(currentSnippet.variable);
      setDisplayedText("");
      
      const typeEffect = setInterval(() => {
        if (charIndex <= currentSnippet.value.length) {
          setDisplayedText(currentSnippet.value.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeEffect);
          // Wait 2 seconds before starting next snippet
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
          }, 2000);
        }
      }, 50);

      return () => clearInterval(typeEffect);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="animate-slide-up bg-card border rounded-lg p-6 max-w-2xl mx-auto mb-12 text-left shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="font-mono text-sm">
        <span className="text-[var(--syntax-pink)]">const</span>{" "}
        <span className="text-[var(--syntax-yellow)] ml-2">{currentVariable}</span>{" "}
        <span className="text-foreground ml-2">=</span>
        <span className="text-foreground ml-2">
          {currentVariable === "expertise" || currentVariable === "projects" ? "[" : ""}
        </span>
        <div className="ml-4 min-h-[24px]">
          <span className="text-[var(--syntax-green)]">
            {displayedText}
          </span>
          <span className="animate-pulse text-primary">|</span>
        </div>
        <span className="text-foreground">
          {currentVariable === "expertise" || currentVariable === "projects" ? "];" : ";"}
        </span>
      </div>
    </div>
  );
}
