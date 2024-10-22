(function() {
    // Бургер
  document.addEventListener('click', burgerInit )

  function burgerInit(e){

    
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return


    if(!document.body.classList.contains('body--opened-menu')){
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu') 
    }
    


  }
    // Модалка
  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }
  }
    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
      
      const tabControl = e.target.closest('.tab-controls__link')

      if (!tabControls) return

      e.preventDefault()

      if (tabControl.classList.contains('tab-controls__link--active')) return


      const tabContentID = tabControl.getAttribute('href')
      const tabContent = document.querySelector(tabContentID)
      const alctiveContro = document.querySelector('.tab-controls__link--active')
      const activeContent = document.querySelector('.tab-content--show')

      alctiveContro.classList.remove('tab-controls__link--active')
      tabControl.classList.add('tab-controls__link--active')

      activeContent.classList.remove('tab-content--show')
      tabContent.classList.add('tab-content--show')


    }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordeon-list');

    accordionLists.forEach(el => {
      
      el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordeon-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordeon-list__item--opened .accordeon-list__control')

        const accordionControl = e.target.closest('.accordeon-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
          accordionOpenedItem.classList.remove('accordeon-list__item--opened');
          accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordeon-list__item--opened');

        if (accordionItem.classList.contains('accordeon-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
      });

    });

    // Слайдер-галлерея

    new Swiper('.gallery__slider', {
    
      spaceBetween: 15,
      slidesPerView: 1.5,

      pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
      },
    
      
      navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
      },

      breakpoints: {
        601: {
          slidesPerView: 3,
        },
        801: {
          spaceBetween: 32,
        },
        1101: {
          slidesPerView: 4,
        }
      }
    });

    // Слайдер-отзывы

    new Swiper('.testimonials__slider', {
    
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides: true,
    
      
      navigation: {
        prevEl: '.testimonials__prev',
        nextEl: '.testimonials__next',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      breakpoints: {
        901: {
          slidesPerView: 1.5,
        },
        1201: {
          slidesPerView: 2.1,
        }
      }
    });

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)


})()