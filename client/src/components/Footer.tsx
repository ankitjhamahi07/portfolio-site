export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © 2024 Ankit Kumar Jha. Built with passion for clean code and scalable systems.
        </p>
        <div className="mt-4 flex justify-center items-center gap-2 text-sm text-muted-foreground">
          <span>Crafted with</span>
          <span className="text-red-500 animate-pulse">♥</span>
          <span>using React + TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
