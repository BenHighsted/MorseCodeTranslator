var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = alphabet.split("");

var morsealphabet = "";
var morseArray = [".-", "-...", "-.-."]//at the moment just gonna experiment with a, b and c.

function ConvertTextToMorse(input)
{
    var inputArray = input.split("");
    var output = "";
    
    for(var i = 0; i < inputArray.length; i++){
        output += (findMorse(alphaArray.indexOf(inputArray[i])) + " ");
    }

    return output;
}

//Rather than simply printing the text, I will run it through a method that does the conversion, then displays said converted text.
function textChanged()
{
    var input = document.getElementById("inputBox").value;
    var output = ConvertTextToMorse(input);
    document.getElementById("output").innerHTML = "Output: " + output;
}

function findMorse(input)
{
    return morseArray[input];
}

/**
 * Heres my current plan:
 * 
 * textChanged() called when a new input is entered
 * get total contents from the "inputBox" textarea
 * run the contents through an algorithm which converts from text to morse
 * if it can be converted, do it. if its an unrecognised character, display a ? instead?
 * display output in the "output" <p>

.- A
-... B 
-.-. C
-.. D
. E
..-. F
--. G
.... H
.. I
.--- J
-.- K
.-.. L
-- M
-. N
--- O
.--. P
--.- Q
.-. R
... S
- T

*/