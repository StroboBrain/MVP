document.addEventListener('DOMContentLoaded', () => {
    const defaultParentDiv = document.getElementById('centerContent');
    if (!defaultParentDiv) {
        console.error('Parent div not found');
        return;
    }

    const frameRate = 1;
    const frameCount = 4;
    const avatarName = "Crakuma_01";
    let imagesPathArray;
    // Return the path to the frame with the name
    function generateFrameImagePath(name, index) {
        console.log("/ImageResources/Crakumas/" + name + "/frame_" + index + ".png");
        return "/ImageResources/Crakumas/" + name + "/frame_" + index + ".png";
    }

    function generateImagePathArray(name, frameCount) {
        const images = [];
        for (let i = 0; i < frameCount; i++) {
            images.push(generateFrameImagePath(name, i));
        }
        
        return images;
    }

    function addChildrenToParentDiv(parentDiv) {
        // Delete all children
        parentDiv.innerHTML = '';

        for (let i = 0; i < frameCount; i++) {
            const img = document.createElement('img');
            img.src = imagesPathArray[i];
            img.className = "animationFrame";
            img.alt = "Frame " + i;
            img.style.display = "none";
            parentDiv.appendChild(img);
        }

    }

    function loadAnimation(name) {
        imagesPathArray = generateImagePathArray(name, frameCount);
        addChildrenToParentDiv(defaultParentDiv);
        changeVisibility(defaultParentDiv.firstChild);
        console.log("Loaded animation");
    }

    function changeVisibility(object){
        if (object.style.display === "none") {
            object.style.display = "block";
        } else {
            object.style.display = "none";
        }
    }

    function playAnimation(parentDiv){
        let index = 0;
        setInterval(() => {
            changeVisibility(parentDiv.childNodes[index]);
            index = (index + 1) % frameCount;
            changeVisibility(parentDiv.childNodes[index]);
        }, 1000 / frameRate);
    
    }

    loadAnimation(avatarName);
    playAnimation(defaultParentDiv);
});

