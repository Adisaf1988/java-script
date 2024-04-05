// var n1 = + prompt("Enter the first number")
// var n2 = + prompt("Enter the second number")
// var n3 = + prompt("Enter the third number")
// var sum = n1 + n2 + n3
// var avg = sum / 3


// alert("The avg is:" + avg);


// var num1 = + prompt("Enter the first number")
// var num2 = + prompt("Enter the second number")
// var num3 = + prompt("Enter the third number")

// if (num1 > num2 && num1 > num3) {
//     alert("The biggesr number is:" + num1)
// }

// if (num2 > num1 && num2 > num3) {
//     alert("The biggesr number is:" + num2)
// }

// if (num3 > num2 && num3 > num1) {
//     alert("The biggesr number is:" + num3)
// }


// let arr = [8, 7, 3, 180, 67, 12, 45, 90, 83, 22]
// let leargetNum = 0
// for (let i = 0; i < arr.length; i++) {

//     if (leargetNum < arr[i]) {
//         leargetNum = arr[i]
//     }

// }
// alert("Largest number is:" + leargetNum)


// let arr = [2, 4, 8, 10, 76, 3, 5, 7, 9, 33, 7]
// let evenNUM = 0
// let oddNum = 0

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//         evenNUM = evenNUM + 1
//     }
//     else {
//         oddNum = oddNum + 1
//     }
// }
// console.log(evenNUM);
// console.log(oddNum);





// let num = +prompt("Enter number");

// function atzeret(num) {
//     let sum = 1;
//     for (let index = 1; index <= num; index++) {
//         sum = sum * index;
//     }
//     return sum;
// }

// console.log(atzeret(num));



function calculate() {
    let firstNumber = document.querySelector("#firstNumber");
    let secondNumber = document.querySelector("#secondNumber");
    let sign = document.querySelector("#sign");
    let result = 0
    switch (sign.value) {
        case "+":
            result = +firstNumber.value + +secondNumber.value;
            break;

        case "-":
            result = firstNumber.value - secondNumber.value;
            break;
        case "*":
            result = firstNumber.value * secondNumber.value;
            break;
        default:
            result = firstNumber.value / secondNumber.value;

    }
    alert(`${firstNumber.value} ${sign.value} ${secondNumber.value} = ${result}`);

    firstNumber.value = "";
    secondNumber.value = "";
    sign.value = "";

}


