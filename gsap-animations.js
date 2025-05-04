document.addEventListener('DOMContentLoaded', function() {
  const featureBoxes = document.querySelectorAll('.feature-box');

  featureBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      gsap.to(box, { scale: 1, duration: 0.3, ease: 'easeInOut' });
    });

    box.addEventListener('mouseleave', () => {
      gsap.to(box, { scale: 1, duration: 0.3, ease: 'easeInOut' });
    });
  });
});
