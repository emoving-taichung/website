document.addEventListener("DOMContentLoaded", function () {
    const storesData = window.STORES_DATA || [];
  
    let selectedModel = "ALL";
    let selectedCity = "";
    let selectedDistrict = "ALL";
  
    const modelBtns = document.querySelectorAll(".model-btn");
    const citySelect = document.getElementById("city-select");
    const districtContainer = document.getElementById("district-buttons");
    const dealerGrid = document.getElementById("dealer-grid");
    const resultTitle = document.getElementById("result-title");
    const resultCount = document.getElementById("result-count");
  
    // 初始化縣市下拉清單
    function initCityOptions() {
      const cities = [...new Set(storesData.map(d => d.city))].filter(Boolean);
      if (cities.length === 0) {
        citySelect.innerHTML = `<option value="">無據點資料</option>`;
        renderDealers();
        return;
      }
      citySelect.innerHTML = cities.map(c => `<option value="${c}">${c}</option>`).join("");
      selectedCity = cities[0];
      renderDistricts();
    }
  
    // 渲染行政區按鈕
    function renderDistricts() {
      const availableDealers = storesData.filter(d => {
        const matchCity = d.city === selectedCity;
        const matchModel = selectedModel === "ALL" || (d.models && d.models.includes(selectedModel));
        return matchCity && matchModel;
      });
  
      const districts = [...new Set(availableDealers.map(d => d.district))].filter(Boolean);
  
      let html = `
        <button type="button" data-district="ALL" class="district-btn ${selectedDistrict === 'ALL' ? 'bg-blue-600 text-white font-bold' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'} px-3 py-1.5 rounded-lg text-sm transition-all">
          全部${selectedCity}
        </button>
      `;
  
      districts.forEach(dist => {
        const activeClass = selectedDistrict === dist 
          ? 'bg-blue-600 text-white font-bold' 
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100';
        html += `
          <button type="button" data-district="${dist}" class="district-btn ${activeClass} px-3 py-1.5 rounded-lg text-sm transition-all">
            ${dist}
          </button>
        `;
      });
  
      if (districts.length === 0) {
        html = `<span class="text-sm text-gray-400 italic py-1">此區域目前無對應車款據點</span>`;
      }
  
      districtContainer.innerHTML = html;
  
      // 綁定行政區點擊
      document.querySelectorAll(".district-btn").forEach(btn => {
        btn.addEventListener("click", function () {
          selectedDistrict = this.dataset.district;
          renderDistricts();
          renderDealers();
  
          // 平滑微捲動至結果標題
          const targetWrapper = document.getElementById("dealer-results-wrapper");
          if (targetWrapper) {
            targetWrapper.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
  
      renderDealers();
    }
  
    // 渲染據點卡片
    function renderDealers() {
      const filtered = storesData.filter(d => {
        const matchModel = selectedModel === "ALL" || (d.models && d.models.includes(selectedModel));
        const matchCity = d.city === selectedCity;
        const matchDistrict = selectedDistrict === "ALL" || d.district === selectedDistrict;
        return matchModel && matchCity && matchDistrict;
      });
  
      resultTitle.innerText = `${selectedCity}${selectedDistrict === 'ALL' ? '' : selectedDistrict} - 據點資訊`;
      resultCount.innerText = `共 ${filtered.length} 家據點`;
  
      if (filtered.length === 0) {
        dealerGrid.innerHTML = `
          <div class="col-span-full py-12 text-center bg-gray-50 border border-dashed border-gray-300 rounded-2xl">
            <p class="text-gray-500 font-medium">該區域暫無符合條件的據點。</p>
            <p class="text-xs text-gray-400 mt-1">建議點選「全部${selectedCity}」查看鄰近行政區據點。</p>
          </div>
        `;
        return;
      }
  
      dealerGrid.innerHTML = filtered.map(d => `
        <div class="bg-white border border-gray-200 hover:border-blue-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex justify-between items-start gap-2">
              <h3 class="text-lg font-black text-gray-900">${d.title}</h3>
              <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-md shrink-0">${d.district}</span>
            </div>
  
            <div class="space-y-1.5 text-sm text-gray-600">
              <p class="flex items-start gap-2">
                <span class="shrink-0">📍</span>
                <span>${d.address}</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="shrink-0">📞</span>
                <a href="tel:${d.phone}" class="text-blue-600 font-bold hover:underline">${d.phone}</a>
              </p>
              <p class="flex items-center gap-2">
                <span class="shrink-0">🕒</span>
                <span>${d.hours}</span>
              </p>
            </div>
          </div>
  
          <div class="mt-5 pt-3 border-t border-gray-100 flex gap-2">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.title + ' ' + d.address)}" target="_blank" rel="noopener noreferrer" class="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-bold text-center py-2.5 rounded-xl text-xs md:text-sm transition-colors">
              開啟 Google 地圖導航 ➔
            </a>
          </div>
        </div>
      `).join("");
    }
  
    // 車款按鈕點擊事件
    modelBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        modelBtns.forEach(b => {
          b.classList.remove("active", "border-blue-600", "bg-blue-50", "text-blue-700");
          b.classList.add("border-gray-200", "bg-white", "text-gray-700");
        });
        this.classList.add("active", "border-blue-600", "bg-blue-50", "text-blue-700");
        this.classList.remove("border-gray-200", "bg-white", "text-gray-700");
  
        selectedModel = this.dataset.model;
        selectedDistrict = "ALL";
        renderDistricts();
      });
    });
  
    // 縣市切換事件
    citySelect.addEventListener("change", function () {
      selectedCity = this.value;
      selectedDistrict = "ALL";
      renderDistricts();
    });
  
    initCityOptions();
  });