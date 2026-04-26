const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("menu-open", isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    header?.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const slideshow = document.querySelector("[data-slideshow]");
const slides = [...document.querySelectorAll(".slide")];
const dotsContainer = document.querySelector("[data-dots]");
const currentSlide = document.querySelector("[data-current-slide]");
let activeSlide = 0;
let slideTimer;

const formatSlideNumber = (index) => String(index + 1).padStart(2, "0");

const showSlide = (index) => {
  if (!slides.length) return;

  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });

  dotsContainer?.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });

  if (currentSlide) {
    currentSlide.textContent = formatSlideNumber(activeSlide);
  }
};

const startSlideshow = () => {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 5200);
};

if (slides.length && dotsContainer) {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Mostrar fotografia ${index + 1}`);
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlideshow();
    });
    dotsContainer.appendChild(dot);
  });

  document.querySelector("[data-prev]")?.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    startSlideshow();
  });

  document.querySelector("[data-next]")?.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    startSlideshow();
  });

  slideshow?.addEventListener("mouseenter", () => window.clearInterval(slideTimer));
  slideshow?.addEventListener("mouseleave", startSlideshow);
  slideshow?.addEventListener("focusin", () => window.clearInterval(slideTimer));
  slideshow?.addEventListener("focusout", startSlideshow);

  showSlide(0);
  startSlideshow();
}

const programCards = [...document.querySelectorAll(".program-card")];
const programModal = document.querySelector("[data-program-modal]");
const programModalClose = document.querySelector("[data-program-close]");
const programModalFigure = document.querySelector("[data-program-modal-figure]");
const programModalImage = document.querySelector("[data-program-modal-image]");
const programModalKicker = document.querySelector("[data-program-modal-kicker]");
const programModalTitle = document.querySelector("[data-program-modal-title]");
const programModalDescription = document.querySelector("[data-program-modal-description]");

const closeProgramModal = () => {
  if (!programModal) return;
  programModal.classList.remove("is-open");
  programModal.setAttribute("hidden", "");
  document.body.classList.remove("program-modal-open");
};

const openProgramModal = (card) => {
  if (!programModal || !programModalKicker || !programModalTitle || !programModalDescription) {
    return;
  }

  const kicker = card.querySelector("span")?.textContent?.trim() ?? "Programa";
  const title = card.querySelector("h3")?.textContent?.trim() ?? "Detalhes do programa";
  const description = card.querySelector("p")?.textContent?.trim() ?? "";
  const image = card.querySelector("img");

  programModalKicker.textContent = kicker;
  programModalTitle.textContent = title;
  programModalDescription.textContent = description;

  if (image && programModalImage && programModalFigure) {
    programModalImage.src = image.src;
    programModalImage.alt = image.alt;
    programModalFigure.removeAttribute("hidden");
  } else if (programModalImage && programModalFigure) {
    programModalImage.src = "";
    programModalImage.alt = "";
    programModalFigure.setAttribute("hidden", "");
  }

  programModal.removeAttribute("hidden");
  programModal.classList.add("is-open");
  document.body.classList.add("program-modal-open");
};

if (programCards.length && programModal) {
  programCards.forEach((card) => {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", () => {
      openProgramModal(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProgramModal(card);
      }
    });
  });

  programModalClose?.addEventListener("click", closeProgramModal);

  programModal.addEventListener("click", (event) => {
    if (event.target === programModal) {
      closeProgramModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && programModal.classList.contains("is-open")) {
      closeProgramModal();
    }
  });
}
