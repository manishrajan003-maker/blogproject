// backend/models/Category.js
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String },
  description: { type: String }
});

module.exports = mongoose.model("Category", CategorySchema);