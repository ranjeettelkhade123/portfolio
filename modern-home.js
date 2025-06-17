// Modern Home JavaScript

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
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
    if (codeEditor) {
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
    if (techIcons.length > 0) {
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
    if (ctaCards.length > 0) {
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
    if (scrollIndicator) {
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
    if (heroTitleWrapper) {
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
    if (glitchElement) {
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
});