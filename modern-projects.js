// Modern Projects JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Project Cards Animation
    const projectItems = document.querySelectorAll('.project-item');
    if (projectItems.length > 0) {
        // Initial animation for project cards
        gsap.from(projectItems, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
        
        // Hover effects with GSAP
        projectItems.forEach(item => {
            // 3D tilt effect
            item.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const y = e.clientY - rect.top; // y position within the element
                
                const xPercent = x / rect.width - 0.5;
                const yPercent = y / rect.height - 0.5;
                
                gsap.to(item, {
                    rotationY: xPercent * 10, // rotate based on mouse x position
                    rotationX: yPercent * -10, // rotate based on mouse y position
                    duration: 0.5,
                    ease: 'power2.out'
                });
                
                // Move image slightly for parallax effect
                const image = item.querySelector('.project-image img');
                if (image) {
                    gsap.to(image, {
                        x: xPercent * 20,
                        y: yPercent * 20,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
            
            // Reset on mouse leave
            item.addEventListener('mouseleave', function() {
                gsap.to(item, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
                
                const image = item.querySelector('.project-image img');
                if (image) {
                    gsap.to(image, {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
    
    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        // Animate filter buttons on load
        gsap.from(filterButtons, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.5
        });
        
        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        // Show item with animation
                gsap.to(item, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    clearProps: 'visibility',
                    onStart: function() {
                        item.style.display = 'block';
                    }
                });
                
                // Animate tech tags if they exist
                const techTags = item.querySelectorAll('.tech-tag');
                if (techTags.length > 0) {
                    gsap.to(techTags, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.05,
                        duration: 0.4,
                        delay: 0.2,
                        ease: 'power2.out'
                    });
                }
                    } else {
                        // Hide item with animation
                        gsap.to(item, {
                            scale: 0.8,
                            opacity: 0,
                            duration: 0.4,
                            ease: 'power2.out',
                            onComplete: function() {
                                item.style.display = 'none';
                            }
                        });
                    }
                });
                
                // Update project count
                updateProjectCount(filter);
            });
        });
        
        // Function to update project count
        function updateProjectCount(filter) {
            const countElement = document.querySelector('.count-number');
            if (countElement) {
                let count = 0;
                if (filter === 'all') {
                    count = projectItems.length;
                } else {
                    projectItems.forEach(item => {
                        if (item.getAttribute('data-category') === filter) {
                            count++;
                        }
                    });
                }
                
                // Animate count change
                gsap.to(countElement, {
                    duration: 0.5,
                    innerText: count,
                    snap: { innerText: 1 },
                    ease: 'power2.out'
                });
            }
        }
    }
    
    // Animate floating circles
    const circles = document.querySelectorAll('.floating-circle');
    if (circles.length > 0) {
        circles.forEach(circle => {
            gsap.to(circle, {
                x: 'random(-50, 50)',
                y: 'random(-50, 50)',
                duration: 'random(10, 20)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
    }
    
    // Animate project header
    const projectsHeader = document.querySelector('.projects-header');
    if (projectsHeader) {
        gsap.from(projectsHeader.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: projectsHeader,
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
    }
    
    // Project links animation
    const projectLinks = document.querySelectorAll('.project-link');
    if (projectLinks.length > 0) {
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    y: -5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            link.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
});