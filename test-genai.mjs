import { GoogleGenAI } from '@google/genai';
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

async function run() {
  try {
    const req = {
      model: 'gemini-2.0-flash-001',
      contents: [{ role: 'user', parts: [{ text: 'Hello' }] }]
    };
    const response = await ai.models.generateContent(req);
    console.log(response.text);
  } catch(e) {
    console.error("gemini-2.0-flash-001 failed:", e.message);
  }
}

run();
