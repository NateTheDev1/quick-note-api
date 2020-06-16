const router = require("express").Router();
const Note = require("../models/Note");
const verifyToken = require("./verifyToken");

// Get all notes

router.get("/", verifyToken, async (req, res) => {
  const notes = await Note.find({ createdById: req.user._id });
  res.json(notes);
});

// Find note by id
router.get("/:noteId", verifyToken, async (req, res) => {
  const note = await Note.findOne({ _id: req.params.noteId });
  if (!note) {
    return res.status(400).send("Note does not exist, or noteId is invalid.");
  }
  res.json(note);
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

// Delete a post
router.delete("/:noteId", verifyToken, async (req, res) => {
  try {
    const foundNote = await Note.deleteOne({ _id: req.params.noteId });
    if (foundNote.deletedCount === 0) {
      return res.json("No Notes Were Deleted, NoteId does not exist.");
    }
    res.json(foundNote);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a note
router.put("/:noteId", verifyToken, (req, res) => {
  Note.findByIdAndUpdate(
    { _id: req.params.noteId },
    {
      $set: { title: req.body.title, content: req.body.content },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        return res.status(400).send("Error updating this note.");
      }
      return res.json(doc);
    }
  );
});

module.exports = router;
