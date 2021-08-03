// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!




let theAnswer = "";
let theQuestion
let categoryId
let jeopardyData
let categoryTitle
fetch("https://jservice.io/api/random/")
    .then(response => response.json())
    .then(data => {
        jeopardyData = data[0];
        theQuestion = jeopardyData.question;
        getQuestionFromHTML.append(theQuestion);
        theAnswer = jeopardyData.answer.toLowerCase();
        categoryTitle = jeopardyData.category.title;
        getCategoryFromHTML.append(categoryTitle)
        categoryId = jeopardyData.id;
    })
let userAnswer;
let totalScore = 0;
let getTotalScoreToHTML = document.getElementById("totalPoints")
let getQuestionFromHTML = document.getElementById("questions");
let getCategoryFromHTML = document.getElementById("categoryTitle");
let submitButton = document.getElementById("submitAnswer");
let showMessage = document.getElementById("showMessage");


submitButton.addEventListener("click", checkAnswers)
function checkAnswers(event) {
    event.preventDefault();

    let userAnswer = document.getElementById("userAnswer")
    if (userAnswer.value.toLowerCase() === theAnswer) {
        totalScore += 1;
        console.log(totalScore)
        getTotalScoreToHTML.innerHTML = `${totalScore}`
        showMessage.innerText = `Good Job! Keep it going!`
        setTimeout(function () {
            showMessage.innerText = "";
        }, 5000);

    }

    else {
        totalScore = 0;
        let endButton = document.createElement("Button");
        endButton.addEventListener("click", function () {
            endButton.innerHTML = `Sorry! The correct answer was: ${theAnswer}! You're final score was: ${totalScore}.Try Again!`;
        })

    }

}

//use fetch to pull questions from the api 
//use a api that doesn't require an API key
//use math.random()
//questions will come from a single category, category must be random but only one category
//get a categories ID from a random question to use a parameter which gives questions in a particular category
//once random category is selected the questions will be randomly chosen as well. 
//questions using div id="questions"
//present a single q to the user
//when game begins a question will appear on the HTML, the questions & all next q's after will belong to the same category
//CANT be an alert or prompt, will use <p> tag


//allow the user to respond to the questopm
//create a way for the user to input an answer (input box)
//the users response should be a string, even if contains numbers
//CANT BE ALERT OR PROMPT, will use an input box 
//determine if answer is correct
//a correct answer awards one point and continues the game
//CAPILIZATION SHOULDNT MATTER, , adding to lowerCase() and tostring()
//give a message that they were right! NOT A PROMPT OR ALERT, will use document.write then setTimeout() to remove message after 5 seconds ,
//can remain for a few seconds then disappear either with a timer or a button
//after message is gone, give new question and place for user to answer worked in the loop
//an incorrect answer resets the game and resets the score to 0, will use a if statement
//after game ends give user a message NO PROMPT OR ALERT, 
//give option to play again which resets game, using a button for "try again" once clicked using event listener will rerender code" 

//keep track of and display a users score
//if correct answer add one point to total
//keep score until user answewrs incorrect answer use a loop to keep track of score:correct = =1 incorrect score = 0 then give play again button





//✔️will need to create button on page 1 for starting game, title(h1) for both pages,for second page:  category(h2), total points(p), q(ptag), a(input box), submit button(to submit a)

//✔️will need button for starting game:
//button will be on first page, which takes to second page


//✔️will need to use fetch to get categories and q's&a's
// div id="questions" for q's
//div id="answers"




    //✔️will need a button that allows the code to rerender to start game play over again.
    //will be called if incorrect answer is called. 

    //✔️will need a if statement for totalScore 
        //if answer is correct +1
        //else message"Sorry that was incorrect". try again with a button

        //will need to append one question to the p tag to show user the q
//will be done after fetch and category is selected
//will use querySelector and append results. 

//will need an input box, that has a submit option to send the users answer to be checked
//will use lowerCase() and tostring()


//will need a button for submit
//checks answer submitted with an event listener and rules

//will need to if statement to either add to score or give message was wrong and try again with button for restart
////if correct answer add one point to total
//keep score until user answewrs incorrect answer use a if statement to keep track of score:correct = +1 incorrect score = 0 then give play again button
