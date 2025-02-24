document.addEventListener('DOMContentLoaded', function () {
    function scaleViewport() {
      const container = document.querySelector('.appRoot');
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      // Add a little overhand
      const scaleX = (viewportWidth) / 1080;
      const scaleY = (viewportHeight) / 1920;

  
      const scale = Math.min(scaleX, scaleY);
  
      // Apply scaling
      container.style.transform = `scale(${scale})`;
      container.style.transformOrigin = 'top left';
    }
  
    // Initial scale
    scaleViewport();
  
    // Rescale on window resize
    window.addEventListener('resize', scaleViewport);
  });