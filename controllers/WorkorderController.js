import WorkOrder from '../models/WorkOrder.js';

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
