import express from 'express';
import { getSearchTimeslots } from '../controllers/SearchTimeslotController.js';

const router = express.Router();

router.get('/', getSearchTimeslots);

export default router;
