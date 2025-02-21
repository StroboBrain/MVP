var framerate = 2.3;
var loopArray = [];
var mapTitle;
var indexToToggle = 1;
const constMaxFrames = 20;


function runAnimationOfElement(){
    let elmentToToggle = "avatar_1_frame_0"
    toggleDisplay(elmentToToggle);
}
function runAnimation(){
    cycleThrouLoopArray();
}

function activateFirstFrame(){
    for (let i = 0; i<loopArray.length; i++) {
        loopArray[i][0].style.display = "block";
    }
}


function cycleThrouLoopArray(){
    let arrayIndex;
    let arrayIndexNext;
    for (let i = 0; i<loopArray.length; i++) {
        for (const item of loopArray) {
        //Make sure its a valid index
        let arrayIndex = indexToToggle%item.length;
        let arrayIndexNext = (indexToToggle+1)%item.length;
        toggleDisplayWithObject(item[arrayIndexNext]);
        toggleDisplayWithObject(item[arrayIndex]);
    }
    }
    indexToToggle = (1+ indexToToggle)%constMaxFrames;
    
}

// Define the function to toggle the display style
function toggleDisplay(elementClassId) {
    let tempIdObject = document.getElementById(elementClassId);
    toggleDisplayWithObject(tempIdObject);
}
  
// Define the function to toggle the display style
function toggleDisplayWithObject(element) {
    // Check if the element's display style is 'none' or 'block' and toggle it
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
}

function loopFunction() {
    // Calculate the interval time in milliseconds
    const intervalTime = 1000 / framerate;
    // Start the interval
    const intervalId = setInterval(async () => {
      try {
        cycleThrouLoopArray(); // Await the completion of the function
      } catch (error) {
        console.error('Error in cycleThrouLoopArray:', error);
      }
    }, intervalTime);

}

function generateLoopArray(){

    for (let i = 1; i<8; i++) {
        let tempLoopOnly = document.getElementsByClassName('avaParent_' + i);
        loopArray.push(tempLoopOnly);
    } 
    
}


// Only window.onload function
window.onload = function() {

    console.log("Page has fully loaded.");
    mapTitle = document.title;
    console.log("Pagename: " + mapTitle);
    generateLoopArray();
    activateFirstFrame();
    loopFunction();
};

