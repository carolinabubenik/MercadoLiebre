const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
// app.use("/static", express.static(__dirname + "/public"));

app.listen(3000, () => console.log('Servidor activo.'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
}
)

app.get("/ofertas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ofertas.html"))
}
)

app.get("/tiendasoficiales", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/tiendasOficiales.html"))
}
)
app.get("/vender", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/vender.html"))
}
)
app.get("/ayuda", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ayuda.html"))
}
)
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
}
)
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
}
)
app.get("/miscompras", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/misCompras.html"))
}
)