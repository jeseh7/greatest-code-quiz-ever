//Initialize all variables
var introScreenEl = document.querySelector(".wrap")
var titleEl = document.querySelector(".titleClass");
var subtitleEl = document.querySelector(".subtitleClass");
var startButtonEl = document.querySelector(".startClass");
var choiceEl = document.querySelector(".choiceClass");
var screenEl = document.querySelector(".screenClass");

var timerEl = document.querySelector(".countdown");

//Display quiz title screen
titleEl.textContent = "The Greatest Coding Quiz Ever!!!";
subtitleEl.textContent = "Try and get as many questions right as you can! Every time you get a question wrong, you lose 15 seconds. If the timer runs out before you finish the code, you lose! Take the quiz as many times as you'd like to beat your score!";
//Clicking "Start Quiz" button begins 
startButtonEl.addEventListener("click", () => {
    mainFunc();
    timerFunc();
});

//Save all questions and answers to an array of objects
var allQuestions = [
    { 
        Q: "What is the answer to question 1?",
        A1: "A",
        A2: "B",
        A3: "C",
        A4: "D",
        CA: "A",
    },
    { 
        Q: "What is the answer to question 2?",
        A1: "AA",
        A2: "BB",
        A3: "CC",
        A4: "DD",
        CA: "BB",
    },
    { 
        Q: "What is the answer to question 3?",
        A1: "AAA",
        A2: "BBB",
        A3: "CCC",
        A4: "DDD",
        CA: "CCC",
    },
    { 
        Q: "What is the answer to question 4?",
        A1: "AAAA",
        A2: "BBBB",
        A3: "CCCC",
        A4: "DDDD",
        CA: "DDDD",
    },
    { 
        Q: "What is the answer to question 5?",
        A1: "AAAAA",
        A2: "BBBBB",
        A3: "CCCCC",
        A4: "DDDDD",
        CA: "AAAA",
    },
    { 
        Q: "What is the answer to question 6?",
        A1: "AAAAAA",
        A2: "BBBBBB",
        A3: "CCCCCC",
        A4: "DDDDDD",
        CA: "AAAAAA",
    }
];

let i=-1;
var secondsLeft = 75;

function timerFunc(){
    if (i > -1){
        var timeInterval = setInterval(function () {
            if (secondsLeft > 1){
                secondsLeft--;
                timerEl.textContent = "Time Left: " + secondsLeft;
            }
        }, 1000);
    };
}

function wrongAnswer(event){
    if (i >= 6){
        return;
    }
    console.log(i);
    var choice = event.target.innerHTML;
    if (choice !== allQuestions[i].CA){
        secondsLeft = secondsLeft - 10;
    }
    console.log(event.target.innerHTML);
    console.log(allQuestions[i].CA);
}

function mainFunc(){  
    i++;
    if (i >= 6){
        window.open("./highscores.html", "_self");
        return;
    };
    screenFunc();
}

choiceEl.addEventListener("click", () => {
    wrongAnswer(event);
    mainFunc();
});

function screenFunc(){
    //Display screens
    introScreenEl.textContent = "";
    introScreenEl.classList.remove("wrap");
    screenEl.textContent = allQuestions[i].Q;
    choiceEl.children[0].textContent = allQuestions[i].A1;
    choiceEl.children[1].textContent = allQuestions[i].A2;
    choiceEl.children[2].textContent = allQuestions[i].A3;
    choiceEl.children[3].textContent = allQuestions[i].A4;
};


//localStorage.setItem("initials", "value");

//When question is wrong, deduct 15 seconds

//When quiz all 6 questions answered, display enter initials screen.

//When initials submitted, switch to highscore page

//Save highscore to local storage