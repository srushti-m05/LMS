import express from "express";
import Notes from "../models/Notes.js";

const router = express.Router();

// Get note
router.get("/get", async (req, res) => {
  const data = await Notes.findOne();
  res.json(data || {});
});

// Save note
router.post("/save", async (req, res) => {
  const { note } = req.body;

  let saved = await Notes.findOne();
  if (saved) {
    saved.note = note;
    await saved.save();
  } else {
    await Notes.create({ note });
  }

  res.json({ message: "saved" });
});

export default router;
