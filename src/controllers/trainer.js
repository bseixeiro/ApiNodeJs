import Trainer from "../models/trainer.js";


class TrainerController {

    static getAllTrainers = (req, res) => {
        try{
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
        }
        catch(err){
            throw err
        }
    };

    static getTrainer = (req, res) => {
        const id = req.params.id;
        
        try{
            Trainer.findById(id)
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

    static createTrainer = (request, response) => {
        const bodyContent = request.body;
        // on cree un nouvelle instance de Trainer
        const newTrainer = new Trainer(bodyContent);

        // on sauvegarde la nouvelle instance de Trainer
        try{
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
        catch(err){
            throw err
        }

    }

    static deleteTrainer = (request, response) => {
        const id = request.params.id;
        
        try{
            Trainer.deleteOne({ _id: id })
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

    static udpateTrainer = (request, response) => {
        const id = request.params.id;
        const bodyContent = request.body;

        const updatedTrainer = { _id: id, ...bodyContent }

        try{
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
        catch(err){
            throw err
        }
    }
};

export default TrainerController;