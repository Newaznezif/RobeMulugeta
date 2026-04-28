import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const apiKey = process.env.OPENAI_API_KEY;
const openai = apiKey ? new OpenAI({ apiKey }) : null;

// Comprehensive Local Knowledge Base for "Free Mode"
const KNOWLEDGE = {
  projects: [
    "Robe's crown jewel is 'Free Education Ethiopia', a digital platform that has empowered over 150,000 students with localized learning materials and AI-driven recommendations.",
    "He has also developed an AI Recruitment Assistant that uses NLP to streamline hiring processes with 94% accuracy.",
    "His work often bridges the gap between high-end AI systems and social impact in the education sector.",
  ],
  leadership: [
    "Robe currently serves as the President of the Access Alumni Association Ethiopia, leading strategic youth initiatives nationwide.",
    "He was a Project Manager at UNAET AU, focusing on African Union diplomacy and youth engagement.",
    "With 6+ years of leadership, Robe has a proven track record of managing international programs and scaling tech startups.",
  ],
  global: [
    "Robe is a YALI Regional Leadership Center (Kenya) alumnus, where he focused on civic leadership.",
    "He was selected for the PAYLP Exchange Program in the USA, a prestigious leadership development initiative supported by the U.S. State Department.",
    "He is an active member of the U.S. Exchange Alumni network, collaborating on global youth development projects.",
  ],
  skills: [
    "Technical: AI Systems, Full-Stack Development (React/Node.js), Cloud Architecture, and Data Science.",
    "Professional: Strategic Leadership, Project Management, Public Speaking, and Youth Advocacy.",
  ],
  contact: "You can reach Robe at robestmulugeta12@gmail.com or via phone at +251 993 479 783. He's also active on LinkedIn!",
};

const getLocalResponse = (message: string) => {
  const msg = message.toLowerCase();
  
  // Project matching
  if (msg.includes("project") || msg.includes("work") || msg.includes("build") || msg.includes("fee")) {
    return KNOWLEDGE.projects.join(" ");
  }
  
  // Leadership matching
  if (msg.includes("lead") || msg.includes("experience") || msg.includes("job") || msg.includes("president") || msg.includes("manage")) {
    return KNOWLEDGE.leadership.join(" ");
  }
  
  // Global matching
  if (msg.includes("global") || msg.includes("yali") || msg.includes("usa") || msg.includes("international") || msg.includes("program")) {
    return KNOWLEDGE.global.join(" ");
  }
  
  // Skills matching
  if (msg.includes("skill") || msg.includes("tech") || msg.includes("know") || msg.includes("ability")) {
    return KNOWLEDGE.skills.join(" ");
  }

  // Contact matching
  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("hire") || msg.includes("talk")) {
    return KNOWLEDGE.contact;
  }

  // Generic "tell me more" or vague queries
  if (msg.length < 10 || msg.includes("tell") || msg.includes("more") || msg.includes("who")) {
    return "I'm Robe Mulugeta's AI. Robe is a Technology & Education Leader who founded a platform for 150K students. Would you like to hear about his [Projects], [Leadership Experience], or [Global Programs]?";
  }
  
  return "That's interesting! I'm specifically trained to talk about Robe's career. Ask me about his projects, skills, or his work with the African Union!";
};

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1]?.content || "";

  if (!openai) {
    return NextResponse.json({
      content: "[Free Mode] " + getLocalResponse(lastMessage),
    });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are the AI assistant for Robe Mulugeta. Answer professionally about his work, leadership, and projects." },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      content: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({
      content: "[Fallback Mode] " + getLocalResponse(lastMessage),
    });
  }
}
