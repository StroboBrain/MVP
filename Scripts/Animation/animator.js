var frameRate = 2.3;


function runAnimation(){
    let elmentToToggle = "avatar_1_frame_0"
    toggleDisplay(elmentToToggle);
}

// Define the function to toggle the display style
function toggleDisplay(elementClassId) {
    let tempIdObject = document.getElementById(elementClassId);
    console.log(tempIdObject);
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

function loopFunction(framerate) {
    let lastTime = 0; // Time of the last frame
    function loop(timestamp) {
      if (timestamp - lastTime >= 1000 / framerate) {  // Check if enough time has passed
        runAnimation(); // Call the function
        lastTime = timestamp; // Update the last time
      }
      requestAnimationFrame(loop); // Continue the loop
    }
    requestAnimationFrame(loop); // Start the loop
}



  


window.onload = function() {
    console.log("Page has fully loaded.");

    // Add your code here
    loopFunction(frameRate);
};
  