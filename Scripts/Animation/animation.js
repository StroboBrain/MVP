document.addEventListener('DOMContentLoaded', () => {
    const parentDiv = document.getElementById('centerContent');
    if (!parentDiv) {
        console.error('Parent div not found');
        return;
    }

    const frameRate = 2;
    const frameCount = 4;
    const avatarName = "Crakuma_01";
    let imagesPathArray;

    // Return the path to the frame with the name
    function generateFrameImagePath(name, index) {
        return "/ImageResources/Crakumas/" + name + "/frame_" + index + ".png";
    }

    function generateImagePathArray(name, frameCount) {
        const images = [];
        for (let i = 0; i < frameCount; i++) {
            images.push(generateFrameImagePath(name, i));
        }
        return images;
    }

    function addChildrenToParentDiv() {
        // Delete all children
        parentDiv.innerHTML = '';

        for (let i = 0; i < frameCount; i++) {
            const img = document.createElement('img');
            img.src = imagesPathArray[i];
            img.className = "animationFrame";
            img.alt = "Frame " + i;
            img.display = "none";
            parentDiv.appendChild(img);
        }
    }

    function loadAnimation(name) {
        imagesPathArray = generateImagePathArray(name, frameCount);
        addChildrenToParentDiv();
        console.log("Loaded animation");
    }

    function playAnimation(){
    
    }

    loadAnimation(avatarName);
});

