var initialsEl = document.querySelector("#initialsId");
var submitEl = document.querySelector("#submitScore");
var collectEl = document.querySelector(".collectClass");
var scoreListEl = document.querySelector(".scoreList");

scoreListEl.textContent = "This is a test";

var secondsLeft = localStorage.getItem("secondsAtEnd");
console.log(secondsLeft);

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initials = document.querySelector("#initialsId").value;
    
    localStorage.setItem("initialsKey", initials);

    console.log(initials);

    collectEl.textContent = "";

    if (initials !== null){
        scoreListEl.textContent = initials;

    }
    
});