const router = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

router.get('/todas-paletas', controllerPaletas.findAllPaletasController);
router.get('/paleta/:id', controllerPaletas.findByIdPaletaController);

module.exports = router;
