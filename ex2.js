//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

// function from given website 
let euler1 = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    // if the number is a multiple of 3 or 5, add it to the sum
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }   
  }
  alert(sum);
};

let eulerCustom = () => {
  // fetch the values of a, b, and n from the input text fields in number fo
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let n = parseInt(document.getElementById("n").value);
  // declare a variable to hold the sum of the multiples
  let sum = 0;  
  // loop through all numbers less than n
  for (let i = 0; i < n; i++) {
    // if the number is a multiple of a or b, add it to the sum
    if (i % a === 0 || i % b === 0) {
      sum += i;
    }   
  }
  alert(sum);
}