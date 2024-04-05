var x = Number(prompt("Enter number"))
var dig = Number(prompt("Enter dig number"))
var numDig = 0

while (x !== 0) {

    var rightDig = x % 10
    if (rightDig === dig) {
        numDig = numDig + 1
    }


    x = parseInt(x / 10)




}

console.log(numDig)


