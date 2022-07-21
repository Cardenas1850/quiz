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
var currentTime = document.getElementById('time');
var startQuiz = document.getElementById('start')
var questionsDiv = document.getElementById('questionsPrint');

// create code to start time on click of button
//set time variables
var timeReamining = 120;
var holdInterval = 0;
var timePenalty = 10;
var ulCreate = document.createElement("ul");

startQuiz.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval == setInterval(function () {
            timeReamining--;
            currentTime.textContent = "You have " + timeReamining + " seconds left";

    if (timeReamining <= 0) {
        clearInterval(holdInterval);
        finishQuiz();/*write code to complete quiz*/
        currentTime.textContent = "The quiz is complete";
    }
        },1000);
    }
});
