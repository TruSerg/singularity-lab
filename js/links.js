const links = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".modal__link")) {
      e.target.style.color =
        e.target.style.color === "#fff" ? "#c0fd00" : "#fff";
    }
  });
};

links();
