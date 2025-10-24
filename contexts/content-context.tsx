"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface Content {
  hero: { title: string; subtitle: string }
  ethicalCompany: { title: string; description: string }
  whyEthical: { title: string; description: string }
  history: { title: string; content: string }
  philosophy: { title: string; content: string }
  products: { title: string; description: string }
  territory: { title: string; description: string }
}

// Contenuti di default in caso il server non risponda
const defaultContent: Record<"en" | "it", Content> = {
  en: {
    hero: { title: "Franchetti Frutta", subtitle: "Organic Excellence from Valtellina" },
    ethicalCompany: {
      title: "What is an Ethical Company",
      description:
        "Franchetti company, located in Valtellina, has been cultivating apples and kiwis for years...",
    },
    whyEthical: {
      title: "Why They Are an Ethical Company",
      description:
        "The Franchetti family, with a solid agricultural tradition, has transitioned to sustainable production...",
    },
    history: { title: "History", content: "The Franchetti family's passion for fruit growing began..." },
    philosophy: { title: "Philosophy", content: "The Franchetti family, with a solid agricultural tradition..." },
    products: {
      title: "Organic Products",
      description: "Franchetti company cultivates according to the principles of organic agriculture...",
    },
    territory: {
      title: "Territory",
      description:
        "The lands of Franchetti farm are located on the Rhon alluvial fan, between Ponte in Valtellina and Tresivio...",
    },
  },
  it: {
    hero: { title: "Franchetti Frutta", subtitle: "Eccellenza Biologica dalla Valtellina" },
    ethicalCompany: {
      title: "Cos'è un'Azienda Etica",
      description:
        "L'azienda Franchetti, situata in Valtellina, opera da anni nella coltivazione di mele e kiwi...",
    },
    whyEthical: {
      title: "Perché Sono un'Azienda Etica",
      description:
        "La famiglia Franchetti, con una solida tradizione agricola, è passata a una produzione sostenibile...",
    },
    history: { title: "Storia", content: "La passione della famiglia Franchetti per la frutticoltura nasce negli anni '50..." },
    philosophy: { title: "Filosofia", content: "La famiglia Franchetti, con una solida tradizione agricola..." },
    products: {
      title: "Prodotti Biologici",
      description: "L'azienda agricola Franchetti coltiva secondo i principi dell'agricoltura biologica...",
    },
    territory: {
      title: "Territorio",
      description:
        "I terreni dell'azienda agricola Franchetti si trovano sul conoide del Rhon, tra Ponte in Valtellina e Tresivio...",
    },
  },
}

interface ContentContextType {
  content: Record<"en" | "it", Content>
  updateContent: (lang: "en" | "it", section: keyof Content, field: string, value: string) => void
  reloadContent: () => Promise<void>
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Record<"en" | "it", Content>>(defaultContent)

  // Caricamento contenuti dal server all'avvio
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch("/api/content/get")
        if (!res.ok) throw new Error("Failed to fetch content from server")
        const data = await res.json()
        if (data.en && data.it) setContent(data)
      } catch (error) {
        console.warn("Unable to fetch content, using default:", error)
        setContent(defaultContent)
      }
    }

    fetchContent()
  }, [])

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

  // Ricarica i contenuti dal server manualmente
  const reloadContent = async () => {
    try {
      const res = await fetch("/api/content/get")
      if (!res.ok) throw new Error("Failed to fetch content")
      const data = await res.json()
      if (data.en && data.it) setContent(data)
    } catch (error) {
      console.warn("Reload failed, keeping existing content:", error)
    }
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, reloadContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) throw new Error("useContent must be used within a ContentProvider")
  return context
}
