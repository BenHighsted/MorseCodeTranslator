function ConvertTextToMorse()
{

}

//Rather than simply printing the text, I will run it through a method that does the conversion, then displays said converted text.
function textChanged()
{
    var x = document.getElementById("inputBox").value;
    document.getElementById("output").innerHTML = "You wrote: " + x;
}