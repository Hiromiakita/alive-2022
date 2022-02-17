const express = require('express')
const app = express()
const port = 3000

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
