import express from 'express';

import {getFlights} from '../controller/flight.js'

const router = express.Router();

router
    .route("/:flight")
    .get(getFlights);

export default router;