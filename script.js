let userInput= prompt("Hi Bro!👋 (Type 'Hi' to continue.)");

while(userInput.toLocaleLowerCase() !== "hi"){
    userInput= prompt("What bro...Can't you simply say hi😒");
}

$("h1").html("Fuck You Bro!🖕");