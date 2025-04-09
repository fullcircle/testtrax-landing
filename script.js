// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Shop Now button click
    const shopNowBtn = document.querySelector('.shop-now-btn');
    shopNowBtn.addEventListener('click', () => {
        alert('Redirecting to the shop page...');
        // Replace with actual redirect: window.location.href = '/shop';
    });

    // Search bar placeholder
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${searchBar.value}`);
            // Replace with actual search logic
        }
    });

    // Cart button click
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
        alert('Opening cart...');
        // Replace with actual cart functionality
    });
});
