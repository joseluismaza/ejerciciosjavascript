// Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = { name: 'Jack Sparrow', age: 10 };
character.age = 25;

console.log(character);

/* Declara 3 variables con los nombres y valores siguientes

firstName = 'Jon';
lastName = 'Snow';
age = '24';

Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.*/

let firstName = 'Jon';
let lastName = 'Snow';
let age = '24';

console.log(firstName, lastName, age);

// Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };
let precioTotal = toy1.price + toy2.price;

console.log(precioTotal);

/* Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad
finalPrice a todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.*/

let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
globalBasePrice = 25000;

console.log(globalBasePrice);

car1.finalPrice = car1.basePrice + globalBasePrice;

console.log(car1);
