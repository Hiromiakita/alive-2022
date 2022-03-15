const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

app.use(cors());

app.get('/ingresar/:usuario', (req, res) => {
    let usuarioIngresado = req.params.usuario;
    // console.log('En el backend recibí el usuario' + usuarioIngresado);
    res.send('En el backend recibí el usuario ' + usuarioIngresado)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});