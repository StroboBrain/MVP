document.addEventListener('DOMContentLoaded', () => {
    const defaultParentDiv = document.getElementById('avatarParent_1');



    // Return the path to the frame with the name
    function generateFrameImagePath(name, index) {
        let path = "../../ImageResources/Crakumas/" + name + "/frame_" + index + ".png";
        console.log(path);
        return path;
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

        for (let i = 0; i < frameCount; i++) {
            const img = document.createElement('img');
            img.src = pathArray[i];
            img.className = "animationFrame";
            img.alt = "Frame " + i;
            img.style.display = "none";
            parentDiv.appendChild(img);
        }


    }

    function loadAnimation(name, parentName, frameCount) {
        console.log(frameCount);
        var imagesPathArray = generateImagePathArray(name, frameCount);
        let tempParentDiv = document.getElementById(parentName);
        addChildrenToParentDiv(tempParentDiv,imagesPathArray,frameCount);

        playAnimation(tempParentDiv,1);
    }

    function changeVisibility(object){
        if (object.style.display === "none") {
            object.style.display = "block";
        } else {
            object.style.display = "none";
        }
    }

    // Cycles through the children of the parent

    function playAnimation(parentDiv, framerate){
        let index = 0;
        let arrayLength = parentDiv.childNodes.length;
        setInterval(() => {
            changeVisibility(parentDiv.childNodes[index]);
            index = (index + 1) % arrayLength;
            changeVisibility(parentDiv.childNodes[index]);
        }, 1000 / framerate);

        console.log("Animation Played");
    }
    
    loadAnimation("Crakuma_01","avatarParent_1",4);

});

