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
let hideButton = document.getElementById("hideButton")
let userAnswer = document.getElementById("userAnswer");
let endButton = document.getElementById("endButton")
let endMessageElement = document.getElementById("endMessage");
nextQuestionElement.style.display = "none";
hideButton.style.display = "none";

let theAnswer = "";
let theQuestion = ""
let jeopardyData
let categoryTitle
let cluesToArray
let randomq
let randomqIndex
let usedQuestions = []

fetch(`https://jservice.io/api/category/?id=${Math.floor(Math.random() * 100) + 1}`)
    .then(response => response.json())
    .then(data => {
        jeopardyData = data.clues[0];
        theQuestion = jeopardyData.question;
        questionsElement.append(theQuestion);
        theAnswer = jeopardyData.answer.toLowerCase().toString();
        categoryTitle = data.title;
        categoryTitleElement.append(categoryTitle)
        submitButtonElement.addEventListener("click", checkAnswers);


        function checkAnswers(event) {
            event.preventDefault()

            if (userAnswer.value.toString().toLowerCase() === theAnswer) {
                totalScore += 1;
                userAnswer.value = ""
                totalPointsElement.innerHTML = `${totalScore}`
                showMessageElement.innerHTML = `Good Job! Keep it going! You're score right now is: ${totalScore}!`;
                setTimeout(function () {
                    showMessageElement.innerText = "";
                }, 5000);
                nextQuestionElement.style.display = null;
                nextQuestionElement.addEventListener("click", nextQuestionsCheckAndpush);
            } else {
                endMessageElement.innerHTML = `Sorry! The correct answer was: ${theAnswer}! You're final score was: ${totalScore};`
                hideButton.style.display = null;
                endButton.addEventListener("click", function () {
                    setTimeout(function () {
                        endMessageElement.innerText = "";
                    }, 5000);
                    window.location.reload()
                })

            }

            function nextQuestionsCheckAndpush(event) {
                event.preventDefault();

                cluesToArray = Object.keys(data.clues);
                randomqIndex = Math.floor(Math.random() * cluesToArray.length)
                randomq = data.clues[cluesToArray[randomqIndex]];
                randomq[Math.floor(Math.random() * data.length)];
                theQuestion = randomq.question
                theAnswer = randomq.answer.toLowerCase().toString();
                questionsElement.innerHTML = theQuestion
                usedQuestions.push(theQuestion)

                if (userAnswer.value.toString().toLowerCase() === theAnswer) {
                    totalScore + 1;
                    totalPointsElement.innerHTML = `${totalScore}`
                    showMessageElement.innerHTML = `Good Job! Keep it going! You're score right now is: ${totalScore}!`;
                    setTimeout(function () {
                        showMessageElement.innerText = "";
                    }, 5000);

                }

            }
        }
    })

