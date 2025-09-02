import express from 'express';
import {
  createAppointment,
  updateAppointmentStatus,
  getAppointments
} from '../controllers/AppointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointments);
router.patch('/:id/status', updateAppointmentStatus);

export default router;
