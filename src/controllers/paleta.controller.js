const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) =>{
	const paletas = paletasService.findAllPaletasService();//buscando as paletas no service
	res.send(paletas);
};

const findByIdPaletaController = (req, res) =>{
    const parametroId = Number(req.params.id);//vai pegar a requisiçãodo front
    const paletaEscolhida = paletasService.findByIdPaletaService(parametroId) //
    res.send(paletaEscolhida);
};

module.exports = {
    findAllPaletasController,
    findByIdPaletaController,
}
