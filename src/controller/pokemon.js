import Pokemon from "../model/pokemon.js";

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

    static createPokemon = (request, response) => {
        const bodyContent = request.body;
        // const errors = validationResult(request).errors;
      
        // if (errors.length) {
        //   response.status(400).json({message: `Invalid Value`})
        // }
        
        // on cree un nouvelle instance de Car
        const newPokemon = new Pokemon(bodyContent);
      
        // on sauvegarde la nouvelle instance de Car
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
          
            Pokemon.deleteOne({ _id : id})
            .then((result) => {
              response.status(204).end();
            })
            .catch((error) => {
              console.log(error);
              throw new Error(error);
              // response.status(400).json({ message: error.message });
            });
          };
}

export default PokemonController;