document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-container');

    // Use event delegation for better performance and handling dynamic content if needed
    if (faqContainer) {
        faqContainer.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header-modern');

            if (header) {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');

                // Optional: Close others when one opens (Accordion style)
                // If you want to allow multiple open, comment out this block
                const allItems = faqContainer.querySelectorAll('.accordion-item-modern');
                allItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            }
        });
    }
});
