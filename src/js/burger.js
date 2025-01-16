const burgerButton = document.getElementById("burger-button");
const burger = document.getElementById("burger");
const burgerCloseButton = document.getElementById("burger-button-close");

export const openMenu = async () => {
  document.getElementById("header").classList.remove("container");
  burger.classList.remove("visually-hidden");
  document.body.classList.add("disable-scroll");
};

export const closeMenu = async (e) => {
  document.getElementById("header").classList.add("container");
  burger.classList.add("visually-hidden");
  document.body.classList.remove("disable-scroll");
};

export const closeEscape = (e) => {
  if (e.key === "Escape") {
    burger.classList.add("visually-hidden");
  }

  document.body.classList.remove("disable-scroll");
};

burgerButton.addEventListener("click", openMenu);
burgerCloseButton.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeEscape);
