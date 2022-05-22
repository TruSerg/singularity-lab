const iconMenu = document.querySelector(".header__menu-icon");

if (iconMenu) {
  const menuBody = document.querySelector(".header__menu");

  iconMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
