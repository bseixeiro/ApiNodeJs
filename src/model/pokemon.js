import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mainType: {
    type: String,
    required: true,
  },
  secondType: String,
  generation: {
    type: Number,
    required: true,
  },
  evolution: {
    name: String,
    lvl:  Number
  }
});

export default model("Pokemon", pokemonSchema);
