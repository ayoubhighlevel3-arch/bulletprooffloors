
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Gallery Filtering System
       ========================================= */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentFilter = 'all';

    const filterGallery = (category) => {
        currentFilter = category;

        // Update Button State
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            // Check based on onclick text or custom attribute if we were using it, 
            // but here we are matching the onclick argument
            // Since we're moving logic out of inline onclick, we need to bind events differently below.
        });

        // We will handle class toggling in the event listener directly

        // Filter Items with Animation
        galleryItems.forEach(item => {
            const itemCategory = item.dataset.category;

            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                // Small timeout to allow display:block to apply before opacity transition
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    };

    // Bind Click Events to Filter Buttons
    // Note: We need to handle the fact that existing buttons have onclick attributes in HTML
    // We will override them or let them coexist, but best to replace behavior.

    // For this implementation, let's attach event listeners that might override or work alongside.
    // Ideally we remove onclick from HTML, but for now let's just make sure this script handles the logic if called.

    // Actually, to fully modernize, we should attach listeners here and remove inline onclicks in the HTML step.
    filterBtns.forEach(btn => {
        btn.onclick = null; // Remove inline handler if present

        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');

            // Get category. We need to infer it from the button text or logic
            // Let's rely on a mapping or checking the button text
            const text = e.target.textContent.toLowerCase();
            let category = 'all';
            if (text.includes('garage')) category = 'garage';
            else if (text.includes('patio')) category = 'patio';
            else if (text.includes('basemen')) category = 'basement';
            else if (text.includes('commercial')) category = 'commercial';
            else category = 'all';

            filterGallery(category);
        });
    });


    /* =========================================
       2. Lightbox Functionality
       ========================================= */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    // We only want to navigate through VISIBLE items
    let visibleItems = [];

    const updateVisibleItems = () => {
        // Convert NodeList to Array and filter by display style
        visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    };

    const openLightbox = (index) => {
        updateVisibleItems();
        // Find the actual index in the visible list corresponding to the clicked item
        // But the clicked item "index" passed here might be global index. 
        // Let's pass the item element instead.
    };

    const showImage = (index) => {
        if (index < 0) index = visibleItems.length - 1;
        if (index >= visibleItems.length) index = 0;

        currentIndex = index;
        const item = visibleItems[currentIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h4').textContent;
        const desc = item.querySelector('.gallery-caption p').textContent;

        lightboxImg.src = img.src;
        lightboxCaption.textContent = `${title} - ${desc}`;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // Attach Click to Gallery Items
    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            updateVisibleItems();
            const index = visibleItems.indexOf(item);
            if (index !== -1) {
                showImage(index);
            }
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
                closeLightbox();
            }
        });
    }

    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex + 1);
        });
    }

    // Keyboard Support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

});
