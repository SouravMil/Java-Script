let input = prompt("enter your message");
function getSpecificAlert(userInput) 
{
    let lowerInput = userInput.toLowerCase();
    if (lowerInput === "hi") 
    {
        return "Hello";
    }
    else if (lowerInput === "thank you")
    {
        return "You're welcome!";
    }
    else {return "invalid input"}
}
alert(getSpecificAlert(input));

