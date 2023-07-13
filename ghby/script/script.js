$(document).ready(function(){
    $("#dd1").click(function(){
      $("#s1").slideToggle("slow");
      $("#s2").hide();
    });

    $("#dd2").click(function(){
        $("#s2").slideToggle("slow");
        $("#s1").hide();
    });
  });

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    // centeredSlides: true,
    // spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.fa-arrow-circle-left',
      prevEl: '.fa-arrow-circle-right',
    },
  });
  