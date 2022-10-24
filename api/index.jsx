const express = require('express');
const Cards = require('../resources/cards/available-cards.json')
const Plans = require('../resources/data/available-plans.json')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.get('/Plans', (request, response) => {
    return response.json(Plans);
});

app.get('/Cards', (request, response) => {
    return response.json(Cards);
});

app.listen(3001, () => console.log('Express started at http://localhost:3001'));