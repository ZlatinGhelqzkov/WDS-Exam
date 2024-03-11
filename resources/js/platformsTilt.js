const container = document.querySelector('.platforms');
const images = container.querySelector('.platforms-img > *');

// Track mouse movement for each image
  container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    // Calculate tilt values
    const tiltX = (containerRect.width / 2 - mouseX) / 50;
    const tiltY = (containerRect.height / 2 - mouseY) / 80;

    
    // Apply 3D tilt effect to the current image
    images.style.transition = `none`;
    images.style.transform = `rotateZ(${-tiltY}deg) rotateX(${tiltX}deg)`;
  });

  // Reset image position when mouse leaves container
  container.addEventListener('mouseleave', () => {
    images.style.transition = `0.4s ease-in-out`;
    images.style.transform = `rotateZ(0deg) rotateX(0deg)`;
  });
