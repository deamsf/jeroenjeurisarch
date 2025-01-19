export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary isometric-grid">
      <div className="container">
        <h2 className="section-title">Over mezelf</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Jeroen Jeuris</h3>
            <div className="space-y-6">
              <p className="text-lg">
                Ik combineer creativiteit en ervaring om unieke, duurzame projecten te realiseren die perfect aansluiten bij jouw leefwereld. In mijn ontwerpen staan esthetiek en functionaliteit centraal, met aandacht voor circulariteit en regelgeving.
              </p>
              <div className="w-24 h-1 bg-secondary/10"></div>
              <p className="text-lg">
                Met een persoonlijke aanpak betrek ik jou vanaf de eerste stap bij het ontwerpproces, om samen te komen tot een harmonieus eindresultaat dat niet alleen innovatief is, maar ook een blijvende positieve impact heeft.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/3] max-h-[400px]">
              <div className="absolute inset-0 bg-secondary/5 rounded-lg transform -rotate-6 transition-transform duration-300 group-hover:rotate-0"></div>
              <div className="absolute inset-0 bg-accent/5 rounded-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-0"></div>
              <div className="relative h-full overflow-hidden rounded-lg">
                <img 
                  src="/img/jeroen.jpg" 
                  alt="Jeroen Jeuris" 
                  title="Jeroen Jeuris"
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/20"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}