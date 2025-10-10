const quizForm = documentElementById('quiz-form');
quizForm.addEventListener('submit', calculateResults);

function calculateResults(event) {

const formData = new FormData(quizForm);

let scores = {
    "Carrot": 0,
    "Spinach": 0,
    "Potato": 0
};
// ---------
switch(formData.get('q1')) {
  case Red:
    scores.Carrot += 1;
    break;
  case y:
    // code block
    break;
  default:
    // code block
}