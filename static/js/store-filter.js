document.addEventListener("DOMContentLoaded", function () {
  const dataElem = document.getElementById("stores-data");
  if (!dataElem) return;

  let stores = [];
  try {
    stores = JSON.parse(dataElem.textContent);
  } catch (err) {
    console.error("無法解析據點 JSON 資料：", err);
    return;
  }

  const searchInput = document.getElementById("store-search");
  const cityFilter = document.getElementById("city-filter");
  const tagFilter = document.getElementById("tag-filter");
  const resetBtn = document.getElementById("reset-filter-btn");
  const grid = document.getElementById("store-list-grid");
  const countElem = document.getElementById("store-count");
  const noResultsElem = document.getElementById("no-results");

  // 建立選單選項（自動動態擷取所有據點的縣市與標籤）
  function initFilterOptions() {
    const cities = new Set();
    const tags = new Set();

    stores.forEach((store) => {
      if (store.city && store.city.trim() !== "") {
        cities.add(store.city.trim());
      }
      if (Array.isArray(store.tags)) {
        store.tags.forEach((tag) => {
          if (tag && tag.trim() !== "") tags.add(tag.trim());
        });
      }
    });

    if (cityFilter) {
      Array.from(cities)
        .sort()
        .forEach((city) => {
          const opt = document.createElement("option");
          opt.value = city;
          opt.textContent = city;
          cityFilter.appendChild(opt);
        });
    }

    if (tagFilter) {
      Array.from(tags)
        .sort()
        .forEach((tag) => {
          const opt = document.createElement("option");
          opt.value = tag;
          opt.textContent = tag;
          tagFilter.appendChild(opt);
        });
    }
  }

  // 渲染據點卡片 HTML
  function renderCardHTML(store) {
    const tagsHTML = Array.isArray(store.tags)
      ? store.tags
          .map(
            (tag) =>
              `<span class="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-semibold">${tag}</span>`
          )
          .join(" ")
      : "";

    const mapBtnHTML = store.map_url
      ? `<a href="${store.map_url}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl text-center transition-colors">地圖導航 ➔</a>`
      : "";

    const bookingBtnHTML = store.booking_url
      ? `<a href="${store.booking_url}" class="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl text-center transition-colors">線上預約 ➔</a>`
      : "";

    return `
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-xl font-bold text-gray-900 leading-snug">${store.title}</h3>
            ${
              store.city
                ? `<span class="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-md shrink-0">${store.city}</span>`
                : ""
            }
          </div>

          ${tagsHTML ? `<div class="flex flex-wrap gap-1.5 pt-1">${tagsHTML}</div>` : ""}

          <div class="space-y-1.5 text-sm text-gray-600 pt-2 font-light">
            ${
              store.address
                ? `<p class="flex items-start gap-2"><span class="shrink-0">📍</span><span>${store.address}</span></p>`
                : ""
            }
            ${
              store.phone
                ? `<p class="flex items-center gap-2"><span class="shrink-0">📞</span><a href="tel:${store.phone}" class="hover:text-blue-600 font-medium">${store.phone}</a></p>`
                : ""
            }
            ${
              store.hours
                ? `<p class="flex items-start gap-2"><span class="shrink-0">🕒</span><span>${store.hours}</span></p>`
                : ""
            }
          </div>
        </div>

        <div class="flex items-center gap-2 pt-6 mt-4 border-t border-gray-100">
          ${mapBtnHTML}
          ${bookingBtnHTML}
        </div>
      </div>
    `;
  }

  // 篩選核心邏輯
  function handleFilter() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const selectedCity = cityFilter ? cityFilter.value : "";
    const selectedTag = tagFilter ? tagFilter.value : "";

    const filtered = stores.filter((store) => {
      const matchQuery =
        !query ||
        (store.title && store.title.toLowerCase().includes(query)) ||
        (store.address && store.address.toLowerCase().includes(query)) ||
        (store.phone && store.phone.includes(query));

      const matchCity = !selectedCity || store.city === selectedCity;

      const matchTag =
        !selectedTag ||
        (Array.isArray(store.tags) && store.tags.includes(selectedTag));

      return matchQuery && matchCity && matchTag;
    });

    if (countElem) {
      countElem.textContent = `共找到 ${filtered.length} 個據點`;
    }

    if (grid) {
      grid.innerHTML = filtered.map(renderCardHTML).join("");
    }

    if (noResultsElem) {
      if (filtered.length === 0) {
        noResultsElem.classList.remove("hidden");
        if (grid) grid.classList.add("hidden");
      } else {
        noResultsElem.classList.add("hidden");
        if (grid) grid.classList.remove("hidden");
      }
    }
  }

  // 綁定事件監聽器
  if (searchInput) searchInput.addEventListener("input", handleFilter);
  if (cityFilter) cityFilter.addEventListener("change", handleFilter);
  if (tagFilter) tagFilter.addEventListener("change", handleFilter);

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (searchInput) searchInput.value = "";
      if (cityFilter) cityFilter.value = "";
      if (tagFilter) tagFilter.value = "";
      handleFilter();
    });
  }

  // 初始化流程
  initFilterOptions();
  handleFilter();
});