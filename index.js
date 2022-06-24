const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const routes = require('./src/routes/paleta.route');

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);








app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
