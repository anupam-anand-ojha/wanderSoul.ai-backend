import { chatAgent } from "../services/ai.service.js";

export const chatController = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

  
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const stream = await chatAgent(
      message.trim().slice(0, 500),
      history.slice(-6),
    );

    for await (const event of stream) {
      if (event.event_type === "step.delta" && event.delta?.type === "text") {
        res.write(`data: ${JSON.stringify(event.delta.text)}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Chat error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }

    res.write(`data: ${JSON.stringify("Something went wrong")}\n\n`);

    res.end();
  }
};
