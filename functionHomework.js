// console.log("Write a function that receive 2 numbers and return the sum between the numbers")

// function getNum(num1, num2, sum) {
//     return sum = (num1 + num2)
// }
// console.log("The sum of the numbers is:" + getNum(10, 17.5))




// console.log("Write a function that receive 2 numbers and return the max between the numbers")
// function maxNum(n1, n2,) {
//     if (n1 > n2) {
//         return n1
//     } else {
//         return n2
//     }
// }
// console.log("The max number is:" + maxNum(19, 10))






// console.log("Write a function that receive 3 numbers and return the min between the numbers")
// function minNum(n1, n2, n3) {
//     if (n1 < n2 && n1 < n3) {
//         return n1
//     }
//     if (n2 < n1 && n2 < n3) {
//         return n2
//     }
//     if (n3 < n2 && n3 < n1) {
//         return n3
//     }
// }
// console.log("The Min number is:" + minNum(10, 2, 5))





// console.log("Write a function that receive 2 names of products and return true if one of the products is apple otherwise the function will return false")
// function getProduct(product1, product2) {
//     if (product1 === "apple" || product2 === "apple") {
//         return true

//     } else {
//         return false

//     }
// }
// console.log("The product is apple?:" + getProduct("galaxy", "apple"))




// console.log("class 17-3")
// function lesson4(text) {
//     if (text.toString().length > 20) {
//         return "too long string"
//     } else {
//         return text.charAt(text.toString().length - 1)
//     }
// }

// var word = prompt("enter something")
// var res = lesson4(word)
// console.log(res)




// var cars = []

// for (let index = 0; index < 10; index++) {

//     var currentCar = prompt("Enter cars")
//     cars.push(currentCar)


// }

// console.log(cars[0])
// console.log(cars[cars.length - 1])



var carPrice = []
var sum = 0
var avg = 0
for (var index = 0; index < 10; index++) {
    var currentPrice = +prompt("Enter price")
    carPrice.push(currentPrice)
    sum = sum + currentPrice

}
console.log(sum)
console.log(sum / 10)



// var products = []

// function addToCart() {
//     for (var index = 0; index < 10; index++) {
//         var newProduct = prompt("Add new product")
//         products.push(newProduct)

//     }
// }
// addToCart();
// console.log(products);
