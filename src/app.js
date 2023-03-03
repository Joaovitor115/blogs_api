const express = require('express');
const middlewaresLogin = require('./middlewares/middlewaresLogin');
const { Login, createUser } = require('./controllers/user.controller');
const validateUser = require('./middlewares/validateUser');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', middlewaresLogin, Login);
app.post('/user', validateUser, createUser);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
