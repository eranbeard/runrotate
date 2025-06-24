document.addEventListener('DOMContentLoaded', function() {
    // Function to create star rating element with numerical value
    function createStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.3; // More accurate half-star detection
        const percentage = (rating / 5) * 100;
        
        const container = document.createElement('div');
        container.className = 'rating-container';
        
        // Create star rating element
        const starRating = document.createElement('div');
        starRating.className = 'star-rating';
        
        // Create empty stars container
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        
        // Create filled stars container
        const filledStars = document.createElement('div');
        filledStars.className = 'filled-stars';
        
        // Add 5 empty stars
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            starsContainer.appendChild(star.cloneNode(true));
        }
        
        // Set filled stars width based on rating
        filledStars.style.width = `${percentage}%`;
        
        // Add filled stars (all 5, but clipped by width)
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            filledStars.appendChild(star);
        }
        
        starRating.appendChild(starsContainer);
        starRating.appendChild(filledStars);
        
        // Add numerical value
        const valueSpan = document.createElement('span');
        valueSpan.className = 'rating-value';
        valueSpan.textContent = rating.toFixed(1);
        
        container.appendChild(starRating);
        container.appendChild(valueSpan);
        
        return container;
    }
    
    // Function to initialize star ratings
    function initStarRatings() {
        // Update user ratings
        document.querySelectorAll('.user-rating').forEach(ratingEl => {
            const rating = parseFloat(ratingEl.getAttribute('data-rating'));
            if (!isNaN(rating)) {
                const label = document.createElement('span');
                label.textContent = 'Jane\'s Rating: ';
                
                ratingEl.textContent = '';
                ratingEl.appendChild(label);
                
                const starRating = createStarRating(rating);
                ratingEl.appendChild(starRating);
            }
        });
        
        // Update global ratings
        document.querySelectorAll('.global-rating').forEach(ratingEl => {
            const rating = parseFloat(ratingEl.getAttribute('data-rating'));
            if (!isNaN(rating)) {
                const linkText = document.createElement('span');
                linkText.textContent = 'Global Rating: ';
                
                // Clear existing content but keep the external link icon
                const externalIcon = ratingEl.querySelector('i.fa-external-link-alt') || 
                                   document.createElement('i');
                externalIcon.className = 'fas fa-external-link-alt';
                
                ratingEl.textContent = '';
                ratingEl.appendChild(linkText);
                
                const starRating = createStarRating(rating);
                ratingEl.appendChild(starRating);
                ratingEl.appendChild(document.createTextNode(' '));
                ratingEl.appendChild(externalIcon);
            }
        });
    }
    
    // Initialize star ratings
    initStarRatings();
});
