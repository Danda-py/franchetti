export function History() {
  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our History</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-2">1950s - The Beginning</p>
                  <p>
                    The Franchetti family's passion for fruit growing was born in the 1950s with Aldo Franchetti, who
                    cultivated the first apple trees on his own land, contributing to the agricultural development of
                    Valtellina.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">2004 - Modernization</p>
                  <p>
                    In 2004, his son Alberto decided to dedicate himself completely to the business, transforming the
                    small family reality into a modern and structured company, capable of meeting market standards.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">2014 - Organic Transition</p>
                  <p>
                    In 2014, sons Daniele and Massimo permanently joined the company, initiating a process of innovation
                    and diversification, focusing on organic agriculture as an ethical and sustainable choice.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Today</p>
                  <p>
                    Today, Franchetti company combines tradition, innovation and respect for the environment,
                    maintaining a focus on the future and the quality of its products.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img src="/traditional-italian-orchard-vintage-style.jpg" alt="Company history" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
