const { Router } = require('express'); 
const {getAllDogs} = require('../controllers/getAllDogs');
const {getDogsById} = require('../controllers/getDogsById');
const {getDogsByRaza} = require('../controllers/getDogsByRaza');
const {createDogs} = require('../controllers/createDogs');
const {getAllTemperaments} = require('../controllers/getAllTemperaments');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getAllDogs);
router.get("/dogs/name", getDogsByRaza);
router.get("/dogs/:idRaza", getDogsById);
router.post("/dogs", createDogs);
router.get("/temperaments", getAllTemperaments);

module.exports = router;
