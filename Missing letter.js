// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  str = str.split('');

  let temp = (alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1)).filter(val => !str.includes(val));

  return temp[0];
}

fearNotLetter("abce");
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.