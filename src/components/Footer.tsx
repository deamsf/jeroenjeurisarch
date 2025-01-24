export default function Footer() {
  return (
    <>
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-primary/10 pt-8">
            <div className="grid md:grid-cols-2 gap-8 text-primary/60 text-sm">
              <div>
                <p>&copy; {new Date().getFullYear()} Architect Jeroen Jeuris. Alle rechten voorbehouden.</p>
                <p>BE0691564468</p>
              </div>
              <div className="md:text-right">
                <p>
                  Dit kantoor volgt de{' '}
                  <a
                    href="https://www.architect.be/architecten/reglement-van-beroepsplichten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors underline"
                  >
                    deontologische regels
                  </a>
                  {' '}van de Orde van Architecten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-secondary py-2 text-primary/40 text-xs text-center">
        Created by{' '}
        <a 
          href="https://3volve.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          3volve
        </a>
      </div>
    </>
  );
}