const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let ContadorPalabra = [];

  param.forEach(word => {
    if (ContadorPalabra[word]) {
      ContadorPalabra[word]++;
    } else {
      ContadorPalabra[word] = 1;
    }
  });
  return ContadorPalabra;
}
const word0ccurrences = repeatCounter(counterWords);
console.log(word0ccurrences);