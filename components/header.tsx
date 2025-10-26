"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en")
  }

  const nav = {
    en: {
      company: "Company",
      why: "Why Ethical",
      history: "History",
      philosophy: "Philosophy",
      products: "Products",
      territory: "Territory",
    },
    it: {
      company: "Azienda",
      why: "Perché Etica",
      history: "Storia",
      philosophy: "Filosofia",
      products: "Prodotti",
      territory: "Territorio",
    },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image src="/logo.png" alt="Franchetti Frutta Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold text-foreground">Franchetti Frutta</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("company")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {nav[language].company}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {nav[language].why}
            </button>
            <button
              onClick={() => scrollToSection("history")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {nav[language].history}
            </button>
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {nav[language].philosophy}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {nav[language].products}
            </button>
            <button
              onClick={() => scrollToSection("territory")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {nav[language].territory}
            </button>
            <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2 bg-transparent">
              <Globe className="h-4 w-4" />
              {language === "en" ? "IT" : "EN"}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="outline" size="sm" onClick={toggleLanguage}>
              {language === "en" ? "IT" : "EN"}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("company")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {nav[language].company}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {nav[language].why}
            </button>
            <button
              onClick={() => scrollToSection("history")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {nav[language].history}
            </button>
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {nav[language].philosophy}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {nav[language].products}
            </button>
            <button
              onClick={() => scrollToSection("territory")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {nav[language].territory}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
