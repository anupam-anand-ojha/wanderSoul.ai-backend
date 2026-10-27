import { chatAgent } from "../services/ai.service.js";

export const chatController = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    
const startTime = Date.now();
let firstChunkLogged = false;

const stream = await chatAgent(
  message.trim().slice(0, 500),
  history.slice(-6),
);

console.log(
  "Gemini stream initialized:",
  Date.now() - startTime,
  "ms",
);

for await (const event of stream) {
  if (
    event.event_type === "step.delta" &&
    event.delta?.type === "text"
  ) {
    if (!firstChunkLogged) {
      console.log(
        "First text chunk:",
        Date.now() - startTime,
        "ms",
      );
      firstChunkLogged = true;
    }

    res.write(event.delta.text);
  }
}

    res.end();

  } catch (error) {
    console.error("Chat error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }

    res.end();
  }
};