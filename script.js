const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btnOpenModals.forEach(btnOpenModal => [
    btnOpenModal.addEventListener('click', openModal)
]);

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', function(e) {
    if(e.key == "Escape") {
       closeModal();
    }
}); 