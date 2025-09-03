import mongoose from 'mongoose';

const searchTimeslotSchema = new mongoose.Schema(
  {
    availableSlots: [{ type: Date, required: true }],
    locationId: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('SearchTimeslot', searchTimeslotSchema);
