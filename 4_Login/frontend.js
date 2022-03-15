function validar () {
    // Obtener los datos del input
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("pass").value;

    console.log(usuario, password);

    // Enviar datos al backend para que se validen en el backend
    console.log('http://localhost:3003/ingresar/BELÉN')
    fetch('http://localhost:3003/ingresar/' + usuario)
        .then(info => info.json())
        .then(info => console.log(info));
}