export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="border-t border-primary/10 pt-8">
          <div className="grid md:grid-cols-2 gap-8 text-primary/60 text-sm">
            <div>
              <p>&copy; {new Date().getFullYear()} Architectural Studio Jeuris. All rights reserved.</p>
            </div>
            <div className="md:text-right">
              <p>
                This practice adheres to the{' '}
                <a
                  href="https://www.architect.be/en/deontologie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors underline"
                >
                  disciplinary code of the Order of Architects
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}