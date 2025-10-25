"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Content {
  hero: {
    title: string
    subtitle: string
  }
  ethicalCompany: {
    title: string
    description: string
  }
  whyEthical: {
    title: string
    description: string
  }
  history: {
    title: string
    content: string
  }
  philosophy: {
    title: string
    content: string
  }
  products: {
    title: string
    description: string
  }
  territory: {
    title: string
    description: string
  }
}

const defaultContent: Record<"en" | "it", Content> = {
  en: {
    hero: {
      title: "Franchetti Frutta",
      subtitle: "Organic Excellence from Valtellina",
    },
    ethicalCompany: {
      title: "What is an Ethical Company",
      description:
        "Franchetti company, located in Valtellina, has been cultivating apples and kiwis for years, enhancing a territory renowned for tourism, landscapes, cuisine, and heroic agriculture on the terraces of the Adda valley.",
    },
    whyEthical: {
      title: "Why They Are an Ethical Company",
      description:
        "The Franchetti family, with a solid agricultural tradition, has transitioned to sustainable production, becoming among the first in Valtellina to cultivate organic apples and kiwis. Daniele and Massimo lead the change towards agriculture that respects the environment, territory, and consumers, across 22 hectares of land dedicated to apple trees, kiwis, and fields.",
    },
    history: {
      title: "History",
      content:
        "The Franchetti family's passion for fruit growing began in the 1950s with Aldo Franchetti, who cultivated the first apple trees on his own land, contributing to the agricultural development of Valtellina. In 2004, his son Alberto decided to dedicate himself completely to the business, transforming the small family reality into a modern and structured company capable of meeting market standards. In 2014, his sons Daniele and Massimo permanently joined the company, initiating a process of innovation and diversification, focusing on organic agriculture as an ethical and sustainable choice. Today, Franchetti company combines tradition, innovation, and respect for the environment, maintaining a forward-looking approach to the future and the quality of their products.",
    },
    philosophy: {
      title: "Philosophy",
      content:
        "The Franchetti family, with a solid agricultural tradition, has transitioned to sustainable production, becoming among the first in Valtellina to cultivate organic apples and kiwis. Daniele and Massimo lead the change towards agriculture that respects the environment, territory, and consumers, across 22 hectares of land dedicated to apple trees, kiwis, and fields.",
    },
    products: {
      title: "Organic Products",
      description:
        "Franchetti company cultivates according to the principles of organic agriculture, respecting the territory and guaranteeing high-quality products. They promote biodiversity by favoring insects and animals useful to natural balance. Thanks to Biological Defense, they avoid the use of chemical products, protect microorganisms and the environment, and obtain healthy fruits without residues and with minimal environmental impact.",
    },
    territory: {
      title: "Territory",
      description:
        "The lands of Franchetti farm are located on the Rhon alluvial fan, between Ponte in Valtellina and Tresivio, in an ideal area for fruit growing thanks to the climate and sun exposure. Valtellina, rich in biodiversity and characterized by strong temperature variations, gives the fruit unique organoleptic qualities. The company is committed to protecting this natural wealth, adopting sustainable cultivation techniques to improve production and the environment. Inserted in a territory that values agri-food, tourism, and culture, Franchetti shares and promotes a lifestyle based on environmental respect, quality, and sustainable development.",
    },
  },
  it: {
    hero: {
      title: "Franchetti Frutta",
      subtitle: "Eccellenza Biologica dalla Valtellina",
    },
    ethicalCompany: {
      title: "Cos'è un'Azienda Etica",
      description:
        "L'azienda Franchetti, situata in Valtellina, opera da anni nella coltivazione di mele e kiwi, valorizzando il territorio noto per turismo, paesaggi, cucina e agricoltura eroica sui terrazzamenti della valle dell'Adda.",
    },
    whyEthical: {
      title: "Perché Sono un'Azienda Etica",
      description:
        "La famiglia Franchetti, con una solida tradizione agricola, è passata a una produzione sostenibile diventando tra le prime in Valtellina a coltivare mele e kiwi biologici. Daniele e Massimo guidano il cambiamento verso un'agricoltura rispettosa di ambiente, territorio e consumatori, su 22 ettari di terreni dedicati a meli, kiwi e campi.",
    },
    history: {
      title: "Storia",
      content:
        "La passione della famiglia Franchetti per la frutticoltura nasce negli anni '50 con Aldo Franchetti, che coltiva i primi meli sui propri terreni, contribuendo allo sviluppo agricolo della Valtellina. Nel 2004, il figlio Alberto decide di dedicarsi completamente all'attività, trasformando la piccola realtà familiare in un'azienda moderna e strutturata, capace di rispondere agli standard del mercato. Nel 2014 entrano stabilmente in azienda i figli Daniele e Massimo, che avviano un processo di innovazione e diversificazione, puntando sull'agricoltura biologica come scelta etica e sostenibile. Oggi l'azienda Franchetti unisce tradizione, innovazione e rispetto per l'ambiente, mantenendo uno sguardo rivolto al futuro e alla qualità dei propri prodotti.",
    },
    philosophy: {
      title: "Filosofia",
      content:
        "La famiglia Franchetti, con una solida tradizione agricola, è passata a una produzione sostenibile diventando tra le prime in Valtellina a coltivare mele e kiwi biologici. Daniele e Massimo guidano il cambiamento verso un'agricoltura rispettosa di ambiente, territorio e consumatori, su 22 ettari di terreni dedicati a meli, kiwi e campi.",
    },
    products: {
      title: "Prodotti Biologici",
      description:
        "L'azienda agricola Franchetti coltiva secondo i principi dell'agricoltura biologica, rispettando il territorio e garantendo prodotti di alta qualità. Promuove la biodiversità favorendo insetti e animali utili all'equilibrio naturale. Grazie alla Difesa Biologica, evita l'uso di prodotti chimici, tutela microrganismi e ambiente, e ottiene frutti sani, senza residui e con impatto ambientale minimo.",
    },
    territory: {
      title: "Territorio",
      description:
        "I terreni dell'azienda agricola Franchetti si trovano sul conoide del Rhon, tra Ponte in Valtellina e Tresivio, in un'area ideale per la frutticoltura grazie al clima e all'esposizione solare. La Valtellina, ricca di biodiversità e caratterizzata da forti escursioni termiche, dona alla frutta qualità organolettiche uniche. L'azienda è impegnata nella tutela di questa ricchezza naturale, adottando tecniche colturali sostenibili per migliorare le produzioni e l'ambiente. Inserita in un territorio che valorizza agroalimentare, turismo e cultura, la Franchetti condivide e promuove uno stile di vita fondato su rispetto ambientale, qualità e sviluppo sostenibile.",
    },
  },
}

interface ContentContextType {
  content: Record<"en" | "it", Content>
  updateContent: (lang: "en" | "it", section: keyof Content, field: string, value: string) => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState(defaultContent)

  const updateContent = (lang: "en" | "it", section: keyof Content, field: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [section]: {
          ...prev[lang][section],
          [field]: value,
        },
      },
    }))
  }

  return <ContentContext.Provider value={{ content, updateContent }}>{children}</ContentContext.Provider>
}

export function useContent() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider")
  }
  return context
}
