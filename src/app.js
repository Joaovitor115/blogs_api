const express = require('express');
const middlewaresLogin = require('./middlewares/middlewaresLogin');
const { Login } = require('./controllers/user.controller');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', middlewaresLogin, Login);
// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
