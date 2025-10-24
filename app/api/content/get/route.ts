import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "content.json")
    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : {}

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error reading content:", error)
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 })
  }
}
