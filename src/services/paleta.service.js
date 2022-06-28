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
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;// cria um novo elemento no array com novo id
  newPaleta.id = newId;//cria um novo campo id no objeto  e add o newId criado
  paletas.push(newPaleta);//empurra o novo id para o array
  return newPaleta;// retorna o novo elemento
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;//pegar a chave da paleta editada e coloca na  posição do id 
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);//pega o index e procura com o find a paleta e compara os id, se forem iguais
  paletas[paletaIndex] = paletaEdited;// pega o array de paletas nas posições e coloca a paleta editada
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id); // procura a pasição no array compara
  return paletas.splice(paletaIndex, 1);//
};


module.exports = {
    findAllPaletasService,
    findByIdPaletaService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService
}
