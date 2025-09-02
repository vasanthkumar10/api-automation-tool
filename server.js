import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/UserRoutes.js';
import appointmentRoutes from './routes/AppointmentRoutes.js';
import workorderRoutes from './routes/WorkorderRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || 'api-automation-tool'
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

app.use('/users', userRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/workorders', workorderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
