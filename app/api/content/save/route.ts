import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Percorso del file dove salvare il contenuto
    const filePath = path.join(process.cwd(), "data", "content.json")

    // Crea la cartella se non esiste
    fs.mkdirSync(path.dirname(filePath), { recursive: true })

    // Salva il file
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), "utf-8")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving content:", error)
    return NextResponse.json({ success: false, error: "Failed to save content" }, { status: 500 })
  }
}
