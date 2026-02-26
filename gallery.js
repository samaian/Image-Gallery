
const images = [
    // Nature (5 images)
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        title: "Mountain Highway",
        category: "nature",
        description: "Beautiful mountain road winding through dramatic peaks at sunset"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop",
        title: "Misty Forest",
        category: "nature",
        description: "Enchanting forest with morning mist between tall evergreen trees"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=600&h=600&fit=crop",
        title: "Ocean Sunset",
        category: "nature",
        description: "Spectacular sunset painting the ocean in vibrant orange and purple hues"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop",
        title: "Mountain Lake",
        category: "nature",
        description: "Crystal clear alpine lake reflecting majestic snow-capped mountains"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
        title: "Sunlit Forest",
        category: "nature",
        description: "Golden sunlight filtering through dense green forest canopy"
    },

    // City (5 images)
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=600&fit=crop",
        title: "Modern Skyline",
        category: "city",
        description: "Impressive city skyline with modern skyscrapers against blue sky"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=600&fit=crop",
        title: "Downtown Lights",
        category: "city",
        description: "Vibrant downtown streets illuminated by countless city lights at night"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=600&fit=crop",
        title: "City Sunset",
        category: "city",
        description: "Beautiful sunset casting golden light over urban architecture"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop",
        title: "Rainy Night",
        category: "city",
        description: "Atmospheric rainy night with neon reflections on wet streets"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=600&fit=crop",
        title: "Urban Life",
        category: "city",
        description: "Busy city intersection capturing the energy of urban life"
    },

    // Technology (5 images)
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop",
        title: "Circuit Board",
        category: "tech",
        description: "Intricate electronic circuit board with detailed copper traces"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop",
        title: "Dev Workspace",
        category: "tech",
        description: "Modern developer workspace with multiple monitors and RGB lighting"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop",
        title: "Data Center",
        category: "tech",
        description: "Rows of server racks in a modern data center with blue lighting"
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=600&fit=crop",
        title: "AI Concept",
        category: "tech",
        description: "Futuristic artificial intelligence concept with glowing neural network"
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=600&fit=crop",
        title: "Code Screen",
        category: "tech",
        description: "Close-up of computer screen displaying colorful programming code"
    },

    // Animals (5 images)
    ,
    {
        id: 17,
        src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=600&fit=crop",
        title: "Elephant Family",
        category: "animals",
        description: "Gentle elephant family walking together at sunset"
    },
    {
        id: 18,
        src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&h=600&fit=crop",
        title: "Cheetah Run",
        category: "animals",
        description: "Cheetah sprinting at full speed across the grasslands"
    },
    {
        id: 19,
        src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=600&fit=crop",
        title: "Panda Bear",
        category: "animals",
        description: "Adorable panda bear munching on bamboo leaves"
    },
    {
        id: 20,
        src: "https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=600&h=600&fit=crop",
        title: "Arctic Fox",
        category: "animals",
        description: "Beautiful arctic fox in its natural snowy habitat"
    },

    // Food (5 images)
    {
        id: 21,
        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop",
        title: "Gourmet Pizza",
        category: "food",
        description: "Delicious wood-fired pizza with fresh toppings and melted cheese"
    },
    {
        id: 22,
        src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop",
        title: "Healthy Bowl",
        category: "food",
        description: "Colorful and nutritious acai bowl with fresh fruits"
    },
    {
        id: 23,
        src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop",
        title: "Burger Feast",
        category: "food",
        description: "Juicy gourmet burger with crispy fries and sauce"
    },
    {
        id: 24,
        src: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=600&fit=crop",
        title: "Sushi Platter",
        category: "food",
        description: "Beautifully arranged fresh sushi and sashimi platter"
    },
    {
        id: 25,
        src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop",
        title: "Dessert Paradise",
        category: "food",
        description: "Decadent chocolate dessert with berries and mint"
    }
];

// State
let state = {
    currentFilter: 'all',
    searchTerm: '',
    currentIndex: 0,
    slideshowInterval: null,
    filteredImages: [...images]
};

// DOM Elements
const elements = {
    grid: document.getElementById('galleryGrid'),
    searchInput: document.getElementById('searchInput'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    closeBtn: document.getElementById('closeLightbox'),
    prevBtn: document.getElementById('prevImage'),
    nextBtn: document.getElementById('nextImage'),
    startSlideshow: document.getElementById('startSlideshow'),
    stopSlideshow: document.getElementById('stopSlideshow')
};

// Render gallery
function renderGallery() {
    // Filter images
    state.filteredImages = images.filter(img => {
        const matchesFilter = state.currentFilter === 'all' || img.category === state.currentFilter;
        const matchesSearch = img.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            img.description.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Clear grid
    elements.grid.innerHTML = '';

    // Show no results message if empty
    if (state.filteredImages.length === 0) {
        elements.grid.innerHTML = `
            <div class="no-results">
                <span>🔍</span>
                <p>No images found matching "${state.searchTerm}"</p>
            </div>
        `;
        return;
    }

    // Render images with staggered animation
    state.filteredImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.03}s`;
        item.innerHTML = `
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <span class="category-badge">${img.category}</span>
            <div class="gallery-item-overlay">
                <h3>${img.title}</h3>
                <p>${img.description}</p>
            </div>
        `;

        item.addEventListener('click', () => openLightbox(index));
        elements.grid.appendChild(item);
    });
}

// Lightbox functions
function openLightbox(index) {
    state.currentIndex = index;
    updateLightbox();
    elements.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const img = state.filteredImages[state.currentIndex];
    elements.lightboxImage.src = img.src;
    elements.lightboxImage.alt = img.title;
    elements.lightboxCaption.textContent = `${img.title} - ${img.description}`;
}

function closeLightbox() {
    elements.lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function prevImage() {
    state.currentIndex = (state.currentIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
    updateLightbox();
}

function nextImage() {
    state.currentIndex = (state.currentIndex + 1) % state.filteredImages.length;
    updateLightbox();
}

// Slideshow functions
function startSlideshow() {
    if (state.slideshowInterval) return;

    elements.startSlideshow.disabled = true;
    elements.stopSlideshow.disabled = false;

    state.slideshowInterval = setInterval(nextImage, 2000);
}

function stopSlideshow() {
    if (state.slideshowInterval) {
        clearInterval(state.slideshowInterval);
        state.slideshowInterval = null;
    }

    elements.startSlideshow.disabled = false;
    elements.stopSlideshow.disabled = true;
}

// Event Listeners
function setupEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        renderGallery();
    });

    // Filter buttons
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentFilter = btn.dataset.filter;
            renderGallery();
        });
    });

    // Lightbox controls
    elements.closeBtn.addEventListener('click', closeLightbox);
    elements.prevBtn.addEventListener('click', prevImage);
    elements.nextBtn.addEventListener('click', nextImage);

    // Slideshow controls
    elements.startSlideshow.addEventListener('click', startSlideshow);
    elements.stopSlideshow.addEventListener('click', stopSlideshow);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!elements.lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape': closeLightbox(); break;
            case 'ArrowLeft': prevImage(); break;
            case 'ArrowRight': nextImage(); break;
        }
    });

    // Close on background click
    elements.lightbox.addEventListener('click', (e) => {
        if (e.target === elements.lightbox) closeLightbox();
    });

    // Double click anywhere to close lightbox
    document.addEventListener('dblclick', () => {
        if (elements.lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    setupEventListeners();
});