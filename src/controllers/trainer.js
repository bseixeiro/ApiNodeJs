import Trainer from "../models/trainer.js";


class TrainerController {

    static getAllTrainers = (req, res) => {
        Trainer.find()
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

    static getTrainer = (req, res) => {
        const id = req.params.id;
        Trainer.findById(id)
          .then((result) => {
            res.json(result);
          })
          .catch((error) => {
            console.log(error);
            throw new Error(error);
            // res.status(400).json({ message: error.message });
          });
      };

    static createTrainer = (request, response) => {
        const bodyContent = request.body;
        // on cree un nouvelle instance de Trainer
        const newTrainer = new Trainer(bodyContent);

        // on sauvegarde la nouvelle instance de Trainer
        newTrainer
            .save()
            .then((result) => {
                response.status(201).json(result);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
            });

    }

    static deleteTrainer = (request, response) => {
        const id = request.params.id;

        Trainer.deleteOne({ _id: id })
            .then((result) => {
                response.status(204).end();
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
                // response.status(400).json({ message: error.message });
            });
    };

    static udpateTrainer = (request, response) => {
        const id = request.params.id;
        const bodyContent = request.body;

        const updatedTrainer = { _id: id, ...bodyContent }

        Trainer.updateOne({ _id: id }, updatedTrainer)
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

export default TrainerController;