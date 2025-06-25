// Gallery and Lightbox JavaScript

// Initialize Gallery
document.addEventListener('DOMContentLoaded', function() {
    initializeGalleryFilters();
    initializeLightbox();
});

// Initialize Gallery Filters
function initializeGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            filterGalleryItems(galleryItems, filter);
        });
    });
}

// Filter gallery items with animation
function filterGalleryItems(items, filter) {
    items.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        
        // Add delay for staggered animation
        setTimeout(() => {
            if (shouldShow) {
                item.style.display = 'block';
                item.classList.remove('hidden');
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
                item.classList.add('hidden');
                setTimeout(() => {
                    if (item.classList.contains('hidden')) {
                        item.style.display = 'none';
                    }
                }, 300);
            }
        }, index * 50);
    });
}

// Initialize Lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Close lightbox when clicking close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close lightbox when clicking outside image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Open Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Add loading state
        lightboxImage.style.opacity = '0';
        lightboxImage.onload = function() {
            this.style.opacity = '1';
        };
    }
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        lightbox.classList.add('closing');
        
        setTimeout(() => {
            lightbox.classList.remove('active', 'closing');
            document.body.style.overflow = ''; // Restore scrolling
            
            // Clear image source to save memory
            const lightboxImage = document.getElementById('lightboxImage');
            if (lightboxImage) {
                lightboxImage.src = '';
            }
        }, 300);
    }
}

// Gallery Image Lazy Loading
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Gallery Masonry Layout (if needed)
function initializeMasonryLayout() {
    const grid = document.querySelector('.gallery-grid');
    
    if (grid && typeof Masonry !== 'undefined') {
        const masonry = new Masonry(grid, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item',
            gutter: 20,
            percentPosition: true
        });
        
        // Layout after images load
        imagesLoaded(grid, function() {
            masonry.layout();
        });
    }
}

// Gallery Search Functionality
function initializeGallerySearch() {
    const searchInput = document.getElementById('gallerySearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                const title = item.querySelector('h4')?.textContent.toLowerCase() || '';
                const description = item.querySelector('p')?.textContent.toLowerCase() || '';
                const matches = title.includes(searchTerm) || description.includes(searchTerm);
                
                if (matches || searchTerm === '') {
                    item.style.display = 'block';
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                    item.classList.add('hidden');
                    setTimeout(() => {
                        if (item.classList.contains('hidden')) {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    }
}

// Gallery Slideshow Mode
function initializeSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.gallery-item img');
    
    function showSlide(index) {
        if (slides[index]) {
            openLightbox(slides[index].src);
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Add navigation buttons to lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox && slides.length > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'lightbox-nav lightbox-prev';
        prevBtn.innerHTML = '&#8249;';
        prevBtn.addEventListener('click', prevSlide);
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'lightbox-nav lightbox-next';
        nextBtn.innerHTML = '&#8250;';
        nextBtn.addEventListener('click', nextSlide);
        
        lightbox.appendChild(prevBtn);
        lightbox.appendChild(nextBtn);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });
}

// Gallery Statistics
function updateGalleryStats() {
    const totalImages = document.querySelectorAll('.gallery-item').length;
    const visibleImages = document.querySelectorAll('.gallery-item.visible').length;
    
    const statsElement = document.getElementById('galleryStats');
    if (statsElement) {
        statsElement.textContent = `Showing ${visibleImages} of ${totalImages} images`;
    }
}

// Gallery Download Functionality
function downloadImage(imageSrc, filename) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename || 'psti-fest-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Gallery Share Functionality
function shareImage(imageSrc, title) {
    if (navigator.share) {
        navigator.share({
            title: title || 'PSTI FEST 2024',
            text: 'Check out this image from PSTI FEST 2024',
            url: imageSrc
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(imageSrc).then(() => {
            showNotification('Image URL copied to clipboard!');
        });
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 212, 255, 0.9);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize all gallery features
function initializeGallery() {
    initializeGalleryFilters();
    initializeLightbox();
    initializeLazyLoading();
    initializeGallerySearch();
    initializeSlideshow();
    updateGalleryStats();
}

// Export functions for global use
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.downloadImage = downloadImage;
window.shareImage = shareImage;

