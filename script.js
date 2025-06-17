// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(5, 5, 16, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(5, 5, 16, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress');
    const skillSection = document.querySelector('#skills');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Initial check for elements in viewport
    function checkVisibility() {
        if (skillSection && isInViewport(skillSection)) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            // Remove the event listener once animation is triggered
            window.removeEventListener('scroll', checkVisibility);
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
    // Check on initial load
    checkVisibility();
    
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
            card.style.borderColor = 'rgba(110, 91, 250, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'rgba(110, 91, 250, 0.1)';
        });
    });
    
    // Contact form handling with EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare template parameters
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Send email using EmailJS
            emailjs.send('service_kxrlhxe', 'template_1wzyib9', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again.');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-category, .project-card, .education-item, .experience-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.skill-category, .project-card, .education-item, .experience-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on scroll and on load
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Typing effect for the hero section
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        typewriterElement.style.width = '0';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Import Modern Home JS functionality
    if (document.querySelector('.modern-hero')) {
        // Initialize Particles.js
        if (document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
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
                        value: 0.5,
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
                        opacity: 0.4,
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
        
        // Code Editor Animation
        const codeEditor = document.querySelector('.code-editor');
        if (codeEditor && typeof gsap !== 'undefined') {
            // Add hover effect with GSAP
            codeEditor.addEventListener('mouseenter', () => {
                gsap.to(codeEditor, {
                    duration: 0.5,
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                    ease: 'power2.out'
                });
            });
            
            codeEditor.addEventListener('mouseleave', () => {
                gsap.to(codeEditor, {
                    duration: 0.5,
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    ease: 'power2.out'
                });
            });
        }
        
        // Tech Icons Animation
        const techIcons = document.querySelectorAll('.tech-icon');
        if (techIcons.length > 0 && typeof gsap !== 'undefined') {
            techIcons.forEach((icon, index) => {
                // Initial animation with delay based on index
                gsap.from(icon, {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: 'power2.out'
                });
                
                // Hover animation
                icon.addEventListener('mouseenter', () => {
                    gsap.to(icon, {
                        y: -10,
                        scale: 1.1,
                        duration: 0.3,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        ease: 'power2.out'
                    });
                    
                    // Animate the icon inside
                    const iconElement = icon.querySelector('i');
                    if (iconElement) {
                        gsap.to(iconElement, {
                            color: '#8a2be2',
                            scale: 1.2,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                });
                
                icon.addEventListener('mouseleave', () => {
                    gsap.to(icon, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        boxShadow: 'none',
                        ease: 'power2.out'
                    });
                    
                    // Reset the icon inside
                    const iconElement = icon.querySelector('i');
                    if (iconElement) {
                        gsap.to(iconElement, {
                            color: '#e6f1ff',
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                });
            });
        }
        
        // CTA Cards Animation
        const ctaCards = document.querySelectorAll('.cta-card');
        if (ctaCards.length > 0 && typeof gsap !== 'undefined') {
            ctaCards.forEach((card, index) => {
                // Initial animation with delay
                gsap.from(card, {
                    x: index % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.3 + (0.2 * index),
                    ease: 'power2.out'
                });
                
                // Hover animation handled in CSS for performance
            });
        }
        
        // Scroll Indicator Animation
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator && typeof gsap !== 'undefined') {
            // Fade in animation
            gsap.from(scrollIndicator, {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 2,
                ease: 'power2.out'
            });
            
            // Add click event to scroll down
            scrollIndicator.addEventListener('click', () => {
                const nextSection = document.querySelector('#about') || document.querySelector('section:nth-of-type(2)');
                if (nextSection) {
                    window.scrollTo({
                        top: nextSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        // Hero Title Animation
        const heroTitleWrapper = document.querySelector('.hero-title-wrapper');
        if (heroTitleWrapper && typeof gsap !== 'undefined') {
            const titleItems = heroTitleWrapper.querySelectorAll('.hero-title-item');
            const titleHeight = titleItems[0]?.offsetHeight || 40;
            
            // Set up GSAP timeline for title rotation
            const titleTimeline = gsap.timeline({repeat: -1});
            
            titleItems.forEach((item, index) => {
                if (index < titleItems.length - 1) {
                    titleTimeline.to(heroTitleWrapper, {
                        y: -titleHeight * (index + 1),
                        duration: 0.7,
                        ease: 'power2.inOut',
                        delay: 2
                    });
                }
            });
            
            // Return to first item
            titleTimeline.to(heroTitleWrapper, {
                y: 0,
                duration: 0.7,
                ease: 'power2.inOut',
                delay: 2
            });
        }
        
        // Glitch Effect Enhancement
        const glitchElement = document.querySelector('.glitch');
        if (glitchElement && typeof gsap !== 'undefined') {
            // Random glitch effect
            const randomGlitch = () => {
                const intensity = Math.random() * 10;
                const duration = 0.1 + Math.random() * 0.2;
                
                gsap.to(glitchElement, {
                    skewX: intensity,
                    duration: duration,
                    ease: 'power4.inOut',
                    onComplete: () => {
                        gsap.to(glitchElement, {
                            skewX: 0,
                            duration: duration,
                            ease: 'power4.inOut'
                        });
                    }
                });
                
                // Add color shift
                gsap.to(glitchElement, {
                    textShadow: `0 0 5px rgba(138, 43, 226, 0.8), 0 0 10px rgba(138, 43, 226, 0.5), 0 0 15px rgba(138, 43, 226, 0.3)`,
                    duration: duration,
                    ease: 'power4.inOut',
                    onComplete: () => {
                        gsap.to(glitchElement, {
                            textShadow: 'none',
                            duration: duration,
                            ease: 'power4.inOut'
                        });
                    }
                });
            };
            
            // Set interval for random glitch effect
            setInterval(() => {
                if (Math.random() > 0.7) { // 30% chance to trigger
                    randomGlitch();
                }
            }, 2000);
        }
    }
});