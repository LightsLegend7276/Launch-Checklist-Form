function init() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let div = document.getElementById("missionTarget");
         let planet = randomPlanet(json);
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[planet].name}</li>
               <li>Diameter: ${json[planet].diameter}</li>
               <li>Star: ${json[planet].star}</li>
               <li>Distance from Earth: ${json[planet].distance}</li>
               <li>Number of Moons: ${json[planet].moons}</li>
            </ol>
         <img src="${json[planet].image}">
         `;
      });
   });

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let massInput = document.querySelector("input[name=cargoMass]");
      let inputArray = [pilotInput, copilotInput, fuelInput, massInput];
      debugger;
      if (isNaN(fuelInput.value) || isNaN(massInput.value)) {
         alert("Fuel Level and Cargo Mass must be numbers!");
         event.preventDefault();
      } else if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || massInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else {
         let launchStatus = document.getElementById("launchStatusCheck");

         launchStatus.innerHTML = `
         ${fuelInput.value < 10000 || massInput.value > 10000 ? `<h2 id="launchStatus" style="color: red">Shuttle not ready for launch</h2>` : `<h2 id="launchStatus" style="color: green">Shuttle is ready for launch</h2>`}
         <div>
         <ol>
         <li id="pilotStatus">Pilot ${pilotInput.value} is ready for launch</li>
         <li id="pilotStatus">Co-pilot ${copilotInput.value} is ready for launch</li>
         ${fuelInput.value < 10000 ? `<li id="fuelStatus">Fuel level too low for launch</li>` : `<li id="fuelStatus">Fuel level high enough for launch</li>`}
         ${massInput.value > 10000 ? `<li id="cargoStatus">Cargo mass too high for launch</li>` : `<li id="cargoStatus">Cargo mass low enough for launch</li>`}
         </ol>
         </div>
         `;
         event.preventDefault();
      }

   });

};

function randomPlanet(array) {
   let index = Math.floor(Math.random() * array.length);
   return index;
}


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

