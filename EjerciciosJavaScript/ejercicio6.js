//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of numbers) {
  console.log(element);
}

/*Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/*Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

for (let dormir = 1; dormir <= 10; dormir++) {
  if (dormir === 10) {
    console.log('Dormido!');
  } else {
    console.log('Intentando dormir 🐑');
  }
}