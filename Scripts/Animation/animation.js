let maxFrames = 20;
let debug = true;
let debugLevel = 7;
let level = 0;
let frameRate = 2.3;
let reload = false;

// Defined on load
let animationParentsArray;
let currentPageName = document.title;

// Return the path to the frame with the name
function generateFrameImagePath(folderName, name, index) {
    let path = "ImageResources/Avatars/"+ currentPageName + "/" + name + "/frame_" + index + ".png";
    return path;
}

// Clean-Up Check frames earlier, max 20 frames
function generateImagePathArray(folderName, name) {
    const imagesArray = [];
    for (let i = 0; i < maxFrames; i++) {
        imagesArray.push(generateFrameImagePath(folderName, name, i));
    }
    return imagesArray;
}

function loadLevel(currentPageName){
    let tempLevel = localStorage.getItem(currentPageName) || 0;
    // Option to debug
    if (debugLevel) tempLevel = debugLevel;
    if (debug) console.log("Current level set at " + level);
    return tempLevel;
}


function generateImagePathArray(folderName, name) {
        const imagesArray = [];
        for (let i = 0; i < maxFrames; i++) {
            imagesArray.push(generateFrameImagePath(folderName, name, i));
        }
        return imagesArray;
}

function addChildrenToParentDiv(parentDiv, pathArray) {
    if(parentDiv.firstChild){
        console.log("Parent has a Child, no Image was added");
        return;
    }
    // Cleanup frameCount not needed anymore
    

    for (let i = 0; i < maxFrames; i++) {
        let tempPath = pathArray[i];
        const img = document.createElement('img');
        img.src = tempPath;

        // Checks width to decide if a picture was loaded
        if (img.naturalWidth<10){
            if (debug) console.log("No more Frames");
            break;
        }
        // add classes for css
        let className = "animationFrame " + parentDiv.id;
        img.className = className;
        img.alt = "Frame " + i;
        img.style.display = "none";
        parentDiv.appendChild(img);
    }

}

function changeVisibility(object){
    if (object.style.display === "none") {
        object.style.display = "block";
    } else {
        object.style.display = "none";
    }
}


function isVisibil(object){
    return object.style.display =="block";
}


function activateFirstchild(object){
    object.firstChild.style.display = "block";
}


function loadAnimation(folderName, name, parentNames) {
    var imagesPathArray = generateImagePathArray(folderName, name);
    let tempParentDiv = document.getElementById(parentNames);
    addChildrenToParentDiv(tempParentDiv,imagesPathArray);
}

function playAnimation(parentDiv, framerate){
    let index = 0;
    var arrayLength = parentDiv.childNodes.length;
    setInterval(() => {
        if (!parentDiv.firstChild){
            loadAvatars();
        }
        let nextIndex = (index + 1) % arrayLength;
        if (isVisibil(parentDiv.childNodes[index])){
            changeVisibility(parentDiv.childNodes[index]);
        }

        changeVisibility(parentDiv.childNodes[nextIndex]);
        index = nextIndex;
    }, 1000 / framerate);

    if (debug) console.log("Animation Played");
}

function playAnimationWithId(idName, framerate){
    let object = document.getElementById(idName);
    playAnimation(object,framerate);
}

function getPageName(){
    // Get the full path of the current URL
    let fullPath = window.location.pathname;
    let pageName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
    pageName = pageName.split(".")[0];
    if (debug) console.log("Current page :" + pageName);
    return pageName;
}

// Starts the animations TODO improve
function loadAvatars(currentPageName){
    for (let i = 1; i <level+1; i++) {
    let avatar = "avatar_" + i;
    let avatarParentName = "avatarParent_"+i;
    console.log(avatarParentName);
    loadAnimation(currentPageName,avatar, avatarParentName);
    }
}

function startAnimations(){
    for (let i = 1; i <level+1; i++) {
        let avatar = "avatar_" + i;
        let avatarParentName = "avatarParent_"+i;
        playAnimationWithId(avatarParentName, frameRate);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    animationParentsArray = document.getElementsByClassName('avatar');
    if (debug) console.log(animationParentsArray);
    currentPageName = getPageName();
    level = loadLevel(currentPageName);
    loadAvatars(currentPageName);
});

window.addEventListener('load', () => {
    startAnimations();
});
