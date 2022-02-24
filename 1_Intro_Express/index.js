const { urlencoded } = require('express')
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3003

// app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/hola', (req, res) => {
  res.send('Hello World!')
})

// req = request = petición
// res = response = respuesta
app.get('/alumna', (request, response) => {
  response.send('Soy Hiromi');
})

app.get('/escuelas', (requet, response) => {
  response.send();
})

app.get('/alumnas', (req, res) => {
  console.log('test')
  let nomb = req.params.nombre
  let apell = req.params.apellido
  res.json({
    nomb: 'H'
  })

})
// escuela

// .../api/alumna
// objeto con nombre, apellido y edad de la alumna

// .../api/alumnas
// array con 3 alumnas (cada alumna es un objeto)

// .../api/escuela
// objeto con la info de tu escuela

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
