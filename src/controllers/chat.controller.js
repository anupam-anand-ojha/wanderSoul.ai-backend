import { chatAgent } from "../services/ai.service.js";

export const chatController = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const reply = await chatAgent(
      message.trim().slice(0, 500),
      history.slice(-6)
    );

    res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("Chat error:", error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};