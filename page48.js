// console.log("******************Page 48 ex 1******************")


// var results = [
//     [2, 1],
//     [0, 2],
//     [1, 3]
// ];

// function calculatePoints(result) {
//     return result[0] * 2 + result[1];
// }

// var totalPoints = 0;
// for (let i = 0; i < results.length; i++) {
//     totalPoints += calculatePoints(results[i]);
// }

// console.log("מספר הנקודות שצברה מכבי תל אביב הוא:" + totalPoints);



// console.log("******************Page 48 ex 2******************")
// var num = [];
// var sum = 0
// var count = 0


// for (var index = 0; index < 4; index++) {
//     var newNum = +prompt("Enter 4 numbers")
//     num.push(newNum)
//     if (newNum === 0) {
//         break
//     }
//     sum += newNum
//     count++
// }

// if (count !== 0) {  
//     var average = sum / count;
//     console.log("The average until the first zero is: " + average);
// } else {
//     console.log("There are no numbers entered before the first zero.");
// }



console.log("******************Page 48 ex 3******************")

var numberOfChecks = +prompt("Enter the number of checks")
var amountInDollar = +prompt("Enter the amount of checks")


function calcCheckFee(n) {
    var bankCheckFee = 0.1;
    return Math.ceil(n * bankCheckFee)
}
function calcDollarFee(a) {
    var bankMinDollarFee = 500
    var bankOverMinFee = 0.015
    var bankLowerMinFee = 0.01
    var totalFee = 0
    if (a > bankMinDollarFee) {
        totalFee += (a - bankMinDollarFee) * bankOverMinFee
        totalFee += bankLowerMinFee * bankMinDollarFee
    } else {
        totalFee += a * bankLowerMinFee
    }
    return totalFee
}

var calc1 = calcCheckFee(numberOfChecks);
var calc2 = calcDollarFee(amountInDollar)
console.log(`number of checks: ${numberOfChecks} total amount: ${amountInDollar} , 
total fee: ${calc1 + calc2} , total fee with amount: ${calc1 + calc2 + amountInDollar}`)