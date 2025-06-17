/* Enhanced UI JavaScript for Project and Contact Sections */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize enhanced UI features
    enhanceProjectSection();
    enhanceContactSection();
    
    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Add page transition effect
    addPageTransitions();
});

/**
 * Enhances the project section with animations and interactive features
 */

    
    // Add 3D tilt effect to project cards if VanillaTilt is available
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-item'), {
            max: 10,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
            scale: 1.03
        });
    }
    
    // Add hover animations to project cards
    projectItems.forEach((item, index) => {
        // Set initial state with staggered reveal
        gsap.set(item, {
            opacity: 0,
            y: 30
        });
        
        // Reveal with stagger
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 * index,
            ease: 'power3.out'
        });
        
        // Hover animations
        item.addEventListener('mouseenter', function() {
            if (typeof VanillaTilt === 'undefined') { // Only apply if VanillaTilt is not being used
                gsap.to(this, {
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
            
            // Animate project title
            const projectTitle = this.querySelector('.project-title');
            if (projectTitle) {
                gsap.to(projectTitle, {
                    color: 'var(--primary-color)',
                    duration: 0.3
                });
            }
            
            // Animate tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            gsap.to(techTags, {
                y: -5,
                stagger: 0.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            if (typeof VanillaTilt === 'undefined') { // Only apply if VanillaTilt is not being used
                gsap.to(this, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
            
            // Reset project title
            const projectTitle = this.querySelector('.project-title');
            if (projectTitle) {
                gsap.to(projectTitle, {
                    color: 'var(--light-text)',
                    duration: 0.3
                });
            }
            
            // Reset tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            gsap.to(techTags, {
                y: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Enhances the contact section with animations and interactive features
 */
function enhanceContactSection() {
    // Add floating elements to contact container
    const contactContainer = document.querySelector('.contact-container');
    
    if (contactContainer) {
        // Add floating elements if they don't already exist
        if (!contactContainer.querySelector('.float-1')) {
            const float1 = document.createElement('div');
            float1.className = 'floating-element float-1';
            contactContainer.appendChild(float1);
        }
        
        if (!contactContainer.querySelector('.float-2')) {
            const float2 = document.createElement('div');
            float2.className = 'floating-element float-2';
            contactContainer.appendChild(float2);
        }
        
        // Add additional floating elements for more visual interest
        if (!contactContainer.querySelector('.float-3')) {
            const float3 = document.createElement('div');
            float3.className = 'floating-element float-3';
            contactContainer.appendChild(float3);
        }
        
        // Animate form inputs on focus
        const formInputs = document.querySelectorAll('.input-container input, .input-container textarea');
        
        formInputs.forEach(input => {
            // Add focus border if it doesn't exist
            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('focus-border')) {
                const focusBorder = document.createElement('div');
                focusBorder.className = 'focus-border';
                input.parentNode.insertBefore(focusBorder, input.nextSibling);
            }
            
            input.addEventListener('focus', function() {
                // Animate the input
                gsap.to(this, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                // Animate the focus border
                const focusBorder = this.nextElementSibling;
                if (focusBorder && focusBorder.classList.contains('focus-border')) {
                    gsap.to(focusBorder, {
                        width: '100%',
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
                
                // Animate the icon
                const icon = this.parentNode.querySelector('.input-icon');
                if (icon) {
                    gsap.to(icon, {
                        color: 'var(--primary-color)',
                        scale: 1.2,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
            
            input.addEventListener('blur', function() {
                // Reset the input
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                // Reset the focus border
                const focusBorder = this.nextElementSibling;
                if (focusBorder && focusBorder.classList.contains('focus-border')) {
                    gsap.to(focusBorder, {
                        width: '0%',
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
                
                // Reset the icon
                const icon = this.parentNode.querySelector('.input-icon');
                if (icon) {
                    gsap.to(icon, {
                        color: 'var(--gray-text)',
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
        });
        
        // Add animation to social icons
        const socialIcons = document.querySelectorAll('.social-icon');
        
        socialIcons.forEach((icon, index) => {
            // Initial state
            gsap.set(icon, {
                opacity: 0,
                y: 20
            });
            
            // Animate in on page load
            gsap.to(icon, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.1 * index,
                ease: 'power2.out'
            });
            
            // Create tooltip if it doesn't exist
            if (!icon.getAttribute('data-tooltip') && icon.querySelector('i')) {
                const iconClass = icon.querySelector('i').className;
                let tooltipText = '';
                
                // Set tooltip based on icon
                if (iconClass.includes('github')) tooltipText = 'GitHub';
                else if (iconClass.includes('linkedin')) tooltipText = 'LinkedIn';
                else if (iconClass.includes('twitter')) tooltipText = 'Twitter';
                else if (iconClass.includes('instagram')) tooltipText = 'Instagram';
                else if (iconClass.includes('facebook')) tooltipText = 'Facebook';
                else if (iconClass.includes('dribbble')) tooltipText = 'Dribbble';
                else if (iconClass.includes('behance')) tooltipText = 'Behance';
                else if (iconClass.includes('youtube')) tooltipText = 'YouTube';
                else if (iconClass.includes('envelope')) tooltipText = 'Email';
                
                if (tooltipText) {
                    icon.setAttribute('data-tooltip', tooltipText);
                }
            }
            
            // Add hover animation
            icon.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    y: -5,
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                });
                
                // Create and animate the ripple effect
                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                this.appendChild(ripple);
                
                gsap.fromTo(ripple, 
                    { scale: 0, opacity: 1 },
                    { scale: 1.5, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => ripple.remove() }
                );
            });
            
            icon.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                });
            });
        });
        
        // Add form submission animation
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Animate button with ripple effect
                const submitBtn = this.querySelector('button[type="submit"]');
                
                if (submitBtn) {
                    // Create ripple effect
                    const ripple = document.createElement('span');
                    ripple.className = 'btn-ripple';
                    submitBtn.appendChild(ripple);
                    
                    // Animate ripple
                    gsap.fromTo(ripple, 
                        { scale: 0, opacity: 1 },
                        { scale: 2, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => ripple.remove() }
                    );
                    
                    // Animate button
                    gsap.to(submitBtn, {
                        scale: 0.95,
                        duration: 0.1,
                        ease: 'power2.out',
                        onComplete: function() {
                            gsap.to(submitBtn, {
                                scale: 1,
                                duration: 0.3,
                                ease: 'elastic.out(1, 0.3)'
                            });
                        }
                    });
                }
                
                // Here you would normally handle the form submission
                // For demo purposes, we'll just show a success message
                const formGroups = contactForm.querySelectorAll('.input-container');
                
                // Create a loading spinner
                const loadingSpinner = document.createElement('div');
                loadingSpinner.className = 'loading-spinner';
                loadingSpinner.innerHTML = '<div class="spinner"></div><p>Sending message...</p>';
                contactForm.appendChild(loadingSpinner);
                
                // Hide form fields and show spinner
                gsap.to(formGroups, {
                    opacity: 0,
                    y: -20,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.from(loadingSpinner, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.5,
                    ease: 'power2.out'
                });
                
                // Simulate form submission delay
                setTimeout(() => {
                    // Hide spinner
                    gsap.to(loadingSpinner, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: function() {
                            loadingSpinner.remove();
                            
                            // Clear the form
                            contactForm.reset();
                            
                            // Show success message
                            const successMsg = document.createElement('div');
                            successMsg.className = 'success-message';
                            successMsg.innerHTML = '<div class="success-icon"><i class="fas fa-check-circle"></i></div><p>Message sent successfully!</p>';
                            contactForm.appendChild(successMsg);
                            
                            // Animate success message
                            gsap.from(successMsg, {
                                opacity: 0,
                                y: 20,
                                duration: 0.5,
                                ease: 'power2.out'
                            });
                            
                            // Animate success icon
                            const successIcon = successMsg.querySelector('.success-icon');
                            gsap.from(successIcon, {
                                scale: 0,
                                rotation: -180,
                                duration: 0.5,
                                delay: 0.2,
                                ease: 'back.out(1.7)'
                            });
                            
                            // Reset form after delay
                            setTimeout(() => {
                                gsap.to(successMsg, {
                                    opacity: 0,
                                    y: -20,
                                    duration: 0.3,
                                    ease: 'power2.out',
                                    onComplete: function() {
                                        successMsg.remove();
                                        gsap.to(formGroups, {
                                            opacity: 1,
                                            y: 0,
                                            stagger: 0.05,
                                            duration: 0.3,
                                            ease: 'power2.out'
                                        });
                                    }
                                });
                            }, 3000);
                        }
                    });
                }, 1500);
        }, 3000);
                    }
                });
            });
        }
    }
}

/**
 * Adds smooth page transitions to navigation links
 */
function addPageTransitions() {
    const navLinks = document.querySelectorAll('nav a, .section-links a');
    
    navLinks.forEach(link => {
        // Skip links that open in new tabs or are anchors
        if (link.getAttribute('target') === '_blank' || link.getAttribute('href').startsWith('#')) {
            return;
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Create overlay for transition
            const overlay = document.createElement('div');
            overlay.className = 'page-transition-overlay';
            document.body.appendChild(overlay);
            
            // Animate overlay
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: function() {
                    window.location.href = href;
                }
            });
        });
    });
    
    // Fade in page on load
    window.addEventListener('pageshow', function() {
        const overlay = document.querySelector('.page-transition-overlay');
        
        if (overlay) {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: function() {
                    overlay.remove();
                }
            });
        }
        
        // Animate content in
        gsap.from('main, section', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.1
        });
    });
}
            });
        }
    }
}