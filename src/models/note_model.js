import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  text: String,
});

// create PostModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;