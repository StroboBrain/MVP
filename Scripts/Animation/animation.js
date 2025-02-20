window.addEventListener("load", () => {

    const maxFrames = 20;
    const defaultParentDiv = document.getElementById('avatarParent_1');
    let debug = false;

    // Return the path to the frame with the name
    function generateFrameImagePath(folderName, name, index) {
        let path = "ImageResources/Avatars/"+ folderName + "/" + name + "/frame_" + index + ".png";
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

    async function checkFileExists(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok; // Returns true if status code is 200-299
        } catch (error) {
            console.error("Error checking file:", error);
            return false; // Returns false if there's an error (e.g., network issue)
        }
    }


    function addChildrenToParentDiv(parentDiv, pathArray,frameCount) {
        if(parentDiv.firstChild){
            console.log("Parent has a Child, no Image was added");
            return;
        }
        // Cleanup frameCount not needed anymore
        

        // Delete all children
        parentDiv.innerHTML = '';

        for (let i = 0; i < maxFrames; i++) {
            let tempPath = pathArray[i];
            const img = document.createElement('img');
            img.src = tempPath;

            // Checks width to decide if a picture was loaded
            if (img.naturalWidth<10){
                if (debug) console.log("No more Frames");
                break;
            }
            // add class for css

            let className = "animationFrame " + parentDiv.id;

            img.className = className;
            img.alt = "Frame " + i;
            img.style.display = "none";
            parentDiv.appendChild(img);
        }

        activateFirstchild(parentDiv);
    }

    function loadAnimation(folderName, name, parentName) {
        var imagesPathArray = generateImagePathArray(folderName, name);
        let tempParentDiv = document.getElementById(parentName);
        addChildrenToParentDiv(tempParentDiv,imagesPathArray);

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
        if (debug) console.log("Animation Played");
    }


    function playAnimationWithId(idName, framerate){
        let object = document.getElementById(idName);
        playAnimation(object,framerate);
    }

    function getPageName(){
        // Get the full path of the current URL
        let fullPath = window.location.pathname;
        console.log(fullPath);

        let pageName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
        pageName = pageName.split(".")[0];

        if (debug) console.log("Current page:" + pageName);
        return pageName;
    }

    // Starts the animations

    let frameRate = 2.3;
    let currentPageName = getPageName();

    for (let i = 1; i <8; i++) {
        let avatar = "avatar_" + i;
        let avatarP = "avatarParent_"+i;
        loadAnimation(currentPageName ,avatar, avatarP);
        playAnimationWithId(avatarP, frameRate);
    }
    


});


