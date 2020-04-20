/**
 * This javascript file is used to convert text to morse code on my website.
 * 
 * Created by Ben Highsted.
 */

//Base alphabets
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var morseAlphabet = ".-, -..., -.-., -.., ., ..-., --., ...., .., .---, -.-, .-.., --, -., ---, .--., --.-, .-., ..., -, ..-, ...-, .--, -..-, -.--, --..";

//Adds numbers to the alphabets
alphabet += "1234567890";
morseAlphabet += ", .----, ..---, ...--, ....-, ....., -...., --..., ---.., ----., -----";

//Adds punctuation to the alphabets
alphabet += ".,?/@";
morseAlphabet += ", .-.-.-, --..--, ..--.., -..-., .--.-.";

//Converts alphabet/numbers/punctuation to arrays
var alphaArray = alphabet.split("");
var morseArray = morseAlphabet.split(", ");

function ConvertTextToMorse(input)
{
    var inputStr = input.toLowerCase();
    var inputArray = inputStr.split("");
    var output = "";
    
    for(var i = 0; i < inputArray.length; i++){
        if(findMorse(alphaArray.indexOf(inputArray[i])) != null){
            output += (findMorse(alphaArray.indexOf(inputArray[i])) + " ");
        }else if(inputArray[i] == " "){
            output += "/" + " ";
        }else{
            output += "?" + " ";
        }
    }

    return output;
}

function ConvertMorseToText(input)
{
    var inputArray = input.split(" ");
    var output = "";
    
    for(var i = 0; i < inputArray.length; i++){
        if(findText(morseArray.indexOf(inputArray[i])) != null){
            output += (findText(morseArray.indexOf(inputArray[i])));
        }else if(inputArray[i] == "/"){
            output += " ";
        }/*else{
            output += "?" + " ";
        }*/
    }

    return output;
}

function textChanged()
{
    var input = document.getElementById("inputBox").value;
    var convertOption = document.getElementById("options").value;

    if(convertOption == "text"){
        var output = ConvertTextToMorse(input);
    }else{
        var output = ConvertMorseToText(input);
    }

    if(output == null){
        document.getElementById("output").innerHTML = "Error: Could not translate entry.";
    }else{
        document.getElementById("output").innerHTML = output;
    }
    
}

function findMorse(input)
{
    return morseArray[input];
}

function findText(input)
{
    return alphaArray[input];
}