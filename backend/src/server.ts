import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  response.json([
    'Nome1',
    'Nome2',
    'Nome3',
    'Nome4',
    'Nome5'
  ]);
});

app.listen(3333);