// 로고 누리면 팝업창 뜸
function popAlert() {
    alert('main page로 돌아가갑니다.')
}


// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side__menu')


// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl.style.transform = 'translateX(0%)'
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.transform = 'translateX(-100%)'
})

//슬라이드 시가낯에 따라 자동 넘어가기


// 슬라이드 이미지들 선택자
const $slides = document.querySelectorAll(".slide");
// 점들 선택자
const $dots = document.querySelectorAll(".dot");

// 현재 보이는 슬라이드 index값
let current = 0;

// 자동 슬라이드 기능
window.addEventListener("load", function () {
  setInterval(autoSlide, 3000);
});

const reset = () => {
  $slides.forEach((slide) => {
    slide.style.display = "none";
  });
  $dots.forEach((dot) => {
    dot.style.background = "#F6F5F0";
    dot.style.width = "8px";
  });
};

const autoSlide = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};
