// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal Bests script loaded'); // Debug log
    const addPrBtn = document.getElementById('add-pr');
    const prList = document.querySelector('.pr-list');
    
    // Template for new PR item
    const prTemplate = `
        <div class="pr-item">
            <select class="form-select pr-distance">
                <option value="5k">5K</option>
                <option value="10k">10K</option>
                <option value="half">Half Marathon</option>
                <option value="marathon">Marathon</option>
                <option value="50k">50K</option>
                <option value="100k">100K</option>
                <option value="half-ironman">Half Ironman</option>
                <option value="ironman">Ironman</option>
                <option value="custom">Custom distance</option>
            </select>
            <div class="custom-distance-container" style="display: none;">
                <input type="number" class="form-input custom-distance" placeholder="Distance" min="0" step="0.01">
                <span class="unit-display">km</span>
            </div>
            <input type="text" class="form-input pr-time" placeholder="HH:MM:SS">
            <button type="button" class="btn-icon remove-pr" title="Remove">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Function to handle distance selection change
    function handleDistanceChange(selectElement) {
        const container = selectElement.closest('.pr-item').querySelector('.custom-distance-container');
        if (selectElement.value === 'custom') {
            container.style.display = 'flex';
            container.querySelector('.custom-distance').focus();
        } else {
            container.style.display = 'none';
        }
    }

    // Add new PR item
    if (addPrBtn && prList) {
        console.log('Add PR button found'); // Debug log
        addPrBtn.addEventListener('click', function() {
            const newPr = document.createElement('div');
            newPr.innerHTML = prTemplate;
            const prItem = newPr.firstElementChild;
            prList.appendChild(prItem);
            console.log('New PR item added'); // Debug log
            
            // Add event listener to the distance select
            const distanceSelect = prItem.querySelector('.pr-distance');
            if (distanceSelect) {
                distanceSelect.addEventListener('change', function() {
                    handleDistanceChange(this);
                });
            }
            
            // Add event listener to the remove button
            const removeBtn = prItem.querySelector('.remove-pr');
            if (removeBtn) {
                removeBtn.addEventListener('click', function() {
                    this.closest('.pr-item').remove();
                });
            }
        });
    }

    // Handle remove buttons for existing PR items
    document.querySelectorAll('.remove-pr').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.pr-item').remove();
        });
    });
});
