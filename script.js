// Carrossel de Ofertas
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-nav .prev');
    const nextButton = document.querySelector('.carousel-nav .next');
    
    if (!carouselTrack || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function moveToSlide(slideIndex) {
        carouselTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        moveToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        moveToSlide(currentSlide);
    }
    
    // Event listeners para os botões
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    // Auto-play (opcional)
    setInterval(nextSlide, 5000); // Muda slide a cada 5 segundos
});
