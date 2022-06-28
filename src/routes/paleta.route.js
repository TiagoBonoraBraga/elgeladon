const router = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

router.get('/todas-paletas', controllerPaletas.findAllPaletasController);
router.get('/paleta/:id', controllerPaletas.findByIdPaletaController);
router.post('/create', controllerPaletas.createPaletaController);
router.put('/update/:id', controllerPaletas.updatePaletaController);
router.delete('/delete/:id', controllerPaletas.deletePaletaController);

module.exports = router;
