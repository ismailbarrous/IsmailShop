document.getElementById("wb").style.display = "block";
jQuery(document).ready(function($) {
  $('.wb').css('display','none');
  $(".body").fadeIn(1000);
  var owl = $('.owl-carousel');
  var owl2 = $('.woocommerce-product-gallery__wrapper');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:10000,
      autoplayHoverPause:false
  });
  $('.woocommerce-product-gallery__image').append("<div class='bg'></div>");
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[3000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });
  $('img').each(function(i, el) {
      $(el).removeAttr("srcset");
  });
  $(window).resize(function(){
    $(".body").css({"opacity":"0","transition":"1s"});
    $(".body").css({"opacity":"1","transition":"1s"});
  });
  //$("span.woocommerce-Price-currencySymbol").html("DH");
    $(".sidebar-title").click(function() {
      if ($(window).width() < 992) {
        $(".wpfMainWrapper").slideToggle( "slow" );
      }
    });
    $('section.related h2:first-child').addClass("main-title").append( "<div class='line'></div>" );;
  $(window).scroll(function(e) {
    var y = $(document).scrollTop();
    var h = $(window).height();
    var t = $('li.product');
    var a = $('tr.cart_item');
    var m = $('.main-title');
    var s = $('.social');
    var c = $('.category');
    var b = $('.shop');
    var footer = $('.footer .box');
    t.each(function(i, el) {
      if ((y + h) > $(el).position().top + 100) {
        $(el).addClass("animate__fadeInUp");
      }
    });
    m.each(function(i, el) {
      if( (y+ h) > $(el).position().top + 150){
        $(el).addClass("animation1");
      }
    });
    s.each(function(i, el) {
      if( (y+ h) > $(el).position().top + 150){
        $(el).addClass("animate__animated animate__fadeInLeft");
      }
    });
    c.each(function(i, el) {
      if( (y+ h) > $(el).position().top + 100){
        $(el).addClass("animate__animated animate__backInRight");
      }
    });
    a.each(function(i, el) {
      if ((y + h) > $(el).position().top + 200) {
        $(el).addClass("animate__animated animate__fadeInLeft");
      }
    });
    footer.each(function(i, el) {
      if( (y+ h) > $(el).position().top + 150){
        $(el).addClass("animate__animated animate__fadeInLeft");
      }
    });
  });
});
