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
    let buttonLevel = localStorage.getItem("level");
    // Log the level to the console
    console.log("Level:", buttonLevel, "loaded");
    // Find the button element
    let buttonElement = document.querySelector('.levelDisplayButton');
    // Check if the button exists
    if (buttonElement) {
      // Update the button's text content
      buttonElement.textContent = buttonLevel || "0"; // Use "0" if level is null/undefined
    } else {
      console.error("Button with class 'levelDisplayButton' not found.");
    }
}
function loadAllButtons(){
    loadButtonLevel();

    let helpTextToChange = document.querySelector(".helpText");
    helpTextToChange.textContent = "Helptext is coming to a cinema near you soon";
    let toolbarText = document.querySelector(".headerTextButton");
    toolbarText.textContent = "CRACKUMA-LAND";
}

document.addEventListener('DOMContentLoaded', function() {
    loadAllButtons();
    // Your code here
});