var initialsEl = document.querySelector("#initialsId");
var submitEl = document.querySelector("#submitScore");
var collectEl = document.querySelector(".collectClass");
var highscoreListEl = document.querySelector(".highscoreListClass");

highscoreListEl.textContent = "This is a test";

var secondsLeft = localStorage.getItem("secondsAtEnd");
console.log(secondsLeft);

var highscoreList = [];

submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = document.querySelector("#initialsId").value;

    highscoreList.push(initials);
    console.log(highscoreList);

    let highscoreString = JSON.stringify(highscoreList);
    localStorage.setItem("initialsKey", highscoreString);

    collectEl.textContent = "";


    if (initials !== null){
        // Retrieving the string
        let retHighscoreString = localStorage.getItem("initialsKey");

        // Retrieved array
        let retHighscore = JSON.parse(retHighscoreString);
        var newScore = document.createElement("li");
        highscoreListEl.appendChild(newScore);
        newScore.textContent = retHighscore;
    }

    
});