// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const strArr = str.split('');
//     const countObj = strArr.reduce((obj, char)=>{
//         !obj[char] ? obj[char] = 1 : obj[char]++;
//         return obj;
//     }, {});
//     const commonestChar = Object.keys(countObj).reduce((hi, key)=> countObj[hi]>countObj[key]? hi : key);
//     return commonestChar;
// }

function maxChar(str){
    const charCount = {};
    for (let char of str){
        charCount[char]?charCount[char]++:charCount[char]=1;
    }
    let commonestChar = str[0];
    for (let char in charCount){
        if (charCount[char] > charCount[commonestChar]){
            commonestChar = char;
        }
    }
    return commonestChar;
}

console.log(maxChar('abbbccdde'));


module.exports = maxChar;
