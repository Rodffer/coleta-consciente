import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333); 

// Rota: Endereco completo
// Recurso: Qual entidade estamos acessando no sistema

// GET: Busca um ou mais informacoes do backend
// POST: Criar uma nova informacao no backend
// PUT: Atualizar uma informacao existente no backend
// DELETE: Remover uma informacao do backend


// POST http://localhost:3333/users = Criar um usuario
// GET http://localhost:3333/users = Listar usuarios
// GET http://localhost:3333/users/5 = Buscar dados do usuario com ID 5


// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem atraves da rota geralmente opcionais para filtros/paginacao
// Request Body: Parametros para criar e atualizar informacoes


// Banco de dados

// Migrations: Historico do banco de dados
// create table points
// create table users

// index(Listar Varios), show(Listar um unico especifico), create, update, delete
