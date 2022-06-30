const mongoose = require('mongoose'); //para validar c oid é do mongoose no if baixo
const paletasService = require('../services/paleta.service'); //puxa o service e coloca na variavel

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService(); //buscando as paletas no service

  if (allPaletas.length == 0) {
    return res.status(404).send({ message: 'Não existe paleta cadastrada!' });
  }

  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id; //vai pegar a requisiçãodo front
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam); //

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const editPaleta = req.body;
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
