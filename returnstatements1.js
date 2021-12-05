// checking if a number is bigger or smaller

const check = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(check(99))
console.log(check(110))

//This function that produces something


//Alternative

const check = function(number) {
    return number > 100;
};

// Because number < 100 already returns true or false we can immediately return that too to make the function shorter: