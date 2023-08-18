const swiper = new Swiper('.slider-share', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-share__button-next',
      prevEl: '.slider-share__button-prev',
      clickable: true,
    },
  });

    //==================================== TABS ==================================

    const tabNavItems = document.querySelectorAll('.tabs-trust__button');
    const tabItems = document.querySelectorAll('.item-tabs');
    document.addEventListener("click", function (e) {
      const targetElement = e.target;
      let currentActiveIndex = null;
      let newActiveIndex = null;
      if (targetElement.closest('.tabs-trust__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
          if (tabNavItem.classList.contains('active')) {
            currentActiveIndex = index;
            tabNavItem.classList.remove('active');
          }
          if (tabNavItem === targetElement) {
            newActiveIndex = index;
          }
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
      }
    });

    // ================================= active buttons =================================

    