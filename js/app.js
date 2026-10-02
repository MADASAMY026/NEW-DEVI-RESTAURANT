/* ===== 1. DATA ===== */
const RESTAURANTS = [
  {
    id: "chennai-spice", name: "Chennai Spice", category: "South Indian • Biryani • Chettinad", rating: 4.8, deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    foods: [
      { name: "Chicken Biryani", price: 220, desc: "Fragrant Seeraga Samba rice cooked with succulent chicken pieces and Chettinad spices.", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/12/1/1c7af522-bf85-4101-af10-0ab488f01d77_dce15c8c-cc2d-4ad4-9367-94c70ffb84d7.jpg_compressed" },
      { name: "Mutton Biryani", price: 280, desc: "Tender slow-cooked mutton biryani served with brinjal curry and onion raita.", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/3/4/f1b3e5b8-00fd-46ab-819b-83f9063d0287_d7dfe2c5-95a3-4024-a9f4-194c61ff241f.jpg" },
      { name: "Chicken 65", price: 180, desc: "Crispy, deep-fried spicy chicken bites garnished with curry leaves and lemon wedges.", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/2/16/f4e8ddee-021d-4f8f-9bd8-60554df49ac3_87eff7e6-788c-4d47-896a-7055b668e012.png_compressed" },
      { name: "Paneer Tikka", price: 170, desc: "Char-grilled cottage cheese cubes marinated in rich spiced yogurt and herbs.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/3/c995d23c-2240-44ba-b068-39ce90b2d0ae_50880eac-354b-4a73-bb46-ed550c158322.jpg" }
    ]
  },
  {
    id: "madras-cafe", name: "Madras Cafe", category: "Dosa • Idli • Traditional Meals", rating: 4.9, deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    foods: [
      { name: "Masala Dosa", price: 90, desc: "Crispy golden crepe filled with flavorful spiced potato masala, served with 3 chutneys.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/1/17/5265cfa4-67d4-43ba-8aef-6e64c80e5a81_b02db227-5b0e-4e02-8518-db87fd1068cc.JPG" },
      { name: "Idli Sambar", price: 70, desc: "Steamed fluffy rice cakes soaked in hot authentic drumstick sambar & coconut chutney.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/19/47094eb4-3c2d-4b65-a1e1-4bdd09acc220_fbcc92e6-796e-4042-8d9d-bfffb483e420.png_compressed" },
      { name: "Pongal", price: 80, desc: "Traditional ghee-roasted ven pongal loaded with cashews, black pepper & cumin.", veg: true, image: "https://thumbs.dreamstime.com/b/pongal-pongal-sambar-chutny-indian-food-pongal-banana-leaf-side-dish-pongal-pongal-sambar-chutny-south-365738365.jpg" },
      { name: "South Indian Meals", price: 150, desc: "Complete thali with steamed rice, sambar, rasam, kootu, poriyal, appalam and curd.", veg: true, image: "https://thumbs.dreamstime.com/b/south-indian-meals-ai-generative-image-south-indian-meals-traditional-platter-consisting-rice-sambar-rasam-vegetable-281161781.jpg?w=992" }
    ]
  },
  {
    id: "marina-grill", name: "Marina Grill", category: "Burgers • Grill • Fast Food", rating: 4.7, deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80",
    foods: [
      { name: "Chicken Burger", price: 180, desc: "Juicy grilled chicken patty topped with fresh lettuce, melted cheese & house special sauce.", veg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80" },
      { name: "Cheese Burger", price: 160, desc: "Double melted cheddar cheese burger with crispy onions, pickles, and creamy mayonnaise.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/8/27/48b995d8-0712-458b-aa71-c50e595a4871_8875163d-6ea5-4a25-9da1-6b1fe455857b.png" },
      { name: "French Fries", price: 100, desc: "Golden crispy potato fries tossed in peri-peri seasoning and sea salt.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/1/14/3d381b1a-6b60-4911-8352-aa7e7213aa5d_ceb99a2c-48ce-4da4-a1d1-4ac0b3ba736c.png" },
      { name: "Grilled Chicken", price: 240, desc: "Tender whole chicken leg piece marinated in smoke BBQ spices and flame grilled.", veg: false, image: "https:https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/scd9empgjdfeztf5mndy" }
    ]
  },
  {
    id: "namma-chennai", name: "Namma Chennai", category: "Tamil Cuisine • Veg • Non-Veg", rating: 4.8, deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    foods: [
      { name: "Paneer Dosa", price: 130, desc: "Butter roast dosa stuffed with spiced grated paneer and chopped coriander.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/22/32c2217c-290d-42da-b930-afe2af443b56_d953381d-fa38-40cb-b232-35c958f400e5.jpg" },
      { name: "Parotta & Chicken", price: 180, desc: "2 flaky layered Malabar parottas served with rich spicy Chennai chicken salna.", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/13/7667253e-d718-4419-abdd-2e9f01214da1_1115067%20.jpg" },
      { name: "Fish Fry", price: 220, desc: "Fresh catch Vanjaram fish slices coated with spicy masala and tawa fried crisp.", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/e2xf4hxw8uwgciexcavl" },
      { name: "Curd Rice", price: 80, desc: "Cooling tempered south Indian curd rice topped with mustard seeds, pomegranate & pickle.", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2026/3/13/ef8f45e7-2008-4a34-bc45-7aa4f9651d9e_25f32a99-3540-4331-9516-131dc73d0fc1.png_compressed" }
    ]
  }
];

/* ===== 2. GLOBAL STATE ===== */
let cart = [];
let currentRestaurantId = null;
let map = null, userMarker = null, deliveryMarker = null;
let liveWatchId = null, isManualMode = false, deliveryInterval = null;
let lastGeocodeTime = 0;

// Privacy: set to false to stop sending coordinates to Nominatim (address text won't be fetched)
const USE_ADDRESS_LOOKUP = true;

const DEFAULT_COORDS = { lat: 13.0827, lng: 80.2707 };
let selectedLocation = {
  lat: DEFAULT_COORDS.lat, lng: DEFAULT_COORDS.lng,
  address: "Chennai Central, Tamil Nadu, India", accuracy: "Chennai Default"
};

/* ===== 3. INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderRestaurants(RESTAURANTS);
  renderCart();
  initLeafletMap();
  watchGeoPermission(); // shows "Blocked" status on load if permission is denied

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") triggerSearch();
      else handleLiveSearch(e.target.value);
    });
  }
  const mapAddressInput = document.getElementById("mapAddressInput");
  if (mapAddressInput) {
    mapAddressInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") searchAddressOSM();
    });
  }
});

/* ===== 4. RESTAURANTS & MENU ===== */
function renderRestaurants(list) {
  const grid = document.getElementById("restaurantGrid");
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach((r) => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.onclick = () => viewMenu(r.id);
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${r.image}" alt="${r.name}" class="card-img" loading="lazy" />
        <div class="badge-rating">★ ${r.rating}</div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${r.name}</h3>
        <p class="card-categories">${r.category}</p>
        <div class="card-meta"><span>⏱️ ${r.deliveryTime}</span><span>🛵 Free delivery available</span></div>
        <button type="button" class="view-menu-btn" onclick="event.stopPropagation(); viewMenu('${r.id}');">View Menu ➔</button>
      </div>`;
    grid.appendChild(card);
  });
}

window.viewMenu = function (restaurantId) {
  const restaurant = RESTAURANTS.find((r) => r.id === restaurantId);
  if (!restaurant) return;
  currentRestaurantId = restaurantId;

  document.getElementById("restaurantsSection").style.display = "none";
  document.getElementById("searchResultsSection").style.display = "none";
  const menuSection = document.getElementById("menuViewSection");
  menuSection.style.display = "block";

  document.getElementById("menuTitle").textContent = `${restaurant.name} — Menu`;
  document.getElementById("menuTags").textContent = restaurant.category;
  document.getElementById("menuThumb").src = restaurant.image;

  const foodGrid = document.getElementById("menuFoodGrid");
  foodGrid.innerHTML = "";
  restaurant.foods.forEach((food, index) => {
    const el = document.createElement("div");
    el.className = "food-card";
    const badgeClass = food.veg ? "badge-veg" : "badge-nonveg";
    const badgeIcon = food.veg ? "🟢 VEG" : "🔴 NON-VEG";
    el.innerHTML = `
      <div class="food-img-wrap">
        <img src="${food.image}" alt="${food.name}" class="food-img" loading="lazy" />
        <div class="veg-nonveg-badge ${badgeClass}">${badgeIcon}</div>
      </div>
      <div class="food-info">
        <h4 class="food-name">${food.name}</h4>
        <p class="food-desc">${food.desc}</p>
        <div class="food-bottom">
          <span class="food-price">₹${food.price}</span>
          <button type="button" class="add-btn" id="btn-add-${restaurant.id}-${index}" onclick="addToCart('${restaurant.id}', ${index});">+ Add</button>
        </div>
      </div>`;
    foodGrid.appendChild(el);
  });
  menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

window.backToRestaurants = function () {
  document.getElementById("menuViewSection").style.display = "none";
  document.getElementById("searchResultsSection").style.display = "none";
  document.getElementById("restaurantsSection").style.display = "block";
  document.getElementById("restaurantsSection").scrollIntoView({ behavior: "smooth", block: "start" });
};

window.showAllRestaurants = function () {
  clearSearch();
  backToRestaurants();
};

/* ===== 5. CART ===== */
window.addToCart = function (restaurantId, foodIndex) {
  const restaurant = RESTAURANTS.find((r) => r.id === restaurantId);
  if (!restaurant || !restaurant.foods[foodIndex]) return;
  const food = restaurant.foods[foodIndex];
  const itemId = `${restaurantId}-${foodIndex}`;
  const existing = cart.find((i) => i.id === itemId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: itemId, restaurantId, foodIndex, name: food.name, price: food.price, quantity: 1, image: food.image });
  updateCartBadge();
  renderCart();
  showToast(`✓ ${food.name} added to cart`);
  saveCartToStorage();
};

window.changeQuantity = function (itemId, delta) {
  const idx = cart.findIndex((i) => i.id === itemId);
  if (idx === -1) return;
  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) {
    const n = cart[idx].name;
    cart.splice(idx, 1);
    showToast(`Removed ${n} from cart`);
  }
  updateCartBadge(); renderCart(); saveCartToStorage();
};

window.removeFromCart = function (itemId) {
  const idx = cart.findIndex((i) => i.id === itemId);
  if (idx === -1) return;
  const n = cart[idx].name;
  cart.splice(idx, 1);
  updateCartBadge(); renderCart(); saveCartToStorage();
  showToast(`Removed ${n}`);
};

window.clearEntireCart = function () {
  if (cart.length === 0) return;
  cart = [];
  updateCartBadge(); renderCart(); saveCartToStorage();
  showToast("Cart has been cleared");
};

function updateCartBadge() {
  const badge = document.getElementById("cartBadgeCount");
  if (badge) badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
}

function renderCart() {
  const container = document.getElementById("cartContentArea");
  const clearBtn = document.getElementById("clearCartBtn");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p style="font-size:.9rem;margin-top:.3rem;">Explore our delicious Chennai restaurants and add items!</p>
      </div>`;
    if (clearBtn) clearBtn.style.display = "none";
    ["summarySubtotal", "summaryDelivery", "summaryTax", "summaryGrandTotal"].forEach((id) => (document.getElementById(id).textContent = "₹0"));
    return;
  }

  if (clearBtn) clearBtn.style.display = "inline-flex";
  let html = '<div class="cart-items-list">';
  let subtotal = 0;
  cart.forEach((item) => {
    const sub = item.price * item.quantity;
    subtotal += sub;
    html += `
      <div class="cart-item-row">
        <div class="cart-item-left">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-unit-price">₹${item.price} each</div>
          </div>
        </div>
        <div class="qty-control">
          <button type="button" class="qty-btn" onclick="changeQuantity('${item.id}', -1);" title="Decrease quantity">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="changeQuantity('${item.id}', 1);" title="Increase quantity">+</button>
        </div>
        <div class="cart-item-subtotal">₹${sub}</div>
        <button type="button" class="cart-remove-btn" onclick="removeFromCart('${item.id}');" title="Remove item">✕</button>
      </div>`;
  });
  html += "</div>";
  container.innerHTML = html;

  const deliveryFee = subtotal > 400 ? 0 : 40;
  const taxes = Math.round(subtotal * 0.05);
  document.getElementById("summarySubtotal").textContent = `₹${subtotal}`;
  document.getElementById("summaryDelivery").textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
  document.getElementById("summaryTax").textContent = `₹${taxes}`;
  document.getElementById("summaryGrandTotal").textContent = `₹${subtotal + deliveryFee + taxes}`;
}

function scrollToCart() {
  const el = document.getElementById("cartSection");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveCartToStorage() {
  try { localStorage.setItem("chennai_eats_cart", JSON.stringify(cart)); } catch (e) { console.log("LocalStorage unavailable:", e); }
}
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("chennai_eats_cart");
    if (saved) { cart = JSON.parse(saved); updateCartBadge(); }
  } catch (e) { cart = []; }
}

/* ===== 6. SEARCH & FILTER ===== */
function handleLiveSearch(query) {
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.style.display = query.trim().length > 0 ? "inline-block" : "none";
  if (query.trim().length === 0) clearSearch();
}

window.triggerSearch = function () {
  const input = document.getElementById("searchInput");
  if (!input) return;
  const query = input.value.trim().toLowerCase();
  if (!query) { clearSearch(); return; }

  const matchedFoods = [];
  RESTAURANTS.forEach((r) => {
    const rName = r.name.toLowerCase().includes(query);
    const rCat = r.category.toLowerCase().includes(query);
    r.foods.forEach((food, fIndex) => {
      if (food.name.toLowerCase().includes(query) || food.desc.toLowerCase().includes(query) || rName || rCat) {
        matchedFoods.push({ food, restaurantId: r.id, restaurantName: r.name, foodIndex: fIndex });
      }
    });
  });

  const searchSection = document.getElementById("searchResultsSection");
  const searchGrid = document.getElementById("searchFoodGrid");
  document.getElementById("restaurantsSection").style.display = "none";
  document.getElementById("menuViewSection").style.display = "none";
  searchSection.style.display = "block";
  document.getElementById("searchResultHeading").textContent = `Results for "${input.value.trim()}"`;
  document.getElementById("searchResultSubheading").textContent = `Found ${matchedFoods.length} delicious item(s)`;
  searchGrid.innerHTML = "";

  if (matchedFoods.length === 0) {
    searchGrid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">
        <div style="font-size:3rem;margin-bottom:.5rem;">🔍</div>
        <h3>No matching food or restaurants found</h3>
        <p style="margin-top:.3rem;">Try searching for "Biryani", "Burger", "Dosa", or "Marina Grill".</p>
      </div>`;
  } else {
    matchedFoods.forEach((item) => {
      const el = document.createElement("div");
      el.className = "food-card";
      const badgeClass = item.food.veg ? "badge-veg" : "badge-nonveg";
      const badgeIcon = item.food.veg ? "🟢 VEG" : "🔴 NON-VEG";
      el.innerHTML = `
        <div class="food-img-wrap">
          <img src="${item.food.image}" alt="${item.food.name}" class="food-img" loading="lazy" />
          <div class="veg-nonveg-badge ${badgeClass}">${badgeIcon}</div>
        </div>
        <div class="food-info">
          <div style="font-size:.75rem;color:var(--primary);font-weight:700;text-transform:uppercase;">${item.restaurantName}</div>
          <h4 class="food-name">${item.food.name}</h4>
          <p class="food-desc">${item.food.desc}</p>
          <div class="food-bottom">
            <span class="food-price">₹${item.food.price}</span>
            <button type="button" class="add-btn" onclick="addToCart('${item.restaurantId}', ${item.foodIndex});">+ Add</button>
          </div>
        </div>`;
      searchGrid.appendChild(el);
    });
  }
  searchSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

window.clearSearch = function () {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  document.getElementById("searchResultsSection").style.display = "none";
  if (!currentRestaurantId || document.getElementById("menuViewSection").style.display !== "block") {
    document.getElementById("restaurantsSection").style.display = "block";
  }
};

window.filterByCategory = function (categoryName) {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.textContent.includes(categoryName));
  });
  backToRestaurants();
  if (categoryName === "All") { renderRestaurants(RESTAURANTS); return; }
  renderRestaurants(RESTAURANTS.filter((r) => r.category.toLowerCase().includes(categoryName.toLowerCase())));
};

/* ===== 7. ORDER MODAL ===== */
window.placeOrder = function () {
  if (cart.length === 0) {
    showToast("⚠️ Cart is empty. Please add items before placing order!");
    return;
  }
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = subtotal > 400 ? 0 : 40;
  const grandTotal = subtotal + deliveryFee + Math.round(subtotal * 0.05);

  document.getElementById("modalOrderId").textContent = `#CHE-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("modalOrderTotal").textContent = `₹${grandTotal}`;
  document.getElementById("modalOrderAddress").textContent = selectedLocation.address;
  document.getElementById("orderModal").classList.add("open");
};

window.closeOrderModal = function () {
  document.getElementById("orderModal").classList.remove("open");
  clearEntireCart();
};

window.trackOrderFromModal = function () {
  closeOrderModal();
  const el = document.getElementById("location-tracker");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  startDemoDeliveryPartnerTracking();
};

/* ===== 8. LEAFLET + OPENSTREETMAP + GPS ===== */
function initLeafletMap() {
  try {
    if (!document.getElementById("map")) return;
    map = L.map("map").setView([DEFAULT_COORDS.lat, DEFAULT_COORDS.lng], 13);
    // ---- Keyless tile sources (no API key needed) ----
    const TILE_SOURCES = {
      "Street (Esri)": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19, attribution: "Tiles © Esri — Source: Esri, HERE, Garmin, OpenStreetMap contributors"
      }),
      "Satellite (Esri)": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19, attribution: "Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics"
      }),
      "Topographic (Esri)": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19, attribution: "Tiles © Esri — Source: Esri, HERE, Garmin, USGS"
      }),
      "OpenStreetMap (localhost only)": L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, attribution: "© OpenStreetMap contributors"
      })
    };

    const fallbackOrder = ["Street (Esri)", "Topographic (Esri)", "OpenStreetMap (localhost only)"];
    let activeIndex = 0, tileErrors = 0;
    let activeLayer = TILE_SOURCES[fallbackOrder[0]].addTo(map);

    // Auto-switch to the next source if many tiles fail to load
    Object.values(TILE_SOURCES).forEach((layer) => {
      layer.on("tileerror", () => {
        if (map.hasLayer(layer) === false || layer !== activeLayer) return;
        tileErrors++;
        if (tileErrors >= 4 && activeIndex < fallbackOrder.length - 1) {
          tileErrors = 0;
          map.removeLayer(activeLayer);
          activeIndex++;
          activeLayer = TILE_SOURCES[fallbackOrder[activeIndex]].addTo(map);
          showToast(`ℹ️ Map tiles failed. Switched to ${fallbackOrder[activeIndex]}`, 4000);
        }
      });
    });

    const layerControl = L.control.layers(TILE_SOURCES, null, { position: "topright" }).addTo(map);
    map.on("baselayerchange", (e) => { activeLayer = e.layer; tileErrors = 0; });

    // Fix grey/partial map when layout changes
    window.addEventListener("load", () => map.invalidateSize());
    window.addEventListener("resize", () => map.invalidateSize());
    setTimeout(() => map.invalidateSize(), 400);

    const userIcon = L.divIcon({
      className: "custom-leaflet-user-icon",
      html: `<div style="background:#ff6a00;color:#fff;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 0 15px rgba(255,106,0,0.8);border:2px solid #fff;font-size:18px;">📍</div>`,
      iconSize: [34, 34], iconAnchor: [17, 34]
    });

    userMarker = L.marker([DEFAULT_COORDS.lat, DEFAULT_COORDS.lng], { icon: userIcon })
      .addTo(map).bindPopup("<b>Delivery Destination</b><br>Chennai Central").openPopup();

    map.on("click", (e) => {
      if (isManualMode) handleManualMapClick(e.latlng.lat, e.latlng.lng);
    });
  } catch (err) {
    console.error("Leaflet initialization error:", err);
  }
}

/* ---- GPS helpers ---- */
function setGpsStatus(text) {
  document.getElementById("displayAccuracy").textContent = text;
}

function geoSupportCheck() {
  if (!navigator.geolocation) {
    showToast("❌ Geolocation is not supported by your browser", 4000);
    return false;
  }
  if (!window.isSecureContext) {
    showToast("⚠️ GPS needs HTTPS or localhost. Run with VS Code Live Server instead of opening the file directly.", 6000);
    setGpsStatus("Needs HTTPS / localhost");
    return false;
  }
  return true;
}

function handleGeoError(err) {
  const msgs = {
    1: "🚫 Location is blocked. Click the 🔒 icon in the address bar → Site settings → Location → Allow, then reload.",
    2: "⚠️ Position unavailable. Check your device GPS / internet connection.",
    3: "⏱️ Location request timed out. Please try again."
  };
  showToast(msgs[err.code] || "⚠️ Could not get your location", 6000);
  setGpsStatus(err.code === 1 ? "Blocked by browser" : "GPS unavailable");
}

async function watchGeoPermission() {
  if (!navigator.permissions) return;
  try {
    const perm = await navigator.permissions.query({ name: "geolocation" });
    const apply = () => {
      if (perm.state === "denied") setGpsStatus("Blocked – enable in site settings");
    };
    apply();
    perm.onchange = apply;
  } catch (e) { /* unsupported, ignore */ }
}

function getPosition(opts) {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, opts));
}

/* 📍 My Location */
window.locateUser = async function () {
  if (!geoSupportCheck()) return;
  showToast("🔍 Fetching your GPS location...");
  try {
    let pos;
    try {
      pos = await getPosition({ enableHighAccuracy: true, timeout: 8000, maximumAge: 0 });
    } catch (e) {
      if (e.code === 1) throw e; // blocked: don't retry
      pos = await getPosition({ enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 });
    }
    const { latitude: lat, longitude: lng, accuracy } = pos.coords;
    updateLocationState(lat, lng, `Accurate within ~${Math.round(accuracy)}m`);
    reverseGeocodeOSM(lat, lng);
    showToast("📍 Location detected successfully!");
  } catch (err) {
    handleGeoError(err); // keeps the current location instead of resetting
  }
};

/* 🔴 Start Live Location */
window.startLiveLocation = function () {
  if (!geoSupportCheck()) return;
  if (liveWatchId !== null) {
    showToast("ℹ️ Live location is already active");
    return;
  }
  document.getElementById("btnStartLive").classList.add("btn-active");
  showToast("🔴 Live GPS tracking started");

  let firstFix = true;
  liveWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude: lat, longitude: lng, accuracy } = pos.coords;
      updateLocationState(lat, lng, `Live GPS (±${Math.round(accuracy)}m)`, firstFix);
      firstFix = false;
      const now = Date.now();
      if (now - lastGeocodeTime > 8000) { // throttle Nominatim
        lastGeocodeTime = now;
        reverseGeocodeOSM(lat, lng);
      }
    },
    (err) => {
      handleGeoError(err);
      stopLiveLocation();
    },
    { enableHighAccuracy: true, maximumAge: 2000, timeout: 15000 }
  );
};

/* ⏹ Stop Live Location */
window.stopLiveLocation = function () {
  if (liveWatchId !== null) {
    navigator.geolocation.clearWatch(liveWatchId);
    liveWatchId = null;
    document.getElementById("btnStartLive").classList.remove("btn-active");
    showToast("⏹ Live GPS tracking stopped");
  }
};

/* ✋ Manual Location */
window.toggleManualLocation = function () {
  isManualMode = !isManualMode;
  const btn = document.getElementById("btnManualLocation");
  const mapEl = document.getElementById("map");
  if (isManualMode) {
    btn.classList.add("btn-active");
    mapEl.classList.add("map-crosshair");
    showToast("✋ Click anywhere on the map to set delivery location");
  } else {
    btn.classList.remove("btn-active");
    mapEl.classList.remove("map-crosshair");
  }
};

function handleManualMapClick(lat, lng) {
  updateLocationState(lat, lng, "Manual Pin Drop");
  reverseGeocodeOSM(lat, lng);
  showToast("📍 Manual delivery location set!");
}

/* 🗺️ Reset to Chennai */
window.resetToChennai = function () {
  stopLiveLocation();
  if (isManualMode) toggleManualLocation();
  updateLocationState(DEFAULT_COORDS.lat, DEFAULT_COORDS.lng, "Chennai Default");
  document.getElementById("displayAddress").textContent = "Chennai Central, Tamil Nadu, India";
  selectedLocation.address = "Chennai Central, Tamil Nadu, India";
  showToast("🗺️ Map centered to Chennai");
};

function updateLocationState(lat, lng, accuracyText, recenter = true) {
  selectedLocation.lat = lat;
  selectedLocation.lng = lng;
  selectedLocation.accuracy = accuracyText;

  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  document.getElementById("displayCoords").textContent = `${Math.abs(lat).toFixed(4)}° ${ns}, ${Math.abs(lng).toFixed(4)}° ${ew}`;
  setGpsStatus(accuracyText);

  if (map && userMarker) {
    userMarker.setLatLng([lat, lng]);
    if (recenter) map.setView([lat, lng], 15);
  }
}

async function reverseGeocodeOSM(lat, lng) {
  if (!USE_ADDRESS_LOOKUP) {
    const t = `Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    selectedLocation.address = t;
    document.getElementById("displayAddress").textContent = t;
    return;
  }
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
    if (!res.ok) throw new Error("Reverse geocode failed");
    const data = await res.json();
    const address = data.display_name || `Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
    selectedLocation.address = address;
    document.getElementById("displayAddress").textContent = address;
    if (userMarker) userMarker.bindPopup(`<b>Selected Delivery Location</b><br>${address}`).openPopup();
  } catch (e) {
    const fallback = `Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    selectedLocation.address = fallback;
    document.getElementById("displayAddress").textContent = fallback;
  }
}

window.searchAddressOSM = async function () {
  const input = document.getElementById("mapAddressInput");
  if (!input || !input.value.trim()) { showToast("Please enter a location to search"); return; }
  const query = input.value.trim();
  showToast(`🔍 Searching "${query}" on OpenStreetMap...`);
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", Chennai")}`);
    const results = await res.json();
    if (results && results.length > 0) {
      const first = results[0];
      updateLocationState(parseFloat(first.lat), parseFloat(first.lon), "OSM Search Match");
      selectedLocation.address = first.display_name;
      document.getElementById("displayAddress").textContent = first.display_name;
      if (userMarker) userMarker.bindPopup(`<b>${first.display_name}</b>`).openPopup();
      showToast("✓ Location found and pinned!");
    } else {
      showToast("❌ No matching location found in Chennai");
    }
  } catch (err) {
    console.error("OSM Search error:", err);
    showToast("⚠️ Search network error, please try again");
  }
};

/* ===== 9. DEMO DELIVERY TRACKING ===== */
window.startDemoDeliveryPartnerTracking = function () {
  if (!map) return;
  if (deliveryInterval) clearInterval(deliveryInterval);

  const statusPill = document.getElementById("deliveryStatusPill");
  const statusText = document.getElementById("deliveryPartnerStatusText");
  statusPill.textContent = "🛵 Rider Dispatched (En Route)";
  statusPill.style.color = "#ff6a00";
  statusPill.style.background = "rgba(255,106,0,0.15)";
  statusPill.style.borderColor = "rgba(255,106,0,0.35)";

  const startLat = selectedLocation.lat - 0.025;
  const startLng = selectedLocation.lng - 0.025;

  const scooterIcon = L.divIcon({
    className: "delivery-scooter-icon",
    html: `<div style="background:#10b981;color:#fff;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 0 16px rgba(16,185,129,0.8);border:2px solid #fff;font-size:20px;">🛵</div>`,
    iconSize: [38, 38], iconAnchor: [19, 19]
  });

  if (deliveryMarker) map.removeLayer(deliveryMarker);
  deliveryMarker = L.marker([startLat, startLng], { icon: scooterIcon }).addTo(map);
  deliveryMarker.bindPopup("<b>🛵 Delivery Partner: Rajan K.</b><br>Speed: 32 km/h • Bringing hot food!").openPopup();

  let step = 0;
  const totalSteps = 40;
  deliveryInterval = setInterval(() => {
    step++;
    const f = step / totalSteps;
    deliveryMarker.setLatLng([startLat + (selectedLocation.lat - startLat) * f, startLng + (selectedLocation.lng - startLng) * f]);

    if (step % 10 === 0) {
      statusText.textContent = `🛵 Rider Rajan is approaching your location (${Math.round(f * 100)}% completed)...`;
    }
    if (step >= totalSteps) {
      clearInterval(deliveryInterval);
      deliveryInterval = null;
      statusPill.textContent = "🎉 Food Delivered!";
      statusPill.style.color = "#10b981";
      statusPill.style.background = "rgba(16,185,129,0.15)";
      statusPill.style.borderColor = "rgba(16,185,129,0.35)";
      statusText.textContent = "✅ Delivery partner has arrived at your location with your food!";
      deliveryMarker.bindPopup("<b>✅ Order Delivered!</b><br>Enjoy your authentic Chennai meal!").openPopup();
      showToast("🛵 Ding Dong! Your food has arrived!");
    }
  }, 700);

  showToast("🛵 Live simulation: Delivery partner dispatched!");
};

/* ===== 10. TOAST ===== */
function showToast(message, duration = 2500) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast-fade-out");
    setTimeout(() => toast.parentNode && toast.parentNode.removeChild(toast), 300);
  }, duration);
}
