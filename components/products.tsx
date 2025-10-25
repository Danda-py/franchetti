"use client"

import { Apple, Droplet, Amphora, Trees } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Products() {
  const { language } = useLanguage()

  const productsByLanguage = {
    en: [
      {
        icon: Apple,
        name: "Organic Apples",
        description: "Fresh organic apples cultivated in our mountain orchards",
      },
      {
        icon: Trees,
        name: "Organic Kiwi Hayward",
        description: "Premium quality organic kiwis grown with traditional methods",
      },
      {
        icon: Droplet,
        name: "Organic Apple Juices & Nectars",
        description: "Pure organic apple juices and nectars made from our harvest",
      },
      {
        icon: Amphora,
        name: "Organic Jams",
        description: "Artisanal organic jams prepared with traditional recipes",
      },
    ],
    it: [
      {
        icon: Apple,
        name: "Mele Biologiche",
        description: "Fresche mele biologiche coltivate nei nostri frutteti di montagna",
      },
      {
        icon: Trees,
        name: "Kiwi Biologico Hayward",
        description: "Kiwi biologici di qualità premium coltivati con metodi tradizionali",
      },
      {
        icon: Droplet,
        name: "Succhi & Nettari di Mela Biologici",
        description: "Succhi e nettari biologici puri preparati con la nostra raccolta",
      },
      {
        icon: Amphora,
        name: "Marmellate Biologiche",
        description: "Marmellate artigianali biologiche preparate secondo ricette tradizionali",
      },
    ],
  }

  const products = productsByLanguage[language]

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {language === "en" ? "Their Products" : "I loro Prodotti"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {language === "en"
              ? "Organic fruit and artisanal derivatives, cultivated and produced with passion in respect of Valtellina tradition."
              : "Frutta biologica e derivati artigianali, coltivati e prodotti con passione nel rispetto della tradizione valtellinese."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img src="/organic-apples-in-orchard.jpg" alt="Organic fruit" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img src="/artisan-jam-jars-with-fruits.jpg" alt="Artisanal jams" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
