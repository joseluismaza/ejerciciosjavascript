const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];


console.log("Buenos productos")
for (const masVentas of products) {
  if (masVentas.sellCount >= 20) {
    goodProducts.push(masVentas);
    console.log(masVentas.name);
  }
}

console.log("Malos productos")
for (const malaVentas of products) {
  if (malaVentas.sellCount < 20) {
    badProducts.push(malaVentas);
    console.log(malaVentas.name)
  }
}
