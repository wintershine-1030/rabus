/*
 * ========================================
 * UMAY AJANS - MARKANIZI ÖNE ÇIKARALIM!
 * ========================================
 * Website: https://www.umayajans.com
 * Email: hi@umayajans.com
 * Phone: +90 (850) 242 56 40
 * 
 * Project: Rabus Website
 * File: Custom JS
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
    
    // Initialize careers specific functions
    initCareersAnimations();
    initSparkles();
    initFloatingParticles();
    initStarsContainers();
    initFormHandling();
    initVisibilityControl();
});

// Careers specific animations
function initCareersAnimations() {
    // Careers animasyonları buraya gelecek
    console.log('Careers animations initialized');
}

// Visibility Control System
let sparklesInterval = null;
let particlesInterval = null;
let isHeroVisible = true;

function initVisibilityControl() {
    const heroSection = document.getElementById('careers-hero');
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
    const heroSection = document.querySelector('.careers-hero');
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
    const heroSection = document.querySelector('.careers-hero');
    if (!heroSection) return;
    
    // Create particles continuously
    particlesInterval = setInterval(() => {
        createFloatingParticle();
    }, 200);
}

function createFloatingParticle() {
    const heroSection = document.querySelector('.careers-hero');
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
        'content-stars-container',
        'positions-stars-container', 
        'form-stars-container'
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

// Form Handling
function initFormHandling() {
    const form = document.getElementById('career-application-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this);
    });
    
    // File input validation
    const resumeInput = document.getElementById('resume');
    const portfolioInput = document.getElementById('portfolio');
    
    if (resumeInput) {
        resumeInput.addEventListener('change', function() {
            validateFileSize(this, 10); // 10MB limit
        });
    }
    
    if (portfolioInput) {
        portfolioInput.addEventListener('change', function() {
            validateFileSize(this, 10); // 10MB limit
        });
    }
    
    // Enhanced form interactions
    addFormEnhancements();
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.querySelector('.scramble-text').textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.querySelector('.scramble-text').textContent = 'Submitting...';
    
    // Send form data to PHP handler (SMTP version)
    fetch('career_handler_smtp.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Success feedback
            submitButton.querySelector('.scramble-text').textContent = 'Application Sent!';
            submitButton.style.background = '#10b981';
            
            // Show success message
            showNotification('Success! Application received!', 'success');
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitButton.disabled = false;
                submitButton.querySelector('.scramble-text').textContent = originalText;
                submitButton.style.background = 'white';
            }, 3000);
        } else {
            // Error feedback
            showNotification('❌ Submission failed: ' + (data.message || 'Please check your information and try again'), 'error');
            submitButton.disabled = false;
            submitButton.querySelector('.scramble-text').textContent = originalText;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('⚠️ Connection error! Please check your internet and try again.', 'error');
        submitButton.disabled = false;
        submitButton.querySelector('.scramble-text').textContent = originalText;
    });
}

function validateFileSize(input, maxSizeMB) {
    const file = input.files[0];
    if (file) {
        const maxSize = maxSizeMB * 1024 * 1024; // Convert to bytes
        if (file.size > maxSize) {
            showNotification(`📁 File too large! Maximum size is ${maxSizeMB}MB. Current: ${(file.size / 1024 / 1024).toFixed(1)}MB`, 'error');
            input.value = '';
            return false;
        }
    }
    return true;
}

function addFormEnhancements() {
    // Add floating labels effect
    const inputs = document.querySelectorAll('#career-application-form input, #career-application-form textarea, #career-application-form select');
    
    inputs.forEach(input => {
        // Focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
        
        // Real-time validation feedback
        input.addEventListener('input', function() {
            if (this.hasAttribute('required')) {
                if (this.value.trim() !== '') {
                    this.style.borderColor = '#10b981';
                } else {
                    this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
            }
        });
    });
    
    // Position selector auto-scroll
    const positionSelect = document.getElementById('position');
    if (positionSelect) {
        positionSelect.addEventListener('change', function() {
            if (this.value) {
                // Scroll to cover letter section
                const coverLetter = document.getElementById('coverLetter');
                if (coverLetter) {
                    setTimeout(() => {
                        coverLetter.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        coverLetter.focus();
                    }, 300);
                }
            }
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Icon based on type
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    // Colors based on type
    const colors = {
        success: { bg: '#10b981', border: '#059669' },
        error: { bg: '#ef4444', border: '#dc2626' },
        info: { bg: '#3b82f6', border: '#2563eb' }
    };
    
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${colors[type].bg};
        border: 2px solid ${colors[type].border};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        z-index: 10000;
        transform: translateX(120%);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        max-width: 350px;
        min-width: 280px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    notification.innerHTML = `
        <span style="font-size: 18px;">${icons[type]}</span>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
            opacity: 0.7;
            transition: opacity 0.2s;
        " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }
    }, 6000);
    
    // Add hover effect to pause auto-removal
    let autoRemoveTimeout;
    notification.addEventListener('mouseenter', () => {
        clearTimeout(autoRemoveTimeout);
    });
    
    notification.addEventListener('mouseleave', () => {
        autoRemoveTimeout = setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(120%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 400);
            }
        }, 2000);
    });
}

// Smooth scroll for position cards
document.addEventListener('click', function(e) {
    if (e.target.closest('.position-card')) {
        const card = e.target.closest('.position-card');
        const formSection = document.getElementById('career-form');
        
        if (formSection) {
            setTimeout(() => {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Auto-select position if clicked on specific card
                const positionTitle = card.querySelector('h3').textContent;
                const positionSelect = document.getElementById('position');
                
                if (positionSelect && positionTitle) {
                    if (positionTitle.includes('Propulsion')) {
                        positionSelect.value = 'propulsion-engineer';
                    } else if (positionTitle.includes('Avionics')) {
                        positionSelect.value = 'avionics-engineer';
                    } else if (positionTitle.includes('Mechanical')) {
                        positionSelect.value = 'mechanical-engineer';
                    }
                    
                    // Trigger change event
                    positionSelect.dispatchEvent(new Event('change'));
                }
            }, 100);
        }
    }
});

 