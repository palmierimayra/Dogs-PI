const URL = `https://api.thedogapi.com/v1/breeds`;
const axios = require("axios");

const getAllDogs = async (req, res) => {
  try {
    const response = await axios(URL);
    const dogs = response.data;

    const dogArray = dogs.map((dog) => {

      const { id, reference_image_id, name, height, weight, life_span, temperament } = dog;
      return {
        id,
        reference_image_id,
        name,
        height,
        weight,
        life_span,
        temperament,
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
