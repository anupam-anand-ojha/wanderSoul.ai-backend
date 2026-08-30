import { travelAgent } from "../services/ai.service.js";

export const generateTrip = async (req, res) => {
    try{
        const travelData = req.body ;

    if (!travelData.place || !travelData.time || !travelData.budget) {
      return res.status(400).json({
        message: "Place, Time and Budget are required",
      });
    }

        const result = await travelAgent(travelData);

       return res.status(200).json(result)
    }
    catch(error){
        console.error("Trip generation failed", error);

      return res.status(500).json({
            message: "Failed to generate trip. Please try again later"
        })
        
    }
} 