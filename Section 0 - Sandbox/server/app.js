import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { projects } from './data/data.js';

const app = express();
app.use(cors());
app.use(morgan('dev'));

// Simulate server latency
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get('/api/projects', async (req, res) => {
  const { status } = req.query; // e.g., active | paused
  await delay(1200); // simulating latency
  const filtered = status ? projects.filter(project => project.status === status) : projects;
  res.json({ count: filtered.length, items: filtered });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));


// import express from "express";
// import cors from "cors";
// const app = express();

// app.use(cors());

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// app.get("/api/data", async (req, res) => {
//   await delay(1200);
//   res.json({
//     message: "Hello from the backend!",
//     timestamp: new Date().toISOString(),
//   });
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
