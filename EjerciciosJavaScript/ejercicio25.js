const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalVentas = 0;

for (const precioTotal of products) {
  totalVentas += precioTotal.sellCount;
}

const mediaVentas = totalVentas / products.length;

console.log(totalVentas);
console.log(mediaVentas);