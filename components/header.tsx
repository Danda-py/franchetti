"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">Franchetti Frutta</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("company")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Company
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Why Ethical
            </button>
            <button
              onClick={() => scrollToSection("history")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              History
            </button>
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("territory")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Territory
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("company")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Company
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Why Ethical
            </button>
            <button
              onClick={() => scrollToSection("history")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              History
            </button>
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("territory")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Territory
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
