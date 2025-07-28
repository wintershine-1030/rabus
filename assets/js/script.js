/*
 * ========================================
 * UMAY AJANS - MARKANIZI ÖNE ÇIKARALIM!
 * ========================================
 * Website: https://www.umayajans.com
 * Email: hi@umayajans.com
 * Phone: +90 (850) 242 56 40
 * 
 * Project: Anka Space Website
 * File: Custom JS
 * Version: 1.0
 * Date: 2025
 * 
 * © 2025 Umay Ajans. All rights reserved.
 * ========================================
 */

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});



// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create Twinkling Stars
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return; // Exit if container doesn't exist

    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';

        starsContainer.appendChild(star);
    }
}

// Create Mission Section Decoration Stars (minimal for mobile)
function createMissionStars() {
    const missionStarsContainer = document.getElementById('mission-stars-container');
    if (!missionStarsContainer) return;

    // Check if mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Only create minimal decoration stars above the decoration image
        const decorationImage = document.querySelector('#mission .decoration-image');
        if (decorationImage) {
            createDecorationStars(decorationImage, 5); // Only 5 small stars
        }
        return;
    }


    const decorationImage = document.querySelector('#mission .decoration-image');
    if (decorationImage) {
        createDecorationStars(decorationImage, 8); // Sadece 8 minimal yıldız
    }

    // Mission stars container'ını temizle
    missionStarsContainer.innerHTML = '';
}

// Create What We Do Stars (minimal for mobile)
function createWhatWeDoStars() {
    const starsContainer = document.getElementById('what-we-do-stars-container');
    if (!starsContainer) return;

    // Check if mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Only create minimal decoration stars above the decoration image
        const decorationImage = document.querySelector('#what-we-do .decoration-image');
        if (decorationImage) {
            createDecorationStars(decorationImage, 4); // Only 4 small stars
        }
        return;
    }

    // Desktop version - keep existing stars
    const starCount = 20;

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

// Create Why This Matters Stars (minimal for mobile)
function createWhyThisMattersStars() {
    const starsContainer = document.getElementById('why-this-matters-stars-container');
    if (!starsContainer) return;

    // Check if mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Only create minimal decoration stars above the decoration image
        const decorationImage = document.querySelector('#why-this-matters .decoration-image');
        if (decorationImage) {
            createDecorationStars(decorationImage, 4); // Only 4 small stars
        }
        return;
    }

    // Desktop version - keep existing stars
    const starCount = 25;

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

// Create Harvard Advantage Stars (minimal for mobile)
function createHarvardAdvantageStars() {
    const starsContainer = document.getElementById('harvard-advantage-stars-container');
    if (!starsContainer) return;

    // Check if mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Only create minimal decoration stars above the decoration image
        const decorationImage = document.querySelector('#harvard-advantage .decoration-image');
        if (decorationImage) {
            createDecorationStars(decorationImage, 4); // Only 4 small stars
        }
        return;
    }

    // Desktop version - keep existing stars
    const starCount = 20;

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

// Create minimal decoration stars above images (mobile only)
function createDecorationStars(decorationImage, starCount = 5) {
    const section = decorationImage.closest('section');
    if (!section) return;

    // Create a container for the stars positioned relative to the decoration image
    const starContainer = document.createElement('div');
    starContainer.style.position = 'absolute';
    starContainer.style.top = '0';
    starContainer.style.left = '0';
    starContainer.style.width = '100%';
    starContainer.style.height = '100%';
    starContainer.style.pointerEvents = 'none';
    starContainer.style.zIndex = '6';

    // Find the decoration image container
    const imageContainer = decorationImage.parentElement;
    if (imageContainer) {
        imageContainer.style.position = 'relative';
        imageContainer.appendChild(starContainer);
    }

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'decoration-stars';

        // Position stars above and around the decoration image
        const leftPercent = Math.random() * 80 + 10; // 10% to 90% width
        const topPercent = Math.random() * 40 + 5; // Above the image area

        star.style.left = leftPercent + '%';
        star.style.top = topPercent + '%';
        star.style.animationDelay = Math.random() * 8 + 's';

        starContainer.appendChild(star);
    }
}

// Create Newsletter Stars
function createNewsletterStars() {
    const starsContainer = document.getElementById('newsletter-stars-container');
    if (!starsContainer) return;

    const starCount = 30;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'newsletter-stars';

        const size = Math.random() * 1.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        star.style.animationDuration = (Math.random() * 2 + 2) + 's';

        starsContainer.appendChild(star);
    }
}

// Smooth Scrolling for Navigation Links
function smoothScrollTo(targetId, duration = 1200) {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress < 0.5 ?
            2 * progress * progress :
            1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu with Hamburger → X Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    if (mobileToggle && mobileMenu) {
        let isMenuOpen = false;

        // Toggle menu
        mobileToggle.addEventListener('click', () => {
            if (!isMenuOpen) {
                // Show menu
                document.body.appendChild(mobileMenu);
                mobileMenu.style.display = 'flex';
                mobileMenu.style.position = 'fixed';
                mobileMenu.style.top = '0';
                mobileMenu.style.left = '0';
                mobileMenu.style.width = '100vw';
                mobileMenu.style.height = '100vh';
                mobileMenu.style.backgroundColor = 'black';
                mobileMenu.style.zIndex = '9999';
                mobileMenu.style.flexDirection = 'column';
                mobileMenu.style.justifyContent = 'center';
                mobileMenu.style.alignItems = 'flex-start';
                mobileMenu.style.paddingLeft = '2rem';

                // Transform hamburger to X
                line1.style.transform = 'rotate(45deg) translate(5px, 5px)';
                line2.style.opacity = '0';
                line3.style.transform = 'rotate(-45deg) translate(7px, -6px)';

                isMenuOpen = true;
            } else {
                // Hide menu
                mobileMenu.style.display = 'none';

                // Transform X back to hamburger
                line1.style.transform = 'none';
                line2.style.opacity = '1';
                line3.style.transform = 'none';

                isMenuOpen = false;
            }
        });

        // Style and setup menu links
        mobileLinks.forEach(link => {
            link.style.color = 'white';
            link.style.fontSize = '1.5rem';
            link.style.textDecoration = 'none';
            link.style.padding = '1rem 2rem';
            link.style.fontFamily = 'Geist Mono, monospace';

            // Close menu when clicking links
            link.addEventListener('click', () => {
                mobileMenu.style.display = 'none';

                // Reset hamburger icon
                line1.style.transform = 'none';
                line2.style.opacity = '1';
                line3.style.transform = 'none';

                isMenuOpen = false;
            });
        });
    } else {
        console.log('Missing mobile menu elements!');
        if (!mobileToggle) console.log('❌ mobile-toggle not found');
        if (!mobileMenu) console.log('❌ mobile-menu not found');
        if (!closeMenu) console.log('❌ close-menu not found');
    }

    // Navigation link event listeners
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target && target !== '#') {
                smoothScrollTo(target, 1200);
            }
        });
    });

    // Initialize other components
    createStars();
    createMissionStars();
    createHarvardAdvantageStars();
    createWhatWeDoStars();
    createWhyThisMattersStars();
    createNewsletterStars();
    initNewsletterForm();
    initScrambleLinks();
    initScrambleButtons();
    initMovingBorder();
});

// Newsletter Form Submission
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button');
        const textSpan = button.querySelector('.scramble-text');
        const originalText = textSpan ? textSpan.textContent : button.textContent;

        if (email) {
            // Button loading state
            if (textSpan) {
                textSpan.textContent = 'Sending...';
            } else {
                button.textContent = 'Sending...';
            }
            button.disabled = true;
            button.style.background = '#6366f1';

            // Send to PHP (using SMTP debug handler)
            fetch('mail_handler_smtp_debug.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Success
                        if (textSpan) {
                            textSpan.textContent = 'Subscribed!';
                        } else {
                            button.textContent = 'Subscribed!';
                        }
                        button.style.background = '#22c55e';

                        setTimeout(() => {
                            if (textSpan) {
                                textSpan.textContent = originalText;
                            } else {
                                button.textContent = originalText;
                            }
                            button.style.background = 'white';
                            button.disabled = false;
                            newsletterForm.reset();
                        }, 3000);
                    } else {
                        // Error
                        if (textSpan) {
                            textSpan.textContent = 'Error! Try again';
                        } else {
                            button.textContent = 'Error! Try again';
                        }
                        button.style.background = '#ef4444';

                        setTimeout(() => {
                            if (textSpan) {
                                textSpan.textContent = originalText;
                            } else {
                                button.textContent = originalText;
                            }
                            button.style.background = 'white';
                            button.disabled = false;
                        }, 3000);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (textSpan) {
                        textSpan.textContent = 'Error! Try again';
                    } else {
                        button.textContent = 'Error! Try again';
                    }
                    button.style.background = '#ef4444';

                    setTimeout(() => {
                        if (textSpan) {
                            textSpan.textContent = originalText;
                        } else {
                            button.textContent = originalText;
                        }
                        button.style.background = 'white';
                        button.disabled = false;
                    }, 3000);
                });
        }
    });
}

// Scramble Text Effect
class ScrambleText {
    constructor(element) {
        this.element = element;
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.originalText = element.textContent;
        this.isAnimating = false;
    }

    scramble() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.element.classList.add('scrambling');

        let iterations = 0;
        const maxIterations = Math.max(8, this.originalText.length);
        const totalDuration = 500;
        const intervalTime = totalDuration / maxIterations;

        const interval = setInterval(() => {
            this.element.textContent = this.originalText
                .split('')
                .map((char, index) => {
                    if (char === ' ') return ' ';
                    if (index < Math.floor((iterations / maxIterations) * this.originalText.length)) {
                        return this.originalText[index];
                    }
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                })
                .join('');

            iterations += 1;

            if (iterations >= maxIterations) {
                clearInterval(interval);
                this.element.textContent = this.originalText;
                this.element.classList.remove('scrambling');
                this.isAnimating = false;
            }
        }, intervalTime);
    }
}

// Initialize Scramble Effect for Navigation Links
function initScrambleLinks() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const scrambler = new ScrambleText(link);

        link.addEventListener('mouseenter', () => {
            scrambler.scramble();
        });
    });
}

// Initialize Scramble Effect for Buttons
function initScrambleButtons() {
    const scrambleButtons = document.querySelectorAll('.scramble-btn');

    scrambleButtons.forEach(button => {
        const textSpan = button.querySelector('.scramble-text');
        if (textSpan) {
            const scrambler = new ScrambleText(textSpan);

            button.addEventListener('mouseenter', () => {
                scrambler.scramble();
            });
        }
    });
}

// 3D Rocket Drag Interaction (Debug Enhanced)


// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Ensure page starts at top
    window.scrollTo(0, 0);

    initScrambleLinks();
    initScrambleButtons();
    createStars();
    createMissionStars();
    createHarvardAdvantageStars();
    createWhatWeDoStars();
    createWhyThisMattersStars();
    createNewsletterStars();
    initNewsletterForm();
    initMovingBorder();
});

// Also ensure scroll position is reset on page load/refresh
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Prevent scroll restoration on page refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
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