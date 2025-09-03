import express from 'express';
import {
  createAppointment,
  updateAppointmentStatus,
  getAppointments,
  getAppointment
} from '../controllers/AppointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointment);
router.patch('/:id/status', updateAppointmentStatus);

export default router;
