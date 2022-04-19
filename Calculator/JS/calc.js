/*  Author Jordan Lindo
    date 3/13/2019
*/

//This is a test
//alert('Yes it works');

var num1 = null;
var num2 = null;
var theMath = null;
var opCount = 0;
var resulted = false;
var pos1 = 0;

function theNum(x) {
    var screen = document.getElementById('screen');
    var screen_count = screen.value.length;
    if (resulted == false) {
        if (theMath == null) {
            if (screen_count >= 13) {
                //Do nothing
            } else {
                screen.value += x;
                num1 = screen.value;
            }
        } else if (opCount == 1) {
            opCount = 0;
            if (screen_count >= 13) {
                //Do nothing
            } else {
                screen.value = x;
                num2 = screen.value;
            }
        } else {
            opCount = 0;
            if (screen_count >= 13) {
                //Do nothing
            } else {
                screen.value += x;
                num2 = screen.value;
            }
        }
    } else {
        clearScreen();
        screen.value = x;
        num1 = x;
    }
}

function theFunc(y) {
    var screen = document.getElementById('screen');
    if (theMath == null) {
        screen.value = y;
        theMath = y;
        opCount = 1;
        resulted = false;
    }
}

function theReturn() {
    var result;
    var screen = document.getElementById('screen');
    if (num1 != null && num2 != null) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (theMath) {
            case ('+'):
                result = num1 + num2;
                break;
            case ('-'):
                result = num1 - num2;
                break;
            case ('x'):
                result = num1 * num2;
                break;
            case ('/'):
                if (num2 == 0){
                    result = "ERR";
                } else {
                result = num1 / num2;
                }
                break;
            default:
                result = "ERR";
                break;
        }
        result = result.toString();
        pos1 = (12 - result.indexOf("."));
        if (result.indexOf(".") != -1) {
            if (result.length >= 13){
            result = parseFloat(result);
            result = result.toFixed(pos1);
            } else {
                result = parseFloat(result);
            }
        }
        screen.value = result;
        theMath = null;
        num1 = result;
        num2 = null;
        resulted = true;
        opCount = 0;
    }
}

function theDot() {
    var screen = document.getElementById('screen')
    if (theMath == null){
        if (num1 != null){
            if (screen.value.indexOf(".") === -1){
                screen.value += '.';
            }
        } else{
            if (screen.value.indexOf(".") === -1){
                screen.value = '0.';
                num1 = screen.value;
            }
        }
    } else if (theMath != null){
        if (num2 != null){
            if (screen.value.indexOf(".") === -1){
                screen.value += '.';
            }
        } else {
            if (screen.value.indexOf(".") === -1){
                screen.value = '0.';
                num2 = screen.value;
                opCount = 0;
            }
        }
    }
}


function clearScreen() {
    document.getElementById('screen').value = ' ';
    num1 = null;
    num2 = null;
    theMath = null;
    resulted = false;
    opCount = 0;
}

function theClock() {
    
    var time = new Date();
    var timeHour = time.getHours();
    var timeMinute = time.getMinutes();
    var timeSecond = time.getSeconds();
    var theTime = timeHour+' : '+ timeMinute +' : '+timeSecond;
    document.getElementById('clock').innerHTML = theTime;
    setTimeout(theClock, 1000);
}

