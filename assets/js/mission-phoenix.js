/*
 * ========================================
 * UMAY AJANS - MARKANIZI ÖNE ÇIKARALIM!
 * ========================================
 * Website: https://www.umayajans.com
 * Email: hi@umayajans.com
 * Phone: +90 (850) 242 56 40
 * 
 * Project: Rabus Website - Mission Phoenix Page
 * File: Mission Phoenix JavaScript
 * Version: 1.0
 * Date: 2025
 * 
 * © 2025 Umay Ajans. All rights reserved.
 * ========================================
 */

// Mission Phoenix Specific Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // Word Animation System
    function initWordAnimations() {
        const words = document.querySelectorAll('.word-animate');
        
        words.forEach(word => {
            const delay = parseInt(word.getAttribute('data-delay')) || 0;
            
            setTimeout(() => {
                word.style.animation = 'word-appear 1s ease-out forwards';
            }, delay);
        });
    }

    // Hero Background Animation Control
    function initHeroAnimations() {
        const floatingElements = document.querySelectorAll('.floating-element-animate');
        
        // Start floating animations after page load
        setTimeout(() => {
            floatingElements.forEach(element => {
                element.style.animationPlayState = 'running';
            });
        }, 1000);
    }

    // Mouse Gradient Follow Effect
    function initMouseGradient() {
        const mouseGradient = document.getElementById('mouse-gradient');
        const heroSection = document.getElementById('mission-hero');
        
        if (!mouseGradient || !heroSection) return;

        let isInHero = false;

        heroSection.addEventListener('mouseenter', () => {
            isInHero = true;
            mouseGradient.style.opacity = '1';
        });

        heroSection.addEventListener('mouseleave', () => {
            isInHero = false;
            mouseGradient.style.opacity = '0';
        });

        heroSection.addEventListener('mousemove', (e) => {
            if (!isInHero) return;
            
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            mouseGradient.style.left = (rect.left + x) + 'px';
            mouseGradient.style.top = (rect.top + y) + 'px';
        });
    }

    // Click Ripple Effect
    function initRippleEffect() {
        const rippleContainer = document.getElementById('ripple-container');
        const heroSection = document.getElementById('mission-hero');
        
        if (!rippleContainer || !heroSection) return;

        heroSection.addEventListener('click', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.left = (rect.left + x) + 'px';
            ripple.style.top = (rect.top + y) + 'px';
            
            rippleContainer.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    }

    // Twinkling Stars Effect for Content Sections
    function createTwinklingStars(containerId, starCount = 20) {
        const container = document.getElementById(containerId);
        if (!container) return;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'twinkling-star';
            star.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
            `;
            container.appendChild(star);
        }
    }

    // Add twinkle animation to CSS if not exists
    function addTwinkleAnimation() {
        if (document.querySelector('#twinkle-style')) return;
        
        const style = document.createElement('style');
        style.id = 'twinkle-style';
        style.textContent = `
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }

    // Phoenix Icon Animation (for future use)
    function initPhoenixIconAnimations() {
        const phoenixIcons = document.querySelectorAll('.phoenix-icon');
        
        phoenixIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.filter = 'drop-shadow(0 0 15px rgba(255, 107, 53, 0.6))';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'drop-shadow(0 0 8px rgba(255, 107, 53, 0.3))';
            });
        });
    }

    // Tech Card Interactions
    function initTechCardAnimations() {
        const techCards = document.querySelectorAll('.tech-card');
        
        techCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'none';
            });
        });
    }

    // Smooth Scroll for Internal Links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // FAQ Toggle Functionality
    function initFAQToggle() {
        const faqToggles = document.querySelectorAll('.faq-toggle');
        
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const faqItem = toggle.closest('.faq-item');
                const content = faqItem.querySelector('.faq-content');
                const icon = faqItem.querySelector('.faq-icon svg');
                
                // Close other FAQ items
                faqToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherItem = otherToggle.closest('.faq-item');
                        const otherContent = otherItem.querySelector('.faq-content');
                        const otherIcon = otherItem.querySelector('.faq-icon svg');
                        
                        otherContent.style.maxHeight = '0px';
                        otherIcon.style.transform = 'rotate(0deg)';
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                if (faqItem.classList.contains('active')) {
                    content.style.maxHeight = '0px';
                    icon.style.transform = 'rotate(0deg)';
                    faqItem.classList.remove('active');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                    faqItem.classList.add('active');
                }
            });
        });
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

    // Initialize all animations and interactions
    function init() {
        initWordAnimations();
        initHeroAnimations();
        initMouseGradient();
        initRippleEffect();
        addTwinkleAnimation();
        createTwinklingStars('content-stars-container', 25);
        createTwinklingStars('newsletter-stars-container', 15);
        initPhoenixIconAnimations();
        initTechCardAnimations();
        initSmoothScroll();
        initFAQToggle();
        initMovingBorder();
        
        console.log('🚀 Mission Phoenix initialized successfully!');
    }

    // Start initialization
    init();

    // Performance optimization - defer non-critical animations
    setTimeout(() => {
        // Add any performance-heavy animations here
    }, 2000);
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', function() {
    const floatingElements = document.querySelectorAll('.floating-element-animate');
    
    if (document.hidden) {
        // Pause animations when tab is not visible
        floatingElements.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when tab becomes visible
        floatingElements.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
});

// Resize handler for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Add any resize-specific logic here
    console.log('Mission Phoenix: Window resized');
}, 250));

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 