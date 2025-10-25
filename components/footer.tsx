export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Franchetti Frutta</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Organic production of fruit and derivatives in the heart of Valtellina
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacts</h3>
              <div className="text-sm space-y-2 opacity-90">
                <p>Via Molini, 3</p>
                <p>23026 Ponte in Valtellina (SO)</p>
                <p>Via Palù, 39</p>
                <p>23020 Tresivio SO</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Certifications</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Certified organic production
                <br />
                Controlled and traceable supply chain
              </p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Andaloro Davide.</p>
            <p>Codice Sorgente: <a href="https://github.com/Danda-py/franchetti/">Danda-py/franchetti</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
