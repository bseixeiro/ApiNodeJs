import Arena from "../models/arena.js";

class ArenaController {

    static getAllArenas = (req, res) => {
        Arena.find()
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

    static getArena = (req, res) => {
        const id = req.params.id;
        Arena.findById(id)
          .then((result) => {
            res.json(result);
          })
          .catch((error) => {
            console.log(error);
            throw new Error(error);
            // res.status(400).json({ message: error.message });
          });
      };

    static createArena = (request, response) => {
        const bodyContent = request.body;
        // on cree un nouvelle instance de Arena
        const newArena = new Arena(bodyContent);

        // on sauvegarde la nouvelle instance de Arena
        newArena
            .save()
            .then((result) => {
                response.status(201).json(result);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
            });

    }

    static deleteArena = (request, response) => {
        const id = request.params.id;

        Arena.deleteOne({ _id: id })
            .then((result) => {
                response.status(204).end();
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
                // response.status(400).json({ message: error.message });
            });
    };

    static udpateArena = (request, response) => {
        const id = request.params.id;
        const bodyContent = request.body;

        const updatedArena = { _id: id, ...bodyContent }

        Arena.updateOne({ _id: id }, updatedArena)
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

export default ArenaController;