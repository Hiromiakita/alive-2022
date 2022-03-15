const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

app.use(cors());

app.get('/ingresar/:usuario', (req, res) => {
    let usuarioIngresado = req.params.usuario;
    console.log(req.params.usuario)
    res.json('En el backend recibí el usuario ' + usuarioIngresado)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});