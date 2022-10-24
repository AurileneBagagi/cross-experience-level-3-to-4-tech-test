const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.get('/', (request, response) => {
    response.send('Tudo ok');
});

app.listen(3001, () => console.log('running...'));