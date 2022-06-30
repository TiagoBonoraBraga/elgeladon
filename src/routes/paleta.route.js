const router = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

router.get('/all-paletas', controllerPaletas.findAllPaletasController);
router.get('/one-paleta/:id', controllerPaletas.findByIdPaletaController);
router.post('/create-paleta', controllerPaletas.createPaletaController);
router.put('/update-paleta/:id', controllerPaletas.updatePaletaController);
router.delete('/delete-paleta/:id', controllerPaletas.deletePaletaController);

module.exports = router;
