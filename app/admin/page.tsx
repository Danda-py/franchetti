"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAuthToken, clearAuthToken } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useContent } from "@/contexts/content-context"
import { LogOut, Save, Languages } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const router = useRouter()
  const { content, updateContent } = useContent()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState<"en" | "it">("en")
  const [saved, setSaved] = useState(false)
  const [translating, setTranslating] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (!getAuthToken()) {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    clearAuthToken()
    router.push("/")
  }

  const handleSave = () => {
    setSaved(true)
    toast({
      title: "Changes saved",
      description: "Your content has been updated successfully.",
    })
    setTimeout(() => setSaved(false), 2000)
  }

  const handleAutoTranslate = async () => {
    setTranslating(true)
    const sourceLang = activeLanguage
    const targetLang = activeLanguage === "en" ? "it" : "en"

    try {
      const sections = Object.keys(content[sourceLang]) as Array<keyof typeof content.en>

      for (const section of sections) {
        const sectionData = content[sourceLang][section]
        const fields = Object.keys(sectionData)

        for (const field of fields) {
          const text = sectionData[field as keyof typeof sectionData]

          const response = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, targetLang }),
          })

          const data = await response.json()

          if (data.translation) {
            updateContent(targetLang, section, field, data.translation)
          }
        }
      }

      toast({
        title: "Translation complete",
        description: `Content has been translated to ${targetLang === "it" ? "Italian" : "English"}.`,
      })
    } catch (error) {
      toast({
        title: "Translation failed",
        description: "There was an error translating the content.",
        variant: "destructive",
      })
    } finally {
      setTranslating(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Content Editor</h1>
            <p className="text-muted-foreground">Edit website content for both languages</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs value={activeLanguage} onValueChange={(v) => setActiveLanguage(v as "en" | "it")} className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="en">English</TabsTrigger>
              <TabsTrigger value="it">Italiano</TabsTrigger>
            </TabsList>
            <Button onClick={handleAutoTranslate} disabled={translating} variant="secondary" className="gap-2">
              <Languages className="h-4 w-4" />
              {translating ? "Translating..." : `Auto-translate to ${activeLanguage === "en" ? "Italian" : "English"}`}
            </Button>
          </div>

          <TabsContent value={activeLanguage} className="space-y-6">
            {/* Hero Section */}
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Main banner content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Title</Label>
                  <Textarea
                    id="hero-title"
                    value={content[activeLanguage].hero.title}
                    onChange={(e) => updateContent(activeLanguage, "hero", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={content[activeLanguage].hero.subtitle}
                    onChange={(e) => updateContent(activeLanguage, "hero", "subtitle", e.target.value)}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Ethical Company Section */}
            <Card>
              <CardHeader>
                <CardTitle>Ethical Company Section</CardTitle>
                <CardDescription>What is an ethical company</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ethical-title">Title</Label>
                  <Textarea
                    id="ethical-title"
                    value={content[activeLanguage].ethicalCompany.title}
                    onChange={(e) => updateContent(activeLanguage, "ethicalCompany", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ethical-description">Description</Label>
                  <Textarea
                    id="ethical-description"
                    value={content[activeLanguage].ethicalCompany.description}
                    onChange={(e) => updateContent(activeLanguage, "ethicalCompany", "description", e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Why Ethical Section */}
            <Card>
              <CardHeader>
                <CardTitle>Why Ethical Section</CardTitle>
                <CardDescription>Why the company is ethical</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="why-title">Title</Label>
                  <Textarea
                    id="why-title"
                    value={content[activeLanguage].whyEthical.title}
                    onChange={(e) => updateContent(activeLanguage, "whyEthical", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="why-description">Description</Label>
                  <Textarea
                    id="why-description"
                    value={content[activeLanguage].whyEthical.description}
                    onChange={(e) => updateContent(activeLanguage, "whyEthical", "description", e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* History Section */}
            <Card>
              <CardHeader>
                <CardTitle>History Section</CardTitle>
                <CardDescription>Company history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="history-title">Title</Label>
                  <Textarea
                    id="history-title"
                    value={content[activeLanguage].history.title}
                    onChange={(e) => updateContent(activeLanguage, "history", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="history-content">Content</Label>
                  <Textarea
                    id="history-content"
                    value={content[activeLanguage].history.content}
                    onChange={(e) => updateContent(activeLanguage, "history", "content", e.target.value)}
                    rows={8}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Philosophy Section */}
            <Card>
              <CardHeader>
                <CardTitle>Philosophy Section</CardTitle>
                <CardDescription>Company philosophy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="philosophy-title">Title</Label>
                  <Textarea
                    id="philosophy-title"
                    value={content[activeLanguage].philosophy.title}
                    onChange={(e) => updateContent(activeLanguage, "philosophy", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="philosophy-content">Content</Label>
                  <Textarea
                    id="philosophy-content"
                    value={content[activeLanguage].philosophy.content}
                    onChange={(e) => updateContent(activeLanguage, "philosophy", "content", e.target.value)}
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Products Section */}
            <Card>
              <CardHeader>
                <CardTitle>Products Section</CardTitle>
                <CardDescription>Organic products information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="products-title">Title</Label>
                  <Textarea
                    id="products-title"
                    value={content[activeLanguage].products.title}
                    onChange={(e) => updateContent(activeLanguage, "products", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="products-description">Description</Label>
                  <Textarea
                    id="products-description"
                    value={content[activeLanguage].products.description}
                    onChange={(e) => updateContent(activeLanguage, "products", "description", e.target.value)}
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Territory Section */}
            <Card>
              <CardHeader>
                <CardTitle>Territory Section</CardTitle>
                <CardDescription>Territory and location information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="territory-title">Title</Label>
                  <Textarea
                    id="territory-title"
                    value={content[activeLanguage].territory.title}
                    onChange={(e) => updateContent(activeLanguage, "territory", "title", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="territory-description">Description</Label>
                  <Textarea
                    id="territory-description"
                    value={content[activeLanguage].territory.description}
                    onChange={(e) => updateContent(activeLanguage, "territory", "description", e.target.value)}
                    rows={8}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center">
          <Button onClick={handleSave} size="lg" className="gap-2">
            <Save className="h-5 w-5" />
            {saved ? "Saved!" : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  )
}
