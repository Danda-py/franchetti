"use client"

import { useLanguage } from "@/contexts/language-context"
import { useContent } from "@/contexts/content-context"

export function Philosophy() {
  const { language } = useLanguage()
  const { content } = useContent()

  const paragraphs = {
    en: [
      "They believe that organic agriculture is not just a production method, but a lifestyle. It means listening to the land, respecting its rhythms, preserving its fertility for future generations.",
      "Their mission is to bring the genuineness of Valtellina to Italian tables, offering products that tell a story of passion, dedication and respect. Every jam, every fresh fruit is a bridge between the mountains and your home.",
      "Because eating well means living better, and living better means respecting the world around us.",
    ],
    it: [
      "Credono che l'agricoltura biologica non sia solo un metodo di produzione, ma uno stile di vita. Significa ascoltare la terra, rispettarne i ritmi, preservarne la fertilità per le generazioni future.",
      "La loro missione è portare la genuinità della Valtellina sulle tavole italiane, offrendo prodotti che raccontano una storia di passione, dedizione e rispetto. Ogni marmellata, ogni frutto fresco è un ponte tra le montagne e la vostra casa.",
      "Perché mangiare bene significa vivere meglio, e vivere meglio significa rispettare il mondo che ci circonda.",
    ],
  }

  return (
    <section id="philosophy" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">{content[language].philosophy.title}</h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-balance">{content[language].philosophy.content}</p>
            {paragraphs[language].map((para, index) => (
              <p key={index} className="text-balance">
                {index === paragraphs[language].length - 1 ? <em>{para}</em> : para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
