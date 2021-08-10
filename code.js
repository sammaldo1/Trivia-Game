// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!

let totalScore = 0;
let totalPointsElement = document.getElementById("totalPoints");
let questionsElement = document.getElementById("questions");
let categoryTitleElement = document.getElementById("categoryTitle");
let submitButtonElement = document.getElementById("submitAnswer");
let showMessageElement = document.getElementById("showMessage");
let nextQuestionElement = document.getElementById("nextQuestion");
let hideButton = document.getElementById("hideButton");
let userAnswer = document.getElementById("userAnswer");
let endButton = document.getElementById("endButton");
let endMessageElement = document.getElementById("endMessage");
nextQuestionElement.style.display = "none";
hideButton.style.display = "none";

let theAnswer = "";
let theQuestion = "";
let categoryTitle;
let randomQuestion;
let randomQuestionIndex;
let fetchData;
let arrayOfQuestions;

//pulls jeopardy questions from jservice API at random
let fetchDataFromApi = fetch(
  `https://jservice.io/api/category/?id=${Math.floor(Math.random() * 100) + 1}`
)
  .then((response) => response.json())
  .then((data) => {
    fetchData = data;
    arrayOfQuestions = data.clues;
    randomQuestionIndex = Math.floor(Math.random() * arrayOfQuestions.length);
    randomQuestion = arrayOfQuestions[randomQuestionIndex];
    randomQuestion[Math.floor(Math.random() * fetchData.length)];
    theQuestion = randomQuestion.question;
    theAnswer = randomQuestion.answer.toLowerCase().toString();
    questionsElement.append(theQuestion);
    categoryTitle = data.title;
    categoryTitleElement.append(categoryTitle);
    submitButtonElement.addEventListener("click", checkAnswers);
  });

//Checks if users answer is correct for first question.
//If correct adds a point to score, gives a congrads message , removes question from array, gives a button for next question.
//If incorrect, resets score, gives try again message, and reloads page after 5 seconds.
function checkAnswers(event) {
  event.preventDefault();

  if (userAnswer.value.toString().toLowerCase() === theAnswer) {
    totalScore += 1;
    userAnswer.value = "";
    totalPointsElement.innerHTML = `Total Points: <br>${totalScore}`;
    showMessageElement.innerHTML = `Good Job! Keep it going! You're score right now is: ${totalScore}!`;
    arrayOfQuestions.splice(randomQuestionIndex, 1);
    setTimeout(function () {
      showMessageElement.innerText = "";
    }, 5000);
    nextQuestionElement.style.display = null;
    nextQuestionElement.addEventListener("click", nextQuestionsCheckAndpush);
  } else {
    endMessageElement.innerHTML = `Sorry! The correct answer was: ${theAnswer}! You're final score was: ${totalScore};`;
    totalScore = 0;
    totalPointsElement.innerHTML = `${totalScore}`;
    hideButton.style.display = null;
    endButton.addEventListener("click", function () {
      setTimeout(function () {
        endMessageElement.innerText = "";
      }, 5000);

      window.location.reload();
    });
  }
  //callback function for checkAnswers function.
  // If answer is correct, generates a new question, removes the question from the array and allows for new random questions to generate on button click.
  function nextQuestionsCheckAndpush(event) {
    event.preventDefault();

    arrayOfQuestions = Object.keys(fetchData.clues);
    randomQuestionIndex = Math.floor(Math.random() * arrayOfQuestions.length);
    randomQuestion = fetchData.clues[arrayOfQuestions[randomQuestionIndex]];
    randomQuestion[Math.floor(Math.random() * fetchData.length)];
    theQuestion = randomQuestion.question;
    theAnswer = randomQuestion.answer.toLowerCase().toString();
    questionsElement.innerHTML = theQuestion;
  }
}
