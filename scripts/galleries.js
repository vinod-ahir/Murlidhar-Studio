document.addEventListener('DOMContentLoaded', () => {
    const galleryOverlay = document.getElementById('gallery-overlay');
    const galleryImg = document.getElementById('gallery-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const zoomBtn = document.getElementById('zoom-btn');
    let images = Array.from(document.querySelectorAll('.thumbnails img'));
    let currentIndex = 0;
    let zoomed = false;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            galleryImg.src = img.dataset.full;
            galleryOverlay.style.display = 'flex';
            currentIndex = index;
            zoomed = false;
            updateZoom();
        });
    });

    closeBtn.addEventListener('click', () => {
        galleryOverlay.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        galleryImg.src = images[currentIndex].dataset.full;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        galleryImg.src = images[currentIndex].dataset.full;
    });

    zoomBtn.addEventListener('click', () => {
        zoomed = !zoomed;
        updateZoom();
    });

    function updateZoom() {
        if (zoomed) {
            galleryImg.style.transform = 'scale(1.5)';
        } else {
            galleryImg.style.transform = 'scale(1)';
        }
    }
});
