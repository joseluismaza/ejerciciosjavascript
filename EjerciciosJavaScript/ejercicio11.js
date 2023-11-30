const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let totalLength = 0;
  let wordCount = 0;

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'string') {
      totalLength += param[i].length;
      wordCount++;
    }
  }


  if (wordCount === 0) {
    return 0;
  }
  return totalLength / wordCount;
}

const averageLength = averageWord(mixedElements);
console.log(averageLength);

