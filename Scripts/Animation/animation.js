// Parent div for animation
const parentDiv = document.getElementById('centerContent');
var frameRate = 2;
var frameCount = 4;
var imagesPathArray = generateImagePathArray("Crakuma_01", frameCount);

// return the path to the frame with the name
function generateFrameImagePath(name, index) {
    return "/ImageResources/Crakumas/" + name + "/frame_" + index +".png";
}

function generateImagePathArray(name, frameCount) {
    var images = [];
    for (var i = 0; i < frameCount; i++) {
        images.push(generateFrameImagePath(name, i));
    }
    return images;
}

function addChildrenToParentDiv(){
    for (var i = 0; i < frameCount; i++) {
        var img = document.createElement('img');
        img.src = imagesPathArray[i];
        parentDiv.appendChild(img);
    }
}

