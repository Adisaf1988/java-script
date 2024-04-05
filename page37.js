console.log("******************Page 37 ex 17******************")

var count = +prompt("Enter count");
var maxNum = 0;
var maxIndex = 0;
var numOfIndex = 1;

for (var index = 1; index <= count; index++) {
    var num = +prompt("Enter number")
    if (num === maxNum) {
        numOfIndex++;
    }

    if (num > maxNum) {
        maxNum = num;
        maxIndex = index;
        numOfIndex = 1;

    }


}
console.log("The max num is:" + maxNum)
console.log("The number of impressions of the number:" + numOfIndex)
console.log("The serial number is:" + maxIndex)



console.log("******************Page 37 ex 18******************")

