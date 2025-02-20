window.addEventListener("load", () => {

    const maxFrames = 20;
    let parentArray = document.querySelectorAll(".avatar");
    const debug = true;
    let debugLevel = 7;
    let level = 0;
    let currentPageName = getPageName();
    let frameRate = 2.3;

    loadLevel();

    function loadLevel(){
        level = localStorage.getItem(currentPageName) || 0;
        // Option to debug
        if (debugLevel) level = debugLevel;
        if (debug) console.log("Current level set at " + level); 
    }


    function loadAvatar(numberOfAvatars){
        if (numberOfAvatars>7) console.warn("more then 7 avatars requested");
        for (let i = 0; i < numberOfAvatars+1; i++) {
           
        }
    }

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

            // add classes for css
            let className = "animationFrame " + parentDiv.id;

            img.className = className;
            img.alt = "Frame " + i;
            img.style.display = "none";
            parentDiv.appendChild(img);
        }

        //activateFirstchild(parentDiv);
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

    function isVisibil(object){
        return object.style.display =="block";
    }

    function activateFirstchild(object){
        object.firstChild.style.display = "block";
    }

    // Cycles through the children of the parent

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

    function loadAvatars(){
        for (let i = 1; i <level+1; i++) {
        let avatar = "avatar_" + i;
        let avatarParentName = "avatarParent_"+i;
        loadAnimation(currentPageName ,avatar, avatarParentName);
    }
}
    loadAvatars();

    
    console.log("run");
    for (let i = 1; i <level+1; i++) {
        let avatar = "avatar_" + i;
        let avatarParentName = "avatarParent_"+i;
        playAnimationWithId(avatarParentName, frameRate);
    }



});


