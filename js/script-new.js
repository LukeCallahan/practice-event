//USER LOGIC

//declare all the functions that should run when the window loads
//Functions to run on load of windows.  - Set all divs to hidden, event.preventDefault

function setToHidden(){
  console.log('test');
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

function whichRidesAreOK(){
  const age = parseInt(document.querySelector("input#age").value);
  const height = parseInt(document.querySelector("input#height").value);  
  if (age >= 12 && height >= 60){
    document.getElementById("swings").removeAttribute("class");
    document.getElementById("coaster").removeAttribute("class");
    document.getElementById("tower").removeAttribute("class");
  } else if (age >= 12 || height >= 48 ){
    document.getElementById("swings").removeAttribute("class");
    document.getElementById("coaster").removeAttribute("class");
  } else if (age >= 6){
    document.getElementById("swings").removeAttribute("class");
  } else {
    console.log("shits weak!");
  }
}

// window.onload = function() {
//   setToHidden();
//   document.querySelector("form").onsubmit = function(event) {
//     event.preventDefault();
//     setToHidden();
//     whichRidesAreOK();
//   }
// };

function runOnSubmit (){
  event.preventDefault();
  setToHidden();
  whichRidesAreOK();
}

document.addEventListener("submit", function(){
  setToHidden();
  runOnSubmit();
})



//Run these when the form submitted - set all divs to hidden, 
//gather the input from the user



//set all divs to hidden on resubmit when the form is submitted





//BUSINESS LOGIC

//If Else statement determines which div to make not hidden based on user input