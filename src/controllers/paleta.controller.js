const mongoose = require('mongoose'); //para validar c oid é do mongoose no if baixo
const paletasService = require('../services/paleta.service'); //puxa o service e coloca na variavel

const findAllPaletasController = async (req, res) => {
  const paletas = await paletasService.findAllPaletasService(); //buscando as paletas no service

  if (paletas.length == 0) {
    return res.status(404).send({ message: 'Não existe paleta cadastrada!' });
  }

  res.send(paletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id; //vai pegar a requisiçãodo front

  if (!mongoose.Types.ObjectId.isValid(idParam)) {//vai ver c é umid do mon
    return res.status(400).send({ message: 'Id Inválido!' });
  }

  const paletaEscolhida = await paletasService.findByIdPaletaService(idParam); //

  if (!paletaEscolhida) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(paletaEscolhida);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if (
    //c vier campo vazio
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da paleta!' });
  }

  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }

  const paletaEdit = req.body;

  if (
    //c vier campo vazio
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da paleta!' });
  }

  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }

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
