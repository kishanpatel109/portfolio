// topBar Start----------
var max = 100;
var maxHeight = $(document).height();
var width = 0;
var offset = 0;
$(document).scroll(function () {
  offset = Math.floor(
    ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100
  );
  $(".loading").css("width", offset + "%");
});

// TopBar end---------

// Typing Text Start----------
const span = document.querySelector(".typing_txt span");
const textArr = span.getAttribute("data-text").split(", ");
const maxTextIndex = textArr.length;
const sPerChar = 0.15;
const sBetweenWord = 1.5;
let textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  let charIndex = 0;
  const typeInterval = setInterval(() => {
    span.innerHTML += text[charIndex];
    if (charIndex++ === text.length - 1) {
      clearInterval(typeInterval);
      setTimeout(() => deleting(textIndex, text), sBetweenWord * 700);
    }
  }, sPerChar * 300);
}

function deleting(textIndex, text) {
  let charIndex = text.length - 1;
  const typeInterval = setInterval(() => {
    span.innerHTML = text.substring(0, charIndex--);
    if (charIndex < 0) {
      clearInterval(typeInterval);
      textIndex = (textIndex + 1) % maxTextIndex;
      setTimeout(
        () => typing(textIndex, textArr[textIndex]),
        sBetweenWord * 300
      );
    }
  }, sPerChar * 300);
}
// Typing Text End----------

// scroll link active animation-------
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("header ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
// scroll link active animation End-------

// -------hamburger start----------
const bar = document.querySelector(".menu");
const navbar = document.querySelector("nav");
const navbarli = document.querySelectorAll("nav li");

bar.addEventListener("click", () => {
  bar.classList.toggle("active");
  navbar.classList.toggle("active");
});

let btn = document.querySelector(".menu");
let icon = btn.querySelector(".fa-bars");
btn.onclick = function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
};

window.addEventListener("scroll", function () {
  console.log("test");
  let TopScrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(TopScrolled);
  if (TopScrolled > 1) {
    document.querySelector("nav").classList.remove("active");
    icon.classList.replace("fa-times", "fa-bars");
  } else {
    document.getElementById("main-header").classList.add("fixedmenu");
    TopScrolled = 1;
  }
});
// -----------hamburger-End--------

// ------header fix after scroll start-------
window.addEventListener("scroll", function (event) {
  const bodyRect = document.body.getBoundingClientRect().top;
  // console.log(event);
  // console.log(window.pageYOffset);
  // console.log(this);
  // console.log(this.scrollY);
  if (this.scrollY > 500) {
    document
      .getElementsByClassName("main-header")[0]
      .classList.add("menu-fixed");

    document.body.style.backgroundColor = "#282828";
  } else {
    document
      .getElementsByClassName("main-header")[0]
      .classList.remove("menu-fixed");
    document.body.style.backgroundColor = "#202020";
  }
});
// ------header fix after scroll End-------

// --------project-filtering start --------
// Check active classes
// var checkClass = function () {
//   if ($(".flip").hasClass("hide")) {
//     $(".flip").removeClass("hide");
//   }
// };

// Set the "ui-ux" filter as default active
// 
// $(".web-design").addClass("active");

// Hide all elements by default
// 
// $(".flip").addClass("hide");

// Show elements that match the "ui-ux" filter
// 
// $(".flip.web-design").removeClass("hide").addClass("filter");

// Category filters
// $(".all").click(function () {
//   checkClass();
//   $(".project_card").toggleClass("filter");
// });

// $(".swiper-slide-active").change(function () {
//   checkClass();
//   $(".swiper-slide-active:not(.uiux)").toggleClass("hide").addClass("filter");
//   $(".project_card.web-design").toggleClass("filter");
// });

// $(".web-design").click(function () {
//   checkClass();
//   $(".flip:not(.web-design)").toggleClass("hide");
//   $(".flip.web-design").toggleClass("filter");
// });

// $(".ui-ux").click(function () {
//   checkClass();
//   $(".flip:not(.ui-ux)").toggleClass("hide");
//   $(".flip.ui-ux").toggleClass("filter");
// });

// $(".javaScript").click(function () {
//   checkClass();
//   $(".flip:not(.javaScript)").toggleClass("hide");
//   $(".flip.javaScript").toggleClass("filter");
// });

// $(".bootstrap").click(function () {
//   checkClass();
//   $(".flip:not(.bootstrap)").toggleClass("hide");
//   $(".flip.bootstrap").toggleClass("filter");
// });

// // Active tag
// $(".button").click(function () {
//   $(".button").removeClass("active");
//   $(this).addClass("active");
// });
var checkClass = function () {
  if ($(".flip").hasClass("hide")) {
    $(".flip").removeClass("hide");
  }
};

// Set the "ui-ux" filter as default active
$(".ui-ux").addClass("active");

// Hide all elements by default
$(".flip").addClass("hide");

// Show elements that match the "ui-ux" filter
$(".flip.ui-ux").removeClass("hide").addClass("filter");

// Category filters
$(".all").click(function () {
  checkClass();
  $(".project_card").toggleClass("filter");
});

$(".web-design").click(function () {
  checkClass();
  $(".flip:not(.web-design)").toggleClass("hide");
  $(".flip.web-design").toggleClass("filter");
});

$(".ui-ux").click(function () {
  checkClass();
  $(".flip:not(.ui-ux)").toggleClass("hide");
  $(".flip.ui-ux").toggleClass("filter");
});

$(".javaScript").click(function () {
  checkClass();
  $(".flip:not(.javaScript)").toggleClass("hide");
  $(".flip.javaScript").toggleClass("filter");
});

$(".bootstrap").click(function () {
  checkClass();
  $(".flip:not(.bootstrap)").toggleClass("hide");
  $(".flip.bootstrap").toggleClass("filter");
});

// Active tag
$(".button").click(function () {
  $(".button").removeClass("active");
  $(this).addClass("active");
});

// --------project-filtering End --------

// --------------swiper Slider start---------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      // spaceBetween: 50,
    },
  },
});

// --------------swiper Slider End---------

// $(".swiper-button-next").click(function () {
//   console.log("called");
//   // document.getElementById("item1").setAttribute("data", "counter: 1");
//   let btn = document.getElementsByClassName("swiper-button-next");

//   counter = btn[0].getAttribute("data-counter");
//   if (counter == null) {
//     btn[0].setAttribute("data-counter", 1);
//   } else {
//     counterData = parseInt(counter) + 1;
//     btn[0].setAttribute("data-counter", counterData);
//   }
//   console.log(counter);
//   // console.log(btn[0].getAttribute("data-counter"));

//   // $(".swiper-button-next").data("counter", 1);

//   // $(".button").removeClass("active");
//   // $(this).addClass("active");
// });

// $(".swiper-button-prev").click(function () {
//   console.log("called");
//   // document.getElementById("item1").setAttribute("data", "counter: 1");
//   let btn = document.getElementsByClassName("swiper-button-prev");

//   counter = btn[0].getAttribute("data-counter");
//   if (counter == null) {
//     btn[0].setAttribute("data-counter", 1);
//   } else {
//     counterData = parseInt(counter) - 1;
//     btn[0].setAttribute("data-counter", counterData);
//   }
//   console.log(counter);
//   // console.log(btn[0].getAttribute("data-counter"));

//   // $(".swiper-button-next").data("counter", 1);

//   // $(".button").removeClass("active");
//   // $(this).addClass("active");
// });
