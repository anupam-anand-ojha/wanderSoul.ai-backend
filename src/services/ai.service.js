import { GoogleGenAI } from "@google/genai";
import travelPrompt from "../prompts/travel.prompt.js";
import { json } from "express";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const travelAgent = async(travelData) => {
const interaction = await ai.interactions.create({
  model: "gemini-3.1-flash-lite",
  input: travelPrompt(travelData),
  response_format:{
    type: "text",
    mime_type:"application/json"
  }
});

return JSON.parse(interaction.output_text);
}