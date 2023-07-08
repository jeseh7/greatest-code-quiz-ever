var initialsEl = document.querySelector("#initialsId");
var submitEl = document.querySelector("#submitScore");
var collectEl = document.querySelector(".collectClass");
var highscoreListEl = document.querySelector(".highscoreListClass");

//highscoreListEl.textContent = "This is a test";



var secondsLeft = localStorage.getItem("secondsAtEnd");
console.log(secondsLeft);

var highscorePool = [];
console.log(highscorePool);


submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = document.querySelector("#initialsId").value;
    highscorePool.push(initials);

    localStorage.setItem("highscorePoolKey", JSON.stringify(highscorePool));

    printScoreArray();
});



function printScoreArray(){
        
    if (highscorePool.length !== 0){
        //I need to save user initials to the storage so that even after I refresh, initials stay
            for (var i=0; i<highscorePool.length; i++){
                localStorage.getItem("highscorePoolKey");
                var highscore = highscorePool[i];
                //console.log(highscore);
    
                var li = document.createElement("li");
                li.textContent = highscore;
                highscoreListEl.appendChild(li);
            };
        };
}