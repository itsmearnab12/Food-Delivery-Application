import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
