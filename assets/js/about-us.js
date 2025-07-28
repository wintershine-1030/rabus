/*
 * ========================================
 * UMAY AJANS - MARKANIZI ÖNE ÇIKARALIM!
 * ========================================
 * Website: https://www.umayajans.com
 * Email: hi@umayajans.com
 * Phone: +90 (850) 242 56 40
 * 
 * Project: Anka Space Website - About Us Page
 * File: About Us Specific JavaScript
 * Version: 1.0
 * Date: 2025
 * 
 * © 2025 Umay Ajans. All rights reserved.
 * ========================================
 */

// Page specific initialization for About Us page
document.addEventListener('DOMContentLoaded', function() {
    // Create stars for content section
    createContentStars();
    // Create stars for newsletter section
    createNewsletterStars();
    // Initialize digital serenity animations
    initDigitalSerenity();
});

// Content Section Stars
function createContentStars() {
    const starsContainer = document.getElementById('content-stars-container');
    if (!starsContainer) return;
    
    const isMobile = window.innerWidth <= 768;
    const starCount = isMobile ? 15 : 25;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'mission-star';
        
        const size = Math.random() * 1.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        star.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Newsletter Section Stars
function createNewsletterStars() {
    const starsContainer = document.getElementById('newsletter-stars-container');
    if (!starsContainer) return;
    
    const isMobile = window.innerWidth <= 768;
    const starCount = isMobile ? 10 : 18;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'mission-star';
        
        const size = Math.random() * 1.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        star.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Digital Serenity Animation Functions
function initDigitalSerenity() {
    // Initialize word animations
    setTimeout(() => {
        const wordElements = document.querySelectorAll('.word-animate');
        wordElements.forEach(word => {
            const delay = parseInt(word.getAttribute('data-delay')) || 0;
            setTimeout(() => {
                if (word) word.style.animation = 'word-appear 0.8s ease-out forwards';
            }, delay);
        });
    }, 500);
    
    // Mouse gradient effect
    const mouseGradient = document.getElementById('mouse-gradient');
    if (mouseGradient) {
        document.addEventListener('mousemove', (e) => {
            mouseGradient.style.left = e.clientX + 'px';
            mouseGradient.style.top = e.clientY + 'px';
            mouseGradient.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            mouseGradient.style.opacity = '0';
        });
    }
    
    // Click ripple effect
    const rippleContainer = document.getElementById('ripple-container');
    if (rippleContainer) {
        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            rippleContainer.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    }
    
    // Word hover effects
    const wordElements = document.querySelectorAll('.word-animate');
    wordElements.forEach(word => {
        word.addEventListener('mouseenter', (e) => {
            e.target.style.textShadow = '0 0 20px rgba(203, 213, 225, 0.5)';
        });
        word.addEventListener('mouseleave', (e) => {
            e.target.style.textShadow = 'none';
        });
    });
    
    // Floating elements scroll animation
    let scrolled = false;
    const handleScroll = () => {
        if (!scrolled) {
            scrolled = true;
            const elements = document.querySelectorAll('.floating-element-animate');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    if (el) {
                        el.style.animationPlayState = 'running';
                        el.style.opacity = '';
                    }
                }, (parseFloat(el.style.animationDelay || "0") * 1000) + index * 100);
            });
        }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize moving border animation for newsletter
    initMovingBorder();
}

// Moving Border Animation for Newsletter
function initMovingBorder() {
    const path = document.getElementById('newsletter-border-path');
    const movingElement = document.getElementById('newsletter-moving-element');
    
    if (!path || !movingElement) return;
    
    let pathLength = 0;
    let progress = 0;
    const duration = 4000; // 4 seconds for full loop
    
    // Get path length after a small delay to ensure SVG is rendered
    setTimeout(() => {
        pathLength = path.getTotalLength();
        if (pathLength > 0) {
            startAnimation();
        }
    }, 100);
    
    function startAnimation() {
        function animate(timestamp) {
            if (!pathLength) return;
            
            // Calculate progress based on time
            const elapsed = timestamp % duration;
            progress = (elapsed / duration) * pathLength;
            
            // Get current point and next point for direction calculation
            const currentPoint = path.getPointAtLength(progress);
            const nextProgress = progress + 1;
            const nextPoint = path.getPointAtLength(nextProgress > pathLength ? 0 : nextProgress);
            
            // Calculate angle based on direction
            const deltaX = nextPoint.x - currentPoint.x;
            const deltaY = nextPoint.y - currentPoint.y;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            // Update element position and rotation
            movingElement.style.left = currentPoint.x + 'px';
            movingElement.style.top = currentPoint.y + 'px';
            movingElement.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            
            requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
    }
} 