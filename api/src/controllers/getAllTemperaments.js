const URL = `https://api.thedogapi.com/v1/breeds`;
const axios = require("axios");
const {Temperament} = require('../db');

const getAllTemperaments = async (req, res) => {
  try {
    const response = await axios(URL);
    const dogs = response.data;
    const tempArray = [];

    dogs.forEach((dog) => {
        const { temperament } = dog;
  
        if (temperament) {
          const newTemp = temperament.split(',').map((t) => t.trim());
  
          newTemp.forEach((temp) => {
            if (!tempArray.includes(temp)) {
                tempArray.push(temp);
            }
          });
        }
      });

      await Promise.all(tempArray.map((temp) => {
        return Temperament.findOrCreate({
          where: { name: temp },
          defaults: { name: temp },
        });
      }));

    res.status(200).json(tempArray);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllTemperaments,
};
