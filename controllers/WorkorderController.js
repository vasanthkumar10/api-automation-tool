import WorkOrder from '../models/WorkOrder.js';

export const createWorkOrder = async (req, res) => {
  try {
    const appointment = await WorkOrder.create({
      appointment: req.body.appointmentId,
      description: `Service order for appointment ${req.body.appointmentId}`,
      status: 'open'
    });

    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getWorkOrder = async (req, res) => {
  const workOrder = await WorkOrder.findById(req.params.id);
  if (!workOrder)
    return res.status(404).json({ error: 'Service Order not found' });
  res.json(workOrder);
};

export const getWorkOrders = async (_req, res) => {
  const list = await WorkOrder.find().populate('appointment');
  res.json(list);
};

export const updateWorkOrder = async (req, res) => {
  const workOrder = await WorkOrder.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(workOrder);
};
