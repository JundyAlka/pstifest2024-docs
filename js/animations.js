// Animations and Visual Effects JavaScript

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    initializeHoverEffects();
    initializeParallaxEffects();
    initializeTypewriterEffect();
    initializeGlowEffects();
    initializeFloatingElements();
});

// Scroll-triggered animations
function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-animation') || 'fadeInUp';
                
                element.classList.add('animate-in');
                element.style.animationName = animationType;
                element.style.animationDuration = '0.8s';
                element.style.animationFillMode = 'both';
                element.style.animationTimingFunction = 'ease-out';
                
                // Add stagger delay for multiple elements
                const delay = element.getAttribute('data-delay') || 0;
                element.style.animationDelay = delay + 'ms';
                
                scrollObserver.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe elements with animation attributes
    const animatedElements = document.querySelectorAll('[data-animation], .stat-card, .lomba-card, .timeline-item, .info-card');
    animatedElements.forEach((element, index) => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        // Add stagger delay
        element.setAttribute('data-delay', index * 100);
        
        scrollObserver.observe(element);
    });
}

// Hover effects for interactive elements
function initializeHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.stat-card, .lomba-card, .info-card, .about-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
            
            // Add glow effect
            this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 212, 255, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
        });
    });

    // Navigation link hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#00d4ff';
            this.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
                this.style.textShadow = '';
            }
        });
    });
}

// Parallax effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .about-visual');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Typewriter effect for hero title
function initializeTypewriterEffect() {
    const typewriterElement = document.querySelector('.title-highlight');
    
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        
        let i = 0;
        const typeSpeed = 100;
        
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                // Add blinking cursor
                typewriterElement.style.borderRight = '3px solid #00d4ff';
                typewriterElement.style.animation = 'blink 1s infinite';
            }
        }
        
        // Start typewriter effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Glow effects for special elements
function initializeGlowEffects() {
    const glowElements = document.querySelectorAll('.title-highlight, .logo-text, .cta-button');
    
    glowElements.forEach(element => {
        // Add pulsing glow animation
        element.style.animation = 'glow 2s ease-in-out infinite alternate';
    });
    
    // Dynamic glow on mouse movement
    document.addEventListener('mousemove', function(e) {
        const glowCards = document.querySelectorAll('.hero-card, .about-card');
        
        glowCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;
                
                card.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
            } else {
                card.style.transform = '';
            }
        });
    });
}

// Floating animation for hero elements
function initializeFloatingElements() {
    const floatingElements = document.querySelectorAll('.hero-card, .about-card');
    
    floatingElements.forEach((element, index) => {
        // Skip elements containing PSTI text
        if (!element.textContent.includes('PSTI') && 
            !element.textContent.includes('Program Studi Teknologi Informasi')) {
            // Add floating animation with different delays
            element.style.animation = `float 3s ease-in-out infinite`;
            element.style.animationDelay = `${index * 0.5}s`;
        }
    });
}

// Particle trail effect on mouse movement
function initializeParticleTrail() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    
    function createParticle(x, y) {
        particles.push({
            x: x,
            y: y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 1,
            decay: Math.random() * 0.02 + 0.01
        });
    }
    
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.life -= particle.decay;
            
            if (particle.life <= 0) {
                particles.splice(i, 1);
                continue;
            }
            
            ctx.save();
            ctx.globalAlpha = particle.life;
            ctx.fillStyle = '#00d4ff';
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        
        requestAnimationFrame(updateParticles);
    }
    
    updateParticles();
    
    document.addEventListener('mousemove', function(e) {
        if (Math.random() < 0.3) { // 30% chance to create particle
            createParticle(e.clientX, e.clientY);
        }
    });
}

// Text reveal animation
function initializeTextReveal() {
    const textElements = document.querySelectorAll('.section-title, .hero-title');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `all 0.5s ease ${index * 0.05}s`;
            element.appendChild(span);
        });
        
        // Trigger animation when element is in view
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Smooth scroll with easing
function smoothScrollWithEasing(target, duration = 1000) {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Performance optimization for animations
function optimizeAnimations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        const animatedElements = document.querySelectorAll('[style*="animation"]');
        
        if (document.hidden) {
            animatedElements.forEach(element => {
                element.style.animationPlayState = 'paused';
            });
        } else {
            animatedElements.forEach(element => {
                element.style.animationPlayState = 'running';
            });
        }
    });
}

// Initialize performance optimizations
optimizeAnimations();

// CSS Animations (to be added to CSS)
const animationCSS = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes glow {
    0%, 100% {
        text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
    }
    50% {
        text-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes blink {
    0%, 50% {
        border-color: transparent;
    }
    51%, 100% {
        border-color: #00d4ff;
    }
}

.reduced-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
}
`;

// Add animation CSS to document
const style = document.createElement('style');
style.textContent = animationCSS;
document.head.appendChild(style);

