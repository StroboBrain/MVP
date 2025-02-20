

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
    let temp = document.querySelector(name);
    temp.style.display = "none";
}

// Loads the level from local storage into the level buttton
function loadLevel() {
    // Retrieve the level from local storage
    let level = localStorage.getItem("level");
  
    // Log the level to the console
    console.log("Level:", level, "loaded");
  
    // Find the button element
    let button = document.querySelector('.levelDisplayButton');
  
    // Check if the button exists
    if (button) {
      // Update the button's text content
      button.textContent = level || "N/A"; // Use "N/A" if level is null/undefined
    } else {
      console.error("Button with class 'levelDisplayButton' not found.");
    }
}


window.onload = function (){
    loadLevel();
};