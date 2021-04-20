/*# Function Scope

#### 1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers. 

After that, the function should print _y_ exponential values starting from _x_.

* For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
* function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.  */
function numValidation(num0, num00) {
  x = 50;
  y = 70;

  console.log(typeof x, typeof y);
}
numValidation();
function gaming(prey1, prey2) {
  a = prey1;
  b = prey2;
  index = 0;
  for (index = 0; index < 5; index++) {
    exponentOrder = index + 1;

    console.log(
      "At position",
      exponentOrder,
      "the exponential value is",
      a ** exponentOrder //ths prints multiple instances of increasing exponential values
    );
  }
}
gaming(3, 5);

function gaming2(prey3, prey4) {
  c = prey3;
  d = prey4;
  index2 = 0;
  for (index2 = 0; index2 < 8; index2++) {
    exponentOrder2 = index2 + 1;

    console.log(
      `For part (B),at position 
      ${exponentOrder2},
      the exponential value is,
      ${c ** exponentOrder2}` //ths prints multiple instances of increasing exponential values
    );
  }
}
gaming2(2, 8);

/*
#### 2. Fruits
* Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".
*/
let myFruit = "Mangoes";
function printFavoriteFruit(myFirstName, mySurname, belovedFruit) {
  belovedFruit = myFruit;

  console.log(
    `My name is ${myFirstName} ${mySurname} and my favorite fruit is ${belovedFruit}`
  );
}
printFavoriteFruit("Ferdinand", "Mbecha");

/*  
#### 3. Multiply a Number by Itself
* Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
* Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file


*/
function exponent(int1, int2) {
  ab = int1;
  cd = int2;
  for (takeOff = 0; takeOff < 7; takeOff++) {
    exponentListing = takeOff + 1;
    result = ab ** exponentListing;
    console.log(`The exponent output at level ${exponentListing} is ${result}`);
  }
}
/*Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file */

/*NOT POSSIBLE TO ACCESS THE VARIABLE "result" from outside the "exponent" function. This is because "result" is not within the scope where it is accessed outside the function. It can only work when accessed within the function where it was declared */
// console.log(result); ==>> ReferenceError: result is not defined
exponent(9, 7);
