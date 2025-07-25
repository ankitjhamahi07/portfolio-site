import { useEffect, useState } from "react";

export default function AnimatedCodeSnippet() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "'Node.js', 'Express.js', 'MongoDB', 'Redis', 'WebSockets'";

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const typeEffect = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeEffect);
        }
      }, 50);

      return () => clearInterval(typeEffect);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-slide-up bg-[var(--dark-secondary)] rounded-lg p-6 max-w-2xl mx-auto mb-12 text-left">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="font-mono text-sm">
        <span className="text-[var(--syntax-pink)]">const</span>{" "}
        <span className="text-[var(--syntax-yellow)] ml-2">expertise</span>{" "}
        <span className="text-white ml-2">=</span>
        <span className="text-white ml-2">[</span>
        <div className="ml-4 min-h-[24px]">
          <span className="text-[var(--syntax-green)]">
            {displayedText}
          </span>
          <span className="animate-pulse text-primary">|</span>
        </div>
        <span className="text-white">];</span>
      </div>
    </div>
  );
}
