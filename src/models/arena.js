import mongoose from "mongoose";
const { Schema, model } = mongoose;

const arenaSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  mainType: {
    type: String,
    required: true,
  },
  champion: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
});

export default model("Arena", arenaSchema);
