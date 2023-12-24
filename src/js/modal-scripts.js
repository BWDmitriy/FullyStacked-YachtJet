// Если планируется больше одной открывающей кнопки, [0] убираем и задаем аналогичный close цикл.
const modalOpen = document.getElementsByClassName("modal-open")[0];
modalOpen.addEventListener('click', openModal, false);
function openModal() {
    document.getElementById("mobile-menu").className = "mobile-menu-wrapper is-open";
}

const modalCloser = document.getElementsByClassName("modal-close");
for (let i = 0; i < modalCloser.length; i++) {
    modalCloser[i].addEventListener('click', closeModal, false);
}
function closeModal() {
    document.getElementById("mobile-menu").className = "mobile-menu-wrapper";
}
