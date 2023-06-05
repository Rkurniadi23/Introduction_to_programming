// Predict 1
function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();
/* It will print out:
I was born in1980
There is no space between "in" and "1980" because there is no space
at the end of the string "I was born in" from the function */

// Predict 2
function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);
/* It will print out:
I was born in1980
Because birthYearInput is myBirthYearFunc */

// Predict 3
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);
/* It will print out:
Summing Numbers!
num1 is: 10
num2 is: 20
30
add(num1, num2) and add (10, 20), therefore num1 = 10 and num2 = 20 */
