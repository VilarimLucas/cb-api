const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis, etc)
const cors = require('cors')
const app = express();
const port = 8081;

//importações
const perfil = require('./controllers/perfilController.js');

//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())


app.use('/rota_perfil', perfil);


app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))