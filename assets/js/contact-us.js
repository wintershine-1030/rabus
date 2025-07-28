/*
 * ========================================
 * UMAY AJANS - MARKANIZI ÖNE ÇIKARALIM!
 * ========================================
 * Website: https://www.umayajans.com
 * Email: hi@umayajans.com
 * Phone: +90 (850) 242 56 40
 * 
 * Project: Rabus Website
 * File: Contact Us JavaScript
 * Version: 1.0
 * Date: 2025
 * 
 * © 2025 Umay Ajans. All rights reserved.
 * ========================================
 */

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Initialize contact specific functions
    initContactAnimations();
    initSparkles();
    initFloatingParticles();
    initStarsContainers();
    initVisibilityControl();
    initFormHandling();
    initCommunicationLines();
    initFloatingElements();
});

// Contact specific animations
function initContactAnimations() {
    // Contact animasyonları buraya gelecek
    console.log('Contact animations initialized');
}

// Visibility Control System
let sparklesInterval = null;
let particlesInterval = null;
let isHeroVisible = true;

function initVisibilityControl() {
    const heroSection = document.getElementById('contact-hero');
    if (!heroSection) return;
    
    // Create Intersection Observer to monitor hero visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero is visible - ensure effects are running
                if (!isHeroVisible) {
                    console.log('Hero visible - restarting effects');
                    restartEffects();
                    isHeroVisible = true;
                }
            } else {
                // Hero is not visible - can optionally pause effects for performance
                isHeroVisible = false;
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of hero is visible
    });
    
    observer.observe(heroSection);
    
    // Also add a scroll listener as backup
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const rect = heroSection.getBoundingClientRect();
            const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
            
            if (isVisible && !isHeroVisible) {
                console.log('Hero visible via scroll - restarting effects');
                restartEffects();
                isHeroVisible = true;
            } else if (!isVisible) {
                isHeroVisible = false;
            }
        }, 100);
    });
}

function restartEffects() {
    // Clear any existing intervals
    if (sparklesInterval) clearInterval(sparklesInterval);
    if (particlesInterval) clearInterval(particlesInterval);
    
    // Restart sparkles creation
    sparklesInterval = setInterval(() => {
        createSparkle();
    }, 100);
    
    // Restart particles creation
    particlesInterval = setInterval(() => {
        createFloatingParticle();
    }, 200);
}

// Sparkles System
function initSparkles() {
    const sparklesContainer = document.getElementById('sparkles-container');
    if (!sparklesContainer) return;
    
    // Create initial sparkles
    for (let i = 0; i < 120; i++) {
        createSparkle();
    }
    
    // Create sparkles continuously to maintain the effect
    sparklesInterval = setInterval(() => {
        createSparkle();
    }, 100); // Create a new sparkle every 100ms
    
    // Add click interaction
    document.addEventListener('click', function(e) {
        createClickSparkles(e.clientX, e.clientY);
    });
}

function createSparkle() {
    const sparklesContainer = document.getElementById('sparkles-container');
    if (!sparklesContainer) return;
    
    // Limit total sparkles to prevent memory issues
    const currentSparkles = sparklesContainer.children.length;
    if (currentSparkles > 150) return; // Max 150 sparkles at once
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    // Random animation duration for variety
    sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    sparklesContainer.appendChild(sparkle);
    
    // Remove after animation (longer lifespan)
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 6000); // Increased from 4000 to 6000ms
}

function createClickSparkles(x, y) {
    const heroSection = document.querySelector('#contact-hero');
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;
    
    // Create 4 sparkles around click point
    for (let i = 0; i < 4; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'click-sparkle';
        
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        
        sparkle.style.left = (relativeX + offsetX) + 'px';
        sparkle.style.top = (relativeY + offsetY) + 'px';
        
        heroSection.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

// Floating Particles System
function initFloatingParticles() {
    const heroSection = document.querySelector('#contact-hero');
    if (!heroSection) return;
    
    // Create particles continuously
    particlesInterval = setInterval(() => {
        createFloatingParticle();
    }, 200);
}

function createFloatingParticle() {
    const heroSection = document.querySelector('#contact-hero');
    if (!heroSection) return;
    
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    
    // Random horizontal position (concentrated in center)
    const centerBias = 0.3 + Math.random() * 0.4; // 30%-70% of width
    particle.style.left = (centerBias * 100) + '%';
    
    // Start from gradient line area (70% height)
    particle.style.top = '70%';
    
    // Random size
    const size = 0.5 + Math.random() * 1; // 0.5px to 1.5px
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random duration and drift
    const duration = 5 + Math.random() * 2; // 5-7 seconds
    const drift = (Math.random() - 0.5) * 100; // -50px to 50px
    
    particle.style.setProperty('--duration', duration + 's');
    particle.style.setProperty('--drift', drift + 'px');
    
    heroSection.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, duration * 1000);
}

// Stars Containers for Different Sections
function initStarsContainers() {
    const containers = [
        'content-stars-container'
    ];
    
    containers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            createTwinklingStars(container, 30);
        }
    });
}

function createTwinklingStars(container, count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Random size variation
        const size = 1 + Math.random() * 1; // 1px to 2px
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        container.appendChild(star);
    }
}

// Communication Lines
function initCommunicationLines() {
    const container = document.getElementById('communication-lines');
    if (!container) return;
    
    // Create 6 communication lines
    for (let i = 0; i < 6; i++) {
        const line = document.createElement('div');
        line.className = 'communication-line';
        
        line.style.left = `${20 + (i * 15)}%`;
        line.style.top = `${25 + (i * 8)}%`;
        line.style.transform = `rotate(${30 + i * 20}deg)`;
        line.style.animationDelay = `${i * 0.5}s`;
        line.style.animationDuration = `${3 + i * 0.5}s`;
        
        container.appendChild(line);
    }
}

// Floating Elements
function initFloatingElements() {
    const container = document.getElementById('floating-elements');
    if (!container) return;
    
    // Create 8 floating elements
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        element.style.left = `${10 + (i * 12)}%`;
        element.style.top = `${20 + (i * 10)}%`;
        element.style.animationDelay = `${i * 0.6}s`;
        element.style.animationDuration = `${4 + i * 0.5}s`;
        
        container.appendChild(element);
    }
}

// Form Handling
function initFormHandling() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const sendAnotherBtn = document.getElementById('send-another');
    
    if (!form) return;
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission();
    });
    
    // Send another message button
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', function() {
            resetForm();
        });
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateField(field) {
    const errorElement = field.parentElement.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous error state
    field.classList.remove('error');
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
    
    // Validate based on field type
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = `${field.placeholder} is required`;
    } else if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.id === 'contact-message' && field.value.trim() && field.value.trim().length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters long';
    }
    
    // Show error if invalid
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.remove('hidden');
        }
    }
    
    return isValid;
}

function validateForm() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function handleFormSubmission() {
    if (!validateForm()) return;
    
    const submitBtn = document.getElementById('contact-submit');
    const submitText = submitBtn.querySelector('.submit-text');
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
        successMessage.classList.add('show');
        
        // Reset button state
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
        
        // Show notification
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
    }, 2000);
}

function resetForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    // Reset form
    form.reset();
    form.style.display = 'block';
    
    // Hide success message
    successMessage.classList.add('hidden');
    successMessage.classList.remove('show');
    
    // Clear any error states
    const errorInputs = form.querySelectorAll('.error');
    const errorMessages = form.querySelectorAll('.error-message:not(.hidden)');
    
    errorInputs.forEach(input => input.classList.remove('error'));
    errorMessages.forEach(msg => msg.classList.add('hidden'));
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300`;
    
    // Set notification style based on type
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-exclamation-circle"></i>
                <span>${message}</span>
            </div>
        `;
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-info-circle"></i>
                <span>${message}</span>
            </div>
        `;
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
} 