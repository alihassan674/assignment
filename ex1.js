//write a function to alert if overweight (15kg) baggage

//call it from the page

//alert("Hello");//write a check function here...
//update: the check function should reveal the "removed" text input
//if the baggage is overweight
//and a button to remove some
//the remove function should update the weight
//and let the user know when ok to proceed
let check = () => {
  alert(
    "Checking Baggage weight: " +
    parseInt(document.getElementById("weight").value)
      + "kg"
  );
  //These should only display if it is actually overweight
  if (parseInt(document.getElementById("weight").value) > 15) {

    // if the baggage is overweight, show the user that they are overweight and reveal the "removed" text input and button to remove some weight
    alert(
      "Baggage weight is " +
        parseInt(document.getElementById("weight").value)
        + "kg, you are overweight!, please remove some weight."
    );

    // Show the user that they are overweight and reveal the "removed" text input and button to remove some weight
    document.getElementById("removed").style = "display:block;";
    document.getElementById("remB").style = "display:block;";

  } 
  else {
    // Show the user that they are ok to proceed if they are not overweight
    alert(
    "Baggage weight is " +
      parseInt(document.getElementById("weight").value)
      + "kg, you are ok to proceed!"
  );
  }
  
};
let remove = () => {
   alert(
    "Removing weight: " + parseInt(document.getElementById("removed").value) + "kg"
  );
  //update the weight
  let newWeight =
    parseInt(document.getElementById("weight").value) -
    parseInt(document.getElementById("removed").value);
  document.getElementById("weight").value = newWeight;
  //let the user know when ok to proceed
  if (newWeight > 15) {
    alert(
      "Baggage weight is still " +
        newWeight
        + "kg, you are still overweight!, please remove some more weight."
    );
  } else {
    alert(
      "Baggage weight is now " +
        newWeight
        + "kg, you are ok to proceed!"
    );
    // Hide the "removed" text input and button to remove some weight
    document.getElementById("removed").style = "display:none;";
    document.getElementById("remB").style = "display:none;";  
  } 
}
 


//Test edit no. 2;
