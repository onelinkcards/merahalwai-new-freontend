const vendors = [
  {
    id: "rajputana-grand",
    name: "Rajputana Grand Caterers",
    type: "Wedding Catering",
    venueType: "Caterer",
    city: "Jaipur",
    area: "C-Scheme",
    rating: 4.8,
    reviews: 211,
    diet: "Non-Veg",
    minGuests: 100,
    maxGuests: 2500,
    price: 560,
    packages: 3,
    cuisines: ["North Indian", "Mughlai", "Live Grill"],
    tags: ["Royal Setup", "Destination Events", "Premium Service"],
    description:
      "High-volume wedding catering with polished buffet lines, stage-side service, and elaborate royal menus.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=320&q=80"
    ],
    packagesList: [
      { name: "Royal Wedding", detail: "36-dish spread with live tandoor, mocktails, and dessert carts." },
      { name: "Destination Feast", detail: "Travel-ready setup crew with premium station styling." },
      { name: "Family Reception", detail: "Compact premium menu for efficient large-guest service." }
    ]
  },
  {
    id: "masala-gully",
    name: "New Masala Gully",
    type: "Wedding Catering",
    venueType: "Caterer",
    city: "Jaipur",
    area: "Vaishali Nagar",
    rating: 4.5,
    reviews: 143,
    diet: "Non-Veg",
    minGuests: 80,
    maxGuests: 1200,
    price: 420,
    packages: 3,
    cuisines: ["North Indian", "Live Grill", "Street Food"],
    tags: ["Theme Catering", "Live Grill", "Premium Service"],
    description:
      "Modern event catering with smoky live counters, quick setup teams, and crowd-friendly party menus.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=320&q=80"
    ],
    packagesList: [
      { name: "Theme Catering", detail: "Bold live stations and crowd-led layouts for weddings and after-parties." },
      { name: "Grill Night", detail: "Skewer bars, kebab lines, and premium snack service." },
      { name: "Premium Social", detail: "Upgraded service crew with plated dessert add-ons." }
    ]
  },
  {
    id: "keemti-gupta",
    name: "Keemti Gupta Halwai",
    type: "Wedding Catering",
    venueType: "Caterer",
    city: "Jaipur",
    area: "Mansarovar",
    rating: 4.2,
    reviews: 89,
    diet: "Pure Veg",
    minGuests: 50,
    maxGuests: 2000,
    price: 300,
    packages: 3,
    cuisines: ["Rajasthani", "North Indian", "Traditional Sweets"],
    tags: ["Live Counter", "Royal Setup", "Traditional Sweets"],
    description:
      "Trusted halwai-led service for vegetarian weddings, poojas, and big family gatherings with traditional dessert strength.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=320&q=80"
    ],
    packagesList: [
      { name: "Pure Veg Wedding", detail: "Classic shahi menu with sweet counter and live breads." },
      { name: "Pooja Bhoj", detail: "Sattvik-friendly service for traditional family rituals." },
      { name: "Sweet Legacy", detail: "Dessert-heavy menu for festive ceremonies and receptions." }
    ]
  },
  {
    id: "shree-sai",
    name: "Shree Sai Fast Food",
    type: "Corporate Events",
    venueType: "Caterer",
    city: "Jaipur",
    area: "Malviya Nagar",
    rating: 4.1,
    reviews: 64,
    diet: "Pure Veg",
    minGuests: 25,
    maxGuests: 700,
    price: 260,
    packages: 3,
    cuisines: ["Chaat & Snacks", "North Indian", "Quick Service"],
    tags: ["Quick Service", "Budget Friendly", "Snack Counters"],
    description:
      "Fast-moving snack and office-event catering that lands well for casual parties, launches, and daytime gatherings.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=320&q=80"
    ],
    packagesList: [
      { name: "Snack Counter", detail: "Chaat, sliders, and quick-serve trays for office and birthday events." },
      { name: "Budget Buffet", detail: "Reliable group catering with fast refill and setup discipline." },
      { name: "Launch Day", detail: "Compact event menu for brand activations and casual celebrations." }
    ]
  },
  {
    id: "amber-palace",
    name: "Amber Palace Banquets",
    type: "Banquet Hall",
    venueType: "Banquet Hall",
    city: "Jaipur",
    area: "Tonk Road",
    rating: 4.7,
    reviews: 126,
    diet: "Pure Veg",
    minGuests: 150,
    maxGuests: 900,
    price: 1850,
    packages: 4,
    cuisines: ["North Indian", "Rajasthani", "Continental"],
    tags: ["Grand Hall", "Stage Decor Ready", "Valet Service"],
    description:
      "An indoor banquet with warm royal detailing, decor-friendly stage layout, and integrated hospitality teams.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80"
    ],
    packagesList: [
      { name: "Grand Ballroom", detail: "Elegant hall layout with foyer access and premium guest flow." },
      { name: "Reception Night", detail: "Stage lighting readiness with plated dessert service." },
      { name: "Family Celebration", detail: "Comfort-focused indoor function package with in-house operations." }
    ]
  },
  {
    id: "gulmohar-courtyard",
    name: "Gulmohar Courtyard",
    type: "Venue + Catering",
    venueType: "Venue + Catering",
    city: "Jaipur",
    area: "Jagatpura",
    rating: 4.9,
    reviews: 178,
    diet: "Non-Veg",
    minGuests: 200,
    maxGuests: 1200,
    price: 2200,
    packages: 4,
    cuisines: ["Continental", "North Indian", "Live Grill"],
    tags: ["Garden Venue", "Cocktail Ready", "Venue + Catering"],
    description:
      "A premium lawn-and-banquet concept combining atmosphere, larger guest flow, and one-contract venue plus catering execution.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=320&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=320&q=80"
    ],
    packagesList: [
      { name: "Cocktail Courtyard", detail: "Outdoor setup with live grill, bar-ready zones, and lounge pockets." },
      { name: "Wedding Day", detail: "Venue and catering in one premium booking stack." },
      { name: "Luxury Reception", detail: "High-capacity layout with premium service sequencing." }
    ]
  }
];

const guestRanges = {
  under50: { min: 0, max: 49, label: "< 50" },
  "50-100": { min: 50, max: 100, label: "50-100" },
  "100-200": { min: 100, max: 200, label: "100-200" },
  "200-500": { min: 200, max: 500, label: "200-500" },
  "500-1000": { min: 500, max: 1000, label: "500-1000" },
  "1000+": { min: 1000, max: Infinity, label: "1000+" }
};

const budgetRanges = {
  under300: { min: 0, max: 299, label: "Under ₹300" },
  "300-500": { min: 300, max: 500, label: "₹300-₹500" },
  "500-800": { min: 500, max: 800, label: "₹500-₹800" },
  "800+": { min: 800, max: Infinity, label: "₹800+" }
};

const state = {
  eventType: "all",
  topGuests: 0,
  topCuisine: "all",
  search: "",
  minRating: 0,
  diet: "all",
  guestBucket: "all",
  budgetBucket: "all",
  selectedCuisines: new Set(),
  sort: "popular"
};

const elements = {
  eventSelect: document.querySelector("#event-select"),
  topGuestsSelect: document.querySelector("#top-guests-select"),
  topCuisineSelect: document.querySelector("#top-cuisine-select"),
  topSearchInput: document.querySelector("#top-search-input"),
  applyTopSearch: document.querySelector("#apply-top-search"),
  sortSelect: document.querySelector("#sort-select"),
  sidebarCuisineList: document.querySelector("#sidebar-cuisine-list"),
  vendorList: document.querySelector("#vendor-list"),
  activeFilterRow: document.querySelector("#active-filter-row"),
  resultsKicker: document.querySelector("#results-kicker"),
  resultsHeading: document.querySelector("#results-heading"),
  resetFilters: document.querySelector("#reset-filters"),
  emptyState: document.querySelector("#empty-state"),
  emptyResetButton: document.querySelector("#empty-reset-button"),
  drawerBackdrop: document.querySelector("#drawer-backdrop"),
  profileDrawer: document.querySelector("#profile-drawer"),
  drawerContent: document.querySelector("#drawer-content"),
  drawerClose: document.querySelector("#drawer-close")
};

const cuisines = [...new Set(vendors.flatMap((vendor) => vendor.cuisines))].sort();

function populateCuisineOptions() {
  cuisines.forEach((cuisine) => {
    const topOption = document.createElement("option");
    topOption.value = cuisine;
    topOption.textContent = cuisine;
    elements.topCuisineSelect.append(topOption);
  });

  elements.sidebarCuisineList.innerHTML = cuisines
    .map(
      (cuisine) => `
        <button class="cuisine-chip" data-cuisine="${cuisine}" type="button">${cuisine}</button>
      `
    )
    .join("");
}

function setActiveButton(groupSelector, matchValue, attributeName) {
  document.querySelectorAll(groupSelector).forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attributeName] === matchValue);
  });
}

function syncControls() {
  elements.eventSelect.value = state.eventType;
  elements.topGuestsSelect.value = String(state.topGuests);
  elements.topCuisineSelect.value = state.topCuisine;
  elements.topSearchInput.value = state.search;
  elements.sortSelect.value = state.sort;

  setActiveButton("[data-rating]", String(state.minRating), "rating");
  setActiveButton("[data-diet]", state.diet, "diet");
  setActiveButton("[data-guests]", state.guestBucket, "guests");
  setActiveButton("[data-budget]", state.budgetBucket, "budget");

  document.querySelectorAll("[data-cuisine]").forEach((button) => {
    button.classList.toggle("is-active", state.selectedCuisines.has(button.dataset.cuisine));
  });
}

function matchesSearch(vendor) {
  if (!state.search.trim()) return true;

  const haystack = [
    vendor.name,
    vendor.type,
    vendor.venueType,
    vendor.city,
    vendor.area,
    vendor.description,
    ...vendor.tags,
    ...vendor.cuisines
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(state.search.trim().toLowerCase());
}

function guestBucketMatches(vendor) {
  if (state.guestBucket === "all") return true;
  const range = guestRanges[state.guestBucket];
  return vendor.maxGuests >= range.min && vendor.minGuests <= range.max;
}

function budgetBucketMatches(vendor) {
  if (state.budgetBucket === "all") return true;
  const range = budgetRanges[state.budgetBucket];
  return vendor.price >= range.min && vendor.price <= range.max;
}

function getFilteredVendors() {
  const filtered = vendors.filter((vendor) => {
    const matchesEvent =
      state.eventType === "all" ||
      vendor.type === state.eventType ||
      vendor.venueType === state.eventType;
    const matchesGuests = vendor.maxGuests >= state.topGuests;
    const matchesCuisine =
      state.topCuisine === "all" || vendor.cuisines.includes(state.topCuisine);
    const matchesRating = vendor.rating >= state.minRating;
    const matchesDiet = state.diet === "all" || vendor.diet === state.diet;
    const matchesSelectedCuisines =
      state.selectedCuisines.size === 0 ||
      [...state.selectedCuisines].every((cuisine) => vendor.cuisines.includes(cuisine));

    return (
      matchesEvent &&
      matchesGuests &&
      matchesCuisine &&
      matchesRating &&
      matchesDiet &&
      matchesSelectedCuisines &&
      guestBucketMatches(vendor) &&
      budgetBucketMatches(vendor) &&
      matchesSearch(vendor)
    );
  });

  return filtered.sort((a, b) => {
    if (state.sort === "rating") {
      return b.rating - a.rating || b.reviews - a.reviews;
    }
    if (state.sort === "priceLow") {
      return a.price - b.price || b.rating - a.rating;
    }
    if (state.sort === "capacity") {
      return b.maxGuests - a.maxGuests || b.rating - a.rating;
    }

    const scoreA =
      a.rating * 28 +
      a.reviews * 0.08 +
      (a.venueType === "Venue + Catering" ? 8 : 0) +
      (a.price < 600 ? 5 : 0);
    const scoreB =
      b.rating * 28 +
      b.reviews * 0.08 +
      (b.venueType === "Venue + Catering" ? 8 : 0) +
      (b.price < 600 ? 5 : 0);
    return scoreB - scoreA;
  });
}

function renderResultsHeader(filtered) {
  const descriptor =
    state.eventType === "all"
      ? "caterers and venues"
      : state.eventType === "Banquet Hall"
        ? "banquet halls"
        : state.eventType.toLowerCase();

  elements.resultsKicker.textContent = `Verified ${descriptor} in Jaipur`;
  elements.resultsHeading.innerHTML = `Showing <span class="accent-count">${filtered.length}</span> shortlisted ${descriptor} in Jaipur`;
}

function renderActiveFilters() {
  const pills = [];

  if (state.eventType !== "all") pills.push({ label: state.eventType, clear: () => (state.eventType = "all") });
  if (state.topGuests > 0)
    pills.push({ label: `${state.topGuests}+ guests`, clear: () => (state.topGuests = 0) });
  if (state.topCuisine !== "all")
    pills.push({ label: state.topCuisine, clear: () => (state.topCuisine = "all") });
  if (state.search) pills.push({ label: `Search: ${state.search}`, clear: () => (state.search = "") });
  if (state.minRating > 0)
    pills.push({ label: `${state.minRating}+ rating`, clear: () => (state.minRating = 0) });
  if (state.diet !== "all") pills.push({ label: state.diet, clear: () => (state.diet = "all") });
  if (state.guestBucket !== "all")
    pills.push({
      label: guestRanges[state.guestBucket].label,
      clear: () => (state.guestBucket = "all")
    });
  if (state.budgetBucket !== "all")
    pills.push({
      label: budgetRanges[state.budgetBucket].label,
      clear: () => (state.budgetBucket = "all")
    });
  state.selectedCuisines.forEach((cuisine) =>
    pills.push({
      label: cuisine,
      clear: () => state.selectedCuisines.delete(cuisine)
    })
  );

  elements.activeFilterRow.innerHTML = pills
    .map(
      (pill, index) => `
        <span class="active-filter">
          ${pill.label}
          <button type="button" data-pill-index="${index}" aria-label="Remove ${pill.label}">x</button>
        </span>
      `
    )
    .join("");

  document.querySelectorAll("[data-pill-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const pill = pills[Number(button.dataset.pillIndex)];
      if (!pill) return;
      pill.clear();
      syncControls();
      render();
    });
  });
}

function vendorCardMarkup(vendor) {
  const dietClass = vendor.diet === "Pure Veg" ? "veg" : "nonveg";

  return `
    <article class="vendor-card">
      <div class="vendor-media">
        <img src="${vendor.image}" alt="${vendor.name}" loading="lazy" />
        <div class="media-top">
          <span class="verify-badge">MH Verified</span>
          <span class="rating-badge">${vendor.rating.toFixed(1)}</span>
        </div>
        <div class="thumb-strip">
          ${vendor.gallery
            .slice(0, 2)
            .map((image) => `<img src="${image}" alt="" loading="lazy" />`)
            .join("")}
          <span class="thumb-more">+${Math.max(vendor.gallery.length - 2, 1)}</span>
        </div>
      </div>

      <div class="vendor-body">
        <div class="vendor-header">
          <div>
            <h3>${vendor.name}</h3>
            <p class="vendor-location">${vendor.area}, ${vendor.city}</p>
          </div>
          <div class="vendor-side-meta">
            <span class="status-badge ${dietClass}">${vendor.diet}</span>
            <span class="review-count">${vendor.reviews} reviews</span>
          </div>
        </div>

        <div class="vendor-chips">
          ${vendor.tags.map((tag) => `<span class="vendor-chip">${tag}</span>`).join("")}
        </div>

        <div class="vendor-submeta">
          <div class="guest-line">
            <span>${vendor.minGuests}-${vendor.maxGuests} guests</span>
            <small>${vendor.venueType}</small>
          </div>
          <span class="package-count">${vendor.packages} packages</span>
        </div>

        <div class="vendor-divider"></div>

        <div class="vendor-actions">
          <div class="vendor-price">
            <small>Starting at</small>
            <strong>₹${vendor.price} <small>/ plate</small></strong>
            <span class="diet-pill ${dietClass}">${vendor.diet}</span>
          </div>

          <div class="action-buttons">
            <button class="vendor-action secondary" type="button" data-profile="${vendor.id}">
              View Profile
            </button>
            <button class="vendor-action primary" type="button" data-book="${vendor.id}">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderVendors(filtered) {
  elements.vendorList.innerHTML = filtered.map((vendor) => vendorCardMarkup(vendor)).join("");
  elements.vendorList.classList.toggle("hidden", filtered.length === 0);
  elements.emptyState.classList.toggle("hidden", filtered.length > 0);

  document.querySelectorAll("[data-profile], [data-book]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.profile || button.dataset.book));
  });
}

function openDrawer(id) {
  const vendor = vendors.find((item) => item.id === id);
  if (!vendor) return;

  const dietClass = vendor.diet === "Pure Veg" ? "veg" : "nonveg";

  elements.drawerContent.innerHTML = `
    <div class="drawer-image">
      <img src="${vendor.image}" alt="${vendor.name}" />
    </div>

    <div class="drawer-topline">
      <div>
        <h2 class="drawer-title">${vendor.name}</h2>
        <p class="drawer-subtitle">${vendor.venueType} · ${vendor.area}, ${vendor.city}</p>
      </div>
      <span class="status-badge ${dietClass}">${vendor.diet}</span>
    </div>

    <section class="drawer-section">
      <p>${vendor.description}</p>
    </section>

    <section class="drawer-section">
      <span class="section-label">Highlights</span>
      <div class="drawer-feature-grid">
        ${vendor.tags.map((tag) => `<span class="drawer-feature">${tag}</span>`).join("")}
        ${vendor.cuisines.map((cuisine) => `<span class="drawer-feature">${cuisine}</span>`).join("")}
      </div>
    </section>

    <section class="drawer-section">
      <span class="section-label">Quick Facts</span>
      <div class="drawer-stats">
        <article class="drawer-stat">
          <span>Pricing</span>
          <strong>₹${vendor.price} / plate</strong>
        </article>
        <article class="drawer-stat">
          <span>Capacity</span>
          <strong>${vendor.minGuests}-${vendor.maxGuests} guests</strong>
        </article>
        <article class="drawer-stat">
          <span>Rating</span>
          <strong>${vendor.rating.toFixed(1)} / 5</strong>
        </article>
      </div>
    </section>

    <section class="drawer-section">
      <span class="section-label">Packages</span>
      <div class="drawer-package-list">
        ${vendor.packagesList
          .map(
            (pkg) => `
              <article class="drawer-package">
                <strong>${pkg.name}</strong>
                <span>${pkg.detail}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <div class="drawer-actions">
      <button class="primary-button" type="button">Request Callback</button>
      <button class="secondary-button" type="button">Save Shortlist</button>
    </div>
  `;

  elements.drawerBackdrop.classList.remove("hidden");
  elements.profileDrawer.classList.remove("hidden");
  elements.profileDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  elements.drawerBackdrop.classList.add("hidden");
  elements.profileDrawer.classList.add("hidden");
  elements.profileDrawer.setAttribute("aria-hidden", "true");
}

function resetFilters() {
  state.eventType = "all";
  state.topGuests = 0;
  state.topCuisine = "all";
  state.search = "";
  state.minRating = 0;
  state.diet = "all";
  state.guestBucket = "all";
  state.budgetBucket = "all";
  state.selectedCuisines = new Set();
  state.sort = "popular";
  syncControls();
  render();
}

function render() {
  const filtered = getFilteredVendors();
  renderResultsHeader(filtered);
  renderActiveFilters();
  renderVendors(filtered);
}

function bindEvents() {
  elements.applyTopSearch.addEventListener("click", () => {
    state.eventType = elements.eventSelect.value;
    state.topGuests = Number(elements.topGuestsSelect.value);
    state.topCuisine = elements.topCuisineSelect.value;
    state.search = elements.topSearchInput.value.trim();
    syncControls();
    render();
  });

  elements.topSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      elements.applyTopSearch.click();
    }
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });

  document.querySelectorAll("[data-rating]").forEach((button) => {
    button.addEventListener("click", () => {
      state.minRating = Number(button.dataset.rating);
      syncControls();
      render();
    });
  });

  document.querySelectorAll("[data-diet]").forEach((button) => {
    button.addEventListener("click", () => {
      state.diet = state.diet === button.dataset.diet ? "all" : button.dataset.diet;
      syncControls();
      render();
    });
  });

  document.querySelectorAll("[data-guests]").forEach((button) => {
    button.addEventListener("click", () => {
      state.guestBucket = state.guestBucket === button.dataset.guests ? "all" : button.dataset.guests;
      syncControls();
      render();
    });
  });

  document.querySelectorAll("[data-budget]").forEach((button) => {
    button.addEventListener("click", () => {
      state.budgetBucket = state.budgetBucket === button.dataset.budget ? "all" : button.dataset.budget;
      syncControls();
      render();
    });
  });

  elements.sidebarCuisineList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cuisine]");
    if (!button) return;

    const cuisine = button.dataset.cuisine;
    if (state.selectedCuisines.has(cuisine)) {
      state.selectedCuisines.delete(cuisine);
    } else {
      state.selectedCuisines.add(cuisine);
    }

    syncControls();
    render();
  });

  elements.resetFilters.addEventListener("click", resetFilters);
  elements.emptyResetButton.addEventListener("click", resetFilters);
  elements.drawerBackdrop.addEventListener("click", closeDrawer);
  elements.drawerClose.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
}

populateCuisineOptions();
syncControls();
bindEvents();
render();
