//  "constatando" modulos para o uso 
const  express = require('express');
const fs = require('fs'); // para trabalhar melhor com arquivos JSON
const routes = express.Router()
const Cards = require('../../resources/cards/available-cards.json'); //chamando o arquivo JSON onde contem os Card para os testes de conexão e leitura
const Plans = require('../../resources/data/available-plans.json'); //chamando o arquivo JSON onde contem os Planos para os testes de conexão e leitura
/*chamando o arquivo JSON para servi como db do methodo responsavel por "armazenar" os dados dos cartões ------------------------------------*/
var data = fs.readFileSync(__dirname +'/../database/farce.json');
var Farcedb = JSON.parse(data);

/* Method get (chamada dos dados do "servidor") ---------------------------------------------------------*/
routes.get('/Plans', (request, response) => {
    return response.json(Plans);
});

routes.get('/Cards', (request, response) => {
    return response.json(Cards);
});

routes.get('/Farse', (request, response) => {
    return response.json(Farcedb);
});

/* Method post (inserindo dados no "falso servidor") ---------------------------------------------------------*/

routes.post('/addCard', (request, response) => {
    const body = request.body; //recebendo valores

    if (!body){ //se os valores não estiverem adequados
        return response.status(400).end();
    };
    Farcedb.data.push(body); //puchando o valor temporariamente
    /* TESTE: Para saber se de fato armazenaria os dados------------------------------------------------------- */
    var newData = JSON.stringify (Farcedb);
    fs.writeFile (__dirname +'/../database/farce.json', newData, err => {
        if (err) console.log(err); // imprime o erro caso exista um
        return response.json(Farcedb)});   
});


module.exports = routes //exporta o arquivo