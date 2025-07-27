// Carrossel de Ofertas - Novo JavaScript
class DestinationCarousel {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 5;
        this.isAutoPlaying = true;
        this.autoPlayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.startAutoPlay();
        this.updateIndicators();
    }
    
    bindEvents() {
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Mouse events for auto-play control
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carouselWrapper.addEventListener('mouseleave', () => this.resumeAutoPlay());
        }
        
        // Touch/Swipe events
        const carouselSlides = document.getElementById('carousel-slides');
        if (carouselSlides) {
            carouselSlides.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            carouselSlides.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        }
        
        // Slide button clicks
        const slideButtons = document.querySelectorAll('.slide-button');
        slideButtons.forEach(button => {
            button.addEventListener('click', () => {
                window.open('https://www.comprarviagem.com.br/anhangatur', '_blank');
            });
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    updateCarousel() {
        const carouselSlides = document.getElementById('carousel-slides');
        if (carouselSlides) {
            const translateX = -this.currentSlide * 100;
            carouselSlides.style.transform = `translateX(${translateX}%)`;
        }
        this.updateIndicators();
    }
    
    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    startAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        
        this.autoPlayInterval = setInterval(() => {
            if (this.isAutoPlaying) {
                this.nextSlide();
            }
        }, 5000); // 5 seconds
    }
    
    pauseAutoPlay() {
        this.isAutoPlaying = false;
    }
    
    resumeAutoPlay() {
        this.isAutoPlaying = true;
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        this.isAutoPlaying = false;
    }
    
    // Touch/Swipe handling
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleSwipe();
    }
    
    handleSwipe() {
        const swipeThreshold = 50; // minimum distance for a swipe
        const swipeDistance = this.touchStartX - this.touchEndX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - previous slide
                this.prevSlide();
            }
        }
    }
    
    // Public methods for external control
    destroy() {
        this.stopAutoPlay();
        // Remove event listeners if needed
    }
    
    refresh() {
        this.updateCarousel();
        this.updateIndicators();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if carousel elements exist
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        window.destinationCarousel = new DestinationCarousel();
        
        // Add some debugging
        console.log('Destination Carousel initialized successfully');
    } else {
        console.warn('Carousel container not found');
    }
});

// Handle page visibility change (pause auto-play when tab is not visible)
document.addEventListener('visibilitychange', function() {
    if (window.destinationCarousel) {
        if (document.hidden) {
            window.destinationCarousel.pauseAutoPlay();
        } else {
            window.destinationCarousel.resumeAutoPlay();
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.destinationCarousel) {
        window.destinationCarousel.refresh();
    }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DestinationCarousel;
}

