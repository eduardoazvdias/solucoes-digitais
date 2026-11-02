const examples = {
  oficina: {
    label: "OFICINA",
    title: "Diagnóstico claro antes de qualquer serviço.",
    description: "Revisão, freios e suspensão para quem quer entender o que o carro precisa.",
    sections: ["Serviços por sistema", "Como funciona o diagnóstico", "Localização e horário", "Agendar pelo WhatsApp"],
  },
  estetica: {
    label: "ESTÉTICA AUTOMOTIVA",
    title: "Cuidado visível em cada detalhe do carro.",
    description: "Serviços explicados pelo resultado, tempo de execução e cuidado necessário.",
    sections: ["Resultados por serviço", "Antes e depois autorizado", "Cuidados e duração", "Pedir uma avaliação"],
  },
  assistencia: {
    label: "ASSISTÊNCIA TÉCNICA",
    title: "Conserto explicado sem linguagem complicada.",
    description: "Equipamentos atendidos, etapas do orçamento e formas claras de acompanhar o serviço.",
    sections: ["Equipamentos atendidos", "Etapas do orçamento", "Dúvidas frequentes", "Solicitar atendimento"],
  },
};

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

const board = document.querySelector("[data-example-board]");
const exampleButtons = document.querySelectorAll("[data-example]");

const renderExample = (key) => {
  const example = examples[key];
  board.querySelector(".board-segment").textContent = example.label;
  board.querySelector(".board-message h3").textContent = example.title;
  board.querySelector(".board-message p").textContent = example.description;
  board.querySelectorAll(".board-sections strong").forEach((element, index) => {
    element.textContent = example.sections[index];
  });
  exampleButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.example === key));
};

exampleButtons.forEach((button) => button.addEventListener("click", () => renderExample(button.dataset.example)));

const contactButton = document.querySelector("[data-contact-button]");
const contactNote = document.querySelector("[data-contact-note]");
const contactMessage = "Olá! Quero organizar a presença digital do meu negócio. Posso contar um pouco sobre o que faço?";

contactButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contactMessage);
    contactButton.textContent = "Mensagem copiada";
    contactNote.textContent = "Agora é só colar a mensagem no canal de atendimento quando ele estiver conectado.";
  } catch {
    contactNote.textContent = contactMessage;
  }
});
