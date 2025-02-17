document.addEventListener('DOMContentLoaded', () => {
    // Start when the document is loaded
    
    const canvas = document.getElementById('animationCanvas');
    const context = canvas.getContext('2d');
    const frameRate = 2; // frames per second (slower)
    const frameCount = 2; // total number of frames
    let currentFrame = 0;

    function loadFrame(index) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = `AvatarResources/TestTim/Tim${index}.svg`; // Adjust the path and naming convention as needed
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    async function animate() {
        try {
            while (true) {
                const img = await loadFrame(currentFrame % frameCount);
                context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
                context.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw new frame
                currentFrame = (currentFrame + 1) % frameCount; // Loop the frame count
                await new Promise(resolve => setTimeout(resolve, 1000 / frameRate)); // Adjust the delay
            }
        } catch (error) {
            console.error('Error loading frame:', error);
        }
    }

    animate();
});