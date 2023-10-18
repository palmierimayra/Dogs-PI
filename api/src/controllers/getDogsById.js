const URL = `https://api.thedogapi.com/v1/breeds/`;
const axios = require("axios");
const {Dog} = require('../db');

const getDogsById = async (req, res) => {
  try {
    const id = req.params.idRaza;
    const dogInDB = await Dog.findOne({where: {id:id}});

    if(dogInDB) {
      res.status(200).json(dogInDB);
    } else {
    const response = await axios.get(`${URL}${id}`);

    const { reference_image_id, name, height, weight, life_span, temperament } = response.data;

      const dog = {
        id,
        reference_image_id: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
        name,
        height,
        weight,
        life_span,
        temperament,
      };
   
    res.status(200).json(dog);
};
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getDogsById,
};
