// Mobile menu + footer year
const burger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Menüden linke tıklayınca kapat
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());