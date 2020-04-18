/**
 * 
 * This javascript file is used to convert text to morse code on my website.
 * 
 * Created by Ben Highsted.
 * 
 */

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = alphabet.split("");

var morseAlphabet = ".-, -..., -.-., -.., ., ..-., --., ...., .., .---, -.-, .-.., --, -., ---, .--., --.-, .-., ..., -, ..-, ...-, .--, -..-, -.--, --..";
var morseArray = morseAlphabet.split(", ");

function ConvertTextToMorse(input)
{
    var inputArray = input.split("");
    var output = "";
    
    for(var i = 0; i < inputArray.length; i++){
        output += (findMorse(alphaArray.indexOf(inputArray[i])) + " ");
    }

    return output;
}

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