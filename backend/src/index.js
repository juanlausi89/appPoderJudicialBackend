const express = require('express');
const routes = require('./routes');

//Cors permite que un cliente se conecte a otro servidor para el intercambio de recurso
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

//Rutas de la app
app.use('/',routes());

require('./database.js');



app.listen(3000);

//module.exports =app;
exports.default = app;