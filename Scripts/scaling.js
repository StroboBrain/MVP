document.addEventListener('DOMContentLoaded', function () {
    function scaleViewport() {
      const container = document.querySelector('.appRoot');
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      // Add a little overhand
      const scaleX = (viewportWidth + 20) / 1080;
      const scaleY = (viewportHeight + 10) / 1920;

      // Scaling test might remove the +0.005
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