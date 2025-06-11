document.addEventListener('DOMContentLoaded', function() {
  const revealElements = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60 && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}); 