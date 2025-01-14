export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary isometric-grid">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Jeroen Jeuris</h3>
            <div className="space-y-6">
              <p className="text-lg">
                As a young and bold architect, I bring fresh perspectives to every project,
                challenging conventional design norms while maintaining functionality.
              </p>
              <div className="w-24 h-1 bg-secondary/10"></div>
              <p className="text-lg">
                My approach combines modern aesthetics with sustainable practices,
                creating spaces that are both visually striking and environmentally conscious.
              </p>
            </div>
          </div>
          <div className="bg-secondary/5 rounded-lg">
            <div className="h-full min-h-[400px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}