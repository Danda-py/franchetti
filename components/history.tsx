"use client"

import { useLanguage } from "@/contexts/language-context"
import { useContent } from "@/contexts/content-context"

export function History() {
  const { language } = useLanguage()
  const { content } = useContent()

  const timeline = {
    en: [
      {
        period: "1950s - The Beginning",
        text: "The Franchetti family's passion for fruit growing was born in the 1950s with Aldo Franchetti, who cultivated the first apple trees on his own land, contributing to the agricultural development of Valtellina.",
      },
      {
        period: "2004 - Modernization",
        text: "In 2004, his son Alberto decided to dedicate himself completely to the business, transforming the small family reality into a modern and structured company, capable of meeting market standards.",
      },
      {
        period: "2014 - Organic Transition",
        text: "In 2014, sons Daniele and Massimo permanently joined the company, initiating a process of innovation and diversification, focusing on organic agriculture as an ethical and sustainable choice.",
      },
      {
        period: "Today",
        text: "Today, Franchetti company combines tradition, innovation and respect for the environment, maintaining a focus on the future and the quality of its products.",
      },
    ],
    it: [
      {
        period: "Anni '50 - Gli Inizi",
        text: "La passione della famiglia Franchetti per la frutticoltura nasce negli anni '50 con Aldo Franchetti, che coltiva i primi meli sui propri terreni, contribuendo allo sviluppo agricolo della Valtellina.",
      },
      {
        period: "2004 - Modernizzazione",
        text: "Nel 2004, il figlio Alberto decide di dedicarsi completamente all'attività, trasformando la piccola realtà familiare in un'azienda moderna e strutturata, capace di rispondere agli standard del mercato.",
      },
      {
        period: "2014 - Transizione Biologica",
        text: "Nel 2014 entrano stabilmente in azienda i figli Daniele e Massimo, che avviano un processo di innovazione e diversificazione, puntando sull'agricoltura biologica come scelta etica e sostenibile.",
      },
      {
        period: "Oggi",
        text: "Oggi l'azienda Franchetti unisce tradizione, innovazione e rispetto per l'ambiente, mantenendo uno sguardo rivolto al futuro e alla qualità dei propri prodotti.",
      },
    ],
  }

  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {content[language].history.title}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {timeline[language].map((item, index) => (
                  <div key={index}>
                    <p className="font-semibold text-foreground mb-2">{item.period}</p>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/traditional-italian-orchard-vintage-style.jpg"
                alt="Company history"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
