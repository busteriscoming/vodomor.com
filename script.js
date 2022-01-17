'use strict';

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let isMobile = clientHeight > clientWidth ? true : false;
// console.log(isMobile);
// console.log(clientWidth);
// console.log(document.documentElement.clientHeight);
import {
  filled,
  death,
  full,
  filled_nalivnie,
  death_nalivnie,
  full_nalivnie,
  death_timeline,
  full_timeline,
  refrestDataTime,
  refrestDataTimeText,
  estfilled,
  estfull,
  estpercent,
  nalivfilled_nalivnie,
  nalivfull_nalivnie,
  nalivpercent_nalivnie,
  allFilled,
  allFull,
  isobilnenskoe,
  zagorskoe,
  balanovskoe,
  schastlivenskoe,
  tayganskoe,
  belogorskoe,
  partizanskoe,
  simferopolskoe,
  ayanskoe,
  starokrimskoe,
  samarlinskoe,
  leninskoe,
  chernorechenskoe,
  lgovskoe,
  zelenoyarskoe,
  mejgornoe,
  kerchenskoe,
  feodosiyskoe,
  frontovoe,
} from './data/module.js';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.header__weather');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnMap = document.querySelector(`.map__vodohr`);
const mapModal = document.querySelector(`.map__vodohr--map`);
const btnScrollToSection1 = document.querySelector(`.btn--scroll-to1`);
const btnScrollToSection2 = document.querySelector(`.btn--scroll-to2`);
const btnScrollToSection3 = document.querySelector(`.btn--scroll-to3`);
const section1 = document.querySelector(`#section--1`);
const section2 = document.querySelector(`#section--2`);
const section3 = document.querySelector(`#section--3`);
const operations = document.querySelector(`.operations`);
const operationsTab1 = document.querySelector(`.operations__tab--1`);
const operationsTab2 = document.querySelector(`.operations__tab--2`);
const operationsTab3 = document.querySelector(`.operations__tab--3`);
const operationsContent1 = document.querySelector(`.operations__content--1`);
const nav = document.querySelector(`.nav`);
// const navSticky = document.querySelector(`nav.sticky`);
const allSection = document.querySelectorAll(`.section`);
const headerTitle = document.querySelector(`.header__title`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);
const header = document.querySelector(`.header`);
const fullValueNaliv = document.querySelector(`.header__vodohr--naliv-full`);
const fullValueEst = document.querySelector(`.header__vodohr--est-full`);
const sliderElement = document.querySelector(`.slider`);
const sectionSignUp = document.querySelector(`#section--sign-up`);
const footerSignUp = document.querySelector(`.footer-feedback`);

document.querySelector(`#updateTime`).innerHTML =
  refrestDataTimeText + refrestDataTime;

// ==================================================================================================================
// ==================================================================================================================

// document.getElementById('fullCap').innerHTML = `Общий объём: ${allFull
//   .toString()
//   .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. `;

// document.getElementById(
//   'fullFactCap'
// ).innerHTML = `Общий объём воды: ${allFilled
//   .toString()
//   .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
//   (allFilled * 100) /
//   allFull
// ).toFixed(1)}%) `;

const openModal = function () {
  // e.preventDefault();
  modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  // overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>
  btn.addEventListener(`click`, function () {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    } else {
      openModal();
    }
  })
);
// btnCloseModal.addEventListener('click', closeModal);
headerTitle.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openMap = function () {
  // e.preventDefault();
  mapModal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
  tabsContainer.addEventListener('click', closeMap);
  section1.addEventListener('click', closeMap);
  section3.addEventListener('click', closeMap);
  nav.addEventListener('click', closeMap);
};

const closeMap = function () {
  mapModal.classList.add('hidden');
  // overlay.classList.add('hidden');
};

btnMap.addEventListener(`click`, function () {
  if (!mapModal.classList.contains('hidden')) {
    // console.log(`clicked`);

    closeMap();
  } else {
    openMap();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !mapModal.classList.contains('hidden')) {
    closeMap();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mapModal.onmousedown = function (e) {
  var coords = getCoords(mapModal);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  mapModal.style.position = 'absolute';
  document.body.appendChild(mapModal);
  moveAt(e);

  mapModal.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    mapModal.style.left = e.pageX - shiftX + 'px';
    mapModal.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };

  mapModal.onmouseup = function () {
    document.onmousemove = null;
    mapModal.onmouseup = null;
  };
};

mapModal.ondragstart = function () {
  return false;
};

function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener('wheel', handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener('mousewheel', handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener('MozMousePixelScroll', handler);
    }
  } else {
    // IE8-
    text.attachEvent('onmousewheel', handler);
  }
}

var scale = 1;

addOnWheel(mapModal, function (e) {
  var delta = e.deltaY || e.detail || e.wheelDelta;

  // отмасштабируем при помощи CSS
  if (delta < 0) scale += 0.05;
  else scale -= 0.05;

  mapModal.style.transform =
    mapModal.style.WebkitTransform =
    mapModal.style.MsTransform =
      'scale(' + scale + ')';

  // отменим прокрутку
  e.preventDefault();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Время
var d = new Date();

var day = new Array(
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
);

var month = new Array(
  `01`,
  `02`,
  `03`,
  `04`,
  `05`,
  `06`,
  `07`,
  `08`,
  `09`,
  `10`,
  `11`,
  `12`
);

var time =
  'Сегодня ' +
  day[d.getDay()] +
  ', ' +
  d.getDate() +
  '.' +
  month[d.getMonth()] +
  '.' +
  d.getFullYear() +
  ' г.';
document.getElementById('time').innerHTML = time;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ТАЙМЕР;
let begin_date = {
  full_year: '2014',
  month: '05',
  day: '11',
  hours: '23',
  minutes: '20',
  seconds: '00',
};

function diffSubtract(date1, date2) {
  return date2 - date1;
}
let begin_date_str = `${begin_date.full_year}-${begin_date.month}-${begin_date.day}T${begin_date.hours}:${begin_date.minutes}:${begin_date.seconds}`;

// Set the date we're counting down to
// Запуск интервала таймера
let timer = setInterval(function () {
  // Получение времени сейчас
  let now = new Date();
  // Получение заданного времени
  let date = new Date(begin_date_str);
  // Вычисление разницы времени
  let ms_count = diffSubtract(date, now);

  // Иначе
  // Получаем время зависимую от разницы
  let res = new Date(ms_count);
  // Делаем строку для вывода

  let str_timer = `${
    res.getUTCFullYear() - 1970
  } лет ${res.getUTCMonth()} мес. ${
    res.getUTCDate() - 1
  } д. ${res.getUTCHours()}    ч. ${res.getUTCMinutes()} мин. ${res.getUTCSeconds()} сек.`;
  // Выводим время
  document.getElementById('timer').innerHTML = str_timer;
  // console.log(str_timer);
}, 1000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCROLLING
const s1coords = section1.getBoundingClientRect();

btnScrollToSection1.addEventListener(`click`, function (e) {
  section1.scrollIntoView({ behavior: `smooth` });
});

btnScrollToSection2.addEventListener(`click`, function (e) {
  section2.scrollIntoView({ behavior: `smooth` });
});

btnScrollToSection3.addEventListener(`click`, function (e) {
  section3.scrollIntoView({ behavior: `smooth` });
});

footerSignUp.addEventListener(`click`, function () {
  sectionSignUp.style.display = `inherit`;
  sectionSignUp.scrollIntoView({ behavior: `smooth` });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TABS SELECTING

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  clicked.classList.add(`operations__tab--active`);

  // Activate content area
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu fade animation

const changeOpacity = function (o) {
  return function (e) {
    if (e.target.classList.contains(`nav__link`)) {
      const link = e.target;
      const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
      // const logo = link.closest(`.nav`).querySelector(`img`);

      siblings.forEach(el => {
        if (el !== link) {
          el.style.opacity = o;
        }
        // logo.style.opacity = o;
      });
    }
  };
};
nav.addEventListener(`mouseover`, changeOpacity(0.3));

nav.addEventListener(`mouseout`, changeOpacity(1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sticky navigation

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add(`sticky`);
    document.querySelector(`.nav__imagelogo`).classList.add(`sticky`);
    document.querySelector(`.nav__imagelogo`).src = `img/kamnilogo_lazy.png`;
  } else {
    nav.classList.remove(`sticky`);
    document.querySelector(`.nav__imagelogo`).classList.remove(`sticky`);
    document.querySelector(`.nav__imagelogo`).src = `img/kamnilogo.png`;
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: [0, 0.2, 0.4],
  rootMargin: `-${navHeight * 0.66}px`,
});
// console.log(navHeight);
headerObserver.observe(header);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LAZY LOADING IMAGES
const imgTarget = document.querySelectorAll(`img[data-src]`);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener(`load`, function () {
    entry.target.classList.remove(`lazy-img`);
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});

imgTarget.forEach(img => imgObserver.observe(img));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REVEAL SECTIONS

// console.log(allSection);

const callback = function (entries, observer) {
  // console.log(observer);
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;
  // console.log(entry);

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(callback, {
  root: null,
  rootMargin: `0px`,
  threshold: 0.15,
});

const target = allSection.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add(`section--hidden`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Прокручивание фона

const parallaxScroll = function () {
  var parallax = document.querySelectorAll('#section--1'),
    speed = 0.3;

  window.onscroll = function () {
    [].slice.call(parallax).forEach(function (el, i) {
      var windowYOffset = -window.pageYOffset,
        elBackgrounPos = '100% ' + windowYOffset * speed + 'px';

      el.style.backgroundPosition = elBackgrounPos;
      // console.log(elBackgrounPos);
    });
  };
};

if (clientWidth > clientHeight && clientWidth > 980) parallaxScroll();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains(`nav__link`)) {
    // console.log(`link`);
    const id = e.target.getAttribute(`href`);
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const h1 = document.querySelector(`h1`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const slider = function () {
  const slides = document.querySelectorAll(`.slide`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  let curSlide = 0;
  const maxSlide = slides.length - 1;
  const dotContainer = document.querySelector(`.dots`);

  const activateDot = function (slide) {
    // console.log(slide);
    document
      .querySelectorAll(`.dots__dot`)
      .forEach(dot => dot.classList.remove(`dots__dot--active`));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    // activateDot();
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    // console.log(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    // console.log(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(curSlide);
  };
  init();

  // Event handlers
  btnLeft.addEventListener(`click`, prevSlide);
  btnRight.addEventListener(`click`, nextSlide);

  document.addEventListener(`keydown`, function (e) {
    // console.log(e);
    e.key === `ArrowRight` && nextSlide();
    e.key === `ArrowLeft` && prevSlide();
  });

  dotContainer.addEventListener(`click`, function (e) {
    if (e.target.classList.contains(`dots__dot`)) {
      const { slide } = e.target.dataset;
      // console.log(slide);
      goToSlide(slide);
      // console.log(curSlide);
      curSlide = parseInt(slide, 10);
      activateDot(slide);
    }
  });
  /**
   * Функция определения события swipe на элементе.
   * @param {Object} el - элемент DOM.
   * @param {Object} settings - объект с предварительными настройками.
   */
  var swipe = function (el, settings) {
    // настройки по умолчанию
    var settings = Object.assign(
      {},
      {
        minDist: 60, // минимальная дистанция, которую должен пройти указатель, чтобы жест считался как свайп (px)
        maxDist: 120, // максимальная дистанция, не превышая которую может пройти указатель, чтобы жест считался как свайп (px)
        maxTime: 700, // максимальное время, за которое должен быть совершен свайп (ms)
        minTime: 50, // минимальное время, за которое должен быть совершен свайп (ms)
      },
      settings
    );

    // коррекция времени при ошибочных значениях
    if (settings.maxTime < settings.minTime)
      settings.maxTime = settings.minTime + 500;
    if (settings.maxTime < 100 || settings.minTime < 50) {
      settings.maxTime = 700;
      settings.minTime = 50;
    }

    var dir, // направление свайпа (horizontal, vertical)
      swipeType, // тип свайпа (up, down, left, right)
      dist, // дистанция, пройденная указателем
      isMouse = false, // поддержка мыши (не используется для тач-событий)
      isMouseDown = false, // указание на активное нажатие мыши (не используется для тач-событий)
      startX = 0, // начало координат по оси X (pageX)
      distX = 0, // дистанция, пройденная указателем по оси X
      startY = 0, // начало координат по оси Y (pageY)
      distY = 0, // дистанция, пройденная указателем по оси Y
      startTime = 0, // время начала касания
      support = {
        // поддерживаемые браузером типы событий
        pointer: !!(
          'PointerEvent' in window || 'msPointerEnabled' in window.navigator
        ),
        touch: !!(
          typeof window.orientation !== 'undefined' ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) ||
          'ontouchstart' in window ||
          navigator.msMaxTouchPoints ||
          'maxTouchPoints' in window.navigator > 1 ||
          'msMaxTouchPoints' in window.navigator > 1
        ),
      };

    /**
     * Опредление доступных в браузере событий: pointer, touch и mouse.
     * @returns {Object} - возвращает объект с доступными событиями.
     */
    var getSupportedEvents = function () {
      switch (true) {
        case support.pointer:
          events = {
            type: 'pointer',
            start: 'PointerDown',
            move: 'PointerMove',
            end: 'PointerUp',
            cancel: 'PointerCancel',
            leave: 'PointerLeave',
          };
          // добавление префиксов для IE10
          var ie10 =
            window.navigator.msPointerEnabled &&
            Function('/*@cc_on return document.documentMode===10@*/')();
          for (var value in events) {
            if (value === 'type') continue;
            events[value] = ie10
              ? 'MS' + events[value]
              : events[value].toLowerCase();
          }
          break;
        case support.touch:
          events = {
            type: 'touch',
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            cancel: 'touchcancel',
          };
          break;
        default:
          events = {
            type: 'mouse',
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            leave: 'mouseleave',
          };
          break;
      }
      return events;
    };

    /**
     * Объединение событий mouse/pointer и touch.
     * @param e {Event} - принимает в качестве аргумента событие.
     * @returns {TouchList|Event} - возвращает либо TouchList, либо оставляет событие без изменения.
     */
    var eventsUnify = function (e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    };

    /**
     * Обрабочик начала касания указателем.
     * @param e {Event} - получает событие.
     */
    var checkStart = function (e) {
      var event = eventsUnify(e);
      if (
        support.touch &&
        typeof e.touches !== 'undefined' &&
        e.touches.length !== 1
      )
        return; // игнорирование касания несколькими пальцами
      dir = 'none';
      swipeType = 'none';
      dist = 0;
      startX = event.pageX;
      startY = event.pageY;
      startTime = new Date().getTime();
      if (isMouse) isMouseDown = false; // поддержка мыши
    };

    /**
     * Обработчик движения указателя.
     * @param e {Event} - получает событие.
     */
    var checkMove = function (e) {
      if (isMouse && !isMouseDown) return; // выход из функции, если мышь перестала быть активна во время движения
      var event = eventsUnify(e);
      distX = event.pageX - startX;
      distY = event.pageY - startY;
      if (Math.abs(distX) > Math.abs(distY)) dir = distX < 0 ? 'left' : 'right';
      else dir = distY < 0 ? 'up' : 'down';
    };

    /**
     * Обработчик окончания касания указателем.
     * @param e {Event} - получает событие.
     */
    var checkEnd = function (e) {
      if (isMouse && !isMouseDown) {
        // выход из функции и сброс проверки нажатия мыши
        isMouseDown = false;
        return;
      }
      var endTime = new Date().getTime();
      var time = endTime - startTime;
      if (time >= settings.minTime && time <= settings.maxTime) {
        // проверка времени жеста
        if (
          Math.abs(distX) >= settings.minDist &&
          Math.abs(distY) <= settings.maxDist
        ) {
          swipeType = dir; // опредление типа свайпа как "left" или "right"
        } else if (
          Math.abs(distY) >= settings.minDist &&
          Math.abs(distX) <= settings.maxDist
        ) {
          swipeType = dir; // опредление типа свайпа как "top" или "down"
        }
      }
      dist =
        dir === 'left' || dir === 'right' ? Math.abs(distX) : Math.abs(distY); // опредление пройденной указателем дистанции

      // генерация кастомного события swipe
      if (swipeType !== 'none' && dist >= settings.minDist) {
        var swipeEvent = new CustomEvent('swipe', {
          bubbles: true,
          cancelable: true,
          detail: {
            full: e, // полное событие Event
            dir: swipeType, // направление свайпа
            dist: dist, // дистанция свайпа
            time: time, // время, потраченное на свайп
          },
        });
        el.dispatchEvent(swipeEvent);
      }
    };

    // добавление поддерживаемых событий
    var events = getSupportedEvents();

    // проверка наличия мыши
    if ((support.pointer && !support.touch) || events.type === 'mouse')
      isMouse = true;

    // добавление обработчиков на элемент
    el.addEventListener(events.start, checkStart);
    el.addEventListener(events.move, checkMove);
    el.addEventListener(events.end, checkEnd);
    if (support.pointer && support.touch) {
      el.addEventListener('lostpointercapture', checkEnd);
    }
    // элемент

    // обработка свайпов
    sliderElement.addEventListener('swipe', function (e) {
      if (e.detail.dir === `left`) nextSlide();
      if (e.detail.dir === `right`) prevSlide();
    });
  };
  // вызов функции swipe с предварительными настройками
  swipe(sliderElement, {
    maxTime: 5000, // 1000
    minTime: 10, // 100
    maxDist: 750, // 250
    minDist: 10, // 40
  });
};
slider();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var capacity_est = estfull;
var value_est = estfilled;
var deathValue_est = 50000;
var circleSize_est = 0.85;

var component_est = am4core.create('est_stoka', am4core.Container);
component_est.width = am4core.percent(100);
component_est.height = am4core.percent(100);

var chartContainer_est = component_est.createChild(am4core.Container);
chartContainer_est.x = am4core.percent(50);
chartContainer_est.y = am4core.percent(50);

var circle_est = chartContainer_est.createChild(am4core.Circle);
circle_est.fill = am4core.color('#dadada');

var circleMask_est = chartContainer_est.createChild(am4core.Circle);

var waves_est = chartContainer_est.createChild(am4core.WavedRectangle);
waves_est.fill =
  value_est > deathValue_est
    ? am4core.color('#34a4eb')
    : am4core.color('orange');
waves_est.mask = circleMask_est;
waves_est.horizontalCenter = 'middle';
waves_est.waveHeight = 0;
waves_est.waveLength = clientWidth > 900 ? 200 : 0;
waves_est.y = clientWidth > 900 ? 500 : 300;
circleMask_est.y = clientWidth > 900 ? -500 : -300;

component_est.events.on('maxsizechanged', function () {
  var smallerSize_est = Math.min(
    component_est.pixelWidth,
    component_est.pixelHeight
  );
  var radius_est = (smallerSize_est * circleSize_est) / 2;

  circle_est.radius = radius_est;
  circleMask_est.radius = radius_est;
  waves_est.height = smallerSize_est;
  waves_est.width = Math.max(
    component_est.pixelWidth,
    component_est.pixelHeight
  );

  //capacityLabel_est.y = radius;

  var labelRadius_est = radius_est + 40; //  Изгиб надписи

  capacityLabel_est.path =
    am4core.path.moveTo({ x: -labelRadius_est, y: 0 }) +
    am4core.path.arcToPoint(
      { x: labelRadius_est, y: 20 },
      labelRadius_est,
      labelRadius_est
    );
  capacityLabel_est.locationOnPath = 0.5;

  // window.addEventListener(`load`, function () {
  //   setValue_est(value_est);
  // });
  document.addEventListener(`DOMContentLoaded`, setValue_est(value_est));
  // setValue_est(deathValue_est);
});

function setValue_est(value_est) {
  var y =
    -circle_est.radius + // Меняет уровень воды
    waves_est.waveHeight +
    (1 - value_est / capacity_est) * circle_est.pixelRadius * 2;
  waves_est.animate(
    [
      { property: 'y', to: y },
      { property: 'waveHeight', to: 10, from: 15 },

      { property: 'x', from: -50, to: 0 },
    ],
    10000,
    am4core.ease.elasticOut
  );
  circleMask_est.animate(
    [
      { property: 'y', to: -y },
      { property: 'x', from: 50, to: 0 },
    ],
    10000,
    am4core.ease.elasticOut
  );
}

var label_est = chartContainer_est.createChild(am4core.Label);
var formattedValue = component_est.numberFormatter.format(
  value_est,
  '#,###.###'
);
// formattedValue = formattedValue.toUpperCase();

label_est.text = `[bold] Всего воды:\n ${formattedValue} млн. м³ (${estpercent}%)`;
label_est.fill = am4core.color('black');
label_est.fontSize = clientWidth <= 980 ? 8 : (24 * clientWidth) / 1440;
label_est.horizontalCenter = 'middle';
label_est.textAlign = 'middle';

var capacityLabel_est = chartContainer_est.createChild(am4core.Label);

if (!isMobile && clientWidth > 980) {
  var formattedCapacity_est = component_est.numberFormatter
    .format(capacity_est, '#,###')
    .toUpperCase();

  capacityLabel_est.text =
    'Общий объём водохранилищ ' + formattedCapacity_est + ' млн. м³';
  capacityLabel_est.fill = am4core.color('#fff');
  capacityLabel_est.fontSize = (22 * clientWidth) / 1440;
  capacityLabel_est.textAlign = 'middle';
  capacityLabel_est.padding(0, 0, 25, 0);
} else {
  fullValueEst.style.display = `initial`;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////

var capacity_naliv = nalivfull_nalivnie;
var value_naliv = nalivfilled_nalivnie;
var deathValue_naliv = 5;
var circleSize_naliv = 0.8;

var component_naliv = am4core.create('naliv', am4core.Container);
component_naliv.width = am4core.percent(100);
component_naliv.height = am4core.percent(100);

var chartContainer_naliv = component_naliv.createChild(am4core.Container);
chartContainer_naliv.x = am4core.percent(50);
chartContainer_naliv.y = am4core.percent(50);

var circle_naliv = chartContainer_naliv.createChild(am4core.Circle);
circle_naliv.fill = am4core.color('#dadada');

var circleMask_naliv = chartContainer_naliv.createChild(am4core.Circle);

var waves_naliv = chartContainer_naliv.createChild(am4core.WavedRectangle);
waves_naliv.fill =
  value_naliv > deathValue_naliv
    ? am4core.color('#34a4eb')
    : am4core.color('orange');
waves_naliv.mask = circleMask_naliv;
waves_naliv.horizontalCenter = 'middle';
waves_naliv.waveHeight = 0;
waves_naliv.waveLength = clientWidth > 900 ? 200 : 0;
waves_naliv.y = 500;
circleMask_naliv.y = -500;

component_naliv.events.on('maxsizechanged', function () {
  var smallerSize_naliv = Math.min(
    component_naliv.pixelWidth,
    component_naliv.pixelHeight
  );
  var radius_naliv = (smallerSize_naliv * circleSize_naliv) / 2;

  circle_naliv.radius = radius_naliv;
  circleMask_naliv.radius = radius_naliv;
  waves_naliv.height = smallerSize_naliv;
  waves_naliv.width = Math.max(
    component_naliv.pixelWidth,
    component_naliv.pixelHeight
  );

  //capacityLabel_naliv.y = radius;

  var labelRadius_naliv = radius_naliv + 40; //  Изгиб надписи

  capacityLabel_naliv.path =
    am4core.path.moveTo({ x: -labelRadius_naliv, y: 0 }) +
    am4core.path.arcToPoint(
      { x: labelRadius_naliv, y: 20 },
      labelRadius_naliv,
      labelRadius_naliv
    );
  capacityLabel_naliv.locationOnPath = 0.5;

  // window.addEventListener(`load`, function () {
  //   setValue_naliv(value_naliv);
  // });
  document.addEventListener(`DOMContentLoaded`, setValue_naliv(value_naliv));

  // setValue_naliv(deathValue_naliv);
});

function setValue_naliv(value_naliv) {
  var y =
    -circle_naliv.radius + // Меняет уровень воды
    waves_naliv.waveHeight +
    (1 - value_naliv / capacity_naliv) * circle_naliv.pixelRadius * 2;
  waves_naliv.animate(
    [
      { property: 'y', to: y },
      { property: 'waveHeight', to: 10, from: 15 },

      { property: 'x', from: -50, to: 0 },
    ],
    8000,
    am4core.ease.elasticOut
  );
  circleMask_naliv.animate(
    [
      { property: 'y', to: -y },
      { property: 'x', from: 50, to: 0 },
    ],
    8000,
    am4core.ease.elasticOut
  );
}

var label_naliv = chartContainer_naliv.createChild(am4core.Label);
var formattedValue_naliv = component_naliv.numberFormatter.format(
  value_naliv,
  '#,###.###'
);
// formattedValue_naliv = formattedValue_naliv.toUpperCase();

label_naliv.text = `[bold]Всего воды:\n${formattedValue_naliv} млн. м³ [bold](${nalivpercent_nalivnie}%)`;
label_naliv.fill = am4core.color('black');
label_naliv.fontSize = clientWidth <= 980 ? 8 : (24 * clientWidth) / 1440;
label_naliv.horizontalCenter = 'middle';
label_naliv.textAlign = 'middle';

var capacityLabel_naliv = chartContainer_naliv.createChild(am4core.Label);
if (!isMobile && clientWidth > 980) {
  var formattedCapacity_naliv = component_naliv.numberFormatter
    .format(capacity_naliv, '#,###')
    .toUpperCase();

  capacityLabel_naliv.text =
    'Общий объём водохранилищ ' + formattedCapacity_naliv + ' млн. м³';
  capacityLabel_naliv.fill = am4core.color('#fff');
  capacityLabel_naliv.fontSize = (22 * clientWidth) / 1440;
  capacityLabel_naliv.textAlign = 'middle';
  capacityLabel_naliv.padding(0, 0, 25, 0);
} else {
  fullValueNaliv.style.display = `initial`;
}

// document.addEventListener(`DOMContentLoaded`, function (e) {
//   console.log(`HTML parsed and DOM tree built!`, e);
// });

function am4themes_myTheme(target) {
  if (target instanceof am4core.InterfaceColorSet) {
    target.setFor('secondaryButton', am4core.color('#09ca36').lighten(-0.2));
    target.setFor(
      'secondaryButtonHover',
      am4core.color('#09ca36').lighten(-0.5)
    );
    target.setFor(
      'secondaryButtonDown',
      am4core.color('#09ca36').lighten(-0.4)
    );
    target.setFor(
      'secondaryButtonActive',
      am4core.color('#4bbb7d').lighten(-0.2)
    );
    target.setFor('secondaryButtonText', am4core.color('#FFFFFF'));
    target.setFor('secondaryButtonStroke', am4core.color('#467B88'));
    target.setFor('grid', am4core.color('white'));
    target.setFor('text', am4core.color('white'));
    // target.setFor('background', am4core.color('black'));
    target.setFor('alternativeBackground', am4core.color('black'));
  }
}

am4core.useTheme(am4themes_myTheme);

am4core.useTheme(am4themes_animated);
let createChart2Main = function () {
  var chart = am4core.create('chartdiv', am4charts.XYChart);
  chart.exporting.menu = new am4core.ExportMenu();
  var annotation = chart.plugins.push(new am4plugins_annotation.Annotation());
  annotation.useMenu = true;

  chart.hiddenState.properties.opacity = 0;
  chart.padding(0, 0, 0, 10);
  chart.plotContainer.mouseOptions.sensitivity = 0.5;
  chart.fill = `white`;
  am4core.color('#f00');
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.maxTooltipDistance = -1;
  // ====================================================================================================================

  let textLabel = chart.plotContainer.createChild(am4core.Label);
  textLabel.text = `Последнее обновление данных\n${refrestDataTime}`;
  textLabel.y = 50;
  textLabel.fill = `white`;

  textLabel.x = am4core.percent(100);
  textLabel.horizontalCenter = 'right';
  textLabel.zIndex = 100;
  textLabel.fillOpacity = 0.9;
  // ====================================================================================================================
  let textLabel2 = chart.plotContainer.createChild(am4core.Label);
  textLabel2.text = 'Взято с сайта: \n www.vodomor.com';
  textLabel2.y = 30;
  textLabel2.x = am4core.percent(1);
  textLabel2.fill = `white`;
  textLabel2.zIndex = 100;
  textLabel2.fillOpacity = 0.4;
  // ====================================================================================================================
  // ====================================================================================================================
  const calculate = function (vodohrName, num) {
    let voda = {
      vodohr: vodohrName,
      deathCapacity: filled[num] < death[num] ? filled[num] : death[num],
      factCapacity: filled[num] > death[num] ? filled[num] - death[num] : 0,
      emptyCapacity: full[num] - filled[num],
      filledCapacity:
        filled[num] >= 1000
          ? filled[num].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
            ` млн. куб. м.`
          : filled[num] + ` тыс. куб. м.`,
      totalCapacity: full[num],
      percentageDeath:
        filled[num] < death[num]
          ? +((filled[num] * 100) / full[num]).toFixed(1)
          : +((death[num] * 100) / full[num]).toFixed(1),
      percentageFact: +(((filled[num] - death[num]) * 100) / full[num]).toFixed(
        // Полезный объём
        1
      ),
      percentageEmpty: +(((full[num] - filled[num]) * 100) / full[num]).toFixed(
        1
      ),
      percetageFilled: +((filled[num] * 100) / full[num]).toFixed(1), // Всего воды
      trueDeathCapacity: death[num],
    };
    return voda;
  };

  chart.data = [
    calculate(`Изобильненское`, 0),
    calculate(`\nЗагорское`, 1),
    calculate(`Балановское`, 2),
    calculate(`\nСчастливенское`, 3),
    calculate(`Тайганское`, 4),
    calculate(`\nБелогорское`, 5),
    calculate(`Партизанское`, 6),
    calculate(`\nСимферопольское`, 7),
    calculate(`Аянское`, 8),
    calculate(`\nСтарокрымское(16.04)`, 9),
    calculate(`Чернореченское`, 10),
    calculate(`\nАльминское`, 11),
    calculate(`Бахчисарайское`, 12),
    calculate(`\nКутузовское`, 13),
    calculate(`Льговское`, 14),
  ];

  let title1 = chart.titles.create();
  title1.text = `Общий объём: ${estfull
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )} млн. куб. м. \n Общий объём воды: ${estfilled
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
    (estfilled * 100) /
    estfull
  ).toFixed(1)}%) `;
  title1.fontSize = clientWidth <= 900 ? 10 : 16;
  title1.tooltipText = `[bold]Данные от ${refrestDataTime}`;
  title1.padding(0, 0, 0, 0);
  title1.fill = `white`; // Цвет названия графика
  title1.textAlign = 'middle';

  let title2 = chart.titles.create();
  title2.text = `[bold]Водохранилища естественного стока`;
  title2.fontSize = clientWidth <= 900 ? 12 : 20;
  title2.tooltipText = '[bold]Наполняются естественными источниками';
  title2.padding(0, 0, 0, 0);
  title2.fill = `white`; // Цвет названия графика
  title2.textAlign = 'middle';

  // chart.tooltip.label.maxWidth = 200;
  chart.tooltip.label.wrap = true;
  chart.tooltip.label.fill = am4core.color('white'); // Цвет окошка на названии
  chart.tooltip.label.fontSize = 16;
  chart.tooltip.label.textAlign = 'middle';
  chart.tooltip.getFillFromObject = true;
  chart.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

  chart.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
  chart.tooltip.strokeFill = `red`;

  let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
  xAxes1.dataFields.category = 'vodohr';
  xAxes1.title.text = '[bold]Водохранилища (дата последних данных)';
  xAxes1.renderer.grid.template.location = 0;
  xAxes1.renderer.minGridDistance = 20;

  xAxes1.showOnInit = false;
  chart.events.on('ready', function () {
    xAxes1.start = 0;
    xAxes1.end = 0.8;
    xAxes1.keepSelection = true;
  });

  // ====================================================================================================================

  let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
  yAxes1.renderer.maxLabelPosition = 0.98;
  yAxes1.title.text = 'Объём (млн куб. м.)';

  let series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.name = 'Мёртвый объём (фактический)';

  let columnsTemplate1 = series1.columns.template;

  columnsTemplate1.strokeOpacity = 0;
  columnsTemplate1.fillOpacity = 0.95;
  series1.tooltip.getStrokeFromObject = true;
  series1.tooltip.pointerOrientation = 'horizontal';
  series1.columns.template.propertyFields.showTooltipOn = 'tooltip';
  // series1.columns.template.hoverOnFocus = true; // Показывает подскаску при нажатии TAB
  // series1.tooltip.getFillFromObject = false; // Отменяет наследование цвета для окошка
  // series1.tooltip.label.propertyFields.fill = "color";
  // series1.tooltip.background.propertyFields.stroke = "color";
  // series1.tooltip.pointerOrientation = 'vertical';

  // series1.tooltip.dx = 40;
  // series1.columns.template.tooltipX = am4core.percent(100); // Ставит окошко снизу справа от столбца
  // series1.columns.template.tooltipY = am4core.percent(100); // Но только без курсора

  series1.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)\n
[bold]{name} : [bold]{valueY} [bold]({percentageDeath} %)`;
  // series1.tooltip.contentAlign = `center`;
  columnsTemplate1.tooltipY = 0;

  series1.stacked = true;

  series1.dataFields.categoryX = 'vodohr';
  series1.dataFields.valueY = 'deathCapacity';
  columnsTemplate1.fill = am4core.color('#4b5320');
  // ? am4core.color("#4b5320") : am4core.color("red"); // fill
  series1.sequencedInterpolation = true;
  series1.sequencedInterpolationDelay = 100;

  var segmentFactDeath = series1.columns.template;
  segmentFactDeath.interactionsEnabled = true;

  var hoverStateFactDeath = segmentFactDeath.states.create('hover');
  hoverStateFactDeath.properties.fillOpacity = 1;
  hoverStateFactDeath.properties.fill = am4core.color('#4b5320').lighten(-0.3); // fill

  let series2 = chart.series.push(new am4charts.ColumnSeries());

  let columnsTemplate2 = series2.columns.template;
  series2.name = 'Полезный объём';
  series2.columns.template.strokeOpacity = 0;
  columnsTemplate2.fillOpacity = 0.8;

  series2.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)

[bold]{name} : [bold]{valueY} [bold]({percentageFact} %)`;
  series2.stacked = true;

  // series2.columns.template.tooltipX = am4core.percent(100);
  // series2.columns.template.tooltipY = am4core.percent(100);

  series2.dataFields.categoryX = 'vodohr';
  series2.dataFields.valueY = 'factCapacity';
  columnsTemplate2.fill = am4core.color('#3525fe'); // fill
  series2.sequencedInterpolation = true;
  series2.sequencedInterpolationDelay = 100;

  var segmentFact = series2.columns.template;
  segmentFact.interactionsEnabled = true;

  var hoverStateFact = segmentFact.states.create('hover');
  hoverStateFact.properties.fillOpacity = 1;
  hoverStateFact.properties.fill = am4core.color('#3525fe').lighten(-0.5); // fill

  let series3 = chart.series.push(new am4charts.ColumnSeries());

  let columnsTemplate3 = series3.columns.template;
  series3.name = 'Возможное наполнение';
  columnsTemplate3.strokeOpacity = 0;
  columnsTemplate3.fillOpacity = 0.6;

  series3.tooltipText = `[bold]{categoryX} водохранилище:[/]
Общий объём: {totalCapacity} млн куб. м.
Всего воды: {filledCapacity} ({percetageFilled}%)

[bold]{name} : [bold]{valueY} [bold]({percentageEmpty} %)`;
  series3.stacked = true;

  // series3.columns.template.tooltipX = am4core.percent(100);
  // series3.columns.template.tooltipY = am4core.percent(100);

  series3.dataFields.categoryX = 'vodohr';
  series3.dataFields.valueY = 'emptyCapacity';
  columnsTemplate3.fill = am4core.color('#bcbcbc'); // fill

  series3.sequencedInterpolation = true;
  series3.sequencedInterpolationDelay = 100;

  var segmentCap = series3.columns.template;
  segmentCap.interactionsEnabled = true;

  var hoverStateCap = segmentCap.states.create('hover');
  hoverStateCap.properties.fillOpacity = 1;
  hoverStateCap.properties.fill = am4core.color('#bcbcbc').lighten(+0.5); // fill

  let series4 = chart.series.push(new am4charts.StepLineSeries());

  series4.dataFields.valueY = 'trueDeathCapacity';
  series4.dataFields.categoryX = 'vodohr';
  series4.name = 'Мёртвый объём (расчётный)';
  series4.tooltipText = '{name}: [bold]{valueY}[/]';
  series4.strokeWidth = 1;
  series4.stroke = am4core.color('#ff0000');
  series4.strokeOpacity = 0.8;

  series4.fill = '#bcbcbc';

  series4.noRisers = true;
  series4.sequencedInterpolation = true;
  series4.sequencedInterpolationDelay = 80;

  series4.yAxis = yAxes1;

  series4.tensionX = 0.6;
  series4.tensionY = 1;

  var segmentDeath = series4.segments.template;
  segmentDeath.interactionsEnabled = true;

  var hoverStateDeath = segmentDeath.states.create('hover');
  hoverStateDeath.properties.strokeWidth = 3;

  // ====================================================================================================================

  chart.legend = new am4charts.Legend();
  chart.legend.fill = `white`;
  if (clientWidth <= 900) {
    var legendContainer = am4core.create('legenddiv', am4core.Container);
    legendContainer.width = am4core.percent(100);
    legendContainer.height = am4core.percent(100);
    chart.legend.parent = legendContainer;

    chart.legend.markers.template.width = 15;
    chart.legend.markers.template.height = 15;
  }
  chart.legend.scrollable = true;
  if (clientHeight < 300) chart.legend.dispose();

  // chart.legend.dispose();
  // ====================================================================================================================

  var scrollbarX = new am4charts.XYChartScrollbar();
  var scrollbarY = new am4charts.XYChartScrollbar();
  chart.scrollbarY = scrollbarY;
  chart.scrollbarY.minWidth = 15;

  // ====================================================================================================================

  // var columnHoverState = columnsTemplate1.create("hover");
  // columnHoverState.properties.fillOpacity = 1;
  chart.scrollbarX = scrollbarX;
  chart.scrollbarX.minHeight = 15;
  // scrollbarX.series.push(series1);

  scrollbarX.scrollbarChart.seriesContainer.hide();
  // ====================================================================================================================
};

am4core.useTheme(am4themes_animated);

const createChart3Main = function () {
  var chart_nalivnie = am4core.create('chartdiv2', am4charts.XYChart);
  chart_nalivnie.exporting.menu = new am4core.ExportMenu();
  var annotation_nalivnie = chart_nalivnie.plugins.push(
    new am4plugins_annotation.Annotation()
  );
  annotation_nalivnie.useMenu = true;
  chart_nalivnie.hiddenState.properties.opacity = 0;
  chart_nalivnie.padding(0, 10, 0, 10);
  chart_nalivnie.plotContainer.mouseOptions.sensitivity = 0.5;

  chart_nalivnie.cursor = new am4charts.XYCursor();
  chart_nalivnie.cursor.maxTooltipDistance = -1;
  // ====================================================================================================================

  let textLabel_nalivnie = chart_nalivnie.plotContainer.createChild(
    am4core.Label
  );
  textLabel_nalivnie.text = `Последнее обновление данных\n${refrestDataTime}`;
  textLabel_nalivnie.y = 50;
  textLabel_nalivnie.x = am4core.percent(100);
  textLabel_nalivnie.horizontalCenter = 'right';
  textLabel_nalivnie.zIndex = 100;
  textLabel_nalivnie.fillOpacity = 0.9;
  // ====================================================================================================================

  let textLabel2_nalivnie = chart_nalivnie.plotContainer.createChild(
    am4core.Label
  );
  textLabel2_nalivnie.text = 'Взято с сайта: \n www.vodomor.com';
  textLabel2_nalivnie.y = 30;
  textLabel2_nalivnie.x = am4core.percent(1);
  textLabel2_nalivnie.zIndex = 100;
  textLabel2_nalivnie.fillOpacity = 0.4;
  // ====================================================================================================================

  // ====================================================================================================================
  const calculate_nalivnie = function (vodohrName, num) {
    let voda_nalivnie = {
      vodohr_nalivnie: vodohrName,
      deathCapacity_nalivnie:
        filled_nalivnie[num] < death_nalivnie[num]
          ? filled_nalivnie[num]
          : death_nalivnie[num],
      factCapacity_nalivnie:
        filled_nalivnie[num] > death_nalivnie[num]
          ? filled_nalivnie[num] - death_nalivnie[num]
          : 0,
      emptyCapacity_nalivnie: full_nalivnie[num] - filled_nalivnie[num],
      filledCapacity_nalivnie:
        filled_nalivnie[num] >= 1000
          ? filled_nalivnie[num]
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ` млн. куб. м.`
          : filled_nalivnie[num] + ` тыс. куб. м.`,
      totalCapacity_nalivnie: full_nalivnie[num],
      percentageDeath_nalivnie:
        filled_nalivnie[num] < death_nalivnie[num]
          ? +((filled_nalivnie[num] * 100) / full_nalivnie[num]).toFixed(1)
          : +((death_nalivnie[num] * 100) / full_nalivnie[num]).toFixed(1),
      percentageFact_nalivnie: +(
        ((filled_nalivnie[num] - death_nalivnie[num]) * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      percentageEmpty_nalivnie: +(
        ((full_nalivnie[num] - filled_nalivnie[num]) * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      percetageFilled_nalivnie: +(
        (filled_nalivnie[num] * 100) /
        full_nalivnie[num]
      ).toFixed(1),
      trueDeathCapacity_nalivnie: death_nalivnie[num],
    };
    return voda_nalivnie;
  };

  chart_nalivnie.data = [
    calculate_nalivnie(`Зеленоярское  (2018)`, 0),
    calculate_nalivnie(`\nМежгорное   (2019)`, 1),
    calculate_nalivnie(`Самарлинское   `, 2),
    calculate_nalivnie(`\nКерченское   (2018)`, 3),
    calculate_nalivnie(`Сокольское   (old data)`, 4),
    calculate_nalivnie(`\nФеодосийское   (2018)`, 5),
    calculate_nalivnie(`Фронтовое  `, 6),
    calculate_nalivnie(`\nЛенинское  `, 7),
  ];
  // ====================================================================================================================

  let title1_nalivnie = chart_nalivnie.titles.create();
  title1_nalivnie.text = `Общий объём: ${nalivfull_nalivnie
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )} млн. куб. м. \n Общий объём воды: ${nalivfilled_nalivnie
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
    (nalivfilled_nalivnie * 100) /
    nalivfull_nalivnie
  ).toFixed(1)}%) `;
  title1_nalivnie.fontSize = clientWidth <= 900 ? 10 : 16;
  title1_nalivnie.tooltipText = `[bold]Данные от ${refrestDataTime}`;
  title1_nalivnie.padding(0, 0, 10, 20);
  title1_nalivnie.fill = `white`; // Цвет названия графика
  title1_nalivnie.textAlign = 'middle';

  let title2_nalivnie = chart_nalivnie.titles.create();
  title2_nalivnie.text = `[bold]Водоналивные водохранилища`;
  title2_nalivnie.fontSize = clientWidth <= 900 ? 12 : 20;
  title2_nalivnie.tooltipText =
    '[bold]Наполняются водми Северо-Крымского канала';
  title2_nalivnie.padding(0, 0, 0, 20);
  title2_nalivnie.fill = `white`; // Цвет названия графика
  title2_nalivnie.textAlign = 'middle';

  // chart_nalivnie.tooltip.label.maxWidth = 200;
  chart_nalivnie.tooltip.label.wrap = true;
  chart_nalivnie.tooltip.label.fill = am4core.color('black'); // Цвет окошка на названии
  chart_nalivnie.tooltip.label.fontSize = 16;
  chart_nalivnie.tooltip.label.textAlign = 'middle';
  chart_nalivnie.tooltip.getFillFromObject = true;
  chart_nalivnie.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

  chart_nalivnie.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
  chart_nalivnie.tooltip.strokeFill = `red`;

  let xAxes1_nalivnie = chart_nalivnie.xAxes.push(new am4charts.CategoryAxis());
  xAxes1_nalivnie.dataFields.category = 'vodohr_nalivnie';
  xAxes1_nalivnie.title.text = '[bold]Водохранилища (дата последних данных)';
  xAxes1_nalivnie.renderer.grid.template.location = 0;
  xAxes1_nalivnie.renderer.minGridDistance = 20;

  xAxes1_nalivnie.showOnInit = false;
  chart_nalivnie.events.on('ready', function () {
    xAxes1_nalivnie.start = 0;
    xAxes1_nalivnie.end = 1;
    xAxes1_nalivnie.keepSelection = true;
  });

  let yAxes1_nalivnie = chart_nalivnie.yAxes.push(new am4charts.ValueAxis());
  yAxes1_nalivnie.renderer.maxLabelPosition = 0.98;
  yAxes1_nalivnie.title.text = 'Объём (млн куб. м.)';

  let series1_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );
  series1_nalivnie.name = 'Мёртвый объём (фактический)';

  let columnsTemplate1_nalivnie = series1_nalivnie.columns.template;

  columnsTemplate1_nalivnie.strokeOpacity = 0;
  columnsTemplate1_nalivnie.fillOpacity = 0.95;
  series1_nalivnie.tooltip.getStrokeFromObject = true;
  series1_nalivnie.tooltip.pointerOrientation = 'horizontal';
  series1_nalivnie.columns.template.propertyFields.showTooltipOn = 'tooltip';
  // series1_nalivnie.columns.template.hoverOnFocus = true; // Показывает подскаску при нажатии TAB
  // series1_nalivnie.tooltip.getFillFromObject = false; // Отменяет наследование цвета для окошка
  // series1_nalivnie.tooltip.label.propertyFields.fill = "color";
  // series1_nalivnie.tooltip.background.propertyFields.stroke = "color";
  // series1_nalivnie.tooltip.pointerOrientation = "down";

  // series1_nalivnie.tooltip.dx = 40;
  // series1_nalivnie.columns.template.tooltipX = am4core.percent(100);// Ставит окошко снизу справа от столбца
  // series1_nalivnie.columns.template.tooltipY = am4core.percent(100); // Но только без курсора

  series1_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageDeath_nalivnie} %)`;
  columnsTemplate1_nalivnie.tooltipY = 0;

  series1_nalivnie.stacked = true;
  // series1_nalivnie.tooltip.label.textAlign = 'middle';
  // series1_nalivnie.tooltip.label.textValign = 'middle';

  series1_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series1_nalivnie.dataFields.valueY = 'deathCapacity_nalivnie';
  columnsTemplate1_nalivnie.fill = am4core.color('#4b5320');
  // ? am4core.color("#4b5320") : am4core.color("red"); // fill
  series1_nalivnie.sequencedInterpolation = true;
  series1_nalivnie.sequencedInterpolationDelay = 100;

  var segmentFactDeath_nalivnie = series1_nalivnie.columns.template;
  segmentFactDeath_nalivnie.interactionsEnabled = true;

  var hoverStateFactDeath_nalivnie =
    segmentFactDeath_nalivnie.states.create('hover');
  hoverStateFactDeath_nalivnie.properties.fillOpacity = 1;
  hoverStateFactDeath_nalivnie.properties.fill = am4core
    .color('#4b5320')
    .lighten(-0.3); // fill

  let series2_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );

  let columnsTemplate2_nalivnie = series2_nalivnie.columns.template;
  series2_nalivnie.name = 'Полезный объём';
  series2_nalivnie.columns.template.strokeOpacity = 0;
  columnsTemplate2_nalivnie.fillOpacity = 0.95;

  series2_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageFact_nalivnie} %)`;
  series2_nalivnie.stacked = true;
  // series2_nalivnie.tooltip.label.textAlign = 'middle';
  // series2_nalivnie.tooltip.label.textValign = 'middle';
  // series2_nalivnie.columns.template.tooltipX = am4core.percent(100);
  // series2_nalivnie.columns.template.tooltipY = am4core.percent(100);

  series2_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series2_nalivnie.dataFields.valueY = 'factCapacity_nalivnie';
  columnsTemplate2_nalivnie.fill = am4core.color('#3525fe'); // fill
  series2_nalivnie.sequencedInterpolation = true;
  series2_nalivnie.sequencedInterpolationDelay = 100;

  var segmentFact_nalivnie = series2_nalivnie.columns.template;
  segmentFact_nalivnie.interactionsEnabled = true;

  var hoverStateFact_nalivnie = segmentFact_nalivnie.states.create('hover');
  hoverStateFact_nalivnie.properties.fillOpacity = 1;
  hoverStateFact_nalivnie.properties.fill = am4core
    .color('#3525fe')
    .lighten(-0.5); // fill

  let series3_nalivnie = chart_nalivnie.series.push(
    new am4charts.ColumnSeries()
  );

  let columnsTemplate3_nalivnie = series3_nalivnie.columns.template;
  series3_nalivnie.name = 'Возможное наполнение';
  columnsTemplate3_nalivnie.strokeOpacity = 0;
  columnsTemplate3_nalivnie.fillOpacity = 0.6;

  series3_nalivnie.tooltipText = `[bold]{categoryX} водохранилище:[/]
  Общий объём: {totalCapacity_nalivnie} млн куб. м.
  Всего воды: {filledCapacity_nalivnie} ({percetageFilled_nalivnie}%)
  
  [bold]{name} : [bold]{valueY} [bold]({percentageEmpty_nalivnie} %)`;
  series3_nalivnie.stacked = true;
  // series3_nalivnie.tooltip.label.textAlign = 'middle';
  // series3_nalivnie.tooltip.label.textValign = 'middle';
  // series3_nalivnie.columns.template.tooltipX = am4core.percent(100);
  // series3_nalivnie.columns.template.tooltipY = am4core.percent(100);

  series3_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series3_nalivnie.dataFields.valueY = 'emptyCapacity_nalivnie';
  columnsTemplate3_nalivnie.fill = am4core.color('#bcbcbc'); // fill

  series3_nalivnie.sequencedInterpolation = true;
  series3_nalivnie.sequencedInterpolationDelay = 100;

  var segmentCap_nalivnie = series3_nalivnie.columns.template;
  segmentCap_nalivnie.interactionsEnabled = true;

  var hoverStateCap_nalivnie = segmentCap_nalivnie.states.create('hover');
  hoverStateCap_nalivnie.properties.fillOpacity = 1;
  hoverStateCap_nalivnie.properties.fill = am4core
    .color('#bcbcbc')
    .lighten(+0.5); // fill

  let series4_nalivnie = chart_nalivnie.series.push(
    new am4charts.StepLineSeries()
  );

  series4_nalivnie.dataFields.valueY = 'trueDeathCapacity_nalivnie';
  series4_nalivnie.dataFields.categoryX = 'vodohr_nalivnie';
  series4_nalivnie.name = 'Мёртвый объём (расчётный)';
  series4_nalivnie.tooltipText = '{name}: [bold]{valueY}[/]';
  series4_nalivnie.strokeWidth = 1;
  series4_nalivnie.stroke = am4core.color('#ff0000');
  series4_nalivnie.strokeOpacity = 0.8;

  // series4_nalivnie.fill = "#bcbcbc";

  series4_nalivnie.noRisers = true;
  series4_nalivnie.sequencedInterpolation = true;
  series4_nalivnie.sequencedInterpolationDelay = 80;

  series4_nalivnie.yAxis = yAxes1_nalivnie;

  series4_nalivnie.tensionX = 0.6;
  series4_nalivnie.tensionY = 1;

  var segment_nalivnie = series4_nalivnie.segments.template;
  segment_nalivnie.interactionsEnabled = true;

  var hoverState_nalivnie = segment_nalivnie.states.create('hover');
  hoverState_nalivnie.properties.strokeWidth = 3;

  // ====================================================================================================================

  chart_nalivnie.legend = new am4charts.Legend();
  if (clientWidth <= 900) {
    var legendContainer_nalivnie = am4core.create(
      'legenddiv2',
      am4core.Container
    );
    legendContainer_nalivnie.width = am4core.percent(100);
    legendContainer_nalivnie.height = am4core.percent(100);
    chart_nalivnie.legend.parent = legendContainer_nalivnie;
    chart_nalivnie.legend.markers.template.width = 15;
    chart_nalivnie.legend.markers.template.height = 15;
  }
  chart_nalivnie.legend.scrollable = true;
  if (clientHeight < 300) chart_nalivnie.legend.dispose();

  // ====================================================================================================================

  var scrollbarX_nalivnie = new am4charts.XYChartScrollbar();
  var scrollbarY_nalivnie = new am4charts.XYChartScrollbar();
  chart_nalivnie.scrollbarY_nalivnie = scrollbarY_nalivnie;
  chart_nalivnie.scrollbarY_nalivnie.minWidth = 15;

  // ====================================================================================================================

  // var columnHoverState = columnsTemplate1_nalivnie.create("hover");
  // columnHoverState.properties.fillOpacity = 1;
  chart_nalivnie.scrollbarX_nalivnie = scrollbarX_nalivnie;
  chart_nalivnie.scrollbarX_nalivnie.minHeight = 15;
  // scrollbarX_nalivnie.series.push(series1_nalivnie);

  scrollbarX_nalivnie.scrollbarChart.seriesContainer.hide();
  // ====================================================================================================================
};

const createChart1Main = function () {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart_timeline instance
    var chart_timeline = am4core.create('chartdiv3', am4charts.XYChart);
    chart_timeline.dateFormatter.dateFormat = 'dd.MM.yyyy';

    chart_timeline.exporting.menu = new am4core.ExportMenu();
    var annotation_timeline = chart_timeline.plugins.push(
      new am4plugins_annotation.Annotation()
    );
    annotation_timeline.useMenu = true;

    chart_timeline.hiddenState.properties.opacity = 100;
    chart_timeline.padding(0, 10, 0, 0);
    chart_timeline.plotContainer.mouseOptions.sensitivity = 0.5;

    chart_timeline.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    let title1_timeline = chart_timeline.titles.create();
    title1_timeline.text = `Общий объём: ${allFull
      .toString()
      .replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        '$1,'
      )} млн. куб. м. \n Общий объём воды: ${allFilled
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
      (allFilled * 100) /
      allFull
    ).toFixed(1)}%) `;
    title1_timeline.fontSize = clientWidth <= 900 ? 10 : 16;
    title1_timeline.tooltipText = `[bold]Данные от ${refrestDataTime}`;
    title1_timeline.padding(0, 0, 10, 0);
    title1_timeline.fill = `white`; // Цвет названия графика
    title1_timeline.textAlign = 'middle';

    let title2_timeline = chart_timeline.titles.create();
    title2_timeline.text =
      clientWidth <= 900
        ? `[bold]Наполнение водохранилищ Крыма[/](2014 - н.в.)`
        : `[bold]Наполнение водохранилищ Крыма[/](2014 года по настоящее время)`;
    title2_timeline.fontSize = clientWidth <= 900 ? 11 : 20;
    title2_timeline.tooltipText = '[bold]Старые данные взяты с Википедии';
    title2_timeline.padding(0, 0, 0, 0);
    title2_timeline.fill = `white`; // Цвет названия графика
    title2_timeline.textAlign = 'middle';

    // chart.tooltip.label.maxWidth = 200;
    chart_timeline.tooltip.label.wrap = true;
    chart_timeline.tooltip.label.fill = am4core.color('white'); // Цвет окошка на названии
    chart_timeline.tooltip.label.fontSize = 16;
    chart_timeline.tooltip.label.textAlign = 'middle';
    chart_timeline.tooltip.getFillFromObject = true;
    chart_timeline.tooltip.background.fill = am4core.color('white'); // Цвет всплывающего окошка на названии табллицы

    chart_timeline.tooltip.getStrokeFromObject = true; // Обводка окошка на названии
    chart_timeline.tooltip.strokeFill = `red`;

    // Create axes
    var dateAxis_timeline = chart_timeline.xAxes.push(new am4charts.DateAxis());
    var valueAxis_timeline = chart_timeline.yAxes.push(
      new am4charts.ValueAxis()
    );
    // valueAxis_timeline.logarithmic = true;
    dateAxis_timeline.start = 0.94;
    dateAxis_timeline.keepSelection = true;

    createSeries_timeline('Изобильненское', isobilnenskoe, 0);
    createSeries_timeline('Загорское', zagorskoe, 1);
    createSeries_timeline('Балановское', balanovskoe, 2);
    createSeries_timeline('Счастливенское', schastlivenskoe, 3);
    createSeries_timeline('Тайганское', tayganskoe, 4);
    createSeries_timeline('Белогорское', belogorskoe, 5);
    createSeries_timeline('Партизанское', partizanskoe, 6);
    createSeries_timeline('Симферопольское', simferopolskoe, 7);
    createSeries_timeline('Аянское', ayanskoe, 8);
    createSeries_timeline('Старокрымское', starokrimskoe, 9);
    createSeries_timeline('Самарлинское', samarlinskoe, 10);
    createSeries_timeline('Ленинское', leninskoe, 11);
    createSeries_timeline('Чернореченское', chernorechenskoe, 12);
    // createSeries_timeline( "Альминское", *, 13);
    // createSeries_timeline( "Бахчисарайское", *, 14);
    // createSeries_timeline( "Кутузовское", *, 15);
    createSeries_timeline('Льговское', lgovskoe, 16);
    createSeries_timeline('Зеленоярское', zelenoyarskoe, 17);
    createSeries_timeline('Межгорное', mejgornoe, 18);
    createSeries_timeline('Керченское', kerchenskoe, 19);
    createSeries_timeline('Феодосийское', feodosiyskoe, 20);
    createSeries_timeline('Фронтовое', frontovoe, 21);
    // createSeries_timeline("Наполненность%", "Аянское");

    // Create series_timeline
    function createSeries_timeline(name, data, num) {
      var series_timeline = chart_timeline.series.push(
        new am4charts.LineSeries()
      );

      series_timeline.dataFields.valueY = 'capacity';
      series_timeline.dataFields.dateX = 'date';
      series_timeline.dataFields.id = num;
      series_timeline.name = name;
      // series_timeline.stroke = am4core.color("#ff0000");
      series_timeline.strokeWidth = 2;
      series_timeline.minBulletDistance = 50;
      series_timeline.tooltipText =
        '[bold]{name} водохранилище[/]\n[bold]Наполнение: {valueY} тыс. куб. м. ({percentage}%)\n[bold]Дата: {dateX} ';

      // filled_timeline[num] >= 1000
      // ? filled_timeline[num].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
      //   ` млн. куб. м.`
      // : filled_timeline[num] + ` тыс. куб. м.`,

      series_timeline.tooltip.pointerOrientation = 'vertical';
      series_timeline.tooltip.background.cornerRadius = 20;
      series_timeline.tooltip.background.fillOpacity = 0.8;
      series_timeline.tooltip.label.padding(12, 12, 12, 12);
      series_timeline.tooltip.label.minWidth = 40;
      series_timeline.tooltip.label.minHeight = 40;
      series_timeline.tooltip.label.textAlign = 'middle';
      series_timeline.tooltip.label.textValign = 'middle';
      // series_timeline.noRisers = false;

      // series_timeline.sequencedInterpolation = true;
      // series_timeline.sequencedInterpolationDelay = 80;

      series_timeline.tensionX = 0.99;
      series_timeline.tensionY = 0.95;

      var segment_timeline = series_timeline.segments.template;
      segment_timeline.interactionsEnabled = true;

      var hoverState_timeline = segment_timeline.states.create('hover');
      hoverState_timeline.properties.strokeWidth = 5;

      var dimmed_timeline = segment_timeline.states.create('dimmed');
      dimmed_timeline.properties.stroke = am4core.color('#dadada');
      dimmed_timeline.properties.opacity = 0.1;

      segment_timeline.events.on('over', function (event) {
        processOver_timeline(event.target.parent.parent.parent);
      });

      segment_timeline.events.on('out', function (event) {
        processOut_timeline(event.target.parent.parent.parent);
      });

      var bullet_timeline = series_timeline.bullets.push(
        new am4charts.CircleBullet()
      );
      bullet_timeline.circle.strokeWidth = 1;
      bullet_timeline.circle.radius = 1;
      // bullet_timeline.circle.fill = am4core.color("#fff");

      // bullet_timeline.tooltipText =
      // "[bold]{name} водохранилище[/]\nНаполнение: {valueY} тыс. куб. м.\n({dateX})";

      var bullethover_timeline = bullet_timeline.states.create('hover');
      bullethover_timeline.properties.scale = 4;
      // let value = 0;

      // for (value1 of datedata) {
      //   value = value1[17];
      //   var dataItem = { date: value1[1] };
      //   dataItem["Наполненность " + s] = value;
      //   data.push(dataItem);
      // }
      series_timeline.data = data;

      // Add scrollbar
      chart_timeline.scrollbarX = new am4charts.XYChartScrollbar();
      chart_timeline.scrollbarX.minHeight = 15;
      chart_timeline.scrollbarX.parent = chart_timeline.bottomAxesContainer;
      chart_timeline.scrollbarX.background.fill = am4core.color('#67dcab');
      chart_timeline.scrollbarX.fillOpacity = 0.5;
      chart_timeline.scrollbarX.series.push(series_timeline); //
      chart_timeline.scrollbarX.scrollbarChart.seriesContainer.hide();

      chart_timeline.scrollbarX.thumb.background.fill =
        am4core.color('#67dcab');
      chart_timeline.scrollbarX.thumb.background.fillOpacity = 0.8;

      chart_timeline.scrollbarX.unselectedOverlay.fill = am4core.color('#fff');
      chart_timeline.scrollbarX.unselectedOverlay.fillOpacity = 0.9;

      chart_timeline.scrollbarX.scrollbarChart.plotContainer.filters.clear();

      chart_timeline.scrollbarY = new am4charts.XYChartScrollbar();
      chart_timeline.scrollbarY.minWidth = 15;
      chart_timeline.scrollbarY.parent = chart_timeline.leftAxesContainer;
      chart_timeline.scrollbarY.toBack();

      chart_timeline.scrollbarY.background.fill = am4core.color('#67dcab');
      chart_timeline.scrollbarY.fillOpacity = 0.5;
      // chart_timeline.scrollbarY.background.disabled = true;
      chart_timeline.scrollbarY.thumb.background.fill =
        am4core.color('#67dcab');
      chart_timeline.scrollbarY.thumb.background.fillOpacity = 0.8;

      chart_timeline.scrollbarY.unselectedOverlay.fill = am4core.color('#fff');
      chart_timeline.scrollbarY.unselectedOverlay.fillOpacity = 0.9;

      return series_timeline;
    }
    let textLabel2_timeline = chart_timeline.plotContainer.createChild(
      am4core.Label
    );
    textLabel2_timeline.text = 'Взято с сайта: \n www.vodomor.com';
    textLabel2_timeline.y = 30;
    textLabel2_timeline.x = am4core.percent(1);
    textLabel2_timeline.zIndex = 100;
    textLabel2_timeline.fillOpacity = 0.4;

    chart_timeline.legend = new am4charts.Legend();
    chart_timeline.legend.position = clientWidth <= 990 ? `down` : `right`;
    if (clientWidth <= 900) {
      var legendContainer_timeline = am4core.create(
        'legenddiv3',
        am4core.Container
      );
      legendContainer_timeline.width = am4core.percent(100);
      legendContainer_timeline.height = am4core.percent(100);
      chart_timeline.legend.parent = legendContainer_timeline;
      chart_timeline.legend.markers.template.width = 15;
      chart_timeline.legend.markers.template.height = 15;
    }

    chart_timeline.legend.scrollable = true;
    chart_timeline.legend.itemContainers.template.events.on(
      'over',
      function (event) {
        processOver_timeline(event.target.dataItem.dataContext);
        // console.log(event.target.dataItem);
      }
    );

    chart_timeline.legend.itemContainers.template.events.on(
      'out',
      function (event) {
        processOut_timeline(event.target.dataItem.dataContext);
      }
    );
    if (clientHeight < 300) chart_timeline.legend.dispose();

    function processOver_timeline(hoveredSeries) {
      hoveredSeries.toFront();
      // console.log(hoveredSeries);

      hoveredSeries.showBullets = false;
      let range1_timeline = valueAxis_timeline.axisRanges.create();
      range1_timeline.value = death_timeline[hoveredSeries.dataFields.id];
      range1_timeline.grid.stroke = am4core.color('#09ca36');
      range1_timeline.grid.strokeWidth = 2;
      range1_timeline.grid.strokeOpacity = 0.8;
      range1_timeline.grid.strokeDasharray = '8,4,2,4';
      range1_timeline.grid.above = true;

      range1_timeline.label.inside = true;
      range1_timeline.label.text = '[bold]Мёртвый объём';
      range1_timeline.label.fill = range1_timeline.grid.stroke;
      range1_timeline.label.verticalCenter = 'bottom';
      range1_timeline.contents.stroke = am4core.color('#FF0000');

      let range2_timeline = valueAxis_timeline.axisRanges.create();
      range2_timeline.value = full_timeline[hoveredSeries.dataFields.id];
      range2_timeline.grid.stroke = am4core.color('#3525fe');
      range2_timeline.grid.strokeWidth = 2;
      range2_timeline.grid.strokeOpacity = 0.8;
      range2_timeline.grid.strokeDasharray = '3,3';
      range2_timeline.grid.above = true;
      range2_timeline.label.inside = true;
      range2_timeline.label.text = '[bold]Максимальный объём';
      range2_timeline.label.fill = range2_timeline.grid.stroke;
      range2_timeline.label.verticalCenter = 'bottom';

      hoveredSeries.segments.each(function (segment_timeline) {
        // console.log(segment_timeline, `segment_timeline`);
        segment_timeline.setState('hover');
      });

      chart_timeline.series.each(function (series_timeline) {
        // console.log(series_timeline, `series_timeline`);
        if (series_timeline != hoveredSeries) {
          series_timeline.segments.each(function (segment_timeline) {
            segment_timeline.setState('dimmed');
          });
          series_timeline.bulletsContainer.setState('dimmed');
        }
      });
    }

    function processOut_timeline(hoveredSeries) {
      let rangeRemove_timeline = valueAxis_timeline.axisRanges.clear();
      chart_timeline.series.each(function (series_timeline) {
        series_timeline.segments.each(function (segment_timeline) {
          segment_timeline.setState('default');
        });
        series_timeline.bulletsContainer.setState('default');
      });
    }

    // Add cursor
    chart_timeline.cursor = new am4charts.XYCursor();
    // chart_timeline.cursor.xAxis = dateAxis_timeline;
    // chart_timeline.cursor.snapToSeries = series_timeline;

    chart_timeline.cursor.maxTooltipDistance = -1;
  }); // end am4core.ready()
};

let chart1IsVisible = false;
let chart2IsVisible = false;
let chart3IsVisible = false;

if (chart1IsVisible === false) {
  operationsTab1.addEventListener(
    `click`,
    function () {
      createChart1Main();
      chart1IsVisible = true;
      operations.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    },
    { once: true }
  );
}

if (chart2IsVisible === false) {
  operationsTab2.addEventListener(
    `click`,
    function () {
      createChart2Main();
      chart2IsVisible = true;
      operations.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    },
    { once: true }
  );
}
if (chart3IsVisible === false) {
  operationsTab3.addEventListener(
    `click`,
    function () {
      createChart3Main();
      chart3IsVisible = true;
      operations.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    },
    { once: true }
  );
}
// let a = [1, 4, 6, 2, 4, 6, 1, 2, 4, 5, 6, 2, 12, 2];
// let b = a.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(b);

const createChart4Main = function () {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart_all = am4core.create('chartdiv4', am4charts.XYChart);
    chart_all.paddingRight = clientWidth > 900 ? 10 : 5;
    chart_all.paddingLeft = 0;
    chart_all.paddingTop = clientWidth > 900 ? 10 : 0;

    chart_all.dateFormatter.dateFormat = 'dd.MM.yyyy';

    chart_all.exporting.menu = new am4core.ExportMenu();
    var annotation_achart_all = chart_all.plugins.push(
      new am4plugins_annotation.Annotation()
    );
    annotation_achart_all.useMenu = true;
    var data_all = [
      { date: '2014-03-01', value: 212612 + 98681 },
      { date: '2015-05-18', value: 212612 + 40700 },
      { date: '2016-03-01', value: 163400 + 33000 },
      { date: '2016-05-18', value: 95900 + 29800 },
      { date: '2016-07-20', value: 95900 + 31800 },
      { date: '2017-01-01', value: 95900 + 37500 },
      { date: '2018-01-01', value: 167800 + 25000 },
      { date: '2018-06-07', value: 167800 + 30000 },
      { date: '2019-03-01', value: 95900 + 27400 },
      { date: '2020-06-01', value: 85600 + 27400 },
      { date: '2020-09-01', value: 32600 + 27400 },
      { date: '2021-04-16', value: 73880 + 20938 },
      { date: '2021-05-01', value: 85771 + 20938 },
      { date: '2021-06-01', value: 79243 + 20928 },
      { date: '2021-07-01', value: 117633 + 26288 },
    ];

    data_all.reduce(function (acc, curr, i) {
      if (curr.value >= acc.value) {
        acc.color = am4core.color('#09ca36');
      } else {
        acc.color = am4core.color('#FF0000');
      }
      return (acc = curr);
    }, data_all[0]);

    chart_all.data = data_all;

    let title1_all = chart_all.titles.create();
    title1_all.text = `Общий объём: ${allFull
      .toString()
      .replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        '$1,'
      )} млн. куб. м. \n Всего воды: ${allFilled
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} млн. куб. м. (${(
      (allFilled * 100) /
      allFull
    ).toFixed(1)}%) `;
    title1_all.fontSize = clientWidth <= 1025 ? 10 : 18;
    title1_all.tooltipText = `[bold]Данные от ${refrestDataTime}`;
    title1_all.padding(
      0,
      0,
      clientWidth <= 1025 ? 3 : 10,
      clientWidth <= 1025 ? 0 : 20
    );
    title1_all.fill = `white`; // Цвет названия графика
    title1_all.textAlign = 'middle';

    let title2_all = chart_all.titles.create();
    title2_all.text = `[bold]Все водохранилища Крыма:`;
    title2_all.fontSize = clientWidth <= 1025 ? 12 : 22;
    title2_all.tooltipText =
      '[bold]Естественного стока и воданаливные вместе взятые';
    title2_all.padding(0, 0, clientWidth <= 900 ? 5 : 10, 0);
    title2_all.fill = `white`; // Цвет названия графика
    title2_all.textAlign = 'middle';

    let textLabel2_all = chart_all.plotContainer.createChild(am4core.Label);
    textLabel2_all.text = 'www.vodomor.com';
    textLabel2_all.y = 5;
    textLabel2_all.x = am4core.percent(65);
    textLabel2_all.zIndex = 100;
    textLabel2_all.fillOpacity = 0.5;

    var dateAxis_all = chart_all.xAxes.push(new am4charts.DateAxis());
    // dateAxis_all.renderer.grid.template.location = 0;
    // dateAxis_all.dateFormatter.dateFormat = 'MM-dd';
    dateAxis_all.renderer.axisFills.template.disabled = true;
    dateAxis_all.renderer.ticks.template.disabled = true;
    dateAxis_all.renderer.minGridDistance = clientWidth > 900 ? 40 : 30;

    // dateAxis_all.renderer.inside = true;
    // dateAxis_all.skipEmptyPeriods = true;
    dateAxis_all.groupData = true;
    dateAxis_all.groupIntervals.setAll([
      { timeUnit: 'month', count: 1 },
      { timeUnit: 'year', count: 1 },
      { timeUnit: 'year', count: 10 },
    ]);

    dateAxis_all.startLocation = 0.4;
    dateAxis_all.endLocation = 0.6;

    // dateAxis_all.renderer.minLabelPosition = 0.05;
    // dateAxis_all.renderer.maxLabelPosition = 0.95;
    // dateAxis_all.dateFormats.setKey('year', 'yyyy');
    // dateAxis_all.gridIntervals.setAll([
    //   { timeUnit: 'month', count: 1 },
    //   { timeUnit: 'month', count: 30 },
    // ]);
    var valueAxis_all = chart_all.yAxes.push(new am4charts.ValueAxis());
    // valueAxis_all.tooltip.disabled = true;
    valueAxis_all.renderer.minWidth = 35;
    valueAxis_all.renderer.minGridDistance = 50;

    valueAxis_all.renderer.axisFills.template.disabled = true;
    valueAxis_all.renderer.ticks.template.disabled = true;
    // valueAxis_all.renderer.grid.template.above = true;
    // valueAxis_all.renderer.baseGrid.disabled = true;
    var series_all = chart_all.series.push(new am4charts.LineSeries());
    series_all.dataFields.dateX = 'date';
    series_all.dataFields.valueY = 'value';
    series_all.strokeWidth = clientWidth > 1920 ? 5 : 2;
    series_all.strokeOpacity = 0.9;

    series_all.tooltipText = `[bold]Объём воды:[/] {valueY} млн. м³\n[bold]Изменение c предыдущей даты:[/]\n{valueY.previousChange} млн. м³ ({valueY.previousChangePercent.formatNumber('###.0')}%)\n[bold]Изменение c 2014 года:[/]\n{valueY.startChange} млн. м³ ({valueY.startChangePercent.formatNumber('###.0')}%)\n [bold]Дата:[/] {dateX}`;

    // 'Объём воды: [bold]{valueY} млн. м³[/]\nИзменение c предыдущей даты:\n[bold]{valueY.previousChange} млн. м³ ({valueY.previousChangePercent} %)[/]\nИзменение c 2014 года:\n[bold]{valueY.startChange} млн. м³ ({valueY.startChangePercent} %)[/]\n Дата: [bold]{dateX}[/]';
    series_all.tooltip.pointerOrientation = 'vertical';

    // set stroke property field
    series_all.propertyFields.stroke = 'color';

    if (clientWidth > 480) {
      chart_all.cursor = new am4charts.XYCursor();
    }
    // var scrollbarX_all = new am4core.Scrollbar();
    // chart_all.scrollbarX = scrollbarX_all;
    // chart_all.scrollbarX.parent = chart_all.bottomAxesContainer;

    dateAxis_all.start = 0;
    dateAxis_all.keepSelection = true;
  }); // end am4core.ready()
};
// window.addEventListener(`load`, function () {
//   createChart4Main();
// });
document.addEventListener(`DOMContentLoaded`, createChart4Main());
