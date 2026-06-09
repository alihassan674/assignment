//Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input :
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output :
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page

function showEx4Solution() {

  // first i fetch the input value from input field
  const ex4Input = document.getElementById("ex4-input").value;

  // then i call the function that is requirement
  const answer = result(ex4Input);

  // then showed the result in output para
  document.getElementById("ex4-output").innerText = answer;
}

function result(inputStr) {
  
  // first i split string input into two parts 
  const[factorStr, multipleStr] = inputStr.split(" : ");

  // then i create a commonn function to convert string number seperated by space into Array
  const toNums = (str) => str.trim().split(/\s+/).map(Number);

  // i called above funtion
  const factors = toNums(factorStr);

  // i called above funtion
  const multiples = toNums(multipleStr);

  // now i did not want to repeat the logic of checking if a number is a multiple of any factor, so i created a function for that
  const isMatch = (num) => factors.some((f) => num % f === 0);

  // now i filter the multiples array to get only those numbers that are multiples of any of the factors, and then i sum them up using reduce method
  const result = multiples.filter(isMatch).reduce((sum, n) => sum + n, 0);

  // then converted the result into the required string format and return it 
  return `${result} : ${factors.join(" ")} : ${multiples.join(" ")}`;
}