$(document).ready(function () {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const mainAlpha = $(".alphabet");
  for (let index = 0; index < alphabet.length; index++) {
    $(mainAlpha).append(
      `<a href="#" class="alphabet-item">${alphabet[index]}</a>`
    );
  }
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".search_btn_main").click(function () {
    $(".header_from_result_main").slideToggle();
    $(".nav_wrapper_main").slideUp();
    $(".menu_btn i").removeClass("ti-x").addClass("ti-menu");
    $(".search_btn_main  i").toggleClass("ti-x");
  });

  $(".menu_btn").click(function () {
    $(".nav_wrapper_main").slideToggle();
    $(".header_from_result_main").slideUp();
    $(".menu_btn i").toggleClass("ti-x");
    $(".search_btn_main i").removeClass("ti-x").addClass("ti-search");
  });

  var swiper_thumb = new Swiper(".hero_slide_thumb", {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    speed: 800,
  });

  var swiper = new Swiper(".hero_bg_swiper", {
    spaceBetween: 0,
    effect: "fade",
    thumbs: {
      swiper: swiper_thumb,
    },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next.hero_slide_btn",
      prevEl: ".swiper-button-prev.hero_slide_btn",
    },
  });

  $(".hero_card_first").on("mousemove", function(event) {
    var card = $(this);
    var cardContent = card.find(".hero_card_content");
  
    // Calculate the rotation angles based on the mouse position
    var rotateX = (event.clientY - card.offset().top - card.height() / 2) / 20;
    var rotateY = (event.clientX - card.offset().left - card.width() / 2) / 20;
  
    // Apply the 3D rotation effect
    card.css({
      transform: "rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)",
    });
  
    cardContent.css({
      transform: "rotateX(" + rotateX + "deg) rotateY(" + -rotateY + "deg)",
    });
  });
  
  $(".hero_card_first").on("mouseleave", function() {
    // Reset the card's rotation when the mouse leaves
    $(this).css("transform", "rotateX(0deg) rotateY(0deg)");
    $(this)
      .find(".hero_card_content")
      .css("transform", "rotateX(0deg) rotateY(0deg)");
  });
  var swiper = new Swiper(".hero_card_slide", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true ,
    speed: 800,
    autoplay: {
      delay: 2050, // Autoplay delay in milliseconds (3 seconds in this example)
      disableOnInteraction: false, // Allow autoplay to continue after user interactions
    },
    navigation: {
      nextEl: ".swiper-button-next.hero_slide_btn",
      prevEl: ".swiper-button-prev.hero_slide_btn",
    },
  });
});
