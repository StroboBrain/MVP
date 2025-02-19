document.addEventListener('DOMContentLoaded', () => {
    const defaultParentDiv = document.getElementById('avatarParent_1');


    const frameRate = 1;
    const defaultFrameCount = 4;
    const avatarName = "Crakuma_01";

    // Return the path to the frame with the name
    function generateFrameImagePath(name, index) {
        console.log("../ImageResources/Crakumas/" + name + "/frame_" + index + ".png");
        return "../ImageResources/Crakumas/" + name + "/frame_" + index + ".png";
    }


    function generateImagePathArray(name, frameCount) {
        const imagesArray = [];
        for (let i = 0; i < frameCount; i++) {
            imagesArray.push(generateFrameImagePath(name, i));
        }
        if (imagesArray.length !== frameCount) {
            console.error("Mismatch between imagesArray length and frameCount:", imagesArray, frameCount);
        }
        return imagesArray;
    }


    function addChildrenToParentDiv(parentDiv, pathArray,frameCount) {
        // Delete all children
        parentDiv.innerHTML = '';
        console.log(pathArray[0]);
        for (let i = 0; i < frameCount; i++) {
            const img = document.createElement('img');
            img.src = pathArray[i];
            img.className = "animationFrame";
            img.alt = "Frame " + i;
            //img.style.display = "none";
            parentDiv.appendChild(img);
        }

    }

    function loadAnimation(name, parentName, frameCount) {

        var imagesPathArray = generateImagePathArray(name, frameCount);

        let tempParentDiv = document.getElementById(parentName);
        addChildrenToParentDiv(tempParentDiv,imagesPathArray,frameCount);

        console.log(tempParentDiv.firstChild);
        changeVisibility(tempParentDiv.firstChild);
        console.log("Loaded animation");
        playAnimation(tempParentDiv);
    }

    function changeVisibility(object){
        if (object.style.display === "none") {
            object.style.display = "block";
        } else {
            object.style.display = "none";
        }
    }

    // Cycles through the children of the parent

    function playAnimation(parentDiv){
        let index = 0;
        setInterval(() => {
            changeVisibility(parentDiv.childNodes[index]);
            index = (index + 1) % frameCount;
            changeVisibility(parentDiv.childNodes[index]);
        }, 1000 / frameRate);
        console.log("Animation Played")
    }
    
    loadAnimation(avatarName,"avatarParent_1",4);
});

