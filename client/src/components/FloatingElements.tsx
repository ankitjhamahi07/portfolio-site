export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Code Symbols */}
      <div className="absolute top-20 left-10 text-6xl text-primary/10 animate-pulse font-mono">
        {"{ }"}
      </div>
      <div className="absolute top-32 right-20 text-4xl text-green-400/10 animate-bounce font-mono">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-32 left-20 text-5xl text-purple-400/10 animate-pulse font-mono">
        ( )
      </div>
      <div className="absolute bottom-20 right-32 text-3xl text-yellow-400/10 animate-bounce font-mono">
        [ ]
      </div>
      <div className="absolute top-1/2 left-32 text-4xl text-blue-400/10 animate-pulse font-mono">
        =&gt;
      </div>
      <div className="absolute top-1/3 right-10 text-5xl text-red-400/10 animate-bounce font-mono">
        //
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-40 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-green-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-60 left-1/3 w-4 h-4 border border-purple-400/20 rotate-45 animate-pulse"></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-current"></div>
          ))}
        </div>
      </div>
    </div>
  );
}