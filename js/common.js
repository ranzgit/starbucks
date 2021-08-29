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

// 올해 연도 자동계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021