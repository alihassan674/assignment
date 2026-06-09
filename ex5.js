// let parse = (i) => {
//   o = parseInt(i);
//   if (isNaN(o)) throw "NaN";
//   return o;
// };

//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one as in parse(i) above:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67
let parse = (i) => {
  // converting string to number
  let o = parseInt(i);

  // if it's not a number then we throw error
  if (isNaN(o)) throw "NaN";

  // return valid number
  return o;
};


function showEx5Solution() {
  // first i fetch the input value from input field
  const ex5Input = document.getElementById("ex5-input").value;

  // then i call the main solve function with input
  const answer = solve(ex5Input);

  // showing result in console for debugging
  console.log(answer);

  // then i display result in output paragraph
  document.getElementById("ex5-output").innerText = answer;
}


function solve(input) {
  
  // first i split input into two parts (left and right side)
  const [left, right] = input.split(" : ");

  // keeping original input for fallback case
  const original = input;

  // split factors and numbers as raw strings
  let factorsRaw = left.split(" ");
  let numbersRaw = right.split(" ");

  // arrays to store valid parsed values
  let factors = [];
  let numbers = [];

  // flag to track if any corruption happened
  let corrupted = false;

  // parsing factors one by one
  for (let f of factorsRaw) {
    try {
      // try to convert to number and store
      factors.push(parse(f));
    } catch (e) {
      // if parsing fails mark as corrupted
      corrupted = true;
    }
  }

  // parsing numbers one by one
  for (let n of numbersRaw) {
    try {
      // try to convert to number and store
      numbers.push(parse(n));
    } catch (e) {
      // skip invalid numbers but mark corruption
      corrupted = true;
    }
  }

  // if everything is broken (no valid factors), return corrupt
  if (corrupted && factors.length === 0) {
    return `corrupt : ${original}`;
  }

  // function to check if number is divisible by any factor
  const isValid = (num) => factors.some(f => num % f === 0);

  // filter valid numbers and calculate sum
  const result = numbers
    .filter(isValid)
    .reduce((sum, n) => sum + n, 0);

  // final formatted output
  return `${result} : ${factors.join(" ")} : ${numbers.join(" ")}`;
}