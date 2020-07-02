
const mongoose = require("mongoose"),
  Schema = mongoose.Schema

  const BookSchema = new Schema({
    _id: {type: String},
    authors:  { type: String },
    description:  { type: String },
    image:  { type: String },
    link:  { type: String, required: true },
    title:  { type: String, required: true }
  });

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
