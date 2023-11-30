const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let palabralarga = '';
  for (let i = 0; i < param.length; i++) {
    if (param[i].length > palabralarga.length) {
      palabralarga = param[i];
    }
  }
  return palabralarga;
}
const AvangerLarga = findLongestWord(avengers);
console.log(AvangerLarga);

