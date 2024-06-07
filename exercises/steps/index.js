// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++){
//         console.log("#".repeat(i) + ' '.repeat(n-i));
//     }
// }

function steps(n){
    for (let row = 1; row <=n; row++){
        let rowOutput = '';
        for (let column = 1; column <=n; column++){
            if (column <= row) {
               rowOutput += "#";
            } else {
                rowOutput += " ";
            }
        }
        console.log(rowOutput);
    }
}

// steps(3)

function printNumbersRecursive(n){
    if (n < 0) return undefined;
    console.log(n);
    printNumbersRecursive(n-1);
}

// printNumbersRecursive(10);

function stepsRecursive(n, hashtags = 1){
    if (n === 0) return undefined;
    console.log("#".repeat(hashtags) + ' '.repeat(n - 1))
    stepsRecursive(n-1, hashtags+1);
}

stepsRecursive(5)


function stepsRecursiveInstructorSolution(n, row = 0, stair = ''){
    if (row === n) return undefined;
    if (n === stair.length){
        console.log(stair);
        return stepsRecursiveInstructorSolution(n, row+1);
    }
    if (stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }
    stepsRecursiveInstructorSolution(n, row, stair);
}

module.exports = steps;
