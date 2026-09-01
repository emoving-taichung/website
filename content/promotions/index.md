---
title: "本月獨家主打優惠"
type: "promotions"  # 👈 新增：指定類型為 promotions
layout: "single"    # 👈 新增：指定套用 single.html 版型
# 1. 雙版廣宣 Banner 圖檔設定 (請將圖檔放在同一資料夾下)
hero_image_desktop: "banner_desktop.png"  # 電腦裝置：橫式 Banner
hero_image_mobile: "banner_mobile.png"    # 手機裝置：直式 Banner

models:
  # ==========================================
  # 第一款車：EZ1
  # ==========================================

  - id: "ez1"
    enable: true   # 👈 設定為 true：正常顯示；設定為 false：隱藏該車款
    name: "EZ1 輕型電動機車"
    subtitle: "汽車駕照即可騎乘｜專為都會輕量通勤打造"
    cover_image: "ez1-cover.png"
    description: "EZ1 採用 Gogoro Network 智慧換電系統，全台數千座電池交換站一換就走！超輕量化車身搭配軟Q舒適座墊，前置雙杯架與 USB 充電孔。"
    # 本月優惠亮點（重點數字突顯強調）
    highlights:
      - '本月限定：送開學獎學金 <span class="highlight-num">$8,900</span> '
      - '分期購車享 <span class="highlight-num">12</span> 期 <span class="highlight-num">0</span> 利率'
    car_page_link: "models/ez1/"
    line_link: "https://lihi1.me/8LpPy?ref=line_join"
    store_cta_link: "pbgn-store/"  # 👈 新增：EZ1 專屬據點網址
    features:
      - image_desktop: "ez1-feat-1-pc.png"
        image_mobile: "ez1-feat-1-mb.png"
        title: "超大置物空間"
      - image_desktop: "ez1-feat-2-pc.png"
        image_mobile: "ez1-feat-2-mb.png"
        title: "前置雙杯架與 USB 充電孔"
      - image_desktop: "ez1-feat-2-pc.png"
        image_mobile: "ez1-feat-2-mb.png"
        title: "智慧感應卡解鎖"
    youtube_id: "X75kLrpiaM0"   # 如果沒有影片，這行可以移除或留空

  # ==========================================
  # 第二款車：EZR (新增車款)
  # ==========================================
  - id: "ezr"
    enable: false  # 👈 設定為 true：正常顯示；設定為 false：隱藏該車款
    name: "EZR 白牌旗艦電車"
    subtitle: "極速動力與舒適座艙的完美結合"
    cover_image: "ezr-cover.png"
    description: "EZR 搭載高功率馬達與重型機車級懸吊系統，提供極致的加速性與絕佳操控感。大容量行李箱空間與全彩 LCD 儀表，打造極致騎乘體驗。"
   # 本月優惠亮點（重點數字突顯強調）
    highlights:
      - '本月限定：加碼送 <span class="highlight-num">$5,000</span> 購車金'
      - '首年原廠月租資費優惠 <span class="highlight-num">$169/月</span> 起'
      - '分期購車享 <span class="highlight-num">24</span> 期 <span class="highlight-num">0</span> 利率'
    car_page_link: "models/ezr/"
    store_cta_link: "pbgn-store/"
    line_link: "https://lihi1.me/8LpPy?ref=line_join"
    features:
      - image_desktop: "ezr-feat-1-pc.png"
        image_mobile: "ezr-feat-1-mb.png"
        title: "高科技全彩 LCD 液晶儀表"
      - image_desktop: "ezr-feat-2-pc.png"
        image_mobile: "ezr-feat-2-mb.png"
        title: "CBS 重型機車級雙碟煞系統"
      - image_desktop: "ezr-feat-3-pc.png"
        image_mobile: "ezr-feat-3-mb.png"
        title: "人體工學跑車級舒適座墊"
    youtube_id: "JEKf9fqM2C0"

  # ==========================================
  # 第三款車：FUN 
  # ==========================================
  - id: "fun"
    enable: true # 👈 設定為 true：正常顯示；設定為 false：隱藏該車款
    name: "Fun 白牌優雅電車"
    subtitle: "日系工藝 × 科技換電｜靈巧舒適的都會純電首選"
    cover_image: "fun-cover.png"
    description: "由台鈴工業打造的 eReady Fun，結合日系造車工藝與 Gogoro Network 換電系統。擁有獨特俐落的外觀設計、輕量化靈巧車身，以及寬敞舒適的踏板空間，為您帶來流暢愜意的都會通勤體驗。"
    highlights:
      - '本月限定：送 <span class="highlight-num">$10,000</span> 購車金'
      - '分期購車享 <span class="highlight-num">24</span> 期 <span class="highlight-num">0</span> 利率'
    car_page_link: "models/fun/"
    store_cta_link: "pbgn-store/"
    line_link: "https://lihi1.me/8LpPy?ref=line_join"
    features:
      - image_desktop: "fun-feat-1-pc.png"
        image_mobile: "fun-feat-1-mb.png"
        title: "26.5L大容量置物箱"
      - image_desktop: "fun-feat-2-pc.png"
        image_mobile: "fun-feat-2-mb.png"
        title: "內嵌式雙前置物空間"
      - image_desktop: "fun-feat-3-pc.png"
        image_mobile: "fun-feat-3-mb.png"
        title: "低座高"
    youtube_id: "s_2gbzvvlzY"

  # ==========================================
  # 第四款車：勁炫 
  # ==========================================
  - id: "kg"
    enable: false # 👈 設定為 true：正常顯示；設定為 false：隱藏該車款
    name: "eMoving 勁炫 125"
    subtitle: "125 級距強勁動力｜極速爬坡與電動倒車大空間"
    cover_image: "kg-cover.png"
    description: "專為追求動力與長途通勤打造的白牌電動機車。具備相當於 125cc 燃油車的加速度與極速表現，搭配 Boost 瞬間加速模式，上坡超車輕鬆自如。兼具舒適大空間與實用科技，讓日常騎乘更聰明無負擔。"
    highlights:
      - '本月限定：加碼送 <span class="highlight-num">$5,000</span> 購車金'
      - '首年原廠月租資費優惠 <span class="highlight-num">$169/月</span> 起'
      - '分期購車享 <span class="highlight-num">24</span> 期 <span class="highlight-num">0</span> 利率'
    car_page_link: "models/kg/"
    line_link: "https://lihi1.me/8LpPy?ref=line_join"
    features:
      - image_desktop: "kg-feat-1-pc.png"
        image_mobile: "kg-feat-1-mb.png"
        title: "高科技全彩 LCD 液晶儀表"
      - image_desktop: "kg-feat-2-pc.png"
        image_mobile: "kg-feat-2-mb.png"
        title: "CBS 重型機車級雙碟煞系統"
      - image_desktop: "kg-feat-3-pc.png"
        image_mobile: "kg-feat-3-mb.png"
        title: "人體工學跑車級舒適座墊"
    youtube_id: "JEKf9fqM2C0"

  # ==========================================
  # 第五款車：微電 
  # ==========================================
  - id: "shine-bobe"
    enable: false # 👈 設定為 true：正常顯示；設定為 false：隱藏該車款
    name: "eMoving 微型電動車 (Bobe / Shine)"
    subtitle: "免駕照輕巧代步｜短程通勤與菜籃族最佳夥伴"
    cover_image: "em25-cover.png"
    description: "eMoving 微型電動二輪車系列專為短途代步與輕鬆騎乘設計。免考照即可騎乘，車身極致輕巧且座高親民，踩地極具安全感。搭配可抽拔充電的輕量化鋰電池，在家用 110V 插座即可輕鬆充電，是日常購物與接送的最實用代步工具。"
    highlights:
      - '本月限定：加碼送 <span class="highlight-num">$5,000</span> 購車金'
      - '首年原廠月租資費優惠 <span class="highlight-num">$169/月</span> 起'
      - '分期購車享 <span class="highlight-num">24</span> 期 <span class="highlight-num">0</span> 利率'
    car_page_link: "models/em25/"
    line_link: "https://lihi1.me/8LpPy?ref=line_join"
    features:
      - image_desktop: "em25-feat-1-pc.png"
        image_mobile: "em25-feat-1-mb.png"
        title: "高科技全彩 LCD 液晶儀表"
      - image_desktop: "em25-feat-2-pc.png"
        image_mobile: "em25-feat-2-mb.png"
        title: "CBS 重型機車級雙碟煞系統"
      - image_desktop: "em25-feat-3-pc.png"
        image_mobile: "em25-feat-3-mb.png"
        title: "人體工學跑車級舒適座墊"
    youtube_id: "JEKf9fqM2C0"
---