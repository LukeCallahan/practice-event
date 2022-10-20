//Add event listener
//When, form is submitted, perform this action
// it needs to reset

// User Interface Logic

window.addEventListener("load", function(){
  let form = document.querySelector("form")
  let submit = document.querySelector(button#reset);
  let story = document.querySelector("div#story");

  
}) 





function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (age && height) {
      if (age >= 12 && height >= 60) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
        document.getElementById("tower").removeAttribute("class");
      } else if (age >= 12 || height >= 48) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
      } else if (age >= 6) {
        document.getElementById("swings").removeAttribute("class");
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};