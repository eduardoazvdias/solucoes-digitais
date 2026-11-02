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

const contactButton = document.querySelector("[data-contact-button]");
const contactNote = document.querySelector("[data-contact-note]");
const contactMessage = "Quero melhorar a presença digital do meu negócio e entender qual pacote faz sentido.";

contactButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contactMessage);
    contactButton.textContent = "Mensagem copiada";
    contactNote.textContent = "Agora é só colar no WhatsApp quando o canal estiver conectado.";
  } catch {
    contactNote.textContent = contactMessage;
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
