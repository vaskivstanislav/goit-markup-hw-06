(() => {
    const refs = {
      // Додати атрибут data-modal-open-mob на кнопку відкриття
      openModalBtn: document.querySelector("[data-modal-open-mob]"),
      // Додати атрибут data-modal-close-mob на кнопку закриття
      closeModalBtn: document.querySelector("[data-modal-close-mob]"),
      // Додати атрибут data-modal-mob на бекдроп модалки
      modal: document.querySelector("[data-modal-mob]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
  })();