import mongoose from 'mongoose';

const timeRangeSchema = new mongoose.Schema(
  {
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true }
  },
  { _id: false }
);

const requestedTimeSlotSchema = new mongoose.Schema(
  {
    duration: {
      amount: { type: Number, required: true },
      uom: { type: String, required: true }
    },
    validFor: timeRangeSchema,
    searchTimeSlotType: { type: String }
  },
  { _id: false }
);

const availableTimeSlotSchema = new mongoose.Schema(
  {
    validFor: timeRangeSchema
  },
  { _id: false }
);

const relatedPlaceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    role: { type: String },
    name: { type: String },
    '@type': { type: String }
  },
  { _id: false }
);

const relatedEntitySchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String },
    role: { type: String },
    '@referredType': { type: String },
    '@type': { type: String }
  },
  { _id: false }
);

const searchTimeslotSchema = new mongoose.Schema(
  {
    status: { type: String },
    searchDate: { type: Date },
    relatedPlace: relatedPlaceSchema,
    relatedEntity: [relatedEntitySchema],
    requestedTimeSlot: [requestedTimeSlotSchema],
    availableTimeSlot: [availableTimeSlotSchema],
    '@type': { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('SearchTimeslot', searchTimeslotSchema);
