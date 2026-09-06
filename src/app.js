import express from "express";
import cors from "cors";
import travelRoutes from "./routes/travel.routes.js";



const app = express();

app.use(cors({
    origin:[
        'http://localhost:5173',
        'https://wandersoul-ai.vercel.app',
        'https://wandersoul-ai-git-main-anupam-anand-ojhas-projects-0dac4885.vercel.app',
        'https://wandersoul-i9a0yaj64-anupam-anand-ojhas-projects-0dac4885.vercel.app'
        
    ],
    credentials:true
}));
app.use(express.json());
app.use('/api/plan', travelRoutes )


export default app;