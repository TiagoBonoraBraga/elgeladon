const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://root:admin@api-elgeladon.yvffmho.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
