//Capture form element
const form = document.getElementById("animalForm");

//Listen for form submission
form.addEventListener("submit", (e) => {
  //Capture results element
  const resultsElement = document.getElementById("form-results");
  //Reset result element
  resultsElement.innerHTML = ``;
  //Prevent forms default behaviour
  e.preventDefault();
  //Get input element values
  const favoriteAnimal = document.getElementById("favoriteAnimal").value;
  const numberOfPets = document.getElementById("numPets").value;

  //Store the data in Json Object
  const formResponses = {
    q1: favoriteAnimal,
    q2: numberOfPets,
  };
  //Create text that we will add in results element
  const resultsText = `My favorite animal is ${formResponses.q1} and in total I have ${formResponses.q2} animals at home!`;
  //Add our created text as child element in results
  resultsElement.append(resultsText);
});