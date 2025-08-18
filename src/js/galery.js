
const images = document.querySelectorAll("main img");

// Recorremos cada imagen
images.forEach(img => {
  img.addEventListener("click", () => {
    const current = img.src; // la foto actual
    const alt = img.getAttribute("data-alt"); // la "foto alterna"
    
    // Intercambiamos los valores
    img.setAttribute("data-alt", current);
    img.src = alt;
  });
});