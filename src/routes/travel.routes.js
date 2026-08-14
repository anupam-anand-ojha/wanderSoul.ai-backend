import express from 'express';
import { generateTrip } from '../controllers/travel.controller';

const travelRoutes = express.Router()

travelRoutes.post('/travel', generateTrip )

export default travelRoutes
