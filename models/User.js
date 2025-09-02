import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
