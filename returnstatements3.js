const average = function (number1, number2, number3, number4, number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(average(5, 5, 5, 5, 5)); // 5
console.log(average(1, 2, 3, 4, 5)); // 3
console.log(average(-200, 0, 0, 0, 300)); // 20