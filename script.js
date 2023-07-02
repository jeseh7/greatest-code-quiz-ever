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
        A1: "A",
        A2: "B",
        A3: "C",
        A4: "D",
        CA: "D",
    },
    { 
        Q: "What is the answer to question 3?",
        A1: "A",
        A2: "B",
        A3: "C",
        A4: "D",
        CA: "B",
    },
    { 
        Q: "What is the answer to question 4?",
        A1: "A",
        A2: "B",
        A3: "C",
        A4: "D",
        CA: "D",
    },
    { 
        Q: "What is the answer to question 5?",
        A1: "A",
        A2: "B",
        A3: "C",
        A4: "D",
        CA: "D",
    },
    { 
        Q: "What is the answer to question 6?",
        A1: "A",
        A2: "B",
        A3: "C",
        A4: "D",
        CA: "A",
    }
]

//Print quiz intro screen
var introScreenVar = document.querySelector(".introScreenClass")
var title = document.querySelector(".titleClass");
var subtitle = document.querySelector(".subtitleClass");
title.textContent = "This is the quiz title";
subtitle.textContent = "This is the quiz subtitle";

//When start button is clicked, 1st question is displayed and timer starts
var screen1Var = document.querySelector(".screen1Class");
var q1Var = document.querySelector(".q1Class");
q1Var.textContent = "This is question 1";

var startButton = document.querySelector(".startClass");
startButton.addEventListener("click", screen1Func);

function screen1Func(){
    introScreenVar.textContent = "";
}

// When question is wrong, deduct 10 seconds

//When quiz all 6 questions answered, display enter initials screen.

//When initials submitted, switch to highscore page

//Save highscore to local storage