const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, letter) {
  return param.filter(name => name.toLowerCase().includes(letter.toLowerCase()));
}

const namesWithLetter = finderName(nameFinder, 'y');
console.log(namesWithLetter);