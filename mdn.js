
// var testArray = [1, 5, 7, 2, 4]
// var newArray = testArray.map(x => (x + 1))

// console.log(newArray);


// var arr = [1, 5, 7, 2, 4]

// function DubleNum(arr) {
//     var newDuble = arr.map(x => (x * 2))
//     return newDuble

// }
// console.log(DubleNum(arr));



var arr = [13, 5, 8, 10]
function getString(arr) {
    var numberToString = arr.map(num => num.toString())
    return numberToString
}
console.log(getString(arr));


