// Modern About JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating elements
    initFloatingElements();
    
    // Initialize profile image animations
    initProfileImageAnimations();
    
    // Initialize timeline tabs
    initTimelineTabs();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize particles if available
    initParticles();
});

// Create and append floating elements
function initFloatingElements() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    
    // Create floating elements container if it doesn't exist
    let floatingElements = document.querySelector('.floating-elements');
    if (!floatingElements) {
        floatingElements = document.createElement('div');
        floatingElements.className = 'floating-elements';
        aboutSection.prepend(floatingElements);
        
        // Create floating circles
        const circles = [
            { className: 'floating-circle circle-1' },
            { className: 'floating-circle circle-2' },
            { className: 'floating-circle circle-3' }
        ];
        
        circles.forEach(circle => {
            const element = document.createElement('div');
            element.className = circle.className;
            floatingElements.appendChild(element);
        });
    }
}

// Initialize profile image animations
function initProfileImageAnimations() {
    const profileImage = document.querySelector('.modern-image-container');
    if (!profileImage) return;
    
    // Add tilt effect on mouse move
    profileImage.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX * 10; // Max 10 degrees
        const deltaY = (y - centerY) / centerY * 10; // Max 10 degrees
        
        this.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    });
    
    // Reset on mouse leave
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(0deg)';
    });
    
    // Add entrance animation
    if (typeof gsap !== 'undefined') {
        gsap.from(profileImage, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        // Animate status badge
        const statusBadge = document.querySelector('.modern-status-badge');
        if (statusBadge) {
            gsap.from(statusBadge, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: 'back.out(1.7)'
            });
        }
    }
}

// Initialize timeline tabs
function initTimelineTabs() {
    const tabs = document.querySelectorAll('.timeline-tab');
    const sections = document.querySelectorAll('.timeline-section');
    
    if (tabs.length === 0 || sections.length === 0) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the target section
            const target = this.getAttribute('data-target');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            const targetSection = document.querySelector(`.timeline-section[data-id="${target}"]`);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Animate timeline items
                if (typeof gsap !== 'undefined') {
                    const items = targetSection.querySelectorAll('.modern-timeline-item');
                    gsap.from(items, {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });
    
    // Activate first tab by default
    if (tabs[0]) {
        tabs[0].click();
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    // Animate section header
    const sectionHeader = document.querySelector('.modern-section-header');
    if (sectionHeader) {
        gsap.from(sectionHeader, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionHeader,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }
    
    // Animate bio paragraphs
    const bioParagraphs = document.querySelectorAll('.modern-bio p');
    if (bioParagraphs.length > 0) {
        gsap.from(bioParagraphs, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.modern-bio',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }
}

// Initialize particles if available
function initParticles() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('about-particles')) {
        particlesJS('about-particles', {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#8a2be2'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Add blinking animation to status badge
function initStatusBadge() {
    const statusBadge = document.querySelector('.modern-status-badge');
    if (!statusBadge) return;
    
    // Add blinking animation
    const indicator = document.createElement('span');
    indicator.className = 'status-indicator';
    statusBadge.prepend(indicator);
}

// Helper function to create and animate timeline items
function createTimelineItem(parent, data) {
    const item = document.createElement('div');
    item.className = 'modern-timeline-item';
    
    item.innerHTML = `
        <div class="timeline-date">${data.date}</div>
        <div class="timeline-title">${data.title}</div>
        <div class="timeline-subtitle">${data.subtitle}</div>
        <div class="timeline-description">${data.description}</div>
    `;
    
    parent.appendChild(item);
    return item;
}