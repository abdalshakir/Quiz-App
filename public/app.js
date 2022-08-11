var questionsArray = [
    {
        //q1//
        question: "Javascript is an _______ language?",
        a: "Object Oriented",
        b: "Object Based",
        c: "None of above",
        answer: "a"
    },
    //q2//
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both A and B",
        answer: "c"
    },
    //q3//
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementbyId()",
        b: "getElementByClassName()",
        c: "Both a and b",
        answer: "c"
    },
    //q4//
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "var",
        b: "constant",
        c: "let",
        answer: "b"
    },
    //q5//
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "All of the above",
        answer: "c"
    },
    //q6//
    {
        question: "What keyword is used to check whether a given property is valid or not",
        a: "in",
        b: "is in",
        c: "exists",
        answer: "a"
    },
    //q7//
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        answer: "c"
    },
    //q8//
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: "Stringify()",
        b: "Parse()",
        c: "Convert()",
        answer: "a",
    },
    //q9//
    {
        question: "Which of the following are closures in Javascript?",
        a: "Variables",
        b: "Function or Object",
        c: "All of the above",
        answer: "c"
    },
    //q10//
    {
        question: "How to stop an interval timer in Javascript",
        a: "clearInterval",
        b: "clearTimer",
        c: "intervalOver",
        answer: "a"
    }

]

var result = document.getElementById("main-card");
var optionsAll = document.querySelectorAll(".options");
var question = document.getElementById("question");
var optionA = document.getElementById("opt1");
var optionB = document.getElementById("opt2");
var optionC = document.getElementById("opt3");
var nextBtn = document.getElementById("next_btn");


var queCount = 0;
var score = 0;

showQuestion(queCount);

function showQuestion(a) {

    deselectRadio();

    var currentQuiz = questionsArray[queCount];

    question.innerText = currentQuiz.question;
    optionA.innerText = currentQuiz.a;
    optionB.innerText = currentQuiz.b;
    optionC.innerText = currentQuiz.c;

    document.getElementById("queCount").innerText = queCount + 1;
}

function deselectRadio() {
    optionsAll.forEach(optionsAll => optionsAll.checked = false)
}

function getSelectedRadio() {
    var answer;
    optionsAll.forEach(optionsAll => {
        if (optionsAll.checked) {
            answer = optionsAll.id
        }
    })
    console.log(answer)
    return answer;
}

nextBtn.addEventListener("click", () => {
    var correctAns = getSelectedRadio();
    if (correctAns) {
        if (correctAns === questionsArray[queCount].answer) {
            score++;
        }
        queCount++;
        if (queCount < questionsArray.length) {
            showQuestion(queCount);
        } else {
            result.innerHTML = `
            <div class="card-body" style="height: 250px !important;font-size: 25px;">
            <h2>You answered ${score}/${questionsArray.length} questions correctly</h2>
            </div>
            `
        }
    }
})
