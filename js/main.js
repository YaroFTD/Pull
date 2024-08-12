"use strict";

window.addEventListener('click', function (e) {
   let target = e.target;

   if (target.classList.contains('search__icon')) {
      target.closest('.search').classList.toggle("_active");
   }

   if (!target.classList.contains('search__icon') && !target.closest('.search')) {
      document.querySelectorAll('.search._active').forEach((elem) => elem.classList.remove('_active'));
   }

   if (isMobile.any()) {
      if (target.classList.contains('filter-sportswear__title', '_icon-sort')) {
         let obj = target.closest('.filter-sportswear__sort');
         if (obj) {
            obj.classList.toggle("_active");
         }
      }
      if (!target.classList.contains('filter-sportswear__title', '_icon-sort') && !target.closest('.filter-sportswear__sort')) {
         document.querySelectorAll('.filter-sportswear__sort._active').forEach((elem) => elem.classList.remove('_active'));
      }
   }

   if (target.classList.contains('spollers-size__title') || target.closest('.spollers-size__title')) {
      let listSize = document.querySelector('.spollers-size__list');
      let items = listSize.querySelectorAll('li');
      items.forEach((item) => {
         item.addEventListener('click', () => {
            let active = listSize.querySelectorAll('._active');
            active.forEach((elem) => elem.classList.remove('_active'));

            item.classList.add('_active');
         });
      });
   }

   if (target.classList.contains('spollers-color__title') || target.closest('.spollers-color__title')) {
      let listColor = document.querySelector('.spollers-color__list');
      let items = listColor.querySelectorAll('li');
      let text = target.querySelector('.spollers-color__text');
      let color = target.querySelector('.spollers-color__color');
      items.forEach((item) => {
         item.addEventListener('click', () => {
            let itemColor = item.querySelector('.spollers-color__color').dataset.color;
            let itemText = item.querySelector('.spollers-color__text');
            
            let active = listColor.querySelectorAll('._active');
            active.forEach((elem) => elem.classList.remove('_active'));

            text.textContent = itemText.textContent;
            color.style.backgroundColor = itemColor;
            
            item.classList.add('_active');
         });
      });
   }
});

let categorySwiper = document.querySelector('.category__slider');
if (categorySwiper) {
   const swiper = new Swiper('.category__slider', {
      loop: true,
      slidesPerView: "auto",
      // Navigation arrows
      navigation: {
         nextEl: '.category__next',
         prevEl: '.category__prev',
      },
      breakpoints: {
         320: {
            enabled: false,
            spaceBetween: 0,
            rewind: true,
         },
         479.98: {
            enabled: true,
            spaceBetween: 24,
         }
      },
      on: {
         resize: function () {
            if (window.innerWidth <= 479.98) {
               document.querySelector('.category__wrapper').classList.add('_dis');
            }
         },
      }
   });

}

let actualSwiper = document.querySelector('.actual__slider');
if (actualSwiper) {
   const swiper = new Swiper('.actual__slider', {
      loop: true,
      slidesPerView: 'auto',
      // Navigation arrows
      navigation: {
         nextEl: '.actual__next',
         prevEl: '.actual__prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 14,
         },
         479.98: {
            spaceBetween: 24,
         }
      },
   });
}

let hitsSwiper = document.querySelector('.hits__slider');
if (hitsSwiper) {
   const swiper = new Swiper('.hits__slider', {
      loop: true,
      slidesPerView: 'auto',
      // Navigation arrows
      navigation: {
         nextEl: '.hits__next',
         prevEl: '.hits__prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 14,
         },
         479.98: {
            spaceBetween: 24,
         }
      },
   });
}

let newProductsSwiper = document.querySelector('.new-products__slider');
if (newProductsSwiper) {
   const swiper = new Swiper('.new-products__slider', {
      loop: true,
      slidesPerView: 'auto',
      // Navigation arrows
      navigation: {
         nextEl: '.new-products__next',
         prevEl: '.new-products__prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 14,
         },
         479.98: {
            spaceBetween: 24,
         }
      },
   });
}

let similarSwiper = document.querySelector('.similar__slider');
if (similarSwiper) {
   const swiper = new Swiper('.similar__slider', {
      loop: true,
      slidesPerView: 'auto',
      // Navigation arrows
      navigation: {
         nextEl: '.similar__next',
         prevEl: '.similar__prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 14,
         },
         479.98: {
            spaceBetween: 24,
         }
      },
   });
}

let recentlySwiper = document.querySelector('.recently__slider');
if (recentlySwiper) {
   const swiper = new Swiper('.recently__slider', {
      loop: true,
      slidesPerView: 'auto',
      // Navigation arrows
      navigation: {
         nextEl: '.recently__next',
         prevEl: '.recently__prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 14,
         },
         479.98: {
            spaceBetween: 24,
         }
      },
   });
}

let productReviewsSwiper = document.querySelector('.top-reviews-product__slider');
if (productReviewsSwiper) {
   const swiper = new Swiper('.top-reviews-product__slider', {
      loop: true,
      slidesPerView: 'auto',
      // Navigation arrows
      navigation: {
         nextEl: '.top-reviews-product__next',
         prevEl: '.top-reviews-product__prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 8,
         },
         479.98: {
            spaceBetween: 12,
         }
      },
   });
}

let galleryProductSwiper = document.querySelector('.gallery-product__slider');
let galleryProductMinSwiper = document.querySelector('.gallery-product__minslider');
if (galleryProductSwiper) {
   const minSwiper = new Swiper('.gallery-product__minslider', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 6,
      breakpoints: {
         320: {
            spaceBetween: 14,
            enabled: false,
         },
         1000.98: {
            spaceBetween: 22,
            enabled: true,
         }
      },
   });
   const swiper = new Swiper('.gallery-product__slider', {
      loop: true,
      slidesPerView: 1,
      autoplay: {
         delay: 2000,
         disableOnInteraction: false
      },
      pagination: {
         el: '.swiper-pagination',
      },
      breakpoints: {
         320: {
            spaceBetween: 14,
         },
         1000.98: {
            spaceBetween: 22,
         }
      },
      thumbs: {
         swiper: minSwiper,
      },
   });

}

let bodys = document.querySelectorAll('[data-more]');
for (let i = 0; i < bodys.length; i++) { 
   initShowMores(bodys[i]);
}
function initShowMores(box) {
   let showNumber = box.dataset.more;
   let showMores = box.querySelectorAll('[data-more-item]');
   let show = box.querySelector('[data-show]');
   let hide = box.querySelector('[data-hide]');
   
   if (showMores.length < showNumber) {
      hide.hidden = true;  
      show.hidden = true;  
   }
   for (let i = 0; i < showMores.length; i++) {
      if (i > showNumber - 1) {
         showMores[i].classList.add('hide');
      }
   }
   if (show) {
      show.addEventListener('click', function (e) {
         let hides = box.querySelectorAll('.hide');
         for (let i = 0; i < hides.length; i++) {
            hides[i].classList.remove('hide');
         }
         this.classList.add('show');
         this.hidden = true;
         hide.hidden = false;  
      });
   }

   if (hide) {
      hide.hidden = true;  
      hide.addEventListener('click', function (e) {
         for (let i = 0; i < showMores.length; i++) {
            if (i > showNumber - 1) {
               showMores[i].classList.add('hide');
            }
         }
         this.hidden = true;
         show.hidden = false;
         this.classList.add('hide');
      });
   }

}


function rangeInit() {
   const rangeItems = document.querySelectorAll('[data-range]');
   if (rangeItems.length) {
      rangeItems.forEach((rangeItem) => {
         const fromValue = rangeItem.querySelector('[data-range-from]');
         const toValue = rangeItem.querySelector('[data-range-to]');
         const fromValueOpacity = rangeItem.querySelector('[data-range-from-opc] span');
         const toValueOpacity = rangeItem.querySelector('[data-range-to-opc] span');
         const item = rangeItem.querySelector('[data-range-item]');
         noUiSlider.create(item, {
            start: [Number(fromValue.dataset.rangeFrom), Number(toValue.dataset.rangeTo)],
            connect: true,
            // tooltips: {
            //    to: function(numericValue) {
            //       return numericValue.toFixed(0);
            //    },
            //    from: function(numericValue) {
            //       return numericValue.toFixed(0);
            //    }
            // },
            format: {
               from: function (formattedValue) {
                  return Number(formattedValue);
               },
               to: function(numericValue) {
                  return Math.round(numericValue);
               }
            },
            // // No decimals
            // format: wNumb({
            //    decimals: 0
            // }),
            range: {
               'min': [Number(fromValue.dataset.rangeFrom)],
               'max': [Number(toValue.dataset.rangeTo)]
            },
         });
         item.noUiSlider.on('update', function (values, handle) {
            let value = values[handle];
            if (handle) {
               toValue.value = value;
               toValueOpacity.innerHTML = value;
            } else {
               fromValue.value = value;
               fromValueOpacity.innerHTML = value;
            }
         });
         fromValue.addEventListener('change', function () {
            item.noUiSlider.set([this.value, null]);
            fromValueOpacity.innerHTML = this.value;
         });
         toValue.addEventListener('change', function () {
            item.noUiSlider.set([null, this.value]);
            toValueOpacity.innerHTML = this.value;
         });
         fromValue.addEventListener('input', function () {
            fromValueOpacity.innerHTML = this.value;
         });
         toValue.addEventListener('input', function () {
            toValueOpacity.innerHTML = this.value;
         });
      });
   }
}
rangeInit();

let filterOpenBtn = document.querySelector('.filter-sportswear__title._icon-filter');
let filterCloseBtn = document.querySelector('.filter__burger');
let filterBody = document.querySelector('.filter');
if (filterBody) {
   filterOpenBtn.addEventListener('click', function () {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      document.body.style.paddingRight = lockPaddingValue;
      document.body.classList.add('_lock');
      filterOpenBtn.classList.add('_active');
      filterBody.classList.add('_active');
   });
   filterCloseBtn.addEventListener('click', function () {
      document.body.style.paddingRight = '0px';
      document.body.classList.remove('_lock');
      filterCloseBtn.classList.remove('_active');
      filterBody.classList.remove('_active');
   });
}


/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */
/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */
/**
 * @param {'min' | 'max'} type
 */
function useDynamicAdapt(type = 'max') {
   const className = '_dynamic_adapt_'
   const attrName = 'data-da'

   /** @type {dNode[]} */
   const dNodes = getDNodes()

   /** @type {dMediaQuery[]} */
   const dMediaQueries = getDMediaQueries(dNodes)

   dMediaQueries.forEach((dMediaQuery) => {
      const matchMedia = window.matchMedia(dMediaQuery.query)
      // массив объектов с подходящим брейкпоинтом
      const filteredDNodes = dNodes.filter(({ breakpoint }) => breakpoint === dMediaQuery.breakpoint)
      const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
      matchMedia.addEventListener('change', mediaHandler)

      mediaHandler()
   })

   function getDNodes() {
      const result = []
      const elements = [...document.querySelectorAll(`[${attrName}]`)]

      elements.forEach((element) => {
         const attr = element.getAttribute(attrName)
         const [toSelector, breakpoint, order] = attr.split(',').map((val) => val.trim())

         const to = document.querySelector(toSelector)

         if (to) {
            result.push({
               parent: element.parentElement,
               element,
               to,
               breakpoint: breakpoint ?? '767',
               order: order !== undefined ? (isNumber(order) ? Number(order) : order) : 'last',
               index: -1,
            })
         }
      })

      return sortDNodes(result)
   }

   /**
    * @param {dNode} items
    * @returns {dMediaQuery[]}
    */
   function getDMediaQueries(items) {
      const uniqItems = [...new Set(items.map(({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`))]

      return uniqItems.map((item) => {
         const [query, breakpoint] = item.split(',')

         return { query, breakpoint }
      })
   }

   /**
    * @param {MediaQueryList} matchMedia
    * @param {dNodes} items
    */
   function getMediaHandler(matchMedia, items) {
      return function mediaHandler() {
         if (matchMedia.matches) {
         items.forEach((item) => {
            moveTo(item)
         })

         items.reverse()
         } else {
         items.forEach((item) => {
            if (item.element.classList.contains(className)) {
               moveBack(item)
            }
         })

         items.reverse()
         }
      }
   }

   /**
    * @param {dNode} dNode
    */
   function moveTo(dNode) {
      const { to, element, order } = dNode
      dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
      element.classList.add(className)

      if (order === 'last' || order >= to.children.length) {
         to.append(element)

         return
      }

      if (order === 'first') {
         to.prepend(element)

         return
      }

      to.children[order].before(element)
   }

   /**
    * @param {dNode} dNode
    */
   function moveBack(dNode) {
      const { parent, element, index } = dNode
      element.classList.remove(className)

      if (index >= 0 && parent.children[index]) {
         parent.children[index].before(element)
      } else {
         parent.append(element)
      }
   }

   /**
    * @param {HTMLElement} element
    * @param {HTMLElement} parent
    */
   function getIndexInParent(element, parent) {
      return [...parent.children].indexOf(element)
   }

   /**
    * Функция сортировки массива по breakpoint и order
    * по возрастанию для type = min
    * по убыванию для type = max
    *
    * @param {dNode[]} items
    */
   function sortDNodes(items) {
      const isMin = type === 'min' ? 1 : 0

      return [...items].sort((a, b) => {
         if (a.breakpoint === b.breakpoint) {
         if (a.order === b.order) {
            return 0
         }

         if (a.order === 'first' || b.order === 'last') {
           return -1 * isMin
         }

         if (a.order === 'last' || b.order === 'first') {
           return 1 * isMin
         }

         return 0
      }

       return (a.breakpoint - b.breakpoint) * isMin
      })
   }

   function isNumber(value) {
      return !isNaN(value)
   }
}
useDynamicAdapt();
// МЕНЮ БУРГЕР
let menuOpen = document.querySelector('.icon-menu');
let menuClose = document.querySelector('.menu__burger');
let menuBody = document.querySelector('.menu__body');
menuOpen.addEventListener('click', function () {
   document.body.classList.add('_lock');
   menuOpen.classList.add('_active');
   menuBody.classList.add('_active');
});

menuClose.addEventListener('click', function () {
   document.body.classList.remove('_lock');
   menuClose.classList.remove('_active');
   menuBody.classList.remove('_active');
});

// Вспомогательные модули плавного расскрытия и закрытия объекта ===========================================
let _slideUp = (target, duration = 500, h = 0) => { 
   if (!target.classList.contains('_slide') && !target.classList.contains('_showmore')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => { 
         target.hidden = true;
         target.style.removeProperty('height');
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   } else {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = h + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = h + 'px';
      window.setTimeout(() => { 
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideDown = (target, duration = 500, h = 0) => { 
   if (!target.classList.contains('_slide') && !target.classList.contains('_showmore')) {
      target.classList.add('_slide');
      if (target.hidden) {
         target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => { 
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   } else {
      target.classList.add('_slide');
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = h + 'px';
      target.style.transitionProperty = 'height';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = h + 'px';
      window.setTimeout(() => { 
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideToggle = (target, duration = 500, h = 0) => { 
   if (target.hidden) {
      return _slideDown(target, duration, h);
   } else {
      return _slideUp(target, duration, h);
   }
}
let _slideRemove = (target, duration = 500, h = 0) => {
   target.style.removeProperty('height');
   target.style.removeProperty('overflow');
   target.style.removeProperty('transition-duration');
   target.style.removeProperty('transition-property');
}
// ПРОВЕРКА НА ТАЧСКРИН
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   }
};
// СПОЙЛЕРЫ
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
   // Получение обычных спойлеров
   const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
      return !item.dataset.spollers.split(",")[0];
   });

   // Инициализация обычных спойлеров
   if (spollersRegular.length > 0) {
      initSpollers(spollersRegular);
   }

   // Получение спойлеров с медиа запросами
   const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
      return item.dataset.spollers.split(",")[0];
   });

   // Инициализация спойлеров с медиа запросами
   if (spollersMedia.length > 0) {
      const breakpointsArray = [];
      spollersMedia.forEach(item => {
         const params = item.dataset.spollers;
         const breakpoint = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });

      // Получаем уникальные брейкпоинты
      let mediaQeries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mediaQeries = mediaQeries.filter(function (item, index, self) {
         return self.indexOf(item) === index;
      });

      // Работаем с каждым брейкпоинтом
      mediaQeries.forEach(breakpoint => {
         const paramsArray = breakpoint.split(",");
         const mediaBreakpoint = paramsArray[1];
         const mediaType = paramsArray[2];
         const matchMedia = window.matchMedia(paramsArray[0]);

         // Объекты с нужными условиями
         const spollersArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
               return true;
            }
         });
         // Событие
         matchMedia.addListener(function () {
            initSpollers(spollersArray, matchMedia);
         });
         initSpollers(spollersArray, matchMedia);
      });
   }
   // Инициализация
   function initSpollers(spollersArray, matchMedia = false) { 
      spollersArray.forEach(spollersBlock => {
         spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
         if (matchMedia.matches || !matchMedia) {
            spollersBlock.classList.add('_init');
            initSpollerBody(spollersBlock);
            spollersBlock.addEventListener('click', setSpollerAction);
         } else {
            spollersBlock.classList.remove('_init');
            initSpollerBody(spollersBlock, false);
            spollersBlock.removeEventListener('click', setSpollerAction);
         }
      });
   }
   // Работа с контентом
   function initSpollerBody(spollersBlock, hideSpollerBody = true) { 
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      if (spollerTitles.length > 0) {
         spollerTitles.forEach(spollerTitle => {
            if (hideSpollerBody) {
               spollerTitle.removeAttribute('tabindex');
               if (!spollerTitle.classList.contains('_active')) {
                  spollerTitle.nextElementSibling.hidden = true;
               }
            } else {
               spollerTitle.setAttribute('tabindex', '-1');
               spollerTitle.nextElementSibling.hidden = false;
            }
         });
      }
   }
   function setSpollerAction(e) { 
      const el = e.target;
      if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) { 
         const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
         const spollersBlock = spollerTitle.closest('[data-spollers]');
         const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
         const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
         if (!spollersBlock.querySelectorAll('._slide').length) {
            if (oneSpoller && !spollerTitle.classList.contains('_active')) { 
               hideSpollersBody(spollersBlock);
            }
            spollerTitle.classList.toggle('_active');
            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
         }
         e.preventDefault();
      }
   }
   function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
      const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
      if (spollerActiveTitle) {
         spollerActiveTitle.classList.remove('_active');
         _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
      }
   }
   // Закрытие при клике вне спойлера
	const spollersClose = document.querySelectorAll('[data-spoller-close]');
	if (spollersClose.length) {
		document.addEventListener("click", function (e) {
			const el = e.target;
			if (!el.closest('[data-spollers]')) {
				spollersClose.forEach(spollerClose => {
					const spollersBlock = spollerClose.closest('[data-spollers]');
					const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
					spollerClose.classList.remove('_active');
					_slideUp(spollerClose.nextElementSibling, spollerSpeed);
				});
			}
		});
	}
}

// Обработа медиа запросов из атрибутов 
function dataMediaQueries(array, dataSetValue) {
	// Получение объектов с медиа запросами
	const media = Array.from(array).filter(function (item, index, self) {
		if (item.dataset[dataSetValue]) {
			return item.dataset[dataSetValue].split(",")[0];
		}
	});
	// Инициализация объектов с медиа запросами
	if (media.length) {
		const breakpointsArray = [];
		media.forEach(item => {
			const params = item.dataset[dataSetValue];
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		// Получаем уникальные брейкпоинты
		let mdQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mdQueries = uniqArray(mdQueries);
		const mdQueriesArray = [];

		if (mdQueries.length) {
			// Работаем с каждым брейкпоинтом
			mdQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const itemsArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				mdQueriesArray.push({
					itemsArray,
					matchMedia
				})
			});
			return mdQueriesArray;
		}
	}
}
// Уникализация массива
function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}
// ТАБЫ
const tabs = document.querySelectorAll('[data-tabs]');
if (tabs.length > 0) {
   tabs.forEach((tabsBlock, index) => {
      tabsBlock.classList.add('_tab-init');
      tabsBlock.setAttribute('data-tabs-index', index);
      tabsBlock.addEventListener("click", setTabsAction);
      initTabs(tabsBlock);
   });

   // Получение слойлеров с медиа запросами
   let mdQueriesArray = dataMediaQueries(tabs, "tabs");
   if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
         // Событие
         mdQueriesItem.matchMedia.addEventListener("change", function () {
            setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
         });
         setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
   }
}
// Установка позиций заголовков
function setTitlePosition(tabsMediaArray, matchMedia) {
   tabsMediaArray.forEach(tabsMediaItem => {
      tabsMediaItem = tabsMediaItem.item;
      let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
      let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
      let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
      let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
      tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
      tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
      tabsContentItems.forEach((tabsContentItem, index) => {
         if (matchMedia.matches) {
            tabsContent.append(tabsTitleItems[index]);
            tabsContent.append(tabsContentItem);
            tabsMediaItem.classList.add('_tab-spoller');
         } else {
            tabsTitles.append(tabsTitleItems[index]);
            tabsMediaItem.classList.remove('_tab-spoller');
         }
      });
   });
}
// Работа с контентом
function initTabs(tabsBlock) {
   let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
   let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
   const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

   if (tabsContent.length) {
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
         tabsTitles[index].setAttribute('data-tabs-title', '');
         tabsContentItem.setAttribute('data-tabs-item', '');

         tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
      });
   }
}
function setTabsStatus(tabsBlock) {
   let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
   let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
   const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
   function isTabsAnamate(tabsBlock) {
      if (tabsBlock.hasAttribute('data-tabs-animate')) {
         return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
      }
   }
   const tabsBlockAnimate = isTabsAnamate(tabsBlock);
   if (tabsContent.length > 0) {
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
         if (tabsTitles[index].classList.contains('_tab-active')) {
            if (tabsBlockAnimate) {
               _slideDown(tabsContentItem, tabsBlockAnimate);
            } else {
               tabsContentItem.hidden = false;
            }
         } else {
            if (tabsBlockAnimate) {
               _slideUp(tabsContentItem, tabsBlockAnimate);
            } else {
               tabsContentItem.hidden = true;
            }
         }
      });
   }
}
function setTabsAction(e) {
   const el = e.target;
   if (el.closest('[data-tabs-title]')) {
      const tabTitle = el.closest('[data-tabs-title]');
      const tabsBlock = tabTitle.closest('[data-tabs]');
      if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
         let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._tab-active');
         tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
         tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_tab-active') : null;
         tabTitle.classList.add('_tab-active');
         setTabsStatus(tabsBlock);
      }
      e.preventDefault();
   }
}
