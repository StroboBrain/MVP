var framerate = 2.3;
var mapTitle;
var avatar0;
var avatar1;
var avatar2;
var avatar3;
var avatar4;
var avatar5;
var avatar6;
var avatar7;
var objectArray;

// pathArray stored in seperate script named after the page



// current frame, last frame
var indexArray = [];

function generateIndexArray(){
    for (let i = 0; i<pathArray.length; i++) {
        indexArray.push([0,pathArray[i].length-1]);
    }
}


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

    for (let i = 0; i<objectArray.length; i++) {
        let nextIndex =indexArray[i][0];
        let maxFrame = indexArray[i][1];
        objectArray[i].src = pathArray[i][nextIndex];
        nextIndex++;
        if (nextIndex>maxFrame) nextIndex = 0;
        indexArray[i][0] = nextIndex;
    }
}


function toggleIndex(){
    for (const item of loopArray) {
        let arrayIndexObject = item[indexToToggle%item.length];
        let arrayIndexNextObject = item[(indexToToggle+1)%item.length];
        toggleTwoElements(arrayIndexNextObject,arrayIndexObject);
}

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
function getToggleStyle(elementToCheck){
if (elementToCheck.style.display === "none") {
    return "block";
  } else {
    return  "none";
  }
}


function toggleTwoElements(e1,e2){
    let e1Style = getToggleStyle(e1);
    let e2Style = getToggleStyle(e2);
    e1.style.display = e1Style;
    e2.style.display = e2Style;
    

    
}

function loopFunction() {
    // Calculate the interval time in milliseconds
    const intervalTime = 1000 / framerate;
    // Start the interval

    const intervalId = setInterval(async () => {
      try {
        cycleThrouLoopArray();
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
    mapTitle = document.title;
    console.log("Pagename: " + mapTitle);

    avatar0 = document.getElementsByClassName("avatar_0_frame_0")[0];
    avatar1 = document.getElementsByClassName("avatar_1_frame_0")[0];
    avatar2 = document.getElementsByClassName("avatar_2_frame_0")[0];
    avatar3 = document.getElementsByClassName("avatar_3_frame_0")[0];
    avatar4 = document.getElementsByClassName("avatar_4_frame_0")[0];
    avatar5 = document.getElementsByClassName("avatar_5_frame_0")[0];
    avatar6 = document.getElementsByClassName("avatar_6_frame_0")[0];
    avatar7 = document.getElementsByClassName("avatar_7_frame_0")[0];

    objectArray = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7];

    generateIndexArray();

    loopFunction();
};