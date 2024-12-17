// Select all images and popup elements
const images = document.querySelectorAll('img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const close = document.getElementById('close');

// Add click event to all images
images.forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = img.src;
    });
});

// Close the popup
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup on clicking outside the image
popup.addEventListener('click', (e) => {
    if (e.target !== popupImg) {
        popup.style.display = 'none';
    }
});
