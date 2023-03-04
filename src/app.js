const express = require('express');
const middlewaresLogin = require('./middlewares/middlewaresLogin');
const { Login, createUser, getAll, getOne } = require('./controllers/user.controller');
const validateUser = require('./middlewares/validateUser');
const validateToken = require('./middlewares/validateToken');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', middlewaresLogin, Login);
app.post('/user', validateUser, createUser);
app.get('/user', validateToken, getAll);
app.get('/user/:id', validateToken, getOne);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
