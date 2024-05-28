// ハンバーガー
$(function () {
    
    $(".hamburger").on("click", function() {
      $(".header").toggleClass("open");
    });
  
    $(".mask").on("click", function() {
      $(".header").removeClass("open");
    });
  
    $(".header_list a").on("click", function() {
      $(".header").removeClass("open");
    });
});


// header animation
$(window).on('load', function(){
    $('.header_list').addClass('header_anim');
});

// main animation
$(window).scroll(function () {
    $(".business, .works, .article").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

    //   if (scroll > target - windowHeight + $(this).outerHeight()) {
    //     // outerHeight()はpaddingを含めた高さを取得する
    //     $(this).addClass("main_anim");
    //   }

    if (scroll > target - windowHeight) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("main_anim");
      }
    });
  });

  // works_item / slick slider

  $('.works_item_image').slick({
    autoplay: false,
    dots: true,
    arrows: true,
  });
