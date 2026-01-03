// Sayfa elementleri
const mainContent = document.getElementById('mainContent');
const productPage = document.getElementById('productPage');
const categoriesGrid = document.getElementById('categoriesGrid');
const productsGrid = document.getElementById('productsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const backButton = document.getElementById('backButton');

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
function showProducts(categoryId, categoryName) {
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
    
    // Sayfayı başa scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Kategorilere geri dön
function showCategories() {
    productPage.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Sayfayı başa scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners
backButton.addEventListener('click', showCategories);

// Sayfa yüklendiğinde kategorileri göster
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
});

// Tarayıcı geri tuşu için
window.addEventListener('popstate', () => {
    if (!productPage.classList.contains('hidden')) {
        showCategories();
    }
});
