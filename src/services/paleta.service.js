const paletas = [
  {
    id: 1,
    sabor: 'Açai com leite condensado',
    decrição: 'Açai muito gostoso',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: '10.0',
  },

  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },

  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

const findAllPaletasService = () => {
  return paletas;
};

const findByIdPaletaService = (parametroId) =>{
    const paleta =  paletas.find((paleta) => paleta.id === parametroId);
    return paleta;
}



module.exports = {
    findAllPaletasService,
    findByIdPaletaService,
}
