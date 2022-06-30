const Paleta = require('../models/Paleta');//cria o modelo no banco
const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();//Paleta éo model e find(metodo do mongoose) vai achar td no banco, await faz esperar e ir no banco buscar
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
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited).setOptions({ returnOriginal: false});//setoptions é para o banco trazer o json ja editado.
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
