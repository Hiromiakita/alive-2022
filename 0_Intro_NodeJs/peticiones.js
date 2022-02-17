import fetch from 'node-fetch';

const response = await fetch('https://swapi.dev/api/people/1/');
const body = await response.json();

console.log(body);

// let obtenerPersonaje = () => {
//     fetch('https://swapi.dev/api/people/1/')
//         .then(info => info.json())
//         .then(data => console.log(data))
// }

// obtenerPersonaje();