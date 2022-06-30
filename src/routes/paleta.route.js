const router = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

router.get('/all-paletas', controllerPaletas.findAllPaletasController);
router.get(
  '/one-paleta/:id',
  validId,
  controllerPaletas.findByIdPaletaController,
);
router.post(
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
router.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
router.delete(
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);

module.exports = router;
