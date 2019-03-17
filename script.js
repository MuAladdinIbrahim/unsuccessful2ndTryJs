//var questions
var allQuestions = [
    ["What is JavaScript?", "Another name for Java", "A scripting language mostly for the web", "When you use Java without compiling", "B"],
    ["For what JavaScript is used?", "frontend", "backend", "both", "C"],
    ["What is closure in javaScript?", "A closure is an inner function that has access to the variables in the outer function’s scope chain", "A closure is an outer function that has access to the variables in the inner function’s scope chain", "something else", "A"],
    ["What will be the output when the following code is executed? console.log(false == '0')", "false", "true", "NaN", "B"],
    ["What will be the output when the following code is executed? console.log(false === '0')", "false", "true", "NaN", "A"],
    ["What will be the output when the following code is executed? console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));", "10", "10!", "90", "B"],
    ["What do the following lines output?<br> console.log(3 > 2 > 1);", "true", "false", "", "B"],
    ["How do you add an element at the begining of an array?", "arr[1] = 'element';", "arr.push('element');", "arr.unshift('element';", "C"],
    ["How do you add an element at the end of an array?", "arr[5] = 'element';", "arr.push('element');", "arr.unshift('element';", "B"],
    ["What is the type of 'NaN'? use console.log(type of NaN === \"__\"); to check it.", "string", "boolean", "number", "C"]
];
var fiveQuestions = [];
for (var i = 0; i < 5; i++) {
    var index = Math.floor(Math.random() * allQuestions.length);
    fiveQuestions.push(allQuestions[index]);
    allQuestions.splice(index, 1);
}

var correct = "";
function question() {
    var randomIndex = Math.floor(Math.random() * fiveQuestions.length);
    var q = fiveQuestions[randomIndex][0];
    var ans1 = fiveQuestions[randomIndex][1];
    var ans2 = fiveQuestions[randomIndex][2];
    var ans3 = fiveQuestions[randomIndex][3];
    correct = fiveQuestions[randomIndex][4];

    document.getElementById("q").innerHTML = q;
    document.getElementById("buttonA").innerHTML = ans1;
    document.getElementById("buttonB").innerHTML = ans2;
    document.getElementById("buttonC").innerHTML = ans3;

    fiveQuestions.splice(randomIndex, 1);
}
question();

var score = 0;

function validateA() {
    if (correct == "A") {
        ++score;
        question();
    }
    else {
        --score;
        question();
    }
}
function validateB() {
    if (correct == "B") {
        ++score;
        question();
    }
    else {
        --score;
        question();
    }
}
function validateC() {
    if (correct == "C") {
        ++score;
        question();
    }
    else {
        --score;
        question();
    }
}

// code for skip button __ not added yet.
// var rest = [];
// function skip() {
//     rest.push("There're skipped questions"); //push the skipped question itself not a message
//     question();
// }

function finish() {
    var r = document.getElementById("score");
    // if (rest.length == 0) {
    if (score < 3) {
        r.innerHTML = "You need to know more";
    }
    else {
        r.innerHTML = "Good Job";
    }
    // } else {
    //     for (var i = 0; i < rest.length; i++) {
    //         r.innerHTML = rest[i];
    //     }
    // }
}


//another way to write html instead in html file __ unused 
//  var ques = document.getElementById("ques");
//     ques.innerHTML = "<div>" + q + "</div><br>";
//     ques.innerHTML += "<button id='button' value = '\"A\"' onclick ='validateA()'  name='choices'>" + ans1 + "</button><br>";
//     ques.innerHTML += "<button id='button' value = '\"B\"' onclick ='validateB()'  name='choices'>" + ans2 + "</button><br>";
//     ques.innerHTML += "<button id='button' value = '\"C\"' onclick ='validateC()'  name='choices'>" + ans3 + "</button>";

