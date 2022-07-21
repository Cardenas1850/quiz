var questions = [
    {
        title:"Commonly used data types do NOT include",
        options:["strings", "booleans","alerts","numbers"],
        answer:"alerts"
    },
    {
        title:"A very useful tool for development and debugging that allows the user to print content to the debugger is:",
        options:["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        title:"Arrays in Javascript can be used to store:",
        options:["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer:"all of the above"
    },
    {
        title:"The condition of an if/else statement is enclosed within:",
        options:["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title:"String values must be enclosed within ___ when being assigned to variables",
        options:["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    }
];

//setting basic variables 
var questionList = 0;
var score = 0;
var currentTime = document.getElementById('time');
var startQuiz = document.getElementById('start');
var questionsDiv = document.getElementById('questionPrint');

// create code to start time on click of button
//set time variables
var timeReamining = 120;
var holdInterval = 0;
var timePenalty = 10;
var ulCreate = document.createElement("ul");

startQuiz.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeReamining--;
            currentTime.textContent = "You have " + timeReamining + " seconds left";

    if (timeReamining <= 0) {
        clearInterval(holdInterval);
        finishQuiz();
        currentTime.textContent = "The quiz is complete";
    }
        },1000);
    }
    render(questionList);
});

//create questions 

function render(questionList) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionList].title;
        var userOptions = questions[questionList].options;
        questionsDiv.textContent = userQuestion;
       }
    userOptions.forEach(function (newItem) {
        var listOption = document.createElement("li");
        listOption.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listOption);
        listOption.addEventListener("click", correct);
    });
}

//funtion to test correct options
function correct(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionList].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            timeReamining = timeReamining - timePenalty;
            createDiv.textContent  = "Not correct :(";
        }
    }

 questionList++;

 if (questionList >= questions.length) {
    finishQuiz();
    createDiv.textContent = 
    "The quiz is finished" + "Your score is" + score + "/" + questions.length + "correct"; 
 } else {
    render(questionList);
 }
questionsDiv.appendChild(createDiv);
}


 //code to complete quiz

 function finishQuiz() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createh1 = document.createElement("h1");
    createh1.setAttribute("id", "createh1");
    createh1.textContent = "Quiz Complete!";

    questionsDiv.appendChild(createh1);


//stop timer 
    if (timeReamining >= 0) {
        var timeLeft = timeReamining;
        var createP = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeLeft;

        questionsDiv.appendChild(createP);
    }
var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your name";

questionsDiv.appendChild(createLabel);

var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initals");
createInput.textContent = "";

questionsDiv.appendChild(createInput);

var createScore = document.createElement("button");
createScore.setAttribute("type", "submit");
createScore.setAttribute("id", "submit");
createScore.textContent = "Submit Score";

questionsDiv.appendChild(createScore);


//local storage saving
createScore.addEventListener("click", function () {
var name = createInput.value;
if (name === null) {
    alert("please enter a name");
} else {
    var finalScore = {
        name: name,
        score: timeReamining
    };
    console.log(finalScore);
}
 });}