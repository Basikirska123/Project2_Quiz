const quizForm = document.getElementById('quiz-form'); // Capture form element

quizForm.addEventListener('submit', calculateResults); // Listen for form submission

function calculateResults(event) {
   
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(quizForm); // Read values from the form

  // Initialize scores for each vegetable type
  let scores = {
    "Carrot": 0,
    "Spinach": 0,
    "Potato": 0
  };
  // Question 1
  switch(formData.get('q1')) {
    case 'Red':
      scores.Carrot += 1;
      break;
    case 'Green':
      scores.Spinach += 1;
      break;
    case 'Yellow':
      scores.Potato += 1;
      break;
  }
  // Question 2
  switch(formData.get('q2')) {
    case 'Coffee':
      scores.Carrot += 1;
      break;
    case 'Tea':
      scores.Spinach += 1;
      break;
    case 'Beer':
      scores.Potato += 1;
      break;
  }
  // Question 3
  switch(formData.get('q3')) {
    case 'Quiet':
      scores.Carrot += 1;
      break;
    case 'GaeNight':
      scores.Spinach += 1;
      break;
    case 'Party':
      scores.Potato += 1;
      break;
  }

}