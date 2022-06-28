const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService(); //buscando as paletas no service

  if (paletas.length == 0) {
    return res.status(404).send({ message: 'Não existe paleta cadastrada!' });
  }

  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id); //vai pegar a requisiçãodo front

  if (!parametroId) {
    //se nao tiver nada no id q recebeu no parametro
    return res.status(400).send({ message: 'Id Inválido!' });
  }

  const paletaEscolhida = paletasService.findByIdPaletaService(parametroId); //

  if (!paletaEscolhida) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(paletaEscolhida);
};

const createPaletaController = (req, res) => {
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

  const newPaleta = paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    //se nao tiver nada no id q recebeu no parametro
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

  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    //se nao tiver nada no id q recebeu no parametro
    return res.status(400).send({ message: 'Id Inválido!' });
  }

  paletasService.deletePaletaService(idParam);

  

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
