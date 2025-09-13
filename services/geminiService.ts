
import { GoogleGenAI, Chat } from "@google/genai";
import { MOCK_SCHEDULE, MOCK_EVENTS, MOCK_DINING, MOCK_LIBRARY } from '../constants';

// A simple cache for the chat session
let chat: Chat | null = null;

const buildContext = (): string => {
  return `
---
AVAILABLE CAMPUS INFORMATION:

**Academic Schedule:**
${MOCK_SCHEDULE.map(c => `- ${c.id} (${c.name}) with ${c.instructor} is at ${c.time} in ${c.room}.`).join('\n')}

**Library Hours:**
- The ${MOCK_LIBRARY.name} is open ${MOCK_LIBRARY.hours.weekdays} on weekdays and ${MOCK_LIBRARY.hours.weekends} on weekends.

**Dining Services:**
${MOCK_DINING.map(d => `- ${d.name} is open ${d.hours}. Specials include: ${d.specials?.join(', ') || 'None'}.`).join('\n')}

**Campus Events:**
${MOCK_EVENTS.map(e => `- ${e.name} is on ${e.date} at ${e.time} in ${e.location}.`).join('\n')}
---
`;
};

const getSystemInstruction = (): string => {
    return `You are "UniPal," a friendly and helpful AI assistant for Malla Reddy University students. Your goal is to answer student questions accurately based *only* on the information provided in the context. Do not invent any information, links, or phone numbers. If the answer is not in the provided information, politely state that you don't have that information and suggest contacting a human advisor for more details. Keep your answers concise and conversational.
    
    Here is the campus information:
    ${buildContext()}
    `;
};


const getChatSession = (): Chat => {
  if (chat) {
    return chat;
  }
  
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
  }
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: getSystemInstruction()
    }
  });

  return chat;
};


export const getChatbotResponse = async (message: string): Promise<string> => {
  try {
    const chatSession = getChatSession();
    const response = await chatSession.sendMessage({ message: message });
    return response.text.trim();
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    if (String(error).includes("API_KEY")) {
         return "It looks like the API key is missing or invalid. Please check the setup.";
    }
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};