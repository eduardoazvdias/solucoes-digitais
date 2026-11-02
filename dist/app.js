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
