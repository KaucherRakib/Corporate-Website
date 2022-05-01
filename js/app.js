$(function(){

// navbar menu fixed//
$(function(){

  let custom_navbar = $('.custom_navbar');
  let offsetValue = custom_navbar.offset().top;
 

  $(window).scroll(function(){
    let scrTop =  $(window).scrollTop();

    if(scrTop > offsetValue){
      custom_navbar.addClass('menufixed');
    } else{
      custom_navbar.removeClass('menufixed');
    }

  });

});

$(function(){

  let custom_navbar = $('.custom_navbar');
  let offsetValue = custom_navbar.offset().top;
 

  $(window).scroll(function(){
    let scrTop =  $(window).scrollTop();

    if(scrTop > offsetValue){
      custom_navbar.addClass('menufixed');
    } else{
      custom_navbar.removeClass('menufixed');
    }


//back to top btn scroll hide & show//
    if(scrTop > 100){
      $('.back_top').fadeIn();
    }else{
      $('.back_top').fadeOut();
    }
  });

});


//back to top btn js//
$('.back_top').click(function(){
    $('html,body').animate({
      scrollTop:0,
    })
});


// navbar js starts //
$('.toggler_btn').click(function(){
   $('#my_navbar ul').toggleClass('active_ul');
   $('.nav_logo').toggleClass('active_logo');
   $('.toggler_btn').toggleClass('active_btn');
});

$('.botstrap_nav_btn').click(function(){
   $('.botstrap_nav_btn').toggleClass('active_bts_btn');
});


// banner slider js//
$('.banner_slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow:'.banner_prev_btn',
   nextArrow:'.banner_next_btn',
   autoplay: true,
   autoplaySpeed: 3000
 });


 //portfolio slider js//
 $('.portfolio_slider').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   nextArrow: false,
   prevArrow: false,
   autoplay: true,
   autoplaySpeed: 2000,
 });


 //number part counter js//
 $(function(){
     $('.count-num').rCounter({
       duration: 50
     });
   });


//blog slider part js//
$(document).ready(function(){
  $('.slider-blog').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'.blog-prev',
    nextArrow:'.blog-next',

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]

  });
});

//testimonial text slider js//
$('.testimonial_text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testimonial_img',
  prevArrow:'.test-prev',
  nextArrow:'.test-next',
  autoplay: true,
  autoplaySpeed: 2000

});

$('.testimonial_img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  asNavFor: '.testimonial_text',
  prevArrow:'.test-prev',
  nextArrow:'.test-next',
  autoplay: true,
  autoplaySpeed: 2000
});


// cart slider js//
$('.cart-items').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 1000,
  nextArrow: false,
  prevArrow: false,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1
      }
    }
  ]
});


// js animation//
AOS.init({
  duration: 1700,
});








});