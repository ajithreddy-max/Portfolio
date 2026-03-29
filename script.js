// ==================== NAVIGATION MENU TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== TYPING EFFECT ====================
class TypingEffect {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect for subtitle
document.addEventListener('DOMContentLoaded', () => {
    const subtitleElement = document.querySelector('.subtitle');
    if (subtitleElement) {
        const words = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
        new TypingEffect(subtitleElement, words, 2000);
    }
});

// ==================== ACTIVE NAVIGATION LINK HIGHLIGHTING ====================
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-links a');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingNav = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingNav?.classList.add('active');
        } else {
            correspondingNav?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message (in real application, you would send this to a server)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send the data to a backend service
        // Example: fetch('/api/contact', { method: 'POST', body: formData })
    });
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements with fade-in-up class
document.querySelectorAll('.timeline-item, .project-card, .skill-category, .stat-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== PARALLAX EFFECT FOR HERO SECTION ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ==================== PROJECT CARD TILT EFFECT ====================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== SKILL BADGE ANIMATION ====================
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1)';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1)';
    });
});

// ==================== DOWNLOAD RESUME FUNCTIONALITY ====================
document.querySelectorAll('a[href*="Download Resume"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Resume download functionality - Replace with actual resume file path');
        // In real application: window.open('path/to/your/resume.pdf', '_blank');
    });
});

// ==================== NAVBAR BACKGROUND CHANGE ON SCROLL ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// ==================== COUNTER ANIMATION FOR STATS ====================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const statNumbers = document.querySelectorAll('.stat-card .number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const target = parseInt(number.textContent);
            if (!isNaN(target)) {
                animateCounter(number, target);
                statsObserver.unobserve(number);
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ==================== TYPEWRITER EFFECT FOR HERO TITLE ====================
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const nameElement = heroTitle.querySelector('.highlight');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        // Start typewriter effect when page loads
        setTimeout(typeWriter, 1000);
    }
}

// ==================== LAZY LOADING FOR IMAGES ====================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
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

// Optimize scroll event listeners
const optimizedHighlight = debounce(highlightNavLink, 10);
window.addEventListener('scroll', optimizedHighlight);

// ==================== INITIALIZE ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Initialize any lazy-loaded content
    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach(el => {
        el.src = el.dataset.src;
    });
});

// ==================== ERROR HANDLING FOR IMAGES ====================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=Image+Not+Found';
    });
});
