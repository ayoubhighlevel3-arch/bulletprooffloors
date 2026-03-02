// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    console.log('Bulletproof Floors Loaded');

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileBtn && nav) {
        // Toggle menu on button click
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent this click from immediately closing menu
            nav.classList.toggle('active');
            mobileBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            // Check if menu is open and click is outside both nav and button
            if (nav.classList.contains('active') &&
                !nav.contains(e.target) &&
                !mobileBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileBtn.textContent = '☰';
            }
        });

        // Close menu when clicking a nav link (for better UX)
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileBtn.textContent = '☰';
            });
        });
    }

    // Mission Results: Before & After Slider
    const initComparisonSliders = () => {
        const containers = document.querySelectorAll('.comparison-view');

        containers.forEach(container => {
            const overlay = container.querySelector('.before-overlay');
            const handle = container.querySelector('.slider-handle');
            const beforeImg = container.querySelector('.before-img');
            let isDragging = false;

            // Set the before image width to match the container width (not overlay width)
            // This prevents the zoom effect when dragging
            const setImageWidth = () => {
                const containerWidth = container.offsetWidth;
                if (beforeImg) {
                    beforeImg.style.width = `${containerWidth}px`;
                }
            };

            // Initial setup
            setImageWidth();

            // Update on window resize
            window.addEventListener('resize', setImageWidth);

            const updateSlider = (x) => {
                const rect = container.getBoundingClientRect();
                let position = ((x - rect.left) / rect.width) * 100;

                // Clamp between 0 and 100
                if (position < 0) position = 0;
                if (position > 100) position = 100;

                overlay.style.width = `${position}%`;
                handle.style.left = `${position}%`;
            };

            // Mouse Events
            handle.addEventListener('mousedown', (e) => {
                isDragging = true;
                // Don't jump to click position immediately on mousedown of handle, 
                // just start dragging. But wait, updateSlider uses clientX.
                // If we click the handle, clientX is effectively the current position? 
                // No, handle is 40px wide. 
                // It's safer to just start dragging.
                // updateSlider(e.clientX); // accessing e.clientX relative to container might jump slightly if we click edge of handle.
                // Let's keep updateSlider if we want immediate feedback, or remove it if we just want to grab.
                // Standard behavior: grab.
                e.preventDefault(); // Prevent text selection
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                updateSlider(e.clientX);
            });

            // Touch Events (Mobile)
            handle.addEventListener('touchstart', (e) => {
                isDragging = true;
                // updateSlider(e.touches[0].clientX); 
                // Optional: stop propagation to prevent carousel scroll start?
                // Browser usually decides scroll vs behavior on move, but start is key.
            }, { passive: true });

            window.addEventListener('touchend', () => {
                isDragging = false;
            });

            window.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                // Prevent scrolling page while sliding
                if (e.cancelable) e.preventDefault();
                updateSlider(e.touches[0].clientX);
            }, { passive: false });
        });
    };

    // Mobile Carousel Navigation for Mission Results
    const initMobileCarouselNav = () => {
        const carousel = document.querySelector('.mission-results-section .comparison-grid');
        const prevBtn = document.querySelector('.carousel-arrow-prev');
        const nextBtn = document.querySelector('.carousel-arrow-next');
        const dots = document.querySelectorAll('.carousel-dot');

        if (!carousel || !prevBtn || !nextBtn) return;

        const cards = carousel.querySelectorAll('.comparison-card');
        let currentIndex = 0;

        const scrollToCard = (index) => {
            if (index < 0 || index >= cards.length) return;

            currentIndex = index;
            const cardWidth = cards[0].offsetWidth;
            const gap = 24; // 1.5rem gap
            const scrollPosition = (cardWidth + gap) * index;

            carousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            updateDots();
            updateArrows();
        };

        const updateDots = () => {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        const updateArrows = () => {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === cards.length - 1;
        };

        // Arrow click handlers
        prevBtn.addEventListener('click', () => {
            scrollToCard(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            scrollToCard(currentIndex + 1);
        });

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                scrollToCard(index);
            });
        });

        // Update current index based on scroll position
        let scrollTimeout;
        carousel.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                const scrollLeft = carousel.scrollLeft;
                const cardWidth = cards[0].offsetWidth;
                const gap = 24;
                currentIndex = Math.round(scrollLeft / (cardWidth + gap));
                updateDots();
                updateArrows();
            }, 100);
        });

        // Initial state
        updateDots();
        updateArrows();
    };

    initMobileCarouselNav();
    initComparisonSliders();

    // Gloss Physics for Service Cards (Optimized)
    const cards = document.querySelectorAll('.service-card-new');
    cards.forEach(card => {
        let bounds;

        const rotateToMouse = (e) => {
            if (!bounds) return;
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        const onMouseEnter = () => {
            bounds = card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        };

        const onMouseLeave = () => {
            document.removeEventListener('mousemove', rotateToMouse);
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        };

        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);
    });
    // About Section Read More Toggle
    const aboutReadMoreBtn = document.getElementById('about-read-more');
    const aboutDetails = document.getElementById('about-description-full');

    if (aboutReadMoreBtn && aboutDetails) {
        aboutReadMoreBtn.addEventListener('click', () => {
            aboutDetails.classList.toggle('expanded');
            aboutReadMoreBtn.textContent = aboutDetails.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    }
});
