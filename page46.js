
console.log("******************Page 46 ex 1******************")


function getClock(hour, minutes, seconds) {
    if (hour < 60) { hour = "0" + hour }
    if (minutes < 60) { minutes = "0" + minutes }
    if (seconds < 60) { seconds = "0" + seconds }
    return hour + ":" + minutes + ":" + seconds
}

console.log("The time is:" + getClock(2, 3, 6))

