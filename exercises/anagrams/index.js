// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(string) {
      return string.replace(/\W/g, "").toLowerCase().split('')
          .reduce((obj, char) => {
              !obj[char] ? obj[char] = 1 : obj[char]++;
              // obj[char] = ++obj[char] || 1
              return obj;
          }, {});
  }

  function anagrams(stringA, stringB) {
      const stringAMap = buildCharMap(stringA);
      const stringBMap = buildCharMap(stringB);

          console.log(stringAMap);
          console.log(stringBMap);

      const keysA = Object.keys(stringAMap);
      const keysB = Object.keys(stringBMap);

          console.log(keysA);
          console.log(keysB);

      if (keysA.length !== keysB.length) {
          return false;
      }

      for (let key of keysA){
          if (stringAMap[key] !== stringBMap[key]){
              return false;
          }
      }
      return true;
  }

module.exports = anagrams;
