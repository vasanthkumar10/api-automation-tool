import mongoose from 'mongoose';

const workOrderSchema = new mongoose.Schema(
  {
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true
    },
    description: { type: String },
    status: {
      type: String,
      enum: ['open', 'in-progress', 'done'],
      default: 'open'
    }
  },
  { timestamps: true }
);

export default mongoose.model('WorkOrder', workOrderSchema);
