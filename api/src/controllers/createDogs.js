const {Dog, Temperament} = require('../db');

const createDogs = async (req, res) => {
      try {
        const { image, name, height, weight, life_span, temperaments } = req.body;
    
        const dog = await Dog.create({ image, name, height, weight, life_span });
    
        if (temperaments && temperaments.length>0) {
          const temperamentsDB = await Temperament.findAll({ where: { name: temperaments } });
          await dog.setTemperaments(temperamentsDB);
        }

        res.status(200).json(dog);
      } catch (error) {
          res.status(500).json({ message: error.message });
        }
};

module.exports = {
    createDogs,
};
