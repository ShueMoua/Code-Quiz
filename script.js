// Setting the body to a variable
// var body = document.body;

var startHTML = document.getElementById("start");
var questionHTML = document.getElementById("question");
var questiontext = document.getElementById("questiontext");
var option1 = document.getElementById("numb1");
var option2 = document.getElementById("numb2");
var option3 = document.getElementById("numb3");
var option4 = document.getElementById("numb4");
var check = document.getElementById("check");
var next = document.getElementById("Next");
var results = document.getElementById("results");

var questionarray = [
    {
        question: "What is 2 + 2?",
        option1: "22",
        option2: "4",
        option3: "87",
        option4: "14",
        correct: "2",
    },
    {
        question: "What is 9 + 6?",
        option1: "11",
        option2: "31",
        option3: "96",
        option4: "15",
        correct: "4",
    },
    {
        question: "What is 7 * 4?",
        option1: "21",
        option2: "28",
        option3: "35",
        option4: "47",
        correct: "2",
    },
    {
        question: "What is 5 + 1?",
        option1: "6",
        option2: "51",
        option3: "15",
        option4: "31",
        correct: "1",
    }
]

var questNumber = 0;
var correctResponse = 0;
var wrongResponse = 0;

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
    questiontext.textContent = questionarray[questNumber].question
    option1.textContent = questionarray[questNumber].option1
    option2.textContent = questionarray[questNumber].option2
    option3.textContent = questionarray[questNumber].option3
    option4.textContent = questionarray[questNumber].option4
}

function checkResponse(userentry){
    console.log(userentry)
    if (userentry === questionarray[questNumber].correct) {
      correctResponse++ 
      check.textContent = "Correct!" 
    } else {
        wrongResponse++
        check.textContent = "Incorrect!"
    }
    if (questNumber < questionarray.length - 1 ) {
        questNumber++
        getQuestion()
    } else {
        console.log("End Quiz")
        DisplayScore()
    }
}

function DisplayScore (){
    next.style.display="block";
    questionHTML.style.display = "none";
}


 function saveUser() {
     var user = document.getElementById("input").value
     console.log(user,correctResponse,wrongResponse)
 }












questionHTML.style.display = "none"
next.style.display="none"
