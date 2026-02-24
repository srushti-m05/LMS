import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notes.js";


 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());




// Routes
app.use("/api/auth", authRoutes);

//Notes
app.use("/notes", notesRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

