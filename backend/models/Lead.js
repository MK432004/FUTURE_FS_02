const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  source: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["new", "contacted", "converted"],
    default: "new"
  },

  notes: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Lead", LeadSchema);