const {Dog, Temperament} = require('../db');

const createDogs = async (req, res) => {
      try {
        const { reference_image_id, name, height, weight, life_span, temperament } = req.body;
    
        const dog = await Dog.create({ reference_image_id, name, height, weight, life_span, temperament });
    
        res.status(200).json(dog);
      } catch (error) {
          res.status(500).json({ message: error.message });
        }
};

module.exports = {
    createDogs,
};
