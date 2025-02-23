var helpTextString = "Q&A\n" +
"Warum? Animierte Sticker\n" +
"    motivieren.\n" +
"Wie? Lerne Mathe und\n" +
"    sammel alle Cakumas®.\n" +
"Tipp: Klicke dich einmal\n" +
"    durch die gesamte App.\n" +
"Noch Fragen? Schreib mir\n" +
"   per Instagram:\n" +
"   @crashkurs_mathe\n";


var frontLvl = "Du bist momentan Level ";
var endLvl = ".\n" +
	"Lerne Mathe, um dein Level\n" +
	"noch weiter zu verbessern.\n" +
	"\n";

var helpTextLevel;

function navigateToPage(pageUrl) {
    try {
        window.location.href = pageUrl;
    } catch (error) {
        console.error('Navigation error:', error);
    }
}

//TODO nicer implementation and help txt
function helpButton(){
    let helpText = document.querySelector(".helpText");
    helpText.style.display = "block";
}

function turnVisibilityOff(name){
    let tempToTurnOff = document.querySelector(name);
    tempToTurnOff.style.display = "none";
}

// Loads the level from local storage into the level buttton
function loadButtonLevel() {
    // Retrieve the level from local storage
    let buttonLevel = localStorage.getItem("level") || "0";
    // Log the level to the console
    // Find the button element
    let buttonElement = document.querySelector('.levelDisplayButton');
    // Check if the button exists
    if (buttonElement) {
        // Update the button's text content
        buttonElement.textContent = buttonLevel; // Use "0" if level is null/undefined
        helpTextLevel = buttonLevel;
        // Set the button's onclick event handler


    } else {
      console.error("Button with class 'levelDisplayButton not found.");
    }

}
function levelButton() {
    helpTextLevel = localStorage.getItem("level");
    let lvlButton = document.querySelector(".levelText");
    lvlButton.style.display = "block";
    let levelTextToChange = document.querySelector(".levelText");
    levelTextToChange.textContent = frontLvl + helpTextLevel + endLvl;
}



function loadAllButtons(){
    loadButtonLevel();

    let helpTextToChange = document.querySelector(".helpText");
    helpTextToChange.textContent = helpTextString;
  
    let toolbarText = document.querySelector(".headerTextButton");
    toolbarText.textContent = "CRACKUMA-LAND";




}

document.addEventListener('DOMContentLoaded', function() {
    loadAllButtons();
    // Your code here
});