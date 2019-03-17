function validateForm() {
    if (!document.getElementById("fn").value.match(/^[a-zA-Z]+$/) ||
        !document.getElementById("ln").value.match(/^[a-zA-Z]+$/) ||
        !document.getElementById("uni").value.match(/^[a-zA-Z]+$/)||
        !document.getElementById("cls").value.match(/^[0-9a-zA-Z]+$/)) {
        alert("insert a valid information");
    }
    else {
        question();
        form.style.visibility = 'hidden';
    }
}

var allQuestions = [
    ["<h4>What is JavaScript?</h4>", "Another name for Java", "A scripting language mostly for the web", "When you use Java without compiling", "B"],
    ["<h4>For what JavaScript is used?</h4>", "frontend", "backend", "both", "C"],
    ["<h4>What is closure in javaScript?</h4>", "A closure is an inner function that has access to the variables in the outer function’s scope chain", "A closure is an outer function that has access to the variables in the inner function’s scope chain", "something else", "A"],
    ["<h4>What will be the output when the following code is executed? <br> console.log(false == '0')</h4>", "false", "true", "NaN", "B"],
    ["<h4>What will be the output when the following code is executed? <br> console.log(false === '0')</h4>", "false", "true", "NaN", "A"],
    ["<h4>What will be the output when the following code is executed? <br> console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));</h4>", "10", "10!", "90", "B"],
    ["<h4>What do the following lines output?<br> console.log(3 > 2 > 1);</h4>", "true", "false", "", "B"],
    ["<h4>How do you add an element at the begining of an array?</h4>", "arr[1] = 'element';", "arr.push('element');", "arr.unshift('element';", "C"],
    ["<h4>How do you add an element at the end of an array?</h4>", "arr[5] = 'element';", "arr.push('element');", "arr.unshift('element';", "B"],
    ["<h4>What is the type of 'NaN'? <br> use console.log(type of NaN === \"__\"); to check it.</h4>", "string", "boolean", "number", "C"]
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

    // document.getElementById("q").innerHTML = q;
    // document.getElementById("buttonA").innerHTML = ans1;
    // document.getElementById("buttonB").innerHTML = ans2;
    // document.getElementById("buttonC").innerHTML = ans3;

    var ques = document.getElementById("ques");
    ques.innerHTML = "<div>" + q + "</div><br>";
    ques.innerHTML += "<button id='button' onclick ='validateA()'>" + ans1 + "</button><br><br>";
    ques.innerHTML += "<button id='button' onclick ='validateB()'>" + ans2 + "</button><br><br>";
    ques.innerHTML += "<button id='button' onclick ='validateC()'>" + ans3 + "</button><br><br>";
    // ques.innerHTML +="<button type=radio id='skip' onclick='skip()'>SKIP</button>";
    ques.innerHTML += "<button type=radio id='fin'  onclick='finish()'>FINISH Quiz</button><br><br>";
    ques.innerHTML += "<div id='score'></div>";

    fiveQuestions.splice(randomIndex, 1);
}

var score = 0;
function validateA() {
    if (correct == "A") {
        ++score;
        question();
    }
    else {
        question();
    }
}
function validateB() {
    if (correct == "B") {
        ++score;
        question();
    }
    else {
        question();
    }
}
function validateC() {
    if (correct == "C") {
        ++score;
        question();
    }
    else {
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
    if (score <= 0) {
        r.innerHTML = "0";
    }
    else {
        r.innerHTML = score;
    }
    // } else {
    //     for (var i = 0; i < rest.length; i++) {
    //         r.innerHTML = rest[i];
    //     }
    // }
}


