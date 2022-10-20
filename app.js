// Reuire de Modulos externos 
const express = require('express');
const path = require('path');

// Para administrar el servidor web
const app = express();

// Levantar servidor web con Express
const puerto = 3000;
const url = 'http://localhost';
app.listen(puerto, () => console.log('Servidor corriendo en ' + url + ':' + puerto + '/'))

// GETs
app.get('/', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
)
