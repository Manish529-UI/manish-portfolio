// Typing effect
const text = ["Web Developer", "Problem Solver", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => { index = 0; count++; }, 1000);
  }
  setTimeout(type, 100);
})();

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Particle Background
const numParticles = 50;
const particlesContainer = document.getElementById("particles");

for (let i = 0; i < numParticles; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animationDuration = (3 + Math.random() * 3) + "s";
  particlesContainer.appendChild(p);
}
