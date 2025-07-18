// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetID = this.getAttribute("href");
      const target = document.querySelector(targetID);
      if (!target) return;

      const startY = window.scrollY;
      const endY = target.getBoundingClientRect().top + startY;
      const duration = 800; // total scroll time in ms
      const startTime = performance.now();

      function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // from 0 to 1
        const ease = easeInOutCubic(progress); // easing for smooth effect

        window.scrollTo(0, startY + (endY - startY) * ease);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    });
  });

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
});

// Toggle menu for mobile
function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("active");
}
