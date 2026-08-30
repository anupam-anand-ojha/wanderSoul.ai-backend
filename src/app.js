import express from "express";
import cors from "cors";
import travelRoutes from "./routes/travel.routes.js";



const app = express();

app.use(cors({
    origin:[
        'http://localhost:5174'
    ],
    credentials:true
}));
app.use(express.json());
app.use('/api/plan', travelRoutes )


export default app;