var miles = [2,6]
for (var i = 0; i <= miles[1]; i += 2){
    if (i >= miles[0] && i < miles [1]){
        console.log ("Give me a candy")
    }
    else {
        console.log ("No candy for you")
    }
}
/*
Loop is needed to performed a repeated task of popping out the candy
The starting point of the loop is 2 (miles) since that is the time the device starts popping out candy
The loop will stop at 6 (miles) because that is the time the device stops giving candy
The incrementing is ++ or + 1 for every loop
Variables miles_min and miles_max are needed
*/


var miles = [2,6]
var speed = 5.5
var x = []
for (var i = 0; i <= miles[1]; i += 2){
    if (i >= miles[0] && i < miles [1]){
        if (x > speed){
            x == true}
        console.log ("Give me a candy")
    }
    else {
        console.log ("No candy for you")
    }
}
/* x is the speed that the runner is going (which is unknown) however,
x has to be faster than 5.5 hence x > speed is true */