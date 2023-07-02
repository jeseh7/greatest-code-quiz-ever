//Initialize all variables
var introScreenEl = document.querySelector(".introScreenClass")
var titleEl = document.querySelector(".titleClass");
var subtitleEl = document.querySelector(".subtitleClass");
var startButtonEl = document.querySelector(".startClass");

//var choiceEl = document.querySelector(".choiceClass")

var screen1El = document.querySelector(".screen1Class");

var screen2El = document.querySelector(".screen2Class");

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

/*
function screen1Func(){
    display screen 1
}
function screen2Func(){
    display screen 2
}

function screen3Func(){
    display screen 3
}

function screen4Func(){
    display screen 4
}

function screen5Func(){
    display screen 5
}

function screen6Func(){
    display screen 6
}

//var funcArray = [screen1Func(), screen2Func(), screen3Func(), screen4Func()
                    screen5Func(), screen6Func()];

function nextPage(){
    for (var i=0; i<allQuestions.length; i++){
        funcArray[i];
    }
}


//Create function for going through each quiz question. You're going to want
//to make an array of functions, each display screen being a function.


screen1Li.classList.add("choiceClass");
screen1Li.addEventListener("click", nextPage);


function nextPage(){
    for (var i=0; i<allQuestions.length; i++){
        functionsArray[i]
    }
}

nextPage();


//Print quiz intro screen
titleEl.textContent = "This is the quiz title";
subtitleEl.textContent = "This is the quiz subtitle";

//When start button is clicked, 1st question is displayed and timer starts
startButtonEl.addEventListener("click", screen1Func);

//////////////////////////////////////////////////////////////////////////
///////////////////////////////Screen 1//////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Create ordered list element
var screen1Li = document.createElement("ol");

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

//Display screen 1
function screen1Func(){
    introScreenEl.textContent = "";
    screen1Li.textContent = allQuestions[0].Q;
    // Append answer choices to ordered list element to make them appear
    screen1Li.appendChild(screen1LiA);
    screen1Li.appendChild(screen1LiB);
    screen1Li.appendChild(screen1LiC);
    screen1Li.appendChild(screen1LiD);
}


//When an answer is clicker, move on to next screen
startButtonEl.addEventListener("click", screen2Func);
//////////////////////////////////////////////////////////////////////////
///////////////////////////////Screen 2//////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Create ordered list element
var screen2Li = document.createElement("ol");

// Create ordered list items
var screen2LiA = document.createElement("li");
var screen2LiB = document.createElement("li");
var screen2LiC = document.createElement("li");
var screen2LiD = document.createElement("li");

// Add text for answer choices
screen2El.appendChild(screen2Li);
screen2LiA.textContent = allQuestions[1].A1;
screen2LiB.textContent = allQuestions[1].A2;
screen2LiC.textContent = allQuestions[1].A3;
screen2LiD.textContent = allQuestions[1].A4;

//Display screen 1
function screen2Func(){
    screen1El.textContent = "";
    screen2Li.textContent = allQuestions[1].Q;
    // Append answer choices to ordered list element to make them appear
    screen2Li.appendChild(screen2LiA);
    screen2Li.appendChild(screen2LiB);
    screen2Li.appendChild(screen2LiC);
    screen2Li.appendChild(screen2LiD);
}
//When question is wrong, deduct 15 seconds

//When quiz all 6 questions answered, display enter initials screen.

//When initials submitted, switch to highscore page

//Save highscore to local storage
