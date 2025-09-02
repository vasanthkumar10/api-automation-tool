import express from 'express';
import {
  getWorkOrders,
  updateWorkOrder
} from '../controllers/WorkorderController.js';

const router = express.Router();

router.get('/', getWorkOrders);
router.patch('/:id', updateWorkOrder);

export default router;
