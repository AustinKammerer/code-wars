//Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

// This should only work if the number has 4 digits or more. If not, return "Number is too small".

function lowestProduct(input) {
  if (input.length < 4) {
    return "Number is too small";
  }
  let prods = [];
  for (let i = 0; i < input.length; i++) {
    let substr = input.slice(i, i + 4);
    if (substr.length === 4) {
      let prod = substr.split("").reduce(function (a, c) {
        return a * c;
      }, 1);
      prods.push(prod);
    }
  }
  return Math.min(...prods);
}

console.log(lowestProduct("123456789"), "expect 24");
