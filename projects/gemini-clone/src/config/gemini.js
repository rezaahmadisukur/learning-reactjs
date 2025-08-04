// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

async function runChat(prompt) {
    // throw new Error("Program di hentikan");
    const ai = new GoogleGenAI({
        apiKey: import.meta.env.GEMINI_API_KEY
        // apiKey: "AIzaSyAkQguf5YljYa7XcDSxE9dqSSQeBrDiUzo"
    });
    const tools = [
        {
            googleSearch: {}
        }
    ];
    const config = {
        thinkingConfig: {
            thinkingBudget: -1
        },
        tools
    };
    const model = "gemini-2.5-pro";
    const contents = [
        {
            role: "user",
            parts: [
                {
                    text: prompt
                }
            ]
        }
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents
    });
    let fileIndex = "";
    for await (const chunk of response) {
        // console.log(chunk.text);
        fileIndex += chunk.text;
    }
    return fileIndex;
}

export default runChat;
