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
  if (n < 9000) {
    indicator.style.top = `${n / 88}%`;
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

// chooseDestination Dropdown Effect
let chooseDestination = document.querySelector(".choose_destination");
let dropdownChoose = document.querySelector(".dropdownChoose");
chooseDestination.addEventListener("click", function () {
  if (dropdownChoose.style.opacity == "0") {
    dropdownChoose.style.opacity = "1";
    chooseDestination.innerHTML = `
  CHOOSE A DESTINATION&nbsp;
  <span class="lnr lnr-chevron-up"></span>
`;
  } else {
    dropdownChoose.style.opacity = "0";
    chooseDestination.innerHTML = `
    CHOOSE A DESTINATION&nbsp;
    <span class="lnr lnr-chevron-down"></span>
  `;
  }
});
let benefit = document.querySelector(".benefit");
benefit.addEventListener("click", function (event) {
  var target = event.target;
  if (target !== chooseDestination) {
    dropdownChoose.style.opacity = "0";
    chooseDestination.innerHTML = `
  CHOOSE A DESTINATION&nbsp;
  <span class="lnr lnr-chevron-down"></span>
`;
  }
});

// video effect
const inner = document.querySelector(".inner");

const innerPlay = document.querySelector(".innerPlay");
const video = document.querySelector("video");
const lighter_outer = document.querySelector(".lighter_outer");
const dark_outer = document.querySelector(".dark_outer");
inner.addEventListener("mouseenter", function () {
  setTimeout(() => {
    inner.classList.add("active");
    innerPlay.classList.add("active");
    video.classList.add("active");
    lighter_outer.classList.add("active");
    dark_outer.classList.add("active");
  }, 200);
});

inner.addEventListener("mouseleave", function () {
  setTimeout(() => {
    inner.classList.remove("active");
    innerPlay.classList.remove("active");
    video.classList.remove("active");
    lighter_outer.classList.remove("active");
    dark_outer.classList.remove("active");

    inner.style.transform = "translate(0px,0px)";
  }, 200);
});

// arrow_right effect
let lnr_arrow_right = document.querySelector(".lnr-arrow-right");
lnr_arrow_right.addEventListener("mouseenter", function () {
  lnr_arrow_right.style.transform = "translateX(10px)";
});
lnr_arrow_right.addEventListener("mouseleave", function () {
  lnr_arrow_right.style.transform = "translateX(0)";
});
let backgroundImage = [
  "./assets/607dcd3355581e17e093caed_011.jpeg",
  "./assets/607dcd3ca4b006d82a3c6859_026.jpeg",
  "./assets/607dcd2961c3e396968aac28_031.jpeg",
];
let placeContent = [
  "Thessaloniki,Greece",
  "Bahariya Oasis,Egypt",
  "Denpasar,Insonesia",
];
let priceContent = [
  "STARTING AT $6700",
  "STARTING AT $6400",
  "STARTING AT $1900",
];
let i1 = 0;
lnr_arrow_right.addEventListener("click", function () {
  i1++;
  if (i1 <= backgroundImage.length) {
    j = i1;
    j = j == backgroundImage.length ? 0 : j;
  } else {
    i1 = 1;
    j = i1;
  }
  let mainContent = document.querySelector(".mainContent");
  let place = document.querySelector(".place");
  let price = document.querySelector(".price");
  mainContent.style.backgroundImage = `url(${backgroundImage[j]})`;
  place.innerHTML = `${placeContent[j]}`;
  price.innerHTML = `${priceContent[j]}`;
});

let lnr_arrow_left = document.querySelector(".lnr-arrow-left");
lnr_arrow_left.addEventListener("mouseenter", function () {
  lnr_arrow_left.style.transform = "translateX(-10px)";
});
lnr_arrow_left.addEventListener("mouseleave", function () {
  lnr_arrow_left.style.transform = "translateX(0)";
});

let i2 = backgroundImage.length;
lnr_arrow_left.addEventListener("click", function () {
  i2--;
  if (i2 >= 0) {
    j = i2;
  } else {
    i2 = backgroundImage.length - 1;
    j = i2;
  }
  let mainContent = document.querySelector(".mainContent");
  let place = document.querySelector(".place");
  let price = document.querySelector(".price");
  mainContent.style.backgroundImage = `url(${backgroundImage[j]})`;
  place.innerHTML = `${placeContent[j]}`;
  price.innerHTML = `${priceContent[j]}`;
});

let lnr_right = document.querySelector(".lnr-right");
lnr_right.addEventListener("mouseenter", function () {
  lnr_right.style.padding = "0 0 0 0.625rem";
});
lnr_right.addEventListener("mouseleave", function () {
  lnr_right.style.padding = "0";
});

// City Change Effect
const preCity = document.querySelector(".preCity");
const nextCity = document.querySelector(".nextCity");
const itemsCity = document.querySelectorAll(".tracker-item");
const itemsDetail = document.querySelectorAll(".cityDetail-item");
const indicatorCity = document.querySelector(".indicatorCity");
nextCity.addEventListener("click", function () {
  let index;
  for (let i = 0; i < itemsCity.length; i++) {
    if (Array.from(itemsCity[i].classList).includes("activeTrack")) {
      index = i;
    }
  }

  let j = index + 1;
  j = j == itemsCity.length ? 0 : j;
  itemsCity[index].classList.remove("activeTrack");
  itemsCity[j].classList.add("activeTrack");
  itemsDetail[index].classList.remove("activeCity");
  itemsDetail[j].classList.add("activeCity");
  indicatorCity.style.top = 150 + j * 66 + "px";
  if (index + 1 == itemsCity.length) {
    indicatorCity.style.top = "150px";
  }
});

preCity.addEventListener("click", function () {
  let index;
  for (let i = 0; i < itemsCity.length; i++) {
    if (Array.from(itemsCity[i].classList).includes("activeTrack")) {
      index = i;
    }
  }
  let j = index - 1;
  j = j == -1 ? itemsCity.length - 1 : j;
  itemsCity[index].classList.remove("activeTrack");
  itemsCity[j].classList.add("activeTrack");
  itemsDetail[index].classList.remove("activeCity");
  itemsDetail[j].classList.add("activeCity");
  indicatorCity.style.top = 150 + j * 66 + "px";
});

//PopularVacation Effect
let itemVacations = document.querySelectorAll(".itemVacations");
let membershipDot = document.querySelectorAll(".membership-dot");
let activeVacation = document.querySelector(".activeVacation");
let popularContent = document.querySelectorAll(".popularContent");
let activePopular = document.querySelector(".activePopular");
for (let i = 0; i < itemVacations.length; i++) {
  itemVacations[i].addEventListener("click", function () {
    for (let j = 0; j < itemVacations.length; j++) {
      if (Array.from(itemVacations[j].classList).includes("activeVacation")) {
        itemVacations[j].classList.remove("activeVacation");
        itemVacations[i].classList.add("activeVacation");
        popularContent[j].classList.remove("activePopular");
        popularContent[i].classList.add("activePopular");
      }

      if (j <= i) {
        itemVacations[j].style.borderBottomColor = "black";
        membershipDot[j].style.backgroundColor = "black";
      } else if (j > i) {
        itemVacations[j].style.borderBottomColor = "#efeff7";
        membershipDot[j].style.backgroundColor = "#efeff7";
      }
    }
  });
}

// let stepCard = document.querySelectorAll(".step-card");
// let loadTop = document.querySelector(".load-top");
// let loadDown = document.querySelector(".load-down");
// let startedRightMain = document.querySelector(".startedRightMain");
// startedRightMain.addEventListener("scroll", function () {
//   const n = startedRightMain.scrollTop;

//   if (n > 250) {
//     stepCard[1].classList.add("activeCard");
//   }
//   if (n > 580) {
//     stepCard[2].classList.add("activeCard");
//   }
// });

// window.addEventListener("scroll", function (e) {
//   const scrollY = window.scrollY;

//   if (scrollY > 4650) {
//     stepCard[0].classList.add("activeCard");
//   }
//   if (scrollY > 5100) {
//     stepCard[3].classList.add("activeCard");
//   }
//   if (scrollY > 5900) {
//     loadTop.style.height = "0px";
//     loadDown.style.height = "0px";
//   }
// });

//Swiper Effect(Click the picture, you can see the details.)
let imageItems = document.querySelectorAll(".background-image");
let mySwiper = document.querySelector(".mySwiper");
for (let i = 0; i < imageItems.length; i++) {
  imageItems[i].addEventListener("mouseenter", function () {
    imageItems[i].classList.add("active");
  });
  imageItems[i].addEventListener("mouseleave", function () {
    imageItems[i].classList.remove("active");
  });
  imageItems[i].addEventListener("click", function () {
    mySwiper.style.height = "100%";
    let swiperPaginationBullet = document.querySelectorAll(
      ".swiper-pagination-bullet"
    );

    let swiperSlide = document.querySelectorAll(".swiper-slide");
    swiper.slideTo(i, 0);
    for (let j = 0; j < swiperPaginationBullet.length; j++) {
      if (
        Array.from(swiperPaginationBullet[j].classList).includes(
          "swiper-pagination-bullet-active"
        )
      ) {
        swiperPaginationBullet[j].classList.remove(
          "swiper-pagination-bullet-active"
        );
        swiperPaginationBullet[i].classList.add(
          "swiper-pagination-bullet-active"
        );
      }
    }
  });
}
let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  mySwiper.style.height = "0px";
  window.scrollTo(0, 6000);
});
//When you move the mouse by side to side,the whole part will move.
let aboutSection = document.querySelector(".about-us-section");
let imageContent = document.querySelector(".about-images-contenent");
aboutSection.addEventListener("mousemove", function (e) {
  let clineX = e.clientX;
  if (clineX < 715) {
    imageContent.style.marginLeft = "0px";
  } else {
    imageContent.style.marginLeft = "-800px";
  }
});
