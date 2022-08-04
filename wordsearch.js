const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let string = "";
  let verticalWords = [];
  const verticalJoin = letters[0].map((_, i) => letters.map(r => string += r[i]) && verticalWords.push(string) && (string = ""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true
  };

  for (i of verticalWords) {
    if (i.includes(word))
      return true;
  };
  return false;
};

module.exports = wordSearch; // pair programming with Jason Li

// nested map methods was how mentor walked us through this problem.  Still very hazy.  I can semi see how it would be done in a c style for loop