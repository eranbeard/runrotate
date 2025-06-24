document.addEventListener('DOMContentLoaded', function() {
    // Function to create star rating element
    function createStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        const container = document.createElement('div');
        container.className = 'star-rating';
        
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
        
        // Add filled stars
        for (let i = 0; i < fullStars; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            filledStars.appendChild(star);
        }
        
        // Add half star if needed
        if (hasHalfStar) {
            const halfStar = document.createElement('span');
            halfStar.className = 'star';
            filledStars.appendChild(halfStar);
            filledStars.style.width = `${(fullStars + 0.5) * 100 / 5}%`;
        } else {
            filledStars.style.width = `${fullStars * 100 / 5}%`;
        }
        
        container.appendChild(starsContainer);
        container.appendChild(filledStars);
        
        return container;
    }
    
    // Function to initialize star ratings
    function initStarRatings() {
        // Update user ratings
        document.querySelectorAll('.user-rating').forEach(ratingEl => {
            const text = ratingEl.textContent.trim();
            const ratingMatch = text.match(/(\d+\.?\d*)/);
            if (ratingMatch) {
                const rating = parseFloat(ratingMatch[0]);
                const starRating = createStarRating(rating);
                ratingEl.textContent = text.split(':')[0] + ': ';
                ratingEl.appendChild(starRating);
            }
        });
        
        // Update global ratings
        document.querySelectorAll('.global-rating').forEach(ratingEl => {
            const text = ratingEl.textContent.trim();
            const ratingMatch = text.match(/(\d+\.?\d*)/);
            if (ratingMatch) {
                const rating = parseFloat(ratingMatch[0]);
                const starRating = createStarRating(rating);
                const linkText = document.createElement('span');
                linkText.textContent = 'Global Rating: ';
                ratingEl.textContent = '';
                ratingEl.appendChild(linkText);
                ratingEl.appendChild(starRating);
                
                // Re-add external link icon
                const externalIcon = document.createElement('i');
                externalIcon.className = 'fas fa-external-link-alt';
                ratingEl.appendChild(document.createTextNode(' '));
                ratingEl.appendChild(externalIcon);
            }
        });
    }
    
    // Initialize star ratings
    initStarRatings();
});
