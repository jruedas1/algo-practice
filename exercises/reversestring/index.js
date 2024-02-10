// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1: reverse() 
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// solution 2: for loop
// function reverse(str) {
//     let newStr = '';
//     for (let i = str.length-1; i >= 0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }

// solution 3: for of loop
// function reverse(str){
//     let newStr = '';
//     for (let char of str){
//        newStr =  char + newStr;
//     }
//     return newStr;
// }

function reverse(str){
  str.split('').reduce((newStr, char)=> char + newStr, '');
}

module.exports = reverse;
