window.onload = () => {
  const container = document.querySelector(".container");

  container.addEventListener("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
      let dataModal = evt.target.dataset.modal;
      showModal(dataModal);
      setModalListners();
    }
  });

  const showModal = (id) => {
    const modals = document.querySelectorAll(".modal");
    const overlay = document.querySelector(".overlay");
    modals.forEach(function (elem) {
      elem.classList.remove("js-modal-show");

      if (id === elem.id) {
        elem.classList.add("js-modal-show");
        overlay.classList.add("js-overlay-show");
      }
    });
  };

  const setModalListners = () => {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".js-modal-show");

    overlay.addEventListener("click", function () {
      overlay.classList.remove("js-overlay-show");
      modal.classList.remove("js-modal-show");
    });

    document.addEventListener("keyup", function (evt) {
      if (evt.code === "Escape") {
        overlay.classList.remove("js-overlay-show");
        modal.classList.remove("js-modal-show");
      }
    });
  };
};
