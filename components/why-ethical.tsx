"use client"

import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useContent } from "@/contexts/content-context"

export function WhyEthical() {
  const { language } = useLanguage()
  const { content } = useContent()

  const reasons = {
    en: [
      {
        title: "Organic Certification",
        description:
          "All products are certified organic, guaranteeing the absence of pesticides and harmful chemicals.",
      },
      {
        title: "Biological Defense",
        description:
          "The company promotes biodiversity by favoring insects and animals useful to natural balance, avoiding chemical products and protecting microorganisms.",
      },
      {
        title: "Respect for Territory",
        description:
          "Franchetti cultivates in respect of Valtellina, preserving local agricultural traditions and biodiversity on the Rhon alluvial fan.",
      },
      {
        title: "Sustainable Techniques",
        description:
          "The farm adopts sustainable cultivation techniques to improve production and the environment, protecting this natural wealth.",
      },
      {
        title: "Quality and Authenticity",
        description:
          "Thanks to Valtellina's climate and thermal excursions, their fruit has unique organoleptic qualities.",
      },
      {
        title: "Environmental Commitment",
        description:
          "The company is committed to protecting the territory's natural richness, promoting a lifestyle based on environmental respect and sustainable development.",
      },
    ],
    it: [
      {
        title: "Certificazione Biologica",
        description:
          "Tutti i prodotti sono certificati biologici, garantendo l'assenza di pesticidi e sostanze chimiche dannose.",
      },
      {
        title: "Difesa Biologica",
        description:
          "L'azienda promuove la biodiversità favorendo insetti e animali utili all'equilibrio naturale, evitando prodotti chimici e proteggendo i microrganismi.",
      },
      {
        title: "Rispetto del Territorio",
        description:
          "Franchetti coltiva nel rispetto della Valtellina, preservando le tradizioni agricole locali e la biodiversità sul conoide del Rhon.",
      },
      {
        title: "Tecniche Sostenibili",
        description:
          "L'azienda adotta tecniche colturali sostenibili per migliorare le produzioni e l'ambiente, proteggendo questa ricchezza naturale.",
      },
      {
        title: "Qualità e Autenticità",
        description:
          "Grazie al clima della Valtellina e alle escursioni termiche, la loro frutta ha qualità organolettiche uniche.",
      },
      {
        title: "Impegno Ambientale",
        description:
          "L'azienda è impegnata nella tutela della ricchezza naturale del territorio, promuovendo uno stile di vita basato sul rispetto ambientale e lo sviluppo sostenibile.",
      },
    ],
  }

  const subtitle = {
    en: "Their ethics is not just a statement of intent, but a concrete commitment that guides daily choices.",
    it: "La loro etica non è solo una dichiarazione di intenti, ma un impegno concreto che guida le scelte quotidiane.",
  }

  return (
    <section id="why" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {content[language].whyEthical.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">{subtitle[language]}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons[language].map((reason, index) => (
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
