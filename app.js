// Dos cosas: progreso del scroll en «Cambia la pregunta» y la barra fija del CTA en móvil.
const pin = document.querySelector(".pin");
if (pin && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  let t = 0;
  const f = () => {
    t = 0;
    const r = pin.getBoundingClientRect();
    pin.style.setProperty("--p", Math.min(1, Math.max(0, -r.top / (r.height - innerHeight))).toFixed(3));
  };
  addEventListener("scroll", () => t || (t = requestAnimationFrame(f)), { passive: true });
  f();
}
const hero = document.querySelector(".hero");
new IntersectionObserver(([e]) => document.body.classList.toggle("sticky", !e.isIntersecting)).observe(hero);
