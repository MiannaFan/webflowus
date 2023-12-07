//preload effect
let preloader = document.querySelector(".preloader");
let loaderTop = document.querySelector(".loaderTop");
let loaderDown = document.querySelector(".loaderDown");
let preloaderIndicator = document.querySelector(".preloader-indicator");
window.addEventListener("load", function () {
  let windowHeight = window.innerHeight;
  preloader.style.height = windowHeight + "px";
  loaderTop.style.height = windowHeight / 2 + "px";
  loaderDown.style.height = windowHeight / 2 + "px";
  setTimeout(() => {
    preloaderIndicator.style.backgroundColor = "#081c3a";
    preloaderIndicator.style.opacity = "0";
    setTimeout(() => {
      loaderTop.style.height = "0px";
      loaderDown.style.height = "0px";
    }, 800);
    setTimeout(() => {
      preloader.style.zIndex = "-100";
    }, 900);
  }, 900);
});

// guide click effect
let guide = document.querySelector(".guide");
let flyout_menu = document.querySelector(".flyout_menu");

guide.addEventListener("click", function () {
  if (flyout_menu.style.left == "-28rem") {
    flyout_menu.style.left = "0";
    guide.innerHTML = `<span class="lnr lnr-cross" style="font-size:26px;line-height:80px;"></span>`;
  } else {
    flyout_menu.style.left = "-28rem";
    guide.innerHTML = `<img src="./assets/1614628-200.png" alt="guide">`;
  }
});

// backgroundImage effect
let listitem = document.querySelectorAll(".listitem");
let africa = document.querySelector(".africa");
let asia = document.querySelector(".asia");
let europe = document.querySelector(".europe");
let france = document.querySelector(".france");
let indonesia = document.querySelector(".indonesia");
let greece = document.querySelector(".greece");
let egypt = document.querySelector(".egypt");
const imgObj = {
  africa: "url(./assets/backgroundImage/africa.jpeg)",
  asia: "url(./assets/backgroundImage/asia.jpeg)",
  europe: "url(./assets/backgroundImage/europe.jpeg)",
  france: "url(./assets/backgroundImage/france.jpeg)",
  indonesia: 'url("./assets/backgroundImage/asia.jpeg")',
  greece: 'url("./assets/backgroundImage/greece.jpeg")',
  egypt: 'url("./assets/backgroundImage/egypt.jpeg")',
};

listitem.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    item.style.transform = "scale(1.1,1.1)";
    item.style.color = "white";
    // console.log(item.classList[1]);
    // console.log(item);
    item.style.backgroundImage = imgObj[item.classList[1]];
  });
});
listitem.forEach((item) => {
  item.addEventListener("mouseleave", function () {
    item.style.transform = "scale(1,1)";
    item.style.color = "black";
    item.style.backgroundImage = "none";
  });
});

let contactitem = document.querySelectorAll(".contactitem");
contactitem.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    item.classList.add("active");
  });
  item.addEventListener("mouseleave", function () {
    item.classList.remove("active");
  });
});

// indicator effect
let indicator = document.querySelector(".indicator");
let navContentTop = document.querySelector(".navContentTop");
let header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  const n = document.documentElement.scrollTop;
  console.log(n);
  if (n < 3000) {
    indicator.style.top = `${n / 23.4}%`;
  }
  if (n < 800) {
    header.style.top = `${Math.ceil(window.scrollY / 10 - 80)}px`;
    header.style.backgroundColor = `rgb(255,255,255)`;
    let c = 31 * (800 / n);
    let navContent = document.querySelector(".navContent");
    navContent.style.color = `rgb(${c},${c + 4},${c + 10})`;
    if (n < 400) {
      navContentTop.style.opacity = 0;
    } else {
      navContentTop.style.opacity = window.scrollY / 700;
    }
  }
  if (n >= 800) {
    header.style.top = `0px`;
    navContentTop.style.opacity = 1;
    header.style.backgroundColor = `rgb(255,255,255)`;
  }
});

//destination dropdown effect
let navRight = document.querySelector(".nav-right");
let dropdown = document.querySelector(".dropdown");
let destinations = document.querySelector(".destinations");
navRight.addEventListener("click", function () {
  if (dropdown.style.opacity == "0") {
    dropdown.style.opacity = "1";
    dropdown.style.top = "50px";
    destinations.innerHTML = `<div>
  DESTINATIONS&nbsp;
  <span class="lnr lnr-chevron-up"></span>
</div>`;
  } else {
    dropdown.style.opacity = "0";
    dropdown.style.top = "-288px";
    destinations.innerHTML = `<div>
  DESTINATIONS&nbsp;
  <span class="lnr lnr-chevron-down"></span>
</div>`;
  }
});
let overlayMain = document.querySelector(".overlayMain");
overlayMain.addEventListener("click", function () {
  dropdown.style.opacity = "0";
  dropdown.style.top = "-288px";
  destinations.innerHTML = `<div>
    DESTINATIONS&nbsp;
    <span class="lnr lnr-chevron-down"></span>
  </div>`;
  flyout_menu.style.left = "-28rem";
  guide.innerHTML = `<img src="./assets/1614628-200.png" alt="guide">`;
});
let overlaySection = document.querySelector(".overlaySection");
overlaySection.addEventListener("click", function () {
  dropdown.style.opacity = "0";
  dropdown.style.top = "-288px";
  destinations.innerHTML = `<div>
    DESTINATIONS&nbsp;
    <span class="lnr lnr-chevron-down"></span>
  </div>`;
  flyout_menu.style.left = "-28rem";
  guide.innerHTML = `<img src="./assets/1614628-200.png" alt="guide">`;
});

let benefit = document.querySelector(".benefit");
benefit.addEventListener("click", function (event) {
  var target = event.target;
  if (target !== chooseDestination && !chooseDestination.contains(target)) {
    dropdownChoose.style.opacity = "0";
    chooseDestination.innerHTML = `<div>
  CHOOSE A DESTINATION&nbsp;
  <span class="lnr lnr-chevron-down"></span>
</div>`;
  }
});

let submit = document.querySelector(".submit");
let form = document.querySelector(".form");
let successMessage = document.querySelector(".successMessage");
let benefit_left = document.querySelector(".benefit_left");
submit.addEventListener("click", function () {
  submit.innerText = "PLEASE WAIT... ...";
  form.style.opacity = "0";
  successMessage.style.opacity = "1";
  successMessage.style.zIndex = "1";

  benefit_left.style.height = "500px";
});
