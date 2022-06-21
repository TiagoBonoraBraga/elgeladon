const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

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

app.get('/', (req, res) => {
  res.send('Seja benvindo');
});

app.get('/paletas/todas-paletas', (req, res) => {//rota getall
  res.send(paletas);
});

app.get('/paletas/paleta/:id', (req,res) =>{
  const idPaleta = req.params.id;//vai pegar a requisiçãodo front
  const paletaEscolhida = paletas.find((paleta) => paleta.id == idPaleta);//
  res.send(paletaEscolhida);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
