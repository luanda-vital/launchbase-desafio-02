const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

/* MODAL */

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function() {
        const blogContent = card.getAttribute("id")

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogContent}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})