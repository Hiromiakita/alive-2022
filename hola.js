function registrar () {
    console.log('registrar')
    fetch('http://localhost:3003/alumnas')
        .then(info => console.log('info',info.json()))
        // .then(data => console.log(data))
}