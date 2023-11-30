//Consigue el valor "HULK" del array de avengers y muestralo por consola.
/*const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const hulk = avengers[0];
console.log(hulk);*/

//Cambia el primer elemento de avengers a "IRONMAN"
/*const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = 'IRONMAN';
console.log(avengers);*/

//Console numero de elementos en el array usando la propiedad correcta de Array.
/*const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);*/

// Añade 2 elementos al array: "Morty" y "Summer".
//Muestra en consola el último personaje del array
/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);*/

//Elimina el último elemento del array y muestra el primero y el último por consola.
/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
let ultimoNombre = rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4]);*/

//Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
let segundoNombre = rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);