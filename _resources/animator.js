var framerate = 2.3;
var loopArray = [];
var mapTitle;
var indexToToggle = 1;
const constMaxFrames = 20;
var arrayIndex;
var arrayIndexNext;
var checkIndex1 = 0;
var checkIndex2 = 0;
var checkIndex3 = 0;
var object1;
var object2;
var object3;

var pathArray = [["ImageResources/Avatars/map/avatar_1/frame_1.png",'ImageResources/Avatars/map/avatar_1/frame_2.png','ImageResources/Avatars/map/avatar_1/frame_3.png','ImageResources/Avatars/map/avatar_1/frame_0.png']];
console.log(pathArray);



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

        switch (checkIndex1) {
            case 0:
                object1.src = "ImageResources/Avatars/map/avatar_1/frame_1.png";

                checkIndex1++;
                break;
            case 1:
                object1.src = 'ImageResources/Avatars/map/avatar_1/frame_2.png';
                console.log(" in load switch");
                checkIndex1++;
                break;
            case 2:
                object1.src = 'ImageResources/Avatars/map/avatar_1/frame_3.png';
                console.log(" in load switch");
                checkIndex1++;
                break;
            case 3:
                object1.src = 'ImageResources/Avatars/map/avatar_1/frame_0.png';
                console.log(" in load switch");
                checkIndex1 = 0;

            default:
                resultMessage = 'Value not recognized.';
        }

        switch (checkIndex2) {
            case 0:
                object2.src = "ImageResources/Avatars/map/avatar_2/frame_1.png";
                checkIndex2+=1;
                break;
            case 1:
                object2.src = 'ImageResources/Avatars/map/avatar_2/frame_0.png';
                checkIndex2=0;
                break;
            default:
                resultMessage = 'Value not recognized.';
        }
        switch (checkIndex3) {
            case 0:
                object3.src = "ImageResources/Avatars/map/avatar_3/frame_1.png";
                console.log("load switch");
                checkIndex3++;
                break;
            case 1:
                object3.src = 'ImageResources/Avatars/map/avatar_3/frame_2.png';
                console.log(" in load switch");
                checkIndex3++;
                break;
            case 2:
                object3.src = 'ImageResources/Avatars/map/avatar_3/frame_0.png';
                console.log(" in load switch");
                checkIndex3 = 0;
                break;
            default:
                resultMessage = 'Value not recognized.';
        }
    




    //Repeat for each element

    for (let i = 0; i<loopArray.length; i++) {

        //toggleIndex();
    }
    indexToToggle = (1+indexToToggle)%constMaxFrames;

    
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
    object1 = document.getElementsByClassName("avatar_1_frame_0")[0];
    object2 = document.getElementsByClassName("avatar_2_frame_0")[0];
    object3 = document.getElementsByClassName("avatar_3_frame_0")[0];


    console.log("Page has fully loaded.");
    mapTitle = document.title;
    console.log("Pagename: " + mapTitle);
    generateLoopArray();
    //activateFirstFrame();
    loopFunction();
};

