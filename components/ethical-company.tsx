ocraty"use client"

import { Leaf, Heart, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useContent } from "@/contexts/content-context"

export function EthicalCompany() {
  const { language } = useLanguage()
  const { content } = useContent()

  const cards = {
    en: {
      sustainability: {
        title: "Sustainability",
        desc: "Franchetti Frutta adopts organic farming regulations, avoiding the use of chemical substances, to guarantee healthy and environmentally friendly products.",
      },
      quality: { title: "Quality", desc: "Certified organic products, cultivated with passion and dedication" },
      transparency: {
        title: "Transparency",
        desc: "Direct relationship with consumers and complete traceability of products",
      },
    },
    it: {
      sustainability: {
        title: "Sostenibilità",
        desc: "Franchetti Frutta adotta rigorosi disciplinari di agricoltura biologica, evitando l'uso di pesticidi chimici, per garantire prodotti sani e rispettosi dell'ambiente",
      },
      quality: { title: "Qualità", desc: "Prodotti biologici certificati, coltivati con passione e dedizione" },
      transparency: {
        title: "Trasparenza",
        desc: "Rapporto diretto con i consumatori e completa tracciabilità dei prodotti",
      },
    },
  }

  return (
    <section id="company" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {content[language].ethicalCompany.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {content[language].ethicalCompany.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">{cards[language].sustainability.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{cards[language].sustainability.desc}</p>
          </div>

          <div className="text-center p-8 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">{cards[language].quality.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{cards[language].quality.desc}</p>
          </div>

          <div className="text-center p-8 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">{cards[language].transparency.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{cards[language].transparency.desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
