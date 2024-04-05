
// console.log("******************Page 57 ex 5******************")
// var numbers = [5, 7, 2, 4, 6, 8, 10, 12, 16, 19]
// function moveToRight(numbers) {
//     var odd = []
//     var even = []
//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] % 2 === 0) {
//             even.push(numbers[index])
//         } else {
//             odd.push(numbers[index])
//         }
//     }
//     return odd.concat(even)
// }
// console.log(moveToRight(numbers));


// console.log("******************Page 57 ex 6******************")
// var numbers = []
// function insertNum(numbers) {
//     for (let index = 0; index <= 9; index++) {
//         var newNum = +prompt("Insert numbers")
//         numbers.push(newNum)

//     }
//     return numbers

// }

// function reverseArray(numbersReverse) {
//     var n = numbersReverse.length
//     for (let index = 0; index < n / 2; index++) {
//         var temp = numbersReverse[index];
//         numbersReverse[index] = numbersReverse[n - index - 1];
//         numbersReverse[n - index - 1] = temp;

//     }
//     return numbersReverse
// }

// console.log(insertNum(numbers));
// console.log(reverseArray(numbers.slice()))


console.log("******************Page 57 ex 7******************")


let input = [true, true, 1, 2, 3, 4, "s", "a", "!", "dkjhfd", () => { }, "aaaaa", 9375, {}, [], {}]
let numString = 0
let numNum = 0
let numBoolean = 0
let numOther = 0

for (let index = 0; index < input.length; index++) {

    if (typeof (input[index]) === "number") {
        numNum = numNum + 1
    }
    if (typeof (input[index]) === "string") {
        numString = numString + 1
    }
    if (typeof (input[index]) === "boolean") {
        numBoolean = numBoolean + 1
    }
    if (typeof (input[index]) !== "boolean" && typeof (input[index]) !== "string" && typeof (input[index]) !== "number") {
        numOther = numOther + 1
    }

}

console.log("The number of numbers in the array is:" + numNum);
console.log("The number of string in the array is:" + numString);
console.log("The number of boolean in the array is:" + numBoolean);
console.log("The number of other in the array is:" + numOther);



console.log("******************Page 57 ex 8******************")

let palindromeArr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]


if (palindromeArr[0] === palindromeArr[9] && palindromeArr[1] === palindromeArr[8] && palindromeArr[2] === palindromeArr[7] && palindromeArr[3] === palindromeArr[6] && palindromeArr[4] === palindromeArr[5]) {
    console.log("Yes, The number is polindrome");
}
else {
    console.log("No, The number isn't polindrome");
}


