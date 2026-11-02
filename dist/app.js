const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

const setMenu = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
};

menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 10), { passive: true });

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll(".service-card, .package-card").forEach((element, index) => {
  element.style.transitionDelay = `${(index % 3) * 70}ms`;
});

document.querySelectorAll(".button, .package-card > a, .nav-cta").forEach((element) => {
  element.addEventListener("pointerdown", () => element.classList.add("is-pressed"));
  ["pointerup", "pointerleave", "pointercancel"].forEach((eventName) =>
    element.addEventListener(eventName, () => element.classList.remove("is-pressed")),
  );
});

const WHATSAPP_NUMBER = "";
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const whatsappToast = document.querySelector("[data-whatsapp-toast]");
let toastTimer;

whatsappLinks.forEach((link) => {
  const selectedPackage = link.dataset.package;
  const message = selectedPackage
    ? `Olá! Quero saber mais sobre o pacote ${selectedPackage}.`
    : "Olá! Quero melhorar a presença digital do meu negócio e entender qual solução faz sentido.";

  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      whatsappToast.classList.add("is-visible");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => whatsappToast.classList.remove("is-visible"), 3200);
    });
  }
});

const demoStage = document.querySelector("[data-demo-stage]");
const demoButtons = [...document.querySelectorAll("[data-demo-step]")];
const demoPause = document.querySelector("[data-demo-pause]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let demoStep = 0;
let demoTimer;
let demoPaused = reduceMotion.matches;

const showDemoStep = (step) => {
  demoStep = step;
  demoStage.dataset.step = String(step);
  demoButtons.forEach((button, index) => {
    const active = index === step;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "step" : "false");
  });
  demoStage.querySelectorAll("[data-scene]").forEach((scene, index) => scene.setAttribute("aria-hidden", String(index !== step)));
};

const stopDemo = () => window.clearInterval(demoTimer);
const startDemo = () => {
  stopDemo();
  if (!demoPaused) demoTimer = window.setInterval(() => showDemoStep((demoStep + 1) % demoButtons.length), 4300);
};

demoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showDemoStep(index);
    startDemo();
  });
});

demoPause.addEventListener("click", () => {
  demoPaused = !demoPaused;
  demoPause.setAttribute("aria-pressed", String(demoPaused));
  demoPause.textContent = demoPaused ? "Continuar animação" : "Pausar animação";
  startDemo();
});

reduceMotion.addEventListener("change", (event) => {
  demoPaused = event.matches;
  demoPause.setAttribute("aria-pressed", String(demoPaused));
  demoPause.textContent = demoPaused ? "Continuar animação" : "Pausar animação";
  startDemo();
});

showDemoStep(0);
startDemo();
