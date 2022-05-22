const modal = () => {
  const modalButton = document.querySelector(".modal__show ");
  const modal = document.querySelector(".modal");
  const overlay = modal.querySelector(".overlay");

  modalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

modal();
