let listEuler1 = (a, b, l) => {
  let sum = 0;

  for (let i = 0; i < l.length; i++) {
    if (l[i] % a === 0 || l[i] % b === 0) {
      sum += l[i];
    }
  }

  return sum;
};
let listEuler2 = (a, l) => {
   if (a.length !== 2) {
    console.warn("listEuler2 expects exactly 2 elements");
  }
  // compute the sum of multiples in list a found in list l
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (l[i] % a[j] === 0) {
        sum += l[i];
        break; // break to avoid adding the same number multiple times if it is a multiple of more than one number in a
      }
    }
  }
  return sum;
};
let listEuler3 = ( a,  l) => {
  // compute the sum of multiples in list a found in list l
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (l[i] % a[j] === 0) {
        sum += l[i];
        break; // break to avoid adding the same number multiple times if it is a multiple of more than one number in a
      }
    }
  }
  return sum;
};

let eulerlist = () => {
  // fetching the values of a, b, and l from the input text fields in number format. l should be an array of numbers
  let a = parseInt(document.getElementById("a1").value);
  let b = parseInt(document.getElementById("b1").value);
  let l = document
    .getElementById("l")
    .value.split(" ")
    .map((x) => parseInt(x)); // if l is space separated numbers

  //call listEuler1 and alert. - compute the sum of multiples of a or b in list l
  alert(listEuler1(a, b, l));
};

let euler2Lists = () => {
  let a = document
    .getElementById("aList")
    .value.split(" ")
    .map((x) => parseInt(x)); // if a is space separated numbers
  let l = document
    .getElementById("mList")
    .value.split(" ")
    .map((x) => parseInt(x)); // if l is space separated numbers
  //call listEuler2 and alert.
  alert(listEuler2(a, l));
};

let euler2Lists1 = () => {
  let a = document
    .getElementById("aList")
    .value.split(" ")
    .map((x) => parseInt(x)); // if a is space separated numbers
  let l = document
    .getElementById("mList")
    .value.split(" ")
    .map((x) => parseInt(x)); // if l is space separated numbers
  //call listEuler3 and alert.
  alert(listEuler3(a, l));
};
