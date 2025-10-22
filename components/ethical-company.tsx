import { Leaf, Heart, Users } from "lucide-react"

export function EthicalCompany() {
  return (
    <section id="company" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What is an Ethical Company
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            An ethical company is an organization that places respect for the environment, people's well-being, and
            transparency towards consumers at the center of its activities. It means producing with conscience,
            preserving the territory and guaranteeing authentic quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Sustainability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Respect for the environment and agricultural practices that preserve biodiversity
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Quality</h3>
            <p className="text-muted-foreground leading-relaxed">
              Certified organic products, cultivated with passion and dedication
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Transparency</h3>
            <p className="text-muted-foreground leading-relaxed">
              Direct relationship with consumers and complete traceability of products
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
