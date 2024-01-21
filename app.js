let questionSection = document.querySelector('#questions')
let timerEl= document.querySelector('#timer')
let startButton = document.querySelector('#start')
let choiceEl = document.querySelector("#choices")
let feedbackEl = document.querySelector("#feedback")
let nameEl = document.querySelector("#name")
let submitButton = document.querySelector("#submit");

document.addEventListener('DOMContentLoaded', function() {
const questions = [
    {
        prompt: "Commonly used data types DO NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts" 
    },

    {
        prompt: "The condition in an if/else statement is enclosed within _____.",
        options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Curly Brackets"
    },

    {
        prompt: "Arrays in Javascript can be used to store _____.",
        options: ["Numbers & Strings", "Other Arrays", "Booleans", "All Of The Above"],
        answer: "All Of The Above"
    },

    {
        prompt: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["Commas", "Curly Brackets", "Quotes", "Parantheses"],
        answer: "Quotes"
    },

    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terrminal/Bash", "For Loops", "Console.log"],
        answer: "Console.log"
    }];
    let questionIndex = 0;
    let time = questions.length * 15

    let timerId;
    
    function quizBegins() {
        timerId = setInterval(clockTick, 1000);
        timerEl.textContent = time;
        let landingPage = document.querySelector("#landing-page");
        landingPage.classList.add("hide");
        questionSection.classList.remove("hide")
        getQuestion();
    }

        

    function getQuestion() {
        let currentQuestion = questions[questionIndex];
      let promptEl = document.querySelector("#prompt-questions")
        promptEl.textContent = currentQuestion.prompt;
        choiceEl.innerHTML = "";

        currentQuestion.options.forEach(function(choice, i) {
            let choicesBtn = document.createElement("button");
            choicesBtn.setAttribute("value", choice);
            choicesBtn.textContent = i + 1 + ". " + choice;
            choicesBtn.onclick = questionClick;
            choiceEl.appendChild(choicesBtn);
        });

        if (questionIndex === questions.length - 1){
            startButton.textContent = "Submit";
        }

        if (questionIndex === questions.length - 1) {
            quizCompleted();
        }
    }


    function questionClick() {
        if (this.value !== questions[questionIndex].answer) {
          time -= 10;
          if (time < 0) {
            time = 0;
          }
          timerEl.textContent = time;
          feedbackEl.textContent = `Incorrect! The correct answer was ${questions[questionIndex].answer}.`;} 
          else {
          feedbackEl.textContent = "Correct!";
        }
        feedbackEl.setAttribute("class", "feedback");
        setTimeout(function() {
          feedbackEl.setAttribute("class", "feedback-hide");
        }, 2000);
        questionIndex++;
        if (questionIndex === questions.length) {
          quizCompleted();} 
          else {
          getQuestion();}
    }
     function clockTick() {
        time--;
        timerEl.textContent = time;
         if(time <= 0) {
            quizCompleted()}
    }

    function quizCompleted() {
        clearInterval(timerId);
        questionSection.classList.add("hide");
        let quizEndEl = document.querySelector("#quiz-ends");
        quizEndEl.classList.remove("hide");
        // submitButton.classList.remove("hide");
        nameEl.classList.remove("hide");
        let finalEl = document.querySelector("#final-score");
        finalEl.textContent = "Your score is: " + time;
      
        let name = nameEl.value.trim();
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        let newScore = {
          score: time,
          name: name
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
      
    function checkForEnter(event) {
        if (event.key === "Enter") {
            highScore(event);
        }
    }
    nameEl.onkeyup = function(event){
        checkForEnter(event)};
    startButton.onclick = quizBegins;
    // submitButton.onclick = quizCompleted
});