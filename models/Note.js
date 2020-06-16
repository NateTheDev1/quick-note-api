const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    max: 10000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdById: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);
