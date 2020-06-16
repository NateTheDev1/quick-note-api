const router = require("express").Router();
const Note = require("../models/Note");
const verifyToken = require("./verifyToken");

// Get all notes

router.get("/", verifyToken, async (req, res) => {
  const notes = await Note.find({ createdById: req.user._id });
  res.json(notes);
});

// Create a new note

router.post("/", verifyToken, async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    createdById: req.user._id,
  });

  try {
    const savedNote = await note.save();
    res.status(200).send(savedNote);
  } catch (err) {
    res.status(400).send("Unable to create note.");
  }
});

module.exports = router;
