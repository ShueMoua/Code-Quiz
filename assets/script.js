// Converting HTML elements for user in JS
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
var submitUser = document.getElementById("save");
var inputELE = document.getElementById("input");
var timerEle = document.getElementById("timer");

var userArray = JSON.parse(localStorage.getItem("userList")) || [];

// Created the question array
var questionarray = [{
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
var timerCounter = 15;

var timerInterval = 0

function Timer() {
    timerInterval = setInterval(function() {
        timerCounter--;
        if (timerCounter === 0) {
            DisplayScore()
        }
        timerEle.textContent = "Time: " + timerCounter
    }, 1000);
}

startHTML.addEventListener("click", startQuiz);
submitUser.addEventListener("click", submitScore);

function startQuiz() {

    questionHTML.style.display = "block"

    startHTML.style.display = "none"
    Timer()
    getQuestion()

}

function getQuestion() {
    questiontext.textContent = questionarray[questNumber].question
    option1.textContent = questionarray[questNumber].option1
    option2.textContent = questionarray[questNumber].option2
    option3.textContent = questionarray[questNumber].option3
    option4.textContent = questionarray[questNumber].option4
}

function checkResponse(userentry) {
    console.log(userentry)
    if (userentry === questionarray[questNumber].correct) {
        correctResponse++
        check.textContent = "Correct!"
    } else {
        wrongResponse++
        check.textContent = "Incorrect!";
        timerCounter
    }
    if (questNumber < questionarray.length - 1) {
        questNumber++
        getQuestion()
    } else {
        console.log("End Quiz")
        DisplayScore()
    }
}

function DisplayScore() {
    next.style.display = "block";
    questionHTML.style.display = "none";
    clearInterval(timerInterval);
}


function saveUser() {
    var user = document.getElementById("input").value
    console.log(user, correctResponse, wrongResponse)
}


function submitScore() {
    //add an append to append whatever the user submits to an ordered list on the score.html page
    var userID = inputELE.value
    userArray.push({
        user: userID,
        score: correctResponse
    })
    localStorage.setItem("userList", JSON.stringify(userArray))
    window.location.href = "score.html"
}


questionHTML.style.display = "none"
next.style.display = "none"