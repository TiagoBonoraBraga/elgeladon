const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    //vai ver c é umid do mon
    return res.status(400).send({ message: 'Id Inválido!' });
  }
  next(); //para prosseguir no route para controller, c não estiver certo o id da a message e nem vai pro controller, para aki na validação
};

const validObjectBody = (req, res, next) => {
  const paleta = req.body;
  if (
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
  next();
};



module.exports = {
  validId,
  validObjectBody,
};
