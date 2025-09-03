import Appointment from '../models/Appointment.js';
import WorkOrder from '../models/WorkOrder.js';

export const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  const { status } = req.body;
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment)
    return res.status(404).json({ error: 'Appointment not found' });

  appointment.status = status;
  await appointment.save();

  // If confirmed, create a WorkOrder
  if (status === 'Confirmed') {
    await WorkOrder.create({
      appointment: appointment._id,
      description: `Work order for appointment ${appointment._id}`
    });
  }

  res.json(appointment);
};

export const getAppointments = async (_req, res) => {
  const list = await Appointment.find();
  res.json(list);
};

export const getAppointment = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment)
    return res.status(404).json({ error: 'Appointment not found' });
  res.json(appointment);
};
