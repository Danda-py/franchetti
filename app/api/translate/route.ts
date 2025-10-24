import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { text, targetLang } = await request.json()

    const response = await fetch("https://api.mymemory.translated.net/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    // Using MyMemory Translation API (free tier)
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${targetLang === "it" ? "en|it" : "it|en"}`

    const translationResponse = await fetch(url)
    const data = await translationResponse.json()

    if (data.responseStatus === 200) {
      return NextResponse.json({ translation: data.responseData.translatedText })
    } else {
      return NextResponse.json({ error: "Translation failed" }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Translation service error" }, { status: 500 })
  }
}
