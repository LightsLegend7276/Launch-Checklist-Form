function init() {

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let massInput = document.querySelector("input[name=cargoMass]");
      let inputArray = [pilotInput, copilotInput, fuelInput, massInput];
      for (let input of inputArray) {
         if (input.value === "") {
            alert("All fields are required!");
            event.preventDefault();
            break;
         };
      };
      if (isNaN(fuelInput.value) || isNaN(massInput.value)) {
         alert("Fuel Level and Cargo Mass must be numbers!");
         event.preventDefault();
      };

   });




};


window.onload = init;


// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

