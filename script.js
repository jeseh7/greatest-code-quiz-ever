//Initializ all variables
var introScreenEl = document.querySelector(".introScreenClass")
var titleEl = document.querySelector(".titleClass");
var subtitleEl = document.querySelector(".subtitleClass");
var screen1El = document.querySelector(".screen1Class");
var q1El = document.querySelector(".q1Class");
var startButtonEl = document.querySelector(".startClass");


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
titleEl.textContent = "This is the quiz title";
subtitleEl.textContent = "This is the quiz subtitle";

//When start button is clicked, 1st question is displayed and timer starts
startButtonEl.addEventListener("click", screen1Func);

//////////////////////////////////////////////////////////////////////////
///////////////////////////////Screen 1//////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Create ordered list element and give it a class of "hide"
var screen1Li = document.createElement("ol");

screen1Li.classList.add("hide");

// Create ordered list items
var screen1LiA = document.createElement("li");
var screen1LiB = document.createElement("li");
var screen1LiC = document.createElement("li");
var screen1LiD = document.createElement("li");
// Add text for answer choices
screen1El.appendChild(screen1Li);
screen1LiA.textContent = allQuestions[0].A1;
screen1LiB.textContent = allQuestions[0].A2;
screen1LiC.textContent = allQuestions[0].A3;
screen1LiD.textContent = allQuestions[0].A4;
// Append answer choices to ordered list element to make them appear
screen1Li.appendChild(screen1LiA);
screen1Li.appendChild(screen1LiB);
screen1Li.appendChild(screen1LiC);
screen1Li.appendChild(screen1LiD);

screen1El.textContent = "";
//Display screen 1
function screen1Func(){
    introScreenEl.textContent = "";
    q1El.textContent = "This is question 1";



}

//When question is wrong, deduct 15 seconds

//When quiz all 6 questions answered, display enter initials screen.

//When initials submitted, switch to highscore page

//Save highscore to local storage

