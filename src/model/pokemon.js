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
  pokedexNumber: {
    type: Number,
    required: true,
  },
});

export default model("Pokemon", pokemonSchema);
