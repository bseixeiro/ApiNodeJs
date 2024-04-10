import mongoose from "mongoose";
const { Schema, model } = mongoose;

const trainerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  team : [
    {
      pokemon: String,
    }
  ],
});

export default model("Trainer", trainerSchema);
