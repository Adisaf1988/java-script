
// console.log("***********Page-27 ex-2***********")
// console.log(" קלוט שני שלמים והצג את כל השלמים ביניהם - כולל בסדר עולה. לא מובטח שהנתון השני גדול מהראשון")

// var num1 = Number(prompt("please enter the first number"))
// var num2 = Number(prompt("please enter the second number"))
// while (num1 <= num2) {
//     console.log(num1);
//     num1++
// }
// while (num1 >= num2) {
//     console.log(num2);
//     num2++
// }




// console.log("***********Page-27 ex-3***********")
// console.log("קלוט מספר טבעי n. הצג את כל המספרים הזוגיים מאפס עד n (כולל אם הוא זוגי). לא מובטח ש-n זוגי")

// var n = Number(prompt("please enter a number"));
// index = 0
// while (n >= index) {
//     console.log(index);
//     index += 2

// }


// console.log("***********Page-27 ex-5***********")
// console.log("קלוט מספרים אי שליליים עד הזקיף (ערך סיום קלט) - 99 והצד את סכומם")

// var inputFromUser = Number(prompt("Enter positive number - -99 will stop"))
// var sum = 0;
// while (inputFromUser !== -99) {

//     sum = sum + inputFromUser;
//     inputFromUser = Number(prompt("Enter positive number - -99 will stop"))

// }
// console.log("the sum is:" + sum)



// console.log("***********Page-27 ex-7***********")


// var inputFromUser = Number(prompt("Enter positive number - 0 or negetive number will stop"))
// var maxNum = 0;
// while (inputFromUser !== 0 && inputFromUser > 0) {
//     if (inputFromUser > maxNum) {
//         maxNum = inputFromUser
//     }
//     inputFromUser = Number(prompt("Enter positive number - 0 or negetive number will stop"))

// }
// console.log("The max number is:" + maxNum)



// var num = Number(prompt("Enter number"))
// var index = 1;
// var maxNum = 0;
// var maxIndex = 0;
// while (num > 0) {
//     if (num > maxNum) {
//         maxNum = num
//         maxIndex = index

//     }
//     num = Number(prompt("Enter number"))
//     index = index + 1

// }
// console.log(maxIndex)