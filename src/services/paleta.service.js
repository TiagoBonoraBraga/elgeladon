const Paleta = require('../models/Paleta');//cria o modelo no banco
const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find();//Paleta éo model e find(metodo do mongoose) vai achar td no banco, await faz esperar e ir no banco buscar
  return allPaletas;
};

const findByIdPaletaService = async (idParam) => {
  const onePaleta = await Paletas.findById(idParam);
  return onePaleta;
};

const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paleta.create(newPaleta);
  return createdPaleta; // retorna o novo elemento
};

const updatePaletaService = async (idParam, editPaleta) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, editPaleta).setOptions({ returnOriginal: false});//setoptions é para o banco trazer o json ja editado.
  return updatePaleta;
};

const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
