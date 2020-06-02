window.onload = function () {
  let partner = new Swiper ('.partner-contain', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.partner-btn-next',
      prevEl: '.partner-btn-prev'
    },

    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      990: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      765: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
    updateOnWindowResize: true,
    setWrapperSize: true,
    centeredSlides: true,
  });

  
  
  //вызов мобильного меню
    let burger = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.mobile-menu'),
        body = document.querySelector('body'),
        closeMenu = document.querySelector('.close');

    burger.addEventListener('click', ()=>{
      mobileMenu.classList.remove('anim-menu-hide');
      mobileMenu.classList.add('anim-menu-active');
      body.classList.add('hidden');
    });

    closeMenu.addEventListener('click', ()=>{
      body.classList.remove('hidden');
      mobileMenu.classList.remove('anim-menu-active');
      mobileMenu.classList.add('anim-menu-hide');
    });


//вызов popup


let callButton = document.querySelector('.call-back'),
    callButton2 = document.querySelector('.sentence__button'),
    callButton3 = document.querySelector('.clients__btn'),
    consult1 = document.querySelector('.price__btn-personal'),
    consult2 = document.querySelector('.price__btn-family'),
    consult3 = document.querySelector('.price__btn-bussines'),
    popup = document.querySelector('.popup-wrap');

let callForm = ()=>{
  popup.classList.add('active');
}

callButton.addEventListener('click', ()=>{
  callForm();
});

callButton2.addEventListener('click', ()=>{
  callForm();
});

callButton3.addEventListener('click', ()=>{
  callForm();
});

consult1.addEventListener('click', ()=>{
  callForm();
});

consult2.addEventListener('click', ()=>{
  callForm();
});

consult3.addEventListener('click', ()=>{
  callForm();
});


//закрыть popup
popup.addEventListener('click', ()=>{
  let target = event.target;
  if(target === popup){
    popup.classList.remove('active');
  }
});

let popupClose = document.querySelector('.popup-send__close');

popupClose.addEventListener('click', ()=>{
  popup.classList.remove('active');
});

let videoList = document.querySelector('.video__list'),
    videoItems = document.querySelectorAll('.video__item'),
    vSlides = document.querySelectorAll('.v-slider');
    



    //video-slider
     // .slider6, .slider6-pagin, .slider6-btn-next, .slider6-btn-prev
     let initSlider = (slider, pagin, next, prev)=>{
      let videoSwipe = new Swiper (slider, {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: pagin,
          type: 'bullets',
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
      
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          // when window width is >= 320px
          990: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 480px
          765: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        },
        centeredSlides: true
      });
    };
    initSlider('.slider1', '.slider1-pagin', '.slider1-btn-next', '.slider1-btn-prev');
    initSlider('.slider2', '.slider2-pagin', '.slider2-btn-next', '.slider2-btn-prev');
    initSlider('.slider3', '.slider3-pagin', '.slider3-btn-next', '.slider3-btn-prev');
    initSlider('.slider4', '.slider4-pagin', '.slider4-btn-next', '.slider4-btn-prev');
    initSlider('.slider5', '.slider5-pagin', '.slider5-btn-next', '.slider5-btn-prev');  
  initSlider('.slider6', '.slider6-pagin', '.slider6-btn-next', '.slider6-btn-prev');
  videoItems[5].classList.add('video-active');
  videoList.addEventListener('click', ()=>{
  let target = event.target;
  console.log(target);
  videoItems.forEach((item, i)=>{
    if (target == item){
      item.classList.add('video-active');
      vSlides.forEach((slider, j)=>{
        if (i==j){
          slider.classList.add('active');
        } else{
          slider.classList.remove('active');
        }
      })
      initSlider(`.slider${i+1}`, `.slider${i+1}-pagin`, `.slider${i+1}-btn-next`, `.slider${i+1}-btn-prev`);
      let activeSlider = document.querySelector(`.slider${i+1}`);
      activeSlider.classList.add('active');
    }else{
      item.classList.remove('video-active');
    }
  });
 

  });

  // меню
  let menuLinks = document.querySelectorAll('.menu__link'),
  menu = document.querySelector('.menu');


      menu.addEventListener('click', ()=>{
      let target = event.target;

      menuLinks.forEach((item)=>{
        
        if (item == target){
          body.classList.remove('hidden');
          mobileMenu.classList.remove('anim-menu-active');
          mobileMenu.classList.add('anim-menu-hide');
        }
        
      });
    });




let nav = document.querySelector('.nav'),
    navLinks = document.querySelectorAll('.nav__link');


  let moveScroll = (link, nav)=>{
      event.preventDefault();
    let target = event.target;
    
    target = target.closest(link);
    console.log(target);
    
    nav.forEach((item, i) =>{
        if(target === item){
            
            let anchor = target.href.replace(/[^#]*(.*)/, '$1');
          
            const elem = document.querySelector(anchor);
            
            
            
            let scrollVert = 0,
            placeScroll = elem.getBoundingClientRect().top;
          
            const scrolling = () => {
                intervalScroll = requestAnimationFrame(scrolling);
                                
                if(scrollVert < placeScroll){
                    window.scrollTo(0, scrollVert) ;
                    scrollVert += 100;
                } else{
                    cancelAnimationFrame(intervalScroll);
                    scrollVert = 0;
                    
                }
            };
            scrolling();
        }
    });
  }  

nav.addEventListener('click', event => {
  moveScroll('.nav__link', navLinks);
});

menu.addEventListener('click', event =>{
  moveScroll('.menu__link', menuLinks);
});


  function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elem = document.querySelector(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i != -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }

    }

    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

    maskPhone('#feedback-input1');
    maskPhone('#feedback-input2');

    let partenerSlider = document.querySelector('.partner-wrapper'),
        partnerImgs = document.querySelectorAll('.partner__img'),
        partnerCards = document.querySelectorAll('.partner__card');
    
    partenerSlider.addEventListener('mouseover', () => {
      let target = event.target;
      
      partnerImgs.forEach((item, i)=>{
        if(item == target){
          partnerCards[i].classList.add('active');
        }
      });
    })
   
    partnerCards.forEach((slide)=>{
      slide.addEventListener('mouseout', ()=>{
        slide.classList.remove('active');
      });
    }

    )
    //валидация
    let callbackInputs = document.querySelectorAll('.callback-input'),
     callBtn = document.querySelector('.form__btn-call')
     form = document.querySelector('.form'),
     error = document.querySelector('.error-text');

     form.addEventListener('submit', function(evt) {
      evt.preventDefault();
      if(callbackInputs[0].value == '' || callbackInputs[1] == ''){
        error.classList.add
      }

      
      this.submit();
    });
};
