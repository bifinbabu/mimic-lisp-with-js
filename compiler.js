const { add, add1 } = require("./programs");

let first = (list) => (list?.length > 1 ? list[0] : undefined);
let rest = (list) => (list?.length > 1 ? list.slice(1) : undefined);

let interpret = function (list) {
  let car = first(list);
  let cdr = rest(list);
  console.log("Executing", list, car, typeof cdr.slice(1));
  switch (car) {
    case "+":
      if (
        typeof cdr.slice(1) == "object" &&
        typeof cdr.slice(1)[0] == "object"
      ) {
        console.log("first", cdr.slice(1));
        return interpret(cdr.slice(1)[0]);
      } else {
        return cdr.reduce((total, item) => total + item, 0);
      }
  }
};

console.log(interpret(add1));
