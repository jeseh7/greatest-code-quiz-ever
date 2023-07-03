//Initialize all variables
var introScreenEl = document.querySelector(".introScreenClass")
var titleEl = document.querySelector(".titleClass");
var subtitleEl = document.querySelector(".subtitleClass");
var startButtonEl = document.querySelector(".startClass");
var choiceEl = document.querySelector(".choiceClass");

var screenEl = document.querySelector(".screenClass");

//Display quiz title screen
titleEl.textContent = "This is the quiz title";
subtitleEl.textContent = "This is the quiz subtitle";
//Clicking "Start Quiz" button begins 
startButtonEl.addEventListener("click", mainFunc);


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
        CA: "DD",
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
];

let i=-1;
function mainFunc(){  
    i++;
    screenFunc();
}


choiceEl.addEventListener("click", mainFunc);

function screenFunc(){
    //Display screen 1
    introScreenEl.textContent = "";
    screenEl.textContent = allQuestions[i].Q;
    choiceEl.children[0].textContent = allQuestions[i].A1;
    choiceEl.children[1].textContent = allQuestions[i].A2;
    choiceEl.children[2].textContent = allQuestions[i].A3;
    choiceEl.children[3].textContent = allQuestions[i].A4;
};

//When question is wrong, deduct 15 seconds

//When quiz all 6 questions answered, display enter initials screen.

//When initials submitted, switch to highscore page

//Save highscore to local storage