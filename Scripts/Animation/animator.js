var frameRate = 2.3;
var loopArray = [];
var mapTitle;
var indexToToggle = 0;
const constMaxFrames = 20;


function runAnimationOfElement(){
    let elmentToToggle = "avatar_1_frame_0"
    toggleDisplay(elmentToToggle);
}
function runAnimation(){
    cycleThrouLoopArray();
}

function activateFirstFrame(){
    for (const item of loopArray){
        toggleDisplayWithObject(item[0]);
    }
}



function cycleThrouLoopArray(){

    for (let i = 0; i<loopArray.length; i++) {
        for (const item of loopArray) {
        //Make sure its a valid index
        let arrayIndex = indexToToggle%item.length;
        let arrayIndexNext = (indexToToggle+1)%item.length;
        toggleDisplayWithObject(item[arrayIndex]);
        toggleDisplayWithObject(item[arrayIndexNext]);
    }
    }
    indexToToggle++;
    indexToToggle = indexToToggle%constMaxFrames;
    
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

function loopFunction(framerate) {
    let lastTime = 0; // Time of the last frame
    function loop(timestamp) {
      if (timestamp - lastTime >= 1000 / framerate) {  // Check if enough time has passed
        runAnimation(); // Call the function
        lastTime = timestamp; // Update the last time
      }
      requestAnimationFrame(loop); // Continue the loop
    }
    requestAnimationFrame(loop); // Start the loop
}

function generateLoopArray(){

    for (let i = 1; i<8; i++) {
        let tempLoopOnly = document.getElementsByClassName('avaParent_' + i);
        loopArray.push(tempLoopOnly);
    } 
    
}



window.onload = function() {
    console.log("Page has fully loaded.");
    mapTitle = document.title;
    console.log("Pagename: " + mapTitle);
    generateLoopArray();
    activateFirstFrame();

    // Add your code here
    loopFunction(frameRate);
};
  