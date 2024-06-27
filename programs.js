let add = ["+", 2, 3];
let add1 = ["+", 2, ["+", 1, 3]];
let add2 = ["+", 2, 3, ["+", 1, 3]];
let subtract = ["-", 5, 2];
let multiply = ["*", 2, 3];
let divide = ["/", 6, 2];
let nested = ["+", 2, ["*", 3, ["-", 10, 2]]];
let reminder = ["%", 10, 3];

module.exports = {
  add,
  add1,
  add2,
  subtract,
  multiply,
  divide,
  nested,
  reminder,
};
