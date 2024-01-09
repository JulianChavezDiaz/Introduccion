document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    const slides = document.querySelector('.slides');
    const cards = document.querySelectorAll('.card');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    let currentIndex = 0;

    function showCard(index) {
        const cardWidth = cards[0].offsetWidth;
        slides.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    btnPrev.addEventListener('click', function() {
        currentIndex = Math.max(currentIndex - 1, 0);
        showCard(currentIndex);
    });

    btnNext.addEventListener('click', function() {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        showCard(currentIndex);
    });
});