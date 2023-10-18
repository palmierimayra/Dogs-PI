const axios = require("axios");
const { Dog } = require("../db");

const getDogsByRaza = async (req, res) => {
  try {
    const { name } = req.query;
    const dogInDB = await Dog.findOne({ where: { name: name } });

    if (dogInDB) {
      res.status(200).json(dogInDB);
    } else {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name.toLowerCase()}`);
      const {data} = response;
      const {id, reference_image_id, height, weight, life_span, temperament } = data[0];
   
      const dog = {
        id,
        reference_image_id: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
        name: data[0].name,
        height,
        weight,
        life_span,
        temperament,
      };

      res.status(200).json(dog);
    }
  } catch (error) {
      res.status(500).json({ message: "Dog not found" });
  }
};

module.exports = {
  getDogsByRaza,
};
