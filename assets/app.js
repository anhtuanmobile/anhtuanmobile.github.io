document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const menuItems = document.querySelector('.menu-items');

  const heroSlider = document.getElementById('hero-slider');
  const heroTrack = document.getElementById('hero-track');
  const heroDots = document.getElementById('hero-dots');
  const heroPrev = document.getElementById('hero-prev');
  const heroNext = document.getElementById('hero-next');

  const categoryList = document.getElementById('category-list');
  const newsFeature = document.getElementById('news-feature');
  const newsList = document.getElementById('news-list');
  const asideBanner1 = document.getElementById('aside-banner-1');
  const asideBanner2 = document.getElementById('aside-banner-2');
  const asideBanner3 = document.getElementById('aside-banner-3');
  const promoFull = document.getElementById('promo-full');

  const promoProductsContainer = document.getElementById('promo-products');
  const bestSellerContainer = document.getElementById('best-seller-products');
  const phoneProductsContainer = document.getElementById('phone-products');
  const tabletProductsContainer = document.getElementById('tablet-products');
  const accessoryProductsContainer = document.getElementById('accessory-products');

  const createEl = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };

  const heroSlides = [
    {
      badge: 'Hot Sale',
      title: 'Xiaomi Redmi 15 – Đầy năng lượng',
      subtitle: 'Giá chỉ từ 6,390,000đ cùng quà tặng phụ kiện chính hãng.',
      ctaText: 'Mua ngay',
      ctaLink: '#',
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/ms_banner_img6.jpg?v=430'
    },
    {
      badge: 'Ra mắt',
      title: 'Vivo iQOO Z10 Turbo Pro – Dẫn đầu công nghệ',
      subtitle: 'Đặt trước nhận quà loa Bluetooth trị giá 1.590.000đ.',
      ctaText: 'Đặt trước',
      ctaLink: '#',
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/ms_banner_img7.jpg?v=430'
    },
    {
      badge: 'Ưu đãi sốc',
      title: 'Redmi Note 14 4G – Trọn nét độc bản',
      subtitle: 'Giảm giá 26% trong tuần lễ vàng Redmi.',
      ctaText: 'Khám phá',
      ctaLink: '#',
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/ms_banner_img8.jpg?v=430'
    },
    {
      badge: 'Siêu phẩm',
      title: 'iPhone 17 Series – Quào. Rất Quao!',
      subtitle: 'Hàng VN/A chính hãng, nhiều ưu đãi độc quyền Showroom123.',
      ctaText: 'Xem chi tiết',
      ctaLink: '#',
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/ms_banner_img3.jpg?v=430'
    },
    {
      badge: 'Gaming',
      title: 'Vivo iQOO Z9 Turbo 5G – Bức phá giới hạn',
      subtitle: 'Snapdragon mạnh mẽ, màn hình 144Hz siêu mượt.',
      ctaText: 'Mua ngay',
      ctaLink: '#',
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/ms_banner_img4.jpg?v=430'
    },
    {
      badge: 'Flagship',
      title: 'OnePlus Ace 5 5G – Snapdragon 8 Gen 3',
      subtitle: 'Giảm trực tiếp 2.000.000đ và hỗ trợ trả góp 0%.',
      ctaText: 'Sở hữu ngay',
      ctaLink: '#',
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/ms_banner_img5.jpg?v=430'
    }
  ];

  const categoryItems = [
    { name: 'Điện thoại', icon: 'assets/images/hd_mainmenu_icon1.webp', link: '#' },
    { name: 'Tablets', icon: 'assets/images/hd_mainmenu_icon2.webp', link: '#' },
    { name: 'Phụ kiện', icon: 'assets/images/hd_mainmenu_icon3.webp', link: '#' },
    { name: 'Sửa chữa', icon: 'assets/images/hd_mainmenu_icon4.webp', link: '#' },
    { name: 'Khuyến mãi', icon: 'assets/images/hd_mainmenu_icon5.webp', link: '#' },
    { name: 'Tin tức', icon: 'assets/images/hd_mainmenu_icon6.webp', link: '#' }
  ];

  const newsFeatureData = {
    image: 'https://cdn.hstatic.net/files/1000198144/article/tin_7_064a2d9943d14697925c877cc6ba8710_large.jpg',
    title: 'Xếp hạng hiệu suất Android mới nhất - bất ngờ vị trí Xiaomi Mi 17',
    meta: '07/10/2025 · Hữu Vinh · Tin công nghệ',
    excerpt: 'Bảng xếp hạng hiệu năng Android tháng 10 ghi nhận nhiều bất ngờ khi Xiaomi Mi 17 dẫn đầu với điểm số vượt trội, bỏ xa các đối thủ đến từ Samsung và vivo.'
  };

  const newsItems = [
    {
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/smallbanner_img1.jpg?v=430',
      title: 'iPhone 17 Series VN/A chính thức mở bán tại Showroom123',
      excerpt: 'Đủ màu sắc, ưu đãi trả góp 0%, tặng kèm phụ kiện độc quyền.'
    },
    {
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/smallbanner_img2.jpg?v=430',
      title: 'Trung tâm sửa chữa 123 nâng cấp phòng sạch chuẩn Apple',
      excerpt: 'Dịch vụ sửa chữa chính hãng, linh kiện Zin và bảo hành 12 tháng.'
    }
  ];

  const asideBanners = [
    {
      container: asideBanner1,
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/smallbanner_img1.jpg?v=430',
      link: '#'
    },
    {
      container: asideBanner2,
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/smallbanner_img2.jpg?v=430',
      link: '#'
    },
    {
      container: asideBanner3,
      image: 'https://theme.hstatic.net/1000198144/1001051255/14/home_banner_img.jpg?v=430',
      link: '#'
    }
  ];

  const promoBanner = {
    image: 'https://theme.hstatic.net/1000198144/1001051255/14/home_banner_img.jpg?v=430',
    link: '#'
  };

  const productSections = {
    promo: [
      {
        name: 'Vivo iQOO Z10 Turbo 5G 12GB/256GB',
        price: '6,390,000₫',
        oldPrice: '7,490,000₫',
        discount: '-15%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/iqoo_z10_turbo_pro_tr_ng_4bf3967ae34742b2bb0fa5f06acaf2d2_medium.jpg'
      },
      {
        name: 'Vivo iQOO Z10x 5G 8GB/128GB',
        price: '3,750,000₫',
        oldPrice: '4,590,000₫',
        discount: '-18%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/iqoo_z10x_titan_063b1d6e970f4572b581c348b7949c55_medium.jpg'
      },
      {
        name: 'Vivo iQOO Z9 Turbo 5G 2025 12GB/256GB',
        price: '6,290,000₫',
        oldPrice: '8,490,000₫',
        discount: '-26%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/z9_turbo_2025_d0e84bbca6aa457eae5f6e4b56c7e583_medium.jpg'
      },
      {
        name: 'Samsung S25 Ultra 5G 12GB/256GB Like New',
        price: '21,490,000₫',
        oldPrice: '23,490,000₫',
        discount: '-9%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/s25_ultr_xam_49a138d54f94417c9bf1a49bc6fd6cdf_medium.jpg'
      },
      {
        name: 'Samsung S24 Ultra 5G 12GB/256GB Like New',
        price: '17,190,000₫',
        oldPrice: '19,290,000₫',
        discount: '-11%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/3_77cfb06be544458ba73a37019660b66a_medium.jpg'
      },
      {
        name: 'Samsung S24 Plus 5G 12GB/256GB Like New',
        price: '12,590,000₫',
        oldPrice: '13,090,000₫',
        discount: '-4%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/4_743399114e1f4ff8ae885288908df0c5_medium.jpg'
      },
      {
        name: 'Samsung Galaxy S24 FE 5G 8GB/128GB Like New',
        price: '8,990,000₫',
        oldPrice: '10,590,000₫',
        discount: '-15%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/8_6234cc6c463e40288204d961345a4805_medium.jpg'
      },
      {
        name: 'Samsung S23 Ultra 5G 8GB/12GB Like New',
        price: '13,590,000₫',
        oldPrice: '15,990,000₫',
        discount: '-15%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/4_cdd4cfd56b7e4e03afb7d9180ef89e46_medium.png'
      }
    ],
    bestSeller: [
      {
        name: 'Samsung S24 Ultra 5G 12GB/256GB Like New',
        price: '17,190,000₫',
        oldPrice: '19,290,000₫',
        discount: '-11%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/3_77cfb06be544458ba73a37019660b66a_medium.jpg'
      },
      {
        name: 'Vivo iQOO Z10 Turbo Pro 5G 12GB | 16GB',
        price: '7,390,000₫',
        oldPrice: '8,990,000₫',
        discount: '-18%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/iqoo_z10_turbo_pro_b_c_48d4a9afbc8f48a9a7a60413f73fca89_medium.jpg'
      },
      {
        name: 'Xiaomi Redmi Turbo 4 Pro 5G 12GB/256GB',
        price: '7,390,000₫',
        oldPrice: '7,990,000₫',
        discount: '-8%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/redmi_turbo_4_pro_xanh_6baf280688eb4b0e9009b3269a1bfcc5_medium.jpg'
      },
      {
        name: 'Vivo iQOO Z9 5G 8GB/128GB',
        price: '4,690,000₫',
        oldPrice: '6,490,000₫',
        discount: '-28%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/3_53ffaf69200a4264b95f9ee315870138_medium.jpg'
      },
      {
        name: 'Xiaomi Redmi Note 14 4G 6GB/128GB Chính Hãng',
        price: '4,090,000₫',
        oldPrice: '5,490,000₫',
        discount: '-26%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/2_b3c073da1ddb49b4b6be383fc329f03d_medium.jpg'
      }
    ],
    phones: [
      {
        name: 'Samsung Galaxy S25 FE 5G 8GB/128GB',
        price: '13,990,000₫',
        oldPrice: '16,690,000₫',
        discount: '-16%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://cdn.hstatic.net/products/1000198144/add_3_cf9ec50bda3e41a29ab6e5a65a5b27a5_medium.jpg'
      },
      {
        name: 'Xiaomi 15T Pro 5G 12GB/512GB Chính Hãng',
        price: '15,990,000₫',
        oldPrice: '19,490,000₫',
        discount: '-18%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://cdn.hstatic.net/products/1000198144/add_2_610944d05fba47a599c752efeaab2342_medium.jpg'
      },
      {
        name: 'Xiaomi 15T 5G 12GB/512GB Chính Hãng',
        price: '11,990,000₫',
        oldPrice: '14,990,000₫',
        discount: '-20%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://cdn.hstatic.net/products/1000198144/add_1_6a9b6bccac5e476dbe4f90f8096f561f_medium.jpg'
      },
      {
        name: 'Samsung Galaxy A17 8GB/128GB',
        price: '4,590,000₫',
        oldPrice: '5,190,000₫',
        discount: '-12%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/hot_sale.png?v=430',
        image: 'https://cdn.hstatic.net/products/1000198144/add_2_7f34ef5dce9642fe826f6b10eb79c3b8_medium.jpg'
      },
      {
        name: 'Vivo iQOO Neo 10 Pro Plus 5G',
        price: '10,390,000₫',
        oldPrice: '12,490,000₫',
        discount: '-17%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://cdn.hstatic.net/products/1000198144/snapedit_1758602655868_5c119fced52c46adb6f41a3623e6b35b_medium.jpeg'
      },
      {
        name: 'Xiaomi Redmi Note 15 Pro Plus 5G 12GB/256GB',
        price: '7,490,000₫',
        oldPrice: '7,990,000₫',
        discount: '-6%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://cdn.hstatic.net/products/1000198144/add__2_aad493dca55b4dad936968ccff97a924_medium.jpg'
      }
    ],
    tablets: [
      {
        name: 'iPad Gen 10 New Chính Hãng',
        price: '8,690,000₫',
        oldPrice: '16,990,000₫',
        discount: '-49%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/4_d8a90e24067d45a5917811061f18f6d6_medium.jpg'
      },
      {
        name: 'iPad Gen 9 New Chính Hãng',
        price: '6,790,000₫',
        oldPrice: '9,990,000₫',
        discount: '-32%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/gen_9_4_69ca5be14b3547d9ab9cf750b33beb7b_medium.jpg'
      },
      {
        name: 'iPad Pro M1 2021 12.9" 128GB Like New',
        price: '16,490,000₫',
        oldPrice: '19,990,000₫',
        discount: '-18%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/13_6e05eab939054d6ca055aff3ab8a9c1b_medium.jpg'
      },
      {
        name: 'iPad Pro M1 2021 11" 128GB Like New',
        price: '14,890,000₫',
        oldPrice: '17,990,000₫',
        discount: '-17%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/11_5da35bfd30584492b4874329b5c65f56_medium.jpg'
      },
      {
        name: 'iPad Pro 2020 11" Wifi 4G Like New',
        price: '13,490,000₫',
        oldPrice: '14,890,000₫',
        discount: '-9%',
        badge: 'https://theme.hstatic.net/1000198144/1001051255/14/orther.png?v=430',
        image: 'https://product.hstatic.net/1000198144/product/15_4ecebee61f1848bcb9cea28c4df5f197_medium.jpg'
      }
    ],
    accessories: [
      {
        name: 'Sạc Dự Phòng Không Dây Remax RPP-527 22.5W',
        price: '440,000₫',
        oldPrice: '650,000₫',
        discount: '-32%',
        image: 'https://cdn.hstatic.net/products/1000198144/s_c_d__ph_ng_kh_ng_d_y_remax_rpp-527_xanh_7e39c25d68504408b16d763e3f1adbd1_medium.jpg'
      },
      {
        name: 'Cáp Sạc Nhanh Type C To Type C Remax RC-191',
        price: '70,000₫',
        oldPrice: '150,000₫',
        discount: '-53%',
        image: 'https://cdn.hstatic.net/products/1000198144/c_p_s_c_remax_hoco_191_111_09c84c18a3ff4a55825bf74b5896ad6c_medium.jpg'
      },
      {
        name: 'Tai Nghe Bluetooth Hoco EW69 (ANC+ENC)',
        price: '340,000₫',
        oldPrice: '450,000₫',
        discount: '-24%',
        image: 'https://cdn.hstatic.net/products/1000198144/hoco_ew69_2_706f44a451064c149d801e88dbb22853_medium.jpg'
      },
      {
        name: 'Tai Nghe Bluetooth Hoco W35 Max',
        price: '330,000₫',
        oldPrice: '450,000₫',
        discount: '-27%',
        image: 'https://cdn.hstatic.net/products/1000198144/hoco-w35-max-13_3c414c591db541dfa4ee69b0abeaa6eb_medium.jpg'
      },
      {
        name: 'Kích Sóng Wifi Tenda A9',
        price: '245,000₫',
        oldPrice: '290,000₫',
        discount: '-16%',
        image: 'https://product.hstatic.net/1000198144/product/tenda_a9_1_b083feead8c8410894b5a76d98935a01_medium.jpg'
      },
      {
        name: 'Tẩu Sạc Xe Hơi Hoco Z52 38W',
        price: '270,000₫',
        oldPrice: '320,000₫',
        discount: '-16%',
        image: 'https://product.hstatic.net/1000198144/product/hoco_z52_2c6d43eae573487e9a19ac4337d079ad_medium.jpg'
      }
    ]
  };

  /* Mobile navigation */
  if (mobileMenuBtn && menuItems) {
    const closeMenu = () => {
      menuItems.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      document.body.classList.remove('no-scroll');
    };

    mobileMenuBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      menuItems.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      document.body.classList.toggle('no-scroll', menuItems.classList.contains('active'));
    });

    document.addEventListener('click', (event) => {
      if (!menuItems.contains(event.target) && event.target !== mobileMenuBtn) {
        closeMenu();
      }
    });

    menuItems.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* Hero slider */
  if (heroSlider && heroTrack && heroDots && heroPrev && heroNext) {
    let currentSlide = 0;
    let heroIntervalId;

    const renderHeroSlides = () => {
      heroTrack.innerHTML = '';
      heroDots.innerHTML = '';

      heroSlides.forEach((slide, index) => {
        const slideEl = createEl('div', 'hero-slide');
        slideEl.style.backgroundImage = `url(${slide.image})`;

        const content = createEl('div', 'hero-content');
        const badge = createEl('span', 'badge', slide.badge);
        const title = createEl('h2', 'hero-title', slide.title);
        const subtitle = createEl('p', 'hero-subtitle', slide.subtitle);
        const cta = createEl('a', 'btn-primary', slide.ctaText);
        cta.href = slide.ctaLink;

        content.append(badge, title, subtitle, cta);
        slideEl.appendChild(content);
        heroTrack.appendChild(slideEl);

        const dot = createEl('button', 'hero-dot');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Chuyển đến slide ${index + 1}`);
        dot.addEventListener('click', () => updateHeroSlide(index));
        heroDots.appendChild(dot);
      });
    };

    const updateHeroSlide = (index) => {
      currentSlide = (index + heroSlides.length) % heroSlides.length;
      heroTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      heroDots.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === currentSlide);
      });
    };

    const stopHeroAutoplay = () => {
      if (heroIntervalId) {
        clearInterval(heroIntervalId);
        heroIntervalId = null;
      }
    };

    const startHeroAutoplay = () => {
      stopHeroAutoplay();
      heroIntervalId = setInterval(() => {
        updateHeroSlide(currentSlide + 1);
      }, 6000);
    };

    renderHeroSlides();
    updateHeroSlide(0);
    startHeroAutoplay();

    heroPrev.addEventListener('click', () => updateHeroSlide(currentSlide - 1));
    heroNext.addEventListener('click', () => updateHeroSlide(currentSlide + 1));

    heroSlider.addEventListener('mouseenter', stopHeroAutoplay);
    heroSlider.addEventListener('mouseleave', startHeroAutoplay);
  }

  /* Categories */
  if (categoryList) {
    categoryItems.forEach((item) => {
      const link = createEl('a', 'category-card');
      link.href = item.link;
      const icon = createEl('img');
      icon.src = item.icon;
      icon.alt = item.name;
      const label = createEl('span', null, item.name);
      link.append(icon, label);
      categoryList.appendChild(link);
    });
  }

  /* News */
  if (newsFeature) {
    newsFeature.innerHTML = '';
    const thumb = createEl('img');
    thumb.src = newsFeatureData.image;
    thumb.alt = newsFeatureData.title;
    const content = createEl('div', 'news-feature__content');
    const title = createEl('h3', 'news-feature__title', newsFeatureData.title);
    const meta = createEl('span', 'news-feature__meta', newsFeatureData.meta);
    const excerpt = createEl('p', 'news-feature__excerpt', newsFeatureData.excerpt);
    const link = createEl('a', 'btn-primary', 'Đọc ngay');
    link.href = '#';
    content.append(title, meta, excerpt, link);
    newsFeature.append(thumb, content);
  }

  if (newsList) {
    newsList.innerHTML = '';
    newsItems.forEach((article) => {
      const card = createEl('article', 'news-card');
      const thumb = createEl('img');
      thumb.src = article.image;
      thumb.alt = article.title;
      const content = createEl('div');
      const title = createEl('h3', null, article.title);
      const excerpt = createEl('p', null, article.excerpt);
      content.append(title, excerpt);
      card.append(thumb, content);
      newsList.appendChild(card);
    });
  }

  asideBanners.forEach((banner) => {
    if (banner.container) {
      const link = createEl('a');
      link.href = banner.link;
      const img = createEl('img');
      img.src = banner.image;
      img.alt = 'Banner quảng cáo';
      link.appendChild(img);
      banner.container.appendChild(link);
    }
  });

  if (promoFull) {
    const link = createEl('a');
    link.href = promoBanner.link;
    const img = createEl('img');
    img.src = promoBanner.image;
    img.alt = 'Banner khuyến mãi';
    link.appendChild(img);
    promoFull.appendChild(link);
  }

  const renderProducts = (container, products) => {
    if (!container) return;
    container.innerHTML = '';

    products.forEach((product) => {
      const item = createEl('article', 'product-item');

      if (product.discount) {
        const saleBadge = createEl('span', 'sale-badge', product.discount);
        item.appendChild(saleBadge);
      }

      if (product.badge) {
        const badgeImg = createEl('img', 'tag-hot');
        badgeImg.src = product.badge;
        badgeImg.alt = 'Hot sale';
        item.appendChild(badgeImg);
      }

      const thumb = createEl('div', 'product-thumb');
      const img = createEl('img');
      img.src = product.image;
      img.alt = product.name;
      thumb.appendChild(img);

      const name = createEl('h3', 'product-name', product.name);

      const pricing = createEl('div', 'product-pricing');
      const price = createEl('span', 'product-price', product.price);
      pricing.appendChild(price);
      if (product.oldPrice) {
        const old = createEl('span', 'product-old-price', product.oldPrice);
        pricing.appendChild(old);
      }

      const installment = createEl('div', 'product-installment', 'Trả góp 0% · Giao nhanh 2h');

      item.append(thumb, name, pricing, installment);
      container.appendChild(item);
    });
  };

  renderProducts(promoProductsContainer, productSections.promo);
  renderProducts(bestSellerContainer, productSections.bestSeller);
  renderProducts(phoneProductsContainer, productSections.phones);
  renderProducts(tabletProductsContainer, productSections.tablets);
  renderProducts(accessoryProductsContainer, productSections.accessories);
});
