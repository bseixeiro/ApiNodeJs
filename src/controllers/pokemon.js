import Pokemon from "../models/pokemon.js";

class PokemonController {

    static getAllPokemons = (req, res) => {
        Pokemon.find()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
                // res.status(400).json({ message: error.message });
            }
            );
    };

    static getPokemon = (req, res) => {
        const id = req.params.id;
        Pokemon.findById(id)
          .then((result) => {
            res.json(result);
          })
          .catch((error) => {
            console.log(error);
            throw new Error(error);
            // res.status(400).json({ message: error.message });
          });
      };

    static createPokemon = (request, response) => {
        const bodyContent = request.body;
        // on cree un nouvelle instance de Pokemon
        const newPokemon = new Pokemon(bodyContent);

        // on sauvegarde la nouvelle instance de Pokemon
        newPokemon
            .save()
            .then((result) => {
                response.status(201).json(result);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
            });

    }

    static deletePokemon = (request, response) => {
        const id = request.params.id;

        Pokemon.deleteOne({ _id: id })
            .then((result) => {
                response.status(204).end();
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
                // response.status(400).json({ message: error.message });
            });
    };

    static udpatePokemon = (request, response) => {
        const id = request.params.id;
        const bodyContent = request.body;

        const updatedPokemon = { _id: id, ...bodyContent }

        Pokemon.updateOne({ _id: id }, updatedPokemon)
            .then((result) => {
                response.status(201).json(updatedCar);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
                // response.status(400).json({ message: error.message });
            });
    }
};

export default PokemonController;