// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Interactive elements
document.querySelectorAll(".color-card").forEach((card) => {
  card.addEventListener("click", function () {
    const colorCode = this.querySelector(".color-code").textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
      // Visual feedback
      const originalText = this.querySelector(".color-code").textContent;
      this.querySelector(".color-code").textContent = "Copié!";
      setTimeout(() => {
        this.querySelector(".color-code").textContent = originalText;
      }, 1000);
    });
  });
});
