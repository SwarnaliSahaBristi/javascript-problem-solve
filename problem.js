// Input: 121 → Output: true  
// Input: 123 → Output: false


function isReversed(num) {
    let str= num.toString();
    let isReversed = str.split('').reverse().join('');
    return str === isReversed
}
// console.log(isReversed(121));
// console.log(isReversed(123));


// Given a sorted array, remove duplicates in-place such that each element appears only once.
// Return the number of unique elements.
// Input: [1,1,2]
// Output: 2