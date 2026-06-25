document.addEventListener("DOMContentLoaded", () => {

  // Smooth fade-in animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  const elements = document.querySelectorAll(
    ".card, .plant-card, .dosha-card, .preserve-card"
  );

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});