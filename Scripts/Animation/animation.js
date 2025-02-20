document.addEventListener('DOMContentLoaded', () => {
    const defaultParentDiv = document.getElementById('avatarParent_1');



    // Return the path to the frame with the name
    function generateFrameImagePath(folderName, name, index) {
        let path = "ImageResources/Avatars/"+ folderName + "/" + name + "/frame_" + index + ".png";
        console.log(path);
        return path;
    }




    function generateImagePathArray(folderName, name, frameCount) {
        const imagesArray = [];
        for (let i = 0; i < frameCount; i++) {
            imagesArray.push(generateFrameImagePath(folderName, name, i));
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
            // add class for css
            img.className = "animationFrame";
            img.alt = "Frame " + i;
            img.style.display = "none";
            parentDiv.appendChild(img);
        }
        activateFirstchild(parentDiv);
    }

    function loadAnimation(folderName, name, parentName, frameCount) {
        console.log(frameCount);
        var imagesPathArray = generateImagePathArray(folderName, name, frameCount);
        let tempParentDiv = document.getElementById(parentName);
        addChildrenToParentDiv(tempParentDiv,imagesPathArray,frameCount);


    }

    function changeVisibility(object){
        if (object.style.display === "none") {
            object.style.display = "block";
        } else {
            object.style.display = "none";
        }
    }

    function activateFirstchild(object){
        object.firstChild.style.display = "block";
    }

    // Cycles through the children of the parent

    function playAnimation(parentDiv, framerate){
        let index = 0;
        let arrayLength = parentDiv.childNodes.length;
        setInterval(() => {
            let nextIndex = (index + 1) % arrayLength;
            changeVisibility(parentDiv.childNodes[nextIndex]);
            changeVisibility(parentDiv.childNodes[index]);
            index = nextIndex;
        }, 1000 / framerate);
        console.log("Animation Played");
    }

    function playAnimationWithId(idName, framerate){
        let object = document.getElementById(idName);
        playAnimation(object,framerate);
    }


    loadAnimation("index","avatar_1", "avatarParent_1",4);
    playAnimationWithId("avatarParent_1",1);

    // Animation

});


