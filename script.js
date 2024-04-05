document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.getElementsByClassName('dropdown-btn');
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function() {
            this.classList.toggle('active');
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    }

    // Example function for Business 1
    function updateBusiness1() {
        // Simulate decreasing supply and increasing product
        let supplyBar = document.getElementById('supplyBar1');
        let productBar = document.getElementById('productBar1');
        let supplyWidth = parseInt(supplyBar.style.width, 10);
        let productWidth = parseInt(productBar.style.width, 10);
        
        if (supplyWidth > 0) {
            supplyBar.style.width = `${supplyWidth - 1}%`;
        }
        
        if (productWidth < 100) {
            productBar.style.width = `${productWidth + 1}%`;
        }
    }

    // Start updating Business 1 as an example
    setInterval(updateBusiness1, 1000); // Update every second
    
    // Repeat and adjust for each business
});