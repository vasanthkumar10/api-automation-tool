import express from 'express';
import {
  getWorkOrders,
  updateWorkOrder,
  createWorkOrder,
  getWorkOrder
} from '../controllers/WorkorderController.js';

const router = express.Router();

router.get('/:id', getWorkOrder);
router.get('/', getWorkOrders);
router.post('/', createWorkOrder);
router.patch('/:id', updateWorkOrder);

export default router;
