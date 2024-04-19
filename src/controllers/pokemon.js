import Pokemon from "../models/pokemon.js";

class PokemonController {

    static getAllPokemons = (req, res) => {
        try{
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
        }
        catch(err){
            throw err
        }
    };

    static getPokemon = (req, res) => {
        const id = req.params.id;

        try{
            Pokemon.findById(id)
              .then((result) => {
                res.json(result);
              })
              .catch((error) => {
                console.log(error);
                throw new Error(error);
                // res.status(400).json({ message: error.message });
              });
        }
        catch(err){
            throw err
        }
      };

    static createPokemon = (request, response) => {
        const bodyContent = request.body;
        // on cree un nouvelle instance de Pokemon
        const newPokemon = new Pokemon(bodyContent);

        try{
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
        catch(err){
            throw err
        }
        // on sauvegarde la nouvelle instance de Pokemon

    }

    static deletePokemon = (request, response) => {
        const id = request.params.id;

        try{
            Pokemon.deleteOne({ _id: id })
                .then((result) => {
                    response.status(204).end();
                })
                .catch((error) => {
                    console.log(error);
                    throw new Error(error);
                    // response.status(400).json({ message: error.message });
                });
        }
        catch(err){
            throw err
        }
    };

    static udpatePokemon = (request, response) => {
        const id = request.params.id;
        const bodyContent = request.body;

        const updatedPokemon = { _id: id, ...bodyContent }

        try{
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
        catch(err){
            throw err
        }
    }
};

export default PokemonController;