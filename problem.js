// Input: 121 → Output: true  
// Input: 123 → Output: false


function isReversed(num) {
    let str= num.toString();
    let isReversed = str.split('').reverse().join('');
    return str === isReversed
}
// console.log(isReversed(121));
// console.log(isReversed(123));


