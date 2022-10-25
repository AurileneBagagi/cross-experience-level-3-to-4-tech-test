const  express = require('express');
const fs = require('fs');
const routes = express.Router()
const Cards = require('../../resources/cards/available-cards.json'); //chamando o arquivo JSON onde contem os Card para os testes
const Plans = require('../../resources/data/available-plans.json');
var data = fs.readFileSync(__dirname +'/../database/farce.json');
var Farcedb = JSON.parse(data);

routes.get('/Plans', (request, response) => {
    return response.json(Plans);
});

routes.get('/Cards', (request, response) => {
    return response.json(Cards);
});

routes.get('/Farse', (request, response) => {
    return response.json(Farcedb);
});

routes.post('/addCard', (request, response) => {
    const body = request.body;

    if (!body){
        return response.status(400).end();
    };
    Farcedb.data.push(body);

    var newData = JSON.stringify (Farcedb);
    
    fs.writeFile (__dirname +'/../database/farce.json', newData, err => {

        if (err) console.log(err);
        return response.json(Farcedb)});   
});


module.exports = routes