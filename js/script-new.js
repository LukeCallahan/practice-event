window.addEventListener("load", function() {
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
let form = document.querySelector("form");
form.addEventListener("submit", function(){
  event.preventDefault();
  setToHidden();
  whichRidesAreOK();
})
});



//Process:

//wrap the entire thing in window.addEventListener function

//write out the function to identify the fields you want (document.getElementById)

//Then write out the function for the if statement

//then create a variable to set form equal to the form element (document.querySelector("form"))
//then run .AddEventListener on the form object with "submit" as the first argument, and anonymous function() as
//what you want to run, (preventDefault, setToHidden, whichRidesareOK,)
//and... that's it!