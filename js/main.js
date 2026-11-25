/**
 * Onty Cake & Bakery - Authentic Categories & Items
 * Clean Square Cards Layout with Category Tabs and Items (NO PRICES)
 */

const ONTY_FULL_CATALOG = [
  // 1. BOLU & ROLL CAKE
  {
    id: "bolu",
    name: "Bolu Gulung & Cake",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-6.jpg",
    items: [
      { name: "Bolgul Mocca Mesis", badge: "Best Seller" },
      { name: "Bolgul Strawberry", badge: "Favorit" },
      { name: "Bolgul Red Velvet" },
      { name: "Bolgul Nanas", badge: "Signature" },
      { name: "Bolgul Coklat Mesis" },
      { name: "Bolgul Keju" },
      { name: "Tiger Roll", badge: "Signature" },
      { name: "Bolu Pisang" },
      { name: "Bolu Tape" },
      { name: "Bolu Marmer" },
      { name: "Bolu Jadul Mocca Mesis" },
      { name: "Bolu Jadul Keju" },
      { name: "Chiffon Pandan", badge: "Favorit" },
      { name: "Chiffon Keju" },
      { name: "Chiffon Coklat" },
      { name: "Lapis Pandan" },
      { name: "Bolu Marmer Besar", badge: "Pre Order" },
      { name: "Bolu Tape Besar", badge: "Pre Order" },
      { name: "Bolu Ketan Hitam" },
      { name: "Brownies 10 Topping" },
      { name: "Lapis Surabaya", badge: "Pre Order" },
      { name: "Lapis Mandarin", badge: "Pre Order" },
      { name: "Pandan Ketan Hitam" },
      { name: "Bolu Taro Keju" }
    ]
  },

  // 2. ROTI SISIR
  {
    id: "roti-sisir",
    name: "Roti Sisir",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-2.jpg",
    items: [
      { name: "Sisir Mentega", badge: "Best Seller" },
      { name: "Sisir Mocca" },
      { name: "Sisir Ori" },
      { name: "Sisir Strawberry Keju" },
      { name: "Sobek Sisir Ori" }
    ]
  },

  // 3. ROTI KRUMPUL
  {
    id: "roti-krumpul",
    name: "Roti Krumpul",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-3.jpg",
    items: [
      { name: "Krumpul Topping Gula" },
      { name: "Krumpul Topping Meses", badge: "Favorit" },
      { name: "Krumpul Topping Keju" },
      { name: "Krumpul Isi Susu" },
      { name: "Krumpul Pandan Kelapa" },
      { name: "Krumpul Isi Kombinasi" },
      { name: "Krumpul Isi Coklat" },
      { name: "Krumpul Pisang Susu Keju", badge: "Spesial" },
      { name: "Krumpul Isi Susu Keju" }
    ]
  },

  // 4. ROTI PISANG & ROTI MANIS
  {
    id: "roti-manis",
    name: "Roti Pisang & Manis",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-5.jpg",
    items: [
      { name: "Pisang Coklat Keju", badge: "Best Seller" },
      { name: "Pisang Coklat" },
      { name: "Pisang Keju" },
      { name: "Pisang Polos" },
      { name: "Pisang Kepang" },
      { name: "Mentega Gula" },
      { name: "Cinnamon Sugar" },
      { name: "Strawberry" },
      { name: "Susu" },
      { name: "Nanas" },
      { name: "Coklat" },
      { name: "Pandan Srikaya" },
      { name: "Pandan Kelapa" },
      { name: "Kacang Hijau" },
      { name: "Coklat Kacang" },
      { name: "Garlic Cheese" },
      { name: "Blueberry Cheese" },
      { name: "Roti Abon", badge: "Favorit" },
      { name: "Sosis" },
      { name: "Long Cheese" },
      { name: "Choco Vanilla" },
      { name: "Tigarasa" },
      { name: "Triple Cheese" },
      { name: "Bluder Ori" },
      { name: "Bluder Coklat" },
      { name: "Bluder Keju" },
      { name: "Smoked Beef" },
      { name: "Pizza Mini" },
      { name: "Melted Cheese Bun" }
    ]
  },

  // 5. SALT BREAD & ROTI GELONG
  {
    id: "salt-bread",
    name: "Salt Bread & Geloong",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-6.jpg",
    items: [
      { name: "Salt Bread Original", badge: "Trending" },
      { name: "Smoked Beef Cheese" },
      { name: "Dirty Choco" },
      { name: "Double Cheese" },
      { name: "Strawberry Cheese" },
      { name: "Garlic Butter" },
      { name: "Roti Geloong Coklat" },
      { name: "Roti Geloong Coklat Keju" },
      { name: "Roti Geloong Keju" }
    ]
  },

  // 6. ROTI BESAR & SOBEK
  {
    id: "roti-besar",
    name: "Roti Besar & Sobek",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-2.jpg",
    items: [
      { name: "Roti Tawar Ori" },
      { name: "Tawar Gandum" },
      { name: "Tawar Keju" },
      { name: "Tawar Muesli" },
      { name: "Telur Ori" },
      { name: "Telur Keju" },
      { name: "Blueberry Toast" },
      { name: "Pizza Roll" },
      { name: "Wollroll Coklat" },
      { name: "Wollroll Keju" },
      { name: "Sobek Coklat" },
      { name: "Sobek Pandan Coklat" },
      { name: "Sobek Coklat Keju" },
      { name: "Sobek Kombinasi" },
      { name: "Sobek Coklat Besar" },
      { name: "Sobek Piscokju", badge: "Favorit" },
      { name: "Sobek Pizza" },
      { name: "Sobek Melted Cheese" },
      { name: "Bomboloni" },
      { name: "Pukis" }
    ]
  },

  // 7. CAKE SLICE
  {
    id: "cake-slice",
    name: "Cake Slice",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-14.jpg",
    items: [
      { name: "Strawberry Cheesecake" },
      { name: "Blueberry Cheesecake" },
      { name: "Chocolate Cheesecake" },
      { name: "Speculas Cheesecake" },
      { name: "Red Velvet Cake Slice" },
      { name: "Blackforest Cake Slice" },
      { name: "Millescrepes Coklat" },
      { name: "Millescrepes Red Velvet" },
      { name: "Millescrepes Caramel" },
      { name: "Millescrepes Taro" },
      { name: "Tiger Roll Slice" },
      { name: "Taro Roll Cake Slice" },
      { name: "Matcha Roll Cake Slice" },
      { name: "Cookies n Cream Roll Slice" },
      { name: "Brownies Mika" },
      { name: "Brownies Bites Matcha" },
      { name: "Muffin Coklat" }
    ]
  },

  // 8. SOFT SOURDOUGH & SOFT COOKIES
  {
    id: "sourdough-cookies",
    name: "Soft Sourdough & Cookies",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-1.jpg",
    items: [
      { name: "Cranberries Creamcheese" },
      { name: "Choco Earlgrey" },
      { name: "Choco Cheese" },
      { name: "Muesli Ori" },
      { name: "Cranberry Ori" },
      { name: "Earlgrey Ori" },
      { name: "Cranberries Taro" },
      { name: "Caramel Creamcheese Cookie" },
      { name: "Funfetti Cookie" },
      { name: "Choco Marble Cookie" },
      { name: "Choco Peanut Cookie" },
      { name: "Original Choco Cookie" },
      { name: "Red Velvet Cookie" },
      { name: "Monster Cookie", badge: "Trending" },
      { name: "Greentea Cookie" },
      { name: "Pink Berry Cookie" },
      { name: "Choco Milk Cookie" },
      { name: "Choco Cheese Cookie" }
    ]
  },

  // 9. DESSERT BOX & ROTI BUN
  {
    id: "dessert-box",
    name: "Dessert Box & Roti Bun",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-4.jpg",
    items: [
      { name: "Choco Pistachio", badge: "Trending" },
      { name: "Caramel Dessert Box" },
      { name: "Red Velvet Box" },
      { name: "Blackforest Box" },
      { name: "Choco Belgium" },
      { name: "Hazelnut Box" },
      { name: "Tiramisu Box" },
      { name: "Banoffee Box" },
      { name: "Caramel Cheese Box" },
      { name: "Choco Peanut Box" },
      { name: "Strawberry Box" },
      { name: "Cheese Bun" },
      { name: "Coffee Bun" },
      { name: "Blueberry Bun" },
      { name: "Vanilla Chocochip Bun" }
    ]
  },

  // 10. PASTRY & PUDING
  {
    id: "pastry-puding",
    name: "Pastry, Puding & Pasta",
    cover: "https://preview.milingona.co/themes/bakery/onepage/wp-content/uploads/2017/12/product-11.jpg",
    items: [
      { name: "Pie Susu" },
      { name: "Pie Brownies" },
      { name: "Pastry Choco Roll" },
      { name: "Pastry Cheese Roll" },
      { name: "Bolen Lilit Pisang Coklat" },
      { name: "Bolen Lilit Pisang Keju" },
      { name: "Strudel Pisang" },
      { name: "Strudel Mini" },
      { name: "Bolen Tape" },
      { name: "Bolen Pisang" },
      { name: "Soes Retak" },
      { name: "Eclair" },
      { name: "Soes Matcha" },
      { name: "Silky Mangga" },
      { name: "Silky Strawberry" },
      { name: "Silky Coklat" },
      { name: "Silky Anggur" },
      { name: "Puding Marie" },
      { name: "Puding Kelapa" },
      { name: "Salad Buah" },
      { name: "Bongko Roti" },
      { name: "Pasta Carbonara" },
      { name: "Klapertart" },
      { name: "Spaghetti Brulee" },
      { name: "Puding Buah" },
      { name: "Puding Taro" },
      { name: "Oum Ali" }
    ]
  }
];

// 6 Signature Menu Unggulan Onty Cake untuk Showcase Halaman Home
const ONTY_HOME_FEATURED = [
  { name: "Bolgul Mocca Mesis", category: "Bolu Gulung", badge: "Best Seller" },
  { name: "Bolgul Strawberry", category: "Bolu Gulung", badge: "Favorit" },
  { name: "Sisir Mentega", category: "Roti Sisir", badge: "Signature" },
  { name: "Roti Krumpul Topping Keju", category: "Roti Krumpul", badge: "Best Seller" },
  { name: "Salt Bread Original", category: "Salt Bread", badge: "Favorit" },
  { name: "Chiffon Pandan Almond", category: "Chiffon Cake", badge: "Signature" }
];

function renderHomeFeatured() {
  const container = document.getElementById("homeFeaturedGrid");
  if (!container) return;

  container.innerHTML = ONTY_HOME_FEATURED.map(item => `
    <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-3 mb-md-4">
      <div class="onty-square-card">
        ${item.badge ? `<span class="onty-card-badge">${item.badge}</span>` : ''}
        
        <div class="onty-square-frame">
          <div class="onty-square-bg">
            <span class="onty-initial">${item.name.charAt(0)}</span>
          </div>
        </div>

        <div class="onty-square-info">
          <h5 class="onty-item-title font-heading">${item.name}</h5>
        </div>
      </div>
    </div>
  `).join('');
}

let selectedCategory = "bolu";
let isExpanded = false;

function renderCategoryPills() {
  const nav = document.getElementById("ontyCategoryNav");
  if (!nav) return;

  nav.innerHTML = ONTY_FULL_CATALOG.map(cat => `
    <button class="square-cat-pill ${cat.id === selectedCategory ? 'active' : ''}" onclick="changeCategory('${cat.id}')">
      ${cat.name}
    </button>
  `).join('');
}

function renderSquareItems() {
  const container = document.getElementById("ontySquareGrid");
  const titleEl = document.getElementById("categoryHeading");
  const countEl = document.getElementById("categoryTotalCount");
  const toggleBtnWrap = document.getElementById("catalogToggleWrap");
  const toggleBtn = document.getElementById("catalogToggleBtn");
  if (!container) return;

  const currentCat = ONTY_FULL_CATALOG.find(c => c.id === selectedCategory);
  if (!currentCat) return;

  if (titleEl) titleEl.innerText = currentCat.name;
  
  const total = currentCat.items.length;
  // If not expanded, show preview items
  const displayItems = isExpanded ? currentCat.items : currentCat.items.slice(0, 6);

  if (countEl) {
    countEl.innerText = isExpanded ? `Menampilkan semua (${total} Varian)` : `Menampilkan ${displayItems.length} dari ${total} Varian`;
  }

  container.innerHTML = displayItems.map(item => `
    <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-3 mb-md-4">
      <div class="onty-square-card">
        ${item.badge ? `<span class="onty-card-badge">${item.badge}</span>` : ''}
        
        <div class="onty-square-frame">
          <div class="onty-square-bg">
            <span class="onty-initial">${item.name.charAt(0)}</span>
          </div>
        </div>

        <div class="onty-square-info">
          <h5 class="onty-item-title font-heading">${item.name}</h5>
        </div>
      </div>
    </div>
  `).join('');

  if (toggleBtnWrap && toggleBtn) {
    if (total <= 6) {
      toggleBtnWrap.style.display = "none";
    } else {
      toggleBtnWrap.style.display = "block";
      toggleBtn.innerHTML = isExpanded 
        ? `Tampilkan Lebih Sedikit <i class="bi bi-chevron-up ms-1"></i>` 
        : `Lihat Semuanya (${total} Varian) <i class="bi bi-chevron-down ms-1"></i>`;
    }
  }
}

function toggleCatalogExpand() {
  isExpanded = !isExpanded;
  renderSquareItems();
}

function changeCategory(catId) {
  selectedCategory = catId;
  isExpanded = false;
  renderCategoryPills();
  renderSquareItems();
}

// ==========================================================================
// E-Commerce Style Shop Logic (Sidebar Categories, Live Search, Sort, No Price)
// ==========================================================================

let activeShopCategory = "all";
let shopSearchQuery = "";
let shopSortOrder = "default";
let shopCurrentPage = 1;
const ITEMS_PER_PAGE = 9;

// Flatten all products with category info
function getAllCatalogProducts() {
  const allProducts = [];
  ONTY_FULL_CATALOG.forEach(cat => {
    cat.items.forEach(item => {
      allProducts.push({
        ...item,
        categoryId: cat.id,
        categoryName: cat.name
      });
    });
  });
  return allProducts;
}

function renderShopSidebar() {
  const sidebarEl = document.getElementById("shopSidebarCatList");
  if (!sidebarEl) return;

  const allItems = getAllCatalogProducts();

  let html = `
    <li>
      <button class="shop-cat-link ${activeShopCategory === 'all' ? 'active' : ''}" onclick="selectShopCategory('all')">
        <span>Semua Produk</span>
        <span class="shop-cat-count">(${allItems.length})</span>
      </button>
    </li>
  `;

  ONTY_FULL_CATALOG.forEach(cat => {
    const isCatActive = activeShopCategory === cat.id;
    html += `
      <li>
        <button class="shop-cat-link ${isCatActive ? 'active' : ''}" onclick="selectShopCategory('${cat.id}')">
          <span>${cat.name}</span>
          <span class="shop-cat-count">(${cat.items.length})</span>
        </button>
      </li>
    `;
  });

  sidebarEl.innerHTML = html;
}

function filterAndSortShopProducts() {
  let products = getAllCatalogProducts();

  // Filter by category
  if (activeShopCategory !== "all") {
    products = products.filter(p => p.categoryId === activeShopCategory);
  }

  // Filter by search query
  if (shopSearchQuery.trim() !== "") {
    const q = shopSearchQuery.toLowerCase();
    products = products.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.categoryName.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (shopSortOrder === "name-asc") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (shopSortOrder === "name-desc") {
    products.sort((a, b) => b.name.localeCompare(a.name));
  }

  return products;
}

function renderShopPagination(total, totalPages) {
  const paginationWrap = document.getElementById("shopPaginationWrap");
  if (!paginationWrap) return;

  if (totalPages <= 1) {
    paginationWrap.innerHTML = "";
    return;
  }

  let html = `<div class="shop-pagination d-flex align-items-center justify-content-center flex-wrap gap-2 gap-md-3 my-4">`;

  // Left arrow: Prev page
  if (shopCurrentPage > 1) {
    html += `
      <button class="shop-page-nav-btn" onclick="goToShopPage(${shopCurrentPage - 1})" aria-label="Previous Page" title="Halaman Sebelumnya">
        <i class="bi bi-arrow-left"></i>
      </button>
    `;
  }

  // Determine page window (up to 10 or dynamic sliding window)
  let startPage = Math.max(1, shopCurrentPage - 4);
  let endPage = Math.min(totalPages, startPage + 9);
  if (endPage - startPage < 9) {
    startPage = Math.max(1, endPage - 9);
  }

  for (let p = startPage; p <= endPage; p++) {
    if (p === shopCurrentPage) {
      html += `<button class="shop-page-num active" onclick="goToShopPage(${p})">${p}</button>`;
    } else {
      html += `<button class="shop-page-num" onclick="goToShopPage(${p})">${p}</button>`;
    }
  }

  // Right arrow: Next page
  if (shopCurrentPage < totalPages) {
    html += `
      <button class="shop-page-nav-btn" onclick="goToShopPage(${shopCurrentPage + 1})" aria-label="Next Page" title="Halaman Selanjutnya">
        <i class="bi bi-arrow-right"></i>
      </button>
    `;
  }

  // Fast forward >>: Last page
  if (shopCurrentPage < totalPages) {
    html += `
      <button class="shop-page-nav-btn shop-page-last" onclick="goToShopPage(${totalPages})" aria-label="Last Page" title="Halaman Terakhir">
        &gt;&gt;
      </button>
    `;
  }

  html += `</div>`;
  paginationWrap.innerHTML = html;
}

function goToShopPage(page) {
  shopCurrentPage = page;
  renderShopGrid();
  // Smooth scroll back to top of shop
  const mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderShopGrid() {
  const gridEl = document.getElementById("shopProductGrid");
  const resultsTextEl = document.getElementById("shopResultsText");
  const paginationWrap = document.getElementById("shopPaginationWrap");
  if (!gridEl) return;

  const filtered = filterAndSortShopProducts();
  const total = filtered.length;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  // Keep currentPage valid
  if (shopCurrentPage > totalPages) shopCurrentPage = Math.max(1, totalPages);

  // Pagination slice (Current page items only)
  const startIndex = (shopCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, total);
  const displayed = filtered.slice(startIndex, endIndex);

  if (resultsTextEl) {
    if (total === 0) {
      resultsTextEl.innerText = "Tidak ada produk yang cocok dengan pencarian";
    } else {
      resultsTextEl.innerText = `Menampilkan ${startIndex + 1}–${endIndex} dari ${total} hasil`;
    }
  }

  if (displayed.length === 0) {
    gridEl.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-3 text-muted mb-3 d-block"></i>
        <h5 class="fw-bold text-dark">Varian Produk Tidak Ditemukan</h5>
        <p class="text-muted small">Coba gunakan kata kunci lain atau pilih kategori di menu samping.</p>
        <button class="btn btn-outline-brand btn-sm px-4 mt-2" onclick="selectShopCategory('all')">Tampilkan Semua Produk</button>
      </div>
    `;
    if (paginationWrap) paginationWrap.innerHTML = "";
    return;
  }

  gridEl.innerHTML = displayed.map(item => `
    <div class="col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-md-4">
      <div class="shop-clean-card">
        <div class="shop-img-box">
          ${item.badge ? `<span class="shop-card-badge ${item.badge === 'Signature' ? 'badge-signature' : (item.badge === 'Favorit' ? 'badge-favorit' : 'badge-best')}">${item.badge}</span>` : ''}
          <div class="shop-img-content">
            <span>${item.name.charAt(0)}</span>
          </div>
        </div>

        <div class="text-center mt-auto">
          <h5 class="shop-product-name mb-0">${item.name}</h5>
        </div>
      </div>
    </div>
  `).join('');

  // Render Modern Numeric Pagination (matching user wireframe: ← 1 2 3 ... 10 → >>)
  renderShopPagination(total, totalPages);
}

function selectShopCategory(catId) {
  activeShopCategory = catId;
  shopCurrentPage = 1;
  renderShopSidebar();
  renderShopGrid();
}

function handleShopSearch() {
  const input = document.getElementById("shopSearchInput");
  if (!input) return;
  shopSearchQuery = input.value;
  shopCurrentPage = 1;
  renderShopGrid();
}

function handleShopSort() {
  const select = document.getElementById("shopSortSelect");
  if (!select) return;
  shopSortOrder = select.value;
  shopCurrentPage = 1;
  renderShopGrid();
}

function loadMoreShopProducts() {
  shopCurrentPage++;
  renderShopGrid();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeFeatured();
  renderCategoryPills();
  renderSquareItems();

  // Initialize E-commerce Shop view on products.html
  renderShopSidebar();
  renderShopGrid();

  const heroVideo = document.getElementById("heroVideo");
  if (heroVideo) {
    heroVideo.muted = true;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        document.body.addEventListener("click", () => {
          heroVideo.play();
        }, { once: true });
      });
    }
  }
});
