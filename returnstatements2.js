const checkBrendaBounce = function(maxVisitors, currentVisitors, ageVisitors) 
{
    if (ageVisitors < 18) {
        return "This is a club for adults";
        }
    if (currentVisitors >= maxVisitors) {
            return "it's too busy now, come back later" 
        } else {
            return "come in";
        }
}

console.log(checkBrendaBounce(250, 200, 19));
console.log(checkBrendaBounce(250, 300, 17));
console.log(checkBrendaBounce(200, 260, 25));