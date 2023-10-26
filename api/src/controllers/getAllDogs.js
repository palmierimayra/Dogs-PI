const URL = `https://api.thedogapi.com/v1/breeds`;
const axios = require("axios");
const {Dog} = require('../db');

const getAllDogs = async (req, res) => {
  try {
    const response = await axios(URL);
    const dogs = response.data;

    const dogArray = dogs.map((dog) => {

      const { id, reference_image_id, name, height, weight, life_span } = dog;

      return {
        id,
        image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
        name,
        height: height.metric,
        weight: weight.metric,
        life_span,
      };
    });

    return res.status(200).json(dogArray);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDogs,
};
