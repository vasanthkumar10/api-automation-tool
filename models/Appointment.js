import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'suspended', 'cancelled'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

export default mongoose.model('Appointment', appointmentSchema);
