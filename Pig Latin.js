// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let first = str.match(/[aeiou].*/);
  let second = str.replace(/[aeiou].*/, '');
  return !str.match(/[aeiou]/) ? str + 'ay' : str[0].match(/[aeiou]/) ? str + 'way' : first + second + 'ay';
}

translatePigLatin("consonant");
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.