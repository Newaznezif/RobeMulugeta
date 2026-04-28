import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetching from ZenQuotes on the server-side to avoid CORS issues
    const response = await fetch("https://zenquotes.io/api/random", {
      cache: "no-store",
    });
    const data = await response.json();
    
    return NextResponse.json(data[0] || { q: "Innovation distinguishes between a leader and a follower.", a: "Steve Jobs" });
  } catch (error) {
    console.error("Wisdom API Error:", error);
    return NextResponse.json({
      q: "Education is the most powerful weapon which you can use to change the world.",
      a: "Nelson Mandela",
    });
  }
}
