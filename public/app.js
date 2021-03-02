var min = 5;
var sec = 0;
var milisec = 0;
var second = document.getElementById("sec")
var minute = document.getElementById("min")
var timer;

function count() {
    milisec++
    if (milisec == 100) {
        sec--;
        milisec = 0;
        second.innerHTML = sec;
    } else if (min > 0 && sec == 0) {
        min--;
        sec = 59;
        second.innerHTML = sec;
        minute.innerHTML = min;
    } else if (min == 0 && sec == 0) {
        result()
        // clearInterval(countdown)
        sec = 00;
        min = 00;
        sec.innerHTML = sec;
        minute.innerHTML = min;
    }
}
timer = setInterval(count, 10)


var questionsArray = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        option1: "The <body> section",
        option2: "Both the <head> section and the <body> section are correct",
        option3: "The <head> section",
        answer: 2,
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "link",
        option2: "script",
        option3: "h1",
        answer: 2,
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        option1: "False",
        option2: "True",
        option3: "None of the above",
        answer: 2,
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'alert("Hello World");',
        option2: 'msg("Hello World");',
        option3: 'msgBox("Hello World");',
        answer: 1,
    },
    {
        question: "How do you create a function in JavaScript?",
        option1: "function=myFunction()",
        option2: "function:myFunction()",
        option3: "function myFunction()",
        answer: 3,
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: "call function myFunction()",
        option2: "myFunction()",
        option3: "call myFunction()",
        answer: 2,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        option1: "if i = 5",
        option2: "if (i == 5)",
        option3: "if (i == 5) then",
        answer: 2,
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: "if (i != 5)",
        option2: "if i =! 5 then",
        option3: "if i <> 5",
        answer: 1,
    },
    {
        question: "How does a FOR loop start?",
        option1: "for (i = 0; i <= 5)",
        option2: "for i = 1 to 5",
        option3: "for (i = 0; i <= 5; i++)",
        answer: 3,
    },
    {
        question: "How can you add a comment in a JavaScript?",
        option1: '"This is comment',
        option2: "<--This is comment-->",
        option3: "// This is comment",
        answer: 3,
    }
]

var countDown = 0;
var queCount = 0;

function showQuestion(a) {
    var que = document.getElementById("que").innerHTML = questionsArray[a].question;
    var option1 = document.getElementById("option1").innerHTML = questionsArray[a].option1;
    var option2 = document.getElementById("option2").innerHTML = questionsArray[a].option2;
    var option3 = document.getElementById("option3").innerHTML = questionsArray[a].option3;
}

function nextQuestion() {
    if (countDown < questionsArray.length - 1) {
        countDown++;
        showQuestion(countDown);
        queCount++;
        document.getElementById("queNum").innerHTML = queCount;
        // checkAns();
    }
}
function backQuestion() {
    queCount--;
    document.getElementById("queNum").innerHTML = queCount;
    showQuestion(queCount);

}


var score = 0;
var correctAns = 0;
var checkValue = document.getElementsByClassName("que-option");
// function checkAns() {
//     for (var i = 0; i <= checkValue.length; i++){
//         if(checkValue[i].checked === questionsArray[i].answer){
//             score += 10;
//             correctAns++;
//             checkValue[i].checked = false;
//         }else if (checkValue[i] !== questionsArray[i].answer){
//             checkValue[i].checked = false;
//         }

//     }
// }
console.log(checkValue.checked)


window.onload = function () {
    showQuestion(countDown);
    queCount++;
    document.getElementById("queNum").innerHTML = queCount;
}