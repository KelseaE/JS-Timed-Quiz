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
    const questionSection = document.querySelector('#questions')
    const timerEl= document.querySelector('#timer')
    const startButton = document.querySelector('#start')
    const choiceEl = document.querySelector("#choices");

    let firstQuestion = 0;
    const time = questions.length - 10

    let timerId;
    function quizBegins() {
        timerId = setInterval(clockTick, 1000);
        timerEl.textContent = time;
        const landingPage = document.querySelector("#landing-page");
        landingScreenEl.setAttribute("end", "class");
        questionsEl.removeAttribute("class");
        getQuestion();
    }

    function clockTick() {
        time--;
        timerEl.textContent = time;
         if (time <= 0) {
            quizEnds()}
    }
        

    function getQuestion() {
        let currentQuestion = questions[firstQuestion];
      let promptEl = document.querySelector("#prompt-questions")
        promptEl.textContent = currentQuestion.prompt;
        choiceEl.setHTML() = "";
        currentQuestion.options.forEach(function(choice, i) {
            let choicesBtn = document.createElement("button");
            choicesBtn.setAttribute("value", choice);
            choicesBtn.textContent = i + 1 + ". " + choice;
            choicesBtn.onclick = questionClick;
            choicesEl.appendChild(choiceBtn);
        });
    }
    startButton.onclick = quizBegins;