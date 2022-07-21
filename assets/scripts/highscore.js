var highScore = document.getElementById("highscores");

var scores = localStorage.getItem('scores');
scores = JSON.parse(scores);

if (scores !== null) {
    for (var i = 0; i < scores.length; i ++) {
     var createLi = document.createElement("li");
     createLi.textContent = scores[i].name + " " + scores[i].score;
     highScore.appendChild(createLi);
        }
    
}