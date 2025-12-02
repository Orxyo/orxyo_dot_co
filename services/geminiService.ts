import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: In a real production environment, this should ideally be proxied through a backend
// to protect the API key, but for this client-side demo, we use the env variable directly.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in the environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Generates a response from the "Virtual Consultant"
 */
export const generateConsultantResponse = async (
  userMessage: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "I apologize, but I am currently offline due to configuration issues. Please contact us directly via email.";
  }

  try {
    // We use gemini-2.5-flash for speed and efficiency in a chat context
    const model = 'gemini-2.5-flash';

    const systemInstruction = `
      You are "Orion", the virtual senior consultant for ORXYO. 
      ORXYO is a boutique consulting firm specializing in:
      1. Operational Strategy (Scaling, efficiency)
      2. Workflow Optimization (Process automation, removing bottlenecks)
      3. Financial Services Consulting (Risk management, fintech integration)

      Your goal is to be professional, concise, and helpful. 
      If a user asks about services, explain how ORXYO can help.
      If a user asks a general business question, provide a high-level strategic insight (1-2 paragraphs max) and suggest they book a consultation for a deep dive.
      Tone: Sophisticated, knowledgeable, empathetic, corporate but modern.
      Do not make up fake case studies.
    `;

    const contents = [
      ...history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      {
        role: 'user',
        parts: [{ text: userMessage }]
      }
    ];

    const response = await ai.models.generateContent({
      model,
      contents: contents as any, // Type assertion for simple contents structure
      config: {
        systemInstruction,
        temperature: 0.7,
        // Fix: Removed maxOutputTokens as it should not be set without thinkingBudget for Gemini 2.5 models
      }
    });

    return response.text || "I'm processing that thought, but couldn't articulate a response just now.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary issue connecting to our strategy engine. Please try again in a moment.";
  }
};