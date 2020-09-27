// Setting the body to a variable
// var body = document.body;

var startHTML = document.getElementById("start")
var questionHTML = document.getElementById("question");
var questiontext = document.getElementById("questiontext");
var option1 = document.getElementById("numb1")
var option2 = document.getElementById("numb2")
var option3 = document.getElementById("numb3")
var option4 = document.getElementById("numb4")

var questionarray = [
    {
        question: "What is an HTML",
        option1: "oHypter textile",
        option2: "Hyper Text Markup Language",
        option3: "placeholder3",
        option4: "placeholder4",
        correct: "2"
    },
    {
        question: "What is an CSS",
        option1: "oHypter textile",
        option2: "Hyper Text Markup Language",
        option3: "placeholder3",
        option4: "Cascading style sheets",
        correct: "4"
    },
    {
        question: "What is an HTML",
        option1: "oHypter textile",
        option2: "Hyper Text Markup Language",
        option3: "placeholder3",
        option4: "placeholder4",
        correct: "2"
    },
    {
        question: "What is an HTML",
        option1: "oHypter textile",
        option2: "Hyper Text Markup Language",
        option3: "placeholder3",
        option4: "placeholder4",
        correct: "2"
    }
]

var qnumber = 0;

// Creating all necessary elements
// var h3el1 = document.createElement("h3");
// Need to move timer to the end on header doc
// var h3el2 = document.createElement("h3");
// var h1el1 = document.createElement("h1");
// var pel1 = document.createElement("p");
// var buttonEl = document.createElement("button");
// var timeLeft = 70;


// function Timer(){
//     var timerInterval = setInterval(function() {
//         timeLeft--;
//         if(timeLeft === 0) {
//             clearInterval(timerInterval);
//             //Add a function for when the timer ends 
//         }
//     }, 1000);
// }


// h3el1.textContent = "View Highscores";
// h3el2.textContent = "Time: " + timeLeft;
// h1el1.textContent = "Coding Quiz Challenge"
// pel1.textContent = "Try to answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds."
// buttonEl.textContent = "Start Quiz"

// body.appendChild(h3el1);
// body.appendChild(h3el2);
// body.appendChild(h1el1);
// body.appendChild(pel1);
// body.appendChild(buttonEl);

// h1el1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// pel1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// // How to move button to the center?
// buttonEl.setAttribute("style", "margin:auto; text-align:center;");

startHTML.addEventListener("click", startQuiz);

function startQuiz() {

    questionHTML.style.display = "block"

    startHTML.style.display = "none"
    getQuestion()

}

// Timer()


//

function getQuestion() {
    questiontext.textContent = questionarray[qnumber].question
    option1.textContent = questionarray[qnumber].option1
    option2.textContent = questionarray[qnumber].option2
    option3.textContent = questionarray[qnumber].option3
    option4.textContent = questionarray[qnumber].option4
}
questionHTML.style.display = "none"
