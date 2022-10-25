//  "constatando" modulos para o uso 
const express = require('express');
const routes = require('./routes/routes.js');

const app = express(); //  chamando o app como API

/* Especificado funções/modulos a utilizar na api */
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(routes);


app.listen(3001, () => console.log('Express started at http://localhost:3001')); //espeficicando a porta para a API