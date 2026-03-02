const reviewsData = [
    {
        name: "Shawn Patterson",
        date: "2 months ago",
        text: "I hired Bulletproof Floors to clean and organize my garage. I had a great experience from beginning to end. Andrew completely educated me about the process and provided timely updates throughout. The two-person team arrived on time, were very professional, and thoroughly cleaned and organized my entire garage. They set aside items I no longer wanted and organized everything else in a way I never would have thought of. Everything was neat and clean, including the garage shelves. This was money well spent, and I wouldn’t hesitate to hire Bulletproof Floors again."
    },
    {
        name: "Brittany Jenkins",
        date: "3 years ago",
        text: "I would like to say thank you to Bulletproof Floors for their outstanding work. I was initially reluctant due to Yelp reviews. I spoke with Andrew, who allowed me to pay COD and assured me the company was professional. The crew arrived on time, were courteous, professional, and completed the job efficiently. My husband was impressed and couldn’t believe how clean the garage was. I’m very glad we chose Bulletproof Floors."
    },
    {
        name: "Michele Harris",
        date: "3 years ago",
        text: "I found the business online. It took some coordination, and I was hesitant at first, even after the crew arrived. However, Naeem and Michele were pleasant and professional, and I was very pleased with the results."
    },
    {
        name: "Kristin Felgenauer",
        date: "5 months ago",
        text: "I had a great experience with the local Michigan team. Pricing was fair, the work was excellent, and they were able to come the next day. Highly recommend Bulletproof Floors for tough garage cleanouts."
    },
    {
        name: "Kristen Thompson",
        date: "4 years ago",
        text: "I can’t believe this is my garage—I can see the floor again. We moved to Florida and had no time to organize. Bulletproof Floors was professional and easy to work with, and they completely transformed the space."
    },
    {
        name: "Adriana Simon",
        date: "2 years ago",
        text: "I’ve used Bulletproof Floors to clean my garage and it was excellent. They removed everything, cleaned inside, and put everything back in order. The best service."
    },
    {
        name: "Janet Rodriguez",
        date: "11 months ago",
        text: "Andrew is great. He accurately estimated the time needed and completed the garage organization efficiently based on our layout. Very satisfied."
    },
    {
        name: "Frank Brady",
        date: "2 years ago",
        text: "We initially had a scheduling issue, which made me hesitant. Once resolved, the team exceeded expectations. They were punctual and did exceptional work. My garage is now clean and spacious enough for two cars."
    },
    {
        name: "Lisa Miller",
        date: "4 years ago",
        text: "We had a silver cleaning service with a floor power wash. The team arrived on time and did a great job. The garage is clean, fresh, and more organized than before. We would definitely use Bulletproof Floors again."
    },
    {
        name: "J Jolly",
        date: "4 years ago",
        text: "So worth it. Andrew communicated well and helped schedule around my availability. Jeffery arrived on time and worked extremely hard for over three hours in intense heat. Very happy with the result."
    },
    {
        name: "Jhanina Santiago",
        date: "3 years ago",
        text: "Nahim and Michele did an excellent job cleaning and organizing my overwhelming garage. They arrived early, were professional, and followed my instructions. The Diamond package with the wash was worth every penny. The service was reasonably priced and exceeded expectations."
    },
    {
        name: "Tona Coley",
        date: "4 years ago",
        text: "Andrew and his team transformed my hazardous and depressing garage into a clean and organized space in just a few hours. I can now park my car inside. My neighbor even said he had “garage envy.” Highly recommend Bulletproof Floors."
    },
    {
        name: "Christopher Meekins",
        date: "2 years ago",
        text: "We want to thank Naeem and Michelle for the excellent job cleaning and organizing our garage. They worked nonstop and went above and beyond. Very professional and highly recommended."
    },
    {
        name: "Mario Martinez",
        date: "Edited 2 years ago",
        text: "Bulletproof Floors turned my garage into an actual garage again. The process was much quicker and easier than expected. I don’t usually write reviews, but the results exceeded my expectations."
    },
    {
        name: "Ileana Carlisle",
        date: "3 years ago",
        text: "Excellent service—timely and thorough. The garage was left clean and organized. Andrew and the team were extremely professional and offered excellent customer service."
    },
    {
        name: "Juan Toro",
        date: "5 years ago",
        text: "Bulletproof Floors did a great job as advertised. They emptied the garage, cleaned thoroughly, and put everything back neatly. Very professional, and I would use them again."
    },
    {
        name: "OJ McDuffie",
        date: "3 years ago",
        text: "Andrew and his team at Bulletproof Floors were amazing. My garage hasn’t looked this good in 25 years. Zero complaints and outstanding work."
    },
    {
        name: "Julia Greenberg",
        date: "2 years ago",
        text: "Had an excellent experience with Naeem and his partner. Punctual, organized, hardworking, and pleasant. They worked in extreme heat and cleaned everything to perfection."
    },
    {
        name: "Kristy Figueras",
        date: "4 years ago",
        text: "After an injury prevented me from cleaning, Bulletproof Floors came through. Andrew and Penny were friendly, professional, and patient. My garage is now organized and stress-free."
    },
    {
        name: "Kyle Saniga",
        date: "2 years ago",
        text: "Andrew and crew arrived on time and worked with me to sort unwanted items. They gave me clarity and organization in under two hours. Great service."
    },
    {
        name: "Lucas Hampel",
        date: "3 years ago",
        text: "The company initially had to reschedule, which I understand. When they arrived, they did a fabulous job. My garage went from unusable to fully functional."
    },
    {
        name: "Sharon Cahoon",
        date: "2 years ago",
        text: "Fantastic, prompt, courteous, and professional service. Bulletproof Floors transformed my garage quickly for a house showing with little notice."
    },
    {
        name: "Theresa Howard",
        date: "5 years ago",
        text: "My garage was full of clutter. Bulletproof Floors removed items, cleaned, and helped me purge unwanted belongings. I felt comfortable trusting them with sentimental items."
    },
    {
        name: "David Wright",
        date: "2 years ago",
        text: "The workers were very professional and did a great job. I can finally use my garage again. Would absolutely recommend Bulletproof Floors."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Homepage Carousel
    const carouselContainer = document.querySelector('.reviews-grid');
    if (carouselContainer) {
        initUpdates(carouselContainer, true);
    }

    // 2. Reviews Page Grid
    const gridContainer = document.querySelector('.all-reviews-grid');
    if (gridContainer) {
        initUpdates(gridContainer, false);
    }

    function initUpdates(container, isCarousel) {
        const createReviewCard = (review) => {
            const card = document.createElement('div');
            card.className = 'review-card'; // Updated class to match CSS

            const MAX_LENGTH = 120;
            const isLong = review.text.length > MAX_LENGTH;
            const truncatedText = isLong ? review.text.substring(0, MAX_LENGTH) : review.text;
            const fullText = review.text;

            const stars = '★★★★★';
            const initial = review.name.charAt(0);

            card.innerHTML = `
            <div class="review-header">
              <div class="reviewer-avatar">${initial}</div>
              <div class="reviewer-info">
                <div class="reviewer-name">${review.name}</div>
                <div class="review-meta">
                  <span class="review-stars">${stars}</span>
                  <span class="review-date">${review.date}</span>
                </div>
              </div>
              <div class="google-icon">
                 <!-- Simple Google G Icon -->
                 <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
              </div>
            </div>
            <div class="review-body">
              <p class="review-text" data-full="${fullText.replace(/"/g, '&quot;')}" data-truncated="${truncatedText.replace(/"/g, '&quot;')}">${truncatedText}</p>
              ${isLong ? '<button class="read-more-btn">Read more</button>' : ''}
            </div>
            `;
            return card;
        };

        if (isCarousel) {
            reviewsData.forEach((review) => {
                container.appendChild(createReviewCard(review));
            });
            setupCarouselLogic(container);
        } else {
            // Grid logic: Show 6 initially, then View More
            const initialCount = 6;
            const shownReviews = reviewsData.slice(0, initialCount);
            const hiddenReviews = reviewsData.slice(initialCount);

            shownReviews.forEach(review => {
                container.appendChild(createReviewCard(review));
            });

            if (hiddenReviews.length > 0) {
                const btnContainer = document.createElement('div');
                btnContainer.style.textAlign = 'center';
                btnContainer.style.width = '100%';
                btnContainer.style.marginTop = '3rem';

                // Button Styles
                const btn = document.createElement('button');
                btn.textContent = 'View More';
                // Inline styles to match typical primary button if class isn't enough, 
                // but we use .btn-cta which likely exists.
                btn.className = 'btn btn-cta';

                btn.addEventListener('click', () => {
                    hiddenReviews.forEach(review => {
                        container.appendChild(createReviewCard(review));
                    });
                    btnContainer.remove(); // Remove button after clicking
                });

                btnContainer.appendChild(btn);
                // Insert after the grid container
                container.parentNode.appendChild(btnContainer);
            }
        }

        // Common Event Listener for Read More
        // Note: For dynamically added content, we need to ensure this still works. 
        // Since we verify classList on click, it delegates fine.

        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-btn')) {
                const btn = e.target;
                const textEl = btn.previousElementSibling;
                const fullText = textEl.getAttribute('data-full');
                const truncatedText = textEl.getAttribute('data-truncated');

                // Collapse others
                if (!btn.classList.contains('expanded')) {
                    const expandedBtns = container.querySelectorAll('.read-more-btn.expanded');
                    expandedBtns.forEach(b => {
                        const t = b.previousElementSibling;
                        t.textContent = t.getAttribute('data-truncated');
                        b.textContent = 'Read more';
                        b.classList.remove('expanded');
                    });
                }

                if (btn.classList.contains('expanded')) {
                    // Collapse
                    textEl.textContent = truncatedText;
                    btn.textContent = 'Read more';
                    btn.classList.remove('expanded');
                } else {
                    // Expand
                    textEl.textContent = fullText;
                    btn.textContent = 'Read less';
                    btn.classList.add('expanded');
                }
            }
        });
    }

    function setupCarouselLogic(container) {
        const SCROLL_SPEED = 1;
        const SCROLL_INTERVAL = 20;
        let scrollInterval;
        let isPaused = false;
        let isInteract = false;

        const startAutoScroll = () => {
            if (scrollInterval) clearInterval(scrollInterval);
            scrollInterval = setInterval(() => {
                const anyExpanded = container.querySelector('.read-more-btn.expanded');
                if (!isPaused && !isInteract && !anyExpanded) {
                    container.scrollLeft += SCROLL_SPEED;
                    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
                        container.scrollLeft = 0;
                    }
                }
            }, SCROLL_INTERVAL);
        };

        const stopAutoScroll = () => clearInterval(scrollInterval);

        // Interaction Handlers
        container.addEventListener('mouseenter', () => isInteract = true);
        container.addEventListener('mouseleave', () => isInteract = false);
        container.addEventListener('touchstart', () => isInteract = true, { passive: true });
        container.addEventListener('touchend', () => setTimeout(() => isInteract = false, 1200));

        // Auto-collapse on scroll
        container.addEventListener('scroll', () => {
            if (isInteract) {
                const expandedBtns = container.querySelectorAll('.read-more-btn.expanded');
                if (expandedBtns.length > 0) {
                    expandedBtns.forEach(btn => {
                        const textEl = btn.previousElementSibling;
                        textEl.textContent = textEl.getAttribute('data-truncated');
                        btn.textContent = 'Read more';
                        btn.classList.remove('expanded');
                    });
                }
            }
        });

        // Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting ? startAutoScroll() : stopAutoScroll());
        }, { threshold: 0.1 });
        observer.observe(container);
    }
});
