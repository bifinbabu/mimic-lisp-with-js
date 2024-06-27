const {
  add,
  add1,
  subtract,
  multiply,
  divide,
  nested,
  add2,
  reminder,
} = require("./programs");

let first = (list) => (list?.length > 0 ? list[0] : undefined);
let rest = (list) => (list?.length > 1 ? list.slice(1) : []);

let interpret = function (list) {
  if (!Array.isArray(list)) {
    return list; // If it's not a list, return it as is (base case for recursion)
  }
  let car = first(list);
  let cdr = rest(list).map(interpret); // Recursively interpret each element in the rest of the list
  console.log("first", cdr);
  switch (car) {
    case "+":
      return cdr.reduce((total, item) => total + item, 0);
    case "-":
      return cdr.reduce((total, item) => total - item);
    case "*":
      return cdr.reduce((total, item) => total * item, 1);
    case "/":
      return cdr.reduce((total, item) => total / item);
    case "%":
      return cdr.reduce((total, item) => total % item);
    default:
      throw new Error("Unknown operation: " + car);
  }
};

// console.log(interpret(add)); // Output: 5
console.log(interpret(add1)); // Output: 6
console.log(interpret(add2));
// console.log(interpret(subtract)); // Output: 3
// console.log(interpret(multiply)); // Output: 6
// console.log(interpret(divide)); // Output: 3
// console.log(interpret(nested)); // Output: 26
console.log(interpret(reminder));
