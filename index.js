require('dotenv').config();
const express = require('express'); /* framework para facilitar para fazer as requisições*/
const cors = require('cors'); /* para autorizar as rotas  */
const routes = require('./src/routes/paleta.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletas/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
