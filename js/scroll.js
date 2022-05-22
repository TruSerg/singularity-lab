const scroll = () => {
  const links = document.querySelectorAll(".header__nav-item");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    });
  });
};

scroll();
