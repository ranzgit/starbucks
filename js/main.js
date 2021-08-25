const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 돋보기를 클릭하면 포커스 적용
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // html요소를 지정
});

searchInputEl.addEventListener('blur', function () {  // focus가 해제
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // html요소를 지정
});

// 배지고정제어과 ScrollToTop
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 브라우저창 제어- lodash js 라이브러리 연결
window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지숨기기
    // 애니메이션 라이브러리 사용하기
    // gsap.to(요소, 지속시간(초), 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // to-top 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
  });
  // to-top 버튼 숨기기!
  gsap.to(toTopEl, .2, {
    x: 100
  });
}
}, 300)); // 0.3초
// _.throttle(함수, 시간)

// top으로 이동하기
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// visual title 이미지 순차적 fade-in 이벤트
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
 // gsap.to(요소, 지속시간(초), 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7초, 1.4초, 2.1초...후 동작
    opacity: 1,
  });
});


//Swiper
// 공지사항
// new Swiper(선택자, 옵션) 생성자함수
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생여부
  loop: true //반복재생여부
});

// 스타벅스 프로모션을 클릭했을 때 보여지는 프로모션 swiper slide
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 은 기본값이므로 생략함
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 5초, 기본값은 3000(3초)
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// awards 슬라이드
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// 스타벅스 프로모션을 클릭했을 때 토글 이벤트
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 보이고 있는 상태
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // true일 때
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});


// 유튜브영상 위에서 둥둥 떠다니며 움직이는 애니메이션 이벤트
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, // y축
      repeat: -1,  // 무한반복
      yoyo: true, // 한번재생된 애니메이션을 계속 재생
      ease: Power1.easeInOut,
      delay: random(0, delay) // 3초후에 애니메이션 실행, 지연시간 추가
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic Libary
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정함
      triggerHook: .8 // 0~1사이 숫자. 0은 브라우저 최상단. 1은 브라우저 최하단
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// 올해 연도 자동계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021


