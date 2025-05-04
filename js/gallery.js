// Gallery and Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    
    // Exit if no gallery or lightbox elements exist
    if (!lightbox || galleryItems.length === 0) return;
    
    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeLightbox = lightbox.querySelector('.close-lightbox');
    const prevBtn = lightbox.querySelector('.prev-btn');
    const nextBtn = lightbox.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            openLightbox(this);
        });
    });
    
    // Open lightbox with the clicked image
    function openLightbox(item) {
        const imgSrc = item.querySelector('img').src;
        const caption = item.querySelector('.gallery-caption').textContent;
        
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        
        // Prevent body scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightboxHandler() {
        lightbox.classList.remove('active');
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }
    
    closeLightbox.addEventListener('click', closeLightboxHandler);
    
    // Close lightbox when clicking outside the content
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightboxHandler();
        }
    });
    
    // Navigate to previous image
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent lightbox from closing
        navigateGallery(-1);
    });
    
    // Navigate to next image
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent lightbox from closing
        navigateGallery(1);
    });
    
    // Navigate through gallery
    function navigateGallery(direction) {
        currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
        updateLightboxContent();
    }
    
    // Update lightbox content based on current index
    function updateLightboxContent() {
        const currentItem = galleryItems[currentIndex];
        const imgSrc = currentItem.querySelector('img').src;
        const caption = currentItem.querySelector('.gallery-caption').textContent;
        
        // Fade transition effect
        lightbox.classList.add('transitioning');
        
        // Update image and caption
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
        
        // Remove transition class after animation completes
        setTimeout(() => {
            lightbox.classList.remove('transitioning');
        }, 300);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightboxHandler();
        } else if (e.key === 'ArrowLeft') {
            navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
            navigateGallery(1);
        }
    });
    
    // Add fade transition styles
    const style = document.createElement('style');
    style.innerHTML = `
        .lightbox.transitioning .lightbox-content {
            opacity: 0.5;
            transition: opacity 0.3s ease;
        }
        .lightbox .lightbox-content {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});