// Sayfa elementleri
const mainContent = document.getElementById('mainContent');
const productPage = document.getElementById('productPage');
const categoriesGrid = document.getElementById('categoriesGrid');
const productsGrid = document.getElementById('productsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const backButton = document.getElementById('backButton');

function getCategoryById(categoryId) {
    return menuData.categories.find(category => category.id === Number(categoryId));
}

function parseCategoryIdFromHash() {
    const match = window.location.hash.match(/^#kategori-(\d+)$/);
    return match ? Number(match[1]) : null;
}

// Kategorileri yükle
function loadCategories() {
    categoriesGrid.innerHTML = '';
    
    menuData.categories.forEach(category => {
        const productCount = menuData.products[category.id]?.length || 0;
        
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.onclick = () => showProducts(category.id, category.name);
        
        categoryCard.innerHTML = `
            <img src="${category.image}" alt="${category.name}" class="category-image">
            <div class="category-info">
                <div class="category-name">${category.icon} ${category.name}</div>
                <div class="category-count">${productCount} Ürün</div>
            </div>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Ürünleri göster
function showProducts(categoryId, categoryName, options = {}) {
    const { addToHistory = true, scrollTop = true } = options;
    const products = menuData.products[categoryId] || [];
    
    if (products.length === 0) {
        alert('Bu kategoride henüz ürün bulunmamaktadır.');
        return;
    }
    
    // Başlığı güncelle
    categoryTitle.textContent = categoryName;
    
    // Ürünleri yükle
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Sayfaları değiştir
    mainContent.classList.add('hidden');
    productPage.classList.remove('hidden');

    // Geçişi tarayıcı geçmişine ekle
    if (addToHistory) {
        const hash = `#kategori-${categoryId}`;
        history.pushState({ view: 'products', categoryId, categoryName }, '', hash);
    }
    
    // Sayfayı başa scroll
    if (scrollTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Kategorilere geri dön
function showCategories(options = {}) {
    const { updateHistory = false, scrollTop = true } = options;

    if (updateHistory && !productPage.classList.contains('hidden')) {
        if (history.state?.view === 'products') {
            history.back();
            return;
        }
    }

    productPage.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Sayfayı başa scroll
    if (scrollTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Event listeners
backButton.addEventListener('click', () => showCategories({ updateHistory: true }));

// Sayfa yüklendiğinde kategorileri göster
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();

    const initialCategoryId = parseCategoryIdFromHash();
    const initialCategory = initialCategoryId ? getCategoryById(initialCategoryId) : null;

    if (initialCategory) {
        showProducts(initialCategory.id, initialCategory.name, {
            addToHistory: false,
            scrollTop: false
        });
        history.replaceState(
            { view: 'products', categoryId: initialCategory.id, categoryName: initialCategory.name },
            '',
            `#kategori-${initialCategory.id}`
        );
    } else {
        history.replaceState(
            { view: 'categories' },
            '',
            `${window.location.pathname}${window.location.search}`
        );
    }
});

// Tarayıcı geri tuşu için
window.addEventListener('popstate', (event) => {
    const state = event.state;

    if (state?.view === 'products' && state.categoryId) {
        const category = getCategoryById(state.categoryId);
        if (category) {
            showProducts(category.id, category.name, {
                addToHistory: false,
                scrollTop: false
            });
            return;
        }
    }

    showCategories({
        updateHistory: false,
        scrollTop: false
    });
});
