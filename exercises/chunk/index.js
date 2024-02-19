// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// the solution I came up with on my own
// I create a new array, prepopulated with an empty array as its only element
// I loop through the original array
// I put the current number into last subarray in the array
// then, if we are at a point in the sequence where we need
// to end a subarray and start a new one, we add a new empty subarray
// this becomes the new last subarray, so the next time we iterate,
// the number gets pushed in here
// now the only problem is with this process, one extra empty
// subarray will exist, so before returning the array of subarrays,
// we check if the last element is an empty array and delete it if so

// ugly, but it worked

// function chunk(array, size) {
//     const arrayToReturn = [[]];
//     array.forEach((num, index) => {
//       arrayToReturn[arrayToReturn.length-1].push(num);
   
//       if (index % size === size - 1){
//         arrayToReturn.push([]);
//       }
//       console.log(arrayToReturn);
//     });
//     if (arrayToReturn[arrayToReturn.length - 1].length === 0){
//         arrayToReturn.pop();
//       }
//     return arrayToReturn;
// }


// Grider's first solution. 
// Here, we create an empty array to hold the subarrays or chunks
// For each element in the original array,
// We first check to see if we need to add an empty subarray to the chunks array
// We do this by checking the last subarray in the chunks array
// If it doesn't exist, it means we've just started and it's empty
// In that case, or if it's the size that chunks are supposed to be,
// we add a new empty subarray to the chunk-holding array
// then we add the number to the last subarray which is the one we just created
// otherwise we just add the number to the last subarray

// this is how I executed his algorithm
// function chunk(array, size) {
//     const arrayToReturn = [];
//     array.forEach((num, index) => {
//       const lastSubArray = arrayToReturn[arrayToReturn.length - 1];
//       if (!lastSubArray || lastSubArray.length === size){
//         arrayToReturn.push([]);
//         arrayToReturn[arrayToReturn.length - 1].push(num);
//       } else {
//         arrayToReturn[arrayToReturn.length - 1].push(num);
//       }
//     });
//     return arrayToReturn;
// }

// This is Grider's actual solution
// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array){
//         const last = chunked[chunked.length - 1];

//         if (!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

// This is my solution based on Grider's second algorithm
// Here there is a new array declared to hold the chunks
// Then there is a variable called index, which represents the location
// where we are in the original array. We start at zero
// As long as our index is less than the length of the original array,
// we have subarrays (chunks) to create
// so we push a slice of the original array, starting at index, of size 
// equal to the size of the chunks we want
// then -- very important -- we modify the index, which is our loop control variable
// otherwise it's an infinite loop
// finally we return the array of subarrays
// Grider's actual solution was identical.
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}



// chunk([1, 2, 3, 4], 2);

module.exports = chunk;
