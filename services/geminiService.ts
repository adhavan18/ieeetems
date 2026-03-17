import { GoogleGenAI, GenerateContentResponse, Content } from "@google/genai";

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateResponse = async (
  prompt: string, 
  history: { role: string; text: string }[]
): Promise<string> => {
  if (!ai) {
    return "AI services are currently offline. Please configure the API Key.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the contents array for multi-turn chat
    const contents: Content[] = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    // Add the current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const config = {
      systemInstruction: "You are the AI Assistant for the IEEE TEMS (Technology and Engineering Management Society) SRM Student Chapter. Your tone is professional, futuristic, and encouraging. You help students understand engineering management, upcoming events, and how to join. Keep responses concise (under 100 words) and helpful.",
    };

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents,
      config
    });

    return response.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Systems are experiencing interference. Please try again later.";
  }
};