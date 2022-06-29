const Paleta = require('../models/Paleta');
const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
  return paletas;
};

const findByIdPaletaService = async (parametroId) => {
  const paleta = await Paletas.findById(parametroId);
  return paleta;
};

const createPaletaService = async (newPaleta) => {
  const paletaCreated = await Paleta.create(newPaleta);
  return paletaCreated; // retorna o novo elemento
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited);
  return paletaUpdate;
};

const deletePaletaService = async (id) => {
  return await Paletas.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
