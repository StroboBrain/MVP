// Array of image paths (relative to the HTML file)
var images = [
    "AvatarResources/TestTim/Tim0.svg",
    "AvatarResources/TestTim/Tim1.svg",
];

var x = 0; // Counter for the current image

// Function to animate the images
function Animate() {
    document.getElementById("img").src = images[x];
    x++;
    if (images.length == x) {
        x = 0; // Reset to the first image
    }
}

// Call Animate() every 400ms
setInterval(Animate, 400);