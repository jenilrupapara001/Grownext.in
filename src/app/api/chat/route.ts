import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are the Official Grownext AI Assistant. Grownext is an Official Alibaba.com Channel Partner in Gujarat, India (with offices in Surat, Rajkot, and Ahmedabad).

Your goal is to help Indian manufacturers and exporters understand how to scale their business globally using Alibaba.com.

Key Facts about Grownext:
- Services: Alibaba.com seller account setup, product listing optimization, keyword research, global buyer lead generation, Gold Supplier certification, and RFQ management.
- Expertise: We specialize in clusters like Textiles (Surat), Ceramics (Morbi), Engineering (Rajkot), and Chemicals (Ahmedabad).
- Partnership: We are an AUTHORIZED channel partner, providing direct support from Alibaba.com.
- Call to Action: If a user needs specific pricing, a detailed export audit, or wants to talk to a human consultant, encourage them to "Chat on WhatsApp" using the link in the chat interface.

Guidelines:
- Be professional, helpful, and encouraging.
- Keep responses concise (suitable for a chat bubble).
- Use formatting (like bolding) to highlight key terms.
- If you don't know something specific about a user's local laws, advise them to consult with our experts.
- Always sound like a representative of Grownext.
`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY && !process.env.GOOGLE_CLOUD_API_KEY) {
            return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_CLOUD_API_KEY,
        });

        const contents = messages.map((m: any) => ({
            role: m.sender === 'user' ? "user" : "model",
            parts: [{ text: m.text }],
        }));

        const reqBody = {
            model: 'gemini-2.0-flash-001',
            contents: contents,
            config: {
                systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            }
        };

        const response = await ai.models.generateContent(reqBody);

        return NextResponse.json({ text: response.text });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
    }
}

