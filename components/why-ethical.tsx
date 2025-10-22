import { CheckCircle } from "lucide-react"

export function WhyEthical() {
  const reasons = [
    {
      title: "Organic Certification",
      description:
        "All our products are certified organic, guaranteeing the absence of pesticides and harmful chemicals.",
    },
    {
      title: "Biological Defense",
      description:
        "We promote biodiversity by favoring insects and animals useful to natural balance, avoiding chemical products and protecting microorganisms.",
    },
    {
      title: "Respect for Territory",
      description:
        "We cultivate in respect of Valtellina, preserving local agricultural traditions and biodiversity on the Rhon alluvial fan.",
    },
    {
      title: "Sustainable Techniques",
      description:
        "We adopt sustainable cultivation techniques to improve production and the environment, protecting this natural wealth.",
    },
    {
      title: "Quality and Authenticity",
      description:
        "Thanks to Valtellina's climate and thermal excursions, our fruit has unique organoleptic qualities.",
    },
    {
      title: "Environmental Commitment",
      description:
        "We are committed to protecting the territory's natural richness, promoting a lifestyle based on environmental respect and sustainable development.",
    },
  ]

  return (
    <section id="why" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Why We Are an Ethical Company
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Our ethics is not just a statement of intent, but a concrete commitment that guides our daily choices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
