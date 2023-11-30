const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  return Array.from(new Set(param));
}

const uniqueArray = removeDuplicates(duplicates);
console.log(uniqueArray);

