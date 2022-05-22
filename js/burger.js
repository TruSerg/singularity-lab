const burger = () => {
  const iconMenu = document.querySelector(".header__menu-icon");
  const menuLinks = document.querySelectorAll(".header__nav-item");
  const menuBody = document.querySelector(".header__menu");

  if (iconMenu) {
    iconMenu.addEventListener("click", (e) => {
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBody.classList.remove("_active");
      iconMenu.classList.remove("_active");
    });
  });
};

burger();
