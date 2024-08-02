document.addEventListener('DOMContentLoaded', () => {
    const galleryOverlay = document.getElementById('gallery-overlay');
    const galleryImg = document.getElementById('gallery-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const zoomBtn = document.getElementById('zoom-btn');
    const thumbnails = Array.from(document.querySelectorAll('.thumbnails img'));
    
    let currentIndex = 0;
    let zoomed = false;

    // Array of full-size image URLs
    const fullSizeImages = thumbnails.map(img => img.getAttribute('src'));

    thumbnails.forEach((img, index) => {
        img.addEventListener('click', () => {
            galleryImg.src = fullSizeImages[index];
            galleryOverlay.style.display = 'flex';
            currentIndex = index;
            zoomed = false;
            updateZoom();
        });
    });

    function closeGallery() {
        galleryOverlay.style.display = 'none';
        // Fallback for smooth scrolling
        if (thumbnails[currentIndex].scrollIntoView) {
            thumbnails[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            const top = thumbnails[currentIndex].getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2);
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    }

    closeBtn.addEventListener('click', closeGallery);

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : fullSizeImages.length - 1;
        galleryImg.src = fullSizeImages[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < fullSizeImages.length - 1) ? currentIndex + 1 : 0;
        galleryImg.src = fullSizeImages[currentIndex];
    });

    zoomBtn.addEventListener('click', () => {
        zoomed = !zoomed;
        updateZoom();
    });

    function updateZoom() {
        galleryImg.style.transform = zoomed ? 'scale(1.5)' : 'scale(1)';
    }

    // Add keyboard arrow key controls
    document.addEventListener('keydown', (event) => {
        if (galleryOverlay.style.display === 'flex') {
            if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : fullSizeImages.length - 1;
                galleryImg.src = fullSizeImages[currentIndex];
            } else if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex < fullSizeImages.length - 1) ? currentIndex + 1 : 0;
                galleryImg.src = fullSizeImages[currentIndex];
            } else if (event.key === 'Escape') {
                closeGallery();
            }
        }
    });
});




