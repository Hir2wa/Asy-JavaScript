// function evenChars(string) {
//   let lengthCheck = string.legnth;
//   let splittedString = string.split("");
//   //let have even character first
//   let evenChar = splittedString.filter((char, index) => index % 2 == 0);
//   //let push inside first index 1
//   let fullIndex = evenChar.push(splittedString[1]);
//   //final check

//   if (fullIndex.length > 100) {
//     return "Invalid String";
//   }
// }

// 👉 Write a function getUppercaseWords that takes an array of strings and returns only the words that are in all uppercase.
// Example input:
// ["HELLO", "world", "BYE", "JavaScript"]

// // Expected output:
// ["HELLO", "BYE"]

function returnUpperCase(arr) {
  let newFilteredAray = arr.filter((char) => char === char.toUpperCase());
  return newFilteredAray;
}

console.log(returnUpperCase(["HELLO", "world", "BYE", "JavaScript"]));

//kata to addd something at the end  of each item on the array
let string = ["focus", "learn", "code"];
function mappedArray(params) {
  let newArray = params.map((char, index, arrayy) => {
    return char + "🧠";
  });
  return newArray;
}

console.log(mappedArray(string));

let arrayyy = ["learn", "JavaScript", "map", "developer", "forEach"];
arrayyy.forEach((value, index, arr) => {
  if (value.length > 5) {
    console.log("🔥 Important word:  " + value);
  }
});

// finding the target if there is a match in the array
function twoSum(numbers, target) {
  let getIndex = 0;

  while (getIndex < numbers.length) {
    let array = numbers[getIndex];

    for (const [index, element] of numbers.entries()) {
      if (index !== getIndex) {
        let sum = array + element;
        if (sum === target) {
          return [getIndex, index];
        }
      }
    }
    getIndex++;
  }
}
console.log(twoSum([3, 2, 4], 6));
