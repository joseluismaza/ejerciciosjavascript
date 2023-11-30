const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:")
for (const menores of users) {
  if (menores.years < 18) {
    console.log(menores.name);
  }
}
console.log("Usuarios mayores de edad:")
for (const mayores of users) {
  if (mayores.years >= 18) {
    console.log(mayores.name);
  }
}