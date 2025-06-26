document.addEventListener('DOMContentLoaded', function() {
    // Get all form fields that count towards completion
    const completionFields = [
        '#first-name', '#last-name', '#bio', '#location',
        'input[name="focus"]:checked', // Checked badges
        '.personal-best input[type="text"]:not(:disabled)', // Filled personal bests
        '#profile-photo-preview:not([src*="placeholder"])' // Custom profile photo
    ];

    // Calculate completion percentage
    function calculateCompletion() {
        let completed = 0;
        const totalFields = 10; // Adjust this number based on your form fields
        
        // Check each field
        completionFields.forEach(selector => {
            if (selector.includes('input[type="checkbox"]')) {
                // For checkboxes, count if any are checked
                if (document.querySelector(selector)) {
                    completed++;
                }
            } else if (document.querySelector(selector)?.value) {
                // For text inputs, count if they have a value
                completed++;
            } else if (selector.includes('img')) {
                // For profile photo, check if it's not the placeholder
                const img = document.querySelector(selector);
                if (img && !img.src.includes('placeholder')) {
                    completed++;
                }
            }
        });
        
        // Calculate percentage (minimum 5% for just visiting the page)
        const percentage = Math.max(5, Math.round((completed / totalFields) * 100));
        
        // Update the UI
        updateCompletionUI(percentage);
    }
    
    // Update the completion UI
    function updateCompletionUI(percentage) {
        const percentageElement = document.querySelector('.completion-percentage');
        const progressFill = document.querySelector('.progress-fill');
        const hintElement = document.querySelector('.completion-hint');
        
        if (percentageElement) percentageElement.textContent = `${percentage}%`;
        if (progressFill) progressFill.style.width = `${percentage}%`;
        
        // Update hint message based on completion
        if (hintElement) {
            if (percentage === 100) {
                hintElement.textContent = 'Great job! Your profile is complete.';
                hintElement.style.color = 'var(--success-color, #10b981)';
            } else if (percentage >= 75) {
                hintElement.textContent = 'Almost there! Just a few more details to go.';
            } else if (percentage >= 50) {
                hintElement.textContent = 'Good progress! Keep going to complete your profile.';
            } else {
                hintElement.textContent = 'Complete more sections to reach 100%';
            }
        }
    }
    
    // Add event listeners to all form fields
    const form = document.querySelector('.profile-edit-form');
    if (form) {
        form.addEventListener('change', calculateCompletion);
        form.addEventListener('input', calculateCompletion);
    }
    
    // Initial calculation
    calculateCompletion();
});
