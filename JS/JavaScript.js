// JavaScript source code


var answers = 0;
var number1 = "";
var operation = ""

function num1() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 1;
    document.getElementById("screen").innerHTML = digit;
}
function num2() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 2;
    document.getElementById("screen").innerHTML = digit;
}
function num3() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 3;
    document.getElementById("screen").innerHTML = digit;
}
function num4() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 4;
    document.getElementById("screen").innerHTML = digit;
}
function num5() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 5;
    document.getElementById("screen").innerHTML = digit;
}
function num6() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 6;
    document.getElementById("screen").innerHTML = digit;
}
function num7() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 7;
    document.getElementById("screen").innerHTML = digit;
}
function num8() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 8;
    document.getElementById("screen").innerHTML = digit;
}
function num9() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 9;
    document.getElementById("screen").innerHTML = digit;
}
function num0() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + 0;
    document.getElementById("screen").innerHTML = digit;
}
function numDot() {
    let n = document.getElementById("screen").value;

    let digit = n.toString() + ".";
    document.getElementById("screen").innerHTML = digit;
}
function acButton() {
    answers = 0;
    number1 = "";
    operation = "";
    document.getElementById("screen").innerHTML = "";
}
function percentageButton() {
    let n = document.getElementById("screen").value;

    document.getElementById("screen").innerHTML = (n/100);
}
function divideButton() {
    let n = document.getElementById("screen").value;

    if (number1 != "") {
        number1 = eval(`${number1} ${operation} ${n}`);
        operation = "/";
    }
    else {
        number1 = n.toString();
        operation = "/";
    }

    document.getElementById("screen").innerHTML = "";
}
function addButton() {
    let n = document.getElementById("screen").value;

    if (number1 != "") {
        number1 = eval(`${number1} ${operation} ${n}`);
        operation = "+";
    }
    else {
        number1 = n.toString();
        operation = "+";
    }

    document.getElementById("screen").innerHTML = "";
}
function substractButton() {
    let n = document.getElementById("screen").value;

    if (number1 != "") {
        number1 = eval(`${number1} ${operation} ${n}`);
        operation = "-";
    }
    else {
        number1 = n.toString();
        operation = "-";
    }

    document.getElementById("screen").innerHTML = "";
}
function multiplyButton() {
    let n = document.getElementById("screen").value;

    if (number1 != "") {
        number1 = eval(`${number1} ${operation} ${n}`);
        operation = "*";
    }
    else {
        number1 = n.toString();
        operation = "*";
    }

    document.getElementById("screen").innerHTML = "";
}
function equalsButton() {
    let n = document.getElementById("screen").value;

    answers = eval(`${number1} ${operation} ${n}`);
    operation = "";
    number1 = "";

    document.getElementById("screen").innerHTML = answers;
}