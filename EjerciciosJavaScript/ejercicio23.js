const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

console.log("Pelicula pequeña, menos de 100 minutos")
for (const pequeña of movies) {
  if (pequeña.durationInMinutes < 100) {
    console.log(pequeña.name);
  }
}
console.log("Pelicula mediana, mas de 100 minutos y menos de 200")
for (const mediana of movies) {
  if (mediana.durationInMinutes > 100 && mediana.durationInMinutes < 200) {
    console.log(mediana.name);
  }
}

console.log("Pelicula grande más de 200 minutos")
for (const grande of movies) {
  if (grande.durationInMinutes >= 200) {
    console.log(grande.name);
  }
}