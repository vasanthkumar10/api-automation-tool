import mongoose from 'mongoose';

const timeRangeSchema = new mongoose.Schema(
  {
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true }
  },
  { _id: false }
);

const contactMediumSchema = new mongoose.Schema(
  {
    mediumType: { type: String, required: true },
    characteristic: {
      phoneNumber: { type: String },
      '@type': { type: String }
    },
    '@type': { type: String }
  },
  { _id: false }
);

const noteSchema = new mongoose.Schema(
  {
    author: { type: String },
    date: { type: Date },
    text: { type: String },
    '@type': { type: String }
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

const relatedPartySchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String },
    role: { type: String },
    '@referredType:': { type: String },
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

const appointmentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    category: { type: String },
    status: {
      type: String,
      enum: ['Initialized', 'Confirmed', 'Cancelled', 'Completed']
    },
    externalId: { type: String },
    creationDate: { type: Date },
    contactMedium: [contactMediumSchema],
    note: [noteSchema],
    relatedPlace: relatedPlaceSchema,
    validFor: timeRangeSchema,
    relatedParty: [relatedPartySchema],
    relatedEntity: [relatedEntitySchema],
    '@type': { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('Appointment', appointmentSchema);
