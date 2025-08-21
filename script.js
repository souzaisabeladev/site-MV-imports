const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  // Alterna ícone ☰ ↔ ✖
  menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// Se clicar no overlay, fecha o menu
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.textContent = "☰";
});
