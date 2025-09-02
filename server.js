import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Mongo connection ---
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('Missing MONGODB_URI in environment!');
  process.exit(1);
}

mongoose
  .connect(mongoUri, { dbName: process.env.MONGODB_DB || 'myapp' })
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  });

// --- Sample Mongoose model ---
const Todo = mongoose.model(
  'Todo',
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      done: { type: Boolean, default: false }
    },
    { timestamps: true }
  )
);

// --- Routes ---
app.get('/', (_req, res) => {
  res.send({ ok: true, message: 'Express + Mongo Atlas (free) is running!' });
});

app.get('/todos', async (_req, res) => {
  const items = await Todo.find().sort({ createdAt: -1 }).lean();
  res.send(items);
});

app.post('/todos', async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title,
    done: !!req.body.done
  });
  res.status(201).send(todo);
});

app.patch('/todos/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.send(updated);
});

app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// --- Start server ---
const PORT = process.env.PORT || 3000; // Render will set PORT
app.listen(PORT, () => console.log(`HTTP server listening on :${PORT}`));
