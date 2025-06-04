function mult(greet, num2, num1) {
  greet();
  console.log("world");

  return num1 * num2;
}

// console.log(mult(3, 4, hello));
//console.log(mult(3, 9));

function hello() {
  console.log("hello ");
}

let name = "kubwayo Alain";
let changedName = name.split(" ");
console.log(changedName);

let keep = changedName.join(" ");
console.log(keep);

let arrayName = ["k", "u", "b", "w", "a", "y", "o"];
let Slicced = arrayName.slice(0, 2);
console.log(Slicced);

console.log(name);

console.log(name.toUpperCase());
console.log(name);

// let num = 5;
// num = 6;
// console.log(num);

// Create a method that takes as input a name, city, and state to welcome
//  a person. Note that `name` will be an array consisting of one or more values that
// should be joined together with one space between each, and the length of the `name`
// array in test cases will vary.

// Example:

// ```
//

// ```

// This example will return the string `Hello, John Smith! Welcome to Phoenix, Arizona!`

// function greet(name, city, state) {
//   let name = ["Alain", "Hirwa"];
// }

// console.log(greet(["John", "Smith"], "Phoenix", "Arizona"));

function test(arr) {
  let result = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > 0) {
      result = result + element;
    }
  }
  return result;
}

console.log(test([4, 7, 9, -8]));
console.log(test([3, 9, 9, 5]));
//what are parameters
//why do we need them
//what are arguments
//why do we need loop
//how do we traverse in array
