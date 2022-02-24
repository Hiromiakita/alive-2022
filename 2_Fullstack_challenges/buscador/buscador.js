function buscar ()  {
    let inputDato = document.getElementById('search').value
    console.log('inputDato', inputDato)
    console.log(`http://localhost:3005/search/${inputDato}`)
    fetch(`http://localhost:3005/search/${inputDato}`)
        .then(a => a.json())
        .then(dato => {
            console.log(dato)
            let paises = document.getElementById('paises')
            dato.forEach(pais => {
                let parrafo = document.createElement('p');
                parrafo.innerText = pais;
                paises.append(parrafo);
            })


        // console.log(dato)
    }
    )
}

// Filter

let arr = ['ana', 'diego', 'cristi'];

let nuevoArray = arr.filter(elemento => elemento != 'ana');

console.log(arr);
console.log(nuevoArray);

let nombresConA = arr.filter(e => e.includes('ie'));

console.log(nombresConA)


